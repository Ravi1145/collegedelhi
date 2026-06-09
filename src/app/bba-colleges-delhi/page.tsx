import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BBA Colleges Delhi 2026 | Fees, Cutoff & Placement",
  description: "Top BBA colleges in Delhi NCR 2026 — Amity University, IP University, JIMS, Shaheed Sukhdev College. Fees ₹40K–₹2.5L/yr, DU/IPU cutoffs, average placement ₹3.5–8 LPA and complete admission guide.",
  path: "/bba-colleges-delhi",
  keywords: [
    "bba colleges in Delhi 2026",
    "best bba college Delhi",
    "bba fees Delhi 2026",
    "bba admission Delhi",
    "amity university bba Delhi",
    "ip university bba Delhi",
    "du bba colleges Delhi",
    "bba placement Delhi",
    "bba vs bcom Delhi",
    "bachelor of business administration Delhi",
    "bba colleges Delhi NCR 2026",
  ],
})
export const revalidate = 300

const colleges = [
  {
    rank: 1,
    name: "Shaheed Sukhdev College of Business Studies (SSCBS), DU",
    type: "Government (DU)",
    naac: "A+",
    fees: "₹18K–₹25K/yr",
    placement: "₹8–15 LPA",
    seats: 270,
    cutoff: "DU CUET 2026 (Very High)",
    highlight: "Best BBA College India | NAAC A+ | Top DU Placements",
    slug: "shaheed-sukhdev-college-business-studies-du",
  },
  {
    rank: 2,
    name: "Deen Dayal Upadhyaya College (BMS/BBA), DU",
    type: "Government (DU)",
    naac: "A+",
    fees: "₹20K–₹30K/yr",
    placement: "₹6–12 LPA",
    seats: 120,
    cutoff: "DU CUET (High Merit)",
    highlight: "Top DU BMS Programme | Excellent Placements",
    slug: "deen-dayal-upadhyaya-college-du-delhi",
  },
  {
    rank: 3,
    name: "Amity University Noida — BBA Programme",
    type: "Deemed University",
    naac: "A+",
    fees: "₹1.8L–₹2.5L/yr",
    placement: "₹5–8 LPA",
    seats: 240,
    cutoff: "Own Entrance / 12th 60%+",
    highlight: "NAAC A+ | Industry Mentors | Strong Placement Cell",
    slug: "amity-university-noida-engineering",
  },
  {
    rank: 4,
    name: "JIMS (Jagan Institute of Management Studies) — BBA",
    type: "Autonomous (IP University)",
    naac: "A",
    fees: "₹75K–₹1.1L/yr",
    placement: "₹4–7 LPA",
    seats: 120,
    cutoff: "IPU CET / 12th Merit",
    highlight: "Top IPU BBA | Industry-Linked Curriculum",
    slug: "jims-jagan-institute-management-studies-delhi",
  },
  {
    rank: 5,
    name: "BPIT — Bhagwan Parshuram Institute of Technology (BBA)",
    type: "Private (IP University)",
    naac: "A",
    fees: "₹60K–₹90K/yr",
    placement: "₹3.5–6 LPA",
    seats: 60,
    cutoff: "IPU CET / 12th 55%+",
    highlight: "Affordable | North Delhi | Good Faculty",
    slug: "bpit-bhagwan-parshuram-institute-technology",
  },
  {
    rank: 6,
    name: "Rukmini Devi Institute of Advanced Studies — BBA",
    type: "Private (IP University)",
    naac: "A",
    fees: "₹55K–₹80K/yr",
    placement: "₹3–5 LPA",
    seats: 60,
    cutoff: "IPU CET / 12th 50%+",
    highlight: "Budget BBA | Practical Training | Good Campus",
    slug: "rukmini-devi-institute-advanced-studies-delhi",
  },
]

const faqs = [
  {
    question: "What is the eligibility for BBA in Delhi 2026?",
    answer: "BBA eligibility in Delhi 2026: 10+2 (any stream) with minimum 45–60% marks depending on college. DU colleges (SSCBS) require CUET 2026 scores. IP University colleges require IPU CET. Amity University requires own entrance + PI. Government-affiliated colleges: merit based on Class 12 marks. No specific stream restriction — Science, Commerce, or Arts students can apply for BBA.",
  },
  {
    question: "What is the average salary after BBA from Delhi?",
    answer: "Average salary after BBA from top Delhi colleges: SSCBS DU ₹8–15 LPA, Amity Noida BBA ₹5–8 LPA, JIMS BBA ₹4–7 LPA, BPIT BBA ₹3.5–6 LPA. Top recruiters: HDFC Bank, ICICI Bank, Deloitte, KPMG, Infosys BPO, and marketing firms. Many students pursue MBA after BBA for ₹15–25 LPA packages from FMS Delhi, MDI Gurgaon.",
  },
  {
    question: "Is BBA better than BCom in Delhi?",
    answer: "BBA vs BCom in Delhi: BBA focuses on management, entrepreneurship, and business skills — better for MBA pathway and corporate roles. BCom focuses on accounting, finance, and taxation — better for CA, banking, and finance careers. BBA fees are higher (₹40K–2.5L/yr vs BCom ₹15K–50K/yr). For MBA aspirants: BBA is the better foundation. For CA/CPA: BCom is preferred.",
  },
  {
    question: "What entrance exam is required for BBA in Delhi?",
    answer: "BBA entrance exams for Delhi 2026: DU colleges (SSCBS, DDU) require CUET 2026 scores. IP University BBA colleges require IPU CET. Amity University requires own entrance test. Private colleges like JIMS, BPIT use IPU CET + merit. CUET registration opens at cuet.samarth.ac.in. IPU CET registration at ipu.ac.in.",
  },
  {
    question: "What are the scope and career options after BBA Delhi?",
    answer: "Career options after BBA from Delhi: MBA/PGDM (most popular — FMS Delhi, MDI Gurgaon, IMT Ghaziabad for ₹18–32 LPA), Banking & Finance (₹4–8 LPA), Marketing Executive (₹3.5–6 LPA), HR Executive (₹3–5 LPA), Entrepreneurship, Sales Management. BBA from SSCBS DU is widely recognized for direct entry into top MBA programs.",
  },
]

export default function BBACollegesDELHIPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "BBA Colleges Delhi", url: "/bba-colleges-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <Script id="breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">BBA Colleges Delhi</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Best BBA colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              Top Bachelor of Business Administration colleges in Delhi with fees, SET/HSC cutoffs, placement data, and complete admission guidance.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "💼", label: "6 Top BBA Colleges" },
                { icon: "📝", label: "SET / HSC Cutoff" },
                { icon: "💰", label: "Fees ₹40K–₹2.5L/yr" },
                { icon: "📈", label: "Placement ₹3.5–8 LPA" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colleges Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top BBA colleges in Delhi 2026</h2>
          <div className="space-y-4">
            {colleges.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-red-700 text-sm">#{c.rank}</span>
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
              { icon: BookOpen, title: "3-Year Programme", desc: "BBA is a 3-year undergraduate degree. Choose specializations in Marketing, Finance, HR, or International Business." },
              { icon: Award, title: "CUET for DU Colleges", desc: "CUET 2026 required for SSCBS and other DU BBA colleges. Register at cuet.samarth.ac.in before April 2026." },
              { icon: TrendingUp, title: "MBA Gateway", desc: "BBA from SSCBS or Amity gives a strong foundation for CAT-based MBA programs at FMS Delhi (₹32 LPA avg) and MDI Gurgaon (₹24 LPA avg)." },
              { icon: Users, title: "Any Stream Eligible", desc: "Science, Commerce, or Arts students from 10+2 can apply for BBA. No specific stream restriction." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions — BBA in Delhi</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related BBA & Commerce Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "📚" },
              { label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "📊" },
              { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "🔬" },
              { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "💻" },
              { label: "BSc IT colleges in Delhi", href: "/bsc-it-colleges-Delhi", icon: "🖥️" },
              { label: "Law colleges in Delhi", href: "/law-colleges-delhi", icon: "⚖️" },
              { label: "Design colleges in Delhi", href: "/design-colleges-delhi", icon: "🎨" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Need Help Choosing a BBA College in Delhi?</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors help you pick the right BBA college, prepare for SET, and plan your MBA pathway.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/bba-colleges-noida" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                BBA Colleges Noida →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}