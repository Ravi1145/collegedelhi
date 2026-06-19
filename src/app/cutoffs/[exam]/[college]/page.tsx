import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getCutoff,
  getAllCutoffParams,
  examLabels,
  unitSuffix,
} from "@/data/cutoffs"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import CutoffChart from "@/components/ui/CutoffChart"

interface Props {
  params: Promise<{ exam: string; college: string }>
}

export async function generateStaticParams() {
  return getAllCutoffParams().map(({ exam, college }) => ({ exam, college }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exam, college } = await params
  const data = getCutoff(college, exam)
  if (!data) return {}
  const examLabel = examLabels[exam] ?? exam.toUpperCase()
  const sfx = unitSuffix[data.unit ?? "percentile"] ?? ""
  const latest = data.cutoffs[data.cutoffs.length - 1]
  return genMeta({
    title: `${data.college_short} ${examLabel} Cutoff 2026 | Category-wise Trend (2021–2026)`,
    description: `${data.college_name} ${examLabel} cutoff 2026 — Open: ${latest.open}${sfx}, OBC: ${latest.obc}${sfx}, SC: ${latest.sc}${sfx}. Year-wise trend 2021–2026 with chart. Check your admission chances.`,
    path: `/cutoffs/${exam}/${college}`,
    keywords: [
      `${data.college_short} ${examLabel} cutoff 2026`,
      `${data.college_short} cutoff 2026`,
      `${data.college_short} admission cutoff`,
      `${examLabel} cutoff ${data.college_short}`,
      `${data.college_short} category wise cutoff`,
    ],
  })
}

const CATEGORIES = [
  { key: "open", label: "Open / General", color: "blue"   },
  { key: "obc",  label: "OBC-NCL",        color: "orange" },
  { key: "sc",   label: "SC",              color: "green"  },
  { key: "st",   label: "ST",              color: "purple" },
] as const

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200"   },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  border: "border-green-200"  },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
}

export default async function CollegeCutoffPage({ params }: Props) {
  const { exam, college } = await params
  const data = getCutoff(college, exam)
  if (!data) notFound()

  const examLabel = examLabels[exam] ?? exam.toUpperCase()
  const sfx     = unitSuffix[data.unit ?? "percentile"] ?? ""
  const isRank  = data.unit === "rank"
  const isScore = data.unit === "score"

  const latest = data.cutoffs[data.cutoffs.length - 1]
  const prev   = data.cutoffs[data.cutoffs.length - 2]

  function getTrend(curr: number, prevVal: number) {
    if (isRank) return curr < prevVal ? "↑ Tougher" : curr > prevVal ? "↓ Easier" : "→ Stable"
    return curr > prevVal ? "↑ Tougher" : curr < prevVal ? "↓ Easier" : "→ Stable"
  }

  const unitHint = isRank
    ? "(lower rank = better)"
    : isScore
    ? "(higher score = better)"
    : "(higher percentile = better)"

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home",                url: "/" },
    { name: "Cutoffs",             url: "/cutoffs" },
    { name: `${examLabel} Cutoff`, url: `/cutoffs/${exam}` },
    { name: data.college_short,    url: `/cutoffs/${exam}/${college}` },
  ])

  const faqs = [
    {
      question: `What is the ${examLabel} cutoff for ${data.college_short} in 2026?`,
      answer: `The estimated ${examLabel} cutoff for ${data.college_name} in 2026 is ${latest.open}${sfx} for Open/General category, ${latest.obc}${sfx} for OBC-NCL, and ${latest.sc}${sfx} for SC${latest.st !== undefined ? `, ${latest.st}${sfx} for ST` : ""}. These are trend-based estimates — official 2026 cutoffs publish after ${examLabel} results.`,
    },
    {
      question: `Is ${latest.open}${sfx} enough for ${data.college_short}?`,
      answer: `${latest.open}${sfx} in ${examLabel} puts you at the boundary of the estimated 2026 Open category cutoff for ${data.college_short}. With exactly this score, admission depends on the round and seat availability. Scoring 1–2 ${isRank ? "ranks better (lower)" : "units higher"} gives a comfortable buffer. Apply in Round 1 for the best chance.`,
    },
    {
      question: `How has the ${examLabel} cutoff for ${data.college_short} changed over the years?`,
      answer: `${data.college_short} ${examLabel} Open category cutoff trend: ${data.cutoffs.slice(-4).map(c => `${c.year}: ${c.open}${sfx}`).join(", ")}. The cutoff has ${isRank ? (latest.open < data.cutoffs[0].open ? "tightened (lower rank needed each year)" : "remained broadly stable") : (latest.open > data.cutoffs[0].open ? "risen steadily, reflecting growing competition" : "remained broadly stable")} since ${data.cutoffs[0].year}.`,
    },
    {
      question: `What is the ${examLabel} cutoff for ${data.college_short} for OBC and SC?`,
      answer: `OBC-NCL cutoff at ${data.college_short} 2026: ${latest.obc}${sfx}. SC cutoff: ${latest.sc}${sfx}${latest.st !== undefined ? `. ST cutoff: ${latest.st}${sfx}` : ""}. Reserved category cutoffs are ${isRank ? "higher ranks (more relaxed)" : "lower"} than Open by approximately ${isRank ? Math.abs(latest.obc - latest.open).toLocaleString() + " ranks (OBC)" : (latest.open - latest.obc).toFixed(1) + " units (OBC)"}.`,
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
          <div className="max-w-4xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/cutoffs" className="hover:text-white">Cutoffs</Link>
              <span>›</span>
              <Link href={`/cutoffs/${exam}`} className="hover:text-white">{examLabel}</Link>
              <span>›</span>
              <span className="text-white">{data.college_short}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              {data.college_short} {examLabel} Cutoff 2026
            </h1>
            <p className="text-blue-200 text-sm mb-1">{data.college_name}</p>
            <p className="text-gray-400 text-xs">{unitHint} · Data: {data.cutoffs[0].year}–{latest.year}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">

          {/* 2026 Cutoff cards */}
          <div className="mb-8">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">
              {data.college_short} — {examLabel} Cutoff 2026 (Estimated)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CATEGORIES.map(({ key, label, color }) => {
                const val     = latest[key as keyof typeof latest] as number | undefined
                const prevVal = prev?.[key as keyof typeof prev]   as number | undefined
                if (val === undefined) return null
                const trend = prevVal !== undefined ? getTrend(val, prevVal) : null
                const cls   = colorClasses[color]
                return (
                  <div key={key} className={`rounded-2xl border p-4 ${cls.bg} ${cls.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${cls.text}`}>{label}</p>
                    <p className={`text-2xl font-extrabold ${cls.text}`}>
                      {isRank ? val.toLocaleString() : val}
                      <span className="text-sm font-normal">{sfx}</span>
                    </p>
                    {trend && <p className="text-xs text-gray-500 mt-1">{trend} vs {prev?.year}</p>}
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * 2026 estimates based on official {data.cutoffs[0].year}–{latest.year - 1} data. Official cutoffs publish after {examLabel} results (typically July–Aug 2026).
            </p>
          </div>

          {/* Trend Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
            <h2 className="text-lg font-extrabold text-gray-900 mb-1">
              Year-wise Cutoff Trend — {data.college_short} ({examLabel})
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              {data.cutoffs[0].year}–{latest.year} · All categories · {unitHint}
            </p>
            <CutoffChart data={data} height={280} />
          </div>

          {/* Year-wise table */}
          <div className="mb-10">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">
              {data.college_short} {examLabel} Cutoff — Year-wise Table
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1628] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Year</th>
                    <th className="px-4 py-3 text-center font-semibold">Open</th>
                    <th className="px-4 py-3 text-center font-semibold">OBC-NCL</th>
                    <th className="px-4 py-3 text-center font-semibold">SC</th>
                    <th className="px-4 py-3 text-center font-semibold">ST</th>
                    <th className="px-4 py-3 text-center font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {[...data.cutoffs].reverse().map((row, i, arr) => {
                    const nextRow = arr[i + 1]
                    const trend   = nextRow ? getTrend(row.open, nextRow.open) : null
                    const isLat   = row.year === latest.year
                    return (
                      <tr key={row.year} className={isLat ? "bg-blue-50 font-semibold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-bold text-gray-900">
                          {row.year}
                          {isLat && (
                            <span className="ml-1 text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full">Est.</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center text-blue-700 font-bold">
                          {isRank ? row.open.toLocaleString() : row.open}{sfx}
                        </td>
                        <td className="px-4 py-3 text-center text-orange-700">
                          {isRank ? row.obc.toLocaleString() : row.obc}{sfx}
                        </td>
                        <td className="px-4 py-3 text-center text-green-700">
                          {isRank ? row.sc.toLocaleString() : row.sc}{sfx}
                        </td>
                        <td className="px-4 py-3 text-center text-purple-700">
                          {row.st !== undefined ? `${isRank ? row.st.toLocaleString() : row.st}${sfx}` : "—"}
                        </td>
                        <td className="px-4 py-3 text-center text-xs text-gray-500">{trend ?? "—"}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analysis */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10 shadow-sm">
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">
              What the Cutoff Trend Means for You
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">→</span>
                <span>
                  <strong>Open category 2026:</strong>{" "}
                  {latest.open}{sfx} —{" "}
                  {isRank
                    ? `you need a ${examLabel} rank of ${latest.open.toLocaleString()} or better (lower) to qualify.`
                    : `you need ${latest.open}${sfx} or higher in ${examLabel} to be shortlisted.`}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold mt-0.5">→</span>
                <span>
                  <strong>OBC-NCL relaxation:</strong>{" "}
                  {isRank
                    ? `OBC candidates can have a rank up to ${latest.obc.toLocaleString()} — that's ${(latest.obc - latest.open).toLocaleString()} ranks of relaxation.`
                    : `OBC candidates need ${latest.obc}${sfx} — ${(latest.open - latest.obc).toFixed(1)} units below Open cutoff.`}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">→</span>
                <span>
                  <strong>SC/ST:</strong> SC cutoff is {isRank ? latest.sc.toLocaleString() : latest.sc}{sfx}
                  {latest.st !== undefined ? `, ST is ${isRank ? latest.st.toLocaleString() : latest.st}${sfx}` : ""}. Reserved category candidates have significantly relaxed cutoffs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 font-bold mt-0.5">→</span>
                <span>
                  <strong>5-year trend:</strong>{" "}
                  {isRank
                    ? latest.open < data.cutoffs[0].open
                      ? "Cutoff has tightened — lower ranks needed each year. Competition is rising."
                      : "Cutoff has remained broadly stable over the past 5 years."
                    : latest.open > data.cutoffs[0].open
                      ? `Cutoff has risen from ${data.cutoffs[0].open}${sfx} to ${latest.open}${sfx} — competition is growing.`
                      : `Cutoff has remained broadly stable around ${latest.open}${sfx}.`}
                </span>
              </li>
            </ul>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            FAQs — {data.college_short} {examLabel} Cutoff 2026
          </h2>
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

          {/* Related links */}
          <h2 className="text-base font-bold text-gray-900 mb-3">More Cutoffs &amp; Guides</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: `All ${examLabel} Cutoffs`, href: `/cutoffs/${exam}` },
              { label: "All Cutoffs",              href: "/cutoffs" },
              { label: "JEE Main Cutoff Delhi",    href: "/cutoffs/JEE Main" },
              { label: "CAT Cutoff MBA",           href: "/cutoffs/cat" },
              { label: "NEET Cutoff Delhi",        href: "/cutoffs/neet" },
              { label: `${data.college_short} Profile`, href: `/colleges/${college}` },
              { label: "College Predictor",        href: "/predictor" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold">Check if your score qualifies for {data.college_short}</p>
              <p className="text-blue-200 text-sm">Use our predictor or talk to a counsellor for a personalised plan.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">
                🎯 College Predictor
              </Link>
              <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">
                Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
