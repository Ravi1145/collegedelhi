import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Best BBA Colleges in Noida 2026",
  description: "Top BBA colleges in Noida NCR 2026 — Amity University, Galgotias, Sharda, IILM, GL Bajaj. CUET/direct admission, fees ₹60K–3L/yr, average placements ₹4–7 LPA",
  path: "/bba-colleges-noida",
  keywords: [
    "bba colleges in noida", "best bba colleges noida 2026", "top bba colleges noida ncr",
    "amity university noida bba", "galgotias university bba", "sharda university bba noida",
    "iilm noida bba", "bba fees noida 2026", "bba admission noida", "bba placement noida",
    "bba colleges noida without cuet", "bba colleges greater noida",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "Amity University Noida – BBA", type: "Private Deemed", naac: "A+", fees: "₹2L–3L/yr", placement: "₹7 LPA avg", exam: "Amity JEE / CUET", slug: "amity-university-noida-bba", highlight: "Best Brand | Largest BBA Program" },
  { rank: 2, name: "IILM University – BBA", type: "Private University", naac: "A", fees: "₹1.2L–1.8L/yr", placement: "₹6 LPA avg", exam: "CUET / Own Test", slug: "iilm-university-bba-noida", highlight: "Strong Corporate Connect" },
  { rank: 3, name: "Galgotias University – BBA", type: "Private University", naac: "A+", fees: "₹70K–1.1L/yr", placement: "₹5 LPA avg", exam: "CUET / GSAT", slug: "galgotias-university-bba", highlight: "Affordable | NAAC A+" },
  { rank: 4, name: "Sharda University – BBA", type: "Private University", naac: "A+", fees: "₹65K–1L/yr", placement: "₹4.5 LPA avg", exam: "CUET / Own Test", slug: "sharda-university-bba", highlight: "International Exposure" },
  { rank: 5, name: "GL Bajaj Institute – BBA", type: "IP University Affiliated", naac: "A+", fees: "₹60K–80K/yr", placement: "₹4.5 LPA avg", exam: "IPU CET / CUET", slug: "gl-bajaj-bba-noida", highlight: "Best ROI | NAAC A+" },
  { rank: 6, name: "Jaipuria Institute – BBA", type: "Autonomous", naac: "A", fees: "₹1.5L–2L/yr", placement: "₹5.5 LPA avg", exam: "CAT / Own Test", slug: "jaipuria-institute-bba-noida", highlight: "Top Autonomous BBA Noida" },
]

const faqs = [
  { question: "Which is the best BBA college in Noida in 2026?", answer: "Amity University Noida is the best BBA college in Noida for brand recognition and placement network (₹7 LPA avg, recruiters like KPMG, Deloitte, Cognizant). For best value, Galgotias University (NAAC A+, ₹70K/yr) and GL Bajaj (NAAC A+, ₹60K/yr) are excellent. IILM Noida has strong corporate connections for BBA students. Jaipuria Institute is best for autonomous PGDM-track students." },
  { question: "What is the admission process for BBA in Noida colleges?", answer: "BBA admission in Noida 2026: DU South Campus BBA — CUET mandatory. Amity University — Amity JEE or CUET. Galgotias/Sharda — CUET or own university entrance test. GL Bajaj (IPU affiliated) — IPU CET or CUET. IILM — own test or CUET. Jaipuria — own entrance. Most Noida private university BBA programs also admit on class 12 merit basis (no entrance exam required) — check individual college websites." },
  { question: "What is the BBA fee structure at Noida colleges?", answer: "BBA annual fees at Noida colleges 2026: Amity University — ₹2L–3L/yr (₹6–9L total). IILM — ₹1.2L–1.8L/yr. Galgotias University — ₹70K–1.1L/yr. Sharda University — ₹65K–1L/yr. GL Bajaj — ₹60K–80K/yr (most affordable). Jaipuria — ₹1.5L–2L/yr. Total 3-year BBA cost ranges from ₹1.8L (GL Bajaj) to ₹9L (Amity). Education loan is available for all programs." },
  { question: "What careers can I get after BBA from Noida colleges?", answer: "BBA from Noida colleges opens paths to: Sales/Marketing executive (₹3–5 LPA fresher), Business Analyst (₹4–6 LPA), HR executive (₹3–4.5 LPA), Banking/Finance (₹3.5–5 LPA). Most BBA graduates from Amity and IILM pursue MBA afterward (FMS Delhi, MDI, NMIMS) for ₹10–30 LPA corporate roles. Noida's proximity to Sector 62/63 IT corridor and Connaught Place gives BBA students strong internship and placement access." },
]

export default function BBACollegesNoidaPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "BBA Colleges Delhi", url: "/bba-colleges-delhi" }, { name: "BBA Colleges Noida", url: "/bba-colleges-noida" }])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.placement}` })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/bba-colleges-delhi" className="hover:text-white">BBA Colleges</Link><span>/</span>
            <span className="text-white">Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Best BBA Colleges in Noida 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">Noida has 6+ BBA colleges — Amity (NAAC A+, ₹7 LPA avg), Galgotias (NAAC A+, ₹70K/yr), IILM, GL Bajaj, Sharda, Jaipuria. Admission via CUET, IPU CET, or direct merit.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ value: "6+", label: "BBA Colleges" }, { value: "NAAC A+", label: "Top Colleges" }, { value: "₹60K", label: "Min. Fees/yr" }, { value: "3 Years", label: "Duration" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-xl font-extrabold text-white">{s.value}</p><p className="text-xs text-blue-300 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Best BBA colleges in Noida: <strong>Amity Noida</strong> (best brand, ₹7 LPA avg), <strong>IILM</strong> (₹6 LPA avg, ₹1.2L/yr), <strong>Galgotias</strong> (NAAC A+, ₹70K/yr), <strong>GL Bajaj</strong> (NAAC A+, cheapest at ₹60K/yr).</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top BBA Colleges in Noida NCR 2026</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c, i) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-10 bg-[#0A1628] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">{c.rank}</div>
              <div className="flex-1">
                <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">{c.name}</Link>
                <div className="text-[10px] text-red-600 mt-0.5">{c.highlight}</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">NAAC {c.naac}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{c.placement}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 shrink-0">{c.exam}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">{f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" }, { label: "MBA Colleges Noida", href: "/mba-colleges-noida" }, { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" }, { label: "Colleges Greater Noida", href: "/colleges-greater-noida" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need BBA admission guidance for Noida?</p><p className="text-blue-200 text-sm">Free 15-min counselling for CUET, IPU CET, and direct admissions.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
