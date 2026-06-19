import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "MDI Gurgaon vs IMI Delhi 2026 — Fees, Placements, CAT Score & Which is Better",
  description: "MDI Gurgaon vs IMI Delhi 2026: NIRF rank, CAT cutoff (97+ vs 90+), fees (₹22L vs ₹22L), placements (₹26 LPA vs ₹17 LPA), campus. Detailed MBA head-to-head comparison.",
  path: "/mdi-vs-imi",
  keywords: ["MDI vs IMI","MDI Gurgaon vs IMI Delhi 2026","MDI IMI comparison MBA","MDI better than IMI","MDI Gurgaon IMI Delhi placements","which is better MDI or IMI for MBA"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Management Development Institute, Gurgaon",
    "b": "International Management Institute, Delhi"
  },
  {
    "param": "Program",
    "a": "PGPM / PGP (2 years)",
    "b": "PGDM (2 years)"
  },
  {
    "param": "Established",
    "a": "1973",
    "b": "1981"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#9 (Management)",
    "b": "#48 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "AMBA, EQUIS, AICTE",
    "b": "AMBA, AICTE, NBA"
  },
  {
    "param": "Admission",
    "a": "CAT 97+ percentile",
    "b": "CAT 90+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹22–23L (2 years)",
    "b": "₹22L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹26 LPA",
    "b": "₹17 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹77 LPA",
    "b": "₹42 LPA"
  },
  {
    "param": "Batch Size",
    "a": "~230 students",
    "b": "~250 students"
  },
  {
    "param": "Location",
    "a": "Sector 57, Gurgaon (Haryana)",
    "b": "Qutab Institutional Area, South Delhi"
  },
  {
    "param": "Top Recruiters",
    "a": "BCG, Deloitte, Amazon, Aon, KPMG",
    "b": "Deloitte, KPMG, EY, HUL, Axis Bank"
  },
  {
    "param": "Double Accreditation",
    "a": "AMBA + EQUIS (very rare in India)",
    "b": "AMBA only"
  }
]

const faqs = [
  {
    "question": "Is MDI Gurgaon better than IMI Delhi?",
    "answer": "Yes, significantly — MDI is NIRF #9, IMI is #48. MDI's average placement is ₹26 LPA vs IMI's ₹17 LPA. MDI has double accreditation (AMBA + EQUIS — very rare in India). Both charge similar fees (~₹22L). For a student with 97+ CAT percentile who can get MDI, choosing IMI instead would be a significant downgrade. MDI is in the IIM-B/C/L tier of non-IIM MBAs."
  },
  {
    "question": "What is the CAT cutoff for MDI vs IMI Delhi?",
    "answer": "MDI Gurgaon shortlists at 97+ CAT percentile (General). The actual selection considers academics, work experience, GD-WAT-PI performance. IMI Delhi shortlists at 90+ percentile. The 7-percentile gap is meaningful — students at 90–96 percentile are IMI candidates, not MDI candidates. Both have similar fees, making MDI the clear value choice for 97+ scorers."
  },
  {
    "question": "MDI vs IMI — which is closer to IIM level?",
    "answer": "MDI Gurgaon is closer to IIM level — often grouped with IIM Kozhikode, IIM Shillong, and XLRI in the 'B-tier IIM equivalent' category. MDI placement (₹26 LPA) is similar to IIM Kozhikode (₹29 LPA) and significantly above IMI (₹17 LPA). IMI Delhi is a solid MBA college but in a different tier — comparable to FORE, LBSIM, and Great Lakes rather than IIM-equivalent colleges."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "MDI Gurgaon vs IMI Delhi", url: "/mdi-vs-imi" },
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
            <span className="text-white">MDI Gurgaon vs IMI Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">MDI Gurgaon vs IMI Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">MDI Gurgaon vs IMI Delhi 2026: NIRF rank, CAT cutoff (97+ vs 90+), fees (₹22L vs ₹22L), placements (₹26 LPA vs ₹17 LPA), campus. Detailed MBA head-to-head comparison.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">MDI Gurgaon wins decisively — NIRF #9 vs IMI #48, ₹26 LPA avg vs ₹17 LPA, double accreditation (AMBA + EQUIS), and significantly stronger consulting/strategy recruiter base. At the same fee level (₹22–23L), MDI is a far better value. The only reason to choose IMI over MDI is if your CAT score is 90–96 (IMI range but not MDI range).</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMI Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">MDI Gurgaon</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMI Delhi — CAT Cutoff & Key Metrics Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">MDI Gurgaon</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile","a":"97+ percentile","b":"90+ percentile","edge":"IMI (more accessible)"},{"cat":"Average Placement","a":"₹26 LPA","b":"₹17 LPA","edge":"MDI (₹9 LPA higher)"},{"cat":"NIRF Rank","a":"#9","b":"#48","edge":"MDI (significantly higher)"},{"cat":"Accreditation","a":"AMBA + EQUIS","b":"AMBA only","edge":"MDI (EQUIS is rare)"},{"cat":"Same Fee Level","a":"₹22–23L","b":"₹22L","edge":"Similar"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMI Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "MDI Gurgaon", stats: [{"label":"Average Package","value":"₹26 LPA"},{"label":"Highest Package","value":"₹77 LPA"},{"label":"Companies Visiting","value":"200+"},{"label":"Top Recruiter","value":"BCG, Amazon, Deloitte"},{"label":"% Placed","value":"~100%"}] },
            { college: "IMI Delhi", stats: [{"label":"Average Package","value":"₹17 LPA"},{"label":"Highest Package","value":"₹42 LPA"},{"label":"Top Sector","value":"BFSI, Consulting, FMCG"},{"label":"Top Recruiter","value":"Deloitte, KPMG, EY"},{"label":"% Placed","value":"~100%"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose MDI Gurgaon vs IMI Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose MDI Gurgaon if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 97+ — MDI is NIRF #9 at similar fees to IMI; no reason to choose IMI</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want double accreditation (AMBA + EQUIS) — MDI is one of very few Indian MBA colleges with EQUIS</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want consulting/strategy roles — BCG, Deloitte, Aon recruit heavily at MDI</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the strongest MBA outside IIMs A/B/C at the same fee level</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IMI Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 90–96 — IMI is within reach; MDI likely is not</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer Delhi location over Gurgaon (though both are NCR)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want international exchange programs — IMI has 40+ partner universities</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a Delhi University ecosystem for networking and events</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMI Delhi — FAQs</h2>
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
          {([{"label":"FMS Delhi vs MDI Gurgaon","href":"/fms-delhi-vs-mdi-gurgaon"},{"label":"MDI vs IMT Ghaziabad","href":"/mdi-vs-imt"},{"label":"FMS vs IMI Delhi","href":"/fms-vs-imi-delhi"},{"label":"IMI vs FORE School","href":"/imi-delhi-vs-fore"},{"label":"MDI Gurgaon Admission 2026","href":"/colleges/mdi-gurgaon"},{"label":"MBA Colleges Delhi NCR 2026","href":"/mba-colleges-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Targeting MDI or IMI based on your CAT score?</p>
            <p className="text-blue-200 text-sm">Our MBA counsellors will assess your exact profile and recommend the right college.</p>
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
