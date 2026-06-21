import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Mass Communication Colleges in Delhi 2026 | Journalism, Media Fees & Admission",
  description: "Top mass communication & journalism colleges in Delhi 2026 — LSR, Jamia, IP University. BMC/BJMC fees ₹30K–₹2L/yr, CUET cutoffs, media placement data.",
  path: "/mass-communication-colleges-delhi",
  keywords: [
    "mass communication colleges in Delhi 2026",
    "journalism colleges Delhi",
    "best media colleges Delhi",
    "BJMC colleges Delhi fees",
    "BMC Delhi University admission 2026",
    "Jamia journalism Delhi",
    "LSR mass communication Delhi",
    "IP University mass communication",
    "mass communication CUET cutoff Delhi",
    "top journalism institutes Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "Lady Shri Ram College — Journalism", university: "Delhi University", naac: "A++", fees: "₹12K–₹18K/yr", program: "BA Hons Journalism (3yr)", exam: "CUET 98+", highlight: "India's best Journalism BA | DU affiliated | NDTV alumni" },
  { rank: 2, name: "Jamia Millia Islamia — AJK MCRC", university: "Central University", naac: "A++", fees: "₹30K–₹60K/yr", program: "BJMC, MA Mass Comm (2yr)", exam: "CUET + Jamia Entrance", highlight: "Top Broadcast Journalism | TV & Film production lab" },
  { rank: 3, name: "IP University — MERI & affiliated MCM colleges", university: "GGSIPU", naac: "–", fees: "₹80K–₹1.5L/yr", program: "BAJMC (4yr), BJMC", exam: "IPU CET", highlight: "IPU affiliated | Industry internships | Delhi NCR placements" },
  { rank: 4, name: "Delhi College of Arts & Commerce (DCAC)", university: "Delhi University", naac: "A", fees: "₹12K–₹16K/yr", program: "BMC (Bachelor of Mass Communication)", exam: "CUET 92+", highlight: "Affordable | DU North Campus | Good faculty" },
  { rank: 5, name: "Symbiosis Institute of Media & Communication Delhi", university: "Symbiosis (Deemed)", naac: "A++", fees: "₹2L–₹3L/yr", program: "BA Mass Communication (3yr)", exam: "SET + SIMC Entrance", highlight: "Premium private | Industry projects | Pune campus option" },
  { rank: 6, name: "Amity School of Communication, Delhi", university: "Amity (Deemed)", naac: "A+", fees: "₹1.5L–₹2.5L/yr", program: "BA Journalism, BCom Media", exam: "Amity JEE", highlight: "Strong alumni network | Digital media focus | Noida campus" },
  { rank: 7, name: "Gargi College — BMC", university: "Delhi University", naac: "A", fees: "₹12K–₹15K/yr", program: "BMC (3yr)", exam: "CUET 90+", highlight: "Women's college | South Campus | Affordable" },
]

const faqs = [
  { question: "Which is the best mass communication college in Delhi 2026?", answer: "LSR (Lady Shri Ram College) has the best BA Hons Journalism program in Delhi — DU affiliated, fees just ₹12–18K/yr, CUET cutoff 98+ percentile, alumni at NDTV, BBC, Times of India, and Hindustan Times. For broadcast journalism with TV/film labs, Jamia Millia Islamia's AJK MCRC is India's top centre. For industry-focused digital media, Amity School of Communication offers strong placement in digital agencies." },
  { question: "What is the fee for mass communication in Delhi colleges?", answer: "Mass communication fees in Delhi vary widely: DU colleges (LSR, DCAC, Gargi) charge ₹12,000–₹18,000/yr — India's most affordable journalism education. IP University affiliated colleges charge ₹80K–₹1.5L/yr. Jamia Millia Islamia charges ₹30,000–₹60,000/yr. Private deemed universities (Amity, Symbiosis) charge ₹1.5–3L/yr. Total 3-year BMC/BJMC from DU costs just ₹40,000–₹55,000." },
  { question: "Is CUET required for mass communication in Delhi colleges?", answer: "Yes — for Delhi University colleges (LSR, DCAC, Gargi), CUET UG 2026 is mandatory for BMC/BA Journalism admission. Jamia Millia Islamia requires CUET + its own entrance test for BJMC. IP University colleges require IPU CET (separate from CUET). Private colleges like Amity and Symbiosis have their own entrance exams (Amity JEE, SET) and do not use CUET." },
  { question: "What are the career options after mass communication from Delhi colleges?", answer: "Mass communication graduates from Delhi colleges work as: TV journalists (NDTV, Aaj Tak, ABP News), digital content creators and editors (Scroll, The Wire, digital agencies), PR & corporate communications executives (₹4–10 LPA), advertising copywriters and creative directors, documentary filmmakers (for OTT platforms), social media managers, and government communications officers. LSR and Jamia alumni regularly join national and international media organisations." },
  { question: "Which Delhi college is best for journalism vs digital media?", answer: "For print and broadcast journalism: LSR (DU, CUET 98+) and Jamia MCRC are the gold standard. For digital media and content marketing: Amity School of Communication (Noida) and SIMC Delhi offer strong industry-oriented programs. For affordable quality: DCAC and Gargi (DU, CUET 90–92+, fees ₹12K/yr) offer good BMC programs. For research and advanced journalism (MA), Jamia's AJK MCRC is India's top journalism school." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Mass Communication Colleges Delhi", url: "https://www.collegedelhi.com/mass-communication-colleges-delhi" },
]

export const revalidate = 86400

export default function MassCommCollegesDelhi() {
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
            <span className="text-white">Mass Communication Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Mass Communication Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top journalism, media & BMC colleges in Delhi — LSR, Jamia MCRC, IP University. Fees ₹12K–₹3L/yr, CUET cutoffs, media placement data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "196 Media Colleges Delhi" },
              { icon: TrendingUp, text: "₹4–12 LPA Placements" },
              { icon: Award, text: "LSR & Jamia MCRC Top" },
              { icon: Users, text: "BMC / BJMC / BA Journalism" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Mass Communication Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best journalism:</strong> LSR Delhi (CUET 98+, ₹12K/yr) · <strong>Best broadcast:</strong> Jamia MCRC · <strong>Best digital media:</strong> Amity Delhi · <strong>Most affordable:</strong> DCAC / Gargi (₹12K/yr, CUET 90+)
            </p>
          </div>

          {/* College Table */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Mass Communication Colleges Delhi — Fees & Cutoffs 2026</h2>
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
                      <p className="text-xs text-blue-600 mt-0.5">{c.university} · NAAC {c.naac}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{c.program}</td>
                    <td className="px-4 py-3 text-orange-600 font-medium">{c.exam}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="Mass Communication" keywords={["media", "journalism", "communication"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Which media college is right for your career?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you choose between LSR, Jamia, Amity based on your CUET score, specialisation, and goals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Mass Communication Colleges Delhi</h2>
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
              { label: "BA Colleges Delhi", href: "/ba-colleges-delhi" },
              { label: "CUET Colleges Delhi", href: "/cuet-colleges-delhi" },
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
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
