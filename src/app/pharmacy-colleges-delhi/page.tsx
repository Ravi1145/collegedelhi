import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Pharmacy Colleges in Delhi 2026",
  description: "Top pharmacy colleges in Delhi 2026. Compare DIPSAR and other verified D.Pharm, B.Pharm, M.Pharm colleges by fees and admission",
  path: "/pharmacy-colleges-delhi",
  keywords: [
    "pharmacy colleges in Delhi 2026",
    "best pharmacy College Delhi",
    "b pharm colleges Delhi fees",
    "m pharm colleges Delhi",
    "ipu cet pharmacy cutoff Delhi 2026",
    "delhi institute of pharmaceutical sciences Delhi",
    "DIPSAR Delhi admission",
    "d pharm colleges Delhi",
    "pharmacy admission Delhi 2026",
    "government pharmacy College Delhi",
    "drug inspector pharmacy Delhi",
  ],
})

const faqs = [
  {
    question: "Which is the best pharmacy college in Delhi 2026?",
    answer: "Delhi Institute of Pharmaceutical Sciences & Research (DIPSAR) is a well-known government pharmacy institute in Delhi offering D.Pharm, B.Pharm, M.Pharm, and Pharm.D programs. Check the live college listings on this page for current verified options and details.",
  },
  {
    question: "What is the JEE Main cutoff for pharmacy colleges in Delhi?",
    answer: "JEE Main cutoffs for pharmacy programs in Delhi NCR vary by institution and year. Government institutes like DIPSAR typically require higher percentiles than private colleges. Always check the official college admission notification for the current year's exact cutoff.",
  },
  {
    question: "What is the fee for B.Pharm in Delhi?",
    answer: "B.Pharm fees vary significantly between government and private institutions in Delhi NCR. Government institutes like DIPSAR have regulated, lower fee structures. Always check the official college portal for the current year's exact fee notification rather than relying on past-year estimates.",
  },
  {
    question: "What are placements like after pharmacy from Delhi colleges?",
    answer: "Pharmacy graduates can pursue roles like Quality Assurance/QC executive, Medical Representative, Drug Inspector (Government), Hospital Pharmacist, and R&D roles in pharmaceutical companies. Exact placement statistics vary by institution — check each college's official placement report.",
  },
  {
    question: "Is NEET required for B.Pharm admission in Delhi?",
    answer: "No, NEET is not required for B.Pharm admission. B.Pharm admission typically uses JEE Main or institution-specific entrance exams. NEET is only required for MBBS/BDS admissions. D.Pharm admissions are typically based on Class 12 (PCB) marks directly.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Pharmacy Colleges Delhi", url: "https://www.collegedelhi.com/pharmacy-colleges-delhi" },
]

export const revalidate = 86400

export default function PharmacyCollegesDELHI() {
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
            <span className="text-white">Pharmacy Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Pharmacy colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare verified B.Pharm, M.Pharm &amp; D.Pharm colleges in Delhi NCR — fees, JEE Main cutoffs, and career outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "Verified Pharmacy Colleges" },
              { icon: Award, text: "NAAC Accredited" },
              { icon: Users, text: "D.Pharm · B.Pharm · M.Pharm" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Pharmacy Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>DIPSAR</strong> (Delhi Institute of Pharmaceutical Sciences & Research) is Delhi&apos;s leading government pharmacy institute, offering D.Pharm, B.Pharm, M.Pharm, and Pharm.D programs. See the verified college listings below for more options.
            </p>
          </div>
          {/* College table — live from backend */}
          <StreamCollegesTable stream="Pharmacy" keywords={["pharma","pharm"]} />
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
            <h3 className="font-bold text-blue-900 mb-2">Why Study Pharmacy in Delhi NCR?</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Delhi NCR has a growing pharmaceutical industry presence with several major companies operating in the region.
              Pharmacy graduates from Delhi colleges can pursue roles in quality assurance, regulatory affairs, hospital pharmacy, and R&amp;D.
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">B.Pharm or D.Pharm — which is right for you?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you pick the best pharmacy college based on your JEE Main score, budget &amp; career goal.</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Pharmacy Colleges Delhi</h2>
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
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "BCA Colleges Delhi", href: "/bca-colleges-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
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


