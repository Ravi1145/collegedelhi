import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BA Colleges in Delhi 2026 | Fees, CUET Cutoff & Top Arts Colleges",
  description: "Top BA colleges in Delhi 2026 — Miranda House, LSR, Hindu, Hansraj. Compare BA Hons fees ₹10K–₹80K/yr, CUET cutoffs and career options after BA.",
  path: "/ba-colleges-delhi",
  keywords: [
    "BA colleges in Delhi 2026",
    "best BA college Delhi",
    "BA Hons colleges Delhi fees",
    "BA CUET cutoff Delhi 2026",
    "Miranda House Delhi admission",
    "LSR BA Delhi",
    "top arts colleges Delhi",
    "Delhi University BA colleges",
    "BA Economics Delhi",
    "BA English Hons Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "Miranda House", university: "Delhi University", naac: "A++", fees: "₹12K–₹16K/yr", programs: "BA Hons (Economics, English, History, Pol. Sci.)", cuet: "99+ percentile", highlight: "NIRF #2 Women's College | Best BA in Delhi" },
  { rank: 2, name: "Lady Shri Ram College (LSR)", university: "Delhi University", naac: "A++", fees: "₹12K–₹16K/yr", programs: "BA Hons Economics, English, Journalism", cuet: "98–99 percentile", highlight: "Top Economics & Journalism | South Delhi" },
  { rank: 3, name: "Hindu College", university: "Delhi University", naac: "A+", fees: "₹12K–₹15K/yr", programs: "BA Hons (English, History, Political Science)", cuet: "97–98 percentile", highlight: "NIRF #1 DU College | Coed | Co-curricular" },
  { rank: 4, name: "Hansraj College", university: "Delhi University", naac: "A+", fees: "₹10K–₹14K/yr", programs: "BA Hons (Economics, English, Hindi)", cuet: "96–97 percentile", highlight: "Strong academics | North Campus | Affordable" },
  { rank: 5, name: "Kirori Mal College", university: "Delhi University", naac: "A", fees: "₹10K–₹13K/yr", programs: "BA Hons (History, Economics, Political Science)", cuet: "94–96 percentile", highlight: "North Campus | Accessible CUET cutoff" },
  { rank: 6, name: "Daulat Ram College", university: "Delhi University", naac: "A", fees: "₹10K–₹14K/yr", programs: "BA Hons (English, Hindi, History, Geography)", cuet: "90–95 percentile", highlight: "Women's college | North Campus | Good faculty" },
  { rank: 7, name: "Jamia Millia Islamia — Humanities", university: "Central University", naac: "A++", fees: "₹15K–₹25K/yr", programs: "BA (Hons) Mass Comm, Political Science, History", cuet: "90+ percentile", highlight: "Central University | Journalism & Mass Comm strength" },
  { rank: 8, name: "Indraprastha College for Women", university: "Delhi University", naac: "A", fees: "₹10K–₹14K/yr", programs: "BA Hons (English, Hindi, Sanskrit, Philosophy)", cuet: "88–93 percentile", highlight: "Women's college | North Campus | Sanskrit strength" },
]

const faqs = [
  { question: "Which is the best BA college in Delhi 2026?", answer: "Miranda House is India's top women's BA college (NIRF #2, NAAC A++) with BA Hons in Economics, English, History, and Political Science — fees just ₹12–16K/yr, CUET cutoff 99+ percentile. For coed students, Hindu College (NIRF #1 DU) is the best BA option. LSR is the top choice for BA Economics and Journalism. All three are Delhi University colleges on North/South Campus." },
  { question: "What is the fee for BA in Delhi colleges?", answer: "BA fees in Delhi University colleges are among India's most affordable: Government DU colleges charge ₹10,000–₹16,000 per year for BA Hons. Jamia Millia Islamia charges ₹15,000–₹25,000/yr. Private colleges like Amity (BA Journalism) charge ₹1.5–2.5L/yr. The total 3-year BA degree at a top DU college costs just ₹30,000–₹50,000 — the best value undergraduate degree in India." },
  { question: "What CUET score is needed for BA in top Delhi colleges?", answer: "CUET cutoffs for BA in Delhi University 2026: Miranda House BA Hons Economics (99+ percentile), LSR BA Hons Economics (98–99), Hindu College (97–98), Hansraj (96–97), Kirori Mal (94–96), regular DU colleges (85–93 percentile). These are approximate — actual cutoffs depend on the specific BA Hons subject, category (Gen/OBC/SC/ST), and CUET domain subject scores." },
  { question: "Which BA subject has the best career in Delhi colleges?", answer: "BA Economics from SRCC/Miranda House/LSR has the best career prospects — graduates join investment banking, consulting, civil services, and economics research (avg salary ₹6–15 LPA). BA Journalism/Mass Communication from LSR/Jamia leads to media careers at NDTV, Times of India, digital platforms (₹3–8 LPA). BA Political Science + LLB (from DU Law Faculty) is the top path for civil services and law. BA English Hons leads to content, publishing, and MBA/law." },
  { question: "Can I do BA from Delhi University through distance learning?", answer: "Yes — IGNOU (Indira Gandhi National Open University, Delhi) offers BA through distance learning at very low fees (₹3,000–₹6,000/yr). Delhi University's School of Open Learning (SOL) also offers BA through correspondence. However, for career prospects, a regular BA Hons from a DU college (through CUET) is significantly more valued by employers than distance BA. IGNOU/SOL BA is suitable for those seeking just the degree for government job eligibility." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "BA Colleges Delhi", url: "https://www.collegedelhi.com/ba-colleges-delhi" },
]

export const revalidate = 86400

export default function BACollegesDelhi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">BA Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best BA Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top BA Hons colleges in Delhi — Miranda House, LSR, Hindu College. Fees just ₹10K–₹16K/yr, CUET cutoffs, and career paths after BA.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "112 BA Colleges Delhi" },
              { icon: TrendingUp, text: "₹6–15 LPA After BA" },
              { icon: Award, text: "Miranda House #1" },
              { icon: Users, text: "BA Hons / BA Programme" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <Icon className="w-4 h-4 text-red-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Quick Answer */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top BA Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best women's:</strong> Miranda House (99+) · <strong>Best coed:</strong> Hindu College (97–98) · <strong>Economics:</strong> LSR (98–99) · <strong>Journalism:</strong> LSR / Jamia · <strong>Affordable:</strong> Kirori Mal (₹10K/yr, 94–96 percentile)
            </p>
          </div>

          {/* College Table */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top BA Colleges in Delhi — CUET Cutoffs & Fees 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">BA Programs</th>
                  <th className="px-4 py-3 text-left font-semibold">CUET Cutoff</th>
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
                    <td className="px-4 py-3 text-gray-600 text-xs">{c.programs}</td>
                    <td className="px-4 py-3 font-medium text-orange-600">{c.cuet}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="Arts" keywords={["BA", "humanities", "arts"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Which BA college is right for you?</p>
            <p className="text-blue-200 text-sm mb-4">Tell us your CUET percentile and preferred subject — our AI matches you to the right DU college.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/predictor" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                College Predictor
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — BA Colleges Delhi</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "CUET Colleges Delhi", href: "/cuet-colleges-delhi" },
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "Arts Colleges Delhi", href: "/arts-colleges-delhi" },
              { label: "Commerce Colleges Delhi", href: "/commerce-colleges-delhi" },
              { label: "Mass Communication Delhi", href: "/mass-communication-colleges-delhi" },
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
