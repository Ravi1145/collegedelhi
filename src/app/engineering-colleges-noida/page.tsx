import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Best Engineering Colleges in Noida 2026 | Fees, Cutoff & Placements",
  description: "Top engineering colleges in Noida 2026 — Amity University, Jaypee Institute, NIET, JSS Noida, Galgotias College, GL Bajaj. JEE Main cutoff, fees ₹1.2L–4L/yr, avg placements ₹6–12 LPA.",
  path: "/engineering-colleges-noida",
  keywords: [
    "engineering colleges in noida",
    "best engineering colleges in noida 2026",
    "top btech colleges noida",
    "jaypee institute noida admission",
    "niet noida fees placement",
    "amity university noida engineering",
    "galgotias college engineering noida",
    "gl bajaj engineering noida",
    "jee main colleges noida",
    "private engineering colleges noida",
    "engineering colleges noida fees 2026",
    "btech colleges noida placement",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "Jaypee Institute of Information Technology (JIIT)", type: "Deemed University", nirf: 87, naac: "A", fees: "₹2.8L–3.5L/yr", placement: "₹12 LPA avg | ₹50 LPA highest", exam: "JEE Main / Jaypee Entrance", slug: "jaypee-institute-information-technology-noida", highlight: "Best Deemed | Top CS Placements" },
  { rank: 2, name: "Amity University Noida – School of Engineering", type: "Private (Deemed)", nirf: null, naac: "A+", fees: "₹2.5L–4L/yr", placement: "₹8 LPA avg | ₹40 LPA highest", exam: "JEE Main / Amity JEE", slug: "amity-university-noida-engineering", highlight: "Largest Private Univ in NCR" },
  { rank: 3, name: "Galgotias College of Engineering (GCET)", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.5L–2.2L/yr", placement: "₹7.5 LPA avg | ₹38 LPA highest", exam: "JEE Main / IPU CET", slug: "galgotias-college-engineering-noida", highlight: "Best IP University Affiliate" },
  { rank: 4, name: "NIET – Noida Institute of Engineering & Technology", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.4L–2L/yr", placement: "₹6.5 LPA avg | ₹32 LPA highest", exam: "JEE Main / IPU CET", slug: "niet-noida-institute-engineering-technology", highlight: "Largest Student Intake in Noida" },
  { rank: 5, name: "GL Bajaj Institute of Technology (GLBITM)", type: "IP University Affiliated", nirf: null, naac: "A+", fees: "₹1.2L–1.8L/yr", placement: "₹6.8 LPA avg | ₹28 LPA highest", exam: "JEE Main / IPU CET", slug: "gl-bajaj-institute-technology-management-noida", highlight: "Best ROI | NAAC A+" },
  { rank: 6, name: "JSS Academy of Technical Education", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.3L–1.9L/yr", placement: "₹6 LPA avg | ₹25 LPA highest", exam: "JEE Main / IPU CET", slug: "jss-academy-technical-education-noida", highlight: "Good Industry Connect" },
  { rank: 7, name: "Sharda University – School of Engineering", type: "Private University", nirf: null, naac: "A+", fees: "₹1.8L–3L/yr", placement: "₹6.5 LPA avg | ₹30 LPA highest", exam: "JEE Main / Sharda Entrance", slug: "sharda-university-engineering-greater-noida", highlight: "International Collaborations" },
  { rank: 8, name: "Galgotias University – School of Engineering", type: "Private University", nirf: null, naac: "A+", fees: "₹1.6L–2.5L/yr", placement: "₹7 LPA avg | ₹35 LPA highest", exam: "JEE Main / GSAT", slug: "galgotias-university-engineering-greater-noida", highlight: "Fastest Growing Noida University" },
  { rank: 9, name: "KIET Group of Institutions", type: "IP University Affiliated", nirf: null, naac: "A+", fees: "₹1.2L–1.8L/yr", placement: "₹8 LPA avg | ₹42 LPA highest", exam: "JEE Main / IPU CET", slug: "kiet-group-institutions-delhi-ncr", highlight: "Best Ghaziabad Option" },
  { rank: 10, name: "ABES Engineering College", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.1L–1.7L/yr", placement: "₹6 LPA avg | ₹24 LPA highest", exam: "JEE Main / IPU CET", slug: "abes-engineering-college-ghaziabad", highlight: "Affordable Fees" },
  { rank: 11, name: "AKGEC – Ajay Kumar Garg Engineering", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.1L–1.7L/yr", placement: "₹6.5 LPA avg | ₹26 LPA highest", exam: "JEE Main / IPU CET", slug: "akgec-ajay-kumar-garg-engineering-ghaziabad", highlight: "Strong Core Engineering" },
  { rank: 12, name: "IMS Engineering College Ghaziabad", type: "IP University Affiliated", nirf: null, naac: "B+", fees: "₹1L–1.5L/yr", placement: "₹5 LPA avg | ₹20 LPA highest", exam: "JEE Main / IPU CET", slug: "ims-engineering-college-ghaziabad", highlight: "Budget Option" },
]

const faqs = [
  { question: "Which is the best engineering college in Noida in 2026?", answer: "Jaypee Institute of Information Technology (JIIT) is the best engineering college in Noida — NIRF 87, NAAC A, ₹12 LPA average placement, and 50+ LPA highest package. JIIT has strong CS, IT, and Electronics programs with top companies like Microsoft, Amazon, and Accenture recruiting. Amity University Noida is the largest private option (NAAC A+). Among IP University affiliated colleges, GL Bajaj (NAAC A+) and Galgotias College offer excellent value at ₹1.2L–1.5L/year." },
  { question: "What is the JEE Main cutoff for Noida engineering colleges?", answer: "JEE Main cutoffs for Noida colleges (via IPU CET/JEE): JIIT — 85-95 percentile (varies by branch). Galgotias College/GL Bajaj — 70-85 percentile via IPU CET. NIET Noida — 65-80 percentile. Amity University — 60-80 percentile (own counselling). For Galgotias University and Sharda University — 50-75 percentile (own entrance test). These are more accessible than DTU (99+ percentile) making Noida colleges popular for students in the 70-90 percentile range." },
  { question: "What is the fee for engineering colleges in Noida?", answer: "Engineering fees in Noida 2026: IP University affiliated colleges (GL Bajaj, Galgotias College, NIET, JSS, KIET) — ₹1.2L–2.2L/year. Jaypee Institute (JIIT, Deemed) — ₹2.8L–3.5L/year. Amity University — ₹2.5L–4L/year. Galgotias University — ₹1.6L–2.5L/year. Sharda University — ₹1.8L–3L/year. SC/ST students at IP University affiliated colleges can claim fee waivers through UP state scholarship portal." },
  { question: "Is JIIT better than Amity University for BTech?", answer: "JIIT is better than Amity University for BTech by most metrics: NIRF 87 vs Amity (unranked), ₹12 LPA average placement vs ₹8 LPA at Amity, stronger brand recognition in tech hiring, and better alumni network at top MNCs. However, JIIT fees (₹2.8L–3.5L/yr) are similar to Amity's. JIIT is preferred for CS/IT careers. Amity wins on campus size, international collaborations, and diverse program offerings." },
  { question: "What are the placement statistics for Noida engineering colleges?", answer: "Placement stats 2024-25 for Noida engineering colleges: JIIT — ₹12 LPA avg, ₹50 LPA highest, companies like Microsoft, Amazon, Paytm. GL Bajaj — ₹6.8 LPA avg, ₹28 LPA highest. Galgotias College — ₹7.5 LPA avg. NIET — ₹6.5 LPA avg. KIET Ghaziabad — ₹8 LPA avg, ₹42 LPA highest. Amity University — ₹8 LPA avg, ₹40 LPA highest. Top recruiters: TCS, Infosys, Wipro, Cognizant, HCL, Tech Mahindra, Accenture across all colleges." },
  { question: "Which Noida engineering college is best for computer science?", answer: "For Computer Science specifically in Noida: JIIT CSE is the top choice (₹12 LPA avg, Google/Microsoft recruiting). Galgotias University CSE has improved rapidly (₹7 LPA avg, strong startup placement). GL Bajaj CSE (NAAC A+) offers excellent value at ₹1.2L/yr fees. Amity CSE has wide recruiter base. For AI/ML specifically, Amity and Sharda University have dedicated AI programs. JIIT and GL Bajaj have best placement-to-fee ratios." },
]

export default function EngineeringCollegesNoidaPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Engineering Colleges", url: "/engineering-colleges-delhi" },
    { name: "Engineering Colleges Noida", url: "/engineering-colleges-noida" },
  ])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `${c.type} | ${c.fees} | ${c.placement}` })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/engineering-colleges-delhi" className="hover:text-white">Engineering</Link><span>/</span>
            <span className="text-white">Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Best Engineering Colleges in Noida 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            Noida has 12+ engineering colleges led by JIIT (NIRF 87), Amity University (NAAC A+), GL Bajaj, Galgotias College, and NIET. Admission through JEE Main via IPU CET or own entrance tests.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ value: "12+", label: "Engg. Colleges" }, { value: "JIIT #87", label: "NIRF Top Ranked" }, { value: "₹12 LPA", label: "JIIT Avg Pkg" }, { value: "₹1.2L/yr", label: "Min. Fees" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Best engineering colleges in Noida: <strong>JIIT</strong> (NIRF 87, ₹12 LPA avg), <strong>Amity Noida</strong> (NAAC A+, ₹8 LPA avg), <strong>GL Bajaj</strong> (NAAC A+, ₹1.2L/yr fees), <strong>Galgotias College</strong> (IPU, ₹7.5 LPA avg), <strong>NIET</strong> (IPU, ₹6.5 LPA avg). Admission via JEE Main + IPU CET counselling.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 12 Engineering Colleges in Noida NCR 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                {["#", "College", "Type", "NIRF", "Fees/yr", "Avg Pkg", "Exam"].map(h => (
                  <th key={h} className="px-3 py-3 text-left font-semibold text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {colleges.map((c, i) => (
                <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 text-gray-500 font-bold text-xs">{c.rank}</td>
                  <td className="px-3 py-3">
                    <Link href={`/colleges/${c.slug}`} className="font-semibold text-gray-900 hover:text-red-700 text-xs">{c.name}</Link>
                    <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
                  </td>
                  <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{c.type}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs">{c.nirf ? `#${c.nirf}` : "—"}</td>
                  <td className="px-3 py-3 text-gray-700 font-medium text-xs whitespace-nowrap">{c.fees}</td>
                  <td className="px-3 py-3 text-green-700 font-semibold text-xs whitespace-nowrap">{c.placement.split("|")[0].trim()}</td>
                  <td className="px-3 py-3 text-gray-600 text-xs whitespace-nowrap">{c.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Engineering Colleges in Noida</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">
                {f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "DTU vs NSUT", href: "/dtu-vs-nsut" },
            { label: "Colleges Greater Noida", href: "/colleges-greater-noida" },
            { label: "MBA Colleges Noida", href: "/mba-colleges-noida" },
            { label: "JEE Predictor", href: "/predictor" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Not sure which Noida college fits your JEE rank?</p>
            <p className="text-blue-200 text-sm">Get a free personalised list based on your percentile and category.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm">Use Predictor</Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm">Free Counselling</Link>
          </div>
        </div>
      </div>
    </>
  )
}
