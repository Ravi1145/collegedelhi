import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BMS Colleges in Delhi 2026",
  description: "Top BMS colleges in Delhi 2026 — SSCBS, Shaheed Sukhdev, DU. Compare BMS fees ₹10K–₹1.5L/yr, CUET cutoffs, placement packages up to ₹15 LPA.",
  path: "/bms-colleges-delhi",
  keywords: [
    "BMS colleges in Delhi 2026",
    "Bachelor of Management Studies Delhi",
    "best BMS college Delhi",
    "SSCBS Delhi BMS admission 2026",
    "BMS CUET cutoff Delhi",
    "BMS vs BBA Delhi",
    "Shaheed Sukhdev College BMS",
    "DU BMS colleges 2026",
    "BMS fees Delhi colleges",
    "BMS placement Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "SSCBS — Shaheed Sukhdev College of Business Studies", university: "Delhi University", naac: "A+", fees: "₹10K–₹14K/yr", cuet: "98–99 percentile", seats: 270, highlight: "India's best BMS college | DU | ₹14 LPA avg placement | McKinsey alumni" },
  { rank: 2, name: "Deen Dayal Upadhyaya College (DDUC)", university: "Delhi University", naac: "A", fees: "₹10K–₹13K/yr", cuet: "90–94 percentile", seats: 90, highlight: "DU North Campus | Affordable | Good BMS program" },
  { rank: 3, name: "Keshav Mahavidyalaya", university: "Delhi University", naac: "A", fees: "₹10K–₹13K/yr", cuet: "88–92 percentile", seats: 60, highlight: "North-West Delhi | Accessible cutoff | Active placement cell" },
  { rank: 4, name: "Maharaja Agrasen College", university: "Delhi University", naac: "A", fees: "₹10K–₹13K/yr", cuet: "87–91 percentile", seats: 60, highlight: "East Delhi | DU affiliated | Regular industry visits" },
  { rank: 5, name: "Bhim Rao Ambedkar College", university: "Delhi University", naac: "A", fees: "₹10K–₹13K/yr", cuet: "85–90 percentile", seats: 60, highlight: "East Delhi | SC/ST reservation seats | Good faculty" },
  { rank: 6, name: "Amity Business School, Noida", university: "Amity (Deemed)", naac: "A+", fees: "₹1L–₹1.5L/yr", cuet: "Amity JEE", seats: 120, highlight: "Private BMS/BBA | Near Delhi | Strong placement support" },
]

const faqs = [
  { question: "What is BMS and how is it different from BBA?", answer: "BMS (Bachelor of Management Studies) is a 3-year undergraduate management degree offered specifically by Delhi University colleges. It focuses on management theory, economics, business law, and analytics — similar to BBA but with a stronger academic/research orientation and higher ranking recognition. BBA is offered by private universities (Amity, IP University). SSCBS Delhi's BMS is rated higher than most BBA programs — its graduates compete directly with IIM graduates in campus placements at ₹8–15 LPA." },
  { question: "Which is the best BMS college in Delhi 2026?", answer: "SSCBS (Shaheed Sukhdev College of Business Studies) is India's best BMS college — Delhi University, fees ₹10–14K/yr, CUET cutoff 98–99 percentile, average placement ₹14 LPA, top recruiters include McKinsey, BCG, Deloitte, KPMG, Hindustan Unilever. SSCBS is so competitive that it's harder to get into than many MBA colleges. For students with 90–94 percentile, Deen Dayal Upadhyaya College (DDUC) offers excellent value." },
  { question: "What CUET score is needed for BMS in Delhi?", answer: "CUET cutoffs for BMS in Delhi University 2026: SSCBS (98–99 percentile — among the highest in any DU program), DDUC (90–94 percentile), Keshav Mahavidyalaya (88–92 percentile), Maharaja Agrasen (87–91 percentile). BMS uses CUET General Test + English scores. Category-wise cutoffs: OBC (approx. 5–7 percentile lower), SC/ST (15–20 percentile lower). These are approximate — actual cutoffs are released by DU CSAS after CUET results." },
  { question: "What is the placement record for BMS Delhi colleges?", answer: "SSCBS Delhi BMS placements 2025: Average package ₹14 LPA, top package ₹28 LPA, 95%+ placement rate. Recruiters include McKinsey & Company, Boston Consulting Group, Deloitte, KPMG, EY, Goldman Sachs, Deutsche Bank, Hindustan Unilever, Procter & Gamble, Amazon, and top consulting/finance firms. SSCBS BMS is one of India's top undergraduate management programs for consulting and finance careers — comparable to IIM BBA programs." },
  { question: "Should I do BMS or BBA in Delhi?", answer: "Choose BMS (SSCBS/DU) if: you want the most prestigious DU degree, prefer lower fees (₹10K/yr vs ₹1L+/yr for BBA private), want to compete for McKinsey/BCG type placements. Choose BBA (Amity, IP University, Christ) if: your CUET score is below 90 percentile, you want a private college environment, you prefer specialisations like Marketing/Finance from the start. Verdict: If you can get into SSCBS, do BMS. If not, DU BBA from LSR/SGTB Khalsa is the next best option." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "BMS Colleges Delhi", url: "https://www.collegedelhi.com/bms-colleges-delhi" },
]

export const revalidate = 86400

export default function BMSCollegesDelhi() {
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
            <span className="text-white">BMS Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best BMS Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top Bachelor of Management Studies (BMS) colleges in Delhi — SSCBS, DDUC, DU colleges. Fees just ₹10K–₹14K/yr, CUET cutoffs, ₹14 LPA average placement at SSCBS.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "DU BMS Colleges" },
              { icon: TrendingUp, text: "₹14 LPA Avg (SSCBS)" },
              { icon: Award, text: "SSCBS #1 BMS India" },
              { icon: Users, text: "BMS (3yr) — DU Degree" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top BMS Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best:</strong> SSCBS Delhi (CUET 98–99, ₹14 LPA avg, McKinsey/BCG) · <strong>Mid-range:</strong> DDUC (CUET 90–94) · <strong>Accessible:</strong> Keshav / Maharaja Agrasen (CUET 87–92) · <strong>All fees:</strong> ₹10–14K/yr
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Top BMS Colleges Delhi — CUET Cutoffs & Placements 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">CUET Cutoff</th>
                  <th className="px-4 py-3 text-left font-semibold">Seats</th>
                  <th className="px-4 py-3 text-left font-semibold">Fees/yr</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c, i) => (
                  <tr key={c.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-red-600">#{c.rank}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-xs text-blue-600 mt-0.5">{c.university} · NAAC {c.naac}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 font-medium text-orange-600">{c.cuet}</td>
                    <td className="px-4 py-3 text-gray-600">{c.seats}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="BMS" keywords={["BMS", "management studies", "business"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Check your CUET score vs BMS cutoffs</p>
            <p className="text-blue-200 text-sm mb-4">Enter your CUET percentile and get matched to the right BMS or BBA college in Delhi.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/predictor" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                College Predictor
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — BMS Colleges Delhi</h2>
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
              { label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" },
              { label: "CUET Colleges Delhi", href: "/cuet-colleges-delhi" },
              { label: "Commerce Colleges Delhi", href: "/commerce-colleges-delhi" },
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
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
