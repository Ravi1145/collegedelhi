import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Journalism Colleges in Delhi 2026 | BJMC Fees, CUET Cutoff & Placements",
  description: "Top journalism colleges in Delhi 2026 — LSR, Jamia MCRC, IIMC. Compare BJMC fees ₹12K–₹2.5L/yr, CUET cutoffs, media placements at NDTV, BBC, Times of India.",
  path: "/journalism-colleges-delhi",
  keywords: [
    "journalism colleges in Delhi 2026",
    "best journalism college Delhi",
    "BJMC colleges Delhi fees",
    "IIMC Delhi admission 2026",
    "Jamia journalism college Delhi",
    "LSR journalism Delhi",
    "mass communication journalism Delhi",
    "media colleges Delhi 2026",
    "journalism CUET cutoff Delhi",
    "diploma journalism Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "IIMC Delhi (Indian Institute of Mass Communication)", type: "Government (Autonomous)", naac: "A", fees: "₹45K–₹80K/yr", program: "PG Diploma Journalism (1yr)", exam: "IIMC Entrance", highlight: "India's #1 Journalism Institute | Govt of India | NDTV, BBC placements" },
  { rank: 2, name: "LSR — BA Hons Journalism", type: "Delhi University (Govt aided)", naac: "A++", fees: "₹12K–₹18K/yr", program: "BA Hons Journalism (3yr)", exam: "CUET 98+ percentile", highlight: "Best UG Journalism in India | ₹12K/yr | Alumni at NYT, BBC, NDTV" },
  { rank: 3, name: "Jamia Millia Islamia — AJK MCRC", type: "Central University", naac: "A++", fees: "₹30K–₹60K/yr", program: "BJMC (3yr), MA Journalism (2yr)", exam: "CUET + Jamia Entrance", highlight: "Best broadcast journalism | TV/Film production studios | Top MA program" },
  { rank: 4, name: "Delhi College of Arts & Commerce — BMC", type: "Delhi University", naac: "A", fees: "₹12K–₹16K/yr", program: "BMC (Bachelor of Media & Communication)", exam: "CUET 92+", highlight: "Affordable DU option | North Campus | Good industry exposure" },
  { rank: 5, name: "Gargi College — BMC", type: "Delhi University (Women's)", naac: "A", fees: "₹12K–₹15K/yr", program: "BMC (3yr)", exam: "CUET 90+", highlight: "Women's college | South Campus | Practical journalism training" },
  { rank: 6, name: "Symbiosis Institute of Media & Communication", type: "Deemed University", naac: "A++", fees: "₹2L–₹2.5L/yr", program: "BA Mass Communication (3yr)", exam: "SET + SIMC Test", highlight: "Premium private | Industry mentors | Digital media focus" },
  { rank: 7, name: "Amity School of Communication, Noida", type: "Deemed University", naac: "A+", fees: "₹1.5L–₹2L/yr", program: "BA Journalism & Mass Comm (3yr)", exam: "Amity JEE", highlight: "Near Delhi | Strong alumni | Digital & PR specialisation" },
]

const faqs = [
  { question: "Which is the best journalism college in Delhi 2026?", answer: "IIMC Delhi (Indian Institute of Mass Communication) is India's top journalism institute for postgraduates — 1-year PG Diploma, government fees ₹45–80K, alumni at NDTV, BBC, Reuters, Hindustan Times, and all major newsrooms. For undergraduates, LSR (Lady Shri Ram College) BA Hons Journalism is the best — DU affiliated, fees ₹12–18K/yr, CUET cutoff 98+ percentile. Jamia Millia's AJK MCRC is the best for broadcast and documentary journalism." },
  { question: "What is the fee for journalism colleges in Delhi?", answer: "Journalism fees in Delhi: Government (IIMC Delhi PG Diploma) ₹45–80K for 1 year, DU colleges (LSR, DCAC, Gargi) ₹12,000–18,000/yr for 3-year BA/BMC — the cheapest quality journalism education in India, Jamia Millia ₹30,000–60,000/yr, Private deemed (Amity) ₹1.5–2L/yr, Premium private (Symbiosis) ₹2–2.5L/yr. Total 3-year BA Journalism from DU costs just ₹40,000–₹55,000." },
  { question: "What entrance exam is needed for journalism in Delhi?", answer: "IIMC Delhi requires IIMC Entrance Exam (conducted by IIMC, May–June 2026) for PG Diploma programs. Delhi University colleges (LSR, DCAC, Gargi) require CUET UG 2026. Jamia Millia requires CUET + Jamia's own entrance test for BJMC. IP University affiliated media colleges need IPU CET. Private colleges (Amity, Symbiosis) have their own exams (Amity JEE, SET). IIMC and DU routes are the most prestigious." },
  { question: "What jobs can I get after journalism from Delhi colleges?", answer: "Journalism graduates from Delhi colleges work as: TV news reporters and anchors (NDTV, Aaj Tak, ABP News), digital journalists at The Wire, Scroll, The Print, Hindustan Times Digital, PR & communications managers at corporates (₹5–12 LPA), content strategists at startups and agencies, documentary filmmakers (OTT platforms), political correspondents, and foreign correspondents. IIMC Delhi alumni are in every major Indian newsroom. Starting salaries: ₹3–5 LPA, senior roles ₹10–25 LPA." },
  { question: "Is IIMC Delhi better than Jamia for journalism?", answer: "IIMC Delhi vs Jamia for journalism: IIMC is better for print and news journalism — 1-year PG Diploma, all India reputation, government institute. Jamia AJK MCRC is better for broadcast journalism, documentary filmmaking, and TV production — has professional studios, 3-year BJMC and 2-year MA. For undergraduates who want both, doing BA Journalism from LSR (DU) and then MA/PG Diploma from IIMC or Jamia is the ideal two-step path." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Journalism Colleges Delhi", url: "https://www.collegedelhi.com/journalism-colleges-delhi" },
]

export const revalidate = 86400

export default function JournalismCollegesDelhi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Journalism Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Journalism Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top BJMC & BA Journalism colleges in Delhi — IIMC, LSR, Jamia MCRC. Fees ₹12K–₹2.5L/yr, CUET cutoffs, placements at NDTV, BBC, Times of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "36 Journalism Colleges" },
              { icon: TrendingUp, text: "₹3–25 LPA Placements" },
              { icon: Award, text: "IIMC & LSR Top Ranked" },
              { icon: Users, text: "BJMC / BA Journalism / PG Diploma" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <Icon className="w-4 h-4 text-red-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Journalism Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best PG:</strong> IIMC Delhi (Govt, ₹45K) · <strong>Best UG:</strong> LSR (CUET 98+, ₹12K/yr) · <strong>Best broadcast:</strong> Jamia MCRC · <strong>Most affordable UG:</strong> Gargi/DCAC (₹12K, CUET 90+)
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Journalism Colleges Delhi — Fees & Cutoffs 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">Program</th>
                  <th className="px-4 py-3 text-left font-semibold">Exam</th>
                  <th className="px-4 py-3 text-left font-semibold">Fees/yr</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c, i) => (
                  <tr key={c.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-red-600">#{c.rank}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-xs text-blue-600 mt-0.5">{c.type}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{c.program}</td>
                    <td className="px-4 py-3 text-orange-600 font-medium text-xs">{c.exam}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="Journalism" keywords={["media", "journalism", "BJMC"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Not sure between IIMC, LSR, or Jamia?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you choose the right journalism college based on your CUET score, specialisation, and career goals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Journalism Colleges Delhi</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Mass Communication Delhi", href: "/mass-communication-colleges-delhi" },
              { label: "BA Colleges Delhi", href: "/ba-colleges-delhi" },
              { label: "CUET Colleges Delhi", href: "/cuet-colleges-delhi" },
              { label: "Arts Colleges Delhi", href: "/arts-colleges-delhi" },
              { label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" },
              { label: "All Colleges Delhi", href: "/colleges" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-blue-600 hover:text-red-700 bg-white border border-gray-100 rounded-lg px-4 py-3 text-center shadow-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
