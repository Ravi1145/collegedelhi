import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best LLB Colleges in Delhi 2026",
  description: "Top LLB colleges in Delhi 2026 — NLU Delhi, DU Law Faculty, Jamia Law, IP University Law. Compare BA LLB / LLB (3yr) fees ₹15K–₹2.5L/yr, CLAT & CUET cutoffs.",
  path: "/llb-colleges-delhi",
  keywords: [
    "LLB colleges in Delhi 2026",
    "best LLB college Delhi",
    "BA LLB colleges Delhi fees",
    "CLAT cutoff Delhi law colleges 2026",
    "NLU Delhi admission 2026",
    "Delhi University law faculty LLB",
    "law colleges Delhi CLAT",
    "LLB 3 year Delhi",
    "BA LLB 5 year Delhi",
    "IP University law colleges Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "NLU Delhi (National Law University Delhi)", type: "Government (NLU)", naac: "A+", fees: "₹2L–₹2.5L/yr", program: "BA LLB (5yr)", exam: "CLAT — top 100–150 rank", highlight: "Top 3 NLU India | CLAT admission | Best law placements Delhi" },
  { rank: 2, name: "DU Faculty of Law — Campus Law Centre", type: "Delhi University (Central)", naac: "A++", fees: "₹12K–₹20K/yr", program: "LLB (3yr) — most affordable", exam: "DU LLB Entrance Test", highlight: "Cheapest quality law degree | DU Campus Law Centre | ₹12K/yr" },
  { rank: 3, name: "Jamia Millia Islamia — Faculty of Law", type: "Central University", naac: "A++", fees: "₹25K–₹50K/yr", program: "BA LLB (5yr), LLB (3yr)", exam: "CLAT / Jamia LLB Entrance", highlight: "Central University | Strong constitutional law | Affordable 5yr LLB" },
  { rank: 4, name: "IP University Law Colleges (USLLS, VIPS)", type: "State University affiliated", naac: "–", fees: "₹80K–₹1.5L/yr", program: "BA LLB (5yr), BBA LLB (5yr)", exam: "IPU CET Law", highlight: "IP University | Multiple campuses | Professional BA LLB" },
  { rank: 5, name: "Amity Law School, Delhi", type: "Deemed University", naac: "A+", fees: "₹1.2L–₹2L/yr", program: "BA LLB, BBA LLB (5yr)", exam: "Amity JEE / CLAT score", highlight: "Private | Industry mentorship | Corporate law focus" },
  { rank: 6, name: "Vivekananda Institute of Professional Studies (VIPS)", type: "IP University affiliated", naac: "B+", fees: "₹90K–₹1.3L/yr", program: "BA LLB (5yr)", exam: "IPU CET Law", highlight: "West Delhi | Rohini | Good moot court record" },
  { rank: 7, name: "New Law College Delhi (DU affiliated)", type: "Delhi University aided", naac: "B+", fees: "₹15K–₹25K/yr", program: "LLB (3yr)", exam: "DU LLB Entrance", highlight: "Most affordable option | 3yr LLB | Experienced faculty" },
]

const faqs = [
  { question: "Which is the best LLB college in Delhi 2026?", answer: "NLU Delhi (National Law University Delhi) is the top law college in Delhi — CLAT admission, top 100–150 rank needed, fees ₹2–2.5L/yr, average placement ₹8–15 LPA in top law firms (AZB & Partners, Trilegal, Shardul Amarchand). For affordable LLB, DU Campus Law Centre offers 3-year LLB at just ₹12,000/yr — best value law degree in India. Jamia Millia Islamia is the best central university option for 5-year BA LLB at ₹25–50K/yr." },
  { question: "What is the difference between LLB (3yr) and BA LLB (5yr) in Delhi?", answer: "BA LLB (5yr): Integrated degree — you do BA + LLB together after Class 12. Requires CLAT or IPU CET. Available at NLU Delhi, Jamia, IP University colleges. Recommended if you want to become a lawyer directly after 12th. LLB (3yr): Postgraduate law degree — requires a bachelor's degree first (BA/B.Com/B.Sc.), then 3-year LLB. Available at DU Campus Law Centre and DU affiliated colleges at ₹12–25K/yr. Recommended if you already have a degree or want to study another subject first." },
  { question: "What CLAT score is needed for law colleges in Delhi 2026?", answer: "CLAT 2026 cutoffs for Delhi law colleges: NLU Delhi — top 100–150 ranks overall (top 50 for General category for BA LLB). Jamia Millia Islamia — CLAT score above 80 percentile + Jamia entrance. IP University colleges (USLLS, VIPS) — IPU CET Law (separate exam). DU Campus Law Centre — DU's own LLB entrance test (for 3-year LLB only, not CLAT). Amity Law School — accepts CLAT score or Amity JEE." },
  { question: "What is the fee for LLB in Delhi colleges?", answer: "LLB fees in Delhi 2026: DU Campus Law Centre (3yr LLB) ₹12,000–₹20,000/yr — cheapest quality law degree in India. Jamia Millia Islamia (5yr BA LLB) ₹25,000–₹50,000/yr. IP University affiliated colleges ₹80,000–₹1.5L/yr. NLU Delhi (5yr BA LLB) ₹2–2.5L/yr. Amity Law School ₹1.2–2L/yr. Total 3-year LLB from DU costs ₹36,000–₹60,000 — the best ROI law degree in India for litigation careers." },
  { question: "What career options are available after LLB from Delhi colleges?", answer: "LLB graduates from Delhi colleges pursue: Advocate in Delhi High Court and District Courts (start ₹3–6 LPA, senior ₹15–50 LPA), Corporate Lawyer at law firms (NLU Delhi graduates: ₹8–20 LPA at AZB, Cyril Amarchand, Trilegal), Legal Officer in banks, PSUs and government departments (₹5–12 LPA), Judicial Services (Delhi Judicial Service Exam), LLM abroad (NLU Delhi students frequently get LLM scholarships to Oxford, Harvard, Columbia), and in-house counsel at MNCs (₹8–18 LPA)." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "LLB Colleges Delhi", url: "https://www.collegedelhi.com/llb-colleges-delhi" },
]

export const revalidate = 86400

export default function LLBCollegesDelhi() {
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
            <span className="text-white">LLB Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best LLB Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top BA LLB & LLB (3yr) colleges in Delhi — NLU Delhi, DU Law Faculty, Jamia, IP University. Fees ₹12K–₹2.5L/yr, CLAT cutoffs, law career placements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "7+ Top Law Colleges" },
              { icon: TrendingUp, text: "₹8–20 LPA Placements" },
              { icon: Award, text: "NLU Delhi Top 3 India" },
              { icon: Users, text: "BA LLB / LLB (3yr) / BBA LLB" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top LLB Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best 5yr BA LLB:</strong> NLU Delhi (CLAT top 150) · <strong>Best affordable LLB:</strong> DU Campus Law Centre (₹12K/yr) · <strong>Central Univ:</strong> Jamia Millia (₹25–50K/yr) · <strong>IPU option:</strong> USLLS / VIPS
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Top LLB Colleges Delhi — Fees, Exam & Programs 2026</h2>
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
                      <p className="text-xs text-blue-600 mt-0.5">{c.type} · NAAC {c.naac}</p>
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

          <StreamCollegesTable stream="Law" keywords={["LLB", "law", "legal", "CLAT"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Need help with LLB college selection in Delhi?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you choose between NLU Delhi, DU Law, Jamia and IP University law colleges based on your CLAT rank and budget.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — LLB Colleges Delhi</h2>
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
              { label: "Law Colleges Delhi", href: "/law-colleges-delhi" },
              { label: "CUET Colleges Delhi", href: "/cuet-colleges-delhi" },
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "BA Colleges Delhi", href: "/ba-colleges-delhi" },
              { label: "IP University Delhi", href: "/ipu-colleges-delhi" },
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
