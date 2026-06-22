import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Architecture Colleges in Delhi 2026 | B.Arch at SPA Delhi",
  description: "B.Arch in Delhi 2026: School of Planning and Architecture (SPA Delhi), India's top government architecture college",
  path: "/architecture-colleges-delhi",
  keywords: [
    "architecture colleges in Delhi 2026",
    "best architecture College Delhi",
    "b.arch colleges Delhi",
    "SPA Delhi admission 2026",
    "School of Planning and Architecture Delhi",
    "nata cutoff Delhi 2026",
    "architecture admission Delhi",
    "architecture placement Delhi",
    "b arch vs b des Delhi",
  ],
})
export const revalidate = 300

const colleges = [
  {
    rank: 1,
    name: "School of Planning and Architecture, New Delhi (SPA Delhi)",
    type: "Government (Institute of National Importance)",
    naac: "A",
    fees: "Government fee structure — among the lowest for B.Arch in India",
    placement: "Strong — leading recruiter for architecture and planning firms",
    seats: null,
    cutoff: "JEE Main Paper 2 / NATA",
    highlight: "India's Premier Government Architecture College",
    slug: "school-of-planning-and-architecture-new-delhi",
  },
]

const faqs = [
  {
    question: "What is the best architecture college in Delhi?",
    answer: "School of Planning and Architecture, New Delhi (SPA Delhi) is India's premier government institute for architecture and planning, and the primary standalone B.Arch option within Delhi. It is an Institute of National Importance with government fees, making it significantly more affordable than private architecture colleges elsewhere in the country.",
  },
  {
    question: "What is the eligibility for B.Arch admission in Delhi 2026?",
    answer: "For B.Arch admission, candidates need 10+2 with Physics, Chemistry, and Mathematics (PCM). Admission to SPA Delhi is through JEE Main Paper 2 (B.Arch paper) or NATA (National Aptitude Test in Architecture), depending on the year's admission policy — check the official SPA Delhi and JoSAA/CSAB notifications for the current process.",
  },
  {
    question: "What exam is required for B.Arch in Delhi?",
    answer: "NATA, conducted by the Council of Architecture, and JEE Main Paper 2 (B.Arch) are the two standard national-level exams for B.Arch admission in India, including at SPA Delhi. Always confirm the current year's accepted exam and cutoff on the official admission portal, as policies can change year to year.",
  },
  {
    question: "What is the scope after B.Arch from Delhi?",
    answer: "After B.Arch, career paths include architecture firms, interior design, urban planning, real estate development, and pursuing M.Arch for further specialization. SPA Delhi graduates are well placed in both government planning bodies and private architecture firms given the institute's national reputation.",
  },
]

export default function ArchitectureCollegesDELHIPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Architecture Colleges Delhi", url: "/architecture-colleges-Delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#2D1B69] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">Architecture Colleges Delhi</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Best Architecture colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              School of Planning and Architecture, New Delhi (SPA Delhi) — India's premier government B.Arch institute, with NATA / JEE Paper 2 admission and government fee structure.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "Institute of National Importance" },
                { icon: "", label: "NATA / JEE Paper 2" },
                { icon: "", label: "Government Fee Structure" },
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
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Top Architecture colleges in Delhi 2026
          </h2>
          <div className="space-y-4">
            {colleges.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-purple-600 text-sm">#{c.rank}</span>
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

          {/* Why Architecture */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, title: "5-Year Programme", desc: "B.Arch is a 5-year degree — plan accordingly for total fees and career timeline." },
              { icon: Award, title: "NATA Required", desc: "All architecture admissions require NATA score. Register at nata.in before March 2026." },
              { icon: TrendingUp, title: "Booming Market", desc: "India's construction market is ₹80,000 cr+. Demand for architects is at an all-time high." },
              { icon: Users, title: "Creative Career", desc: "Architecture combines art and science — best for students passionate about design and spaces." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Admission Process */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-4">B.Arch Admission Process 2026</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Register for NATA", desc: "Apply at nata.in before February 2026. Exam conducted in April & May 2026." },
                { step: "2", title: "Appear for NATA", desc: "Score 120+ for top colleges. Exam tests drawing, aesthetic sensitivity, and math." },
                { step: "3", title: "Apply to SPA Delhi", desc: "Fill the application via the relevant counselling body (JoSAA/CSAB for JEE Paper 2, or direct NATA-based admission per the current year's policy)." },
                { step: "4", title: "Document Verification", desc: "Submit 10+2 marksheet, NATA scorecard, caste certificate (if applicable)." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0 mt-0.5">{step}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Design & Architecture Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "" },
              { label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "" },
              { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "" },
              { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "" },
              { label: "BBA colleges in Delhi", href: "/bba-colleges-delhi", icon: "" },
              { label: "BSc IT colleges in Delhi", href: "/bsc-it-colleges-Delhi", icon: "" },
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

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Get Free Guidance for Architecture Admission</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors help you choose between B.Arch colleges, prepare for NATA, and secure your admission.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/colleges" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                Browse All Colleges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


