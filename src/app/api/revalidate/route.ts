/**
 * GET /api/revalidate?secret=<ADMIN_PASSWORD>&path=/blog/some-slug
 *
 * On-demand ISR cache busting. Call this from CI/CD, backend webhooks,
 * or any external tool to force a specific page to re-render from the DB.
 *
 * Examples:
 *   /api/revalidate?secret=xxx&path=/blog
 *   /api/revalidate?secret=xxx&path=/colleges/DTU Delhi-college-of-engineering-delhi
 *   /api/revalidate?secret=xxx&path=all   (busts all known listing pages)
 */
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

const LISTING_PATHS = [
  '/blog',
  '/colleges',
  '/engineering-colleges-delhi',
  '/mba-colleges-delhi',
  '/medical-colleges-delhi',
  '/arts-colleges-delhi',
  '/bca-colleges-delhi',
  '/pharmacy-colleges-delhi',
  '/law-colleges-delhi',
  '/design-colleges-delhi',
  '/government-colleges-delhi',
  '/top-10-engineering-colleges-in-delhi',
  '/top-10-mba-colleges-in-delhi',
  '/naac-a-plus-colleges-delhi',
  '/jee-colleges-delhi',
  '/neet-colleges-delhi',
  '/btech-colleges-delhi',
  '/bba-colleges-delhi',
  '/bca-colleges-delhi',
  '/low-fee-colleges-delhi',
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const path   = searchParams.get('path')

  if (!secret || secret !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  if (!path) {
    return NextResponse.json({ error: 'path parameter is required' }, { status: 400 })
  }

  const revalidated: string[] = []

  if (path === 'all') {
    LISTING_PATHS.forEach((p) => { revalidatePath(p); revalidated.push(p) })
  } else {
    revalidatePath(path)
    revalidated.push(path)
  }

  return NextResponse.json({
    revalidated,
    timestamp: new Date().toISOString(),
    message: `${revalidated.length} path(s) revalidated successfully`,
  })
}
