import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "SRCC vs Hindu College 2026 — Which is Better? CUET Cutoff & Placements",
  description: "SRCC vs Hindu College detailed comparison 2026: CUET cutoff, BCom Hons placements, fees, campus, courses. Which Delhi University college should you choose? Honest verdict.",
  path: "/srcc-vs-hindu-college",
  keywords: [
    "SRCC vs Hindu College",
    "SRCC vs Hindu College which is better",
    "SRCC Delhi comparison",
    "Hindu College vs SRCC placements",
    "SRCC CUET cutoff 2026",
    "Hindu College CUET cutoff 2026",
    "BCom Hons Delhi University colleges",
    "best commerce college Delhi University",
    "SRCC or Hindu College for BCom",
  ],
})
export const revalidate = 300

const faqs = [
  { question: "Is SRCC better than Hindu College?", answer: "SRCC (Sri Ram College of Commerce) is better for commerce students — it's India's top commerce college with ₹12-15 LPA average placements for BCom Hons and recruiters like McKinsey, BCG, and Goldman Sachs. Hindu College is better for arts and science students (History, English, Political Science, Physics, Chemistry). The choice depends entirely on your stream — SRCC for commerce, Hindu for arts/science." },
  { question: "What CUET score is needed for SRCC BCom Hons 2026?", answer: "SRCC BCom Hons is one of the most competitive DU admissions — typically requiring 99+ percentile in CUET (Commerce/Economics/Mathematics papers). In 2025, the cutoff was effectively near-perfect. Hindu College BA (Hons) English and Political Science also requires 98-99 percentile for General category. SRCC BCom is slightly more competitive than any single course at Hindu College." },
  { question: "What are the placements at SRCC vs Hindu College?", answer: "SRCC has superior placements due to its commerce focus: BCom Hons graduates place at consulting firms (McKinsey, BCG, Deloitte), investment banks (Goldman Sachs, JPMorgan), and CA firms. Average: ₹12-15 LPA. Hindu College's humanities and science graduates largely pursue higher education (IIM, IITs, UPSC), with corporate placements averaging ₹6-10 LPA for those who take placement. SRCC wins on pure placement metrics." },
  { question: "Which has better campus life — SRCC or Hindu College?", answer: "Hindu College is widely considered to have better campus culture — it's one of Delhi's most celebrated colleges for sports, festivals (Mecca Fest), drama, music, and debating. Hindu College alumni include politicians, journalists, and national sports personalities. SRCC has a more academically focused culture with heavy CA and finance preparation. For campus life and college culture, Hindu wins. For career placement, SRCC wins." },
  { question: "Can I get both SRCC and Hindu College with 98 percentile in CUET?", answer: "With 98 CUET percentile: Hindu College BA programs (English, Pol Sci, History) — likely, depending on the subject combination. SRCC BCom Hons — unlikely for General category (typically needs 99+). Hindu College BSc programs — possible for some subjects. A 98 percentile comfortably gets you into Hindu College for most programs but may fall short for SRCC BCom Hons. Apply to both and fill maximum preferences in DU CSAS." },
]

export default function SRCCvsHinduCollegePage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare", url: "/compare" },
    { name: "SRCC vs Hindu College", url: "/srcc-vs-hindu-college" },
  ])

  const compData = [
    { param: "Full Name", srcc: "Sri Ram College of Commerce", hindu: "Hindu College" },
    { param: "Established", srcc: "1926", hindu: "1899" },
    { param: "NAAC Grade", srcc: "A+", hindu: "A++" },
    { param: "NIRF 2024 (Colleges)", srcc: "Top 10 Commerce", hindu: "Top 5 Overall" },
    { param: "Best Stream", srcc: "Commerce / Economics", hindu: "Arts / Sciences" },
    { param: "Flagship Course", srcc: "BCom (Hons)", hindu: "BA (Hons) English / BSc" },
    { param: "CUET Cutoff (BCom/BA Hons)", srcc: "99+ percentile", hindu: "98-99+ percentile" },
    { param: "Annual Fees", srcc: "₹15K–40K/yr", hindu: "₹15K–45K/yr" },
    { param: "Avg Placement (BCom/BA)", srcc: "₹12-15 LPA", hindu: "₹6-10 LPA (corporates)" },
    { param: "Top Recruiters", srcc: "McKinsey, BCG, Goldman Sachs", hindu: "Media, Govt., NGOs, Startups" },
    { param: "Campus Life / Fests", srcc: "Finance-focused (Crossroads)", hindu: "All-round (Mecca Fest)" },
    { param: "Location", srcc: "North Campus (DU)", hindu: "North Campus (DU)" },
  ]

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">SRCC vs Hindu College</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">SRCC vs Hindu College 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            Comparing Delhi University's top two colleges — SRCC (best for commerce) and Hindu College (best for arts & science) — on CUET cutoffs, placements, campus culture, and career outcomes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Quick verdict */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-amber-900 mb-1">Quick Verdict</p>
          <p className="text-sm text-amber-800"><strong>SRCC for Commerce students, Hindu College for Arts/Science students.</strong> If you want BCom Hons with corporate placements (consulting, banking), SRCC is India's best choice. If you want BA (Hons) in English, History, Political Science or BSc programs with rich campus life, Hindu College is the better fit. Both are on DU North Campus, NAAC A/A++ accredited, and among India's best.</p>
        </div>

        {/* Comparison table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">SRCC vs Hindu College — Full Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">SRCC</th>
                <th className="px-4 py-3 text-center font-semibold">Hindu College</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.srcc}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.hindu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Verdict cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose Which</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose SRCC if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You want BCom Hons and a corporate career in consulting, banking, or finance</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> Placement average and recruiter quality is your #1 priority</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You're planning to do CA / CFA / MBA alongside your degree</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You want the strongest DU Commerce brand recognition</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose Hindu College if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You want BA (Hons) English, Political Science, History, or Economics</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> Campus life, cultural activities, sports, and college experience matter to you</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You're targeting civil services, journalism, academia, or research careers</li>
              <li className="flex items-start gap-2"><span className="text-green-600">+</span> You have 98 CUET percentile but can't reach SRCC's BCom cutoff</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">SRCC vs Hindu — FAQs</h2>
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

        {/* Related */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Colleges in North Delhi", href: "/colleges-north-delhi" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut" },
            { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi" },
            { label: "FMS Delhi MBA Admission", href: "/best-mba-colleges-delhi" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Unsure which DU college to prefer in CSAS?</p>
            <p className="text-blue-200 text-sm">Our counsellors know DU CSAS preference strategy inside out. Free 15-min call.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Book Free Call
          </Link>
        </div>
      </div>
    </>
  )
}
