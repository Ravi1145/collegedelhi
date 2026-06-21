import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateSpeakableSchema, generateCourseSchema } from "@/lib/seo"
import { CheckCircle, TrendingUp, Award, BookOpen, Users, AlertCircle } from "lucide-react"
import { getCutoff } from "@/data/cutoffs"
import GatedCutoffChartClient from "@/components/ui/GatedCutoffChartClient"
import TopicalHub from "@/components/seo/TopicalHub"

export const metadata: Metadata = genMeta({
  title: "Best Medical colleges in Delhi 2026 | NEET Cutoff, Fees & MBBS Seats",
  description: "Top medical colleges in Delhi 2026 with NEET cutoffs, NIRF ranks, annual fees (₹50K–₹15L), and MBBS/BDS seat count. Compare AFMC (NIRF #4), Maulana Azad Medical College (NIRF #18), DY Patil & Bharati Vidyapeeth.",
  path: "/medical-colleges-delhi",
  keywords: [
    "best medical college in Delhi",
    "medical colleges in Delhi 2026",
    "neet cutoff Delhi medical colleges",
    "AIIMS Delhi admission 2026",
    "Maulana Azad Medical College Delhi 2026",
    "mbbs colleges Delhi fees",
    "neet 2026 Delhi",
    "government medical College Delhi",
    "Lady Hardinge Medical College Delhi",
    "Maulana Azad Medical College Delhi",
    "mbbs fees Delhi 2026",
    "top medical colleges Delhi neet score",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "AFMC – AIIMS Delhi", type: "Government (Defence)", nirf: 4, naac: "A++", fees: "₹50,000 (total 4.5 yrs)", seats: 130, neet: "650+", slug: "afmc-armed-forces-medical-college-delhi", highlight: "NIRF #4 | Nearly Free | Best in India" },
  { rank: 2, name: "Maulana Azad Medical College (MAMC)", type: "Government", nirf: 18, naac: "A+", fees: "₹60K–₹1.2L/yr", seats: 250, neet: "625+ (Open)", slug: "bj-medical-college-delhi", highlight: "NIRF #18 | Best Govt for State Quota" },
  { rank: 3, name: "Lady Hardinge Medical College, Delhi", type: "Deemed", nirf: null, naac: "A", fees: "₹11L–₹15L/yr", seats: 150, neet: "500–550 (Mgmt)", slug: "dy-patil-medical-college-delhi", highlight: "Most Seats | Management Quota Available" },
  { rank: 4, name: "Maulana Azad Medical College", type: "Deemed", nirf: null, naac: "A", fees: "₹8.5L–₹12L/yr", seats: 150, neet: "490–540 (Mgmt)", slug: "bharati-vidyapeeth-medical-college-delhi", highlight: "Affordable Deemed | Good Facilities" },
  { rank: 5, name: "Dr. Lady Hardinge Medical College, Pitampura", type: "Deemed", nirf: null, naac: "A", fees: "₹10L–₹14L/yr", seats: 150, neet: "510–560 (Mgmt)", slug: "dy-patil-medical-college-Pitampura-Delhi", highlight: "Large Hospital Attached" },
  { rank: 6, name: "Deenanath Mangeshkar Hospital & Research Centre", type: "Private", nirf: null, naac: "B+", fees: "₹7L–₹10L/yr", seats: 100, neet: "480–530 (Mgmt)", slug: "deenanath-mangeshkar-medical-college-delhi", highlight: "Prestigious Hospital Brand" },
  { rank: 7, name: "Smt. Kashibai Navale Medical College & GH", type: "Private", nirf: null, naac: "B+", fees: "₹7.5L–₹11L/yr", seats: 150, neet: "470–520 (Mgmt)", slug: "smt-kashibai-navale-medical-college-delhi", highlight: "Modern Infrastructure" },
  { rank: 8, name: "Delhi Dental College & Hospital", type: "Government", nirf: null, naac: "A", fees: "₹1.5L–₹2.5L/yr", seats: 60, neet: "500+ for BDS", slug: "Delhi-dental-college-delhi", highlight: "Best Govt Dental – BDS" },
]

const faqs = [
  { question: "Which is the best medical college in Delhi?", answer: "AIIMS Delhi is the best medical college in Delhi with NIRF Rank 4, NAAC A++ grade, and near-zero fees (₹50,000 total for 4.5 years MBBS). It requires 650+ NEET score + AFMC entrance test + SSB interview. Maulana Azad Medical College (NIRF #18) is the best accessible government option at 625+ NEET for open category students." },
  { question: "What NEET score is required for AIIMS Delhi?", answer: "AFMC requires 650+ NEET 2026 score (out of 720) along with a separate AFMC screening test and SSB (Service Selection Board) interview. It has 130 MBBS seats. Fees are nearly free — just ₹50,000 for the entire 4.5-year course. Candidates must be unmarried Indian nationals aged 17–24." },
  { question: "What is the NEET cutoff for Maulana Azad Medical College Delhi 2026?", answer: "Maulana Azad Medical College (MAMC) Delhi's expected NEET 2026 cutoff for open category (state quota) is 625–640 marks. For OBC: 595–610 marks. For SC/ST: 500–530 marks. Government quota seats are filled through Delhi State CET Cell (NEET CAP) process. Maulana Azad Medical College has 250 MBBS seats and fees of ₹60K–1.2L/yr." },
  { question: "What is the fee for MBBS at Lady Hardinge Medical College Delhi?", answer: "Lady Hardinge Medical College Delhi charges ₹11L–₹15L per year for MBBS (management quota). For NRI quota, fees can be ₹25–35L per year. State quota seats (through NEET state merit) have fee capped at ₹2–3L/yr. Management quota at DY Patil requires 500–550 NEET score." },
  { question: "How to get MBBS admission in Delhi government college?", answer: "Step 1: Score 625+ in NEET 2026 (May 3, 2026). Step 2: Register on Delhi CET Cell MBBS CAP portal (June–July 2026). Step 3: Submit documents at Facilitation Centre. Step 4: Select Maulana Azad Medical College in preference during JAC Delhi Round 1 (July 2026). AFMC is separate — apply at afmc.nic.in with separate test and SSB." },
  { question: "Which is better — Lady Hardinge Medical College or Maulana Azad Medical College?", answer: "Lady Hardinge Medical College Delhi has more seats (150), fees ₹11–15L/yr, and is attached to a large 1,400-bed hospital. Maulana Azad Medical College has lower fees (₹8.5–12L/yr) and 150 seats attached to Bharati Vidyapeeth Hospital. For management quota MBBS, Bharati Vidyapeeth offers better value. DY Patil has a larger hospital and more OPD exposure." },
  { question: "Is there any dental college in Delhi for NEET?", answer: "Yes. Top dental (BDS) colleges in Delhi include: Govt Dental College & Hospital (lowest fees, 500+ NEET), Bharati Vidyapeeth Dental College, DY Patil Dental College, Sharda Dental College. BDS in government dental college costs ₹1.5–2.5L/yr. Management quota BDS at private college: ₹4–8L/yr. NEET is mandatory for all BDS admissions." },
  { question: "What is the process for NEET 2026 admission to Delhi medical colleges?", answer: "NEET 2026 is scheduled for May 3, 2026. Results expected June 2026. For Delhi government colleges (BJ Medical): register on Delhi CET Cell portal, fill CAP application, select college preferences, attend merit round. For AFMC: separate application at afmc.nic.in. For private management quota (DY Patil, Bharati Vidyapeeth): direct apply to colleges after NEET score declaration." },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Medical colleges in Delhi", url: "/medical-colleges-delhi" },
]

export default function MedicalCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Medical colleges in Delhi 2026",
    description: "List of top medical colleges in Delhi ranked by NIRF, NEET cutoff, fees, and facilities",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  const speakableSchema = generateSpeakableSchema(
    "https://www.collegedelhi.com/medical-colleges-delhi",
    ["h1", "h2", "#quick-answer"]
  )

  const courseSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: "MBBS / Medical Courses in Delhi",
  description: "5.5-year undergraduate medical degree. Admitted via NEET UG for AIIMS Delhi, MAMC, and all Delhi government medical colleges.",
  provider: { '@type': 'Organization', name: 'CollegeDelhi.com', sameAs: 'https://www.collegedelhi.com' },
  timeRequired: "P5Y6M",
  url: 'https://www.collegedelhi.com' + "/medical-colleges-delhi",
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: 1628, priceSpecification: { '@type': 'PriceSpecification', minPrice: 1628, maxPrice: 1200000, priceCurrency: 'INR' } },
}

return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-red-700">Home</Link></li>
              <li>/</li>
              <li><Link href="/colleges" className="hover:text-red-700">Colleges</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Medical colleges in Delhi</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4" />
                NEET 2026 — Updated Cutoffs
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Best Medical colleges in Delhi 2026
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Compare AFMC (NIRF #4), Maulana Azad Medical College (NIRF #18), DY Patil, and Bharati Vidyapeeth by NEET cutoff, annual fees (₹50K–₹15L/yr), MBBS seats, and hospital attachment quality.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> NEET 2026 Cutoffs</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> NIRF &amp; NAAC Verified</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> Govt &amp; Private Options</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">Quick Answer: Best Medical College in Delhi 2026</h2>
            <p className="text-green-900 text-sm leading-relaxed">
              <strong>AIIMS Delhi</strong> (NIRF Rank 4, NAAC A++) is the best medical college in Delhi — nearly free education (₹50,000 total) but requires 650+ NEET + separate test + SSB.{" "}
              <strong>Best govt option:</strong> Maulana Azad Medical College (NIRF #18) — 625+ NEET, ₹60K–1.2L/yr fees.{" "}
              <strong>Best private:</strong> Lady Hardinge Medical College — 500+ NEET (mgmt quota), ₹11–15L/yr.
            </p>
          </div>
        </section>

        {/* NEET Alert */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 font-semibold text-sm">NEET 2026 Important Dates</p>
              <p className="text-red-700 text-sm">Application: Feb 10 – Mar 10, 2026 &nbsp;|&nbsp; Exam: May 3, 2026 &nbsp;|&nbsp; Results: June 2026 &nbsp;|&nbsp; Counselling: July–August 2026</p>
            </div>
          </div>
        </section>

        {/* Top 3 College Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Top 3 Medical colleges in Delhi — Detailed Comparison</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* AFMC */}
            <div className="border-2 border-red-200 rounded-2xl p-5 bg-red-50">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">#1 Best Medical</span>
                <span className="text-xs text-gray-500">NIRF 4</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">AFMC – AIIMS Delhi</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A++ (Best in India)</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹50,000 total (entire course)</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>NEET Cutoff: <strong>650+ marks</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>MBBS Seats: <strong>130</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Also needs: AFMC test + SSB interview</span></li>
              </ul>
              <Link href="/colleges/afmc-armed-forces-medical-college-delhi" className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile â†’
              </Link>
            </div>
            {/* MAMC */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">#2 Best Govt</span>
                <span className="text-xs text-gray-500">NIRF 18</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">Maulana Azad Medical College (MAMC) Delhi</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A+</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹60K–₹1.2L/year</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>NEET Cutoff: <strong>625+ (Open, State Quota)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>MBBS Seats: <strong>250</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Admission: Delhi NEET JAC Delhi counselling</span></li>
              </ul>
              <Link href="/colleges/bj-medical-college-delhi" className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile â†’
              </Link>
            </div>
            {/* DY Patil */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">#3 Best Private</span>
                <span className="text-xs text-gray-500">NAAC A</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">Lady Hardinge Medical College, Delhi</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹11L–₹15L/year (Mgmt)</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>NEET Cutoff: <strong>500–550 (Mgmt Quota)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>MBBS Seats: <strong>150</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Hospital: 1,400 bed teaching hospital</span></li>
              </ul>
              <Link href="/colleges/dy-patil-medical-college-delhi" className="mt-4 block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile â†’
              </Link>
            </div>
          </div>
        </section>

        {/* Full Comparison Table — live from backend */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <StreamCollegesTable stream="Medical" keywords={["medicine","dental","nursing","pharmacy"]} />
        </section>

        {/* Govt vs Private Comparison */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Government vs Private Medical College in Delhi — Which is Better?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-4">Government Medical Colleges (AFMC, MAMC)</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Extremely low fees — ₹50K (AFMC) to ₹1.2L/yr (MAMC)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>NIRF ranked #4 (AFMC) and #18 (MAMC) — nationally recognized</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Large government hospital exposure — 500–1,000 bed hospitals</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Strong alumni network in government and private hospitals</span></li>
                  <li className="flex gap-2 text-red-700"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Very high NEET cutoff — 625–650+ marks required</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-bold text-orange-900 text-lg mb-4">Private Medical Colleges (DY Patil, Bharati Vidyapeeth)</h3>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>More accessible — 490–560 NEET score for management quota</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Modern infrastructure and new simulation labs</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Large private hospitals — good OPD and surgical exposure</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>State quota seats also available at regulated fees</span></li>
                  <li className="flex gap-2 text-red-700"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>High fees — ₹8.5L–₹15L/year for management quota</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AFMC NEET Cutoff Chart */}
        {(() => {
          const afmcData = getCutoff("afmc-armed-forces-medical-college-delhi", "neet")
          if (!afmcData) return null
          return (
            <section className="py-10 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">AIIMS Delhi NEET Cutoff Trend 2020–2026</h2>
                  <p className="text-sm text-gray-500 mb-4">Historical NEET score required for AFMC — India&apos;s top defence medical college.</p>
                  <GatedCutoffChartClient data={afmcData} slug="afmc-armed-forces-medical-college-delhi" height={240} />
                </div>
              </div>
            </section>
          )
        })()}

        {/* FAQ Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">FAQs — Medical colleges in Delhi 2026</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Related Guides */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Medical College Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "MBBS Colleges — NEET Cutoffs & Fees", href: "/mbbs-colleges-Delhi", icon: "" },
              { label: "NEET Colleges & Category Cutoffs", href: "/neet-colleges-Delhi", icon: "" },
              { label: "Top 10 Medical Colleges — Ranked", href: "/top-10-medical-colleges-in-delhi", icon: "" },
              { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "â­" },
              { label: "Pharmacy colleges in Delhi", href: "/pharmacy-colleges-delhi", icon: "" },
              { label: "Free Medical Counselling", href: "/counselling", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

        {/* Topical Hub */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicalHub
            pillarTitle="Medical Colleges in Delhi — Complete Guide"
            pillarKeyword="medical colleges in Delhi"
            spokeLinks={[
              { label: "Top 10 Medical Colleges Delhi", href: "/top-10-medical-colleges-in-delhi", description: "NIRF-ranked MBBS colleges" },
              { label: "MBBS Colleges Delhi", href: "/mbbs-colleges-delhi", description: "NEET cutoffs & seat matrix" },
              { label: "NEET Colleges Delhi", href: "/neet-colleges-delhi", description: "Colleges accepting NEET UG" },
              { label: "Nursing Colleges Delhi", href: "/nursing-colleges-delhi", description: "BSc Nursing admissions" },
              { label: "Pharmacy Colleges Delhi", href: "/pharmacy-colleges-delhi", description: "BPharm & MPharm colleges" },
              { label: "Paramedical Colleges Delhi", href: "/paramedical-colleges-delhi", description: "MLT, Radiology, Physiotherapy" },
            ]}
            relatedPillarLinks={[
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
              { label: "Best Colleges in Delhi", href: "/best-colleges-in-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            ]}
          />
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-600 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Need Help with NEET 2026 &amp; Medical Admission?</h2>
            <p className="text-red-100 mb-6 text-sm sm:text-base">Talk to our free medical admission counselor for NEET score analysis and college selection for Delhi 2026.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/predictor" className="bg-white text-red-600 font-bold px-8 py-3 rounded-2xl hover:bg-red-50 transition-colors text-sm">
                NEET College Predictor
              </Link>
              <Link href="/counselling" className="bg-red-800 text-white font-bold px-8 py-3 rounded-2xl hover:bg-red-900 transition-colors text-sm">
                Free Medical Counselling
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


