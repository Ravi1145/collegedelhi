import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, BookOpen, ExternalLink, MapPin } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Private Engineering colleges in Delhi 2026 | Fees, Rankings & Admission",
  description:
    "Top private engineering colleges in Delhi 2026. Compare IIIT Delhi, IMI Delhi, Amity University Delhi, NSUT, Cummins by fees (₹1.1L–₹4.8L/yr), NAAC grade, and placements.",
  path: "/private-engineering-colleges-delhi",
  keywords: [
    "private engineering colleges in Delhi",
    "top private engineering colleges Delhi",
    "private engineering colleges Delhi admission",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "IIIT Delhi — Indraprastha Institute of Information Technology",
    type: "Autonomous (State)",
    naac: "A+",
    fees: "₹1.6L–₹2.2L/yr",
    placement: "₹20 LPA avg | ₹1.2 Cr highest",
    exam: "JEE Main (JOSAA/CSAB)",
    slug: "iiit-delhi",
    highlight: "Best CS/AI Research Delhi | NIRF #81",
  },
  {
    rank: 2,
    name: "NSUT — Netaji Subhas University of Technology",
    type: "Government (State)",
    naac: "A+",
    fees: "₹1.5L–₹2L/yr",
    placement: "₹16 LPA avg | ₹65 LPA highest",
    exam: "JEE Main (JAC Delhi)",
    slug: "nsut-delhi",
    highlight: "NIRF #52 | Strong CS Placements",
  },
  {
    rank: 3,
    name: "IGDTUW — Indira Gandhi Delhi Technical University for Women",
    type: "Government (State)",
    naac: "A+",
    fees: "₹1.2L–₹1.8L/yr",
    placement: "₹14 LPA avg | ₹55 LPA highest",
    exam: "JEE Main (JAC Delhi)",
    slug: "igdtuw-delhi",
    highlight: "Best Women's Engineering College India",
  },
  {
    rank: 4,
    name: "Amity University Delhi — School of Engineering",
    type: "Deemed University",
    naac: "A+",
    fees: "₹2.5L–₹4L/yr",
    placement: "₹8 LPA avg | ₹40 LPA highest",
    exam: "JEE Main / Amity JEE",
    slug: "amity-university-noida-engineering",
    highlight: "Largest Private Deemed | NAAC A+",
  },
  {
    rank: 5,
    name: "Bennett University — School of Engineering",
    type: "Deemed University",
    naac: "A+",
    fees: "₹3L–₹5L/yr",
    placement: "₹9.2 LPA avg | ₹45 LPA highest",
    exam: "JEE Main / BUAT",
    slug: "bennett-university-delhi-engineering",
    highlight: "Times Group | Strong CS/AI Programs",
  },
  {
    rank: 6,
    name: "MSIT — Maharaja Surajmal Institute of Technology",
    type: "Private (IP University)",
    naac: "A",
    fees: "₹1.6L–₹2.2L/yr",
    placement: "₹8.5 LPA avg | ₹40 LPA highest",
    exam: "JEE Main / IPU CET",
    slug: "msit-maharaja-surajmal-institute-technology",
    highlight: "Best IP University Affiliate West Delhi",
  },
  {
    rank: 7,
    name: "MAIT — Maharaja Agrasen Institute of Technology",
    type: "Private (IP University)",
    naac: "A",
    fees: "₹1.5L–₹2.2L/yr",
    placement: "₹7.5 LPA avg | ₹35 LPA highest",
    exam: "JEE Main / IPU CET",
    slug: "mait-maharaja-agrasen-institute-technology",
    highlight: "Rohini | Good Placement Record",
  },
  {
    rank: 8,
    name: "BPIT — Bhagwan Parshuram Institute of Technology",
    type: "Private (IP University)",
    naac: "A",
    fees: "₹1.4L–₹2L/yr",
    placement: "₹7 LPA avg | ₹28 LPA highest",
    exam: "JEE Main / IPU CET",
    slug: "bpit-bhagwan-parshuram-institute-technology",
    highlight: "Budget BTech | North Delhi",
  },
  {
    rank: 9,
    name: "HMR Institute of Technology & Management",
    type: "Private (IP University)",
    naac: "B",
    fees: "₹95K–₹1.5L/yr",
    placement: "₹5.5 LPA avg | ₹18 LPA highest",
    exam: "JEE Main / IPU CET",
    slug: "hmr-institute-technology-management-delhi",
    highlight: "Cheapest BTech Delhi | ₹95K/yr",
  },
  {
    rank: 10,
    name: "GL Bajaj Institute of Technology & Management",
    type: "Private (IP University)",
    naac: "A+",
    fees: "₹1.2L–₹2L/yr",
    placement: "₹7.5 LPA avg | ₹35 LPA highest",
    exam: "JEE Main / IPU CET",
    slug: "gl-bajaj-institute-technology-management-noida",
    highlight: "NAAC A+ | Best ROI Greater Noida",
  },
]

const faqs = [
  {
    question: "Which is the best private engineering college in Delhi?",
    answer:
      "NSUT (Delhi Institute of Computer Technology) is considered the best private autonomous engineering college in Delhi for CS/IT. IIIT Delhi is best overall among autonomous private colleges. IMI Delhi leads among deemed private universities with ₹9.8 LPA average placement.",
  },
  {
    question: "What is the difference between private autonomous, deemed, and government engineering colleges in Delhi?",
    answer:
      "Government colleges (like DTU Delhi) are funded and run by the state government with lowest fees (₹80K–₹1.8L/yr). Autonomous private colleges (NSUT, IIIT Delhi, Cummins) are affiliated to DU but set their own curriculum — fees ₹1.2L–₹2.2L/yr. Deemed universities (IMI Delhi, Amity University Delhi) are self-governing with UGC approval — fees ₹2L–₹4.8L/yr and own entrance exams.",
  },
  {
    question: "What is the admission process for private engineering colleges in Delhi?",
    answer:
      "For most private autonomous colleges (NSUT, IIIT Delhi, GL Bajaj), admission is through JEE Main CAP (Centralized Admission Process) for 80% seats and management quota (direct admission) for 20% seats. Deemed universities like IMI Delhi conduct their own entrance test (SET) and JEE Main. JAC Delhi Rounds happen in July–August.",
  },
  {
    question: "What percentage is required for direct admission in private engineering colleges in Delhi?",
    answer:
      "For management quota (direct admission) in private engineering colleges in Delhi, you need at least 60% in PCM in HSC (Class 12). Top colleges like IIIT Delhi and NSUT require 70–75% for management quota. Fees under management quota can be 10–20% higher than CAP quota fees.",
  },
  {
    question: "Are private engineering colleges in Delhi worth it?",
    answer:
      "Yes, top private engineering colleges like NSUT and IIIT Delhi offer excellent placements (₹7.5–₹8.5 LPA average) and strong industry connections. The fee investment of ₹1.4L–₹2.2L/year is recovered within 1–2 years of employment. NAAC A+ colleges (IIIT Delhi, Amity University Delhi, Cummins) also have strong national recognition.",
  },
  {
    question: "What is the fee range for private engineering colleges in Delhi?",
    answer:
      "Private engineering college fees in Delhi range from ₹1.1L/year (NIET Noida — most affordable) to ₹4.8L/year (IMI Delhi — deemed university). Autonomous private colleges charge ₹1.2L–₹2.2L/year. Deemed universities charge ₹2L–₹4.8L/year. SC/ST students are eligible for Delhi government scholarships and fee concessions.",
  },
  {
    question: "Which private engineering college in Delhi has the best placements?",
    answer:
      "IMI Delhi leads with ₹9.8 LPA average and ₹42 LPA highest package. IIIT Delhi comes second with ₹8.5 LPA average. NSUT has the highest placement rate for CS/IT branches. Top recruiters include TCS, Infosys, Wipro, Bajaj Auto, Siemens, and international tech companies.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Engineering Colleges Delhi", url: "/engineering-colleges-delhi" },
  { name: "Private Engineering Colleges Delhi", url: "/private-engineering-colleges-delhi" },
]

export default function PrivateEngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/engineering-colleges-delhi" className="hover:text-white">Engineering Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Private Engineering Colleges</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Private Engineering Colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6">
              Top 10 private and autonomous engineering colleges in Delhi NCR — IIIT Delhi, NSUT, Amity, Bennett. Compare fees, NAAC grade, placements, and admission process.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "10 Private Colleges" },
                { icon: "", label: "Fees ₹95K–₹5L/yr" },
                { icon: "", label: "Placement ₹5.5–₹20 LPA" },
                { icon: "", label: "JEE Main / IPU CET" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
          {/* Colleges */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top 10 Private Engineering Colleges Delhi 2026</h2>
            <div className="space-y-4">
              {colleges.map((c) => (
                <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-extrabold text-blue-700 text-sm">#{c.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-blue-700 text-base transition-colors">
                          {c.name}
                        </Link>
                        <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                        <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">NAAC {c.naac}</span>
                      </div>
                      <p className="text-xs text-blue-700 font-semibold mb-2">{c.highlight}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
                        <div><span className="font-semibold">Fees:</span> {c.fees}</div>
                        <div><span className="font-semibold">Placement:</span> {c.placement}</div>
                        <div><span className="font-semibold">Exam:</span> {c.exam}</div>
                      </div>
                    </div>
                    <Link href={`/colleges/${c.slug}`} className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-800 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded-lg transition-colors">
                      View →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle, title: "Autonomous vs Deemed", desc: "Autonomous colleges (NSUT, IIIT Delhi) are affiliated to universities but set own curriculum. Deemed universities (Amity, Bennett) are fully self-governing. Both offer quality engineering education." },
              { icon: BookOpen, title: "Admission via JEE + CAP", desc: "Most private colleges admit 80% students through JEE Main rank via JAC Delhi / IPU CET CAP rounds. Remaining 20% are management quota seats available for direct admission." },
              { icon: ExternalLink, title: "Check AICTE Approval", desc: "Always verify AICTE approval and university affiliation before admission. Check the AICTE approved institute list at aicte-india.org." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <Icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">FAQs — Private Engineering Colleges Delhi 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between gap-2">
                    {faq.question}
                    <span className="text-blue-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Engineering Guides</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Top Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
                { label: "Top 10 Engineering Delhi", href: "/top-10-engineering-colleges-in-delhi" },
                { label: "Engineering Placements 2026", href: "/engineering-colleges-delhi-placement" },
                { label: "Low Fee Engineering Delhi", href: "/low-fees-engineering-colleges-delhi" },
                { label: "Engineering Scholarships Delhi", href: "/engineering-colleges-delhi-scholarship" },
                { label: "BTech Colleges Delhi", href: "/btech-colleges-delhi" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm text-blue-700 hover:text-blue-900 bg-blue-50 rounded-xl px-4 py-2 hover:bg-blue-100 transition-colors">
                  {label} →
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Need Help Choosing a Private Engineering College in Delhi?</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors compare colleges, predict your JEE rank chances, and help with direct/management quota admission.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/predictor" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                College Predictor →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}