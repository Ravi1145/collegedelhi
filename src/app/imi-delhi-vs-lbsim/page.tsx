import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "IMI Delhi vs LBSIM Delhi 2026",
  description: "IMI Delhi vs LBSIM (Lal Bahadur Shastri Institute of Management) 2026: fees (₹22L vs ₹14L), CAT cutoff, average placements (₹17 LPA vs ₹12 LPA), campus",
  path: "/imi-delhi-vs-lbsim",
  keywords: ["IMI Delhi vs LBSIM","IMI vs LBSIM 2026","LBSIM vs IMI Delhi MBA","LBSIM Delhi placements vs IMI","which is better IMI or LBSIM Delhi","LBSIM Delhi CAT cutoff 2026"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "International Management Institute, Delhi",
    "b": "Lal Bahadur Shastri Inst. of Management"
  },
  {
    "param": "Program",
    "a": "PGDM (2 years)",
    "b": "PGDM / PGDM-Finance (2 years)"
  },
  {
    "param": "Established",
    "a": "1981",
    "b": "1995"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#48 (Management)",
    "b": "#70–80 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "AMBA, AICTE, NBA",
    "b": "AICTE, NBA"
  },
  {
    "param": "Admission",
    "a": "CAT 90+ percentile",
    "b": "CAT 75–80+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹22L (2 years)",
    "b": "₹14L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹17 LPA",
    "b": "₹12 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹42 LPA",
    "b": "₹24 LPA"
  },
  {
    "param": "Batch Size",
    "a": "~250 students",
    "b": "~240 students"
  },
  {
    "param": "Campus Location",
    "a": "Qutab Institutional Area, South Delhi",
    "b": "Dwarka, West Delhi"
  },
  {
    "param": "Finance Specialisation",
    "a": "Strong",
    "b": "Very Strong — PGDM-Finance flagship"
  },
  {
    "param": "Top Recruiters",
    "a": "Deloitte, KPMG, EY, HUL",
    "b": "HDFC Bank, Kotak, ICICI, Axis Bank, EY"
  }
]

const faqs = [
  {
    "question": "Is IMI Delhi much better than LBSIM?",
    "answer": "IMI Delhi is ranked higher (NIRF #48 vs LBSIM ~#75), has ₹5 LPA higher avg placement (₹17 vs ₹12), and carries AMBA accreditation. However, LBSIM costs ₹8L less (₹14L vs ₹22L). For a Finance specialisation student targeting banking careers, the gap narrows — LBSIM's PGDM-Finance places students well in HDFC, Kotak, Axis at ₹10–15 LPA, comparable outcome for ₹8L less cost."
  },
  {
    "question": "What CAT score is needed for IMI and LBSIM?",
    "answer": "IMI Delhi shortlists at 90+ CAT percentile. LBSIM shortlists at 75–80+ percentile. LBSIM also accepts XAT, MAT, CMAT scores. If your CAT score is 80–89 percentile, LBSIM is a strong target while IMI Delhi may be a stretch. Both require GD-PI rounds after shortlisting."
  },
  {
    "question": "Is LBSIM good for Finance specialisation?",
    "answer": "Yes — LBSIM's PGDM-Finance program is its flagship and the strongest program it offers. HDFC Bank, Kotak Mahindra Bank, Axis Bank, ICICI Bank, and Edelweiss are among top LBSIM recruiters. Students targeting banking operations, credit analysis, treasury, or retail banking find LBSIM's network valuable. The average Finance placement at LBSIM is ₹11–14 LPA."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "IMI Delhi vs LBSIM Delhi", url: "/imi-delhi-vs-lbsim" },
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
            <span className="text-white">IMI Delhi vs LBSIM Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">IMI Delhi vs LBSIM Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">IMI Delhi vs LBSIM (Lal Bahadur Shastri Institute of Management) 2026: fees (₹22L vs ₹14L), CAT cutoff, average placements (₹17 LPA vs ₹12 LPA), campus, accreditation comparison.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">IMI Delhi is the stronger college overall — higher NIRF rank, higher placements (₹17 LPA vs ₹12 LPA), and AMBA global accreditation. However, LBSIM costs ₹8L less (₹14L vs ₹22L) and has a notably stronger Finance specialisation (PGDM-Finance) — if banking and BFSI is your target, LBSIM can match IMI's outcome at significantly lower cost.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs LBSIM Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">LBSIM Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs LBSIM Delhi — CAT Cutoff & Program Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">LBSIM Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile","a":"90+ percentile","b":"75–80+ percentile","edge":"LBSIM (more accessible)"},{"cat":"Total Fees","a":"₹22L","b":"₹14L","edge":"LBSIM (₹8L cheaper)"},{"cat":"Average Placement","a":"₹17 LPA","b":"₹12 LPA","edge":"IMI Delhi (₹5 LPA higher)"},{"cat":"Finance Career","a":"Strong","b":"Flagship strength","edge":"LBSIM (for banking/finance)"},{"cat":"NIRF Rank","a":"#48","b":"#70–80","edge":"IMI Delhi"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs LBSIM Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "IMI Delhi", stats: [{"label":"Average Package","value":"₹17 LPA"},{"label":"Highest Package","value":"₹42 LPA"},{"label":"Top Sector","value":"Consulting, BFSI, FMCG"},{"label":"Top Recruiter","value":"Deloitte, KPMG, EY"},{"label":"% Placed","value":"~100%"}] },
            { college: "LBSIM Delhi", stats: [{"label":"Average Package","value":"₹12 LPA"},{"label":"Highest Package","value":"₹24 LPA"},{"label":"Top Sector","value":"Banking, NBFC, BFSI"},{"label":"Top Recruiter","value":"HDFC, Kotak, Axis, ICICI"},{"label":"% Placed","value":"~98%"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose IMI Delhi vs LBSIM Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose IMI Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 90+ and you want a higher-ranked PGDM college</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want AMBA accreditation for global recognition</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're targeting consulting, FMCG, or general management roles</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want international exchange programs (IMI has 40+ partner universities)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose LBSIM Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 75–85 — LBSIM is reachable; IMI likely is not</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to specialise in Finance / Banking — LBSIM's PGDM-Finance is its flagship strength</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to save ₹8L in fees (₹14L vs ₹22L) — significant difference for self-financing students</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're targeting banking/NBFC roles — HDFC, Kotak, Axis actively recruit from LBSIM</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMI Delhi vs LBSIM Delhi — FAQs</h2>
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
          {([{"label":"IMI Delhi vs FORE School","href":"/imi-delhi-vs-fore"},{"label":"FMS vs IMI Delhi","href":"/fms-vs-imi-delhi"},{"label":"MDI vs IMI","href":"/mdi-vs-imi"},{"label":"MBA Colleges Delhi 2026","href":"/mba-colleges-delhi"},{"label":"LBSIM Delhi Admission 2026","href":"/colleges/lbsim-delhi"},{"label":"IMI Delhi Admission 2026","href":"/colleges/imi-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Need help choosing between IMI Delhi and LBSIM based on your CAT score?</p>
            <p className="text-blue-200 text-sm">Our MBA counsellors will match you to the best-fit college for your profile.</p>
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
