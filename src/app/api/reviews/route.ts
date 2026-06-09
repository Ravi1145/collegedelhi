import { NextRequest, NextResponse } from "next/server"

const BACKEND = "https://college-delhi-backend.vercel.app/api"

/** Map backend Review fields â†’ frontend Review interface */
function mapReview(r: Record<string, unknown>) {
  return {
    id:           String(r._id ?? r.id ?? ""),
    student_name: String(r.userName ?? r.student_name ?? "Anonymous"),
    course:       String(r.course ?? ""),
    year:         String(r.year ?? ""),
    rating:       Number(r.rating ?? 0),
    title:        String(r.title ?? ""),
    body:         String(r.comment ?? r.review_body ?? r.body ?? ""),
    pros:         Array.isArray(r.pros) ? r.pros as string[] : [],
    cons:         Array.isArray(r.cons) ? r.cons as string[] : [],
    created_at:   String(r.createdAt ?? r.created_at ?? new Date().toISOString()),
  }
}

// â”€â”€ GET /api/reviews?college_slug=DTU Delhi â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("college_slug")
  if (!slug) return NextResponse.json({ reviews: [], total: 0, avg: 0 })

  try {
    const res = await fetch(
      `${BACKEND}/reviews?college_slug=${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    )
    if (!res.ok) return NextResponse.json({ reviews: [], total: 0, avg: 0 })

    const data = await res.json()
    const rawReviews: Record<string, unknown>[] = data.reviews ?? data.data ?? []
    const reviews = rawReviews.map(mapReview)
    const avg = typeof data.avg === "number" ? data.avg : (
      reviews.length
        ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10
        : 0
    )

    return NextResponse.json({ reviews, total: data.total ?? reviews.length, avg })
  } catch {
    return NextResponse.json({ reviews: [], total: 0, avg: 0 })
  }
}

// â”€â”€ POST /api/reviews â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { college_slug, college_name, student_name, rating, review_body, title, pros, cons, course, year, userEmail } = body

    if (!college_slug) return NextResponse.json({ error: "college_slug required" }, { status: 400 })
    if (!student_name?.trim()) return NextResponse.json({ error: "Name is required" }, { status: 400 })
    if (!rating || rating < 1 || rating > 5) return NextResponse.json({ error: "Rating must be 1–5" }, { status: 400 })
    if (!review_body?.trim() || review_body.trim().length < 10) return NextResponse.json({ error: "Review must be at least 10 characters" }, { status: 400 })

    const res = await fetch(`${BACKEND}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        college_slug,
        college_name,
        student_name,
        userName: student_name,
        userEmail: userEmail ?? "",
        rating,
        title: title ?? "",
        comment: review_body,
        review_body,
        pros:  Array.isArray(pros)  ? pros.filter(Boolean)  : (typeof pros === "string"  ? pros.split("\n").map((s: string) => s.trim()).filter(Boolean) : []),
        cons:  Array.isArray(cons)  ? cons.filter(Boolean)  : (typeof cons === "string"  ? cons.split("\n").map((s: string) => s.trim()).filter(Boolean) : []),
        course: course ?? "",
        year:   year ?? "",
      }),
    })

    const json = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: json.message ?? "Failed to submit review" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: "Review submitted! It will appear after moderation (1–2 days)."
    })
  } catch {
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 })
  }
}
