import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Arts & Science colleges in Delhi 2026",
  description: "Top arts, science and commerce colleges in Delhi 2026. Compare Miranda House, Hindu College, Lady Shri Ram College, SRCC and more",
  path: "/arts-colleges-delhi",
  keywords: [
    "arts colleges in Delhi 2026",
    "science colleges in Delhi 2026",
    "commerce colleges in Delhi 2026",
    "ba colleges Delhi",
    "bsc colleges Delhi",
    "bcom colleges Delhi",
    "Miranda House College Delhi 2026",
    "Hindu College Delhi admission",
    "SRCC Delhi bcom fees",
    "best arts College Delhi",
    "DU affiliated arts colleges Delhi",
    "humanities colleges Delhi",
    "liberal arts Delhi 2026",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "Miranda House",
    type: "Government (University of Delhi)",
    naac: "A++",
    fees: "DU government fee structure",
    programs: "BA, BSc",
    seats: null,
    highlight: "Top Women's College | University of Delhi",
    slug: "miranda-house",
    strengths: ["Heritage campus", "Affordable government fees", "Strong alumni network"],
  },
  {
    rank: 2,
    name: "Hindu College, University of Delhi",
    type: "Government (University of Delhi)",
    naac: "A+",
    fees: "DU government fee structure",
    programs: "BA, BSc",
    seats: null,
    highlight: "Premier DU Constituent College",
    slug: "hindu-college-university-of-delhi",
    strengths: ["Strong science and humanities", "Central campus location", "Affordable government fees"],
  },
  {
    rank: 3,
    name: "Lady Shri Ram College for Women (LSR)",
    type: "Government (University of Delhi)",
    naac: "A+",
    fees: "DU government fee structure",
    programs: "BA, BSc",
    seats: null,
    highlight: "Top Women's College | University of Delhi",
    slug: "lsr-delhi",
    strengths: ["Strong humanities programs", "Prestigious alumni network", "Affordable government fees"],
  },
  {
    rank: 4,
    name: "Shri Ram College of Commerce (SRCC)",
    type: "Government (University of Delhi)",
    naac: "A+",
    fees: "DU government fee structure",
    programs: "BCom (Hons), Economics",
    seats: null,
    highlight: "India's Top Commerce College",
    slug: "shri-ram-college-of-commerce",
    strengths: ["India's leading commerce college", "Strong placement record", "Affordable government fees"],
  },
  {
    rank: 5,
    name: "Sri Venkateswara College",
    type: "Government (University of Delhi)",
    naac: "A",
    fees: "DU government fee structure",
    programs: "BSc, BA",
    seats: null,
    highlight: "DU Constituent College",
    slug: "sri-venkateswara-college",
    strengths: ["Strong science programs", "Affordable government fees"],
  },
]

const faqs = [
  {
    question: "Which is the best arts college in Delhi 2026?",
    answer: "Miranda House is widely regarded as the top women's arts college in Delhi, a constituent college of University of Delhi with NAAC A++ grade. Hindu College and Lady Shri Ram College (LSR) are also top-tier DU constituent colleges for arts and science. Shri Ram College of Commerce (SRCC) is India's leading commerce college.",
  },
  {
    question: "What is the fee for arts and science colleges in Delhi?",
    answer: "Government-aided and central University of Delhi constituent colleges like Miranda House, Hindu College, LSR, and SRCC follow a regulated, low DU fee structure — among the most affordable in the country for their academic tier. Always check the official DU admission portal for the current year's exact fee notification.",
  },
  {
    question: "How to get admission in DU arts colleges like Miranda House?",
    answer: "Admission to University of Delhi constituent colleges, including Miranda House, Hindu College, LSR, and SRCC, is through CUET (Common University Entrance Test) merit. Apply through the official DU admission portal during the announced application window — check du.ac.in for current-year dates and the exact process.",
  },
  {
    question: "Is BCom from SRCC good for placements?",
    answer: "Yes, SRCC (Shri Ram College of Commerce) is widely regarded as India's top commerce college, with strong placement outcomes and a reputation that supports careers in finance, consulting, and further study (CA, MBA). Check SRCC's official placement report for current-year statistics.",
  },
  {
    question: "What career can I do after BA/BSc from Delhi colleges?",
    answer: "After BA from Delhi colleges, careers include civil services (UPSC/MPSC), MBA/MMS admissions, journalism, content writing, teaching (B.Ed), law (BA LLB), and government exams. After BSc, options include MSc/MTech, government research jobs, MBA, data science, and pharma. Most graduates earn ₹3–8 LPA in their first job, rising to ₹8–15 LPA within 5 years.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Arts Colleges Delhi", url: "https://www.collegedelhi.com/arts-colleges-delhi" },
]

export const revalidate = 86400

export default function ArtsCollegesDELHI() {
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
            <span className="text-white">Arts Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Best Arts &amp; Science colleges in Delhi 2026
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top BA, BSc &amp; BCom colleges in Delhi — University of Delhi government fee structures, NAAC grades, CUET admissions &amp; career outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "Verified DU Colleges" },
              { icon: TrendingUp, text: "Affordable Govt Fees" },
              { icon: Award, text: "NAAC A+ / A++ Ranked" },
              { icon: Users, text: "BA · BSc · BCom" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Arts &amp; Science Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best Arts (Women's):</strong> Miranda House &amp; LSR · <strong>Best Science:</strong> Hindu College ·{" "}
              <strong>Best Commerce (BCom):</strong> SRCC · <strong>Lowest fees:</strong> All DU constituent colleges follow the same government-regulated fee structure
            </p>
          </div>
          {/* College table — live from backend */}
          <StreamCollegesTable stream="Arts" keywords={["science","commerce","humanities","bsc","bcom"]} />
          <h2 className="text-xl font-bold text-gray-900 mb-5">Choose by Program — Best Colleges by Stream</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                stream: "BA (Arts)", emoji: "", best: "Miranda House", why: "Heritage, affordable government fees, top humanities faculty",
                also: ["Hindu College", "Lady Shri Ram College (LSR)"],
                fees: "DU government fee structure",
              },
              {
                stream: "BSc (Science)", emoji: "", best: "Hindu College", why: "NAAC A+, strong science departments",
                also: ["Miranda House", "Sri Venkateswara College"],
                fees: "DU government fee structure",
              },
              {
                stream: "BCom (Commerce)", emoji: "", best: "SRCC", why: "India's top commerce college, strong placement network, CA/CMA prep",
                also: ["Hindu College", "Sri Venkateswara College"],
                fees: "DU government fee structure",
              },
            ].map(({ stream, emoji, best, why, also, fees }) => (
              <div key={stream} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="text-2xl mb-2">{emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{stream}</h3>
                <p className="text-xs text-red-700 font-semibold mb-1">Best: {best}</p>
                <p className="text-xs text-gray-500 mb-3">{why}</p>
                <p className="text-xs text-gray-600 font-medium mb-1">Also consider:</p>
                <ul className="text-xs text-gray-500 space-y-0.5 mb-3">
                  {also.map(a => <li key={a}>• {a}</li>)}
                </ul>
                <p className="text-xs text-blue-700 font-semibold">Fees: {fees}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Not sure which stream — Arts, Science or Commerce?</p>
            <p className="text-blue-200 text-sm mb-4">Our AI College Finder matches you to the best college based on your Class 12 marks, stream preference &amp; budget.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                Try AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Arts &amp; Science Colleges Delhi</h2>
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
              { label: "Law Colleges Delhi", href: "/law-colleges-delhi" },
              { label: "BCA Colleges Delhi", href: "/bca-colleges-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
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


