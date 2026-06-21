import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "CUET Colleges in Delhi 2026 | DU, IP University CUET Cutoff & Admission",
  description: "Top CUET colleges in Delhi 2026 — DU colleges, IP University, Jamia. CUET cutoffs, seat matrix, best colleges for 95–99 percentile in Delhi.",
  path: "/cuet-colleges-delhi",
  keywords: [
    "CUET colleges in Delhi 2026",
    "best CUET colleges Delhi",
    "DU CUET cutoff 2026",
    "Delhi University CUET admission 2026",
    "CUET score colleges Delhi",
    "top colleges accepting CUET Delhi",
    "CUET percentile colleges Delhi",
    "Delhi University admission CUET 2026",
    "IP University CUET Delhi",
    "CUET UG cutoff Delhi colleges",
  ],
})

const colleges = [
  { rank: 1, name: "SRCC (Shri Ram College of Commerce)", university: "Delhi University", program: "B.Com (Hons)", cuetCutoff: "99.5+ percentile", fees: "₹14K–₹18K/yr", highlight: "India's #1 Commerce College | Highest CUET cutoff DU" },
  { rank: 2, name: "Miranda House", university: "Delhi University", program: "BA (Hons), B.Sc.", cuetCutoff: "99+ percentile", fees: "₹12K–₹16K/yr", highlight: "NIRF #1 Women's College | Best arts & science" },
  { rank: 3, name: "Hindu College", university: "Delhi University", program: "BA, B.Sc., B.Com", cuetCutoff: "98.5+ percentile", fees: "₹12K–₹16K/yr", highlight: "NIRF #1 DU College 2025 | All streams" },
  { rank: 4, name: "Hansraj College", university: "Delhi University", program: "BA, B.Sc., B.Com", cuetCutoff: "97+ percentile", fees: "₹10K–₹15K/yr", highlight: "Top Science & Commerce | NIRF ranked" },
  { rank: 5, name: "Kirori Mal College", university: "Delhi University", program: "BA, B.Sc., B.Com", cuetCutoff: "95+ percentile", fees: "₹10K–₹14K/yr", highlight: "North Campus | Strong alumni | Affordable" },
  { rank: 6, name: "Lady Shri Ram College (LSR)", university: "Delhi University", program: "BA (Hons), B.Com", cuetCutoff: "98+ percentile", fees: "₹12K–₹16K/yr", highlight: "Top Women's College | Economics & English" },
  { rank: 7, name: "Jamia Millia Islamia", university: "Central University", program: "BA, B.Sc., B.Tech, MBA", cuetCutoff: "90+ percentile", fees: "₹20K–₹80K/yr", highlight: "Central University | Also accepts JEE/NEET" },
  { rank: 8, name: "IP University (GGSIPU) Colleges", university: "IP University", program: "BCA, BBA, B.Tech, MBA", cuetCutoff: "IPU CET (separate)", fees: "₹80K–₹2L/yr", highlight: "IP University has own CET — not CUET based" },
]

const faqs = [
  { question: "Which Delhi colleges accept CUET 2026 score?", answer: "All 90+ Delhi University colleges accept CUET UG 2026 — including SRCC, Miranda House, Hindu College, Hansraj, LSR, Kirori Mal, Daulat Ram, and more. Jamia Millia Islamia also accepts CUET for BA/B.Sc. programs. Note: IP University (GGSIPU) has its own IPU CET exam and does NOT use CUET. IIT Delhi uses JEE Advanced, not CUET." },
  { question: "What CUET score is needed for top Delhi University colleges?", answer: "CUET cutoffs for top DU colleges in 2026: SRCC (99.5+ percentile for B.Com Hons), Miranda House (99+ for BA Hons Economics/English), Hindu College (98.5+ for B.Sc. Physics/Chemistry), LSR (98+ for BA Hons Economics), Hansraj (97+ for B.Sc. programs), Kirori Mal (95+ for BA/B.Sc.), regular DU colleges (85–95 percentile). These cutoffs vary by subject combination." },
  { question: "Is CUET mandatory for Delhi University admission 2026?", answer: "Yes — Delhi University has made CUET UG mandatory for all UG admissions from 2022 onwards. There is no class 12 merit-based admission to DU colleges. You must appear in CUET UG (conducted by NTA) in May–June 2026. CUET score + DU CSAS (Common Seat Allocation System) determines your college allocation." },
  { question: "What subjects are tested in CUET for Delhi college admission?", answer: "CUET UG 2026 has 3 sections: Section IA (Language — English or Hindi, mandatory), Section II (Domain subjects — choose subjects matching your 12th stream, e.g., Economics for SRCC, Physics for science colleges), Section III (General Test — for programs like BBA/BMS). Most DU colleges consider Section IA + 2–3 domain subjects based on programme requirements." },
  { question: "Which is the best CUET college in Delhi for commerce students?", answer: "For commerce stream CUET students in Delhi: SRCC is #1 (99.5+ percentile, B.Com Hons, placement ₹12–25 LPA), followed by Hindu College (98.5+ percentile, B.Com Hons), Hansraj College (97+, B.Com), Kirori Mal College (95+, B.Com). Shaheed Sukhdev College of Business Studies (SSCBS) accepts CUET for BMS and has strong placement (₹8–15 LPA)." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "CUET Colleges Delhi", url: "https://www.collegedelhi.com/cuet-colleges-delhi" },
]

export const revalidate = 86400

export default function CUETCollegesDelhi() {
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
            <span className="text-white">CUET Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">CUET Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top Delhi University colleges accepting CUET 2026 — SRCC, Miranda House, Hindu College, LSR. CUET cutoffs, seat matrix, and admission process explained.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "90+ DU Colleges" },
              { icon: TrendingUp, text: "CUET UG 2026" },
              { icon: Award, text: "SRCC 99.5+ Percentile" },
              { icon: Users, text: "BA / B.Sc. / B.Com" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — CUET Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Commerce:</strong> SRCC (99.5+) · <strong>Science:</strong> Miranda House / Hindu (99+) · <strong>Arts:</strong> LSR / Hansraj (97–98+) · <strong>BMS/BBA:</strong> SSCBS (95+) · <strong>Affordable:</strong> Kirori Mal (95+, ₹10K/yr)
            </p>
          </div>

          {/* College Table */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Delhi Colleges Accepting CUET 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">Program</th>
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
                      <p className="text-xs text-blue-600 mt-0.5">{c.university}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.program}</td>
                    <td className="px-4 py-3 font-medium text-orange-600">{c.cuetCutoff}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CUET Process Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h2 className="font-bold text-blue-900 text-lg mb-3">CUET 2026 Admission Process for Delhi Colleges</h2>
            <ol className="space-y-2 text-sm text-gray-700">
              {[
                "Register for CUET UG 2026 on cuet.samarth.ac.in (March–April 2026)",
                "Choose DU + other central universities as preferences while registering",
                "Appear in CUET UG exam (May–June 2026) — Language + Domain subjects + General Test",
                "CUET result declared (July 2026) — percentile scores shared",
                "Apply to DU via CSAS portal (Common Seat Allocation System) with college + programme preferences",
                "DU releases allocation lists (Round 1, 2, 3) based on CUET score + category",
                "Accept allocation, pay fees, and report to college",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Need CUET college guidance for Delhi?</p>
            <p className="text-blue-200 text-sm mb-4">Our experts help you shortlist DU colleges based on your CUET percentile, stream, and career goals.</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — CUET Colleges Delhi</h2>
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
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "Commerce Colleges Delhi", href: "/commerce-colleges-delhi" },
              { label: "Science Colleges Delhi", href: "/science-colleges-delhi" },
              { label: "Arts Colleges Delhi", href: "/arts-colleges-delhi" },
              { label: "All Colleges Delhi", href: "/colleges" },
              { label: "Admission Calendar 2026", href: "/delhi-college-admission-calendar-2026" },
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
