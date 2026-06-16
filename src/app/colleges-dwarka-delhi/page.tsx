import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Dwarka, Delhi 2026 | NSUT, IP Univ, Engineering & MBA",
  description: "Best colleges in Dwarka, Delhi 2026 — NSUT Dwarka Campus, IP University affiliated engineering and MBA colleges in Sectors 10, 22, 23, 24. Fees, metro access, admission guide.",
  path: "/colleges-dwarka-delhi",
  keywords: [
    "colleges in dwarka delhi",
    "dwarka delhi colleges 2026",
    "NSUT dwarka campus",
    "engineering colleges dwarka delhi",
    "MBA colleges dwarka delhi",
    "colleges near dwarka sector 10 metro",
    "colleges near dwarka sector 21 metro",
    "IP university colleges dwarka",
    "best colleges in dwarka sector 22",
    "affordable colleges near dwarka expressway",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "NSUT – Netaji Subhas University of Technology (Dwarka Campus)", location: "Sector 3, Dwarka, Delhi", naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹16 LPA avg | ₹65 LPA highest", exam: "JEE Main (JAC Delhi)", slug: "nsut-delhi" },
  { name: "BM Institute of Engineering & Technology", location: "Sector 10, Dwarka", naac: "B+", fees: "₹1.2L–1.7L/yr", placement: "₹5.5 LPA avg", exam: "IPU CET", slug: "bm-institute-engineering-technology-dwarka" },
  { name: "Sri Aurobindo College – Delhi University", location: "Sector 9, Dwarka (near Brar Square)", naac: "A", fees: "₹10K–35K/yr", placement: "DU programs", exam: "CUET", slug: "sri-aurobindo-college-delhi-university" },
  { name: "Vivekananda Institute of Professional Studies", location: "AU Block, Pitampura (Dwarka belt)", naac: "A", fees: "₹80K–1.5L/yr", placement: "₹5.5 LPA avg", exam: "IPU CET", slug: "vips-vivekananda-institute-professional-studies" },
  { name: "JIMS – Jagan Institute of Management Studies, Rohini", location: "Sector 5, Rohini / Dwarka", naac: "A", fees: "₹1.5L–2.5L (MBA)", placement: "₹6.5 LPA avg", exam: "CAT / MAT", slug: "jims-jagan-institute-management-studies-rohini" },
  { name: "Delhi Institute of Rural Development (DIRD)", location: "Sector 23, Dwarka", naac: "B+", fees: "₹60K–1L/yr", placement: "₹4 LPA avg", exam: "IPU CET", slug: "dird-delhi-institute-rural-development" },
]

const faqs = [
  { question: "Which is the best college in Dwarka, Delhi?", answer: "NSUT (Netaji Subhas University of Technology) Dwarka Campus is by far the best college in Dwarka, Delhi — NIRF #52 nationally in engineering, NAAC A+, government institution with ₹1.5L/year fees and ₹16 LPA average placement. Admission is through JEE Main (98.8+ percentile for CSE via JAC Delhi). NSUT Dwarka is a world-class engineering institution in the Sector 3, Dwarka area." },
  { question: "Which metro station is closest to NSUT Dwarka?", answer: "Dwarka Sector 10 metro station (Blue Line) is the closest to NSUT Dwarka main campus. The campus is approximately 1.5 km from Dwarka Sector 10 station — accessible by auto-rickshaw (₹30-50) or a 20-minute walk. Dwarka Sector 9 station is also nearby. From Rajiv Chowk (Central Delhi), NSUT takes about 35-40 minutes by Blue Line." },
  { question: "What engineering colleges are there near Dwarka Expressway?", answer: "Near Dwarka Expressway and Dwarka sectors: NSUT (Sector 3), BM Institute (Sector 10), various IP University affiliated colleges in Sector 22-25 area. The Dwarka Expressway also connects to Gurgaon colleges (MDI, IMT Gurgaon, Amity Gurugram) which are popular for Delhi students. Airport connectivity via Dwarka Expressway is a big advantage for NSUT students." },
  { question: "Is accommodation available near NSUT Dwarka?", answer: "Yes — Dwarka has abundant student accommodation: PG options in Sector 7, 9, and 10 area (₹7,000–14,000/month furnished). NSUT has on-campus hostel facilities (apply immediately after admission — highly competitive). Dwarka is known for being cleaner and safer than many Delhi areas, making it popular for outstation students. Shared apartments near NSUT cost ₹5,000–10,000/person/month." },
  { question: "What CUET score is needed for Sri Aurobindo College Dwarka (DU)?", answer: "Sri Aurobindo College is a Delhi University college in the Dwarka area. CUET cutoffs: BCom Hons — 94-97 percentile (General). BA programs — 90-96 percentile depending on subject. Science programs — 92-96 percentile. It is easier to get into Sri Aurobindo College compared to North Campus colleges (Hindu, Miranda, SRCC), making it a good option for students with 90-96 CUET percentile seeking DU admission." },
]

export default function CollegesDwarkaDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in Dwarka Delhi", url: "/colleges-dwarka-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in Dwarka, Delhi 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem", position: i + 1, name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>/</span>
            <span className="text-white">Colleges in Dwarka</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Colleges in Dwarka, Delhi 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            Dwarka, Delhi's largest planned residential area, hosts NSUT Dwarka Campus — one of India's top government engineering colleges — plus IP University affiliated institutions and a DU college. All Blue Line metro-accessible.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Quick answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">The best college in Dwarka, Delhi is <strong>NSUT (Netaji Subhas University of Technology)</strong> — a government engineering college (NIRF #52, NAAC A+) with ₹16 LPA average placement and admission through JEE Main. For DU undergraduate programs, <strong>Sri Aurobindo College</strong> (Dwarka/Brar Square area) is the nearest DU college.</p>
        </div>

        {/* College list */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Dwarka, Delhi</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c, i) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-10 bg-[#0A1628] rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
              <div className="flex-1">
                <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">{c.name}</Link>
                <p className="text-xs text-gray-500 mt-0.5">{c.location}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">NAAC {c.naac}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{c.placement}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 shrink-0">{c.exam}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Colleges in Dwarka, Delhi</h2>
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
            { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut" },
            { label: "Colleges in West Delhi", href: "/colleges" },
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "Colleges with Hostel Delhi", href: "/colleges-in-delhi-with-hostel" },
            { label: "JEE Main College Predictor", href: "/predictor" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Want guidance for NSUT Dwarka admission?</p>
            <p className="text-blue-200 text-sm">Our counsellors specialise in JAC Delhi and NSUT/DTU admissions. 100% free.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Free Counselling
          </Link>
        </div>
      </div>
    </>
  )
}
