import { Metadata } from "next"
import { Suspense } from "react"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema, generateItemListSchema } from "@/lib/seo"
import Link from "next/link"
import CollegeGrid from "@/components/colleges/CollegeGrid"
import { getAllColleges } from "@/lib/db"


export const metadata: Metadata = genMeta({
  title: "All colleges in Delhi 2026 — Fees, Rankings & Reviews",
  description: "Browse and compare 103+ colleges in Delhi. Filter by stream (Engineering, MBA, Medical), fees, NAAC grade, and location",
  path: "/colleges",
  keywords: [
    "colleges in Delhi", "engineering colleges Delhi", "mba colleges Delhi",
    "medical colleges Delhi", "Delhi university colleges list", "colleges in Delhi with fees",
    "best College Delhi 2026", "naac a+ colleges Delhi", "nirf ranked colleges Delhi",
  ],
})

const listingFaqs = [
  { question: "How many colleges are there in Delhi?", answer: "Delhi NCR has hundreds of colleges across engineering, management, medical, arts, and commerce streams. CollegeDelhi profiles verified colleges with fees, placements, and NAAC data — see the listings on this page for current coverage." },
  { question: "Which is the best government college in Delhi?", answer: "DTU (Delhi Technological University) is a top government engineering college — NIRF #49, NAAC A+, government fee structure. For medical: AIIMS Delhi (NIRF #1, NAAC A++). For arts/commerce: Miranda House and Shri Ram College of Commerce (SRCC), both constituent colleges of University of Delhi." },
  { question: "Which Delhi college has the best placements?", answer: "For MBA: FMS Delhi has strong placements with top recruiters including McKinsey and BCG. For engineering: IIT Delhi and DTU have strong placement records. Always check each college's official placement report for current-year statistics." },
  { question: "What is the fee range for engineering colleges in Delhi?", answer: "Engineering fees in Delhi vary by institution type: Government colleges (DTU, NSUT, IIIT Delhi) have regulated, lower fee structures than private/deemed universities. SC/ST students typically get fee waivers at government colleges. Always check the official college admission portal for the current year's exact fee notification." },
  { question: "Which entrance exam is needed for Delhi college admission?", answer: "JEE Main is required for most engineering colleges (DTU, NSUT, IIIT Delhi, IGDTUW) via JAC Delhi counselling. NEET UG is required for medical colleges. CAT is required for FMS Delhi MBA. CUET is used for many University of Delhi undergraduate programs." },
]

export default async function CollegesPage() {
  const { colleges: topColleges } = await getAllColleges({ status: 'published', limit: 10 })
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "colleges in Delhi", url: "/colleges" },
  ])
  const faqSchema = generateFAQSchema(listingFaqs)
  const itemList = generateItemListSchema(
    topColleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `${c.type ?? ''} college, NAAC ${c.naac_grade ?? 'N/A'}, avg placement ₹${((c.avg_placement ?? 0)/100000).toFixed(1)} LPA` }))
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <div className="bg-surface min-h-screen">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">colleges in Delhi</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              All colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Discover and compare 100+ top engineering, MBA, medical and arts colleges in Delhi. Real fees, placements, and NAAC data.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Engineering", href: "/engineering-colleges-delhi" },
                { label: "MBA", href: "/mba-colleges-delhi" },
                { label: "Medical", href: "/medical-colleges-delhi" },
                { label: "Law", href: "/law-colleges-delhi" },
                { label: "Design", href: "/design-colleges-delhi" },
                { label: "Government", href: "/government-colleges-delhi" },
              ].map(({ label, href }) => (
                <Link key={label} href={href}
                  className="text-xs bg-white/10 text-blue-200 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">
                  {label} Colleges →
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="flex items-center justify-center h-64 text-gray-500">Loading colleges...</div>}>
          <CollegeGrid />
        </Suspense>

        {/* GEO + FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions — Delhi Colleges 2026</h2>
          <div className="space-y-4">
            {listingFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related searches */}
          <div className="mt-10">
            <h2 className="text-base font-semibold text-gray-700 mb-4">Related Searches</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
                { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
                { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
                { label: "NAAC A+ Colleges Delhi", href: "/naac-a-plus-colleges-delhi" },
                { label: "NIRF Insights Delhi", href: "/nirf-insights" },
                { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi" },
                { label: "JEE Colleges Delhi", href: "/jee-colleges-delhi" },
                { label: "Top Placement Colleges", href: "/top-placement-colleges-delhi" },
                { label: "Colleges with Hostel", href: "/colleges-in-delhi-with-hostel" },
                { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
