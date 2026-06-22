import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateBreadcrumbSchema } from "@/lib/seo"
import AIComparison from "@/components/ai/AIComparison"

export const metadata: Metadata = genMeta({
  title: "Compare Colleges in Delhi 2026 — Side-by-Side Comparison",
  description: "Compare any two Delhi NCR colleges side-by-side: fees, NIRF rank, placements, NAAC grade, cutoff and campus life",
  path: "/compare",
  keywords: ["compare colleges Delhi", "DTU vs NSUT", "FMS Delhi vs MDI", "college comparison Delhi 2026", "Miranda House vs LSR", "SRCC vs Hindu College"],
})
export const revalidate = 300

const FEATURED_COMPARISONS = [
  { label: "DTU vs NSUT", href: "/dtu-vs-nsut",  tag: "Engineering" },
  { label: "DTU vs IIIT Delhi", href: "/dtu-vs-iiit-delhi", tag: "Engineering" },
  { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", tag: "MBA" },
  { label: "Miranda House vs LSR", href: "/miranda-house-vs-lsr", tag: "Arts" },
  { label: "SRCC vs Hindu College", href: "/srcc-vs-hindu-college", tag: "Commerce" },
  { label: "IIT Delhi vs DTU", href: "/compare/iit-delhi-vs-dtu-delhi-technological-university", tag: "Engineering" },
  { label: "AIIMS vs Maulana Azad Medical", href: "/compare/aiims-delhi-vs-maulana-azad-medical-college-delhi", tag: "Medical" },
  { label: "IMI Delhi vs FORE School", href: "/compare/imi-delhi-international-management-institute-vs-fore-school-management-delhi", tag: "MBA" },
  { label: "IGDTUW vs NSUT", href: "/compare/igdtuw-delhi-vs-nsut-delhi", tag: "Engineering" },
  { label: "FMS vs IIT Delhi MBA", href: "/compare/fms-delhi-faculty-management-studies-vs-dms-iit-delhi-management-studies", tag: "MBA" },
  { label: "BIMTECH vs IMT Ghaziabad", href: "/compare/bimtech-birla-institute-management-technology-noida-vs-imt-ghaziabad", tag: "MBA" },
  { label: "Amity vs Bennett University", href: "/compare/amity-university-noida-engineering-vs-bennett-university-delhi-engineering", tag: "Engineering" },
]

const TAG_COLORS: Record<string, string> = {
  Engineering: "bg-blue-100 text-blue-700",
  MBA: "bg-purple-100 text-purple-700",
  Medical: "bg-green-100 text-green-700",
  Arts: "bg-orange-100 text-orange-700",
  Commerce: "bg-yellow-100 text-yellow-700",
}

export default function ComparePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
  ])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="bg-white min-h-screen">
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">Compare Colleges</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Compare Colleges in Delhi 2026
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Side-by-side comparisons of fees, NIRF rank, placements, NAAC grade, and cutoff for 100+ Delhi NCR colleges. Updated for 2026 admissions.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

          {/* AI comparison tool */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI College Comparison Tool</h2>
            <AIComparison />
          </section>

          {/* Featured comparisons */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular College Comparisons 2026</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FEATURED_COMPARISONS.map(({ label, href, tag }) => (
                <Link key={href} href={href}
                  className="flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700">{label}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}>{tag}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Stream sections */}
          {[
            { stream: "Engineering", links: [
              { label: "Top Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "BTech Colleges Delhi", href: "/btech-colleges-delhi" },
              { label: "JEE Colleges Delhi", href: "/jee-colleges-delhi" },
              { label: "IP University Colleges", href: "/ipu-colleges-delhi" },
            ]},
            { stream: "MBA", links: [
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
              { label: "PGDM Colleges Delhi", href: "/pgdm-colleges-delhi" },
              { label: "CAT MBA Colleges Delhi", href: "/cat-colleges-delhi" },
              { label: "MBA without CAT Delhi", href: "/mba-admission-delhi-without-cat" },
            ]},
            { stream: "Arts & Commerce", links: [
              { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
              { label: "BCom Colleges Delhi", href: "/bcom-colleges-delhi" },
              { label: "Girls Colleges Delhi", href: "/girls-colleges-delhi" },
              { label: "Arts Colleges Delhi", href: "/arts-colleges-delhi" },
            ]},
          ].map(({ stream, links }) => (
            <section key={stream}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{stream} College Guides</h2>
              <div className="flex flex-wrap gap-2">
                {links.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="text-sm bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          ))}

        </div>
      </main>
    </>
  )
}
