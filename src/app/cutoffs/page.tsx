import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { cutoffsData, examLabels, streamLabels } from "@/data/cutoffs"

export const metadata: Metadata = genMeta({
  title: "JEE Main JEE NEET Cutoffs for Delhi Colleges 2026",
  description: "Year-wise cutoffs (2020–2026) for top Delhi colleges. JEE Main, NEET, CAT cutoffs for DTU Delhi, NSUT, IIIT Delhi, FMS Delhi, AIIMS",
  path: "/cutoffs",
  keywords: [
    "JEE Main cutoff 2026 Delhi colleges",
    "jee main cutoff Delhi 2026",
    "neet cutoff Delhi colleges 2026",
    "DTU Delhi cutoff 2026",
    "FMS Delhi CAT cutoff 2026",
    "afmc neet cutoff 2026",
    "Delhi college admission cutoff",
    "engineering college cutoff Delhi",
    "mba college cutoff Delhi",
    "medical college cutoff Delhi",
  ],
})

const exams = [
  { key: "jee",     label: "JEE Main", desc: "National entrance for DTU, NSUT, IGDTUW, IIIT Delhi (JAC Delhi counselling)", icon: "", stream: "Engineering" },
  { key: "neet",    label: "NEET UG",  desc: "For MBBS — AIIMS Delhi, Vardhman Mahavir Medical College, ABVIMS", icon: "", stream: "Medical" },
  { key: "cat",     label: "CAT",      desc: "Top MBA colleges — FMS Delhi, MDI Gurgaon (CAT route)", icon: "", stream: "MBA" },
]

const faqs = [
  {
    question: "What is the JEE Main cutoff for DTU Delhi in 2026?",
    answer: "DTU Delhi JEE Main cutoff 2026 (estimated): Open — 99.8 percentile, OBC — 98.7 percentile, SC — 95.5 percentile, ST — 93.0 percentile. DTU Delhi consistently has the highest JEE Main cutoff among Delhi engineering colleges. Apply early for CAP registration.",
  },
  {
    question: "Can I get admission in a Delhi engineering college with 90 percentile JEE Main?",
    answer: "With 90 percentile JEE Main, options narrow considerably — DTU and NSUT typically require 97+ percentile for most branches. Use CollegeDelhi's College Predictor for a personalized list of realistic options based on your exact percentile and category.",
  },
  {
    question: "What NEET score is needed for AIIMS Delhi?",
    answer: "AIIMS Delhi's NEET cutoff is among the highest in India and varies each year — check the official MCC All India Quota cutoff data for the current year rather than relying on past-year estimates. Admission is entirely through NEET UG; there is no separate entrance test.",
  },
  {
    question: "What is the CAT cutoff for FMS Delhi MBA?",
    answer: "FMS Delhi admits through CAT, typically requiring 98+ percentile for a shortlist, followed by Written Ability Test (WAT) and Personal Interview (PI). FMS Delhi's total MBA fees are approximately ₹55,000 — among the best ROI MBA programs in India.",
  },
  {
    question: "Are 2026 cutoffs available or just estimates?",
    answer: "JEE Main 2026 results will be declared in May–June 2026. Official cutoffs from CET Cell will follow in July during JAC Delhi Rounds. The 2026 figures shown here are trend-based estimates from 2020–2025 official data. Actual cutoffs may vary ±0.5–2 percentile points. Always verify with the official JEE Main website.",
  },
]

export default function CutoffsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cutoffs", url: "/cutoffs" },
  ])
  const faqSchema = generateFAQSchema(faqs)

  // Group cutoffs by exam
  const byExam: Record<string, typeof cutoffsData> = {}
  for (const c of cutoffsData) {
    if (!byExam[c.exam]) byExam[c.exam] = []
    byExam[c.exam].push(c)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#0D3B2E] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">Cutoffs 2026</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Delhi College Cutoffs 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-5">
              Year-wise cutoffs (2020–2026) for JEE Main, JEE, NEET, SNAP & CAT at top Delhi colleges. Check your admission chances across all categories.
            </p>
            <div className="flex flex-wrap gap-3">
              {["JEE Main", "JEE Main", "NEET", "SNAP", "CAT"].map((e) => (
                <span key={e} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full font-medium">{e}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

          {/* Exam cards */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Browse by Entrance Exam</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {exams.map((exam) => {
                const count = (byExam[exam.key] || []).length
                return (
                  <div key={exam.key} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{exam.icon}</span>
                      <div>
                        <h3 className="font-extrabold text-gray-900 text-base">{exam.label}</h3>
                        <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{exam.stream}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{exam.desc}</p>
                    <div className="space-y-1">
                      {(byExam[exam.key] || []).slice(0, 4).map((c) => (
                        <Link
                          key={c.college_slug}
                          href={`/cutoffs/${exam.key}/${c.college_slug}`}
                          className="flex items-center justify-between text-xs text-gray-700 hover:text-red-700 py-1 border-b border-gray-50 last:border-0"
                        >
                          <span className="font-medium">{c.college_short}</span>
                          <span className="text-gray-400">
                            Open: {c.cutoffs[c.cutoffs.length - 1].open}
                            {c.unit !== "rank" ? (c.unit === "score" ? " marks" : " %ile") : " rank"}
                          </span>
                        </Link>
                      ))}
                    </div>
                    {count > 0 && (
                      <p className="text-xs text-red-700 font-semibold mt-2">{count} college{count > 1 ? "s" : ""} with data →</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* All cutoff pages grid */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">All Cutoff Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cutoffsData.map((c) => {
                const latest = c.cutoffs[c.cutoffs.length - 1]
                return (
                  <Link
                    key={`${c.exam}-${c.college_slug}`}
                    href={`/cutoffs/${c.exam}/${c.college_slug}`}
                    className="bg-white rounded-xl border border-gray-100 p-3.5 hover:shadow-md hover:border-red-200 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900 text-sm">{c.college_short}</span>
                      <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-semibold">
                        {examLabels[c.exam] ?? c.exam.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 mb-2 truncate">{c.college_name}</p>
                    <div className="flex gap-2 text-[11px]">
                      <span className="text-blue-700 font-semibold">Open: {latest.open}</span>
                      <span className="text-red-800">OBC: {latest.obc}</span>
                      <span className="text-green-700">SC: {latest.sc}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions — Delhi College Cutoffs 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                    {faq.question}
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Know Your Exact Chances in 30 Seconds</h2>
            <p className="text-gray-300 text-sm mb-4">Enter your score and get a personalized college shortlist based on 2026 cutoffs.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/predictor" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Try College Predictor
              </Link>
              <Link href="/counselling" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                Book Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

