import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"
import { CheckCircle, TrendingUp, Award, MapPin, ExternalLink, BookOpen } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Engineering Colleges in Delhi 2026 | Fees, Cutoff & Rankings",
  description: "Top 12 engineering colleges in Delhi 2026 — DTU (NIRF 49), NSUT, IGDTUW, IIT Delhi, Amity, Jamia Millia. JEE Main cutoffs, fees ₹1.5L–5L/yr, avg placements ₹14–18 LPA. Compare & apply.",
  path: "/engineering-colleges-delhi",
  keywords: [
    "engineering colleges in Delhi",
    "best engineering college in Delhi 2026",
    "top BTech colleges Delhi",
    "DTU Delhi admission 2026",
    "NSUT Delhi cutoff JEE Main",
    "IGDTUW Delhi engineering",
    "IIT Delhi admission",
    "Jamia Millia engineering Delhi",
    "government engineering colleges Delhi",
    "JEE Main colleges Delhi 2026",
    "engineering colleges Delhi with placement",
    "NAAC A+ engineering colleges Delhi",
    "engineering admission Delhi 2026",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "IIT Delhi – Indian Institute of Technology", type: "Central University", nirf: 2, naac: "A++", fees: "₹2.2L/yr", placement: "₹25 LPA avg | ₹2.5 Cr highest", exam: "JEE Advanced", slug: "iit-delhi", highlight: "India's #2 Engineering | Global Rankings" },
  { rank: 2, name: "DTU – Delhi Technological University", type: "Government (State)", nirf: 49, naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹18 LPA avg | ₹72 LPA highest", exam: "JEE Main (JAC Delhi)", slug: "delhi-technological-university-dtu", highlight: "Best Govt. | Highest Placements" },
  { rank: 3, name: "NSUT – Netaji Subhas University of Technology", type: "Government (State)", nirf: 52, naac: "A+", fees: "₹1.5L–2L/yr", placement: "₹16 LPA avg | ₹65 LPA highest", exam: "JEE Main (JAC Delhi)", slug: "nsut-netaji-subhas-university-of-technology", highlight: "NIRF 52 | Strong CS Placements" },
  { rank: 4, name: "IGDTUW – Indira Gandhi Delhi Technical University for Women", type: "Government (State)", nirf: 78, naac: "A+", fees: "₹1.2L–1.8L/yr", placement: "₹14 LPA avg | ₹55 LPA highest", exam: "JEE Main (JAC Delhi)", slug: "igdtuw-indira-gandhi-delhi-technical-university-women", highlight: "Best Women's Engineering College" },
  { rank: 5, name: "IIIT Delhi – Indraprastha Institute of Information Technology", type: "Autonomous (State)", nirf: 81, naac: "A", fees: "₹2.5L–3L/yr", placement: "₹20 LPA avg | ₹1.2 Cr highest", exam: "JEE Main (JOSAA/CSAB)", slug: "iiit-delhi", highlight: "Best for CS/AI | Top Tech Recruiters" },
  { rank: 6, name: "Jamia Millia Islamia – Faculty of Engineering", type: "Central University", nirf: 14, naac: "A+", fees: "₹80K–1.5L/yr", placement: "₹10 LPA avg | ₹42 LPA highest", exam: "JEE Main / CUET", slug: "jamia-millia-islamia-engineering", highlight: "Central University | Affordable Fees" },
  { rank: 7, name: "MSIT – Maharaja Surajmal Institute of Technology", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.6L–2.2L/yr", placement: "₹8.5 LPA avg | ₹40 LPA highest", exam: "JEE Main / IPU CET", slug: "msit-maharaja-surajmal-institute-technology", highlight: "Best IP Univ Affiliate" },
  { rank: 8, name: "BVP – Amity University Engineering", type: "IP University Affiliated", nirf: null, naac: "A", fees: "₹1.4L–2L/yr", placement: "₹7.5 LPA avg | ₹32 LPA highest", exam: "JEE Main / IPU CET", slug: "bvp-bharati-vidyapeeth-college-engineering-delhi", highlight: "Good Industry Connect" },
  { rank: 9, name: "Amity University Delhi – School of Engineering", type: "Private (Deemed)", nirf: null, naac: "A+", fees: "₹2.5L–4L/yr", placement: "₹8 LPA avg | ₹40 LPA highest", exam: "JEE Main / Amity JEE", slug: "amity-university-delhi-engineering", highlight: "Best Private Deemed Delhi" },
  { rank: 10, name: "Bennett University Delhi – School of Engineering", type: "Private (Deemed)", nirf: null, naac: "A+", fees: "₹3L–5L/yr", placement: "₹9.2 LPA avg | ₹45 LPA highest", exam: "JEE Main / BUAT", slug: "bennett-university-delhi-engineering", highlight: "Times Group | Strong CS/AI" },
  { rank: 11, name: "GD Goenka University – School of Engineering", type: "Private (Deemed)", nirf: null, naac: "A", fees: "₹2.2L–3.5L/yr", placement: "₹7 LPA avg | ₹28 LPA highest", exam: "JEE Main / Institutional", slug: "gd-goenka-university-engineering-delhi", highlight: "Good Infrastructure" },
  { rank: 12, name: "Guru Tegh Bahadur Institute of Technology", type: "IP University Affiliated", nirf: null, naac: "B+", fees: "₹1.5L–2L/yr", placement: "₹6.5 LPA avg | ₹24 LPA highest", exam: "IPU CET", slug: "gtbit-guru-tegh-bahadur-institute-technology", highlight: "Budget Option with Placements" },
]

const faqs = [
  { question: "Which is the best engineering college in Delhi in 2026?", answer: "IIT Delhi is India's #2 engineering institution (NIRF), but requires JEE Advanced rank under 200 for CSE. Among accessible options, DTU (Delhi Technological University) is the best — NIRF 49, NAAC A+, ₹1.5L/yr fees, and ₹18 LPA average placement. NSUT (NIRF 52) is close behind. Both admit through JEE Main via JAC Delhi counselling." },
  { question: "What JEE Main percentile is needed for DTU and NSUT in 2026?", answer: "DTU CSE/IT requires 99+ percentile in JEE Main (General category) in JAC Delhi. NSUT CSE requires 98.5+ percentile. For other branches (Mechanical, Civil, Electronics): DTU needs 95-98 percentile, NSUT needs 93-97 percentile. OBC-NCL gets ~2 percentile relaxation, SC/ST gets 5-8 percentile relaxation." },
  { question: "What is the fee for engineering college in Delhi?", answer: "Engineering college fees in Delhi vary widely: IIT Delhi — ₹2.2L/yr. Government colleges (DTU, NSUT, IGDTUW) — ₹1.5L–2L/yr. Central Universities (Jamia Millia) — ₹80K–1.5L/yr. IP University affiliated private colleges — ₹1.5L–2.5L/yr. Private deemed universities (Amity, Bennett) — ₹2.5L–5L/yr. SC/ST students at government colleges get full fee waiver through central/state scholarships." },
  { question: "What exam is needed for government engineering colleges in Delhi?", answer: "JEE Main is the primary exam for Delhi's government engineering colleges. JAC Delhi (Joint Admission Counselling) uses JEE Main scores for DTU, NSUT, IGDTUW, and IIIT Delhi. IIT Delhi requires JEE Advanced. Jamia Millia Islamia accepts both JEE Main and CUET scores. IP University affiliated colleges use IPU CET or JEE Main." },
  { question: "Which Delhi engineering college has the best placements in 2026?", answer: "IIT Delhi leads with ₹25 LPA average and ₹2.5 Cr highest. Among accessible colleges, DTU has the best placement with ₹18 LPA average (2025). NSUT follows at ₹16 LPA. IIIT Delhi is best for CS placements at ₹20 LPA average. Top recruiters: Google, Microsoft, Amazon, Goldman Sachs, Schlumberger, Samsung R&D." },
  { question: "Is DTU better than NSUT for engineering?", answer: "DTU ranks slightly higher (NIRF 49 vs NSUT's NIRF 52) and has marginally better average placements (₹18 LPA vs ₹16 LPA). DTU has a larger campus (164 acres) and more research output. However, NSUT's Dwarka campus has excellent infrastructure. For CSE/IT specifically, both are nearly equivalent — the branch matters more than the college at this level." },
  { question: "Can I get IGDTUW with 95 percentile in JEE Main?", answer: "IGDTUW (women's college) CSE cutoff is typically around 96-97 percentile for General category. With 95 percentile you may get Electronics or Mechanical branches. ECE cutoff is around 94-96 percentile. For IT/Software: approximately 96 percentile. OBC-NCL and SC/ST have significantly lower cutoffs — check JAC Delhi official data for exact figures." },
  { question: "What is IIIT Delhi and is it better than DTU for computer science?", answer: "IIIT Delhi (Indraprastha Institute of Information Technology Delhi) is an autonomous state institute focused exclusively on CS, IT, and Electronics. NIRF 81, but placement-wise it competes with DTU — ₹20 LPA average vs DTU's ₹18 LPA. IIIT Delhi has a stronger research culture and better startup ecosystem. Cutoff is similar to DTU CSE (99+ JEE Main percentile)." },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Engineering Colleges in Delhi", url: "/engineering-colleges-delhi" },
]

export default function EngineeringCollegesDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = generateItemListSchema(colleges.map(c => ({
    name: c.name,
    url: `/colleges/${c.slug}`,
    description: `${c.type} | NIRF ${c.nirf ?? "N/A"} | NAAC ${c.naac} | ${c.fees} | ${c.placement}`,
  })))

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>/</span>
            <span className="text-white">Engineering Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Best Engineering Colleges in Delhi 2026
          </h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            There are 12+ government and private engineering colleges in Delhi. The top options are DTU (NIRF 49), NSUT (NIRF 52), IGDTUW, IIT Delhi, and IIIT Delhi — all admitting through JEE Main via JAC Delhi counselling.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "12+", label: "Engineering Colleges" },
              { value: "NIRF #2", label: "IIT Delhi Rank" },
              { value: "₹18 LPA", label: "DTU Avg Placement" },
              { value: "₹1.5L/yr", label: "Govt. College Fees" },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Quick answer for AI Overviews */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm text-blue-900 font-semibold mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">The best engineering colleges in Delhi for 2026 are: <strong>IIT Delhi</strong> (NIRF #2, JEE Advanced), <strong>DTU</strong> (NIRF 49, JEE Main 99+ percentile), <strong>NSUT</strong> (NIRF 52, JEE Main 98.5+), <strong>IGDTUW</strong> (women's, JEE Main 96+), and <strong>IIIT Delhi</strong> (CS-focused, JEE Main 99+). All government college fees are ₹1.5L–2L/year.</p>
        </div>

        {/* College Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Engineering Colleges in Delhi 2026 — Ranked</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">College</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">NIRF</th>
                <th className="px-4 py-3 text-left font-semibold">Fees/yr</th>
                <th className="px-4 py-3 text-left font-semibold">Avg Pkg</th>
                <th className="px-4 py-3 text-left font-semibold">Exam</th>
                <th className="px-4 py-3 text-left font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((c, i) => (
                <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-bold text-gray-500">{c.rank}</td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-900">{c.name}</p>
                    <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-medium">{c.highlight}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{c.type}</td>
                  <td className="px-4 py-3 text-gray-600">{c.nirf ? `#${c.nirf}` : "—"}</td>
                  <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">{c.fees}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold whitespace-nowrap">{c.placement.split("|")[0].trim()}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{c.exam}</td>
                  <td className="px-4 py-3">
                    <Link href={`/colleges/${c.slug}`} className="text-red-700 hover:underline text-xs font-semibold flex items-center gap-1 whitespace-nowrap">
                      Details <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* JEE Cutoff Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">JEE Main 2025 Cutoff — Delhi Govt. Engineering Colleges</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { college: "DTU – CSE/IT", general: "99.2+ percentile", obc: "97.5+", sc: "92+", st: "85+", exam: "JAC Delhi" },
            { college: "NSUT – CSE/IT", general: "98.8+ percentile", obc: "97+", sc: "91+", st: "84+", exam: "JAC Delhi" },
            { college: "IGDTUW – CSE (Women)", general: "97+ percentile", obc: "95+", sc: "88+", st: "80+", exam: "JAC Delhi" },
            { college: "IIIT Delhi – CSE", general: "99+ percentile", obc: "97+", sc: "90+", st: "83+", exam: "JAC Delhi / JOSAA" },
            { college: "DTU – Electronics/ECE", general: "98+ percentile", obc: "96+", sc: "89+", st: "82+", exam: "JAC Delhi" },
            { college: "NSUT – Mechanical", general: "95+ percentile", obc: "92+", sc: "85+", st: "76+", exam: "JAC Delhi" },
          ].map(r => (
            <div key={r.college} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <p className="font-bold text-gray-900 text-sm mb-2">{r.college}</p>
              <p className="text-xs text-gray-500 mb-2">Exam: {r.exam}</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <span className="text-gray-600">General: <strong className="text-gray-900">{r.general}</strong></span>
                <span className="text-gray-600">OBC-NCL: <strong className="text-gray-900">{r.obc}</strong></span>
                <span className="text-gray-600">SC: <strong className="text-gray-900">{r.sc}</strong></span>
                <span className="text-gray-600">ST: <strong className="text-gray-900">{r.st}</strong></span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-8">* Cutoffs based on 2025 JAC Delhi data. 2026 cutoffs will be published after JEE Main results (Feb/May 2026).</p>

        {/* Why Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Why Study Engineering in Delhi?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            { title: "National Capital Advantage", desc: "Delhi's colleges have direct access to the country's largest job market, government internships, and startup ecosystem of NCR region." },
            { title: "Top Government Colleges", desc: "DTU, NSUT, IGDTUW, and Jamia Millia Islamia are world-class government institutions with fees under ₹2L/year." },
            { title: "IIT Delhi in Your City", desc: "IIT Delhi (NIRF #2) is located in Hauz Khas, South Delhi — only accessible via JEE Advanced but a world-class institution for top rankers." },
            { title: "Metro Connectivity", desc: "All major engineering colleges are metro-accessible. DTU is near Rohini, NSUT near Dwarka, IGDTUW near Janakpuri — easy commute from all Delhi areas." },
            { title: "₹25+ LPA Average Placements", desc: "IIT Delhi averages ₹25 LPA. DTU and NSUT average ₹16-18 LPA. Top companies like Google, Microsoft, Amazon, Goldman Sachs recruit directly from Delhi campuses." },
            { title: "Strong Alumni Network", desc: "DTU, NSUT and IIIT Delhi alumni are in leadership positions at major tech companies, government bodies and unicorn startups across India and globally." },
          ].map(p => (
            <div key={p.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{p.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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

        {/* Related Pages */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related Guides</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { label: "DTU vs NSUT Comparison 2026", href: "/dtu-vs-nsut" },
            { label: "JEE Main Colleges Delhi", href: "/jee-colleges-delhi" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "B.Tech Colleges Delhi", href: "/btech-colleges-delhi" },
            { label: "Low Fee Engineering Colleges Delhi", href: "/low-fees-engineering-colleges-delhi" },
            { label: "Engineering Placements Delhi", href: "/engineering-colleges-delhi-placement" },
            { label: "College Predictor", href: "/predictor" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold text-lg">Not sure which engineering college to choose?</p>
            <p className="text-blue-200 text-sm">Get free personalized counselling based on your JEE rank, category, and budget.</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">
              Use Predictor
            </Link>
            <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap transition-colors">
              Free Counselling
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
