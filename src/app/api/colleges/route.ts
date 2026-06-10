import { NextRequest, NextResponse } from 'next/server'
import { getAllColleges, DBCollege } from '@/lib/db'
import type { College } from '@/types'
import { allDelhiNCRColleges, CollegeEntry } from '@/data/delhiCollegesData'

function mapStaticToCollege(e: CollegeEntry, index: number): College {
  const feesMatch = e.fees.match(/[\d.]+/)
  const feesNum = feesMatch ? Math.round(parseFloat(feesMatch[0]) * 100000) : 100000
  const placementMatch = e.avgPlacement.match(/₹([\d.]+)\s*LPA/)
  const placement = placementMatch ? Math.round(parseFloat(placementMatch[1]) * 100000) : 0
  const naacValid = ['A++', 'A+', 'A', 'B++', 'B+'].includes(e.naac) ? e.naac as College['naac'] : 'A'
  const typeMap: Record<string, College['type']> = {
    'Government': 'Government', 'Government-Aided': 'Government',
    'Central University': 'Government', 'Autonomous': 'Autonomous',
    'Deemed': 'Deemed', 'Private': 'Private',
  }
  const streamMap: Record<string, College['stream']> = {
    'Engineering': 'Engineering', 'MBA': 'MBA', 'Medical': 'Medical',
    'Law': 'Law', 'Architecture': 'Architecture', 'Design': 'Architecture',
    'Arts': 'Arts & Science', 'Commerce': 'Arts & Science',
  }
  const primaryStream = e.streams[0] ?? ''
  const stream = Object.entries(streamMap).find(([k]) => primaryStream.toLowerCase().includes(k.toLowerCase()))?.[1] ?? 'Engineering'
  return {
    id: index + 1,
    slug: e.slug,
    name: e.name,
    shortName: e.name.split('—')[0].trim().split(' ').slice(0, 3).join(' '),
    type: typeMap[e.type] ?? 'Private',
    established: e.established ?? 2000,
    affiliation: e.affiliation ?? '',
    naac: naacValid,
    nirfRank: e.nirf ?? null,
    location: `${e.location}, ${e.city}`,
    address: `${e.location}, ${e.city}`,
    courses: e.streams,
    specializations: [],
    feesRange: { min: feesNum, max: Math.round(feesNum * 1.3) },
    avgPlacement: placement,
    highestPlacement: Math.round(placement * 3),
    topRecruiters: [],
    entranceExams: [],
    hostel: false,
    rating: 4.0,
    reviewCount: 0,
    reviews: [],
    tags: [e.city, e.type],
    description: e.highlight,
    highlights: [e.highlight],
    website: '',
    phone: '',
    email: '',
    stream,
    isFeatured: (e.nirf ?? 999) < 100,
  }
}

function mapDBToCollege(db: DBCollege, index: number): College {
  return {
    id:                db.id ?? index,
    slug:              db.slug,
    name:              db.name,
    shortName:         db.short_name ?? db.name,
    type:              (db.type as College['type']) ?? 'Private',
    established:       db.established ?? 2000,
    affiliation:       db.affiliation ?? '',
    naac:              (db.naac_grade as College['naac']) ?? 'A',
    nirfRank:          db.nirf_rank ?? null,
    location:          db.city ? `${db.city}, Delhi` : 'Delhi, Delhi',
    address:           db.address ?? db.city ?? 'Delhi',
    courses:           db.courses ?? [],
    specializations:   db.specializations ?? [],
    feesRange:         { min: db.fees_min ?? 0, max: db.fees_max ?? 0 },
    avgPlacement:      db.avg_placement ?? 0,
    highestPlacement:  db.highest_pkg ?? 0,
    topRecruiters:     db.top_recruiters ?? [],
    entranceExams:     db.entrance_exams ?? [],
    hostel:            db.hostel ?? false,
    rating:            db.rating ?? 0,
    reviewCount:       db.review_count ?? 0,
    reviews:           [],
    tags:              db.tags ?? [],
    description:       db.description ?? '',
    highlights:        db.highlights ?? [],
    website:           db.website ?? '',
    phone:             db.phone ?? '',
    email:             db.email ?? '',
    image:             db.image_url ?? undefined,
    logo_base64:       db.logo_base64 ?? undefined,
    stream:            (db.stream as College['stream']) ?? 'Engineering',
    isFeatured:        db.isFeatured ?? false,
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const stream   = searchParams.get('stream')   ?? undefined
    const city     = searchParams.get('city')     ?? undefined
    const featured = searchParams.get('featured') ?? undefined
    const limit    = Number(searchParams.get('limit') ?? '200')

    const { colleges } = await getAllColleges({ status: 'published', stream, city, featured, limit })

    let mapped: College[]
    if (colleges.length > 0) {
      mapped = colleges.map((c, i) => mapDBToCollege(c, i))
    } else {
      // Backend unavailable — fall back to static data
      let fallback = allDelhiNCRColleges
      if (stream) fallback = fallback.filter(e => e.streams.some(s => s.toLowerCase().includes(stream.toLowerCase())))
      if (city)   fallback = fallback.filter(e => e.city.toLowerCase().includes(city.toLowerCase()))
      mapped = fallback.slice(0, limit).map((e, i) => mapStaticToCollege(e, i))
    }

    return NextResponse.json(
      { colleges: mapped, total: mapped.length },
      { headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' } }
    )
  } catch (err) {
    console.error('[GET /api/colleges]', err)
    return NextResponse.json({ colleges: [], total: 0 })
  }
}
