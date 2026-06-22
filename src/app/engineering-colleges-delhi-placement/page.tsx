import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { TrendingUp, ExternalLink } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Best Engineering colleges in Delhi for Placements 2026",
  description:
    "Compare average & highest placement packages of top Delhi engineering colleges 2026. DTU Delhi ₹12 LPA avg, IMI Delhi ₹9.8 LPA, IIIT Delhi ₹8.5 LPA",
  path: "/engineering-colleges-delhi-placement",
  keywords: [
    "best engineering colleges in Delhi with placement",
    "top placement engineering colleges Delhi",
    "colleges with best placement Delhi engineering",
    "colleges with 100% placement Delhi engineering",
    "highest placement engineering colleges Delhi",
    "average package engineering colleges Delhi",
    "campus placement engineering colleges Delhi",
  ],
})

const placementData = [
  { rank: 1, name: "Delhi Technological University (DTU)", type: "Government", avg: "₹12 LPA", highest: "₹45 LPA", rate: "92%", slug: "dtu-delhi", recruiters: "TCS Digital, Bajaj Auto, Mercedes-Benz, Siemens, L&T, Volkswagen" },
  { rank: 2, name: "Netaji Subhas University of Technology (NSUT)", type: "Government", avg: "₹9.8 LPA", highest: "₹42 LPA", rate: "94%", slug: "nsut-delhi", recruiters: "Google, Microsoft, Goldman Sachs, Amazon, Deutsche Bank, JPMC" },
  { rank: 3, name: "IIIT Delhi (Indraprastha Institute of Information Technology)", type: "Autonomous", avg: "₹18 LPA", highest: "₹55 LPA", rate: "96%", slug: "iiit-delhi", recruiters: "Google, Microsoft, Flipkart, Samsung R&D, Qualcomm, Adobe" },
  { rank: 4, name: "IGDTUW (Indira Gandhi Delhi Technical Univ for Women)", type: "Government", avg: "₹7.2 LPA", highest: "₹32 LPA", rate: "87%", slug: "igdtuw-delhi", recruiters: "TCS, Infosys, Wipro, HCL, Capgemini, Tech Mahindra" },
  { rank: 5, name: "Amity University Delhi (Engineering)", type: "Deemed", avg: "₹6.8 LPA", highest: "₹28 LPA", rate: "85%", slug: "amity-university-noida-engineering", recruiters: "TCS, Wipro, Capgemini, Tech Mahindra, Accenture, Mindtree" },
  { rank: 6, name: "Bennett University (Times of India Group)", type: "Private", avg: "₹6.5 LPA", highest: "₹26 LPA", rate: "82%", slug: "bennett-university-greater-noida", recruiters: "TCS, Infosys, Wipro, HCL, Amazon, IBM" },
  { rank: 7, name: "GL Bajaj Institute of Technology & Management", type: "Private", avg: "₹5.2 LPA", highest: "₹22 LPA", rate: "78%", slug: "gl-bajaj-institute-technology-management-greater-noida", recruiters: "TCS, Infosys, Wipro, HCL, Hexaware, Mphasis" },
  { rank: 8, name: "MSIT (Maharaja Surajmal Institute of Technology)", type: "Private", avg: "₹4.8 LPA", highest: "₹18 LPA", rate: "75%", slug: "msit-delhi", recruiters: "TCS, Wipro, Zensar, Persistent, Cognizant, L&T Infotech" },
  { rank: 9, name: "BPIT (Bhagwan Parshuram Institute of Technology)", type: "Private", avg: "₹4.6 LPA", highest: "₹16 LPA", rate: "74%", slug: "bpit-delhi", recruiters: "TCS, Infosys, HCL, Mphasis, Concentrix" },
  { rank: 10, name: "HMR Institute of Technology & Management", type: "Private", avg: "₹4.2 LPA", highest: "₹15 LPA", rate: "72%", slug: "hmr-institute-technology-delhi", recruiters: "TCS, Wipro, Infosys, Capgemini, Persistent" },
]

const topRecruiters = [
  { sector: "IT / Software", companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Capgemini", "Tech Mahindra", "Persistent", "Zensar"] },
  { sector: "Automotive / Manufacturing", companies: ["Bajaj Auto", "Tata Motors", "Mercedes-Benz", "Volkswagen", "Bosch", "Cummins", "L&T", "Thermax", "KPIT"] },
  { sector: "Finance / BFSI", companies: ["Goldman Sachs", "Deutsche Bank", "JPMC", "HDFC Bank", "Axis Bank", "Bajaj Finserv"] },
  { sector: "Consulting / Services", companies: ["Accenture", "Deloitte", "EY", "PwC", "McKinsey (select)", "BCG Digital"] },
]

const faqs = [
  {
    question: "Which engineering college in Delhi has the best placement package?",
    answer: "DTU Delhi has the best average placement package at ₹12 LPA with a highest package of ₹45 LPA. IIIT Delhi has the highest package (₹18 LPA avg, ₹55 LPA highest) due to its focus on CS/IT. For CS/IT specifically, NSUT Delhi offers excellent placements at top tech firms like Goldman Sachs and Amazon (₹7.5 LPA avg).",
  },
  {
    question: "What is the average placement package at engineering colleges in Delhi?",
    answer: "Average placement packages at Delhi engineering colleges vary by type: Government (DTU Delhi): ₹12 LPA avg. Autonomous private (IIIT Delhi, NSUT): ₹7.5–8.5 LPA avg. Deemed (IMI Delhi): ₹9.8 LPA avg. Private (GL Bajaj, NIET Noida, Sharda): ₹4.8–5.6 LPA avg. The citywide average across all Delhi engineering colleges is approximately ₹6–7 LPA.",
  },
  {
    question: "Do engineering colleges in Delhi have 100% placement?",
    answer: "No Delhi engineering college guarantees 100% placement. IMI Delhi has the highest placement rate at 94%. DTU Delhi achieves around 92%. NSUT achieves about 90%. Private colleges like GL Bajaj and NIET Noida place 75–80% of their students. Note: placement percentage includes all offers — many students choose higher studies, government jobs, or self-employment, which reduces the overall figure.",
  },
  {
    question: "Which companies recruit from Delhi engineering colleges?",
    answer: "Top recruiters at Delhi engineering colleges: IT sector — TCS, Infosys, Wipro, Cognizant, HCL, Capgemini, Persistent. Manufacturing/Auto — Bajaj Auto, L&T, Bosch, Cummins, Tata Motors, Mercedes-Benz. Finance — Goldman Sachs (NSUT), Deutsche Bank. Consulting — Accenture, Deloitte. Mass recruiters (all colleges): TCS, Wipro, Infosys. Premium recruiters (DTU Delhi, NSUT, IIIT Delhi): Goldman Sachs, Google, Microsoft.",
  },
  {
    question: "Is campus placement mandatory at engineering colleges in Delhi?",
    answer: "Campus placement is optional at all Delhi engineering colleges. The Training & Placement (T&P) cell facilitates company visits and drives — students choose whether to sit for placements. At top colleges like DTU Delhi and IMI Delhi, participation rates are very high (80–90%). Many CS/IT students at NSUT prefer off-campus opportunities at startups over campus drives.",
  },
  {
    question: "What is the average engineering salary in Delhi for freshers?",
    answer: "Fresher engineering salary in Delhi (2025): Computer Science/IT graduates from top colleges (DTU Delhi, NSUT): ₹7–15 LPA. CS graduates from private colleges: ₹3.5–6 LPA. Mechanical/Civil from government colleges: ₹4–8 LPA. Mechanical from private colleges: ₹3–5 LPA. The highest-paying roles are in software development, data science, and VLSI design at MNCs.",
  },
  {
    question: "Which is better for placements — IIIT Delhi or NSUT Delhi?",
    answer: "NSUT Delhi (average ₹7.5 LPA, highest ₹35 LPA) and IIIT Delhi (average ₹8.5 LPA, highest ₹40 LPA) are comparable. IIIT Delhi has a slightly higher average due to strong Mechanical/Electronics placements in the auto sector. NSUT Delhi has better CS/IT-specific placements (Goldman Sachs, Deutsche Bank, JPMC). For software jobs, NSUT is preferred; for core/manufacturing, IIIT Delhi is stronger.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Engineering Colleges Delhi", url: "/engineering-colleges-delhi" },
  { name: "Best for Placements", url: "/engineering-colleges-delhi-placement" },
]

export default function EngineeringCollegesDELHIPlacementPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Engineering colleges in Delhi for Placements 2026",
    numberOfItems: placementData.length,
    itemListElement: placementData.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/engineering-colleges-delhi" className="hover:text-white">Engineering Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Best for Placements</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Best Engineering colleges in Delhi for Placements 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Ranked by average placement package, highest package, placement rate, and top recruiters. Data from 2024–25 placement season.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>DTU Delhi</strong> leads with ₹12 LPA avg (₹45 LPA highest). <strong>IIIT Delhi</strong> tops all with ₹18 LPA avg (₹55 LPA highest, CS/IT focus). <strong>NSUT Delhi</strong> is best for CS placements at top tech firms (Goldman Sachs, Google, Amazon). Top recruiters: TCS, Bajaj Auto, Mercedes-Benz, Goldman Sachs, Google.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Best Avg Package", value: "₹12 LPA", icon: "", note: "DTU Delhi" },
              { label: "Highest Package", value: "₹45 LPA", icon: "", note: "DTU Delhi" },
              { label: "Best Placement Rate", value: "94%", icon: "", note: "IMI Delhi" },
              { label: "Top Recruiter", value: "TCS / Bajaj", icon: "", note: "All colleges" },
            ].map(({ label, value, icon, note }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                <p className="text-xs text-red-700 font-medium">{note}</p>
              </div>
            ))}
          </div>

          {/* Placement Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Engineering College Placement Rankings — Delhi 2026</h2>
              <p className="text-xs text-gray-400 mt-0.5">Ranked by average package. Data from 2024–25 final placements.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-center w-8">#</th>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-right">Avg Package</th>
                    <th className="px-4 py-3 text-right hidden sm:table-cell">Highest</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">Rate</th>
                    <th className="px-4 py-3 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {placementData.map((c) => (
                    <tr key={c.rank} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-4 py-3 text-center">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mx-auto ${c.rank <= 3 ? "bg-red-100 text-red-800" : "bg-gray-50 text-gray-500"}`}>
                          {c.rank}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <p className="text-xs text-gray-400">{c.type}</p>
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{c.avg}</td>
                      <td className="px-4 py-3 text-right text-xs text-red-800 hidden sm:table-cell">{c.highest}</td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.rate}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link href={`/colleges/${c.slug}`} className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 rounded-lg">
                          View <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" /> Top Recruiters at Delhi Engineering Colleges
            </h2>
            <div className="space-y-3">
              {topRecruiters.map((r) => (
                <div key={r.sector} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-xs font-bold text-white bg-[#0A1628] px-3 py-1 rounded-full flex-shrink-0 w-fit">{r.sector}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {r.companies.map((company) => (
                      <span key={company} className="text-xs bg-gray-50 text-gray-700 border border-gray-100 px-2.5 py-1 rounded-full">{company}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">FAQs — Engineering Placements in Delhi 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Engineering Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "" },
              { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "" },
              { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "" },
              { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "" },
              { label: "JEE Main Colleges & Cutoffs 2026", href: "/jee-colleges-delhi", icon: "" },
              { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "" },
              { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "" },
              { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Want to maximise your placement chances?</p>
              <p className="text-blue-200 text-sm">Get personalised college recommendations based on your JEE Main/JEE score.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/predictor" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                College Predictor →
              </Link>
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                Free Counselling →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


