import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "IMI Delhi vs FORE School 2026",
  description: "IMI Delhi vs FORE School of Management 2026: fees (₹22L vs ₹18L), CAT cutoff, placements (₹17 LPA vs ₹14 LPA), campus, accreditation, recruiters",
  path: "/imi-delhi-vs-fore",
  keywords: ["IMI Delhi vs FORE School","IMI vs FORE 2026","IMI Delhi FORE comparison MBA","FORE School vs IMI Delhi placements","IMI Delhi better than FORE","which MBA college Delhi IMI or FORE"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "International Management Institute, Delhi",
    "b": "FORE School of Management, Delhi"
  },
  {
    "param": "Program",
    "a": "PGDM (2 years)",
    "b": "PGDM / PGDM-IB (2 years)"
  },
  {
    "param": "Established",
    "a": "1981",
    "b": "1981"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#48 (Management)",
    "b": "#55 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "AMBA, AICTE, NBA",
    "b": "AICTE, NBA, South Asian QS ranked"
  },
  {
    "param": "Admission",
    "a": "CAT 90+ percentile",
    "b": "CAT 85+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹22L (2 years)",
    "b": "₹18L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹17 LPA",
    "b": "₹14 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹42 LPA",
    "b": "₹30 LPA"
  },
  {
    "param": "Batch Size",
    "a": "~250 students",
    "b": "~240 students"
  },
  {
    "param": "Campus Location",
    "a": "Qutab Institutional Area, South Delhi",
    "b": "Qutab Institutional Area, South Delhi"
  },
  {
    "param": "International Exchange",
    "a": "40+ partner universities",
    "b": "20+ partner universities"
  },
  {
    "param": "Specialisations",
    "a": "Finance, Marketing, HR, Operations, IB",
    "b": "Finance, Marketing, HR, IB (PGDM-IB)"
  }
]

const faqs = [
  {
    "question": "Is IMI Delhi better than FORE School?",
    "answer": "Yes, IMI Delhi is ranked higher (NIRF #48 vs FORE #55), has higher average placements (₹17 LPA vs ₹14 LPA), AMBA global accreditation, and more international exchange programs. However, it costs ₹4L more. For students with 90+ CAT percentile, IMI is the clear choice. For students at 85–89 percentile, FORE is the right fit — don't stretch your CAT score claim for the ₹3 LPA avg difference."
  },
  {
    "question": "What is the CAT cutoff for IMI Delhi and FORE School?",
    "answer": "IMI Delhi shortlists candidates with 90+ CAT percentile for PGDM and 85+ for PGDM-IB (International Business). FORE shortlists at 85+ percentile for PGDM and PGDM-IB. Both colleges also accept XAT, GMAT, and CMAT scores. Selection beyond shortlist involves group exercises, case analysis, and personal interviews where academics and work experience matter significantly."
  },
  {
    "question": "Which MBA college is better located — IMI or FORE?",
    "answer": "Both IMI Delhi and FORE School of Management are located in Qutab Institutional Area (South Delhi), making them neighbors. They share the same location ecosystem — close to corporate offices in Gurgaon, accessible from MG Road and Saket metro stations. The campus quality is similar — both have dedicated management institute campuses with modern facilities."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "IMI Delhi vs FORE School", url: "/imi-delhi-vs-fore" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">IMI Delhi vs FORE School</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">IMI Delhi vs FORE School 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">IMI Delhi vs FORE School of Management 2026: fees (₹22L vs ₹18L), CAT cutoff, placements (₹17 LPA vs ₹14 LPA), campus, accreditation, recruiters. Detailed MBA comparison.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">IMI Delhi wins over FORE — higher NIRF rank (#48 vs #55), stronger average placements (₹17 LPA vs ₹14 LPA), AMBA global accreditation, and better international exchange network (40+ vs 20+ universities). However, IMI charges ₹4L more (₹22L vs ₹18L). If your CAT score is 85–89 (FORE range but not IMI range), FORE is a solid choice in the same campus area (both in Qutab Institutional Area).</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs FORE School — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">FORE School</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row: { param: string; a: string; b: string }, i: number) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.a}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cutoff / Admission Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs FORE School — CAT Cutoff & Key Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">FORE School</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile","a":"90+ percentile","b":"85+ percentile","edge":"FORE (more accessible)"},{"cat":"Total Fees","a":"₹22L","b":"₹18L","edge":"FORE (₹4L cheaper)"},{"cat":"Average Placement","a":"₹17 LPA","b":"₹14 LPA","edge":"IMI Delhi"},{"cat":"Accreditation","a":"AMBA (global)","b":"AICTE + NBA","edge":"IMI (AMBA is stronger)"},{"cat":"Intl Exchange","a":"40+ universities","b":"20+ universities","edge":"IMI Delhi"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
                <tr key={r.cat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-800 text-xs">{r.cat}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.a}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.b}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">{r.edge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Placement Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs FORE School — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "IMI Delhi", stats: [{"label":"Average Package","value":"₹17 LPA"},{"label":"Highest Package","value":"₹42 LPA"},{"label":"Top Recruiters","value":"Deloitte, KPMG, EY, HUL"},{"label":"Top Sector","value":"BFSI, Consulting, FMCG"},{"label":"% Placed","value":"~100%"}] },
            { college: "FORE School", stats: [{"label":"Average Package","value":"₹14 LPA"},{"label":"Highest Package","value":"₹30 LPA"},{"label":"Top Recruiters","value":"Accenture, HDFC, Yes Bank, Godrej"},{"label":"Top Sector","value":"BFSI, FMCG, IT Services"},{"label":"% Placed","value":"~100%"}] },
          ] as { college: string; stats: { label: string; value: string }[] }[]).map(col => (
            <div key={col.college} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">{col.college} Placements</h3>
              <div className="space-y-2">
                {col.stats.map((s: { label: string; value: string }) => (
                  <div key={s.label} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{s.label}</span>
                    <span className="font-bold text-gray-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* When to Choose */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose IMI Delhi vs FORE School</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose IMI Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 90–95 and you want the stronger brand between the two</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want AMBA accreditation — globally recognised for international career aspirations</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want richer international exchange opportunities (40+ vs 20+ universities)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> The ₹4L fee difference (₹22L vs ₹18L) is manageable with education loan</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose FORE School if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 85–89 — FORE is reachable; IMI may not be</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to save ₹4L in fees (FORE is ₹18L vs IMI's ₹22L)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're interested in the PGDM-IB (International Business) program, which is FORE's strength</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer a slightly smaller, tighter-knit batch environment</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs FORE School — FAQs</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f: { question: string; answer: string }, i: number) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">More Comparisons &amp; Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {([{"label":"FMS Delhi vs IMI Delhi","href":"/fms-vs-imi-delhi"},{"label":"IMI Delhi vs LBSIM","href":"/imi-delhi-vs-lbsim"},{"label":"MDI vs IMI","href":"/mdi-vs-imi"},{"label":"MBA Colleges Delhi 2026","href":"/mba-colleges-delhi"},{"label":"IMI Delhi Admission 2026","href":"/colleges/imi-delhi"},{"label":"FORE School Admission 2026","href":"/colleges/fore-school-management-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">IMI Delhi or FORE — which should you apply to based on your CAT score?</p>
            <p className="text-blue-200 text-sm">Our MBA counsellors will guide your shortlist and application strategy.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/ai-finder" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">AI College Finder</Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
          </div>
        </div>
      </div>
    </>
  )
}
