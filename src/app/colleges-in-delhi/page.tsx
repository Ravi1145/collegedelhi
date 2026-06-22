import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Building2, GraduationCap, MapPin, TrendingUp, Shield } from "lucide-react"
import { seoPages } from "@/data/seoPages"
import { generateMetadata as genMeta, generateBreadcrumbSchema } from "@/lib/seo"
import InPageLinks from "@/components/seo/InPageLinks"

export const metadata: Metadata = genMeta({
  title: "Colleges in Delhi 2026 — Complete List, Fees & Rankings",
  description:
    "Explore all colleges in Delhi 2026. Filter by stream (Engineering, MBA, Medical, Law), type (Government, Private, Deemed), entrance exam, fees, and location",
  path: "/colleges-in-delhi",
  keywords: [
    "colleges in delhi",
    "colleges in delhi 2026",
    "list of colleges in delhi",
    "all colleges in delhi",
    "colleges in delhi ncr",
    "top colleges in delhi",
    "best colleges in delhi 2026",
    "government colleges in delhi",
    "private colleges in delhi",
    "engineering colleges in delhi",
    "mba colleges in delhi",
    "medical colleges in delhi",
    "law colleges in delhi",
    "du affiliated colleges delhi",
    "naac accredited colleges delhi",
  ],
})
export const revalidate = 300

const categories = [
  {
    label: "By Stream",
    icon: GraduationCap,
    color: "blue",
    pages: seoPages.filter((p) => p.category === "stream"),
  },
  {
    label: "By College Type",
    icon: Building2,
    color: "purple",
    pages: seoPages.filter((p) => p.category === "type"),
  },
  {
    label: "By Entrance Exam",
    icon: BookOpen,
    color: "green",
    pages: seoPages.filter((p) => p.category === "exam"),
  },
  {
    label: "By Specialty",
    icon: TrendingUp,
    color: "orange",
    pages: seoPages.filter((p) => p.category === "specialty"),
  },
  {
    label: "By Location",
    icon: MapPin,
    color: "red",
    pages: seoPages.filter((p) => p.category === "location"),
  },
  {
    label: "By Fee Range",
    icon: Shield,
    color: "teal",
    pages: seoPages.filter((p) => p.category === "fee"),
  },
]

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
  purple: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
  green: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
  orange: "bg-red-50 border-red-200 text-red-800 hover:bg-red-100",
  red: "bg-red-50 border-red-200 text-red-700 hover:bg-red-100",
  teal: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100",
}

const iconColorMap: Record<string, string> = {
  blue: "text-blue-600",
  purple: "text-purple-600",
  green: "text-green-600",
  orange: "text-red-700",
  red: "text-red-600",
  teal: "text-teal-600",
}

export default function CollegesInDELHIPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges in Delhi", url: "/colleges-in-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Colleges in Delhi 2026",
    description: "Complete list of colleges in Delhi by stream, type, entrance exam, location and fee range",
    url: "https://www.collegedelhi.com/colleges-in-delhi",
    numberOfItems: seoPages.length,
    itemListElement: seoPages.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.h1,
      url: `https://www.collegedelhi.com/colleges-in-delhi/${p.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Colleges in Delhi 2026 — Complete List &amp; Rankings</h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto">
            Delhi is India&apos;s education capital with 800+ colleges. Explore by stream, type,
            entrance exam, location, and more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span>108+ Colleges Profiled</span>
            <span>·</span>
            <span>All Streams Covered</span>
            <span>·</span>
            <span>Updated April 2026</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white border-b py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {["Engineering", "MBA", "Medical", "Law", "Design", "Government", "Low Fees"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm hover:bg-blue-50 transition-colors"
              >
                {label}
              </a>
            )
          )}
          <Link
            href="/colleges"
            className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors font-medium"
          >
            Browse All Colleges →
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">
        {categories.map((cat) => {
          if (cat.pages.length === 0) return null
          const Icon = cat.icon
          return (
            <section key={cat.label}>
              <div className={`flex items-center gap-2 mb-6`}>
                <Icon size={20} className={iconColorMap[cat.color]} />
                <h2 className="text-2xl font-semibold text-gray-800">{cat.label}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.pages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/colleges-in-delhi/${page.slug}`}
                    className={`p-5 rounded-xl border transition-colors ${colorMap[cat.color]}`}
                  >
                    <div className="font-semibold text-base mb-1">{page.h1}</div>
                    <div className="text-sm opacity-75 line-clamp-2">{page.description}</div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* Internal links — pillar pages */}
        <InPageLinks
          heading="Popular College Guides for Delhi 2026"
          columns={3}
          links={[
            { label: "Best Colleges in Delhi", href: "/best-colleges-in-delhi", tag: "Top pick" },
            { label: "Top Colleges in Delhi 2026", href: "/top-colleges-in-delhi" },
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
            { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
            { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
            { label: "IPU Colleges Delhi", href: "/ipu-colleges-delhi" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "Law Colleges Delhi", href: "/law-colleges-delhi" },
            { label: "Design Colleges Delhi", href: "/design-colleges-delhi" },
            { label: "Commerce Colleges Delhi", href: "/commerce-colleges-delhi" },
            { label: "Science Colleges Delhi", href: "/science-colleges-delhi" },
          ]}
        />

        <InPageLinks
          heading="Delhi NCR Location Guides"
          columns={4}
          links={[
            { label: "South Delhi Colleges", href: "/colleges-south-delhi" },
            { label: "North Delhi Colleges", href: "/colleges-north-delhi" },
            { label: "East Delhi Colleges", href: "/colleges-east-delhi" },
            { label: "Dwarka Colleges", href: "/colleges-dwarka-delhi" },
            { label: "Rohini Colleges", href: "/colleges-rohini-delhi" },
            { label: "Vasant Kunj Colleges", href: "/colleges-vasant-kunj-delhi" },
            { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" },
            { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon" },
            { label: "Colleges Greater Noida", href: "/colleges-greater-noida" },
            { label: "Colleges in Gurgaon", href: "/colleges-gurugram" },
            { label: "MBA Colleges Noida", href: "/mba-colleges-noida" },
            { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida" },
          ]}
        />

        {/* Browse all CTA */}
        <section className="text-center bg-blue-700 text-white rounded-2xl py-12 px-6">
          <h2 className="text-2xl font-bold mb-3">Not sure where to start?</h2>
          <p className="text-blue-100 mb-6">
            Use our AI college finder or browse all 108 colleges with advanced filters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/colleges"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse All Colleges
            </Link>
            <Link
              href="/ai-finder"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              AI College Finder
            </Link>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}


