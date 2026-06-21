import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BSc IT Colleges Delhi 2026 | Fees, Cutoff & IT Placements",
  description: "Top BSc IT / BSc Computer Science colleges in Delhi 2026 — Fergusson, Hindu College, MIT, Symbiosis. Fees ₹20K–₹1.5L/yr, HSC cutoffs, IT placement ₹4–12 LPA and admission guide.",
  path: "/bsc-it-colleges-delhi",
  keywords: [
    "bsc it colleges in Delhi 2026",
    "best bsc it College Delhi",
    "bsc computer science colleges Delhi",
    "bsc it fees Delhi 2026",
    "bsc it admission Delhi 2026",
    "Miranda House College bsc it",
    "Hindu College bsc cs",
    "symbiosis bsc it Delhi",
    "bsc it placement Delhi",
    "bsc cs vs bca Delhi",
    "computer science colleges Delhi 2026",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "Miranda House College — BSc Computer Science",
    type: "Autonomous",
    naac: "A++",
    fees: "₹20K–₹35K/yr",
    placement: "₹5–10 LPA",
    seats: 120,
    cutoff: "HSC 85%+",
    highlight: "NAAC A++ | Heritage Prestige | Best Value | Delhi University Topper",
    slug: "government-college-of-engineering-Delhi",
  },
  {
    rank: 2,
    name: "Hindu College (Sir Parashurambhau) — BSc CS",
    type: "Autonomous",
    naac: "A+",
    fees: "₹18K–₹30K/yr",
    placement: "₹4.5–8 LPA",
    seats: 80,
    cutoff: "HSC 82%+",
    highlight: "NAAC A+ | Affordable | Strong Academic Record | Central Delhi",
    slug: "government-college-of-engineering-Delhi",
  },
  {
    rank: 3,
    name: "MIT Arts, Commerce & Science College — BSc IT",
    type: "Private (Autonomous)",
    naac: "A+",
    fees: "₹60K–₹90K/yr",
    placement: "₹5–10 LPA",
    seats: 120,
    cutoff: "HSC 65%+",
    highlight: "MIT Brand | Modern IT Labs | Industry Projects",
    slug: "amity-university-noida-delhi-ncr",
  },
  {
    rank: 4,
    name: "Symbiosis College of Arts & Commerce — BSc CS",
    type: "Deemed",
    naac: "A",
    fees: "₹90K–₹1.3L/yr",
    placement: "₹6–12 LPA",
    seats: 60,
    cutoff: "SET 2026 + Merit",
    highlight: "Symbiosis Brand | Excellent Placement | MNC Exposure",
    slug: "symbiosis-college-of-arts-commerce-Delhi",
  },
  {
    rank: 5,
    name: "Kirori Mal College of Arts & Science — BSc IT",
    type: "Autonomous",
    naac: "A",
    fees: "₹25K–₹40K/yr",
    placement: "₹4–7 LPA",
    seats: 120,
    cutoff: "HSC 75%+",
    highlight: "Affordable | Established 1935 | Good Infrastructure",
    slug: "government-college-of-engineering-Delhi",
  },
  {
    rank: 6,
    name: "Wadia College — BSc Computer Science",
    type: "Autonomous",
    naac: "A",
    fees: "₹22K–₹35K/yr",
    placement: "₹3.5–6.5 LPA",
    seats: 80,
    cutoff: "HSC 70%+",
    highlight: "Heritage College | Central Delhi | Budget-Friendly",
    slug: "government-college-of-engineering-Delhi",
  },
]

const faqs = [
  {
    question: "Is BSc IT a good course in Delhi 2026?",
    answer: "Yes, BSc IT is excellent in Delhi 2026 with India's IT sector growing at 12%+ annually. Delhi is Delhi's IT hub with companies like Infosys, Wipro, TCS, Cognizant, and Capgemini hiring BSc IT graduates. Starting packages: ₹4–8 LPA. With additional certifications (AWS, Python, Full Stack), packages reach ₹10–15 LPA. BSc IT is more affordable than BCA (same career path) with fees starting at ₹18K/yr.",
  },
  {
    question: "What is the difference between BSc IT and BSc CS in Delhi?",
    answer: "BSc IT vs BSc CS: BSc CS is more theory-heavy (algorithms, data structures, mathematics) — better for research and software development. BSc IT is more application-oriented (networking, databases, web development) — better for industry jobs. Both are 3-year degrees with similar placement outcomes. Fergusson and Hindu College offer BSc CS; MIT and Symbiosis offer BSc IT. Career outcomes: nearly identical ₹5–10 LPA starting salary.",
  },
  {
    question: "What is the cutoff for BSc IT / BSc CS in Delhi colleges 2026?",
    answer: "HSC 12th marks cutoff for BSc IT/CS in Delhi 2026: Miranda House College 85%+, Hindu College 82%+, Kirori Mal College 75%+, MIT College 65%+, Wadia College 70%+, Symbiosis (SET required). Science stream (PCM/PCB) preferred. Commerce/Arts students may apply to some colleges with lower cutoffs. Merit lists published in June 2026 after HSC results.",
  },
  {
    question: "What are the placements after BSc IT from Delhi?",
    answer: "BSc IT placements from Delhi colleges: Miranda House College ₹5–10 LPA (TCS, Infosys, L&T), Hindu College ₹4.5–8 LPA, MIT College ₹5–10 LPA, Symbiosis ₹6–12 LPA. Top recruiters: TCS, Infosys, Wipro, Cognizant, Persistent Systems, Mphasis, LTI Mindtree. 70–85% placement rate. Many students also do M.Sc CS or MBA after BSc IT for ₹15–25 LPA packages.",
  },
  {
    question: "BSc IT vs BCA — which is better in Delhi?",
    answer: "BSc IT vs BCA in Delhi: BSc IT is cheaper (₹18K–1.5L/yr vs BCA ₹30K–2L/yr) and more science-focused. BCA is more management + CS combo, better for MCA pathway. Both lead to similar IT jobs (₹4–10 LPA). If budget is a concern: BSc IT from Fergusson/Hindu College is unbeatable value. If brand and placements matter more: BCA from Symbiosis or MIT is better.",
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
              { icon: TrendingUp, title: "MCA / MBA Option", desc: "After BSc IT, pursue MCA (3-year PG) or MBA for ₹10–25 LPA packages. Fergusson & SP alumni consistently top MCA entrances." },
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