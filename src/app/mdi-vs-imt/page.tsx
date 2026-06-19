import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "MDI Gurgaon vs IMT Ghaziabad 2026 — Placements, CAT Cutoff & Which is Better",
  description: "MDI Gurgaon vs IMT Ghaziabad 2026 MBA comparison: NIRF rank (#9 vs #30), CAT cutoff (97+ vs 93+), fees (₹22L vs ₹19L), placements (₹26 LPA vs ₹19 LPA), campus. Detailed head-to-head.",
  path: "/mdi-vs-imt",
  keywords: ["MDI vs IMT","MDI Gurgaon vs IMT Ghaziabad 2026","MDI IMT comparison","MDI better than IMT Ghaziabad","IMT Ghaziabad vs MDI placements","CAT cutoff MDI IMT 2026"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Management Development Institute, Gurgaon",
    "b": "Institute of Management Technology, Ghaziabad"
  },
  {
    "param": "Program",
    "a": "PGPM / PGP (2 years)",
    "b": "PGDM (2 years)"
  },
  {
    "param": "Established",
    "a": "1973",
    "b": "1980"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#9 (Management)",
    "b": "#30 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "AMBA + EQUIS",
    "b": "AMBA, AICTE"
  },
  {
    "param": "Admission",
    "a": "CAT 97+ percentile",
    "b": "CAT 93+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹22–23L (2 years)",
    "b": "₹19L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹26 LPA",
    "b": "₹19 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹77 LPA",
    "b": "₹55 LPA"
  },
  {
    "param": "Location",
    "a": "Sector 57, Gurgaon",
    "b": "NH-58, Ghaziabad (NCR)"
  },
  {
    "param": "Batch Size",
    "a": "~230 students",
    "b": "~470 students"
  },
  {
    "param": "Top Recruiters",
    "a": "BCG, Amazon, Deloitte, Aon, KPMG",
    "b": "Amazon, Deloitte, KPMG, HCL, Gartner"
  },
  {
    "param": "Campus",
    "a": "75-acre green campus",
    "b": "100-acre campus, Ghaziabad"
  }
]

const faqs = [
  {
    "question": "Is MDI Gurgaon better than IMT Ghaziabad?",
    "answer": "Yes — MDI is NIRF #9 vs IMT #30, avg placement ₹26 LPA vs ₹19 LPA, and has double accreditation (AMBA + EQUIS). MDI is in a tier above IMT — comparable to IIM Kozhikode, while IMT is in the FORE/TAPMI tier. For a 97+ CAT scorer choosing between MDI and IMT, MDI wins on every metric except batch diversity (IMT has a larger batch of ~470)."
  },
  {
    "question": "What is the CAT cutoff for MDI and IMT?",
    "answer": "MDI Gurgaon: 97+ CAT percentile for shortlisting. Selection based on academics, work experience, GD-WAT-PI. IMT Ghaziabad: 93+ CAT percentile. IMT also accepts XAT and GMAT. The 4-percentile gap between them is significant — many students who are shortlisted by IMT are not shortlisted by MDI. For 94–96 percentile scorers, IMT is the right target."
  },
  {
    "question": "Which has better ROI — MDI or IMT Ghaziabad?",
    "answer": "MDI has better ROI in absolute terms — ₹26 LPA salary / ₹22L fees = 1.18x. IMT: ₹19 LPA / ₹19L fees = 1.0x. MDI's higher salary more than offsets the ₹3–4L fee difference. Both colleges see nearly full placement, making the comparison more about salary premium than placement risk. MDI graduates pay back fees in under 11 months; IMT graduates in about 12 months."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "MDI Gurgaon vs IMT Ghaziabad", url: "/mdi-vs-imt" },
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
            <span className="text-white">MDI Gurgaon vs IMT Ghaziabad</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">MDI Gurgaon vs IMT Ghaziabad 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">MDI Gurgaon vs IMT Ghaziabad 2026 MBA comparison: NIRF rank (#9 vs #30), CAT cutoff (97+ vs 93+), fees (₹22L vs ₹19L), placements (₹26 LPA vs ₹19 LPA), campus. Detailed head-to-head.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">MDI Gurgaon wins convincingly — NIRF #9 vs IMT #30, ₹26 LPA avg vs ₹19 LPA, and double accreditation (AMBA + EQUIS). Both are strong NCR MBA colleges. The choice comes down to CAT score: 97+ can target MDI, 93–96 makes IMT the right choice. At MDI's ₹26 LPA avg vs IMT's ₹19 LPA, the ₹3–4L extra fee at MDI pays back within months of joining.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMT Ghaziabad — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">MDI Gurgaon</th>
                <th className="px-4 py-3 text-center font-semibold">IMT Ghaziabad</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMT Ghaziabad — CAT Cutoff & Fees Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">MDI Gurgaon</th>
                <th className="px-4 py-3 text-center font-semibold">IMT Ghaziabad</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile","a":"97+ percentile","b":"93+ percentile","edge":"IMT (more accessible)"},{"cat":"Total Fees","a":"₹22–23L","b":"₹19L","edge":"IMT (₹3–4L cheaper)"},{"cat":"Average Placement","a":"₹26 LPA","b":"₹19 LPA","edge":"MDI (₹7 LPA higher)"},{"cat":"NIRF Rank","a":"#9","b":"#30","edge":"MDI (significantly higher)"},{"cat":"Accreditation","a":"AMBA + EQUIS","b":"AMBA only","edge":"MDI (EQUIS rare)"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMT Ghaziabad — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "MDI Gurgaon", stats: [{"label":"Average Package","value":"₹26 LPA"},{"label":"Highest Package","value":"₹77 LPA"},{"label":"Companies","value":"200+"},{"label":"Top Recruiter","value":"BCG, Amazon, Deloitte"},{"label":"% Placed","value":"~100%"}] },
            { college: "IMT Ghaziabad", stats: [{"label":"Average Package","value":"₹19 LPA"},{"label":"Highest Package","value":"₹55 LPA"},{"label":"Companies","value":"250+"},{"label":"Top Recruiter","value":"Amazon, Deloitte, Gartner"},{"label":"% Placed","value":"~100%"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose MDI Gurgaon vs IMT Ghaziabad</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose MDI Gurgaon if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 97+ — MDI is NIRF #9 with ₹7 LPA higher avg placement for just ₹3L more fees</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want double accreditation (AMBA + EQUIS) — relevant for international MBA applications</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want consulting/strategy firms — BCG, Aon, McKinsey have stronger MDI presence</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a Gurgaon location — proximity to corporate offices and startup ecosystem</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IMT Ghaziabad if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 93–96 — IMT is more accessible and NIRF #30 is still excellent</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to save ₹3–4L in fees (IMT ₹19L vs MDI ₹22–23L)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer a larger batch (IMT ~470 vs MDI ~230) for more diverse peer group</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're targeting operations, supply chain, or IT consulting roles where IMT has strong alumni</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MDI Gurgaon vs IMT Ghaziabad — FAQs</h2>
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
          {([{"label":"FMS Delhi vs MDI Gurgaon","href":"/fms-delhi-vs-mdi-gurgaon"},{"label":"MDI vs IMI Delhi","href":"/mdi-vs-imi"},{"label":"IMT vs BIMTECH","href":"/imt-vs-bimtech"},{"label":"MBA Colleges Delhi NCR 2026","href":"/mba-colleges-delhi"},{"label":"MDI Gurgaon Admission 2026","href":"/colleges/mdi-gurgaon"},{"label":"IMT Ghaziabad Admission 2026","href":"/colleges/imt-ghaziabad"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">MDI or IMT — which matches your CAT score and career goals?</p>
            <p className="text-blue-200 text-sm">Our MBA counsellors will help you make the right call with your profile.</p>
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
