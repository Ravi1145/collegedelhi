import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, TrendingUp, Award, BookOpen, Users, Star } from "lucide-react"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { getCutoff } from "@/data/cutoffs"
import GatedCutoffChartClient from "@/components/ui/GatedCutoffChartClient"

export const metadata: Metadata = genMeta({
  title: "Best MBA colleges in Delhi 2026 | Fees, SNAP/CAT Cutoff & Placements",
  description: "Top 10 MBA colleges in Delhi 2026 with NIRF ranks, SNAP/CAT cutoffs, annual fees (₹4.2L–₹22L), and average placements (₹7–28 LPA). Compare FMS Delhi, IMI Delhi, Fore School Delhi, Indira Institute & more.",
  path: "/mba-colleges-delhi",
  keywords: [
    "best mba college in Delhi",
    "best mba college in Delhi 2026",
    "top mba colleges Delhi 2026",
    "mba colleges Delhi fees",
    "FMS Delhi admission 2026",
    "snap 2026 cutoff Delhi",
    "cat colleges Delhi 2026",
    "mba placements Delhi",
    "mit som Delhi mba",
    "symbiosis mba Delhi 2026",
    "mba colleges Delhi with fees and placements",
    "pgdm colleges Delhi 2026",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "FMS Delhi – Symbiosis Institute of Business Management", type: "Deemed", nirf: 13, naac: "A+", fees: "₹16L–₹22L total", placement: "₹28 LPA avg | ₹65 LPA highest", exam: "SNAP 2026 (60+ %ile)", slug: "FMS Delhi-symbiosis-institute-business-management-Delhi", highlight: "NIRF #13 | McKinsey, BCG Recruiters" },
  { rank: 2, name: "MIT School of Management (IMI Delhi)", type: "Autonomous", nirf: null, naac: "A+", fees: "₹7L–₹11L total", placement: "₹12 LPA avg | ₹32 LPA highest", exam: "CAT / MAT / CMAT", slug: "mit-school-of-management-Delhi", highlight: "Best Value | Strong Alumni" },
  { rank: 3, name: "Balaji Institute of Modern Management (Fore School Delhi)", type: "Autonomous", nirf: null, naac: "A", fees: "₹5L–₹7.5L total", placement: "₹8.5 LPA avg | ₹22 LPA highest", exam: "CAT / MAT / CMAT", slug: "balaji-institute-of-modern-management-Delhi", highlight: "Best Budget MBA" },
  { rank: 4, name: "Jaipuria Institute of Management Noida Delhi (IIMP)", type: "Autonomous", nirf: null, naac: "A", fees: "₹4.2L–₹6.5L total", placement: "₹7.2 LPA avg | ₹18 LPA highest", exam: "CAT / MAT / CMAT", slug: "indira-institute-of-management-Delhi", highlight: "Best ROI in Delhi" },
  { rank: 5, name: "BIMTECH – Symbiosis Centre for Information Technology", type: "Deemed", nirf: null, naac: "A+", fees: "₹14L–₹18L total", placement: "₹18 LPA avg | ₹45 LPA highest", exam: "SNAP 2026 (50+ %ile)", slug: "symbiosis-centre-information-technology-Delhi", highlight: "Best for IT+MBA" },
  { rank: 6, name: "MDI Gurgaon – Symbiosis Centre for Management & HRD", type: "Deemed", nirf: null, naac: "A+", fees: "₹12L–₹16L total", placement: "₹22 LPA avg | ₹55 LPA highest", exam: "SNAP 2026 (55+ %ile)", slug: "MDI Gurgaon-symbiosis-centre-management-hrd", highlight: "Best for Operations/HR" },
  { rank: 7, name: "GL Bajaj – Indian Institute of Materials Management", type: "Autonomous", nirf: null, naac: "B++", fees: "₹3.8L–₹5.5L total", placement: "₹6.5 LPA avg | ₹16 LPA highest", exam: "CAT / MAT / CMAT", slug: "delhi-school-of-management-dtu", highlight: "Specialization in Supply Chain" },
  { rank: 8, name: "IMS Ghaziabad of Management", type: "Private", nirf: null, naac: "B+", fees: "₹2.8L–₹4.5L total", placement: "₹5.8 LPA avg | ₹14 LPA highest", exam: "MAT / CMAT / XAT", slug: "suryadatta-institute-management-Delhi", highlight: "Most Affordable Delhi MBA" },
  { rank: 9, name: "BATU – Bharati Vidyapeeth Institute of Management", type: "Deemed", nirf: null, naac: "A", fees: "₹4L–₹6.8L total", placement: "₹6.8 LPA avg | ₹16 LPA highest", exam: "CAT / MAT / CMAT", slug: "bharati-vidyapeeth-institute-management-Delhi", highlight: "Part of Deemed University" },
  { rank: 10, name: "MAEER MIT College of Management", type: "Autonomous", nirf: null, naac: "A", fees: "₹4.5L–₹7L total", placement: "₹7.5 LPA avg | ₹20 LPA highest", exam: "CAT / MAT / CMAT", slug: "mit-school-of-management-Delhi", highlight: "MIT Group – Strong Placements" },
]

const faqs = [
  { question: "Which is the best MBA college in Delhi in 2026?", answer: "FMS Delhi (Symbiosis Institute of Business Management) is the best MBA college in Delhi in 2026 with NIRF Rank 13, NAAC A+, average placement of ₹28 LPA, and top recruiters like McKinsey, BCG, P&G, Deloitte. Admission is through SNAP 2026 with 60+ percentile required. Total fees: ₹16–22L." },
  { question: "What is the SNAP 2026 cutoff for FMS Delhi?", answer: "The expected SNAP 2026 cutoff for FMS Delhi is 60+ percentile. SNAP is conducted 3 times (December 6, 13, 20, 2026) — best score is considered. Application open August–November 2026. FMS Delhi also accepts CAT scores for direct admission to some programs." },
  { question: "What are the fees for MBA colleges in Delhi 2026?", answer: "MBA fees in Delhi 2026 range from ₹2.8L (Suryadatta) to ₹22L (FMS Delhi) for the full program. FMS Delhi: ₹16–22L. MDI Gurgaon: ₹12–16L. BIMTECH: ₹14–18L. IMI Delhi: ₹7–11L. Fore School Delhi: ₹5–7.5L. Indira Institute: ₹4.2–6.5L (best ROI). All Symbiosis institutes require SNAP score." },
  { question: "Can I get MBA in Delhi with low SNAP score?", answer: "Yes. With SNAP score below 60 percentile, you can apply to IMI Delhi (no SNAP cutoff, accepts CAT/MAT/CMAT), Fore School Delhi (₹5–7.5L fees, ₹8.5 LPA avg placement), Jaipuria Institute of Management Noida (₹4.2–6.5L fees, best ROI), and GL Bajaj Noida. MAT and CMAT scores are widely accepted by 7+ Delhi MBA colleges." },
  { question: "Which Delhi MBA college has the best placements in 2026?", answer: "FMS Delhi leads with ₹28 LPA average MBA placement. Top individual offers from McKinsey, BCG, Goldman Sachs reach ₹55–65 LPA. MDI Gurgaon is second with ₹22 LPA avg. BIMTECH Delhi is best for IT-MBA with ₹18 LPA avg. IMI Delhi offers ₹12 LPA avg at much lower fees (₹7–11L total) — best ROI after FMS Delhi." },
  { question: "Is FMS Delhi better than IIM Nagpur for MBA?", answer: "FMS Delhi (NIRF 13) vs IIM Nagpur depends on goals. FMS Delhi has stronger industry connections in the Delhi NCR corridor, better mass placements (₹28 LPA avg) but costs ₹16–22L. IIM Nagpur has IIM brand recognition but smaller batch. For North India placement geography, FMS Delhi is preferred by most recruiters." },
  { question: "What is the difference between CAT and SNAP for Delhi MBA colleges?", answer: "CAT 2026 (November 23) is accepted by FMS Delhi, IMI Delhi, Fore School Delhi, Indira Institute, and most Delhi MBA colleges. SNAP 2026 (December 6, 13, 20) is mandatory ONLY for Symbiosis group colleges (FMS Delhi, MDI Gurgaon, BIMTECH). For non-Symbiosis colleges like IMI Delhi, Fore School Delhi, Indira — CAT/MAT/CMAT is enough." },
  { question: "How to get admission in FMS Delhi 2026?", answer: "Step 1: Register for SNAP 2026 at snaptest.org (August 2026). Step 2: Appear for SNAP (Dec 6/13/20, 2026) — target 60+ percentile. Step 3: Apply to FMS Delhi separately (collegium.siu.edu.in). Step 4: Attend Written Ability Test (WAT) and Personal Interview (PI) in Jan–Feb 2027. Step 5: Accept admission offer. Fees: ₹16–22L total." },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "MBA colleges in Delhi", url: "/mba-colleges-delhi" },
]

export default function MBACollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA colleges in Delhi 2026",
    description: "List of top 10 MBA colleges in Delhi ranked by NIRF, placements, fees, and SNAP/CAT cutoffs",
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
                Compare top MBA colleges in Delhi by NIRF ranking, SNAP/CAT cutoff, total fees (₹4.2L–₹22L), average placements (₹7–28 LPA), and recruiter quality for 2026 admissions.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> NIRF &amp; NAAC Verified</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> 2026 Fees &amp; Placements</span>
                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> SNAP/CAT/MAT Cutoffs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box — GEO/AIO optimized */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg font-bold text-green-800 mb-2">Quick Answer: Best MBA College in Delhi 2026</h2>
            <p className="text-green-900 text-sm leading-relaxed">
              <strong>FMS Delhi</strong> (NIRF Rank 13, NAAC A+) is the best MBA college in Delhi in 2026 with ₹28 LPA average placement, recruiters McKinsey/BCG/P&amp;G, and 60+ SNAP percentile requirement. Total fees ₹16–22L.{" "}
              <strong>Best value:</strong> IMI Delhi (₹7–11L fees, ₹12 LPA avg). <strong>Best ROI:</strong> Indira Institute (₹4.2–6.5L fees, ₹7.2 LPA avg).
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
              <h3 className="font-bold text-gray-900 text-base mb-3">FMS Delhi – Symbiosis Institute of Business Management</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹28 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A+</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹16L–₹22L</strong></span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Exam: <strong>SNAP 2026 (60+ %ile)</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" /><span>Recruiters: McKinsey, BCG, P&amp;G, Deloitte</span></li>
              </ul>
              <Link href="/colleges/FMS Delhi-symbiosis-institute-business-management-Delhi" className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* IMI Delhi */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">#2 Best Value</span>
                <span className="text-xs text-gray-500">NAAC A+</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">MIT School of Management (IMI Delhi)</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹12 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A+</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹7L–₹11L</strong></span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Exam: <strong>CAT / MAT / CMAT</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span>Recruiters: TCS, Wipro, HDFC, Amazon</span></li>
              </ul>
              <Link href="/colleges/mit-school-of-management-Delhi" className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                View Full Profile →
              </Link>
            </div>
            {/* Indira */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">#3 Best ROI</span>
                <span className="text-xs text-gray-500">NAAC A</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">Jaipuria Institute of Management Noida Delhi</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Avg Placement: <strong>₹7.2 LPA</strong></span></li>
                <li className="flex gap-2"><Award className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>NAAC Grade: <strong>A</strong></span></li>
                <li className="flex gap-2"><BookOpen className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Total Fees: <strong>₹4.2L–₹6.5L</strong></span></li>
                <li className="flex gap-2"><Star className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Exam: <strong>CAT / MAT / CMAT</strong></span></li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>Recruiters: ICICI, HDFC, Kotak, Reliance</span></li>
              </ul>
              <Link href="/colleges/indira-institute-of-management-Delhi" className="mt-4 block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
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
                { step: "1", title: "Entrance Exam", desc: "Appear for CAT 2026 (Nov 23) or SNAP 2026 (Dec 6/13/20) or MAT/CMAT 2026.", color: "bg-red-50 border-red-200" },
                { step: "2", title: "Apply to Colleges", desc: "Submit applications to shortlisted Delhi colleges. FMS Delhi needs SNAP; others accept CAT/MAT.", color: "bg-blue-50 border-blue-200" },
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
                  { exam: "CAT 2026", date: "Nov 23, 2026", colleges: "FMS Delhi, IMI Delhi, Fore School Delhi, Indira Inst., GL Bajaj, Suryadatta, MIT CoM", cutoff: "50–70 %ile" },
                  { exam: "SNAP 2026", date: "Dec 6, 13, 20, 2026", colleges: "FMS Delhi, MDI Gurgaon, BIMTECH, all Symbiosis B-schools", cutoff: "50–60 %ile" },
                  { exam: "MAT 2026", date: "Feb/May/Sep/Dec", colleges: "IMI Delhi, Fore School Delhi, Indira Inst., GL Bajaj, Suryadatta", cutoff: "600+ score" },
                  { exam: "CMAT 2026", date: "Mar 20, 2026", colleges: "IMI Delhi, Fore School Delhi, Indira Inst., GL Bajaj, most Delhi MBA", cutoff: "200+ score" },
                  { exam: "XAT 2026", date: "Jan 5, 2026", colleges: "Symbiosis colleges (partial), select Delhi institutes", cutoff: "75+ %ile" },
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

        {/* SNAP Cutoff Chart — FMS Delhi (gated) */}
        {(() => {
          const fmsDelhiData = getCutoff("FMS Delhi-symbiosis-institute-business-management-Delhi", "snap")
          if (!fmsDelhiData) return null
          return (
            <section className="py-10 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">FMS Delhi SNAP Cutoff Trend 2020–2026</h2>
                      <p className="text-sm text-gray-500 mt-1">Open & OBC category percentile trends. Unlock full data free.</p>
                    </div>
                    <Link href="/cutoffs" className="text-xs text-red-700 hover:underline font-semibold shrink-0">
                      All college cutoffs →
                    </Link>
                  </div>
                  <GatedCutoffChartClient data={fmsDelhiData} slug="FMS Delhi-symbiosis-institute-business-management-Delhi" height={240} />
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
                { label: "Top 10 MBA colleges in Delhi — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
                { label: "MBA Placement Rankings 2026", href: "/mba-colleges-delhi-placement", icon: "💼" },
                { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
                { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "🎓" },
                { label: "Private MBA Colleges Delhi", href: "/private-mba-colleges-delhi", icon: "🏛️" },
                { label: "MBA Without CAT (MAT/CMAT/SNAP)", href: "/mba-admission-delhi-without-cat", icon: "📝" },
                { label: "Direct Admission MBA Delhi", href: "/direct-admission-mba-colleges-delhi", icon: "🚀" },
                { label: "Engineering vs MBA — Which is Better?", href: "/delhi-colleges-comparison-engineering-mba", icon: "⚖️" },
                { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "📊" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

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


