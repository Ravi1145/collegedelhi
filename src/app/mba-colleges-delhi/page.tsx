import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateSpeakableSchema, generateCourseSchema } from "@/lib/seo"
import TopicalHub from "@/components/seo/TopicalHub"
import { CheckCircle, TrendingUp, Award, BookOpen, Users, Star } from "lucide-react"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { getCutoff } from "@/data/cutoffs"
import GatedCutoffChartClient from "@/components/ui/GatedCutoffChartClient"

export const metadata: Metadata = genMeta({
  title: "Best MBA Colleges in Delhi 2026 | CAT Cutoff & Fees",
  description: "Top MBA colleges in Delhi 2026. FMS Delhi, MDI Gurgaon, IMI Delhi, FORE School — CAT cutoffs, fees (₹55K–₹22L), and placements (₹7–32 LPA) compared.",
  path: "/mba-colleges-delhi",
  keywords: [
    "mba colleges in delhi",
    "best mba colleges in delhi",
    "top mba colleges in delhi",
    "mba colleges in delhi 2026",
    "mba colleges in new delhi",
    "mba colleges in delhi ncr",
    "top 10 mba colleges in delhi",
    "best mba college in delhi ncr",
    "list of mba colleges in delhi",
    "mba colleges in delhi with good placement",
    "mba colleges in delhi fees structure",
    "mba fees in delhi colleges",
    "mba college ranking in delhi 2026",
    "mba colleges in delhi government",
    "fms delhi mba admission",
    "cat cutoff mba colleges delhi 2026",
    "mdi gurgaon admission 2026",
    "imi delhi mba 2026",
    "pgdm colleges delhi 2026",
    "top mba college in delhi ncr",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "FMS Delhi (Faculty of Management Studies, DU)", type: "Central University", nirf: 13, naac: "A+", fees: "₹55K total (2-yr MBA)", placement: "₹32 LPA avg | ₹75 LPA highest", exam: "CAT 2025 (98+ %ile)", slug: "fms-delhi-faculty-management-studies", highlight: "NIRF #13 | India's Best MBA Value" },
  { rank: 2, name: "MDI Gurgaon (Management Development Institute)", type: "Autonomous", nirf: 9, naac: "A+", fees: "₹22L total (PGPM)", placement: "₹24 LPA avg | ₹60 LPA highest", exam: "CAT 2025 (99+ %ile)", slug: "mdi-gurgaon-management-development-institute", highlight: "NIRF #9 | Top 10 B-School India" },
  { rank: 3, name: "IMI Delhi (International Management Institute)", type: "Autonomous", nirf: 42, naac: "A+", fees: "₹17.5L total (PGDM)", placement: "₹16 LPA avg | ₹40 LPA highest", exam: "CAT / XAT (85+ %ile)", slug: "imi-delhi-international-management-institute", highlight: "NIRF #42 | Strong Industry Connect" },
  { rank: 4, name: "FORE School of Management, Delhi", type: "Autonomous", nirf: 50, naac: "A+", fees: "₹14.5L total (PGDM)", placement: "₹13.5 LPA avg | ₹32 LPA highest", exam: "CAT / XAT / GMAT (80+ %ile)", slug: "fore-school-of-management-delhi", highlight: "NIRF #50 | Great ROI" },
  { rank: 5, name: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management)", type: "Autonomous", nirf: null, naac: "A+", fees: "₹7.5L total (PGDM)", placement: "₹10.5 LPA avg | ₹22 LPA highest", exam: "CAT / XAT / CMAT (70+ %ile)", slug: "lbsim-lal-bahadur-shastri-institute-management", highlight: "Best Budget PGDM Delhi" },
  { rank: 6, name: "BIMTECH Greater Noida (Birla Institute of Management Technology)", type: "Autonomous", nirf: null, naac: "A+", fees: "₹13.5L total (PGDM)", placement: "₹12 LPA avg | ₹28 LPA highest", exam: "CAT / XAT / GMAT (75+ %ile)", slug: "bimtech-birla-institute-management-technology", highlight: "Best for Marketing | Birla Group" },
  { rank: 7, name: "DSM DTU (Delhi School of Management, DTU)", type: "Government", nirf: null, naac: "A+", fees: "₹2.8L total (MBA)", placement: "₹9.5 LPA avg | ₹20 LPA highest", exam: "CAT / CMAT (70+ %ile)", slug: "delhi-school-of-management-dtu", highlight: "Best Govt MBA in Delhi | Low Fees" },
  { rank: 8, name: "IMT Ghaziabad (Institute of Management Technology)", type: "Autonomous", nirf: 40, naac: "A+", fees: "₹18.5L total (PGDM)", placement: "₹14.5 LPA avg | ₹38 LPA highest", exam: "CAT / XAT / GMAT (85+ %ile)", slug: "imt-ghaziabad", highlight: "NIRF #40 | Strong NCR Placements" },
  { rank: 9, name: "Jaipuria Institute of Management, Noida", type: "Private", nirf: null, naac: "A", fees: "₹6.5L total (PGDM)", placement: "₹7.5 LPA avg | ₹18 LPA highest", exam: "CAT / MAT / CMAT (60+ %ile)", slug: "jaipuria-institute-management-noida", highlight: "Best Budget MBA NCR | Low Cutoff" },
  { rank: 10, name: "IILM University, Gurugram", type: "Private", nirf: null, naac: "A", fees: "₹5.5L total (MBA)", placement: "₹7 LPA avg | ₹16 LPA highest", exam: "CAT / MAT / CMAT / Management Quota", slug: "iilm-university-gurugram", highlight: "Delhi NCR | Most Accessible MBA" },
]

const faqs = [
  { question: "Which is the best MBA college in Delhi in 2026?", answer: "FMS Delhi (Faculty of Management Studies, Delhi University) is the best MBA college in Delhi in 2026 with NIRF Rank 13, NAAC A+, average placement of ₹32 LPA, and top recruiters like McKinsey, BCG, Goldman Sachs, P&G, Deloitte. Admission is through CAT 2025 with 98+ percentile required. Total fees: just ₹55,000 — India's best MBA value." },
  { question: "What is the CAT 2025 cutoff for FMS Delhi?", answer: "The expected CAT 2025 cutoff for FMS Delhi is 98+ percentile overall. However, sectional cutoffs matter: 85+ percentile in each section (VARC, DILR, QA). FMS Delhi shortlists candidates for Written Ability Test (WAT) and Personal Interview (PI) held in Jan–Feb 2026. Apply at fms.edu between November and December 2025." },
  { question: "What are the fees for MBA colleges in Delhi 2026?", answer: "MBA fees in Delhi NCR 2026 range from ₹55K (FMS Delhi — India's cheapest top MBA) to ₹22L (MDI Gurgaon). FMS Delhi: ₹55K total. DSM DTU: ₹2.8L total. LBSIM: ₹7.5L. FORE School Delhi: ₹14.5L. IMI Delhi: ₹17.5L. MDI Gurgaon: ₹22L. IMT Ghaziabad: ₹18.5L. BIMTECH: ₹13.5L. Jaipuria Noida: ₹6.5L (best ROI at affordable budget)." },
  { question: "Can I get MBA in Delhi NCR with a low CAT score?", answer: "Yes. With CAT score below 80 percentile, you can apply to Jaipuria Noida (60+ %ile, ₹6.5L fees), IILM Gurugram (management quota available), DSM DTU (70+ %ile, ₹2.8L fees — best government option), and LBSIM Delhi (70+ %ile, ₹7.5L fees). MAT and CMAT scores are widely accepted by 5+ Delhi NCR MBA colleges." },
  { question: "Which Delhi MBA college has the best placements in 2026?", answer: "FMS Delhi leads with ₹32 LPA average MBA placement and individual offers reaching ₹75 LPA from McKinsey, BCG, Goldman Sachs. MDI Gurgaon (NIRF #9) is second with ₹24 LPA average. IMT Ghaziabad (NIRF #40) offers ₹14.5 LPA avg. FORE School Delhi gives ₹13.5 LPA avg at ₹14.5L total fees. IMI Delhi offers ₹16 LPA avg." },
  { question: "Is FMS Delhi better than MDI Gurgaon for MBA?", answer: "FMS Delhi (NIRF #13) vs MDI Gurgaon (NIRF #9): MDI Gurgaon has a slightly better NIRF rank but charges ₹22L vs FMS Delhi's ₹55K. FMS Delhi has better average placements (₹32 LPA vs ₹24 LPA). For pure ROI, FMS Delhi is unmatched anywhere in India. MDI Gurgaon wins for brand prestige and corporate campus culture. Both require CAT 95+ percentile." },
  { question: "Which exam is required for MBA admission in Delhi 2026?", answer: "CAT 2025 (November 2025) is the primary exam for FMS Delhi (98+ %ile), MDI Gurgaon (99+ %ile), IMI Delhi (85+ %ile), FORE School (80+ %ile), LBSIM, DSM DTU, and most Delhi NCR colleges. XAT (January 2026) is accepted at FORE School, BIMTECH, and IMI Delhi. MAT and CMAT are accepted at Jaipuria, IILM, and lower-tier colleges." },
  { question: "How to get admission in FMS Delhi 2026?", answer: "Step 1: Appear for CAT 2025 (November 2025) — target 98+ overall percentile. Step 2: Register and apply at fms.edu (December 2025). Step 3: If shortlisted, attend Written Ability Test (WAT) and Personal Interview (PI) in January–February 2026 at DU North Campus. Step 4: Accept admission offer and pay ₹55K fees. FMS Delhi is the most competitive MBA admission in Delhi by CAT percentile cutoff." },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "MBA colleges in Delhi", url: "/mba-colleges-delhi" },
]

export default function MBACollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const speakableSchema = generateSpeakableSchema("https://www.collegedelhi.com/mba-colleges-delhi", [
    "#quick-answer",
    "#mba-ranking-table",
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA colleges in Delhi 2026",
    description: "List of top 10 MBA colleges in Delhi NCR ranked by NIRF, placements, fees, and CAT/XAT cutoffs",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  const courseSchema = generateCourseSchema({
    name: "Master of Business Administration (MBA) in Delhi",
    description: "2-year postgraduate management program covering finance, marketing, HR, operations, and strategy. Offered by top Delhi B-schools including FMS Delhi, IMI Delhi, MDI Gurgaon, and FORE School.",
    provider: "CollegeDelhi.com",
    duration: "P2Y",
    url: "/mba-colleges-delhi",
    fees: { min: 55000, max: 2200000 },
  })

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Admission in FMS Delhi / MBA Colleges Delhi 2026",
    description: "Step-by-step guide to MBA admission in top Delhi NCR business schools — FMS Delhi, MDI Gurgaon, IMI Delhi.",
    totalTime: "P3M",
    step: [
      { "@type": "HowToStep", position: 1, name: "Appear for CAT 2025", text: "Register and appear for CAT 2025 (November 2025). Target 98+ percentile for FMS Delhi, 95+ for IMI Delhi/FORE School, 90+ for LBSIM/BIMTECH. CAT is the primary MBA entrance for all top Delhi B-schools." },
      { "@type": "HowToStep", position: 2, name: "Apply to Target MBA Colleges (Dec 2025–Jan 2026)", text: "Apply directly to: FMS Delhi at fms.edu, MDI Gurgaon at mdi.ac.in, IMI Delhi at imi.edu, FORE School at fsm.ac.in. Application windows typically open in December 2025 after CAT results." },
      { "@type": "HowToStep", position: 3, name: "Attend WAT-PI (Group Discussion, Written Test, Interview)", text: "Top Delhi MBA colleges shortlist candidates for WAT (Written Ability Test) and PI (Personal Interview) in Jan–March 2026. Prepare case studies, current affairs, and personal/work experience stories." },
      { "@type": "HowToStep", position: 4, name: "Accept Offer & Pay Fees", text: "Upon selection, accept the admission offer within the deadline and pay the fees: FMS Delhi ₹55K total, IMI Delhi ₹17.5L, MDI Gurgaon ₹22L. Merit-based scholarships available at MDI, IMI, and FORE." },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-red-700">Home</Link></li>
              <li>/</li>
              <li><Link href="/colleges" className="hover:text-red-700">Colleges</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">MBA colleges in Delhi</li>
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
                Best MBA colleges in Delhi 2026
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Compare top MBA colleges in Delhi NCR by NIRF ranking, CAT/XAT cutoff, total fees (₹55K–₹22L), average placements (₹7–32 LPA), and recruiter quality for 2026 admissions.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> NIRF &amp; NAAC Verified</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> 2026 Fees &amp; Placements</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> CAT/XAT/MAT Cutoffs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box — GEO/AIO optimized */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">Quick Answer: Best MBA College in Delhi 2026</h2>
            <p className="text-green-900 text-sm leading-relaxed">
              <strong>FMS Delhi</strong> (Faculty of Management Studies, NIRF Rank 13) is the best MBA college in Delhi in 2026 with ₹32 LPA average placement, recruiters McKinsey/BCG/Goldman Sachs, and total fees of just ₹55,000. Admission via CAT 2025 (98+ percentile).{" "}
              <strong>Best premium option:</strong> MDI Gurgaon (NIRF #9, ₹24 LPA avg, ₹22L fees). <strong>Best budget:</strong> DSM DTU (₹2.8L fees, government college).
            </p>
          </div>
        </section>

        {/* Top 3 Detailed Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Top 3 MBA colleges in Delhi — Detailed Review</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* FMS Delhi */}
            <div className="border-2 border-red-200 rounded-2xl p-5 bg-red-50">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">#1 Best MBA</span>
                <span className="text-xs text-gray-500">NIRF 13</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">FMS Delhi (Faculty of Management Studies, DU)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹32 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A+</strong> | NIRF #13</span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹55,000</strong> (2-yr MBA)</span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Exam: <strong>CAT 2025 (98+ %ile)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Recruiters: McKinsey, BCG, Goldman Sachs</span></li>
              </ul>
              <Link href="/colleges/fms-delhi-faculty-management-studies" className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* IMI Delhi */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">#2 Best Value</span>
                <span className="text-xs text-gray-500">NAAC A+</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">MDI Gurgaon (Management Development Institute)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹24 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A+</strong> | NIRF #9</span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹22L</strong> (PGPM)</span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Exam: <strong>CAT 2025 (99+ %ile)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Recruiters: Bain, Deloitte, Amazon, BCG</span></li>
              </ul>
              <Link href="/colleges/mdi-gurgaon-management-development-institute" className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* Indira */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">#3 Best ROI</span>
                <span className="text-xs text-gray-500">NAAC A</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">IMI Delhi (International Management Institute)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹16 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A+</strong> | NIRF #42</span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹17.5L</strong> (PGDM)</span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Exam: <strong>CAT / XAT (85+ %ile)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Recruiters: EY, KPMG, HUL, ITC, Nestle</span></li>
              </ul>
              <Link href="/colleges/imi-delhi-international-management-institute" className="mt-4 block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table — live from backend */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <StreamCollegesTable stream="MBA" keywords={["management", "business", "pgdm"]} />
        </section>

        {/* Admission Process */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">MBA Admission Process 2026 — Delhi Colleges</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Entrance Exam", desc: "Appear for CAT 2025 (November) for FMS Delhi / MDI Gurgaon / IMI Delhi. XAT (January 2026) or MAT/CMAT for budget options.", color: "bg-red-50 border-red-200" },
                { step: "2", title: "Apply to Colleges", desc: "Submit applications to shortlisted Delhi NCR colleges after results. FMS Delhi: fms.edu. MDI Gurgaon: mdi.ac.in. IMI Delhi: imi.edu.", color: "bg-blue-50 border-blue-200" },
                { step: "3", title: "GD / WAT / PI", desc: "Attend Group Discussion, Written Ability Test, and Personal Interview in Jan–Feb 2027.", color: "bg-purple-50 border-purple-200" },
                { step: "4", title: "Merit List & Admission", desc: "Final selection based on exam score + GD/WAT/PI performance. Confirm by paying first-year fees.", color: "bg-green-50 border-green-200" },
              ].map(({ step, title, desc, color }) => (
                <div key={step} className={`${color} border rounded-2xl p-5`}>
                  <div className="text-3xl font-extrabold text-gray-300 mb-2">{step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Comparison */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">MBA Entrance Exams for Delhi 2026 — Which Colleges Accept What?</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Exam</th>
                  <th className="px-4 py-3 text-left font-semibold">Date 2026</th>
                  <th className="px-4 py-3 text-left font-semibold">Colleges Accepting in Delhi</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Min Cutoff</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { exam: "CAT 2025", date: "Nov 2025", colleges: "FMS Delhi (98+), MDI Gurgaon (99+), IMI Delhi (85+), FORE School (80+), LBSIM, DSM DTU, BIMTECH, IMT Ghaziabad", cutoff: "70–99 %ile" },
                  { exam: "XAT 2026", date: "Jan 5, 2026", colleges: "IMI Delhi, FORE School Delhi, BIMTECH, IMT Ghaziabad, LBSIM (select programs)", cutoff: "75+ %ile" },
                  { exam: "MAT 2026", date: "Feb/May/Sep/Dec", colleges: "Jaipuria Noida, IILM Gurugram, LBSIM Delhi, DSM DTU, most lower-tier NCR colleges", cutoff: "600+ score" },
                  { exam: "CMAT 2026", date: "Mar 2026", colleges: "DSM DTU, Jaipuria Noida, IILM, most budget MBA colleges in Delhi NCR", cutoff: "200+ score" },
                  { exam: "GMAT", date: "Year-round", colleges: "IMI Delhi, FORE School, MDI Gurgaon (Executive MBA), BIMTECH (for working professionals)", cutoff: "600+ score" },
                ].map((row, i) => (
                  <tr key={row.exam} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-red-700">{row.exam}</td>
                    <td className="px-4 py-3 text-gray-700">{row.date}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.colleges}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CAT Cutoff Chart — FMS Delhi (gated) */}
        {(() => {
          const fmsDelhiData = getCutoff("fms-delhi-faculty-management-studies", "cat")
          if (!fmsDelhiData) return null
          return (
            <section className="py-10 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">FMS Delhi CAT Cutoff Trend 2020–2026</h2>
                      <p className="text-sm text-gray-500 mt-1">Open & OBC category percentile trends. Unlock full data free.</p>
                    </div>
                    <Link href="/cutoffs" className="text-xs text-red-700 hover:underline font-semibold shrink-0">
                      All college cutoffs →
                    </Link>
                  </div>
                  <GatedCutoffChartClient data={fmsDelhiData} slug="fms-delhi-faculty-management-studies" height={240} />
                </div>
              </div>
            </section>
          )
        })()}

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">FAQs — MBA colleges in Delhi 2026</h2>
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
        <section className="py-10 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related MBA Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "FMS Delhi — Fees, Cutoff & Placement", href: "/fms-delhi", icon: "🎓" },
                { label: "IIFT Delhi — MBA International Business", href: "/iift-delhi", icon: "🌐" },
                { label: "MDI Gurgaon — PGDM Admission 2026", href: "/mdi-gurgaon", icon: "📍" },
                { label: "Top 10 MBA Colleges in Delhi — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
                { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
                { label: "MBA in Finance — Delhi Colleges", href: "/mba-in-finance-delhi", icon: "💹" },
                { label: "MBA in Marketing — Delhi Colleges", href: "/mba-in-marketing-delhi", icon: "📊" },
                { label: "MBA in HR — Delhi Colleges", href: "/mba-in-hr-delhi", icon: "👥" },
                { label: "MBA in Operations — Delhi Colleges", href: "/mba-in-operations-delhi", icon: "⚙️" },
                { label: "MBA in Digital Marketing Delhi", href: "/mba-in-digital-marketing-delhi", icon: "📱" },
                { label: "Executive MBA Delhi 2026", href: "/executive-mba-delhi", icon: "💼" },
                { label: "MBA Colleges in Gurgaon 2026", href: "/mba-colleges-gurgaon", icon: "🏙️" },
                { label: "MBA Colleges in Greater Noida", href: "/mba-colleges-greater-noida", icon: "🏘️" },
                { label: "MBA Colleges in Noida", href: "/mba-colleges-noida", icon: "🗺️" },
                { label: "MBA Placement Rankings 2026", href: "/mba-colleges-delhi-placement", icon: "📈" },
                { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
                { label: "MBA Without CAT (MAT/CMAT)", href: "/mba-admission-delhi-without-cat", icon: "📝" },
                { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "⚖️" },
                { label: "PGDM vs MBA — Delhi Guide", href: "/pgdm-vs-mba-delhi", icon: "❓" },
                { label: "PGDM Colleges Delhi NCR", href: "/pgdm-colleges-delhi", icon: "📋" },
                { label: "Direct Admission MBA Delhi", href: "/direct-admission-mba-colleges-delhi", icon: "🚀" },
                { label: "Private MBA Colleges Delhi", href: "/private-mba-colleges-delhi", icon: "🏢" },
                { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "🎗️" },
                { label: "CAT Colleges Delhi", href: "/cat-colleges-delhi", icon: "✏️" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Topical Hub — pillar→spoke interlinking */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicalHub
            pillarTitle="MBA Colleges in Delhi NCR — Complete Guide"
            pillarKeyword="MBA colleges in Delhi"
            spokeLinks={[
              { label: "Top 10 MBA Colleges in Delhi", href: "/top-10-mba-colleges-in-delhi", description: "NIRF-ranked list with fees & placements" },
              { label: "FMS Delhi MBA Admission 2026", href: "/fms-delhi-mba-admission", description: "CAT cutoff, selection process, fees" },
              { label: "MDI Gurgaon MBA 2026", href: "/mdi-gurgaon-mba-admission", description: "PGPM admission, CAT 99+ cutoff" },
              { label: "PGDM Colleges Delhi NCR", href: "/pgdm-colleges-delhi", description: "PGDM vs MBA, top institutes" },
              { label: "Private MBA Colleges Delhi", href: "/private-mba-colleges-delhi", description: "IMI, FORE, LBSIM, BIMTECH" },
              { label: "Online MBA Delhi Colleges", href: "/online-mba-delhi", description: "Distance learning MBA options" },
              { label: "MBA Fees in Delhi 2026", href: "/mba-colleges-delhi-fees", description: "₹55K to ₹22L — all colleges compared" },
              { label: "MBA Without CAT (MAT/CMAT)", href: "/mba-admission-delhi-without-cat", description: "Colleges accepting MAT, CMAT, XAT" },
              { label: "Part-Time MBA Delhi", href: "/part-time-mba-delhi", description: "Weekend MBA for working professionals" },
            ]}
            relatedPillarLinks={[
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "Best Colleges in Delhi", href: "/best-colleges-in-delhi" },
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            ]}
          />
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Find the Right MBA College for You</h2>
            <p className="text-red-100 mb-6 text-sm sm:text-base">Use our free AI College Finder or talk to an expert counselor for personalised MBA college guidance.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/ai-finder" className="bg-white text-red-700 font-bold px-8 py-3 rounded-2xl hover:bg-red-50 transition-colors text-sm">
                Try AI MBA Finder
              </Link>
              <Link href="/counselling" className="bg-red-800 text-white font-bold px-8 py-3 rounded-2xl hover:bg-orange-800 transition-colors text-sm">
                Free Counselling Session
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


