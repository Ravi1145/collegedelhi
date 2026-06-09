import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import HeroSection from "@/components/home/HeroSection"
import CollegeMarquee from "@/components/home/CollegeMarquee"
import FeaturedColleges from "@/components/home/FeaturedColleges"
import FeaturedCourses from "@/components/home/FeaturedCourses"
import RankingTables from "@/components/home/RankingTables"
import AIRecommender from "@/components/ai/AIRecommender"
import ExamCalendar from "@/components/home/ExamCalendar"
import FAQSection from "@/components/home/FAQSection"
import GuidesScrollSection from "@/components/home/GuidesScrollSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import QuickExploreSection from "@/components/home/QuickExploreSection"
import HomepageNewsSection from "@/components/home/HomepageNewsSection"
import AlumniQASection from "@/components/home/AlumniQASection"
import { generateMetadata as genMeta, generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema, generateLocalBusinessSchema } from "@/lib/seo"
import LeadCapture from "@/components/leads/LeadCapture"
import { getAllBlogs } from "@/lib/db"
import type { NewsArticle } from "@/components/home/HomepageNewsSection"

export const metadata: Metadata = genMeta({
  title: "Best colleges in Delhi 2026 | CollegeDelhi",
  description: "Find the best engineering, MBA, medical and arts colleges in Delhi 2026. Compare DTU (NIRF #49), FMS Delhi (NIRF #13), AFMC (NIRF #4) and 25+ colleges by fees (₹15K–25L/yr), placements (₹12–65 LPA), NAAC grade & reviews. Free AI counselor.",
  path: "/",
  keywords: [
    "colleges in Delhi 2026",
    "best college in Delhi 2026",
    "top colleges in Delhi 2026",
    "top 10 colleges in Delhi 2026",
    "best engineering college in Delhi 2026",
    "best btech college in Delhi 2026",
    "best mba college in Delhi 2026",
    "best medical college in Delhi 2026",
    "top engineering colleges Delhi 2026",
    "engineering colleges in Delhi",
    "colleges in Delhi with fees 2026",
    "Delhi college list 2026",
    "Delhi university colleges list 2026",
    "naac a+ colleges in Delhi 2026",
    "nirf ranked colleges Delhi 2026",
    "government colleges in Delhi 2026",
    "private colleges in Delhi 2026",
    "college admission Delhi 2026",
    "JEE Main colleges Delhi 2026",
    "low fee colleges Delhi 2026",
    "DTU Delhi admission 2026",
    "FMS Delhi 2026",
    "government engineering College Delhi",
    "DU affiliated colleges 2026",
    "colleges in Delhi with hostel 2026",
    "bca colleges in Delhi 2026",
    "bba colleges in Delhi 2026",
    "design colleges in Delhi 2026",
    "direct admission colleges Delhi 2026",
  ],
})

const faqData = [
  { question: "Which is the best BTech college in Delhi in 2026?", answer: "DTU (Delhi Technological University) is the best B.Tech college in Delhi in 2026 — NIRF Rank 49, NAAC A+, fees ₹80K–1.8L/yr, average placement ₹12 LPA, highest ₹45 LPA. JEE Main cutoff: 97+ percentile for CSE. Followed by NSUT (best for CS/IT), IIIT Delhi (NIRF #101), and IMI Delhi (₹9.8 LPA avg placement)." },
  { question: "What is the best MBA college in Delhi in 2026?", answer: "FMS Delhi (Symbiosis Institute of Business Management) is the best MBA college in Delhi with NIRF Rank 13 and average placement of ₹28 LPA. Admission via SNAP 2026 (60+ percentile). Fees: ₹16–22L total. Recruiters include McKinsey, BCG, Deloitte, and P&G." },
  { question: "Which is the best medical college in Delhi?", answer: "AIIMS Delhi (NIRF Rank 4, NAAC A++) is the best medical college in Delhi with near-zero fees (₹50,000 total). Requires 650+ NEET score + AFMC entrance test. Maulana Azad Medical College (NIRF #18) is the best government option for state quota at 625+ NEET score and fees ₹60K–1.2L/yr." },
  { question: "What are the fees for engineering colleges in Delhi 2026?", answer: "Engineering fees in Delhi 2026: Government (DTU Delhi) ₹80K–1.8L/yr; Autonomous private (NSUT, IIIT Delhi) ₹1.4L–2.2L/yr; Deemed universities (IMI Delhi, Amity University Delhi) ₹2L–4.8L/yr; Private colleges ₹95K–1.7L/yr. SC/ST/OBC categories get full fee waiver/concession at government colleges under EBC and government scholarship schemes." },
  { question: "What entrance exam is required for Delhi colleges in 2026?", answer: "JEE Main 2026 (April–May) for engineering at DU-affiliated colleges; JEE Main 2026 for DTU Delhi, SIT, Amity University Delhi; NEET 2026 (May 3) for AFMC and Maulana Azad Medical College; CAT 2026 (November) and SNAP 2026 (December) for MBA at FMS Delhi; SET 2026 (May) for Symbiosis programs." },
  { question: "Which Delhi college has the highest placement package in 2026?", answer: "FMS Delhi leads with ₹28 LPA average MBA placement and McKinsey/BCG offers. For engineering, DTU Delhi has the highest average (₹12 LPA) with individual offers reaching ₹45 LPA from Goldman Sachs and Google. NSUT's CS branch sees highest median salary of ₹10 LPA with product company offers reaching ₹40+ LPA." },
  { question: "How to get admission in DTU Delhi 2026?", answer: "For DTU Delhi 2026 admission: Score 97+ percentile in JEE Main (April–May 2026) or qualify JEE Main Session 1/2. Register on JEE Main CAP portal after results (June 2026). Fill document verification at facilitation centre. Choose DTU Delhi in preference list during JAC Delhi Round 1 (July 2026). DTU Delhi is a government college — fees are just ₹80,000–1.8L/year." },
  { question: "What is the difference between DTU Delhi, NSUT, and IIIT Delhi?", answer: "DTU Delhi: Government, NIRF #49, NAAC A+, fees ₹80K–1.8L/yr, avg placement ₹12 LPA — best overall value. NSUT: Autonomous private, NAAC A, fees ₹1.4L–1.9L/yr, avg placement ₹7.5 LPA — best for CS/IT focus. IIIT Delhi: Autonomous, NIRF #101, NAAC A+, fees ₹1.6L–2.2L/yr, avg placement ₹8.5 LPA — best for Mechanical and Electronics. For CS/IT, DTU Delhi > NSUT > IIIT Delhi. For Mechanical, DTU Delhi > IIIT Delhi > GL Bajaj." },
  { question: "Which is the No. 1 college in Delhi in 2026?", answer: "AIIMS Delhi holds the highest NIRF rank among Delhi colleges at #4 nationally. Among engineering colleges, DTU Delhi is #1 in Delhi (NIRF #49). Among MBA colleges, FMS Delhi is #1 (NIRF #13). For arts and science, Miranda House College (Est. 1885) is the most prestigious. For design, Pearl Academy Delhi (SID) is ranked among India's top 5." },
  { question: "Which colleges in Delhi are NAAC A+ accredited in 2026?", answer: "NAAC A+ colleges in Delhi (2026): AFMC (A++), DTU Delhi, Amity University Delhi, IMI Delhi, IIIT Delhi, IGDTUW Delhi, Miranda House College, Hindu College, Gargi College, FMS Delhi, SID (Pearl Academy Delhi), and MIT-ADT University. NAAC A+ is the second-highest grade and indicates excellent academic quality, infrastructure, and student outcomes." },
  { question: "When does college admission start in Delhi for 2026?", answer: "Delhi college admissions 2026 timeline: JEE Main exam — April 20–May 15, 2026. NEET — May 3, 2026. JEE Main results — June 2026. JAC Delhi Round 1 (engineering) — July 2026. Arts, Commerce, Science (CUET-based) — June–July 2026. MBA (CAT/SNAP-based) — December 2026 for the 2027 batch. Direct admissions (management quota) open in July–August 2026 after JAC Delhi Rounds." },
  { question: "Which colleges in Delhi have hostel facilities in 2026?", answer: "Top Delhi colleges with hostel in 2026: DTU Delhi (₹55K–70K/yr), IIIT Delhi (₹80K–1L/yr), IMI Delhi (₹1.1L–1.4L/yr), Amity University Delhi (₹90K–1.2L/yr), FMS Delhi MBA (₹1.2L–1.6L/yr), AFMC (free hostel for all students), Maulana Azad Medical College (₹60K–75K/yr), Miranda House College (₹40K–55K/yr), SMCW (₹1.85L/yr, mandatory for outstation). Apply immediately after admission — government college hostels fill within days." },
  { question: "What is the cheapest college in Delhi for engineering in 2026?", answer: "The cheapest engineering colleges in Delhi 2026: DTU Delhi (₹80,000/year — government), NIET Noida COE (₹1.1L/year), GL Bajaj NIET (₹1.2L/year), HMR Institute Delhi (₹95K/year). SC/ST/OBC students at government colleges get full fee waiver through state government scholarships. EBC (Economically Backward Class) scholarship available for annual family income below ₹8 lakh." },
  { question: "Which areas of Delhi have the most colleges?", answer: "Major college hubs in Delhi 2026: Connaught Place / South Delhi — DTU Delhi, Hindu College, Miranda House College, Gargi College. Rohini / Rohini Sector 17 — NSUT, Sharda COE. Dwarka Sector 3 — IIIT Delhi. Dwarka / Rohini — DY Patil Engineering, NIET Noida. Knowledge Park Greater Noida / Mulshi — Symbiosis campus (FMS Delhi, SIT, SID, SMCW). Noida Sector 62 — MIT-ADT campus (MITAOE, MIT ACS). Hauz Khas / Okhla Phase III — MIT-ID, MITWPU satellite. Hauz Khas — SCACS, other Sharda colleges." },
]

export default async function HomePage() {
  // ── Fetch latest blog articles for the news section ──────────────────────
  let newsArticles: NewsArticle[] = []
  try {
    const { blogs } = await getAllBlogs({ limit: 5 })
    newsArticles = blogs.map((b) => ({
      slug:     b.slug,
      title:    b.title,
      author:   b.author   ?? 'CollegeDelhi Editorial',
      date:     b.published_at
        ? new Date(b.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        : '',
      readTime: b.read_time ?? '5 min',
      category: b.category ?? 'General',
    }))
  } catch { /* fall back to static inside HomepageNewsSection */ }

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqData)) }}
      />
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* College Marquee — scrolling college cards */}
        <CollegeMarquee />

        {/* Browse by Stream */}
        <QuickExploreSection />

        {/* Cutoff Predictor Teaser moved below FeaturedColleges */}

        <FeaturedColleges />

        {/* Lead capture — free counselling CTA */}
        {/* <section className="py-10 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <LeadCapture
              source="homepage_banner"
              buttonText="Get Free Counselling"
              title="Get Free Admission Guidance"
              subtitle="Talk to our Delhi education experts — 100% free, no spam."
              minimal
            />
          </div>
        </section> */}

        <FeaturedCourses />

        <RankingTables />
        <section className="py-16 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIRecommender />
          </div>
        </section>
        <ExamCalendar />

        <HomepageNewsSection articles={newsArticles} />

        {/* Tools Hub */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Free Tools for Smarter College Decisions</h2>
              <p className="text-gray-500 mt-2 text-sm">Everything you need to plan your college journey — all free, all in one place.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { href: "/predictor", icon: "🎯", label: "College Predictor", desc: "Find your best-fit colleges by exam score", bg: "bg-red-50 hover:bg-red-100 border-red-100" },
                { href: "/compare", icon: "⚖️", label: "Compare Colleges", desc: "Side-by-side fees & placement comparison", bg: "bg-blue-50 hover:bg-blue-100 border-blue-100" },
                { href: "/roi-calculator", icon: "📈", label: "ROI Calculator", desc: "Is your degree worth the investment?", bg: "bg-green-50 hover:bg-green-100 border-green-100" },
                { href: "/nirf-insights", icon: "🏆", label: "NIRF Insights", desc: "Rankings & NAAC grades for Delhi colleges", bg: "bg-purple-50 hover:bg-purple-100 border-purple-100" },
                { href: "/ai-finder", icon: "🤖", label: "AI College Finder", desc: "Chat with AI to find your ideal college", bg: "bg-pink-50 hover:bg-pink-100 border-pink-100" },
                { href: "/counselling", icon: "📞", label: "Free Counselling", desc: "Talk to an expert — free 15-min session", bg: "bg-teal-50 hover:bg-teal-100 border-teal-100" },
              ].map(({ href, icon, label, desc, bg }) => (
                <Link key={href} href={href} className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-colors ${bg}`}>
                  <span className="text-3xl mb-2">{icon}</span>
                  <p className="text-xs font-bold text-gray-900 mb-1">{label}</p>
                  <p className="text-[11px] text-gray-500 hidden sm:block">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guides & Tools Hub */}
        <section className="py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Explore College Guides & Tools</h2>
              <p className="text-gray-500 mt-2 text-sm">In-depth guides for every step of your college journey — rankings, fees, placements, and admissions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Engineering */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-lg">⚙️</span>
                  Engineering Colleges
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { label: "Best Engineering Colleges Delhi 2026", href: "/engineering-colleges-delhi" },
                    { label: "Top 10 Engineering Colleges Ranked", href: "/top-10-engineering-colleges-in-delhi" },
                    { label: "Placement Guide — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement" },
                    { label: "Low Fees Colleges (Under ₹5L)", href: "/low-fees-engineering-colleges-delhi" },
                    { label: "Scholarships for Engineering", href: "/engineering-colleges-delhi-scholarship" },
                    { label: "Admission Without JEE (JEE Main)", href: "/engineering-admission-delhi-without-jee" },
                    { label: "Private Engineering Colleges", href: "/private-engineering-colleges-delhi" },
                    { label: "Direct Admission (Management Quota)", href: "/direct-admission-engineering-colleges-delhi" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gray-700 hover:text-red-700 transition-colors flex items-center gap-1.5">
                        <span className="text-red-400">›</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MBA */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-lg">💼</span>
                  MBA Colleges
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { label: "Best MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
                    { label: "Top 10 MBA Colleges Ranked", href: "/top-10-mba-colleges-in-delhi" },
                    { label: "MBA Placement Guide — LPA & Recruiters", href: "/mba-colleges-delhi-placement" },
                    { label: "Low Fees MBA Colleges", href: "/low-fees-mba-colleges-delhi" },
                    { label: "MBA Scholarships Delhi", href: "/mba-colleges-delhi-scholarship" },
                    { label: "MBA Without CAT (MAT/CMAT/SNAP)", href: "/mba-admission-delhi-without-cat" },
                    { label: "Private MBA Colleges Delhi", href: "/private-mba-colleges-delhi" },
                    { label: "Direct Admission MBA Delhi", href: "/direct-admission-mba-colleges-delhi" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gray-700 hover:text-red-700 transition-colors flex items-center gap-1.5">
                        <span className="text-red-400">›</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Comparisons */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-lg">🛠️</span>
                  Tools & Comparisons
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { label: "Engineering vs MBA — Which is Better?", href: "/delhi-colleges-comparison-engineering-mba" },
                    { label: "Placement Comparator (Interactive)", href: "/delhi-college-placement-comparator" },
                    { label: "Fees Calculator — 4-Year Total", href: "/delhi-college-fees-calculator" },
                    { label: "Admission Deadline Tracker 2026", href: "/delhi-admission-deadline-tracker-2026" },
                    { label: "AI College Finder", href: "/ai-finder" },
                    { label: "Compare Colleges Side-by-Side", href: "/compare" },
                    { label: "College Predictor by Score", href: "/predictor" },
                    { label: "Free Expert Counselling", href: "/counselling" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gray-700 hover:text-red-700 transition-colors flex items-center gap-1.5">
                        <span className="text-red-400">›</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <AlumniQASection />
        <FAQSection />
        <GuidesScrollSection />
      </main>
    </>
  )
}

