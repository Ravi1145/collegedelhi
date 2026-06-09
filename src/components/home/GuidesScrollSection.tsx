import Link from "next/link"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

export const revalidate = 300

// â”€â”€ Category badge colors â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CATEGORY_COLORS: Record<string, { bg: string; text: string; bar: string }> = {
  Engineering:    { bg: "bg-blue-50",    text: "text-blue-700",   bar: "from-blue-400 to-blue-600" },
  MBA:            { bg: "bg-red-50",  text: "text-red-800", bar: "from-red-400 to-red-700" },
  Exams:          { bg: "bg-purple-50",  text: "text-purple-700", bar: "from-purple-400 to-purple-600" },
  Medical:        { bg: "bg-red-50",     text: "text-red-700",    bar: "from-red-400 to-red-600" },
  Placements:     { bg: "bg-green-50",   text: "text-green-700",  bar: "from-green-400 to-green-600" },
  Scholarships:   { bg: "bg-teal-50",    text: "text-teal-700",   bar: "from-teal-400 to-teal-600" },
  Careers:        { bg: "bg-indigo-50",  text: "text-indigo-700", bar: "from-indigo-400 to-indigo-600" },
  "Fees & Finance": { bg: "bg-amber-50", text: "text-amber-700",  bar: "from-amber-400 to-amber-600" },
  "Student Life": { bg: "bg-pink-50",    text: "text-pink-700",   bar: "from-pink-400 to-pink-600" },
  Rankings:       { bg: "bg-cyan-50",    text: "text-cyan-700",   bar: "from-cyan-400 to-cyan-600" },
  // Backend categories
  Admission:      { bg: "bg-red-50",  text: "text-red-800", bar: "from-red-400 to-red-700" },
  Exam:           { bg: "bg-purple-50",  text: "text-purple-700", bar: "from-purple-400 to-purple-600" },
  College:        { bg: "bg-blue-50",    text: "text-blue-700",   bar: "from-blue-400 to-blue-600" },
  Career:         { bg: "bg-indigo-50",  text: "text-indigo-700", bar: "from-indigo-400 to-indigo-600" },
  Scholarship:    { bg: "bg-teal-50",    text: "text-teal-700",   bar: "from-teal-400 to-teal-600" },
  News:           { bg: "bg-cyan-50",    text: "text-cyan-700",   bar: "from-cyan-400 to-cyan-600" },
}

const DEFAULT_COLOR = { bg: "bg-gray-50", text: "text-gray-700", bar: "from-gray-400 to-gray-600" }

// â”€â”€ Normalised guide card shape â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
interface GuideCard {
  slug: string
  title: string
  excerpt: string
  author: string
  readTime: string
  category: string
  date: string
}

const BACKEND_API = "https://college-delhi-backend.vercel.app/api"

// â”€â”€ Fetch from backend API — only approved blogs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function fetchGuides(): Promise<GuideCard[]> {
  try {
    const res = await fetch(`${BACKEND_API}/blogs?status=approved&limit=12`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const data = await res.json()
    const raw: any[] = data.success ? (data.data || []) : []
    return raw.map(b => ({
      slug:     b.slug,
      title:    b.title,
      excerpt:  b.excerpt ?? "",
      author:   b.author ?? "CollegeDelhi",
      readTime: b.read_time ?? "5 min",
      category: b.category ?? "General",
      date:     b.publishedAt ?? b.createdAt ?? "",
    }))
  } catch {
    return []
  }
}

// â”€â”€ Single guide card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function GuideCard({ guide }: { guide: GuideCard }) {
  const colors = CATEGORY_COLORS[guide.category] ?? DEFAULT_COLOR
  const initial = guide.author[0]?.toUpperCase() ?? "C"

  return (
    <Link
      href={`/blog/${guide.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 overflow-hidden w-72 shrink-0"
    >
      {/* Top colour bar */}
      <div className={`h-1.5 bg-gradient-to-r ${colors.bar}`} />

      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Category + read time */}
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400 ml-auto">
            <Clock className="w-3 h-3" />
            {guide.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-accent transition-colors line-clamp-2 flex-1">
          {guide.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
          {guide.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-extrabold shrink-0"
              style={{ backgroundColor: "var(--color-navy)" }}
            >
              {initial}
            </div>
            <span className="text-[10px] text-gray-500 truncate max-w-[110px]">{guide.author}</span>
          </div>
          <span className="text-[10px] font-semibold text-accent group-hover:opacity-80 transition-opacity whitespace-nowrap">
            Read â†’
          </span>
        </div>
      </div>
    </Link>
  )
}

// â”€â”€ Main section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default async function GuidesScrollSection() {
  const guides = await fetchGuides()

  if (guides.length === 0) return null

  // Only scroll-loop when there are enough blogs (4+); otherwise show grid
  const useScroll = guides.length >= 4
  const looped = useScroll ? [...guides, ...guides] : guides

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #0A1628, #1E3A5F)" }}
            >
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                College Guides &amp; Insights
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Expert advice on admissions, fees, placements &amp; career planning
              </p>
            </div>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid layout when few blogs */}
        {!useScroll && (
          <div className={`grid gap-5 ${
            guides.length === 1 ? "grid-cols-1 max-w-xs" :
            guides.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-xl" :
            "grid-cols-1 sm:grid-cols-3"
          }`}>
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        )}

      </div>

      {/* Scrolling row — only when 4+ blogs */}
      {useScroll && (
        <div className="relative overflow-hidden guides-pause-on-hover mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-guides-scroll flex gap-4 py-2">
              {looped.map((guide, i) => (
                <GuideCard key={`${guide.slug}-${i}`} guide={guide} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile CTA */}
      <div className="mt-4 sm:hidden text-center">
        <Link href="/blog" className="text-xs font-semibold text-accent">
          View all guides â†’
        </Link>
      </div>
    </section>
  )
}

