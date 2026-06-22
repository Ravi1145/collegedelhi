import { Metadata } from "next"
import { generateMetadata as genMeta, generateBreadcrumbSchema } from "@/lib/seo"

import { Calendar, ExternalLink, Clock, Award, BookOpen, ChevronRight, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const revalidate = 60

export const metadata: Metadata = genMeta({
  title: "Entrance Exam Calendar 2026",
  description: "Complete entrance exam schedule 2026 for Delhi college admissions. Dates for JEE Main, JEE Main, NEET, CAT, SNAP, MAT and more.",
  path: "/exams",
  keywords: ["JEE Main 2026", "jee main 2026 Delhi", "neet 2026", "cat 2026", "snap 2026", "entrance exams Delhi"],
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.collegedelhi.com"

const TYPE_COLOR: Record<string, string> = {
  National:    "bg-blue-100 text-blue-700",
  State:       "bg-green-100 text-green-700",
  University:  "bg-purple-100 text-purple-700",
  International: "bg-red-100 text-red-800",
}

const CATEGORY_COLOR: Record<string, string> = {
  Engineering:  "bg-indigo-50 text-indigo-700 border-indigo-200",
  Medical:      "bg-red-50 text-red-700 border-red-200",
  Management:   "bg-amber-50 text-amber-700 border-amber-200",
  Law:          "bg-teal-50 text-teal-700 border-teal-200",
  Architecture: "bg-violet-50 text-violet-700 border-violet-200",
  Design:       "bg-pink-50 text-pink-700 border-pink-200",
}

async function fetchExams() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'https://college-delhi-backend.vercel.app/api'}/exams?status=published&limit=50`,
      { next: { revalidate: 300 } }
    )
    if (!res.ok) return null
    const data = await res.json()
    return data.success && data.data?.length ? data.data : null
  } catch { return null }
}

// Map backend exam to display format
function normalizeExam(e: any) {
  // find Application date from importantDates
  const appDate = e.importantDates?.find((d: any) => d.event?.toLowerCase().includes('application'))?.date || ''
  const examDate = e.importantDates?.find((d: any) => d.event?.toLowerCase().includes('exam'))?.date || ''
  const resultDate = e.importantDates?.find((d: any) => d.event?.toLowerCase().includes('result'))?.date || ''
  return {
    _id: e._id,
    name: e.name,
    fullName: e.fullName || e.name,
    conductedBy: e.conductedBy || '',
    level: e.type,
    streams: e.streams || [],
    category: e.category,
    applicationDate: appDate,
    examDate: examDate,
    resultDate: resultDate,
    website: e.officialWebsite || '',
    description: e.description || '',
    eligibility: e.eligibility?.details || '',
    totalMarks: e.totalMarks,
    totalQuestions: e.totalQuestions,
    duration: e.duration,
    examMode: e.examMode,
    totalCandidates: e.totalCandidates,
    highlights: e.highlights || [],
    patternSections: e.patternSections || [],
    slug: e.slug,
  }
}

export default async function ExamsPage() {
  const backendExams = await fetchExams()

  // Build display list — backend only (no static fallback so deleted exams don't reappear)
  const displayExams = backendExams
    ? backendExams.map(normalizeExam)
    : []

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Entrance Exams", url: `${BASE_URL}/exams` },
  ])

  return (
    <div className="bg-gray-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Entrance Exams</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Entrance Exam Calendar 2026</h1>
          <p className="text-blue-200 max-w-2xl mb-8">All important entrance exam dates for engineering, MBA, medical, law, and design courses in Delhi colleges.</p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Award, label: `${displayExams.length} Exams`, sub: "National, State & University" },
              { icon: Calendar, label: "Updated 2026", sub: "Latest exam calendar" },
              { icon: BookOpen, label: "All Streams", sub: "Engineering to Law" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-red-400" />
                </div>
                <div><p className="font-bold text-sm">{label}</p><p className="text-blue-300 text-xs">{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category quick filters (static scroll) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Engineering", "Medical", "Management", "Law", "Architecture", "Design"].map(cat => (
            <span key={cat} className={cn("px-3.5 py-1.5 rounded-full text-sm font-medium border cursor-default", cat === "All" ? "bg-red-600 text-white border-red-600" : (CATEGORY_COLOR[cat] || "bg-white border-gray-200 text-gray-600"))}>
              {cat}
            </span>
          ))}
        </div>

        {displayExams.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-6">
            <Award className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No exams published yet.</p>
            <p className="text-gray-400 text-sm mt-1">Admin panel se exams publish karein.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {displayExams.map((exam: any) => (
            <article key={exam._id || exam.name} className="bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all overflow-hidden">
              {/* Top accent */}
              <div className={cn("h-1 w-full", CATEGORY_COLOR[exam.category]?.split(' ')[0] || 'bg-gray-200')} />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-gray-900">{exam.name}</h2>
                      <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", TYPE_COLOR[exam.level] || "bg-gray-100 text-gray-600")}>
                        {exam.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{exam.fullName}</p>
                    {exam.conductedBy && <p className="text-xs text-gray-400 mt-0.5">{exam.conductedBy}</p>}
                  </div>
                  {exam.website && (
                    <a href={exam.website} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors">
                      Apply <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">{exam.description}</p>

                {/* Highlights row */}
                {exam.highlights?.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {exam.highlights.slice(0, 4).map((h: any, i: number) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">{h.title}</span>
                        <span className="text-xs font-bold text-gray-700">{h.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dates grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {exam.applicationDate && (
                    <div className="bg-gray-50 rounded-xl p-2.5">
                      <p className="text-[10px] text-gray-500 mb-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> Application</p>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">{exam.applicationDate}</p>
                    </div>
                  )}
                  {exam.examDate && (
                    <div className="bg-red-50 rounded-xl p-2.5">
                      <p className="text-[10px] text-red-700 mb-0.5 flex items-center gap-1"><Clock className="w-3 h-3" /> Exam Date</p>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">{exam.examDate}</p>
                    </div>
                  )}
                  {exam.resultDate && (
                    <div className="bg-green-50 rounded-xl p-2.5">
                      <p className="text-[10px] text-green-600 mb-0.5">Result</p>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">{exam.resultDate}</p>
                    </div>
                  )}
                </div>

                {/* Streams */}
                {exam.streams?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {exam.streams.map((s: string) => (
                      <span key={s} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                    {exam.totalCandidates && <span className="text-xs text-gray-400 self-center ml-1">{exam.totalCandidates} candidates</span>}
                  </div>
                )}

                {/* Eligibility */}
                {exam.eligibility && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <span className="font-semibold text-gray-700">Eligibility: </span>{exam.eligibility}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-7 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Not sure which exam to appear for?</h2>
          <p className="text-gray-400 mb-5">Let our AI analyze your profile and recommend the right exams for your dream Delhi college.</p>
          <Link href="/ai-finder" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Get AI Guidance
          </Link>
        </div>
      </div>
    </div>
  )
}

