import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Vasant Kunj, Delhi 2026 | DU Colleges & South Delhi",
  description: "Best colleges in Vasant Kunj and South West Delhi 2026 — Shaheed Rajguru College, Shaheed Sukhdev College, Aryabhatta College DU, and colleges near Vasant Kunj metro. CUET guide.",
  path: "/colleges-vasant-kunj-delhi",
  keywords: [
    "colleges in vasant kunj delhi", "vasant kunj colleges 2026",
    "colleges near vasant kunj metro delhi", "du colleges vasant kunj",
    "aryabhatta college vasant kunj du", "south west delhi colleges",
    "colleges near airport delhi", "colleges vasant vihar delhi",
    "engineering colleges near vasant kunj", "bca colleges vasant kunj delhi",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "Aryabhatta College – Delhi University", location: "Malviya Nagar (near Vasant Kunj)", naac: "A+", fees: "₹10K–35K/yr", placement: "DU Science & Commerce programs", exam: "CUET", slug: "aryabhatta-college-delhi-university", highlight: "NAAC A+ | Science + Commerce" },
  { name: "Shaheed Rajguru College of Applied Sciences – DU", location: "Vasant Vihar (near Vasant Kunj)", naac: "A+", fees: "₹12K–40K/yr", placement: "DU Science programs", exam: "CUET", slug: "shaheed-rajguru-college-du", highlight: "Women's Applied Sciences | NAAC A+" },
  { name: "Sri Aurobindo College (Evening) – DU", location: "Malviya Nagar (near Vasant Kunj)", naac: "A", fees: "₹10K–30K/yr", placement: "DU evening programs", exam: "CUET", slug: "sri-aurobindo-college-evening-du", highlight: "Evening Programs | Affordable DU" },
  { name: "Lakshmibai College – Delhi University", location: "Ashok Vihar (near Vasant Kunj area)", naac: "A+", fees: "₹12K–35K/yr", placement: "DU programs", exam: "CUET", slug: "lakshmibai-college-delhi-university", highlight: "NAAC A+ Women's College" },
  { name: "Bhagini Nivedita College – Delhi University", location: "Kair, West Delhi (Vasant Kunj zone)", naac: "A", fees: "₹10K–30K/yr", placement: "DU Women's programs", exam: "CUET", slug: "bhagini-nivedita-college-du", highlight: "Women's DU College | Affordable" },
]

const faqs = [
  { question: "Which is the best college near Vasant Kunj, Delhi?", answer: "The top DU colleges near Vasant Kunj are: Aryabhatta College (NAAC A+, Malviya Nagar — excellent science and commerce programs), Shaheed Rajguru College (NAAC A+, Vasant Vihar — applied sciences for women), and Lakshmibai College (NAAC A+, women's college). For professional programs, the south Delhi belt offers IIT Delhi (Hauz Khas) and AIIMS Delhi (Ansari Nagar) for top engineering and medical respectively." },
  { question: "How is Vasant Kunj connected by Delhi Metro?", answer: "Vasant Kunj has Yellow Line metro access: Chhattarpur and Sultanpur stations on Yellow Line are closest, with Vasant Vihar area also served. Vasant Kunj's proximity to IIT Delhi (10 min), AIIMS (15 min), and JNU (10 min) via car makes it a premium student residential area. The area is also near NH 48 (Delhi-Gurugram expressway) giving access to Gurugram colleges like MDI within 25 minutes." },
  { question: "What CUET score is needed for Aryabhatta College and Lakshmibai College?", answer: "CUET cutoffs for Vasant Kunj area DU colleges: Aryabhatta College (BSc Mathematics/Physics Hons) — 94-97 percentile (General). Aryabhatta BCom — 92-95 percentile. Lakshmibai College (Science programs, women's) — 90-96 percentile. Shaheed Rajguru (Applied Sciences, women's) — 90-95 percentile. These are generally lower than North Campus colleges (Hindu, SRCC) making them accessible for students with 90-97 CUET percentile." },
  { question: "Is Vasant Kunj a good area for college students to live?", answer: "Vasant Kunj is one of Delhi's safest and most upscale residential areas — excellent for students from affluent families or those who prefer premium accommodation. PG options: ₹12,000–25,000/month. Proximity to IIT Delhi, AIIMS, JNU, and FMS makes it ideal for students at those institutions. However, it's expensive compared to Rohini, Dwarka, or Noida. Metro access via Yellow Line (Chhattarpur/Sultanpur) exists but is limited compared to central areas." },
]

export default function CollegesVasantKunjDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Colleges", url: "/colleges" }, { name: "Colleges in Vasant Kunj Delhi", url: "/colleges-vasant-kunj-delhi" }])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.exam}` })))

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link><span>/</span>
            <span className="text-white">Vasant Kunj Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Colleges in Vasant Kunj, Delhi 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">Vasant Kunj and South West Delhi area has Aryabhatta College (NAAC A+), Shaheed Rajguru (NAAC A+), Lakshmibai College — all DU colleges requiring CUET. Near IIT Delhi, AIIMS, and JNU.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Top colleges near Vasant Kunj Delhi: <strong>Aryabhatta College</strong> (NAAC A+, Malviya Nagar), <strong>Shaheed Rajguru College</strong> (NAAC A+, women's applied sciences), <strong>Lakshmibai College</strong> (NAAC A+, women's). All DU colleges — admission through CUET 2026. For engineering: IIT Delhi (Hauz Khas) is 10 minutes away.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Vasant Kunj, South West Delhi</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">{c.name}</Link>
              <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
              <p className="text-xs text-gray-500 mt-1">{c.location}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">NAAC {c.naac}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{c.exam}</span>
              </div>
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
          {[{ label: "Colleges in South Delhi", href: "/colleges-south-delhi" }, { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi" }, { label: "Government Colleges Delhi", href: "/government-colleges-delhi" }, { label: "SRCC vs Hindu College", href: "/srcc-vs-hindu-college" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need CUET guidance for DU colleges near Vasant Kunj?</p><p className="text-blue-200 text-sm">Free DU CSAS preference strategy and college selection counselling.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
