import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { getAllBlogs } from "@/lib/db"
import { blogs as staticBlogs } from "@/data/blogs"
import type { BlogPost } from "@/types"
import InlineLeadForm from "@/components/leads/InlineLeadForm"
import NewsAlert from "@/components/leads/NewsAlert"

export const revalidate = 3600 // ISR — re-render every hour

export const metadata: Metadata = genMeta({
  title: "Delhi College News & Admission Updates 2026 | JEE Main, NEET, CAT",
  description: "Latest Delhi college news, JEE Main 2026 results, NEET merit list, MBA admission updates, scholarship alerts, and education news from Delhi. Updated daily.",
  path: "/news",
  keywords: [
    "Delhi college news 2026",
    "JEE Main 2026 result",
    "Delhi college admission news",
    "neet 2026 Delhi",
    "JAC Delhi Round 2026 Delhi",
    "Delhi college admission update",
    "snap 2026 result",
    "cat 2026 news",
    "Delhi university news",
    "DU news 2026",
  ],
})

const CATEGORIES = [
  { key: "all",        label: "All News",     icon: "📰" },
  { key: "admission",  label: "Admissions",   icon: "🎓" },
  { key: "Exams",      label: "Exams",        icon: "📝" },
  { key: "Engineering",label: "Engineering",  icon: "⚙️" },
  { key: "MBA",        label: "MBA",          icon: "💼" },
  { key: "Medical",    label: "Medical",      icon: "🏥" },
  { key: "Student Life", label: "Student Life", icon: "🏠" },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  })
}

// Hardcoded latest news articles (supplement static blog data)
const latestNews = [
  {
    id: "n1",
    title: "JEE Main 2026 Schedule Released — Exams from April 20 to May 15",
    excerpt: "JEE Main 2026 timetable announced. PCM paper: April 20 – May 5. PCB paper: May 6–15. Application deadline: February 28, 2026.",
    date: "2026-01-10",
    category: "Exams",
    source: "CET Cell Delhi",
    link: "/exams/JEE Main",
    urgent: true,
  },
  {
    id: "n2",
    title: "DTU Delhi NIRF Rank 2025: Maintains Top 50 in Engineering Category",
    excerpt: "College of Engineering Delhi ranked #49 in NIRF 2025 Engineering category, maintaining its position as top government engineering college in Delhi.",
    date: "2026-01-05",
    category: "Engineering",
    source: "NIRF India",
    link: "/colleges/DTU Delhi-college-of-engineering-Delhi",
    urgent: false,
  },
  {
    id: "n3",
    title: "SNAP 2025 Results Declared — FMS Delhi GE-PI-WAT Registration Opens",
    excerpt: "SNAP 2025 results are out. FMS Delhi GE-PI shortlist cutoff: 98+ percentile. Registration for GE-PI-WAT at siu.edu.in closes February 15, 2026.",
    date: "2026-01-08",
    category: "MBA",
    source: "Symbiosis University",
    link: "/colleges/FMS Delhi-symbiosis-institute-business-management-Delhi",
    urgent: true,
  },
  {
    id: "n4",
    title: "NEET 2026 Application Form Live — Last Date March 10, 2026",
    excerpt: "NTA has opened NEET UG 2026 applications at nta.ac.in. Exam date: May 3, 2026. Application fee: ₹1,700 (General), ₹1,000 (SC/ST).",
    date: "2026-01-12",
    category: "Medical",
    source: "NTA Official",
    link: "/exams/neet",
    urgent: true,
  },
  {
    id: "n5",
    title: "NSP Delhi Scholarship Scholarship 2026 Portal Opens — Apply Before September 30",
    excerpt: "NSP Delhi Scholarship scholarship portal for 2025–26 academic year is now accepting applications. EBC Freeship, OBC, SC/ST schemes open. Income certificate mandatory.",
    date: "2026-01-15",
    category: "admission",
    source: "NSP Delhi Scholarship Portal",
    link: "/scholarships",
    urgent: false,
  },
  {
    id: "n6",
    title: "Delhi MBA Colleges See 20% Increase in SNAP Applications for 2026",
    excerpt: "SNAP 2025–26 applications crossed 1.5 lakh — a 20% increase over previous year. FMS Delhi and MDI Gurgaon remain top choices among test-takers.",
    date: "2025-12-28",
    category: "MBA",
    source: "CollegeDelhi Research",
    link: "/mba-colleges-delhi",
    urgent: false,
  },
]

export default async function NewsPage() {
  // Fetch published blog posts (revalidated hourly)
  let blogPosts: BlogPost[] = []
  try {
    const { blogs: dbBlogs } = await getAllBlogs({ status: "published", limit: 50 })
    blogPosts = dbBlogs as BlogPost[]
  } catch {
    blogPosts = staticBlogs
  }

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News", url: "/news" },
  ])

  const faqSchema = generateFAQSchema([
    { question: "When will JEE Main 2026 results be declared?", answer: "JEE Main 2026 results are expected in June 2026. PCM paper results typically come 3–4 weeks after the exam ends. CET Cell Delhi announces results at mahacet.org. Subscribe to our WhatsApp alerts to get notified the moment results are declared." },
    { question: "When does NEET 2026 happen?", answer: "NEET UG 2026 is scheduled for May 3, 2026 (Sunday). Application form deadline: March 10, 2026. Results: June 2026. AIIMS Delhi cutoff for 2026: 665+ NEET score. Maulana Azad Medical College Delhi: 625+ marks." },
    { question: "What is the JAC Delhi Round 2026 schedule for Delhi engineering colleges?", answer: "JEE Main 2026 JAC Delhi Rounds for Delhi engineering colleges: JAC Delhi Round 1 — July 2026, JAC Delhi Round 2 — August 2026, Institutional Round — August 2026. Dates will be confirmed by CET Cell after JEE Main 2026 results in June." },
  ])

  return (
    <>
      <Script id="breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">News & Updates</span>
            </nav>
            <h1 className="text-3xl font-extrabold text-white mb-2">Delhi College News 2026</h1>
            <p className="text-gray-300 max-w-xl mb-4">JEE Main results, admission dates, scholarship alerts, and exam news — updated daily.</p>
            {/* Alert subscribe */}
            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 max-w-md">
              <span className="text-xl">📲</span>
              <div className="flex-1">
                <p className="text-white text-xs font-semibold">Get alerts on WhatsApp — instantly</p>
              </div>
              <InlineLeadForm context="news_alert" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Breaking / Urgent news */}
              {latestNews.filter((n) => n.urgent).length > 0 && (
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Urgent Updates
                  </h2>
                  <div className="space-y-3">
                    {latestNews.filter((n) => n.urgent).map((n) => (
                      <Link
                        key={n.id}
                        href={n.link}
                        className="flex gap-4 bg-red-50 border border-red-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold uppercase">Urgent</span>
                            <span className="text-[10px] text-gray-400">{formatDate(n.date)}</span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm leading-snug">{n.title}</h3>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{n.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All latest news */}
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 mb-4">Latest News</h2>
                <div className="space-y-3">
                  {latestNews.map((n) => (
                    <Link
                      key={n.id}
                      href={n.link}
                      className="flex gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{n.category}</span>
                          <span className="text-[10px] text-gray-400">{formatDate(n.date)} · {n.source}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{n.title}</h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{n.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog articles */}
              {blogPosts.length > 0 && (
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900 mb-4">In-Depth Guides</h2>
                  <div className="space-y-3">
                    {blogPosts.slice(0, 6).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex gap-3 bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-semibold">{post.category}</span>
                            <span className="text-[10px] text-gray-400">{formatDate(post.date)} · {post.readTime} read</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm leading-snug">{post.title}</h3>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog" className="mt-4 inline-block text-sm text-red-700 hover:underline font-semibold">
                    View all articles →
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Important dates */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-extrabold text-gray-900 text-sm mb-4">📅 Key Dates 2026</h3>
                <div className="space-y-3 text-xs">
                  {[
                    { event: "JEE Main 2026", date: "Apr 20 – May 15", color: "text-blue-700" },
                    { event: "NEET UG 2026", date: "May 3, 2026", color: "text-green-700" },
                    { event: "JEE Main Results", date: "June 2026", color: "text-purple-700" },
                    { event: "CAT 2026", date: "Nov 23, 2026", color: "text-red-800" },
                    { event: "SNAP 2026", date: "Dec 2026", color: "text-red-700" },
                    { event: "JAC Delhi Round 1", date: "July 2026", color: "text-blue-700" },
                    { event: "NSP Delhi Scholarship Deadline", date: "Sep 30, 2026", color: "text-amber-700" },
                  ].map((item) => (
                    <div key={item.event} className="flex justify-between items-start gap-2 py-1.5 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600 font-medium">{item.event}</span>
                      <span className={`font-bold shrink-0 ${item.color}`}>{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category chips */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-extrabold text-gray-900 text-sm mb-3">Browse by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <span key={cat.key} className="text-xs bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 font-medium cursor-default">
                      {cat.icon} {cat.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl border border-red-100 p-5">
                <h3 className="font-extrabold text-gray-900 text-sm mb-3">Quick Links</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "JEE Main Cutoffs 2026", href: "/cutoffs/JEE Main/DTU Delhi-college-of-engineering-Delhi" },
                    { label: "College Predictor", href: "/predictor" },
                    { label: "Admission Deadlines", href: "/delhi-admission-deadline-tracker-2026" },
                    { label: "Scholarships 2026", href: "/scholarships" },
                    { label: "Engineering Colleges", href: "/engineering-colleges-delhi" },
                    { label: "MBA Colleges", href: "/mba-colleges-delhi" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center justify-between py-1.5 text-gray-700 hover:text-red-700 border-b border-gray-100 last:border-0">
                      <span>{link.label}</span>
                      <span className="text-gray-300">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News alert subscribe banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <NewsAlert />
        </div>
      </div>
    </>
  )
}

