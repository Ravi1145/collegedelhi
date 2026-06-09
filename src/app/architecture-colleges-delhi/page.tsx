import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Architecture Colleges Delhi 2026 | B.Arch Fees & NATA Cutoff",
  description: "Top B.Arch colleges in Delhi 2026 — SPA, MIT-ADT, DY Patil, MAEER. Fees ₹1.5L–4.5L/yr, NATA cutoff 120+, placement guide and admission process for architecture in Delhi.",
  path: "/architecture-colleges-delhi",
  keywords: [
    "architecture colleges in Delhi 2026",
    "best architecture College Delhi",
    "b.arch colleges Delhi",
    "b arch fees Delhi 2026",
    "nata cutoff Delhi 2026",
    "mit adt architecture Delhi",
    "dy patil architecture Delhi",
    "architecture admission Delhi",
    "architecture placement Delhi",
    "b arch vs b des Delhi",
    "arch colleges Delhi 2026",
  ],
})
export const revalidate = 300

const colleges = [
  {
    rank: 1,
    name: "MIT-ADT University — Faculty of Architecture",
    type: "Deemed University",
    naac: "A+",
    fees: "₹2.2L–₹2.8L/yr",
    placement: "₹5–10 LPA",
    seats: 60,
    cutoff: "NATA 130+ / JEE Paper 2",
    highlight: "Top Architecture Brand | Modern Design Studios | Industry Exposure",
    slug: "mit-adt-university-Delhi",
  },
  {
    rank: 2,
    name: "DY Patil College of Architecture, Delhi",
    type: "Private",
    naac: "A",
    fees: "₹1.8L–₹2.4L/yr",
    placement: "₹4.5–8 LPA",
    seats: 40,
    cutoff: "NATA 120+ / JEE Main",
    highlight: "NAAC A | Experienced Faculty | Strong Portfolio Training",
    slug: "dy-patil-college-engineering-Dwarka-Delhi",
  },
  {
    rank: 3,
    name: "MAEER's MIT College of Architecture, Delhi",
    type: "Private (Autonomous)",
    naac: "A",
    fees: "₹1.5L–₹2L/yr",
    placement: "₹4–7 LPA",
    seats: 40,
    cutoff: "NATA 115+ / JEE Main",
    highlight: "Affordable Fees | Strong Alumni Network | Design-First Approach",
    slug: "Amity University Delhi-mit-world-peace-university",
  },
  {
    rank: 4,
    name: "Indira College of Architecture and Design",
    type: "Private",
    naac: "B+",
    fees: "₹1.2L–₹1.6L/yr",
    placement: "₹3.5–6 LPA",
    seats: 40,
    cutoff: "NATA 110+",
    highlight: "Budget Option | Good Infrastructure | Practical Training",
    slug: "indira-college-of-engineering-management-Delhi",
  },
  {
    rank: 5,
    name: "Sharda College of Architecture, Delhi",
    type: "Private",
    naac: "B+",
    fees: "₹1.1L–₹1.5L/yr",
    placement: "₹3–5.5 LPA",
    seats: 40,
    cutoff: "NATA 105+",
    highlight: "Sharda Group | Decent Facilities | Affordable",
    slug: "Sharda-college-of-engineering-Delhi",
  },
  {
    rank: 6,
    name: "Vivekanand Education Society's College of Architecture",
    type: "Private",
    naac: "B+",
    fees: "₹1.3L–₹1.8L/yr",
    placement: "₹3.5–6 LPA",
    seats: 40,
    cutoff: "NATA 110+",
    highlight: "Design Focus | Industry Partnerships | Good Faculty",
    slug: "government-college-of-engineering-Delhi",
  },
]

const faqs = [
  {
    question: "What is the eligibility for B.Arch in Delhi 2026?",
    answer: "For B.Arch admission in Delhi 2026: 10+2 with Physics, Chemistry, Mathematics (PCM) with minimum 50% marks (45% for SC/ST). Must qualify NATA (National Aptitude Test in Architecture) with 120+ score or JEE Main Paper 2. Some colleges also accept JEE Main Architecture score.",
  },
  {
    question: "What is the NATA cutoff for Delhi architecture colleges in 2026?",
    answer: "NATA cutoffs for Delhi architecture colleges 2026: MIT-ADT University (130+), DY Patil College of Architecture (120+), MAEER MIT College of Architecture (115+), Indira College of Architecture (110+), Sharda College of Architecture (105+). NATA is conducted by Council of Architecture (CoA) twice a year.",
  },
  {
    question: "What are the fees for B.Arch in Delhi?",
    answer: "B.Arch fees in Delhi 2026: Government colleges ₹25K–50K/yr, Autonomous private colleges ₹1.5L–2.8L/yr, Deemed universities ₹2L–4.5L/yr. Total 5-year cost: ₹6L–22L approximately. MIT-ADT is the most premium at ₹2.2L–2.8L/yr.",
  },
  {
    question: "What is the scope of architecture after B.Arch from Delhi?",
    answer: "After B.Arch from Delhi: Architecture firms (₹4–10 LPA starting), Interior design (₹3.5–8 LPA), Urban planning, Real estate development, M.Arch (PG degree), Teaching. Top recruiters include L&T Construction, Tata Housing, Lodha Group, Godrej Properties, and boutique architecture firms. Many graduates start their own practice after 3–5 years.",
  },
  {
    question: "Is B.Arch a good career in 2026?",
    answer: "B.Arch is excellent in 2026 with India's real estate sector booming. The construction market is ₹80,000 crore+ with massive demand for architects. Average starting salary ₹4–6 LPA; 5 years experience: ₹10–25 LPA; own practice: unlimited. B.Arch from Delhi gives exposure to Delhi's infrastructure boom — smart cities, Metro projects, and IT park construction.",
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
      <Script id="breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              Top B.Arch colleges in Delhi with NATA cutoffs, fees, placements, and admission details. Compare MIT-ADT, DY Patil, MAEER and more.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "🏛️", label: "6 Top Colleges" },
                { icon: "📐", label: "NATA / JEE Paper 2" },
                { icon: "💰", label: "Fees ₹1.1L–₹2.8L/yr" },
                { icon: "📈", label: "Avg Placement ₹3.5–10 LPA" },
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
                { step: "3", title: "Apply to Colleges", desc: "Fill college applications via MAHA-ARCH CAP (for state colleges) or direct for private." },
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
              { label: "Arts & Science colleges in Delhi", href: "/arts-colleges-delhi", icon: "📚" },
              { label: "Commerce colleges in Delhi", href: "/commerce-colleges-Delhi", icon: "📊" },
              { label: "Science colleges in Delhi", href: "/science-colleges-Delhi", icon: "🔬" },
              { label: "BCA colleges in Delhi", href: "/bca-colleges-delhi", icon: "💻" },
              { label: "BBA colleges in Delhi", href: "/bba-colleges-delhi", icon: "📈" },
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


