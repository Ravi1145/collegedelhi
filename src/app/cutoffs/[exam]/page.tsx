import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getCutoffsByExam,
  examLabels,
  examDescriptions,
  unitSuffix,
} from "@/data/cutoffs"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"

interface Props {
  params: Promise<{ exam: string }>
}

export async function generateStaticParams() {
  const exams = ["JEE Main", "jee", "neet", "cat", "snap", "ipu-cet", "clat"]
  return exams.map((exam) => ({ exam }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exam } = await params
  const label = examLabels[exam] ?? exam.toUpperCase()
  return genMeta({
    title: `${label} Cutoff 2026 — Delhi Colleges | Category-wise Trend`,
    description: `${label} cutoff 2026 for top Delhi colleges — Open, OBC, SC, ST category-wise. Year-wise trend (2021–2026) to check your admission chances.`,
    path: `/cutoffs/${exam}`,
    keywords: [
      `${label} cutoff Delhi 2026`,
      `${label} cutoff 2026`,
      `Delhi college ${label} cutoff`,
      `${label} cutoff category wise`,
    ],
  })
}

export default async function ExamCutoffPage({ params }: Props) {
  const { exam } = await params
  const colleges = getCutoffsByExam(exam)
  if (colleges.length === 0) notFound()

  const label = examLabels[exam] ?? exam.toUpperCase()
  const desc = examDescriptions[exam] ?? `${label} cutoffs for Delhi colleges`

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cutoffs", url: "/cutoffs" },
    { name: `${label} Cutoff`, url: `/cutoffs/${exam}` },
  ])

  const faqs = [
    {
      question: `What is the ${label} cutoff for 2026?`,
      answer: `The ${label} 2026 cutoffs for top Delhi colleges range from ${Math.min(...colleges.map(c => c.cutoffs[c.cutoffs.length - 1].open))} to ${Math.max(...colleges.map(c => c.cutoffs[c.cutoffs.length - 1].open))} (Open category). Click any college below to see the full year-wise trend from 2021 to 2026.`,
    },
    {
      question: `How are ${label} cutoffs calculated for Delhi colleges?`,
      answer: `${label} cutoffs are the minimum score/percentile/rank required in the latest counselling round for a particular category (Open/OBC/SC/ST). Cutoffs vary by round — early rounds are stricter; spot rounds are more relaxed. These figures reflect Round 1 / shortlist cutoffs.`,
    },
    {
      question: `Are these 2026 ${label} cutoffs official or estimated?`,
      answer: `The 2026 figures are trend-based estimates derived from official 2021–2025 counselling data. Actual 2026 cutoffs will be published after ${label} results (typically July–August 2026). The trend lines help you gauge your chances ± 1–2 units.`,
    },
  ]
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#0D3B2E] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/cutoffs" className="hover:text-white">Cutoffs</Link>
              <span>›</span>
              <span className="text-white">{label}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              {label} Cutoff 2026 — Delhi Colleges
            </h1>
            <p className="text-gray-300 text-base max-w-2xl mb-4">{desc}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Open", "OBC", "SC", "ST"].map((cat) => (
                <span key={cat} className="bg-white/10 text-white px-3 py-1 rounded-full font-medium">{cat}</span>
              ))}
              <span className="bg-white/10 text-white px-3 py-1 rounded-full font-medium">2021–2026 Trend</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* College cards */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">
            {colleges.length} Colleges with {label} Cutoff Data
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {colleges.map((c) => {
              const latest = c.cutoffs[c.cutoffs.length - 1]
              const suffix = unitSuffix[c.unit ?? "percentile"] ?? ""
              const prev = c.cutoffs[c.cutoffs.length - 2]
              const trend = prev
                ? c.unit === "rank"
                  ? latest.open < prev.open ? "↓ Tougher" : latest.open > prev.open ? "↑ Easier" : "→ Stable"
                  : latest.open > prev.open ? "↑ Tougher" : latest.open < prev.open ? "↓ Easier" : "→ Stable"
                : null

              return (
                <Link
                  key={c.college_slug}
                  href={`/cutoffs/${exam}/${c.college_slug}`}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-red-200 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-bold text-gray-900 group-hover:text-red-700 transition-colors">{c.college_short}</span>
                    {trend && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${trend.startsWith("↑") ? "bg-red-50 text-red-700" : trend.startsWith("↓") && c.unit === "rank" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                        {trend}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-1">{c.college_name}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-blue-500 font-medium mb-0.5">Open 2026</p>
                      <p className="font-bold text-blue-900">{latest.open}{suffix}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-2">
                      <p className="text-orange-500 font-medium mb-0.5">OBC 2026</p>
                      <p className="font-bold text-orange-900">{latest.obc}{suffix}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2">
                      <p className="text-green-600 font-medium mb-0.5">SC 2026</p>
                      <p className="font-bold text-green-900">{latest.sc}{suffix}</p>
                    </div>
                    {latest.st !== undefined && (
                      <div className="bg-purple-50 rounded-lg p-2">
                        <p className="text-purple-500 font-medium mb-0.5">ST 2026</p>
                        <p className="font-bold text-purple-900">{latest.st}{suffix}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-red-600 font-semibold mt-3">View full trend →</p>
                </Link>
              )
            })}
          </div>

          {/* Quick cutoff table */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">{label} 2026 Cutoff — Quick Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left">College</th>
                  <th className="px-4 py-3 text-center">Open</th>
                  <th className="px-4 py-3 text-center">OBC</th>
                  <th className="px-4 py-3 text-center">SC</th>
                  <th className="px-4 py-3 text-center">ST</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c, i) => {
                  const latest = c.cutoffs[c.cutoffs.length - 1]
                  const suffix = unitSuffix[c.unit ?? "percentile"] ?? ""
                  return (
                    <tr key={c.college_slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3">
                        <Link href={`/cutoffs/${exam}/${c.college_slug}`} className="font-semibold text-gray-900 hover:text-red-700 text-sm">
                          {c.college_short}
                        </Link>
                        <p className="text-xs text-gray-400 truncate max-w-[200px]">{c.college_name}</p>
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-blue-700">{latest.open}{suffix}</td>
                      <td className="px-4 py-3 text-center text-orange-700">{latest.obc}{suffix}</td>
                      <td className="px-4 py-3 text-center text-green-700">{latest.sc}{suffix}</td>
                      <td className="px-4 py-3 text-center text-purple-700">{latest.st !== undefined ? `${latest.st}${suffix}` : "—"}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-8">* 2026 figures are trend-based estimates. Official cutoffs publish after {label} results.</p>

          {/* FAQs */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">FAQs — {label} Cutoff 2026</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f) => (
              <details key={f.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                  {f.question}
                  <span className="text-red-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>

          {/* Related */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: "All Cutoffs", href: "/cutoffs" },
              { label: "JEE Main Cutoff Delhi", href: "/cutoffs/JEE Main" },
              { label: "NEET Cutoff Delhi", href: "/cutoffs/neet" },
              { label: "CAT Cutoff Delhi MBA", href: "/cutoffs/cat" },
              { label: "IPU CET Cutoff", href: "/cutoffs/ipu-cet" },
              { label: "CLAT Cutoff Delhi", href: "/cutoffs/clat" },
              { label: "College Predictor", href: "/predictor" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Check Your Admission Chances</h2>
            <p className="text-gray-300 text-sm mb-4">Enter your {label} score and get a personalised list of Delhi colleges you can target.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/predictor" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                College Predictor
              </Link>
              <Link href="/counselling" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
