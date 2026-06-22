import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Rohini, Delhi 2026",
  description: "Best colleges in Rohini, Delhi 2026 — DTU (Sector 22/Rohini), MAIT (Sector 22), BPIT, GTBIT, JIMS Rohini",
  path: "/colleges-rohini-delhi",
  keywords: [
    "colleges in rohini delhi",
    "rohini delhi colleges 2026",
    "DTU rohini delhi",
    "MAIT rohini delhi",
    "BPIT rohini delhi",
    "engineering colleges rohini delhi",
    "colleges near rohini sector 18 metro",
    "colleges near rohini east metro",
    "IP university colleges rohini",
    "best colleges near rohini delhi",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "DTU – Delhi Technological University (Main Campus)", location: "Shahbad Daulatpur, Rohini", naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹18 LPA avg | ₹72 LPA highest", exam: "JEE Main (JAC Delhi)", slug: "dtu-delhi" },
  { name: "MAIT – Maharaja Agrasen Institute of Technology", location: "Sector 22, Rohini", naac: "A", fees: "₹1.6L–2.1L/yr", placement: "₹7.5 LPA avg", exam: "IPU CET / JEE Main", slug: "mait-maharaja-agrasen-institute-technology" },
  { name: "BPIT – Bhagwan Parshuram Institute of Technology", location: "Sector 17, Rohini", naac: "A", fees: "₹1.5L–2L/yr", placement: "₹7 LPA avg", exam: "IPU CET", slug: "bpit-bhagwan-parshuram-institute-technology" },
  { name: "GTBIT – Guru Tegh Bahadur Institute of Technology", location: "G.T. Karnal Road, near Rohini", naac: "B+", fees: "₹1.5L–2L/yr", placement: "₹6.5 LPA avg", exam: "IPU CET", slug: "gtbit-guru-tegh-bahadur-institute-technology" },
  { name: "JIMS – Jagannath International Management School", location: "Sector 5, Rohini", naac: "A", fees: "₹1.5L–2.5L (MBA)", placement: "₹6 LPA avg", exam: "CAT / MAT / CMAT", slug: "jims-jagannath-international-management-rohini" },
  { name: "Delhi Institute of Advanced Studies (DIAS)", location: "Sector 25, Rohini", naac: "B+", fees: "₹60K–1.5L/yr", placement: "₹4.5 LPA avg", exam: "IPU CET", slug: "dias-delhi-institute-advanced-studies-rohini" },
  { name: "TECNIA Institute of Advanced Studies", location: "Rohini, Near Rithala Metro", naac: "B+", fees: "₹1.2L–1.8L/yr", placement: "₹5 LPA avg", exam: "IPU CET", slug: "tecnia-institute-advanced-studies-rohini" },
]

const faqs = [
  { question: "Which is the best engineering college in Rohini, Delhi?", answer: "DTU (Delhi Technological University) is the best engineering college in the Rohini area — its main campus is at Shahbad Daulatpur, accessible from Rohini sector 18 and Rithala metro stations (Red Line). DTU is NIRF #49, NAAC A+, with ₹18 LPA average placement and admission through JEE Main (99+ percentile for CSE via JAC Delhi). For students who can't reach DTU's cutoff, MAIT (Maharaja Agrasen IT, Sector 22) is the next best option with IPU CET/JEE Main admission." },
  { question: "Which metro stations are near colleges in Rohini?", answer: "Rohini is served by the Red Line (Line 5): Rohini East, Rohini West, Rohini Sector 18-19, and Rithala stations. DTU main campus is closest to Rohini Sector 18-19 station (about 3-4 km — auto/e-rickshaw available). MAIT, BPIT, and JIMS Rohini are within 1-3 km of Rohini East or Rohini West stations. The Red Line connects Rohini to Kashmere Gate in 20 minutes and Central Secretariat in 40 minutes." },
  { question: "What is the fee at MAIT Rohini and how to get admission?", answer: "MAIT (Maharaja Agrasen Institute of Technology, Sector 22 Rohini) charges ₹1.6L–2.1L/year for B.Tech programs. Admission is through IP University CET (Common Entrance Test) conducted in May. JEE Main scores are also accepted for some seats. MAIT offers CSE, IT, ECE, EEE, and Mechanical branches. Average placement is ₹7.5 LPA with companies like TCS, Infosys, Wipro, and HCL recruiting." },
  { question: "Is accommodation available for students near colleges in Rohini?", answer: "Yes — Rohini is one of Delhi's best areas for affordable student accommodation. PG options near DTU campus (Shahbad Daulatpur / Punjabi Bagh): ₹6,000–12,000/month. Near MAIT/BPIT (Sector 22, Pitampura): ₹5,000–10,000/month. Rohini sectors 1-26 offer dense PG options. Shared apartments in Rohini average ₹4,000–8,000/person/month — significantly cheaper than South Delhi." },
  { question: "Is BPIT better or MAIT for engineering in Rohini?", answer: "MAIT (NAAC A, Sector 22) is generally considered marginally better than BPIT (NAAC A, Sector 17) in Rohini for engineering: MAIT has slightly higher placements (₹7.5 LPA vs ₹7 LPA), better brand recognition, and somewhat higher cutoffs in IP University CET. Both are good IP University affiliated colleges. If you get CSE at BPIT and a non-CS branch at MAIT, prefer BPIT CSE — the branch matters more at this level." },
]

export default function CollegesRohiniDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in Rohini Delhi", url: "/colleges-rohini-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in Rohini, Delhi 2026",
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
            <span className="text-white">Colleges in Rohini Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Colleges in Rohini, Delhi 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            Rohini is home to DTU — one of India's best government engineering colleges — plus MAIT, BPIT, GTBIT, and JIMS Rohini. All Red Line metro-accessible via Rohini East, West, and Rithala stations.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">The best college in Rohini, Delhi is <strong>DTU (Delhi Technological University)</strong> — NIRF #49, NAAC A+, government, ₹18 LPA average placement, JEE Main 99+ percentile required for CSE. For IP University students, <strong>MAIT (Sector 22)</strong> and <strong>BPIT (Sector 17)</strong> are the strongest options with IPU CET admission.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Rohini, Delhi</h2>
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
              <div className="text-xs text-gray-500 whitespace-nowrap shrink-0">{c.exam}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Colleges in Rohini, Delhi</h2>
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
            { label: "DTU Admission 2026", href: "/colleges/dtu-delhi" },
            { label: "DTU vs NSUT", href: "/dtu-vs-nsut" },
            { label: "Colleges in North Delhi", href: "/colleges-north-delhi" },
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "JEE Predictor Delhi", href: "/predictor" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Need guidance for DTU or MAIT Rohini admission?</p>
            <p className="text-blue-200 text-sm">Our counsellors explain JAC Delhi and IPU CET processes in detail. Free 15-min session.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">JEE Predictor</Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
          </div>
        </div>
      </div>
    </>
  )
}
