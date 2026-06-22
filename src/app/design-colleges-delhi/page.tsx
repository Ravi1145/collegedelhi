import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateCourseSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Design colleges in Delhi 2026",
  description: "Top design & architecture colleges in Delhi 2026. Compare MIT ID, Symbiosis School of Design, MAEER's MIT AOA, and more",
  path: "/design-colleges-delhi",
  keywords: [
    "design colleges in Delhi 2026",
    "architecture colleges in Delhi 2026",
    "fashion design colleges Delhi",
    "best design College Delhi",
    "nata cutoff Delhi 2026",
    "nid prep Delhi",
    "mit institute of design Delhi",
    "symbiosis school of design Delhi",
    "b arch colleges Delhi fees",
    "interior design colleges Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "MIT Institute of Design (MIT-ID)", type: "Private", naac: "A+", fees: "₹3.5L–₹5L/yr", program: "B.Des, M.Des", seats: 120, nata: "Not required", slug: "mit-id-mit-institute-of-design-Delhi", highlight: "No. 1 Design School Delhi | Industry tie-ups" },
  { rank: 2, name: "Symbiosis School of Design (SSD)", type: "Deemed", naac: "A+", fees: "₹4L–₹5.5L/yr", program: "B.Des", seats: 60, nata: "Portfolio + interview", slug: "ssd-symbiosis-school-of-design-Delhi", highlight: "Top Deemed | Excellent placement" },
  { rank: 3, name: "MAEER's MIT College of Engineering — Architecture", type: "Private", naac: "A+", fees: "₹1.8L–₹2.5L/yr", program: "B.Arch", seats: 40, nata: "NATA 80+", slug: "mit-college-engineering-Delhi", highlight: "Best B.Arch | NATA approved" },
  { rank: 4, name: "HMR Institute Delhi — Architecture", type: "Private", naac: "A", fees: "₹1.2L–₹1.8L/yr", program: "B.Arch", seats: 40, nata: "NATA 70+", slug: "indira-college-architecture-Delhi", highlight: "Affordable B.Arch option" },
  { rank: 5, name: "Sharda Institute of Design (SID)", type: "Private", naac: "A", fees: "₹2.5L–₹3.5L/yr", program: "B.Des", seats: 60, nata: "Portfolio based", slug: "sid-Sharda-institute-design-Delhi", highlight: "Growing design school | Strong faculty" },
  { rank: 6, name: "Miranda House College — Fine Arts & Design", type: "Government", naac: "A+", fees: "₹15K–₹30K/yr", program: "B.A. Fine Arts", seats: 60, nata: "Merit based", slug: "miranda-house-college-delhi", highlight: "Heritage college | Lowest fees" },
]

const faqs = [
  { question: "Which is the best design college in Delhi 2026?", answer: "MIT Institute of Design (MIT-ID) is the top design college in Delhi offering B.Des and M.Des programs with strong industry connections and placements up to ₹12 LPA. Symbiosis School of Design (SSD) is a close second, especially for fashion and communication design." },
  { question: "What is the fee for design colleges in Delhi?", answer: "Design college fees in Delhi range from ₹15,000/year at government colleges like Miranda House College to ₹5.5 lakh/year at premium institutes like Symbiosis School of Design. MIT-ID charges ₹3.5–5 lakh/year. Total 4-year course cost ranges from ₹60,000 to ₹22 lakh." },
  { question: "Is NATA required for architecture colleges in Delhi?", answer: "Yes, NATA (National Aptitude Test in Architecture) is mandatory for B.Arch admissions at most architecture colleges in Delhi. A score of 70+ is required for private colleges, while government-aided institutions may require 80+. NATA 2026 exams are held in March and April." },
  { question: "What are placements like at design colleges in Delhi?", answer: "MIT-ID graduates get placed at companies like Titan, Mahindra, Godrej, and international studios with average packages of ₹6–8 LPA and top offers up to ₹12 LPA. Symbiosis School of Design has placements averaging ₹5–7 LPA in product design, UX, and fashion firms." },
  { question: "Which design entrance exams are accepted in Delhi?", answer: "Delhi design colleges accept NID DAT (National Institute of Design), NIFT entrance test, CEED (for M.Des), NATA (for B.Arch), and JEE Main for architecture. MIT-ID and SSD conduct their own portfolio-based aptitude tests and studio interviews." },
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Design colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top design, architecture & fashion colleges in Delhi — fees from ₹15K to ₹5.5L/year, NATA cutoffs, NID prep, and real placement data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "6 Design Colleges" },
              { icon: TrendingUp, text: "Up to ₹12 LPA" },
              { icon: Award, text: "NAAC Accredited" },
              { icon: Users, text: "B.Des / B.Arch / M.Des" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Design Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best overall:</strong> MIT Institute of Design (MIT-ID) · <strong>Best deemed:</strong> Symbiosis School of Design · <strong>Best B.Arch:</strong> MIT AOA ·{" "}
              <strong>Lowest fees:</strong> Miranda House College (₹15K/yr) · <strong>Highest placement:</strong> MIT-ID (₹12 LPA top offer)
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


