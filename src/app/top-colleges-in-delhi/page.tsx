import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, TrendingUp, BookOpen, CheckCircle } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Top Colleges in Delhi 2026 | Rankings, Fees & Placements",
  description:
    "Top colleges in Delhi 2026 across all streams. IIT Delhi (Engineering #2), AIIMS (Medical #1), FMS Delhi (MBA #13), Miranda House, SRCC, DTU, NSUT — NIRF ranks, fees & placements compared.",
  path: "/top-colleges-in-delhi",
  keywords: [
    "top colleges in delhi",
    "top colleges in delhi 2026",
    "top 10 colleges in delhi 2026",
    "top 20 colleges in delhi",
    "top colleges in delhi ncr",
    "top ranked colleges in delhi",
    "best and top colleges in delhi",
    "nirf top colleges in delhi",
    "top engineering colleges delhi 2026",
    "top mba colleges delhi 2026",
    "top medical colleges delhi 2026",
    "top arts colleges delhi 2026",
    "top commerce colleges delhi 2026",
    "top law colleges delhi 2026",
    "top government colleges delhi",
  ],
})

export const revalidate = 300

const topColleges = [
  {
    rank: 1,
    name: "IIT Delhi (Indian Institute of Technology Delhi)",
    stream: "Engineering / Research",
    type: "Central University",
    nirf: 2,
    naac: "A++",
    fees: "₹2.24L/yr",
    placement: "₹28 LPA avg | ₹2.5 Cr highest",
    exam: "JEE Advanced",
    slug: "iit-delhi",
    badge: "India's #2 Engineering",
  },
  {
    rank: 2,
    name: "AIIMS Delhi (All India Institute of Medical Sciences)",
    stream: "Medical / MBBS",
    type: "Central Government",
    nirf: 1,
    naac: "A+",
    fees: "₹1,628/yr",
    placement: "Top medical careers",
    exam: "NEET UG (top 50 AIR)",
    slug: "aiims-delhi",
    badge: "India's #1 Medical College",
  },
  {
    rank: 3,
    name: "FMS Delhi (Faculty of Management Studies, DU)",
    stream: "MBA / Management",
    type: "Central University (DU)",
    nirf: 13,
    naac: "A+",
    fees: "₹55K total (2-yr MBA)",
    placement: "₹32 LPA avg | ₹75 LPA highest",
    exam: "CAT 2025 (98+ %ile)",
    slug: "fms-delhi-faculty-management-studies",
    badge: "Best MBA Value in India",
  },
  {
    rank: 4,
    name: "Miranda House (University of Delhi)",
    stream: "Arts / Science / Commerce",
    type: "Government (DU Autonomous)",
    nirf: 1,
    naac: "A+",
    fees: "₹22K/yr",
    placement: "₹8 LPA avg",
    exam: "CUET 2026",
    slug: "miranda-house-delhi-university",
    badge: "NIRF #1 Among All Colleges",
  },
  {
    rank: 5,
    name: "SRCC (Shri Ram College of Commerce, DU)",
    stream: "Commerce / Economics",
    type: "Government (DU Autonomous)",
    nirf: 3,
    naac: "A+",
    fees: "₹24K/yr",
    placement: "₹12 LPA avg | ₹42 LPA highest",
    exam: "CUET 2026",
    slug: "srcc-sri-ram-college-commerce-du",
    badge: "India's Best Commerce College",
  },
  {
    rank: 6,
    name: "DTU (Delhi Technological University)",
    stream: "Engineering / B.Tech",
    type: "Government (State)",
    nirf: 49,
    naac: "A+",
    fees: "₹1.5L–2L/yr",
    placement: "₹18 LPA avg | ₹72 LPA highest",
    exam: "JEE Main (JAC Delhi)",
    slug: "dtu-delhi",
    badge: "Best Govt Engineering Delhi",
  },
  {
    rank: 7,
    name: "NSUT (Netaji Subhas University of Technology)",
    stream: "Engineering / B.Tech",
    type: "Government (State)",
    nirf: 52,
    naac: "A+",
    fees: "₹1.5L–2L/yr",
    placement: "₹16 LPA avg | ₹65 LPA highest",
    exam: "JEE Main (JAC Delhi)",
    slug: "nsut-delhi",
    badge: "NIRF #52 | Strong CS/IT",
  },
  {
    rank: 8,
    name: "MDI Gurgaon (Management Development Institute)",
    stream: "MBA / PGDM",
    type: "Autonomous",
    nirf: 9,
    naac: "A+",
    fees: "₹22L total (PGPM)",
    placement: "₹24 LPA avg | ₹60 LPA highest",
    exam: "CAT 2025 (99+ %ile)",
    slug: "mdi-gurgaon-management-development-institute",
    badge: "NIRF Top 10 B-School",
  },
  {
    rank: 9,
    name: "Jamia Millia Islamia (JMI Delhi)",
    stream: "Engineering / Arts / Science",
    type: "Central University",
    nirf: 14,
    naac: "A++",
    fees: "₹42K–₹1.5L/yr",
    placement: "₹10 LPA avg | ₹42 LPA highest",
    exam: "JEE Main / CUET",
    slug: "jmi-delhi",
    badge: "NAAC A++ Central University",
  },
  {
    rank: 10,
    name: "IIIT Delhi (Indraprastha Institute of Information Technology)",
    stream: "Engineering / CS / AI",
    type: "Autonomous (State)",
    nirf: 81,
    naac: "A",
    fees: "₹2.5L–3L/yr",
    placement: "₹20 LPA avg | ₹1.2 Cr highest",
    exam: "JEE Main (JOSAA/CSAB)",
    slug: "iiit-delhi",
    badge: "Best for CS & AI in Delhi",
  },
  {
    rank: 11,
    name: "Hindu College (University of Delhi)",
    stream: "Arts / Science / Commerce",
    type: "Government (DU Autonomous)",
    nirf: 5,
    naac: "A+",
    fees: "₹20K/yr",
    placement: "₹7 LPA avg",
    exam: "CUET 2026",
    slug: "hindu-college-du",
    badge: "Top DU College for Science",
  },
  {
    rank: 12,
    name: "Maulana Azad Medical College (MAMC Delhi)",
    stream: "Medical / MBBS",
    type: "Government (State)",
    nirf: 18,
    naac: "A+",
    fees: "₹60K–1.2L/yr",
    placement: "Medical careers",
    exam: "NEET UG (625+ score)",
    slug: "mamc-maulana-azad-medical-college-delhi",
    badge: "Delhi's Best Govt Medical",
  },
  {
    rank: 13,
    name: "IGDTUW (Indira Gandhi Delhi Technical University for Women)",
    stream: "Engineering / B.Tech",
    type: "Government (State)",
    nirf: 78,
    naac: "A+",
    fees: "₹1.2L–1.8L/yr",
    placement: "₹14 LPA avg | ₹55 LPA highest",
    exam: "JEE Main (JAC Delhi)",
    slug: "igdtuw-delhi",
    badge: "Best Women's Engineering College",
  },
  {
    rank: 14,
    name: "NLU Delhi (National Law University Delhi)",
    stream: "Law / LLB / BA LLB",
    type: "Government (State)",
    nirf: 1,
    naac: "A+",
    fees: "₹1.8L–2.5L/yr",
    placement: "₹14 LPA avg",
    exam: "CLAT / AILET",
    slug: "nlu-delhi-national-law-university",
    badge: "India's #1 Law College",
  },
  {
    rank: 15,
    name: "Lady Shri Ram College (LSR, DU)",
    stream: "Arts / Humanities",
    type: "Government (DU Autonomous)",
    nirf: 6,
    naac: "A+",
    fees: "₹20K/yr",
    placement: "₹7.5 LPA avg",
    exam: "CUET 2026",
    slug: "lady-shri-ram-college-du",
    badge: "Top Women's Arts College",
  },
]

const streamSummary = [
  { stream: "Engineering", best: "IIT Delhi → DTU → NSUT → IIIT Delhi → IGDTUW", exam: "JEE Advanced / JEE Main", href: "/engineering-colleges-delhi" },
  { stream: "MBA", best: "FMS Delhi → MDI Gurgaon → IMI Delhi → FORE School", exam: "CAT 2025 (Nov)", href: "/mba-colleges-delhi" },
  { stream: "Medical", best: "AIIMS Delhi → MAMC → VMMC → Lady Hardinge", exam: "NEET UG 2026 (May)", href: "/medical-colleges-delhi" },
  { stream: "Law", best: "NLU Delhi → Faculty of Law DU → Amity Law", exam: "CLAT / AILET 2026", href: "/law-colleges-delhi" },
  { stream: "Arts / Commerce", best: "Miranda House → SRCC → Hindu College → LSR", exam: "CUET 2026 (May)", href: "/arts-colleges-delhi" },
  { stream: "Science", best: "Miranda House → Kirori Mal → St. Stephen's → Hansraj", exam: "CUET 2026 (May)", href: "/science-colleges-delhi" },
  { stream: "Design", best: "Pearl Academy → NID Delhi → NIFT Delhi", exam: "NID DAT / NIFT Entrance", href: "/design-colleges-delhi" },
  { stream: "B.Com", best: "SRCC → Hindu College → Hansraj → Gargi", exam: "CUET 2026 (May)", href: "/bcom-colleges-delhi" },
]

const faqs = [
  {
    question: "Which is the top college in Delhi in 2026?",
    answer:
      "The top college in Delhi in 2026 depends on the stream. Overall: IIT Delhi is #2 in India for Engineering (NIRF 2025). AIIMS Delhi is India's #1 Medical College. FMS Delhi is India's best MBA value (₹55K fees, ₹32 LPA avg placement). Miranda House is NIRF #1 among all autonomous colleges. SRCC is India's #1 Commerce college. NLU Delhi is India's #1 Law college.",
  },
  {
    question: "What are the top 10 colleges in Delhi 2026 across all streams?",
    answer:
      "Top 10 colleges in Delhi 2026: 1. IIT Delhi (Engineering, NIRF #2), 2. AIIMS Delhi (Medical, NIRF #1), 3. FMS Delhi (MBA, NIRF #13), 4. Miranda House DU (Arts/Science, NIRF #1 college), 5. SRCC DU (Commerce, NIRF #3), 6. DTU Delhi (Engineering, NIRF #49), 7. NSUT Delhi (Engineering, NIRF #52), 8. MDI Gurgaon (MBA, NIRF #9 B-school), 9. Jamia Millia Islamia (Multi-stream, NAAC A++), 10. IIIT Delhi (CS/AI, NIRF #81).",
  },
  {
    question: "Which top college in Delhi has the best placements in 2026?",
    answer:
      "Best placements among top Delhi colleges in 2026: FMS Delhi leads MBA placements with ₹32 LPA average and McKinsey, BCG, Goldman Sachs offers. For engineering, DTU Delhi tops with ₹18 LPA average and ₹72 LPA highest offer. IIIT Delhi has ₹20 LPA average for CS/AI. MDI Gurgaon delivers ₹24 LPA average for MBA. SRCC DU has ₹12 LPA average for commerce graduates.",
  },
  {
    question: "What is the fee range for top colleges in Delhi?",
    answer:
      "Fees at top Delhi colleges 2026: AIIMS Delhi MBBS: ₹1,628/year (cheapest top college). Miranda House / SRCC DU: ₹20K–30K/year. FMS Delhi MBA: ₹55K total (2 years). DTU/NSUT Engineering: ₹1.5L–2L/year. IIT Delhi BTech: ₹2.24L/year. MDI Gurgaon MBA: ₹22L total. Government and central university colleges are significantly cheaper than private alternatives while offering superior outcomes.",
  },
  {
    question: "How to get admission in top colleges in Delhi?",
    answer:
      "Admission routes to top Delhi colleges 2026: IIT Delhi → JEE Advanced (top 2,000 rank). AIIMS Delhi → NEET UG (top 50 All India Rank). FMS Delhi MBA → CAT 2025 (98+ percentile). Miranda House / SRCC → CUET 2026 (high score in relevant subjects). DTU / NSUT / IIIT Delhi → JEE Main (JAC Delhi, 97+ percentile for CSE). NLU Delhi → CLAT 2026 (AILET for NLU Delhi specifically). MDI Gurgaon → CAT 2025 (99+ percentile).",
  },
  {
    question: "Which top colleges in Delhi are NAAC A++ accredited?",
    answer:
      "NAAC A++ accredited top colleges in Delhi (2026): IIT Delhi (Engineering), Jamia Millia Islamia (Multi-stream, Central University), Delhi University system (Arts/Science/Commerce). NAAC A+ colleges: AIIMS Delhi, DTU, NSUT, IIIT Delhi, FMS Delhi, IGDTUW, MDI Gurgaon, Miranda House, SRCC, Hindu College, LSR, Amity University Delhi. NAAC A++ is the highest possible accreditation grade in India.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Top Colleges in Delhi", url: "/top-colleges-in-delhi" },
]

export default function TopCollegesInDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Colleges in Delhi 2026",
    description: "Ranked list of top 15 colleges in Delhi NCR by NIRF, NAAC, placements, fees, and admission difficulty",
    numberOfItems: topColleges.length,
    itemListElement: topColleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-red-700">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Top Colleges in Delhi 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4" />
                Updated for 2026 Admissions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Top Colleges in Delhi 2026
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Complete ranking of top 15 colleges in Delhi NCR across all streams — Engineering, MBA, Medical, Law, Arts, Commerce. Compare NIRF ranks, NAAC grades, fees, and 2026 placement data.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> NIRF 2025 Verified</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> All Streams Covered</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> 2026 Fees & Placements</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">Quick Answer: Top College in Delhi 2026 by Stream</h2>
            <p className="text-green-900 text-sm leading-relaxed">
              <strong>Engineering:</strong> IIT Delhi (NIRF #2, ₹28 LPA avg). &nbsp;
              <strong>Medical:</strong> AIIMS Delhi (NIRF #1, ₹1,628/yr fees). &nbsp;
              <strong>MBA:</strong> FMS Delhi (NIRF #13, ₹32 LPA avg, ₹55K fees). &nbsp;
              <strong>Arts/Science:</strong> Miranda House DU (NIRF #1 college). &nbsp;
              <strong>Commerce:</strong> SRCC DU (NIRF #3 college). &nbsp;
              <strong>Law:</strong> NLU Delhi (NIRF #1 law). &nbsp;
              <strong>Engineering (Govt):</strong> DTU Delhi (NIRF #49, ₹18 LPA avg).
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-gray-50 border-y border-gray-100 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "15+", label: "Top-ranked colleges" },
                { value: "₹32 LPA", label: "Highest avg placement" },
                { value: "NAAC A++", label: "Top accreditation grade" },
                { value: "8 streams", label: "Engineering to Law" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top 15 College Ranking Table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Top 15 Colleges in Delhi 2026 — Complete Ranking
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm min-w-[700px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">College</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Stream</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">NIRF</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">NAAC</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden md:table-cell">Fees/yr</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden md:table-cell">Avg Placement</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden lg:table-cell">Exam</th>
                </tr>
              </thead>
              <tbody>
                {topColleges.map((c, i) => (
                  <tr key={c.slug} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-red-50 transition-colors`}>
                    <td className="px-4 py-3 font-bold text-red-700">{c.rank}</td>
                    <td className="px-4 py-3">
                      <Link href={`/colleges/${c.slug}`} className="font-semibold text-gray-900 hover:text-red-700 transition-colors block">
                        {c.name}
                      </Link>
                      <span className="text-xs text-gray-500 block mt-0.5">{c.badge}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{c.stream}</td>
                    <td className="px-4 py-3 text-gray-700">#{c.nirf}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.naac === "A++" ? "bg-purple-100 text-purple-700" : c.naac === "A+" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                        {c.naac}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{c.fees}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium hidden md:table-cell">{c.placement.split("|")[0].trim()}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{c.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top Colleges by Stream */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Top Colleges in Delhi by Stream — 2026 Quick Reference
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {streamSummary.map(({ stream, best, exam, href }) => (
                <Link
                  key={stream}
                  href={href}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-red-200 hover:shadow transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors">{stream}</h3>
                    <span className="text-red-600 text-lg shrink-0">›</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">{best}</p>
                  <span className="text-xs text-gray-400">Exam: {exam}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Top 3 */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 3 Colleges in Delhi — Detailed Profiles</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "#1 IIT Delhi",
                subtitle: "Best Engineering College",
                color: "border-red-200 bg-red-50",
                badge: "bg-red-600",
                items: [
                  "NIRF #2 in India (Engineering)",
                  "Avg placement: ₹28 LPA",
                  "Highest: ₹2.5 Cr (Goldman Sachs)",
                  "Fees: ₹2.24L/year",
                  "Exam: JEE Advanced (top 1,000 rank)",
                ],
                href: "/colleges/iit-delhi",
              },
              {
                title: "#2 AIIMS Delhi",
                subtitle: "Best Medical College",
                color: "border-blue-200 bg-blue-50",
                badge: "bg-blue-600",
                items: [
                  "NIRF #1 in India (Medical)",
                  "MBBS fees: ₹1,628/year only",
                  "70+ clinical specialties",
                  "Exam: NEET UG (top 50 AIR)",
                  "NAAC A+ | Govt of India",
                ],
                href: "/colleges/aiims-delhi",
              },
              {
                title: "#3 FMS Delhi",
                subtitle: "Best MBA College",
                color: "border-green-200 bg-green-50",
                badge: "bg-green-600",
                items: [
                  "NIRF #13 (Management)",
                  "Avg MBA placement: ₹32 LPA",
                  "Total fees: ₹55,000 only",
                  "Recruiters: McKinsey, BCG, Goldman Sachs",
                  "Exam: CAT 2025 (98+ %ile)",
                ],
                href: "/colleges/fms-delhi-faculty-management-studies",
              },
            ].map(({ title, subtitle, color, badge, items, href }) => (
              <div key={title} className={`border-2 ${color} rounded-2xl p-5`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`${badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>{title}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">{subtitle}</h3>
                <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <TrendingUp className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={href} className={`block text-center ${badge} text-white font-semibold py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity`}>
                  View Full Profile →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              FAQs — Top Colleges in Delhi 2026
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Explore by Stream</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi", icon: "" },
                { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi", icon: "" },
                { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi", icon: "" },
                { label: "Law Colleges Delhi", href: "/law-colleges-delhi", icon: "" },
                { label: "Arts Colleges Delhi", href: "/arts-colleges-delhi", icon: "" },
                { label: "B.Com Colleges Delhi", href: "/bcom-colleges-delhi", icon: "" },
                { label: "Science Colleges Delhi", href: "/science-colleges-delhi", icon: "" },
                { label: "Design Colleges Delhi", href: "/design-colleges-delhi", icon: "" },
                { label: "Government Colleges Delhi", href: "/government-colleges-delhi", icon: "" },
                { label: "Top 10 Engineering Delhi", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
                { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
                { label: "Best Colleges in Delhi", href: "/best-colleges-in-delhi", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2.5 hover:border-red-200 hover:shadow transition-all group"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Find Your College Among Delhi&apos;s Top Institutions
            </h2>
            <p className="text-red-100 mb-6 text-sm sm:text-base">
              Use our AI College Finder or talk to an expert — we&apos;ll match you to the best-fit top Delhi college based on your exam score, budget, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/ai-finder" className="bg-white text-red-700 font-bold px-8 py-3 rounded-2xl hover:bg-red-50 transition-colors text-sm">
                Try AI College Finder
              </Link>
              <Link href="/counselling" className="bg-red-800 text-white font-bold px-8 py-3 rounded-2xl hover:bg-red-900 transition-colors text-sm">
                Free Counselling Session
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
