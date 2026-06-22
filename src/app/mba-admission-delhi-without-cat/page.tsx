import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "MBA Admission in Delhi Without CAT 2026",
  description:
    "Get MBA admission in Delhi NCR without CAT 2026. Colleges accepting MAT, CMAT, XAT, ATMA",
  path: "/mba-admission-delhi-without-cat",
  keywords: [
    "mba admission without cat Delhi",
    "admission without entrance exam Delhi mba",
    "mba admission Delhi without cat",
    "mba colleges Delhi mat score",
    "mba colleges Delhi cmat",
    "mba without cat Delhi",
    "direct mba admission Delhi",
  ],
})

const examColleges = [
  {
    exam: "MAT (Management Aptitude Test)",
    frequency: "5 times a year (Feb, May, Jun, Sep, Dec)",
    difficulty: "Easy–Moderate",
    colleges: [
      { name: "IMI Delhi", fees: "₹17.5L–₹22L total", cutoff: "Check official IMI Delhi notification" },
      { name: "Fore School Delhi", fees: "₹5L–₹7.5L", cutoff: "450+ score" },
      { name: "Jaipuria Institute of Management Noida", fees: "₹4.2L–₹6.5L", cutoff: "400+ score" },
      { name: "IMS Ghaziabad of Management", fees: "₹2.8L–₹4.5L", cutoff: "400+ score" },
      { name: "GL Bajaj Noida", fees: "₹3.8L–₹5.5L", cutoff: "450+ score" },
    ],
  },
  {
    exam: "CMAT (Common Management Admission Test)",
    frequency: "Once a year (January)",
    difficulty: "Moderate",
    colleges: [
      { name: "IMI Delhi", fees: "₹17.5L–₹22L total", cutoff: "Check official IMI Delhi notification" },
      { name: "Fore School Delhi", fees: "₹5L–₹7.5L", cutoff: "180+ score" },
      { name: "Jaipuria Institute of Management Noida", fees: "₹4.2L–₹6.5L", cutoff: "160+ score" },
      { name: "IMS Ghaziabad", fees: "₹2.8L–₹4.5L", cutoff: "150+ score" },
    ],
  },
]

const difficultyComparison = [
  { exam: "CAT", difficulty: "Very Hard", attempts: "Once/year (Nov)", score: "Percentile (99+ for IIM)", DELHIMBA: "Accepted but not required" },
  { exam: "XAT", difficulty: "Hard", attempts: "Once/year (Jan)", score: "Percentile (90+ for XLRI)", DELHIMBA: "Accepted at select colleges" },
  { exam: "CMAT", difficulty: "Moderate", attempts: "Once/year (Jan)", score: "Score out of 400", DELHIMBA: "Accepted at 5+ Delhi colleges" },
  { exam: "MAT", difficulty: "Easy–Moderate", attempts: "5 times/year", score: "Score (500+ good)", DELHIMBA: "Accepted at 7+ Delhi colleges" },
  { exam: "ATMA", difficulty: "Easy", attempts: "Multiple times", score: "Score (600+ good)", DELHIMBA: "Accepted at some Delhi colleges" },
]

const faqs = [
  {
    question: "Which MBA colleges in Delhi don't require CAT?",
    answer: "Most Delhi NCR MBA colleges accept alternatives to CAT: IMI Delhi (MAT/CMAT/CAT), Fore School Delhi (MAT/CMAT/XAT), Jaipuria Institute of Management Noida (MAT/CMAT), IMS Ghaziabad (MAT/CMAT/XAT). FMS Delhi and MDI Gurgaon are not Symbiosis institutions and primarily require CAT — they are not part of the no-CAT alternative pathway.",
  },
  {
    question: "Is MAT easier than CAT for MBA admission in Delhi?",
    answer: "Yes, MAT is significantly easier than CAT. MAT is conducted 5 times a year (online + offline), has lower difficulty, and is accepted by 7+ Delhi MBA colleges. CAT is conducted once yearly in November and is much harder — but CAT is also accepted at most Delhi colleges (it's not mandatory, just one of many accepted exams).",
  },
  {
    question: "Can I get MBA admission in Delhi without any entrance exam?",
    answer: "Yes — through management quota / direct admission at select private MBA colleges. Check each institution's official admission portal for current-year management quota policy, as it varies and not all colleges offer this route. Management quota fees are typically higher than regular fees.",
  },
  {
    question: "What is the CMAT cutoff for IMI Delhi?",
    answer: "CMAT cutoffs for IMI Delhi vary by year — check the official IMI Delhi admission notification for current-year cutoff data rather than relying on past-year estimates. CMAT is conducted once a year in January by the National Testing Agency (NTA).",
  },
  {
    question: "Does FMS Delhi require CAT?",
    answer: "Yes — FMS Delhi (Faculty of Management Studies, Delhi University) requires CAT, typically 98+ percentile for a shortlist, followed by Written Ability Test (WAT) and Personal Interview (PI). It has no connection to Symbiosis or SNAP. FMS Delhi is not part of the no-CAT alternative pathway covered on this page.",
  },
  {
    question: "Which is the best MBA college in Delhi NCR that accepts MAT?",
    answer: "IMI Delhi and Fore School Delhi both accept MAT, CMAT, and CAT — giving applicants multiple ways to qualify. Check each institution's official admission portal for current fees, placement statistics, and exact cutoffs rather than relying on past-year figures.",
  },
  {
    question: "Can I get MBA admission in Delhi after scoring 50 percentile in MAT?",
    answer: "Yes. Colleges accepting 50 percentile in MAT include Jaipuria Institute of Management Noida (₹4.2–6.5L), IMS Ghaziabad (₹2.8–4.5L), and GL Bajaj Noida (₹3.8–5.5L). These colleges are AICTE-approved with decent placements (₹5–7 LPA). With 50 percentile MAT, focus on these colleges and also explore direct/management quota options.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
  { name: "MBA Without CAT", url: "/mba-admission-delhi-without-cat" },
]

export default function MBAAdmissionWithoutCATPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/mba-colleges-delhi" className="hover:text-white">MBA Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">MBA Without CAT</span>
            </nav>
            <div className="inline-block bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3">CAT NOT Required at Most Delhi MBA Colleges</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              MBA Admission in Delhi Without CAT 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Get MBA admission at Delhi NCR colleges using MAT, CMAT, or direct management quota — CAT is optional at several institutions. Complete list of colleges, cutoffs, and fees.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>CAT is NOT compulsory for MBA in Delhi NCR.</strong> Colleges like IMI Delhi, Fore School Delhi, Jaipuria Noida, and IMS Ghaziabad accept <strong>MAT</strong> (5 times/year, easy) or <strong>CMAT</strong> (January) as alternatives. FMS Delhi and MDI Gurgaon are separate, CAT-focused institutions unrelated to this alternative pathway.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Lead CTA */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="font-bold text-gray-900 text-sm">Not sure which exam to take for MBA in Delhi?</p>
              <p className="text-xs text-gray-500">Get free personalised guidance from our MBA counsellors.</p>
            </div>
            <Link href="/counselling" className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Get Free Guidance →
            </Link>
          </div>

          {/* Exam Difficulty Comparison */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">MBA Entrance Exam Comparison — Easiest to Hardest</h2>
              <p className="text-xs text-gray-400 mt-0.5">All these exams are accepted by Delhi MBA colleges. CAT is hardest; MAT/ATMA are easiest.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Exam</th>
                    <th className="px-4 py-3 text-center">Difficulty</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">Frequency</th>
                    <th className="px-4 py-3 text-left hidden md:table-cell">Delhi Relevance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {difficultyComparison.map((e) => (
                    <tr key={e.exam} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{e.exam}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          e.difficulty.includes("Very Hard") ? "bg-red-100 text-red-700" :
                          e.difficulty.includes("Hard") ? "bg-red-100 text-red-800" :
                          e.difficulty.includes("Moderate") ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {e.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500 hidden sm:table-cell">{e.attempts}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 hidden md:table-cell">{e.DELHIMBA}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Colleges by Exam */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Delhi MBA Colleges by Entrance Exam (Without CAT)</h2>
          <div className="space-y-6 mb-8">
            {examColleges.map((section) => (
              <div key={section.exam} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-bold text-gray-900">{section.exam}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Frequency: {section.frequency} · Difficulty: {section.difficulty}</p>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-4 py-2 text-left text-xs text-gray-500 font-semibold">College</th>
                      <th className="px-4 py-2 text-right text-xs text-gray-500 font-semibold">Total Fees</th>
                      <th className="px-4 py-2 text-right text-xs text-gray-500 font-semibold hidden sm:table-cell">Cutoff</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {section.colleges.map((c) => (
                      <tr key={c.name} className="hover:bg-red-50/20">
                        <td className="px-4 py-2.5 font-medium text-gray-900">{c.name}</td>
                        <td className="px-4 py-2.5 text-right text-xs text-red-800 font-semibold">{c.fees}</td>
                        <td className="px-4 py-2.5 text-right text-xs text-gray-500 hidden sm:table-cell">{c.cutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Direct Admission Box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 sm:p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">MBA Without Any Entrance Exam — Direct / Management Quota</h2>
            <p className="text-sm text-gray-600 mb-4">
              If you don&apos;t want to appear for any exam — MAT, CMAT, or CAT — you can still get MBA admission in Delhi through the <strong>management quota / direct admission</strong> route.
            </p>
            <ul className="space-y-1.5 mb-4">
              {[
                "Only graduation degree required (any stream, 50%+ marks)",
                "No entrance exam score needed",
                "Check each college's official admission portal for current management quota availability",
                "Fees 20–30% higher than merit quota",
                "AICTE-approved, legally valid MBA degree",
                "Contact colleges directly — admissions open till September 2026",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/counselling" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Get Direct Admission Guidance →
            </Link>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">FAQs — MBA Admission in Delhi Without CAT</h2>
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
              { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
              { label: "Top 10 MBA Colleges — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "" },
              { label: "MBA Placement Guide — LPA Stats", href: "/mba-colleges-delhi-placement", icon: "" },
              { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
              { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "" },
              { label: "CAT Score colleges in Delhi", href: "/cat-colleges-delhi", icon: "" },
              { label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi", icon: "" },
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
              <p className="font-bold text-lg">Need MBA admission guidance for Delhi?</p>
              <p className="text-blue-200 text-sm">Our counsellors help you choose the right exam and college — for free.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Free MBA Counselling →
              </Link>
              <Link href="/mba-colleges-delhi" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                View MBA Colleges →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


