import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, MapPin, ExternalLink, BookOpen } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Top 10 MBA colleges in Delhi 2026 | CAT Cutoff, Fees & Placements",
  description:
    "Top 10 MBA colleges in Delhi 2026: FMS Delhi (₹32 LPA avg, ₹55K fees), MDI Gurgaon (₹24 LPA), IIFT Delhi (₹22 LPA), IMI Delhi (₹14 LPA). CAT cutoffs, fees ₹55K–₹22L. Compare free.",
  path: "/top-10-mba-colleges-in-delhi",
  keywords: [
    "top 10 mba colleges in Delhi",
    "top mba colleges in Delhi",
    "best mba colleges in Delhi",
    "best mba colleges Delhi ranking",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "FMS Delhi (Faculty of Management Studies, Delhi University)",
    type: "Central University",
    nirf: 5,
    naac: "A++",
    fees: "₹55K (2yr total)",
    avgPackage: "₹32 LPA",
    highestPackage: "₹72 LPA",
    placement: "100%",
    exam: "CAT",
    slug: "fms-delhi-faculty-management-studies",
    highlight: "India's Best MBA Value | NIRF #5 | ₹55K Fees",
    location: "DU North Campus, Delhi",
  },
  {
    rank: 2,
    name: "MDI Gurgaon (Management Development Institute)",
    type: "Autonomous Institute",
    nirf: 16,
    naac: "A+",
    fees: "₹22L (2yr total)",
    avgPackage: "₹24 LPA",
    highestPackage: "₹60 LPA",
    placement: "100%",
    exam: "CAT",
    slug: "mdi-gurgaon-management-development-institute",
    highlight: "NIRF #16 | Top Private MBA Delhi NCR | CAT 99%ile",
    location: "Sector 17, Gurgaon",
  },
  {
    rank: 3,
    name: "IIFT Delhi (Indian Institute of Foreign Trade)",
    type: "Central University",
    nirf: null,
    naac: "A",
    fees: "₹20L (2yr total)",
    avgPackage: "₹22 LPA",
    highestPackage: "₹50 LPA",
    placement: "100%",
    exam: "CAT / IIFT Exam",
    slug: "iift-delhi-indian-institute-foreign-trade",
    highlight: "Best International Business MBA in India",
    location: "Qutab Institutional Area, Delhi",
  },
  {
    rank: 4,
    name: "IMI Delhi (International Management Institute)",
    type: "Autonomous Private",
    nirf: null,
    naac: "A+",
    fees: "₹14L (2yr total)",
    avgPackage: "₹14 LPA",
    highestPackage: "₹36 LPA",
    placement: "98%",
    exam: "CAT / MAT / CMAT",
    slug: "imi-delhi-international-management-institute",
    highlight: "AMBA Accredited | Top Delhi B-School | CAT 85%ile",
    location: "Qutab Institutional Area, Delhi",
  },
  {
    rank: 5,
    name: "FORE School of Management Delhi",
    type: "Autonomous Private",
    nirf: null,
    naac: "A+",
    fees: "₹10.5L (2yr total)",
    avgPackage: "₹10.5 LPA",
    highestPackage: "₹28 LPA",
    placement: "97%",
    exam: "CAT / MAT / CMAT / XAT",
    slug: "fore-school-management-delhi",
    highlight: "AACSB Accredited | Central Delhi | Strong Alumni",
    location: "Qutab Institutional Area, Delhi",
  },
  {
    rank: 6,
    name: "BIMTECH Greater Noida (Birla Institute of Management Technology)",
    type: "Autonomous Private",
    nirf: null,
    naac: "A+",
    fees: "₹9.2L (2yr total)",
    avgPackage: "₹9.2 LPA",
    highestPackage: "₹25 LPA",
    placement: "96%",
    exam: "CAT / MAT / CMAT / XAT",
    slug: "bimtech-birla-institute-management-technology-noida",
    highlight: "Birla Group | Insurance & Finance Specialization",
    location: "Greater Noida",
  },
  {
    rank: 7,
    name: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management)",
    type: "Autonomous Private",
    nirf: null,
    naac: "A",
    fees: "₹8.8L (2yr total)",
    avgPackage: "₹8.8 LPA",
    highestPackage: "₹22 LPA",
    placement: "94%",
    exam: "CAT / MAT / CMAT",
    slug: "lbsim-lal-bahadur-shastri-institute-management-delhi",
    highlight: "Government Supported | Affordable Delhi MBA",
    location: "Dwarka Sector 7, Delhi",
  },
  {
    rank: 8,
    name: "DSM DTU (Delhi School of Management, DTU)",
    type: "Government (State University)",
    nirf: null,
    naac: "A+",
    fees: "₹2.5L (2yr total)",
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹20 LPA",
    placement: "92%",
    exam: "CAT / MAT / CMAT",
    slug: "dsm-dtu-delhi-school-management",
    highlight: "Govt. MBA | DTU Campus | Best Value After FMS",
    location: "Rohini, Delhi",
  },
  {
    rank: 9,
    name: "Jaipuria Institute of Management Noida",
    type: "Autonomous Private",
    nirf: null,
    naac: "A",
    fees: "₹7.5L (2yr total)",
    avgPackage: "₹7.5 LPA",
    highestPackage: "₹18 LPA",
    placement: "91%",
    exam: "CAT / MAT / CMAT",
    slug: "jaipuria-institute-management-noida",
    highlight: "Strong Industry Links | Noida Location",
    location: "Sector 62, Noida",
  },
  {
    rank: 10,
    name: "IMS Ghaziabad (University Courses Campus)",
    type: "Autonomous Private",
    nirf: null,
    naac: "A",
    fees: "₹4.5L (2yr total)",
    avgPackage: "₹6.8 LPA",
    highestPackage: "₹16 LPA",
    placement: "88%",
    exam: "MAT / CMAT / CAT",
    slug: "ims-ghaziabad-university-courses-campus",
    highlight: "Most Affordable NCR MBA | Good ROI",
    location: "NH-9, Ghaziabad",
  },
]

const topFiveDetails = [
  {
    rank: 1,
    emoji: "🥇",
    badge: "bg-yellow-100 text-yellow-700",
    name: "FMS Delhi (Faculty of Management Studies, Delhi University)",
    slug: "fms-delhi-faculty-management-studies",
    location: "DU North Campus, Delhi · Est. 1954",
    nirf: 5,
    naac: "A++",
    type: "Central University",
    stats: [
      { label: "Total Fees (2yr)", value: "₹55K" },
      { label: "Avg Placement", value: "₹32 LPA" },
      { label: "Highest Package", value: "₹72 LPA" },
      { label: "CAT Cutoff", value: "98+ percentile" },
    ],
    description:
      "FMS Delhi (Faculty of Management Studies) is ranked #5 in India by NIRF Management and is India's best MBA value with just ₹55K total fees and ₹32 LPA average placement. It is a department of Delhi University — not a private or Symbiosis college. With 100% placement, top recruiters include McKinsey, BCG, Bain, Goldman Sachs, P&G, Hindustan Unilever, and Amazon. Admission is through CAT (98+ percentile) followed by Personal Interview and Written Ability Test.",
    courses: ["MBA (2-year Full Time)", "MBA Finance", "MBA Marketing", "MBA HR", "MBA Operations"],
  },
  {
    rank: 2,
    emoji: "🥈",
    badge: "bg-gray-100 text-gray-700",
    name: "MDI Gurgaon (Management Development Institute)",
    slug: "mdi-gurgaon-management-development-institute",
    location: "Sector 17, Gurgaon · Est. 1973",
    nirf: 16,
    naac: "A+",
    type: "Autonomous Institute",
    stats: [
      { label: "Total Fees (2yr)", value: "₹22L" },
      { label: "Avg Placement", value: "₹24 LPA" },
      { label: "Highest Package", value: "₹60 LPA" },
      { label: "CAT Cutoff", value: "99+ percentile" },
    ],
    description:
      "MDI Gurgaon (Management Development Institute) is India's top private MBA college in the Delhi NCR region, ranked #16 by NIRF. Located in Gurgaon's business hub, it places graduates at McKinsey, BCG, Deloitte, Amazon, Goldman Sachs, and Fortune 500 companies. MDI requires CAT (not SNAP — SNAP is Symbiosis Pune only). Its PGDM (equivalent to MBA) specializations include Finance, Marketing, HR, and Operations.",
    courses: ["PGDM (Full Time)", "PGDM HRM", "PGDM International Business", "Executive PGDM"],
  },
  {
    rank: 3,
    emoji: "🥉",
    badge: "bg-orange-100 text-orange-800",
    name: "IIFT Delhi (Indian Institute of Foreign Trade)",
    slug: "iift-delhi-indian-institute-foreign-trade",
    location: "Qutab Institutional Area, Delhi · Est. 1963",
    nirf: null,
    naac: "A",
    type: "Central University",
    stats: [
      { label: "Total Fees (2yr)", value: "₹20L" },
      { label: "Avg Placement", value: "₹22 LPA" },
      { label: "Highest Package", value: "₹50 LPA" },
      { label: "CAT/IIFT Exam Cutoff", value: "95+ percentile" },
    ],
    description:
      "IIFT Delhi (Indian Institute of Foreign Trade) is India's premier institution for International Business MBA, established by the Ministry of Commerce. With ₹22 LPA average placement and 100% placement rate, top recruiters include McKinsey, BCG, Amazon, Flipkart, Deloitte, and major export-import firms. Accepts both CAT score and its own IIFT entrance exam (conducted in December).",
    courses: ["MBA International Business", "MBA Finance", "MBA Marketing", "MBA Supply Chain"],
  },
  {
    rank: 4,
    emoji: "4️⃣",
    badge: "bg-blue-100 text-blue-700",
    name: "IMI Delhi (International Management Institute)",
    slug: "imi-delhi-international-management-institute",
    location: "Qutab Institutional Area, Delhi · Est. 1981",
    nirf: null,
    naac: "A+",
    type: "Private",
    stats: [
      { label: "Total Fees (2yr)", value: "₹14L" },
      { label: "Avg Placement", value: "₹14 LPA" },
      { label: "Highest Package", value: "₹38 LPA" },
      { label: "CAT Cutoff", value: "85+ percentile" },
    ],
    description:
      "IMI Delhi (International Management Institute) is a top private MBA college in Delhi's Qutab Institutional Area, ranked among India's best B-schools. Established in 1981 with ties to IMI Geneva, it places graduates at Deloitte, KPMG, EY, Amazon, Flipkart, HDFC Bank, and leading consulting and BFSI firms. Admission through CAT (85+ percentile) or XAT, GMAT.",
    courses: ["PGDM (Full Time)", "PGDM HRM", "PGDM Executive (Part Time)", "FPM (Doctoral)"],
  },
  {
    rank: 5,
    emoji: "5️⃣",
    badge: "bg-green-100 text-green-700",
    name: "FORE School of Management Delhi",
    slug: "fore-school-management-delhi",
    location: "Qutab Institutional Area, Delhi · Est. 1981",
    nirf: null,
    naac: "A+",
    type: "Private",
    stats: [
      { label: "Total Fees (2yr)", value: "₹10.5L" },
      { label: "Avg Placement", value: "₹10.5 LPA" },
      { label: "Highest Package", value: "₹30 LPA" },
      { label: "CAT Cutoff", value: "80+ percentile" },
    ],
    description:
      "FORE School of Management Delhi (Foundation for Organisational Research and Education) is NAAC A+ accredited and offers excellent value for mid-CAT scorers. Located near IMI Delhi in Qutab Institutional Area, it places graduates at HDFC Bank, Axis Bank, ICICI Bank, Bajaj Finserv, Amazon, Deloitte, and FMCG majors. Strong in Finance and Marketing specializations.",
    courses: ["PGDM", "PGDM International Business", "PGDM Part Time"],
  },
]

const faqs = [
  {
    question: "Which is the No. 1 MBA college in Delhi?",
    answer:
      "FMS Delhi (Faculty of Management Studies, Delhi University) is the No. 1 MBA college in Delhi with NIRF Rank #5 (Management), NAAC A++, 100% placement record, and ₹32 LPA average package. Fees are just ₹55K for the full 2-year programme. Admission is through CAT (98+ percentile) followed by Written Ability Test and Personal Interview.",
  },
  {
    question: "What is the CAT cutoff for FMS Delhi and MDI Gurgaon in 2026?",
    answer:
      "FMS Delhi (Faculty of Management Studies, DU) requires a CAT percentile of 98+ for shortlisting. MDI Gurgaon requires 99+ percentile (very selective). IIFT Delhi requires 95+ percentile. IMI Delhi requires 85+ percentile. FORE School requires 80+ percentile. Note: SNAP is only for Symbiosis colleges in Pune — Delhi MBA colleges use CAT.",
  },
  {
    question: "What is the total MBA fee at top Delhi colleges?",
    answer:
      "FMS Delhi charges just ₹55K for the full 2-year MBA — India's most affordable top MBA. MDI Gurgaon: ₹22L (2yr). IIFT Delhi: ₹20L (2yr). IMI Delhi: ₹14L (2yr). FORE School Delhi: ₹10.5L (2yr). BIMTECH: ₹9.2L (2yr). DSM DTU (government): ₹2.5L (2yr). Government options offer exceptional value for CAT scorers.",
  },
  {
    question: "Is CAT score accepted at Delhi MBA colleges?",
    answer:
      "Yes, CAT is the primary entrance exam for top Delhi MBA colleges. FMS Delhi, MDI Gurgaon, IIFT Delhi, IMI Delhi, FORE School, BIMTECH, LBSIM, and DSM DTU all accept CAT scores. Some also accept XAT, CMAT, or MAT. Note: SNAP (Symbiosis National Aptitude Test) is only for Symbiosis colleges in Pune — it is not required or accepted by any Delhi MBA college.",
  },
  {
    question: "Which Delhi MBA college has the highest average placement package?",
    answer:
      "FMS Delhi has the highest average MBA placement in Delhi at ₹32 LPA with a highest package of ₹72 LPA (NIRF #5). MDI Gurgaon is second at ₹24 LPA average. IIFT Delhi averages ₹22 LPA. IMI Delhi averages ₹14 LPA. FORE School averages ₹10.5 LPA. BIMTECH averages ₹9.2 LPA. DSM DTU averages ₹8.5 LPA.",
  },
  {
    question: "What are the top recruiters for MBA graduates in Delhi?",
    answer:
      "Top MBA recruiters in Delhi include McKinsey, BCG, Bain, Deloitte, EY, KPMG, Amazon, Flipkart, P&G, Hindustan Unilever, Goldman Sachs, HDFC Bank, ICICI Bank, Axis Bank, Bajaj Finserv, Mahindra, TCS, Infosys, Wipro, Capgemini, ITC, Asian Paints, Marico, and Reliance. Management consulting, BFSI, and FMCG are the dominant sectors.",
  },
  {
    question: "Is FMS Delhi worth it despite the very high CAT cutoff?",
    answer:
      "Absolutely. FMS Delhi (Faculty of Management Studies, DU) charges only ₹55K total for the 2-year MBA and delivers ₹32 LPA average placement — India's best MBA ROI by far. With NIRF Rank #5 and alumni at McKinsey, Goldman Sachs, and global MNCs, the 98+ CAT percentile requirement is justified. Students typically recover the entire investment within the first month of working.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Top 10 MBA colleges in Delhi", url: "/top-10-mba-colleges-in-delhi" },
]

export default function Top10MBACollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 MBA colleges in Delhi 2026",
    description: "NIRF-ranked list of the top 10 MBA colleges in Delhi by CAT cutoff, fees, and placements",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/colleges" className="hover:text-white">Colleges</Link>
              <span>›</span>
              <span className="text-white">Top 10 MBA colleges in Delhi</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Top 10 MBA colleges in Delhi 2026 (NIRF Ranked &amp; CAT Cutoffs)
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Definitive ranked list of Delhi&apos;s top 10 MBA colleges for 2026. Compare NIRF rank, CAT cutoffs, total fees, average placement packages, and top recruiters — all in one place.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">⚡ Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>FMS Delhi (NIRF #5)</strong> is Delhi&apos;s best MBA college with ₹32 LPA avg, 100% placement, and only ₹55K fees. Top 5: <strong>MDI Gurgaon</strong> (₹24 LPA avg), <strong>IIFT Delhi</strong> (₹22 LPA, intl business), <strong>IMI Delhi</strong> (₹14 LPA), <strong>FORE School Delhi</strong> (₹10.5 LPA). All Delhi MBA colleges use <strong>CAT</strong> — not SNAP.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "MBA Colleges Ranked", value: "Top 10", icon: "🏛️" },
              { label: "Lowest Total Fees", value: "₹2.5L (2yr)", icon: "💰" },
              { label: "Best Avg Package", value: "₹32 LPA", icon: "📈" },
              { label: "Top NIRF Rank", value: "#5 (FMS Delhi)", icon: "🏆" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Top 10 MBA colleges in Delhi — Ranking Table 2026</h2>
              <p className="text-xs text-gray-400 mt-0.5">Ranked by NIRF rank, NAAC grade, placement average & entrance exam. Data verified 2026.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left w-8">#</th>
                    <th className="px-3 sm:px-4 py-3 text-left">College</th>
                    <th className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
                    <th className="px-3 sm:px-4 py-3 text-right hidden md:table-cell">Total Fees</th>
                    <th className="px-3 sm:px-4 py-3 text-right hidden lg:table-cell">Avg Package</th>
                    <th className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">Exam</th>
                    <th className="px-3 sm:px-4 py-3 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {colleges.map((c) => (
                    <tr key={c.rank} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-3 sm:px-4 py-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${c.rank <= 3 ? "bg-red-100 text-red-800" : "bg-gray-50 text-gray-500"}`}>
                          {c.rank}
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3">
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          <span className="text-xs text-gray-500">{c.type}</span>
                          {c.nirf && <span className="text-xs bg-purple-50 text-purple-700 px-1.5 rounded-full">NIRF #{c.nirf}</span>}
                          <span className="text-xs bg-blue-50 text-blue-700 px-1.5 rounded-full">{c.highlight}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.naac === "A+" ? "bg-green-100 text-green-700" : c.naac === "A" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {c.naac}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-right text-xs text-gray-700 hidden md:table-cell">{c.fees}</td>
                      <td className="px-3 sm:px-4 py-3 text-right text-xs font-semibold text-green-700 hidden lg:table-cell">{c.avgPackage}</td>
                      <td className="px-3 sm:px-4 py-3 text-center text-xs text-gray-500 hidden sm:table-cell">{c.exam}</td>
                      <td className="px-3 sm:px-4 py-3 text-center">
                        <Link href={`/colleges/${c.slug}`} className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 rounded-lg">
                          View <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 5 Deep Dive */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Top 5 MBA colleges in Delhi — Detailed Review</h2>
          <div className="space-y-5 mb-10">
            {topFiveDetails.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{c.emoji} Rank {c.rank}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.naac === "A+" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>NAAC {c.naac}</span>
                      {c.nirf && <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-0.5 rounded-full">NIRF #{c.nirf}</span>}
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{c.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{c.rank}. {c.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" /> {c.location}</p>
                  </div>
                  <Link href={`/colleges/${c.slug}`} className="inline-flex items-center gap-2 bg-[#0A1628] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#1E3A5F] transition-colors flex-shrink-0">
                    Full Details →
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {c.stats.map(({ label, value }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="text-sm font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.courses.map((course) => (
                    <span key={course} className="text-xs bg-red-50 text-red-800 border border-red-100 px-2.5 py-1 rounded-full">{course}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Admission Process */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-600" /> MBA Admission Process in Delhi 2026
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Top Delhi MBA Colleges (CAT Route)</h3>
                <ol className="space-y-2">
                  {[
                    "Register for CAT (August–September) at iimcat.ac.in",
                    "Appear for CAT exam (November)",
                    "Apply to shortlisted Delhi MBA colleges (Jan–Feb)",
                    "Shortlisted candidates appear for GD/WAT/PI (Feb–April)",
                    "Merit list announced — accept admission offer online",
                    "Pay confirmation fees and report to campus",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Documents Required for MBA Admission</h3>
                <ul className="space-y-1.5">
                  {[
                    "CAT / XAT / CMAT / MAT scorecard",
                    "Bachelor's degree marksheets (all years)",
                    "Bachelor's degree passing certificate",
                    "Class 10 & 12 certificates and marksheets",
                    "Work experience certificate (if any)",
                    "Caste certificate (if applicable)",
                    "Aadhar card & passport size photographs",
                    "Character certificate from last institution",
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Top 10 MBA colleges in Delhi</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related MBA Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
              { label: "MBA Placement Guide — LPA Stats", href: "/mba-colleges-delhi-placement", icon: "💼" },
              { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
              { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "🎓" },
              { label: "CAT Score colleges in Delhi", href: "/cat-colleges-delhi", icon: "📝" },
              { label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi", icon: "📊" },
              { label: "Admission Without CAT (IPU CET)", href: "/mba-admission-delhi-without-cat", icon: "🚀" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Which MBA college is right for your profile?</p>
              <p className="text-blue-200 text-sm">Get free expert counselling to shortlist colleges based on your CAT score and budget.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/predictor" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                College Predictor →
              </Link>
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                Free Counselling →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


