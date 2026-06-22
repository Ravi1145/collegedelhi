import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateCourseSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Design & Architecture Colleges in Delhi 2026",
  description: "Top design and architecture colleges in Delhi 2026. School of Planning and Architecture (SPA Delhi) and NIFT/NID entrance guidance",
  path: "/design-colleges-delhi",
  keywords: [
    "design colleges in Delhi 2026",
    "architecture colleges in Delhi 2026",
    "fashion design colleges Delhi",
    "best design College Delhi",
    "nata cutoff Delhi 2026",
    "nid prep Delhi",
    "SPA Delhi admission",
    "b arch colleges Delhi fees",
    "interior design colleges Delhi",
  ],
})

const faqs = [
  { question: "Which is the best design/architecture college in Delhi 2026?", answer: "School of Planning and Architecture, New Delhi (SPA Delhi) is India's premier government institute for architecture and planning, and the primary standalone option for B.Arch within Delhi. For B.Des, NIFT and NID have campuses across India — check their official admission portals for the Delhi-area campus details." },
  { question: "What is the fee for design and architecture colleges in Delhi?", answer: "SPA Delhi follows a government fee structure, among the lowest for B.Arch in India given its status as an Institute of National Importance. Always check the official admission portal for the current year's exact fee notification." },
  { question: "Is NATA required for architecture colleges in Delhi?", answer: "NATA (National Aptitude Test in Architecture) or JEE Main Paper 2 are the standard national exams for B.Arch admission in India, including at SPA Delhi. Confirm the current year's accepted exam and cutoff on the official admission portal, as policies can change." },
  { question: "Which design entrance exams are relevant for Delhi-area design colleges?", answer: "NID DAT (National Institute of Design), NIFT entrance test, CEED (for M.Des), and UCEED are the standard national design entrance exams in India. Check each institute's official portal for which exam applies to their specific campus and program." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Design Colleges Delhi", url: "https://www.collegedelhi.com/design-colleges-delhi" },
]

export const revalidate = 86400

export default function DesignCollegesDELHI() {
  const courseSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: "B.Des / Design Courses in Delhi",
  description: "4-year undergraduate design program in fashion, graphic, interior, product and UX design. Admitted via UCEED, NID DAT, or NIFT entrance exam.",
  provider: { '@type': 'Organization', name: 'CollegeDelhi.com', sameAs: 'https://www.collegedelhi.com' },
  timeRequired: "P4Y",
  url: 'https://www.collegedelhi.com' + "/design-colleges-delhi",
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: 80000, priceSpecification: { '@type': 'PriceSpecification', minPrice: 80000, maxPrice: 500000, priceCurrency: 'INR' } },
}

return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Design Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Design &amp; Architecture Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            School of Planning and Architecture, New Delhi (SPA Delhi) — India's premier government B.Arch institute. NATA/JEE Paper 2 admission and NID/NIFT design entrance guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "Institute of National Importance" },
              { icon: Award, text: "Government Fee Structure" },
              { icon: Users, text: "B.Arch / B.Des / M.Des" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Design &amp; Architecture Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best B.Arch:</strong> School of Planning and Architecture, New Delhi (SPA Delhi) — India's premier government architecture institute with government fee structure and NATA/JEE Paper 2 admission.
            </p>
          </div>
          {/* College table — live from backend */}
          <StreamCollegesTable stream="Design" keywords={["architecture","arch","animation"]} />
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Not sure which design college to choose?</p>
            <p className="text-blue-200 text-sm mb-4">Our AI College Finder matches you to the right design program based on your portfolio, budget & career goals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                Try AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Design Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Design Colleges Delhi</h2>
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


