import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Best MBA Colleges in Noida 2026",
  description: "Top MBA colleges in Noida 2026 — Amity Business School, IILM, Galgotias University, IMS Ghaziabad, Jaipuria Noida",
  path: "/mba-colleges-noida",
  keywords: [
    "mba colleges in noida",
    "best mba colleges in noida 2026",
    "top mba colleges noida ncr",
    "amity business school noida mba",
    "iilm noida mba",
    "galgotias mba noida",
    "ims ghaziabad mba",
    "jaipuria institute noida mba",
    "cat colleges noida",
    "mba fees noida 2026",
    "mba placement noida",
    "pgdm colleges noida",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "Jaipuria Institute of Management, Noida", type: "Autonomous PGDM", nirf: null, naac: "A", fees: "₹10L–14L (2yr)", placement: "₹9 LPA avg | ₹22 LPA highest", exam: "CAT / MAT / CMAT", slug: "jaipuria-institute-management-noida", highlight: "Best Autonomous MBA Noida" },
  { rank: 2, name: "Amity Business School – Amity University Noida", type: "Private Deemed", nirf: null, naac: "A+", fees: "₹12L–18L (2yr)", placement: "₹10 LPA avg | ₹30 LPA highest", exam: "CAT / MAT / CMAT / GMAT", slug: "amity-business-school-noida", highlight: "Largest B-School NCR" },
  { rank: 3, name: "IILM University – School of Management", type: "Private University", nirf: null, naac: "A", fees: "₹8L–12L (2yr)", placement: "₹8.5 LPA avg | ₹20 LPA highest", exam: "CAT / MAT / CMAT", slug: "iilm-university-greater-noida", highlight: "Strong Industry Connect" },
  { rank: 4, name: "IMS Ghaziabad – Business School", type: "Autonomous PGDM", nirf: null, naac: "A", fees: "₹7L–10L (2yr)", placement: "₹8 LPA avg | ₹18 LPA highest", exam: "CAT / MAT / CMAT", slug: "ims-ghaziabad-business-school", highlight: "Good ROI | PGDM Approved" },
  { rank: 5, name: "Galgotias University – School of Business", type: "Private University", nirf: null, naac: "A+", fees: "₹5L–8L (2yr)", placement: "₹7 LPA avg | ₹15 LPA highest", exam: "CAT / MAT / CMAT / GSAT", slug: "galgotias-university-mba-greater-noida", highlight: "Affordable MBA Noida" },
  { rank: 6, name: "Sharda University – School of Business Studies", type: "Private University", nirf: null, naac: "A+", fees: "₹4L–7L (2yr)", placement: "₹6.5 LPA avg | ₹15 LPA highest", exam: "CAT / MAT / CMAT", slug: "sharda-university-mba-greater-noida", highlight: "International Students Hub" },
  { rank: 7, name: "GL Bajaj Institute of Management & Research", type: "Autonomous PGDM", nirf: null, naac: "A+", fees: "₹5L–8L (2yr)", placement: "₹7 LPA avg | ₹16 LPA highest", exam: "CAT / MAT / CMAT", slug: "gl-bajaj-institute-management-research-noida", highlight: "NAAC A+ | Best ROI Noida" },
  { rank: 8, name: "NIET – School of Management", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹3L–5L (2yr)", placement: "₹5.5 LPA avg | ₹12 LPA highest", exam: "CAT / IPU CET MBA", slug: "niet-school-management-noida", highlight: "Most Affordable MBA Noida" },
]

const faqs = [
  { question: "Which is the best MBA college in Noida in 2026?", answer: "Jaipuria Institute of Management Noida is the best autonomous MBA/PGDM college in Noida — NAAC A, ₹9 LPA average placement, ₹10L–14L fees. Amity Business School is the largest (NAAC A+, ₹10 LPA avg, ₹12L–18L fees). For best ROI, GL Bajaj (NAAC A+, ₹7 LPA avg, ₹5L–8L fees) and IMS Ghaziabad offer excellent value. Near-Noida options: MDI Gurgaon and IMI Delhi have better placements but higher fees and CAT cutoffs." },
  { question: "What CAT percentile is needed for MBA colleges in Noida?", answer: "CAT cutoffs for Noida MBA colleges: Jaipuria Noida — 70-80 percentile. Amity Business School — 60-75 percentile (own GSAT also accepted). IMS Ghaziabad — 65-75 percentile. IILM — 65-75 percentile. GL Bajaj — 60-70 percentile. Galgotias University MBA — 50-65 percentile. NIET MBA — 50-60 percentile. Noida MBA colleges are significantly more accessible than FMS Delhi (99+) or MDI Gurgaon (96+)." },
  { question: "What is the total MBA fee at Noida colleges?", answer: "Total MBA/PGDM fees for 2-year programs at Noida colleges 2026: Amity Business School — ₹12L–18L. Jaipuria Noida — ₹10L–14L. IILM — ₹8L–12L. IMS Ghaziabad — ₹7L–10L. GL Bajaj — ₹5L–8L. Galgotias University — ₹5L–8L. Sharda University — ₹4L–7L. NIET MBA — ₹3L–5L. Education loans available through SBI and HDFC Credila for all these institutions." },
  { question: "Is MBA from Amity University Noida worth it?", answer: "Amity Business School's MBA/PGDM is worth it for students who can't get into FMS or MDI: ₹10 LPA average placement against ₹12L–18L total fees gives a payback period of about 18 months. Top recruiters include KPMG, Deloitte, Cognizant, Amazon, and Paytm. However, for ₹12L+ fees, students should weigh whether MDI Gurgaon (₹23L fees, ₹28 LPA avg) gives better long-term ROI." },
  { question: "Which is better — Jaipuria Noida or Amity Business School for MBA?", answer: "Jaipuria Noida is better overall: lower fees (₹10L–14L vs ₹12L–18L at Amity) with similar or better placement outcomes at top companies. Jaipuria has a more focused MBA culture and stronger alumni network in Delhi NCR corporate circle. Amity wins on brand recognition internationally and program diversity. For pure placement quality at lower cost, Jaipuria Noida is the better choice." },
]

export default function MBACollegesNoidaPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/best-mba-colleges-delhi" },
    { name: "MBA Colleges Noida", url: "/mba-colleges-noida" },
  ])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `${c.type} | ${c.fees} | ${c.placement}` })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/best-mba-colleges-delhi" className="hover:text-white">MBA Colleges</Link><span>/</span>
            <span className="text-white">Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Best MBA Colleges in Noida 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            Noida has 8+ MBA and PGDM colleges led by Jaipuria Institute, Amity Business School, IILM, IMS Ghaziabad, and GL Bajaj. Most accept CAT 60-80 percentile with total fees ₹3L–18L.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ value: "8+", label: "MBA Colleges" }, { value: "CAT 60+", label: "Min. Cutoff" }, { value: "₹10 LPA", label: "Amity Avg Pkg" }, { value: "₹3L", label: "Min. Total Fees" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Best MBA colleges in Noida NCR: <strong>Jaipuria Noida</strong> (CAT 70+, ₹9 LPA avg), <strong>Amity Business School</strong> (NAAC A+, ₹10 LPA avg), <strong>IILM</strong> (CAT 65+, ₹8.5 LPA avg), <strong>GL Bajaj</strong> (NAAC A+, best ROI), <strong>IMS Ghaziabad</strong> (CAT 65+, ₹8 LPA avg).</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top MBA / PGDM Colleges in Noida NCR 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>{["#", "College", "Type", "Total Fees", "Avg Pkg", "Exam"].map(h => <th key={h} className="px-3 py-3 text-left font-semibold text-xs">{h}</th>)}</tr>
            </thead>
            <tbody>
              {colleges.map((c, i) => (
                <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 text-gray-500 font-bold text-xs">{c.rank}</td>
                  <td className="px-3 py-3">
                    <Link href={`/colleges/${c.slug}`} className="font-semibold text-gray-900 hover:text-red-700 text-xs">{c.name}</Link>
                    <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
                  </td>
                  <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{c.type}</td>
                  <td className="px-3 py-3 text-gray-700 font-medium text-xs whitespace-nowrap">{c.fees}</td>
                  <td className="px-3 py-3 text-green-700 font-semibold text-xs whitespace-nowrap">{c.placement.split("|")[0].trim()}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{c.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — MBA Colleges in Noida</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">
                {f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
            { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi" },
            { label: "IIFT Delhi — MBA IB", href: "/iift-delhi" },
            { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon" },
            { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi" },
            { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi" },
            { label: "Executive MBA Delhi", href: "/executive-mba-delhi" },
            { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida" },
            { label: "Best MBA Colleges Delhi", href: "/best-mba-colleges-delhi" },
            { label: "MBA Placement Delhi", href: "/mba-colleges-delhi-placement" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Which Noida MBA college matches your CAT score and budget?</p>
            <p className="text-blue-200 text-sm">Get free personalised guidance for Noida MBA admissions.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
