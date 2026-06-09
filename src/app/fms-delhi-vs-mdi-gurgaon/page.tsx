import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "FMS Delhi vs MDI Gurgaon 2026 — Which MBA is Better?",
  description: "FMS Delhi vs MDI Gurgaon detailed comparison: CAT cutoff, fees, average placement, ROI, campus culture. Which is the better MBA college near Delhi? Honest 2026 verdict.",
  path: "/fms-delhi-vs-mdi-gurgaon",
  keywords: [
    "FMS Delhi vs MDI Gurgaon",
    "FMS vs MDI which is better 2026",
    "FMS Delhi MBA admission",
    "MDI Gurgaon MBA fees",
    "FMS vs MDI placements",
    "FMS Delhi CAT cutoff",
    "MDI Gurgaon CAT cutoff",
    "best MBA college near Delhi 2026",
    "FMS ROI vs MDI ROI",
  ],
})
export const revalidate = 300

const compData = [
  { param: "Full Name", fms: "Faculty of Management Studies, Delhi Univ.", mdi: "Management Development Institute, Gurgaon" },
  { param: "Type", fms: "Government (Central University)", mdi: "Autonomous (AICTE Approved)" },
  { param: "NIRF 2024 (Management)", fms: "Top 5", mdi: "Top 10" },
  { param: "NAAC Grade", fms: "A+", mdi: "Not formally ranked (accredited)" },
  { param: "Total MBA Fees", fms: "~₹30K/year (₹60K total)", mdi: "₹23L total (2 years)" },
  { param: "CAT Cutoff (General)", fms: "99+ percentile", mdi: "96-97+ percentile" },
  { param: "Average Placement 2024", fms: "₹32 LPA", mdi: "₹28 LPA" },
  { param: "Highest Package 2024", fms: "₹80+ LPA", mdi: "₹72 LPA" },
  { param: "Top Recruiters", fms: "McKinsey, BCG, Goldman Sachs, Bain", mdi: "McKinsey, BCG, Amazon, P&G, Unilever" },
  { param: "Batch Size", fms: "~200 students", mdi: "~250 students" },
  { param: "Campus Location", fms: "Chhatra Marg, DU South Campus, Delhi", mdi: "Mehrauli Road, Gurgaon" },
  { param: "Program Duration", fms: "2 years (MBA)", mdi: "2 years (PGDM)" },
  { param: "ROI (3-year payback)", fms: "Exceptional (nearly free fees)", mdi: "Very good (fees offset in 10 months)" },
]

const faqs = [
  { question: "Is FMS Delhi better than MDI Gurgaon for MBA?", answer: "FMS Delhi offers better ROI — near-zero fees (₹60K total) with ₹32 LPA average placement vs MDI's ₹23L fees with ₹28 LPA placement. FMS NIRF ranking is slightly higher. However, MDI has a more corporate residential campus (better hostel, international connections), and its PGDM is more globally recognised in some HR/Marketing firms. CAT cutoff: FMS needs 99+ percentile vs MDI's 96-97 percentile — MDI is slightly more accessible." },
  { question: "What CAT percentile is needed for FMS Delhi and MDI Gurgaon?", answer: "FMS Delhi: 99+ CAT percentile for General category (among the most competitive MBA programs in India). FMS has its own GD-PI-WAT process with additional weight on work experience. MDI Gurgaon: 96-97 percentile for General category. MDI also considers XAT, GMAT. OBC-NCL: FMS needs 97+, MDI needs 93+. SC/ST: FMS 90+, MDI 85+. MDI's cutoff is 2-3 percentile lower, making it more accessible." },
  { question: "What is the total cost of FMS Delhi MBA vs MDI Gurgaon?", answer: "FMS Delhi total MBA fees: approximately ₹60,000–80,000 (for 2 years, being a government institution). Hostel available at subsidised rates. Total cost of attendance including living: ₹3-5 lakh for 2 years. MDI Gurgaon total PGDM fees: ₹23 lakh for 2 years (2025-26 fee structure). Hostel/accommodation included in fees. Total cost of attendance: ₹25-27 lakh. The ROI difference is massive — FMS is effectively India's best MBA bargain." },
  { question: "Which has better placements — FMS Delhi or MDI Gurgaon?", answer: "FMS Delhi has higher average placements at ₹32 LPA (2024) vs MDI's ₹28 LPA. FMS sees more consulting and banking recruiters (McKinsey, BCG, Goldman Sachs). MDI has strong FMCG and tech placements (P&G, Unilever, Amazon, Microsoft). Both see the same Tier-1 recruiters. FMS placement is marginally stronger but MDI is not far behind — the ₹4 LPA gap is partly explained by different batch compositions (FMS has more freshers)." },
  { question: "Should I choose FMS Delhi or MDI Gurgaon if I get into both?", answer: "If you get into both, take FMS Delhi — it has higher average placement, better NIRF ranking, near-zero fees, and a stronger alumni network in consulting and banking. The only reasons to prefer MDI: you want a more structured residential campus experience, you prefer a PGDM degree over MBA, or you have a specific MDI specialisation (like PGDM-HRM which is highly regarded). For almost every career goal, FMS gives you a better outcome at a fraction of the cost." },
]

export default function FMSvsMDIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare", url: "/compare" },
    { name: "FMS Delhi vs MDI Gurgaon", url: "/fms-delhi-vs-mdi-gurgaon" },
  ])

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">FMS Delhi vs MDI Gurgaon</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">FMS Delhi vs MDI Gurgaon 2026 — Which MBA is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            A data-driven comparison of FMS Delhi (government, ₹60K total fees, ₹32 LPA avg) and MDI Gurgaon (₹23L fees, ₹28 LPA avg) — the two premier MBA options near Delhi.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800"><strong>FMS Delhi wins on ROI</strong> — ₹32 LPA average placement at ₹60K total fees is unmatched in India. MDI wins on campus experience and is more accessible (96 vs 99 CAT percentile). If you get into both: choose FMS. If you get MDI but not FMS: take MDI without hesitation.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs MDI Gurgaon — Full Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">FMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">MDI Gurgaon</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.fms}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.mdi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose Which</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose FMS Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> Maximum ROI — you want ₹32 LPA placement at ₹60K total fees</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> Consulting or investment banking career goal</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You have a 99+ CAT percentile and can qualify</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> Cost is a major constraint — FMS is effectively free</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose MDI Gurgaon if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You get MDI but couldn't reach FMS's 99 percentile cutoff</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You want a structured 2-year residential campus experience</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> FMCG, Tech, or Marketing career — MDI's HR/Marketing track is exceptional</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You prefer Gurgaon location with direct access to corporate hubs</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — FMS Delhi vs MDI Gurgaon</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Best MBA Colleges Delhi", href: "/best-mba-colleges-delhi" },
            { label: "MBA Placements Delhi", href: "/mba-colleges-delhi-placement" },
            { label: "DTU vs NSUT", href: "/dtu-vs-nsut" },
            { label: "SRCC vs Hindu College", href: "/srcc-vs-hindu-college" },
            { label: "MBA without CAT Delhi", href: "/mba-admission-delhi-without-cat" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Need help choosing between FMS Delhi and MDI Gurgaon?</p>
            <p className="text-blue-200 text-sm">Our counsellors know both colleges in depth. Free 15-minute call — no pressure.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Book Free Call
          </Link>
        </div>
      </div>
    </>
  )
}
