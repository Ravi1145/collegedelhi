import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "IMT Ghaziabad vs BIMTECH 2026",
  description: "IMT Ghaziabad vs BIMTECH (Birla Institute of Management Technology) 2026: NIRF rank, fees (₹19L vs ₹13L), CAT cutoff, placements (₹19 LPA vs ₹12 LPA), campus",
  path: "/imt-vs-bimtech",
  keywords: ["IMT vs BIMTECH","IMT Ghaziabad vs BIMTECH 2026","IMT BIMTECH comparison MBA","BIMTECH vs IMT Ghaziabad placements","BIMTECH Greater Noida CAT cutoff","which is better IMT or BIMTECH"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Institute of Management Technology, Ghaziabad",
    "b": "Birla Institute of Management Technology, Greater Noida"
  },
  {
    "param": "Program",
    "a": "PGDM (2 years)",
    "b": "PGDM / PGDM-IBM / PGDM-Insurance (2 yrs)"
  },
  {
    "param": "Established",
    "a": "1980",
    "b": "1988"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#30 (Management)",
    "b": "#50–60 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "AMBA, AICTE",
    "b": "AICTE, NBA, AACSB candidate"
  },
  {
    "param": "Admission",
    "a": "CAT 93+ percentile",
    "b": "CAT 80–85+ percentile"
  },
  {
    "param": "Total Fees",
    "a": "₹19L (2 years)",
    "b": "₹13L (2 years)"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹19 LPA",
    "b": "₹12 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹55 LPA",
    "b": "₹30 LPA"
  },
  {
    "param": "Location",
    "a": "NH-58, Ghaziabad",
    "b": "Greater Noida (NCR)"
  },
  {
    "param": "Batch Size",
    "a": "~470 students",
    "b": "~350 students"
  },
  {
    "param": "Unique Programs",
    "a": "PGDM + Dual country programs",
    "b": "PGDM-Insurance (India's only dedicated MBA)"
  },
  {
    "param": "Top Recruiters",
    "a": "Amazon, Deloitte, Gartner, HCL",
    "b": "ICICI Lombard, HDFC Ergo, Mahindra, EY"
  }
]

const faqs = [
  {
    "question": "Is IMT Ghaziabad better than BIMTECH?",
    "answer": "Yes — IMT is NIRF #30 vs BIMTECH ~#55, average placement ₹19 LPA vs ₹12 LPA, AMBA accredited, and has a larger, more diverse batch with stronger general management company recruitment. However, BIMTECH is the better choice for Insurance/Risk Management careers (PGDM-Insurance) and for students with 80–88 CAT percentile who can't access IMT."
  },
  {
    "question": "What is the CAT cutoff for IMT and BIMTECH?",
    "answer": "IMT Ghaziabad: 93+ CAT percentile for shortlisting. Also accepts XAT and GMAT. BIMTECH: 80–85+ CAT percentile, also accepts XAT, MAT, CMAT. For 85–92 percentile scorers, BIMTECH is a strong target and IMT is a stretch — don't apply to IMT with 87 percentile expecting a call."
  },
  {
    "question": "Is BIMTECH good for non-engineers and Finance specialists?",
    "answer": "Yes — BIMTECH welcomes non-engineers (Commerce, Humanities, Science) and has a strong Finance and Insurance specialisation. The PGDM-Insurance is India's only dedicated program with deep industry connections to IRDAI, ICICI Lombard, HDFC Ergo, Bajaj Allianz, and SBI Life. For students targeting insurance, actuarial support, or risk management careers, BIMTECH is the best MBA option regardless of rank."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "IMT Ghaziabad vs BIMTECH", url: "/imt-vs-bimtech" },
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
            <span className="text-white">IMT Ghaziabad vs BIMTECH</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">IMT Ghaziabad vs BIMTECH 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">IMT Ghaziabad vs BIMTECH (Birla Institute of Management Technology) 2026: NIRF rank, fees (₹19L vs ₹13L), CAT cutoff, placements (₹19 LPA vs ₹12 LPA), campus, specialisations.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">IMT Ghaziabad is the better college overall — NIRF #30 vs BIMTECH ~#55, ₹19 LPA vs ₹12 LPA average placement, AMBA accreditation, and a stronger general management recruiter base. However, BIMTECH costs ₹6L less (₹13L vs ₹19L) and offers India's only PGDM-Insurance — if you're targeting the insurance/BFSI sector, BIMTECH's specialisation edge is unmatched.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMT Ghaziabad vs BIMTECH — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">IMT Ghaziabad</th>
                <th className="px-4 py-3 text-center font-semibold">BIMTECH</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMT Ghaziabad vs BIMTECH — CAT Cutoff, Fees & Placement Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">IMT Ghaziabad</th>
                <th className="px-4 py-3 text-center font-semibold">BIMTECH</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile","a":"93+ percentile","b":"80–85+ percentile","edge":"BIMTECH (more accessible)"},{"cat":"Total Fees","a":"₹19L","b":"₹13L","edge":"BIMTECH (₹6L cheaper)"},{"cat":"Average Placement","a":"₹19 LPA","b":"₹12 LPA","edge":"IMT (₹7 LPA higher)"},{"cat":"NIRF Rank","a":"#30","b":"#50–60","edge":"IMT"},{"cat":"Insurance MBA","a":"Not available","b":"PGDM-Insurance (India's only)","edge":"BIMTECH (unique)"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMT Ghaziabad vs BIMTECH — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "IMT Ghaziabad", stats: [{"label":"Average Package","value":"₹19 LPA"},{"label":"Highest Package","value":"₹55 LPA"},{"label":"Top Recruiter","value":"Amazon, Deloitte, Gartner"},{"label":"% Placed","value":"~100%"},{"label":"International Placements","value":"Limited"}] },
            { college: "BIMTECH", stats: [{"label":"Average Package","value":"₹12 LPA"},{"label":"Highest Package","value":"₹30 LPA"},{"label":"Top Recruiter","value":"ICICI Lombard, HDFC Ergo, EY"},{"label":"% Placed","value":"~98%"},{"label":"Insurance Placements","value":"Best in India"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose IMT Ghaziabad vs BIMTECH</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose IMT Ghaziabad if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 93+ — IMT is significantly higher ranked and better placed</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want AMBA accreditation for global MBA recognition</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want consulting, FMCG, or IT consulting roles — Amazon, Deloitte, Gartner recruit at IMT</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a larger peer network (470 students/year vs 350 at BIMTECH)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose BIMTECH if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 80–88 — BIMTECH is more accessible than IMT</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to specialise in Insurance / Risk Management — BIMTECH's PGDM-Insurance is India's only dedicated program</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to save ₹6L in fees (₹13L vs ₹19L)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're targeting BFSI, insurance companies, or NBFCs where BIMTECH has strong alumni</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IMT Ghaziabad vs BIMTECH — FAQs</h2>
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
          {([{"label":"MDI vs IMT Ghaziabad","href":"/mdi-vs-imt"},{"label":"JIMS vs NDIM","href":"/jims-vs-ndim"},{"label":"MBA Colleges Delhi NCR 2026","href":"/mba-colleges-delhi"},{"label":"IMT Ghaziabad Admission 2026","href":"/colleges/imt-ghaziabad"},{"label":"BIMTECH Admission 2026","href":"/colleges/bimtech-greater-noida"},{"label":"MBA Colleges Greater Noida","href":"/mba-colleges-greater-noida"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Comparing IMT and BIMTECH for your CAT score?</p>
            <p className="text-blue-200 text-sm">Our counsellors will tell you which is the right call for your profile and career goals.</p>
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
