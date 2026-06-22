import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BSc IT Colleges Delhi 2026",
  description: "Top BSc IT / BSc Computer Science colleges in Delhi 2026 — Hindu College, Sri Venkateswara College, and other DU constituent colleges",
  path: "/bsc-it-colleges-delhi",
  keywords: [
    "bsc it colleges in Delhi 2026",
    "best bsc it College Delhi",
    "bsc computer science colleges Delhi",
    "bsc it fees Delhi 2026",
    "bsc it admission Delhi 2026",
    "Miranda House bsc it",
    "Hindu College bsc cs",
    "bsc it placement Delhi",
    "bsc cs vs bca Delhi",
    "computer science colleges Delhi 2026",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "Hindu College, University of Delhi — BSc Computer Science",
    type: "Government (University of Delhi)",
    naac: "A+",
    fees: "DU government fee structure",
    placement: "Check official placement report",
    seats: null,
    cutoff: "CUET",
    highlight: "NAAC A+ | Premier DU Constituent College",
    slug: "hindu-college-university-of-delhi",
  },
  {
    rank: 2,
    name: "Sri Venkateswara College — BSc Computer Science",
    type: "Government (University of Delhi)",
    naac: "A",
    fees: "DU government fee structure",
    placement: "Check official placement report",
    seats: null,
    cutoff: "CUET",
    highlight: "DU Constituent College | Strong Science Programs",
    slug: "sri-venkateswara-college",
  },
  {
    rank: 3,
    name: "Miranda House — BSc Computer Science",
    type: "Government (University of Delhi)",
    naac: "A++",
    fees: "DU government fee structure",
    placement: "Check official placement report",
    seats: null,
    cutoff: "CUET",
    highlight: "NAAC A++ | Heritage Prestige | Top Women's College",
    slug: "miranda-house",
  },
]

const faqs = [
  {
    question: "Is BSc IT a good course in Delhi 2026?",
    answer: "Yes, BSc IT is excellent in Delhi 2026 with India's IT sector growing at 12%+ annually. Delhi is Delhi's IT hub with companies like Infosys, Wipro, TCS, Cognizant, and Capgemini hiring BSc IT graduates. Starting packages: ₹4–8 LPA. With additional certifications (AWS, Python, Full Stack), packages reach ₹10–15 LPA. BSc IT is more affordable than BCA (same career path) with fees starting at ₹18K/yr.",
  },
  {
    question: "What is the difference between BSc IT and BSc CS in Delhi?",
    answer: "BSc IT vs BSc CS: BSc CS is more theory-heavy (algorithms, data structures, mathematics) — better for research and software development. BSc IT is more application-oriented (networking, databases, web development) — better for industry jobs. Both are 3-year degrees with similar placement outcomes. University of Delhi constituent colleges like Hindu College and Sri Venkateswara College offer strong BSc CS programs.",
  },
  {
    question: "What is the cutoff for BSc IT / BSc CS in Delhi colleges 2026?",
    answer: "Admission to University of Delhi constituent colleges (Hindu College, Sri Venkateswara College, Miranda House) for BSc CS/IT is through CUET merit. Exact cutoffs vary by year — check the official DU admission portal for current-year data.",
  },
  {
    question: "What are the placements after BSc IT from Delhi?",
    answer: "Placement outcomes vary by college and batch. DU constituent colleges have strong academic reputations that support further study (MSc, MCA) and direct industry placement. Check each college's official placement report for current-year statistics.",
  },
  {
    question: "BSc IT vs BCA — which is better in Delhi?",
    answer: "BSc IT is more science-focused (PCM background) while BCA combines management and computer science fundamentals, often serving as a pathway to MCA. Both lead to similar IT industry roles. Choose based on your academic background and whether you prefer a pure-science or management-blended approach.",
  },
]

export default function BBIMTECHCollegesDELHIPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "BSc IT Colleges Delhi", url: "/bsc-it-colleges-Delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1A4A6B] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">BSc IT Colleges Delhi</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Best BSc IT / BSc CS colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              Top BSc Information Technology and Computer Science colleges in Delhi with fees, HSC cutoffs, IT placements, and admission process.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "6 Top Colleges" },
                { icon: "", label: "HSC Merit Based" },
                { icon: "", label: "Fees ₹18K–₹1.5L/yr" },
                { icon: "", label: "IT Placement ₹4–12 LPA" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colleges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top BSc IT / BSc CS colleges in Delhi 2026</h2>
          <div className="space-y-4">
            {colleges.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-blue-600 text-sm">#{c.rank}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 transition-colors text-base">
                        {c.name}
                      </Link>
                      <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                      <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">NAAC {c.naac}</span>
                    </div>
                    <p className="text-xs text-red-700 font-semibold mb-2">{c.highlight}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
                      <div><span className="font-semibold">Fees:</span> {c.fees}</div>
                      <div><span className="font-semibold">Placement:</span> {c.placement}</div>
                      <div><span className="font-semibold">Seats:</span> {c.seats}</div>
                      <div><span className="font-semibold">Cutoff:</span> {c.cutoff}</div>
                    </div>
                  </div>
                  <Link href={`/colleges/${c.slug}`}
                    className="shrink-0 text-xs font-semibold text-red-700 hover:text-red-800 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors">
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: "3-Year Programme", desc: "BSc IT/CS is a 3-year degree. Semesters cover programming, databases, networking, and web development." },
              { icon: Award, title: "Delhi IT Hub", desc: "Delhi has 3,000+ IT companies — TCS, Infosys, Wipro, Persistent. BSc IT graduates are in high demand." },
              { icon: TrendingUp, title: "MCA / MBA Option", desc: "After BSc IT, pursue MCA (2-year PG) or MBA. DU constituent college alumni regularly succeed in MCA and MBA entrance exams." },
              { icon: Users, title: "Certifications Boost Pay", desc: "AWS, Google Cloud, Python, Full Stack Development certifications can increase BSc IT salary from ₹5 to ₹12+ LPA." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions — BSc IT in Delhi</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                    {faq.question}
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Technology & IT Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "" },
              { label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "" },
              { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "" },
              { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "" },
              { label: "BBA colleges in Delhi", href: "/bba-colleges-delhi", icon: "" },
              { label: "Law colleges in Delhi", href: "/law-colleges-delhi", icon: "" },
              { label: "Design colleges in Delhi", href: "/design-colleges-delhi", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>
    </div>
        </div>
  </>
)
}