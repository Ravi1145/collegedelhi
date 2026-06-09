import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Law colleges in Delhi 2026 | LLB, LLM Fees, CLAT Cutoff & Placements",
  description: "Top law colleges in Delhi 2026 — ILS Law College, NLU Delhi, MNLU Delhi, BVDU Law College. Compare LLB fees (₹20K–₹2.5L/yr), CLAT cutoffs, placement packages & admission process.",
  path: "/law-colleges-delhi",
  keywords: [
    "law colleges in Delhi 2026",
    "best law College Delhi",
    "llb colleges Delhi fees",
    "clat cutoff Delhi 2026",
    "NLU Delhi Delhi",
    "ils law College Delhi",
    "mnlu Delhi admission 2026",
    "bvdu law College Delhi",
    "ba llb colleges Delhi",
    "nlat mh-cet law Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "ILS Law College Delhi", type: "Government-aided", naac: "A", fees: "₹20K–₹40K/yr", program: "BA LLB (5yr), LLM", seats: 180, clat: "Merit based", slug: "ils-law-college-delhi", highlight: "Oldest & Most Prestigious | 1924 Est." },
  { rank: 2, name: "NLU Delhi (SLS), Delhi", type: "Deemed", naac: "A+", fees: "₹1.8L–₹2.5L/yr", program: "BA LLB, BBA LLB, LLM", seats: 200, clat: "SLAT score", slug: "sls-symbiosis-law-school-Delhi", highlight: "Top 5 Law School India | Best Placements" },
  { rank: 3, name: "Delhi National Law University (MNLU), Delhi", type: "Government (NLU)", naac: "–", fees: "₹2L–₹2.5L/yr", program: "BA LLB (5yr)", seats: 120, clat: "CLAT top 2000", slug: "mnlu-Delhi-national-law-university-Delhi", highlight: "NLU Status | CLAT admission | Premium" },
  { rank: 4, name: "Bharati Vidyapeeth Law College", type: "Private", naac: "A", fees: "₹60K–₹90K/yr", program: "BA LLB, LLB (3yr)", seats: 120, clat: "MH-CET Law", slug: "bharati-vidyapeeth-law-college-delhi", highlight: "Affordable Private | Good faculty" },
  { rank: 5, name: "New Law College, Delhi (BMCC Road)", type: "Government-aided", naac: "B+", fees: "₹15K–₹25K/yr", program: "LLB (3yr)", seats: 360, clat: "MH-CET Law", slug: "new-law-college-delhi", highlight: "Cheapest Law Degree | Large intake" },
  { rank: 6, name: "Modern Law College, Delhi (Connaught Place)", type: "Private", naac: "B+", fees: "₹30K–₹50K/yr", program: "BA LLB, LLB (3yr)", seats: 180, clat: "MH-CET Law", slug: "modern-law-college-delhi", highlight: "Central location | DU affiliated" },
]

const faqs = [
  { question: "Which is the best law college in Delhi 2026?", answer: "ILS Law College is the most prestigious government-aided law college in Delhi (est. 1924) with the lowest fees (₹20–40K/yr). NLU Delhi (SLS) is the best private option with top 5 national ranking and excellent placements in law firms and corporate legal departments. MNLU Delhi is the NLU (National Law University) for Delhi with CLAT-based admission." },
  { question: "What is the fee for law colleges in Delhi?", answer: "Law college fees in Delhi range widely: Government-aided colleges like ILS (₹20–40K/yr) and New Law College (₹15–25K/yr) are the most affordable. Private colleges charge ₹60K–₹90K/yr. Deemed universities like NLU Delhi charge ₹1.8–2.5 lakh/year. Total 5-year BA LLB course costs ₹1 lakh (govt) to ₹12.5 lakh (private)." },
  { question: "Is CLAT required for law colleges in Delhi?", answer: "CLAT (Common Law Admission Test) is required only for MNLU Delhi (NLU status). Most other law colleges in Delhi use MH-CET Law (Delhi common entrance test for law) for BA LLB and LLB admissions. NLU Delhi uses its own SLAT (Symbiosis Law Admission Test). Top scorers in Class 12 can apply directly to ILS Law College." },
  { question: "What are career opportunities after law from Delhi colleges?", answer: "Law graduates from Delhi colleges pursue careers as advocates in High Court / District Courts, corporate lawyers in MNCs, legal officers in banks & government departments, judicial services (MPSC/UPSC), and in law firms. SLS graduates command ₹6–15 LPA in top law firms. MNLU Delhi graduates frequently join Delhi NCR law firms and LLM programs abroad." },
  { question: "Which law college in Delhi has the best placements?", answer: "NLU Delhi (SLS) has the best placements among Delhi law colleges with an average package of ₹6–8 LPA and top offers up to ₹18 LPA from firms like AZB & Partners, Trilegal, Khaitan & Co, and corporate legal departments of Infosys, TCS, and Wipro. MNLU Delhi also has strong placement in government and top law firms." },
]

const breadcrumb = [
  { name: "Home", url: "https://collegedelhi.com" },
  { name: "Colleges", url: "https://collegedelhi.com/colleges" },
  { name: "Law Colleges Delhi", url: "https://collegedelhi.com/law-colleges-delhi" },
]

export const revalidate = 86400

export default function LawCollegesDELHI() {
  return (
    <>
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Law Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Law colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top LLB & BA LLB colleges in Delhi — fees from ₹15K to ₹2.5L/year, CLAT & MH-CET Law cutoffs, and career placement data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "6 Top Law Colleges" },
              { icon: TrendingUp, text: "Up to ₹18 LPA" },
              { icon: Award, text: "NLU + NAAC Ranked" },
              { icon: Users, text: "BA LLB / LLB / LLM" },
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
            <p className="text-sm font-bold text-red-800 mb-1">⚡ Quick Answer — Top Law Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Most prestigious:</strong> ILS Law College · <strong>Best private:</strong> NLU Delhi (SLS) · <strong>NLU option:</strong> MNLU Delhi ·{" "}
              <strong>Cheapest:</strong> New Law College (₹15K/yr) · <strong>Best placement:</strong> SLS (₹18 LPA top offer)
            </p>
          </div>
          {/* College table — live from backend */}
          <StreamCollegesTable stream="Law" keywords={["legal"]} />
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Need help choosing the right law college?</p>
            <p className="text-blue-200 text-sm mb-4">Our expert counsellors help you pick between ILS, SLS, MNLU and more based on your budget, CLAT score & career goals.</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Law Colleges Delhi</h2>
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
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "Design Colleges Delhi", href: "/design-colleges-delhi" },
              { label: "All colleges in Delhi", href: "/colleges" },
              { label: "AI College Finder", href: "/ai-finder" },
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


