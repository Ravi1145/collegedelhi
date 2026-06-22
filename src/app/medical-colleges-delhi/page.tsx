import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateSpeakableSchema, generateCourseSchema, generateArticleSchema } from "@/lib/seo"
import { CheckCircle, TrendingUp, Award, BookOpen, Users, AlertCircle } from "lucide-react"
import { getCutoff } from "@/data/cutoffs"
import GatedCutoffChartClient from "@/components/ui/GatedCutoffChartClient"
import TopicalHub from "@/components/seo/TopicalHub"
import ReviewedByline from "@/components/seo/ReviewedByline"

const LAST_UPDATED = "June 2026"

export const metadata: Metadata = genMeta({
  title: "Best Medical colleges in Delhi 2026",
  description: "Top government medical colleges in Delhi 2026: AIIMS Delhi (NIRF #1), Vardhman Mahavir Medical College, ABVIMS — NEET admission, fees, and hospital",
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
  { rank: 1, name: "AIIMS Delhi", type: "Government (Central)", nirf: 1, naac: "A++", fees: "₹1,628–₹50,000 total course", seats: 125, neet: "Among the highest in India (AIQ)", slug: "aiims-delhi", highlight: "NIRF #1 Medical | Nearly Free | India's Best" },
  { rank: 2, name: "Vardhman Mahavir Medical College (VMMC, Safdarjung Hospital)", type: "Government (Delhi)", nirf: null, naac: "A", fees: "₹1.15L–₹2.65L/yr", seats: null, neet: "Competitive — Delhi govt quota", slug: "vardhman-mahavir-medical-college", highlight: "Govt | Attached to Safdarjung Hospital" },
  { rank: 3, name: "Atal Bihari Vajpayee Institute of Medical Sciences & Dr. RML Hospital", type: "Government (Delhi)", nirf: null, naac: "A", fees: "₹51K–₹3.75L/yr", seats: null, neet: "Competitive — Delhi govt quota", slug: "atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital", highlight: "Govt | Attached to RML Hospital" },
]

const faqs = [
  { question: "Which is the best medical college in Delhi?", answer: "AIIMS Delhi is the best medical college in Delhi, consistently ranked NIRF #1 in Medical nationally with a NAAC A++ grade and among the most affordable MBBS fees in India (₹1,628–₹50,000 for the entire course). Admission is through NEET UG under the All India Quota and requires one of the highest NEET ranks in the country." },
  { question: "What other government medical colleges are there in Delhi besides AIIMS?", answer: "Delhi has several government medical colleges beyond AIIMS, including Vardhman Mahavir Medical College (attached to Safdarjung Hospital) and Atal Bihari Vajpayee Institute of Medical Sciences (attached to Dr. Ram Manohar Lohia Hospital). Both admit through NEET UG via Delhi's government quota counselling, with fees well below private medical colleges." },
  { question: "What is the fee for MBBS at AIIMS Delhi?", answer: "AIIMS Delhi MBBS fees are among the lowest in the country — approximately ₹1,628 to ₹50,000 for the entire course, depending on hostel and other charges. This makes it one of the most affordable medical degrees in India relative to its ranking and outcomes." },
  { question: "How do I get MBBS admission in a Delhi government medical college?", answer: "MBBS admission to all government medical colleges in India, including those in Delhi, requires qualifying NEET UG. AIIMS Delhi seats are filled through the All India Quota counselling conducted by the Medical Counselling Committee (MCC). Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences seats are filled through Delhi's state quota counselling process. Always confirm current-year dates and cutoffs on the official MCC and Delhi DGHS portals." },
  { question: "Which Delhi government medical college is attached to which hospital?", answer: "AIIMS Delhi has its own dedicated hospital campus. Vardhman Mahavir Medical College is attached to Safdarjung Hospital, one of the largest hospitals in Delhi. Atal Bihari Vajpayee Institute of Medical Sciences is attached to Dr. Ram Manohar Lohia (RML) Hospital. All three offer significant clinical exposure due to high patient volumes." },
  { question: "Is NEET UG required for all MBBS admissions in Delhi?", answer: "Yes. NEET UG is mandatory for MBBS admission to every medical college in India, including all government medical colleges in Delhi. There is no alternate entrance route for MBBS at AIIMS Delhi, Vardhman Mahavir Medical College, or Atal Bihari Vajpayee Institute of Medical Sciences." },
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

const articleSchema = generateArticleSchema({
    title: "Best Medical Colleges in Delhi 2026",
    description: "Top government medical colleges in Delhi 2026: AIIMS Delhi (NIRF #1), Vardhman Mahavir Medical College, ABVIMS — NEET admission, fees, and hospital",
    author: "CollegeDelhi Editorial Team",
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
    url: "/medical-colleges-delhi",
    category: "Medical",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
              <ReviewedByline lastUpdated={LAST_UPDATED} />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Best Medical colleges in Delhi 2026
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Compare AIIMS Delhi (NIRF #1 Medical), Vardhman Mahavir Medical College (Safdarjung Hospital), and Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital) by fees, hospital attachment, and admission route.
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
              <strong>AIIMS Delhi</strong> (NIRF #1 Medical, NAAC A++) is the best medical college in Delhi — among the most affordable MBBS programs in India (₹1,628–₹50,000 total course) but requires one of the highest NEET All India Quota ranks in the country, with 125 MBBS seats filled entirely through MCC counselling.{" "}
              <strong>Other Delhi government options:</strong> Vardhman Mahavir Medical College (attached to Safdarjung Hospital, fees ₹1.15L–₹2.65L/yr) and Atal Bihari Vajpayee Institute of Medical Sciences (attached to Dr. RML Hospital, fees ₹51K–₹3.75L/yr) — both admit through NEET UG and Delhi's state quota counselling process rather than the All India Quota used by AIIMS Delhi.
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
            {/* AIIMS Delhi */}
            <div className="border-2 border-red-200 rounded-2xl p-5 bg-red-50">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">#1 Best Medical</span>
                <span className="text-xs text-gray-500">NIRF 1</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">AIIMS Delhi</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A++ (Best in India)</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹1,628–₹50,000 (entire course)</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Admission: <strong>NEET UG, All India Quota</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>MBBS Seats: <strong>125</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Among the most competitive NEET cutoffs in India</span></li>
              </ul>
              <Link href="/colleges/aiims-delhi" className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* VMMC */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">#2 Govt Delhi</span>
                <span className="text-xs text-gray-500">NAAC A</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">Vardhman Mahavir Medical College (Safdarjung Hospital)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹1.15L–₹2.65L/year</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Admission: <strong>NEET UG, Delhi government quota</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Attached to Safdarjung Hospital, one of Delhi's largest</span></li>
              </ul>
              <Link href="/colleges/vardhman-mahavir-medical-college" className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* ABVIMS */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">#3 Govt Delhi</span>
                <span className="text-xs text-gray-500">NAAC A</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><Award className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>NAAC: <strong>A</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Fees: <strong>₹51K–₹3.75L/year</strong></span></li>
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Admission: <strong>NEET UG, Delhi government quota</strong></span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Attached to Dr. Ram Manohar Lohia Hospital</span></li>
              </ul>
              <Link href="/colleges/atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital" className="mt-4 block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
          </div>
        </section>

        {/* Full Comparison Table — live from backend */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <StreamCollegesTable stream="Medical" keywords={["medicine","dental","nursing","pharmacy"]} />
        </section>

        {/* Government Medical Colleges in Delhi */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Government Medical Colleges in Delhi — What to Know</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-4">Why choose a Delhi government medical college</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Significantly lower fees than private/deemed medical colleges</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Direct attachment to major government hospitals (Safdarjung, RML)</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>High patient volume gives strong clinical exposure</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Established alumni networks across India's public health system</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-bold text-orange-900 text-lg mb-4">What to plan for</h3>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li className="flex gap-2 text-red-700"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>NEET UG cutoffs for Delhi government medical colleges are highly competitive</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>AIIMS Delhi admits via NEET UG All India Quota; VMMC and ABVIMS admit via Delhi government quota counselling</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Check official NEET counselling schedules (MCC for AIQ, Delhi DGHS for state quota) for exact cutoff trends each year</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AIIMS Delhi NEET Cutoff Chart */}
        {(() => {
          const aiimsData = getCutoff("aiims-delhi", "neet")
          if (!aiimsData) return null
          return (
            <section className="py-10 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">AIIMS Delhi NEET Cutoff Trend 2020–2026</h2>
                  <p className="text-sm text-gray-500 mb-4">Historical NEET score required for AIIMS Delhi — India&apos;s top-ranked medical college.</p>
                  <GatedCutoffChartClient data={aiimsData} slug="aiims-delhi" height={240} />
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


