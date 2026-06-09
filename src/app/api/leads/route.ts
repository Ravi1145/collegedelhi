import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { leadSchema } from '@/lib/validations'
import { insertLead, getAllLeads } from '@/lib/db'

const BACKEND_API = 'https://college-delhi-backend.vercel.app/api'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = leadSchema.parse(body)
    const referer = req.headers.get('referer') ?? ''

    // â”€â”€ Primary: forward to Express backend â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    try {
      const backendRes = await fetch(`${BACKEND_API}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:             validated.name,
          phone:            validated.phone,
          email:            validated.email,
          stream:           validated.stream,
          message:          validated.message,
          source:           validated.source,
          collegeInterest:  validated.college_interest,
          collegeSlug:      validated.college_slug,
          course:           validated.course_interest,
          preferredContact: validated.preferred_contact,
          preferredTime:    validated.preferred_time,
          utm_source:       validated.utm_source,
          utm_medium:       validated.utm_medium,
          utm_campaign:     validated.utm_campaign,
          utm_content:      validated.utm_content,
          sourceUrl:        referer || validated.page_url,
        }),
      })

      if (backendRes.ok) {
        const data = await backendRes.json()
        return NextResponse.json({
          success:    data.success ?? true,
          bookingRef: data.bookingRef,
          leadId:     data.data?.id,
          message:    data.message ?? 'Thank you! Our counsellor will contact you within 2 hours.',
        })
      }

      // Backend returned non-OK — log and fall through to email fallback
      const errText = await backendRes.text().catch(() => '')
      console.error('[leads] backend returned', backendRes.status, errText)
    } catch (backendErr) {
      console.error('[leads] backend unreachable:', backendErr)
    }

    // â”€â”€ Fallback: send email notification â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const leadId = await insertLead({ ...validated, page_url: referer })
    return NextResponse.json({
      success: true,
      leadId,
      message: 'Thank you! Our counsellor will contact you within 2 hours.',
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 })
    }
    console.error('Lead save error:', error)
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const adminKey = req.headers.get('x-admin-key')
  if (adminKey !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { searchParams } = new URL(req.url)
  const result = await getAllLeads({
    status: searchParams.get('status') ?? undefined,
    source: searchParams.get('source') ?? undefined,
    stream: searchParams.get('stream') ?? undefined,
    search: searchParams.get('search') ?? undefined,
    page: parseInt(searchParams.get('page') ?? '1'),
    limit: parseInt(searchParams.get('limit') ?? '50'),
  })
  return NextResponse.json(result)
}
