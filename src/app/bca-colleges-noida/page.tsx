import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Best BCA Colleges in Noida 2026 | Fees, Cutoff & Placements",
  description: "Top BCA colleges in Noida NCR 2026 — Amity University, Galgotias University, Sharda University, GL Bajaj, NIET",
  path: "/bca-colleges-noida",
  keywords: [
    "bca colleges in noida", "best bca colleges noida 2026", "bca admission noida",
    "amity university noida bca", "galgotias university bca", "sharda university bca",
    "niet noida bca", "bca fees noida", "bca placement noida", "bca without cuet noida",
    "top bca colleges noida ncr", "mca colleges noida",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "Amity University Noida – BCA", type: "Private Deemed", fees: "₹1.8L–2.5L/yr", placement: "₹6 LPA avg", exam: "Amity JEE / CUET", naac: "A+", slug: "amity-university-noida-bca" },
  { rank: 2, name: "Galgotias University – BCA", type: "Private University", fees: "₹80K–1.2L/yr", placement: "₹5 LPA avg", exam: "CUET / GSAT", naac: "A+", slug: "galgotias-university-bca" },
  { rank: 3, name: "Sharda University – BCA", type: "Private University", fees: "₹70K–1L/yr", placement: "₹4.5 LPA avg", exam: "CUET / Own Test", naac: "A+", slug: "sharda-university-bca" },
  { rank: 4, name: "GL Bajaj Institute – BCA", type: "IP University Affiliated", fees: "₹60K–80K/yr", placement: "₹4.5 LPA avg", exam: "IPU CET", naac: "A+", slug: "gl-bajaj-bca-noida" },
  { rank: 5, name: "NIET Noida – BCA", type: "IP University Affiliated", fees: "₹65K–85K/yr", placement: "₹4.5 LPA avg", exam: "IPU CET", naac: "A", slug: "niet-noida-bca" },
  { rank: 6, name: "IILM University – BCA", type: "Private University", fees: "₹90K–1.3L/yr", placement: "₹5 LPA avg", exam: "CUET / Own Test", naac: "A", slug: "iilm-university-bca" },
  { rank: 7, name: "JSS Academy – BCA", type: "IP University Affiliated", fees: "₹60K–80K/yr", placement: "₹4 LPA avg", exam: "IPU CET", naac: "A", slug: "jss-academy-bca-noida" },
]

const faqs = [
  { question: "Which is the best BCA college in Noida?", answer: "Amity University Noida is the best BCA college in Noida for brand recognition and placements (₹6 LPA avg), though fees are higher (₹1.8L–2.5L/yr). For best value, GL Bajaj (NAAC A+, ₹60K–80K/yr, IPU CET) and Galgotias University (NAAC A+, ₹80K/yr) are excellent choices. NIET and JSS offer most affordable options at ₹60K–85K/year via IPU CET." },
  { question: "What is the admission process for BCA in Noida colleges?", answer: "BCA admission routes in Noida 2026: IP University affiliated colleges (GL Bajaj, NIET, JSS) — through IPU CET or JEE Main scores via GGSIPU counselling. Amity University — through Amity JEE or CUET scores. Galgotias and Sharda University — through CUET or own entrance test (GSAT). DU South Campus BCA — requires CUET. Most Noida private university BCA programs accept class 12 merit without any entrance exam." },
  { question: "What is the scope of BCA from Noida colleges?", answer: "BCA graduates from Noida colleges have strong career prospects given proximity to Noida IT sector: Sector 62, 63 IT hub has TCS, Infosys, HCL, Wipro, and 200+ tech companies. BCA graduates can go directly into software development (₹3.5–6 LPA), pursue MCA for higher roles (₹6–12 LPA), or pursue MBA in IT Management. Amity and Galgotias BCA graduates have placed at Amazon, Accenture, and TCS at ₹4.5–7 LPA." },
  { question: "Is BCA better than BTech in Noida colleges?", answer: "BTech is better than BCA for engineering roles — higher starting salaries (₹6–12 LPA vs ₹3–6 LPA), better NIRF-ranked college options (JIIT, Amity BTech), and access to core engineering jobs. However, BCA costs significantly less (₹60K–2.5L/yr vs ₹1.5L–4L/yr) and is 3 years vs 4 years. Choose BCA if you want to study IT at lower cost and plan to pursue MCA or MBA later. Choose BTech if you're clear on an engineering career." },
]

export default function BCACollegesNoidaPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "BCA Colleges Delhi", url: "/bca-colleges-delhi" }, { name: "BCA Colleges Noida", url: "/bca-colleges-noida" }])
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
            <Link href="/bca-colleges-delhi" className="hover:text-white">BCA Colleges</Link><span>/</span>
            <span className="text-white">Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Best BCA Colleges in Noida 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">Noida has 7+ BCA colleges — Amity (NAAC A+), Galgotias, Sharda, GL Bajaj, NIET. Fees ₹60K–2.5L/yr. Admission via IPU CET, CUET, or own tests. IT hub proximity = great internship access.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ value: "7+", label: "BCA Colleges" }, { value: "NAAC A+", label: "Top Colleges Grade" }, { value: "₹60K", label: "Min. Fees/yr" }, { value: "3 Years", label: "Program Duration" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-xl font-extrabold text-white">{s.value}</p><p className="text-xs text-blue-300 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Best BCA colleges in Noida: <strong>Amity Noida</strong> (NAAC A+, best brand, ₹6 LPA avg), <strong>Galgotias University</strong> (NAAC A+, ₹80K/yr), <strong>GL Bajaj</strong> (NAAC A+, most affordable IPU option at ₹60K/yr), <strong>NIET</strong> (IPU, ₹65K/yr).</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top BCA Colleges in Noida NCR 2026</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c, i) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-10 bg-[#0A1628] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">{c.rank}</div>
              <div className="flex-1">
                <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">{c.name}</Link>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">NAAC {c.naac}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{c.placement}</span>
                  <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{c.exam}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — BCA Colleges in Noida</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">{f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ label: "BCA Colleges Delhi", href: "/bca-colleges-delhi" }, { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" }, { label: "MBA Colleges Noida", href: "/mba-colleges-noida" }, { label: "Colleges Greater Noida", href: "/colleges-greater-noida" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need guidance for BCA admission in Noida?</p><p className="text-blue-200 text-sm">Free counselling for IPU CET, CUET, and direct BCA admissions.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
