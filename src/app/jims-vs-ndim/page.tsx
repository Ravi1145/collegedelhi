import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "JIMS vs NDIM Delhi 2026 — Fees, Placements, Admission",
  description: "JIMS (Jagannath International Management School) vs NDIM (New Delhi Institute of Management) 2026: fees (₹10L vs ₹8L), CAT/MAT cutoff, placements, campus, AICTE",
  path: "/jims-vs-ndim",
  keywords: ["JIMS vs NDIM","JIMS Delhi vs NDIM 2026","JIMS NDIM comparison MBA Delhi","NDIM Delhi placements vs JIMS","JIMS Rohini vs NDIM Tughlakabad","which is better JIMS or NDIM Delhi MBA"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Jagannath International Management School",
    "b": "New Delhi Institute of Management"
  },
  {
    "param": "Program",
    "a": "PGDM (2 years)",
    "b": "PGDM (2 years)"
  },
  {
    "param": "Established",
    "a": "1993",
    "b": "1992"
  },
  {
    "param": "Approval",
    "a": "AICTE approved",
    "b": "AICTE approved"
  },
  {
    "param": "NIRF Rank",
    "a": "Not in top 100",
    "b": "Not in top 100"
  },
  {
    "param": "Admission",
    "a": "CAT/XAT/MAT 60+ percentile",
    "b": "CAT/XAT/MAT 55+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹10–11L (2 years)",
    "b": "₹8–9L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹6–8 LPA",
    "b": "₹5–7 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹15 LPA",
    "b": "₹14 LPA"
  },
  {
    "param": "Campuses",
    "a": "Rohini, Vasant Kunj (multiple)",
    "b": "Tughlakabad Extension"
  },
  {
    "param": "Batch Size",
    "a": "~600 students across campuses",
    "b": "~300 students"
  },
  {
    "param": "Industry Connections",
    "a": "Strong — 25+ years Delhi NCR",
    "b": "Good — Delhi corporate connections"
  },
  {
    "param": "Specialisations",
    "a": "Finance, Marketing, HR, IT, IB",
    "b": "Finance, Marketing, HR"
  }
]

const faqs = [
  {
    "question": "Is JIMS better than NDIM for MBA in Delhi?",
    "answer": "JIMS has slightly better placements (₹6–8 LPA vs NDIM ₹5–7 LPA), more specialisations, and multiple campuses. Both are AICTE-approved PGDM colleges. For students targeting a Delhi-based MBA with CAT 55–70 percentile, both are comparable options — JIMS has a minor edge in placement outcomes while NDIM is ₹2L cheaper."
  },
  {
    "question": "What score do I need for JIMS and NDIM?",
    "answer": "JIMS: CAT 60+, XAT 55+, MAT 600+, CMAT 150+. NDIM: CAT 55+, MAT 550+, CMAT 130+. Both accept a wide range of management entrance exams. Direct admission may be available based on Class 12 and graduation marks. Both conduct group discussions and personal interviews after shortlisting."
  },
  {
    "question": "Are JIMS and NDIM good for starting a career in banking/finance?",
    "answer": "Both colleges have reasonable BFSI connections — HDFC, ICICI, Axis, Kotak, and NBFCs recruit from both. Salaries typically range ₹4–8 LPA for entry-level banking roles from these colleges. For higher BFSI ambitions (₹12–20 LPA roles at top banks), target IMI, LBSIM, or higher-ranked colleges. JIMS and NDIM are strong for retail banking, SME banking, and insurance sales tracks."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "JIMS Delhi vs NDIM Delhi", url: "/jims-vs-ndim" },
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
            <span className="text-white">JIMS Delhi vs NDIM Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">JIMS Delhi vs NDIM Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">JIMS (Jagannath International Management School) vs NDIM (New Delhi Institute of Management) 2026: fees (₹10L vs ₹8L), CAT/MAT cutoff, placements, campus, AICTE approval. Honest comparison.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">JIMS is marginally better than NDIM — slightly higher placements (₹6–8 LPA vs ₹5–7 LPA), broader specialisations, and multiple campus locations. However, both are mid-tier Delhi MBA colleges with similar profiles. The ₹2L fee difference (NDIM is cheaper) may be worth considering if budget is a constraint. Both are best suited for students with 50–70 CAT percentile or MAT 600+ looking for an AICTE-approved PGDM in Delhi.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">JIMS Delhi vs NDIM Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">JIMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">NDIM Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">JIMS Delhi vs NDIM Delhi — Admission & Fees Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">JIMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">NDIM Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT/MAT Percentile","a":"60+ percentile","b":"55+ percentile","edge":"NDIM (easier entry)"},{"cat":"Total Fees","a":"₹10–11L","b":"₹8–9L","edge":"NDIM (₹2L cheaper)"},{"cat":"Average Placement","a":"₹6–8 LPA","b":"₹5–7 LPA","edge":"JIMS (marginal)"},{"cat":"Campus Locations","a":"Multiple (Rohini, Vasant Kunj)","b":"Single (Tughlakabad)","edge":"JIMS"},{"cat":"Specialisation Width","a":"Finance, Marketing, HR, IT, IB","b":"Finance, Marketing, HR","edge":"JIMS"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">JIMS Delhi vs NDIM Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "JIMS Delhi", stats: [{"label":"Average Package","value":"₹6–8 LPA"},{"label":"Highest Package","value":"₹15 LPA"},{"label":"Top Sector","value":"BFSI, Sales, Marketing"},{"label":"% Placed","value":"~90%"},{"label":"Top Recruiter","value":"HDFC, Axis, Wipro, ITC"}] },
            { college: "NDIM Delhi", stats: [{"label":"Average Package","value":"₹5–7 LPA"},{"label":"Highest Package","value":"₹14 LPA"},{"label":"Top Sector","value":"BFSI, IT Sales, Retail"},{"label":"% Placed","value":"~88%"},{"label":"Top Recruiter","value":"ICICI, HCL, Accenture"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose JIMS Delhi vs NDIM Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose JIMS Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want more specialisation choices (JIMS offers IT and International Business tracks)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer Rohini or Vasant Kunj campus locations</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a slightly stronger placement track record</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the larger peer network (JIMS has ~600 students across campuses)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose NDIM Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to save ₹2L in fees (NDIM at ₹8–9L vs JIMS ₹10–11L)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer a smaller, more intimate batch (~300 students)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT/MAT score is in the 55–62 percentile range</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> South Delhi / Tughlakabad location is more convenient for you</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">JIMS Delhi vs NDIM Delhi — FAQs</h2>
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
          {([{"label":"IMT vs BIMTECH","href":"/imt-vs-bimtech"},{"label":"IMI Delhi vs FORE School","href":"/imi-delhi-vs-fore"},{"label":"MBA Colleges Delhi 2026","href":"/mba-colleges-delhi"},{"label":"PGDM vs MBA Delhi","href":"/pgdm-vs-mba-delhi"},{"label":"JIMS Admission 2026","href":"/colleges/jims-delhi"},{"label":"NDIM Delhi Admission 2026","href":"/colleges/ndim-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">JIMS or NDIM — which suits your CAT/MAT score and career goal?</p>
            <p className="text-blue-200 text-sm">Talk to our counsellors for a personalised recommendation based on your profile.</p>
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
