import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, BookOpen, ExternalLink } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Private MBA colleges in Delhi 2026 | Fees, Placements & Admission",
  description:
    "Top private MBA colleges in Delhi 2026. Compare FMS Delhi, IMI Delhi, Fore School Delhi, Indira Institute by fees (₹2.8L–₹22L total), SNAP/CAT cutoff, and average placements.",
  path: "/private-mba-colleges-delhi",
  keywords: [
    "private mba colleges in Delhi",
    "top private mba colleges Delhi",
    "private mba colleges Delhi admission",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "MDI Gurgaon (Management Development Institute)",
    type: "Autonomous Private",
    naac: "A+",
    fees: "₹9L–₹12L/yr (₹18L–₹22L total)",
    placement: "₹24 LPA avg",
    exam: "CAT",
    slug: "mdi-gurgaon-management-development-institute",
    highlight: "Top Private MBA Delhi NCR | CAT Cutoff 99%ile",
  },
  {
    rank: 2,
    name: "IIFT Delhi (Indian Institute of Foreign Trade)",
    type: "Central University",
    naac: "A",
    fees: "₹8L–₹10L/yr (₹16L–₹20L total)",
    placement: "₹22 LPA avg",
    exam: "CAT / IIFT Exam",
    slug: "iift-delhi-indian-institute-foreign-trade",
    highlight: "Best International Business MBA in India",
  },
  {
    rank: 3,
    name: "IMI Delhi (International Management Institute)",
    type: "Autonomous Private",
    naac: "A+",
    fees: "₹7L–₹8L/yr (₹14L total)",
    placement: "₹14 LPA avg",
    exam: "CAT / MAT / CMAT",
    slug: "imi-delhi-international-management-institute",
    highlight: "AMBA Accredited | Top Delhi MBA | CAT Cutoff 85%ile",
  },
  {
    rank: 4,
    name: "FORE School of Management Delhi",
    type: "Autonomous Private",
    naac: "A+",
    fees: "₹5L–₹6.5L/yr (₹10.5L total)",
    placement: "₹10.5 LPA avg",
    exam: "CAT / MAT / CMAT / XAT",
    slug: "fore-school-management-delhi",
    highlight: "AACSB Accredited | Strong Alumni | Central Delhi",
  },
  {
    rank: 5,
    name: "BIMTECH Greater Noida (Birla Institute of Management Technology)",
    type: "Autonomous Private",
    naac: "A+",
    fees: "₹4.5L–₹5L/yr (₹9.2L total)",
    placement: "₹9.2 LPA avg",
    exam: "CAT / MAT / CMAT / XAT",
    slug: "bimtech-birla-institute-management-technology-noida",
    highlight: "Birla Group | Insurance & Finance Specialization",
  },
  {
    rank: 6,
    name: "LBSIM Delhi (Lal Bahadur Shastri Institute of Management)",
    type: "Autonomous Private",
    naac: "A",
    fees: "₹4L–₹4.5L/yr (₹8.8L total)",
    placement: "₹8.8 LPA avg",
    exam: "CAT / MAT / CMAT",
    slug: "lbsim-lal-bahadur-shastri-institute-management-delhi",
    highlight: "Government Supported | Affordable Delhi MBA",
  },
  {
    rank: 7,
    name: "IMS Ghaziabad (University Courses Campus)",
    type: "Autonomous Private",
    naac: "A",
    fees: "₹1.4L–₹2.25L/yr (₹2.8L–₹4.5L total)",
    placement: "₹6.8 LPA avg",
    exam: "CAT / MAT / CMAT",
    slug: "ims-ghaziabad-university-courses-campus",
    highlight: "Most Affordable NCR MBA | Good ROI",
  },
]

const faqs = [
  {
    question: "Which is the best private MBA college in Delhi NCR?",
    answer:
      "MDI Gurgaon (Management Development Institute) is the top-ranked private MBA college in Delhi NCR with ₹24 LPA average placement and CAT as the entrance exam. IIFT Delhi comes second (₹22 LPA avg). For value, IMI Delhi (₹14 LPA avg) and FORE School of Management offer excellent ROI.",
  },
  {
    question: "What entrance exam is required for private MBA colleges in Delhi?",
    answer:
      "MDI Gurgaon and IMI Delhi require CAT score (99%ile+ for MDI). IIFT Delhi accepts CAT or its own IIFT entrance exam. FORE, BIMTECH, LBSIM accept CAT/MAT/CMAT/XAT scores. SNAP is only for Symbiosis colleges (Pune, not Delhi). CAT is conducted by IIMs in November each year.",
  },
  {
    question: "What is the total MBA fee at private colleges in Delhi?",
    answer:
      "Total 2-year MBA fees at private Delhi NCR colleges: MDI Gurgaon (₹18L–₹22L), IIFT Delhi (₹16L–₹20L), IMI Delhi (₹14L), FORE School (₹10.5L), BIMTECH (₹9.2L), LBSIM (₹8.8L), IMS Ghaziabad (₹2.8L–₹4.5L). Government MBA at FMS Delhi is just ₹55K total for 2 years.",
  },
  {
    question: "What CAT score is needed for MDI Gurgaon?",
    answer:
      "MDI Gurgaon typically requires CAT 99+ percentile for shortlisting. The final selection also considers academic record (Class 10, 12, graduation scores), work experience, and PI/WAT (Personal Interview/Written Ability Test) performance. Work experience of 1–2 years is preferred but not mandatory.",
  },
  {
    question: "Is private MBA better than FMS Delhi?",
    answer:
      "FMS Delhi (Faculty of Management Studies, Delhi University) is actually a government/central university MBA program with ₹55K total fees and ₹32 LPA average placement — far superior value to most private MBA colleges. MDI Gurgaon (₹24 LPA avg) is the only private college that rivals FMS in placement outcomes.",
  },
  {
    question: "Can I get admission in private MBA college in Delhi without CAT?",
    answer:
      "Yes. Most MBA colleges (FORE, BIMTECH, LBSIM, IMS) accept MAT, CMAT, XAT scores as alternatives to CAT. SNAP is NOT required at any Delhi NCR MBA college — SNAP is only for Symbiosis colleges in Pune. Many private colleges also offer direct management quota admission without entrance exams.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
  { name: "Private MBA Colleges Delhi", url: "/private-mba-colleges-delhi" },
]

export default function PrivateMBACollegesDELHIPage() {
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
              <Link href="/mba-colleges-delhi" className="hover:text-white">MBA Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Private MBA Colleges</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Private MBA Colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6">
              Top private MBA colleges in Delhi NCR — FMS Delhi, IMI Delhi, Fore School, BIMTECH. Compare fees, SNAP/CAT cutoffs, and placements.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "7 Private MBA Colleges" },
                { icon: "", label: "Fees ₹2.8L–₹22L Total" },
                { icon: "", label: "Avg Placement ₹4.8–₹18 LPA" },
                { icon: "", label: "SNAP / CAT / MAT" },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top 7 Private MBA Colleges Delhi 2026</h2>
            <div className="space-y-4">
              {colleges.map((c) => (
                <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-extrabold text-red-700 text-sm">#{c.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-base transition-colors">
                          {c.name}
                        </Link>
                        <span className="text-[11px] bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                        <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">NAAC {c.naac}</span>
                      </div>
                      <p className="text-xs text-red-700 font-semibold mb-2">{c.highlight}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                        <div><span className="font-semibold">Fees:</span> {c.fees}</div>
                        <div><span className="font-semibold">Placement:</span> {c.placement}</div>
                        <div><span className="font-semibold">Exam:</span> {c.exam}</div>
                      </div>
                    </div>
                    <Link href={`/colleges/${c.slug}`} className="shrink-0 text-xs font-semibold text-red-700 hover:text-red-800 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors">
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
              { icon: CheckCircle, title: "SNAP for Symbiosis", desc: "FMS Delhi and MDI Gurgaon require SNAP score. SNAP is held in December — register at snaptest.org before October." },
              { icon: BookOpen, title: "CAT for Others", desc: "IMI Delhi, Fore School, Jaipuria, and other private MBA colleges accept CAT/MAT/CMAT. SNAP is NOT required for non-Symbiosis colleges." },
              { icon: ExternalLink, title: "AICTE Approved PGDM", desc: "Most autonomous private colleges offer PGDM (Post Graduate Diploma in Management) which is AICTE-approved and equivalent to MBA." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <Icon className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">FAQs — Private MBA Colleges Delhi 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between gap-2">
                    {faq.question}
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Need Help Choosing a Private MBA College in Delhi?</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors help you select the right MBA college, prepare for SNAP/CAT, and handle direct admission.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/mba-colleges-delhi" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                All MBA Colleges →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
