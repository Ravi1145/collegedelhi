import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, MapPin, ExternalLink, BookOpen } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Top 10 Engineering colleges in Delhi 2026",
  description:
    "Top 10 engineering colleges in Delhi 2026: DTU Delhi (NIRF #49, ₹80K/yr, ₹12 LPA avg), IIIT Delhi (NIRF #101, ₹8.5 LPA), IMI Delhi (₹9.8 LPA)",
  path: "/top-10-engineering-colleges-in-delhi",
  keywords: [
    "top 10 engineering colleges in Delhi",
    "top engineering colleges in Delhi",
    "best engineering colleges in Delhi",
    "best engineering colleges Delhi ranking",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "Delhi Technological University (DTU)",
    type: "Government Autonomous",
    nirf: 49,
    naac: "A+",
    fees: "₹80K–₹1.8L/yr",
    avgPackage: "₹12 LPA",
    highestPackage: "₹45 LPA",
    placement: "92%",
    exam: "JEE Main / JEE",
    slug: "dtu-delhi-delhi-technological-university",
    highlight: "Best Govt. | Lowest Fees",
    location: "Connaught Place, Delhi",
  },
  {
    rank: 2,
    name: "NSUT (Netaji Subhas University of Technology)",
    type: "Autonomous",
    nirf: null,
    naac: "A",
    fees: "₹1.4L–₹1.9L/yr",
    avgPackage: "₹7.5 LPA",
    highestPackage: "₹35 LPA",
    placement: "89%",
    exam: "JEE Main / JEE",
    slug: "nsut-delhi",
    highlight: "Best for CS/IT",
    location: "Rohini Sector 17, Delhi",
  },
  {
    rank: 3,
    name: "Indraprastha Institute of Information Technology (IIIT Delhi)",
    type: "Autonomous",
    nirf: 101,
    naac: "A+",
    fees: "₹1.6L–₹2.2L/yr",
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹40 LPA",
    placement: "88%",
    exam: "JEE Main / JEE",
    slug: "iiit-delhi-indraprastha-institute-of-information-technology",
    highlight: "NIRF #101",
    location: "Dwarka Sector 3, Delhi",
  },
  {
    rank: 4,
    name: "NIT Delhi (National Institute of Technology Delhi)",
    type: "Deemed University",
    nirf: null,
    naac: "A+",
    fees: "₹3.6L–₹4.8L/yr",
    avgPackage: "₹9.8 LPA",
    highestPackage: "₹42 LPA",
    placement: "91%",
    exam: "JEE Main",
    slug: "nit-delhi-national-institute-of-technology",
    highlight: "Best Deemed | Top Recruiters",
    location: "Dwarka Sector 3, Delhi",
  },
  {
    rank: 5,
    name: "Amity University Delhi",
    type: "Deemed University",
    nirf: null,
    naac: "A+",
    fees: "₹2.0L–₹3.8L/yr",
    avgPackage: "₹7.2 LPA",
    highestPackage: "₹38 LPA",
    placement: "85%",
    exam: "JEE Main / JEE",
    slug: "amity-university-noida-delhi-ncr",
    highlight: "Best Infrastructure",
    location: "North Delhi",
  },
  {
    rank: 6,
    name: "IGDTUW Delhi",
    type: "Autonomous",
    nirf: null,
    naac: "A+",
    fees: "₹1.3L–₹1.75L/yr",
    avgPackage: "₹6.8 LPA",
    highestPackage: "₹28 LPA",
    placement: "84%",
    exam: "JEE Main / JEE",
    slug: "igdtuw-delhi-indira-gandhi-technical-university",
    highlight: "Best Women's College",
    location: "Kashmere Gate, Delhi",
  },
  {
    rank: 7,
    name: "GL Bajaj Delhi Merit College of Engineering",
    type: "Private",
    nirf: null,
    naac: "A",
    fees: "₹1.2L–₹1.7L/yr",
    avgPackage: "₹5.2 LPA",
    highestPackage: "₹22 LPA",
    placement: "78%",
    exam: "JEE Main",
    slug: "gl-bajaj-institute-technology-management-noida",
    highlight: "Best Private Budget",
    location: "Knowledge Park, Delhi",
  },
  {
    rank: 8,
    name: "NIET Noida",
    type: "Private",
    nirf: null,
    naac: "A",
    fees: "₹1.1L–₹1.55L/yr",
    avgPackage: "₹4.8 LPA",
    highestPackage: "₹20 LPA",
    placement: "75%",
    exam: "JEE Main",
    slug: "niet-noida-institute-engineering-technology",
    highlight: "Affordable & Reliable",
    location: "Greater Noida, NCR",
  },
  {
    rank: 9,
    name: "Sharda University Engineering",
    type: "Private",
    nirf: null,
    naac: "A",
    fees: "₹1.15L–₹1.6L/yr",
    avgPackage: "₹4.9 LPA",
    highestPackage: "₹18 LPA",
    placement: "74%",
    exam: "JEE Main",
    slug: "sharda-university-greater-noida",
    highlight: "Large Campus",
    location: "Greater Noida, NCR",
  },
  {
    rank: 10,
    name: "BPIT Delhi (Bhagwan Parshuram Institute of Technology)",
    type: "Deemed University",
    nirf: null,
    naac: "A",
    fees: "₹1.45L–₹1.95L/yr",
    avgPackage: "₹5.6 LPA",
    highestPackage: "₹22 LPA",
    placement: "76%",
    exam: "JEE Main / JEE",
    slug: "bvp-cet-delhi-bharati-vidyapeeth",
    highlight: "Strong Alumni Network",
    location: "Rohini Sector 17, Delhi",
  },
]

const topFiveDetails = [
  {
    rank: 1,
    emoji: "",
    badge: "bg-yellow-100 text-yellow-700",
    name: "Delhi Technological University (DTU)",
    slug: "dtu-delhi-delhi-technological-university",
    location: "Connaught Place, Delhi · Est. 1854",
    nirf: 49,
    naac: "A+",
    type: "Government",
    stats: [
      { label: "Annual Fees", value: "₹80K–₹1.8L" },
      { label: "Avg Placement", value: "₹12 LPA" },
      { label: "Highest Package", value: "₹45 LPA" },
      { label: "JEE Main Cutoff", value: "95+ percentile" },
    ],
    description:
      "DTU Delhi is India's third-oldest engineering college and Delhi's undisputed top government engineering institution. With NIRF Rank 49 and NAAC A+ grade, it offers B.Tech, M.Tech and Ph.D. programs at the lowest fees among top colleges. Top recruiters include TCS Digital, Bajaj Auto, Mercedes-Benz, Siemens and L&T. The Computer Engineering branch requires 99.5+ percentile in JEE Main.",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "B.Tech Electronics", "M.Tech", "Ph.D"],
  },
  {
    rank: 2,
    emoji: "",
    badge: "bg-gray-100 text-gray-700",
    name: "NSUT (Netaji Subhas University of Technology)",
    slug: "nsut-delhi",
    location: "Rohini Sector 17, Delhi · Est. 1983",
    nirf: null,
    naac: "A",
    type: "Autonomous",
    stats: [
      { label: "Annual Fees", value: "₹1.4L–₹1.9L" },
      { label: "Avg Placement", value: "₹7.5 LPA" },
      { label: "Highest Package", value: "₹35 LPA" },
      { label: "JEE Main Cutoff", value: "92–95 percentile" },
    ],
    description:
      "NSUT specializes exclusively in Computer and IT engineering, making it Delhi's most sought-after CS college after DTU Delhi. It consistently delivers Delhi's highest placement rate for CS/IT with top recruiters including Google, Microsoft, Amazon, Goldman Sachs and Deutsche Bank. The institute has produced numerous startup founders and top engineers at major global tech firms.",
    courses: ["B.Tech CSE", "B.Tech IT", "B.Tech AI&DS", "M.Tech CSE"],
  },
  {
    rank: 3,
    emoji: "",
    badge: "bg-red-100 text-red-800",
    name: "Indraprastha Institute of Information Technology (IIIT Delhi)",
    slug: "iiit-delhi-indraprastha-institute-of-information-technology",
    location: "Dwarka Sector 3, Delhi · Est. 1983",
    nirf: 101,
    naac: "A+",
    type: "Autonomous",
    stats: [
      { label: "Annual Fees", value: "₹1.6L–₹2.2L" },
      { label: "Avg Placement", value: "₹8.5 LPA" },
      { label: "Highest Package", value: "₹40 LPA" },
      { label: "JEE Main Cutoff", value: "88–92 percentile" },
    ],
    description:
      "IIIT Delhi holds NIRF Rank 101 nationally and NAAC A+ accreditation. Renowned for strong industry linkages with Bajaj Auto, Tata Motors, L&T and Bosch, IIIT Delhi excels in Mechanical, Electronics and Civil branches. It has a dedicated start-up incubation center, a strong global alumni network and excellent hostel facilities.",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech E&TC", "B.Tech Civil", "M.Tech", "MBA"],
  },
  {
    rank: 4,
    emoji: "4⃣",
    badge: "bg-blue-100 text-blue-700",
    name: "NIT Delhi (National Institute of Technology Delhi)",
    slug: "nit-delhi-national-institute-of-technology",
    location: "Knowledge Park Greater Noida, Delhi · Est. 2008",
    nirf: null,
    naac: "A+",
    type: "Deemed University",
    stats: [
      { label: "Annual Fees", value: "₹3.6L–₹4.8L" },
      { label: "Avg Placement", value: "₹9.8 LPA" },
      { label: "Highest Package", value: "₹42 LPA" },
      { label: "SET / JEE Cutoff", value: "SET score 80+" },
    ],
    description:
      "IMI Delhi is part of the Symbiosis International University ecosystem and offers the best private/deemed engineering experience in Delhi. Despite higher fees, it commands the highest average placement package (₹9.8 LPA) among all private engineering colleges. Top recruiters include Qualcomm, Synopsys, Persistent Systems and Volkswagen.",
    courses: ["B.Tech CSE", "B.Tech E&TC", "B.Tech Mechanical", "B.Tech AI&ML", "M.Tech"],
  },
  {
    rank: 5,
    emoji: "5⃣",
    badge: "bg-green-100 text-green-700",
    name: "Amity University Delhi",
    slug: "amity-university-noida-delhi-ncr",
    location: "North Delhi · Est. 1983",
    nirf: null,
    naac: "A+",
    type: "Deemed University",
    stats: [
      { label: "Annual Fees", value: "₹2.0L–₹3.8L" },
      { label: "Avg Placement", value: "₹7.2 LPA" },
      { label: "Highest Package", value: "₹38 LPA" },
      { label: "JEE Main Cutoff", value: "75–85 percentile" },
    ],
    description:
      "Amity University Delhi offers excellent infrastructure on a sprawling campus with state-of-the-art labs and sports facilities. It is known for a strong interdisciplinary approach combining engineering with design, management and liberal arts. Recruiters include TCS, Wipro, Infosys, Cognizant, Capgemini and several automotive companies.",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil", "B.Tech AI&DS", "B.Des", "MBA"],
  },
]

const faqs = [
  {
    question: "Which is the No. 1 engineering college in Delhi?",
    answer:
      "Delhi Technological University (DTU) is the No. 1 engineering college in Delhi. It holds NIRF Rank 49 nationally, NAAC A+ grade, charges the lowest fees (₹80K–₹1.8L/year) among top colleges, and delivers ₹12 LPA average placement. It was established in 1854 and is a government autonomous institute affiliated to Savitribai Phule Delhi University.",
  },
  {
    question: "What is the NIRF ranking of engineering colleges in Delhi?",
    answer:
      "DTU Delhi holds NIRF Rank 49 (best in Delhi), followed by IIIT Delhi at NIRF Rank 101. Other Delhi engineering colleges like NSUT, IMI Delhi, Amity University Delhi, and IGDTUW Delhi do not appear in the top-200 NIRF rankings but are accredited by NAAC A or A+. NIRF rankings are released annually by the Ministry of Education.",
  },
  {
    question: "What JEE Main percentile is needed for top 10 engineering colleges in Delhi?",
    answer:
      "DTU Delhi requires 95+ percentile for Computer Engineering. NSUT requires 92–95 percentile. IIIT Delhi requires 88–92 percentile. Amity University Delhi accepts from 75–85 percentile. GL Bajaj NIET, NIET Noida, Sharda and BVP accept 60–80 percentile. SC/ST categories get 15–20 percentile relaxation under the government reservation policy.",
  },
  {
    question: "Which Delhi engineering college has the best placement package?",
    answer:
      "DTU Delhi has the highest average package (₹12 LPA) with a highest package of ₹45 LPA. Among deemed/private colleges, IMI Delhi tops with ₹9.8 LPA average and ₹42 LPA highest. IIIT Delhi averages ₹8.5 LPA. NSUT excels for CS/IT specifically. For budget-friendly colleges with decent placements, BVP averages ₹5.6 LPA.",
  },
  {
    question: "Is IMI Delhi better than IIIT Delhi for engineering?",
    answer:
      "For placements, IMI Delhi (₹9.8 LPA avg) outperforms IIIT Delhi (₹8.5 LPA avg). IIIT Delhi has a NIRF Rank (101) while IMI Delhi does not appear in NIRF top-200. IIIT Delhi is cheaper (₹1.6L–₹2.2L/yr vs ₹3.6L–₹4.8L/yr). IIIT Delhi is better for Mechanical/Civil branches; IMI Delhi is better for CS/E&TC with international company exposure.",
  },
  {
    question: "What is the fee for top engineering colleges in Delhi?",
    answer:
      "Fees range from ₹80K/year (DTU Delhi Government) to ₹4.8L/year (IMI Delhi Deemed). Government colleges: ₹80K–₹1.8L/year. Autonomous private: ₹1.4L–₹2.2L/year (NSUT, IIIT Delhi, Cummins). Deemed universities: ₹2L–₹4.8L/year (Amity University Delhi, IMI Delhi). Budget private colleges: ₹1.1L–₹1.7L/year (GL Bajaj, NIET Noida, Sharda). SC/ST students get fee waivers and EBC scholarship support.",
  },
  {
    question: "Can I get admission in top Delhi engineering colleges through JEE Main?",
    answer:
      "Yes, DTU Delhi, IIIT Delhi, IMI Delhi and Amity University Delhi all accept JEE Main scores for direct admission outside JAC Delhi Rounds. DTU Delhi through JEE requires approximately 90+ percentile. IMI Delhi also accepts SET (Symbiosis Entrance Test) scores. Most other colleges primarily use JEE Main for admission through the CAP (Centralised Admission Process) conducted by the State CET Cell.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Top 10 Engineering colleges in Delhi", url: "/top-10-engineering-colleges-in-delhi" },
]

export default function Top10EngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 Engineering colleges in Delhi 2026",
    description: "NIRF-ranked list of the top 10 engineering colleges in Delhi by fees, placements, and accreditation",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
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

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/colleges" className="hover:text-white">Colleges</Link>
              <span>›</span>
              <span className="text-white">Top 10 Engineering colleges in Delhi</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Top 10 Engineering colleges in Delhi 2026 (NIRF Ranked)
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Authoritative ranked list of Delhi&apos;s top 10 engineering colleges for 2026, compared by NIRF rank, NAAC grade, annual fees, average placement packages, and entrance exam requirements.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>DTU (NIRF #49)</strong> is Delhi&apos;s top engineering college with fees ₹80K–₹1.8L/yr and ₹12 LPA avg placement. Top 5: <strong>NSUT</strong> (best CS/IT), <strong>IIIT Delhi</strong> (NIRF #101, ₹8.5 LPA), <strong>IMI Delhi</strong> (best private, ₹9.8 LPA), <strong>Amity University Delhi</strong> (best infrastructure). All require <strong>JEE Main</strong> (60–95 percentile depending on college).
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Colleges Ranked", value: "Top 10", icon: "" },
              { label: "Lowest Fees/yr", value: "₹80,000", icon: "" },
              { label: "Best Avg Package", value: "₹12 LPA", icon: "" },
              { label: "Top NIRF Rank", value: "#49 (DTU Delhi)", icon: "" },
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
              <h2 className="text-lg font-bold text-gray-900">Top 10 Engineering colleges in Delhi — Ranking Table 2026</h2>
              <p className="text-xs text-gray-400 mt-0.5">Ranked by NIRF rank, NAAC grade, average placement package & fees. Data verified 2026.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left w-8">#</th>
                    <th className="px-3 sm:px-4 py-3 text-left">College</th>
                    <th className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
                    <th className="px-3 sm:px-4 py-3 text-right hidden md:table-cell">Fees/Year</th>
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Top 5 Engineering colleges in Delhi — Detailed Review</h2>
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
              <BookOpen className="w-5 h-5 text-red-600" /> Admission Process for Top Engineering colleges in Delhi
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Step-by-Step Admission (JEE Main Route)</h3>
                <ol className="space-y-2">
                  {[
                    "Appear for JEE Main (April–May) or JEE Main (January & April)",
                    "Download scorecard and check percentile/rank",
                    "Register on JEE Main CAP portal after results (June–July)",
                    "Fill college preferences in order during JAC Delhi Round 1",
                    "Accept allotment online and pay seat confirmation fee",
                    "Report to allotted college with original documents",
                    "Complete admission formalities and pay full semester fees",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Documents Required for Admission</h3>
                <ul className="space-y-1.5">
                  {[
                    "JEE Main / JEE Main scorecard",
                    "Class 10 & 12 marksheets + passing certificate",
                    "School leaving certificate",
                    "Caste certificate (if applicable, for reservation)",
                    "Domicile certificate (Delhi)",
                    "Income certificate (for fee concession / EBC scholarship)",
                    "Aadhar card & 4 passport size photographs",
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
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Top 10 Engineering colleges in Delhi</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Engineering Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
              { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "" },
              { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
              { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
              { label: "JEE Main Colleges & Cutoffs 2026", href: "/JEE Main-colleges-Delhi", icon: "" },
              { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "" },
              { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "" },
              { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
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
              <p className="font-bold text-lg">Not sure which top college to target?</p>
              <p className="text-blue-200 text-sm">Use our free College Predictor to find your best match based on your JEE Main score.</p>
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


