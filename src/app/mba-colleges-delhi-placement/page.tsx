import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { TrendingUp, ExternalLink } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Best MBA colleges in Delhi for Placements 2026 | Average Package Data",
  description:
    "Compare MBA placement packages across Delhi colleges 2026. FMS Delhi ₹28 LPA avg, MDI Gurgaon ₹22 LPA, IMI Delhi ₹12 LPA. Full recruiter list, placement %, and salary data for all top Delhi MBA colleges.",
  path: "/mba-colleges-delhi-placement",
  keywords: [
    "best mba colleges in Delhi with placement",
    "top placement mba colleges Delhi",
    "highest placement mba colleges Delhi",
    "average package mba colleges Delhi",
    "mba colleges in Delhi with placement",
    "mba placement Delhi 2026",
    "FMS Delhi placement",
  ],
})

const placementData = [
  { rank: 1, name: "FMS Delhi (Faculty of Management Studies, Delhi University)", type: "Central University", avg: "₹32 LPA", highest: "₹72 LPA", rate: "100%", slug: "fms-delhi-faculty-management-studies", recruiters: "McKinsey, BCG, Bain, Goldman Sachs, P&G, Hindustan Unilever, Amazon" },
  { rank: 2, name: "MDI Gurgaon (Management Development Institute)", type: "Autonomous", avg: "₹24 LPA", highest: "₹60 LPA", rate: "100%", slug: "mdi-gurgaon-management-development-institute", recruiters: "Amazon, Accenture, EY, KPMG, Tata Motors, Flipkart, Deloitte" },
  { rank: 3, name: "IIFT Delhi (Indian Institute of Foreign Trade)", type: "Central University", avg: "₹22 LPA", highest: "₹50 LPA", rate: "100%", slug: "iift-delhi-indian-institute-foreign-trade", recruiters: "Amazon, Maersk, Deloitte, KPMG, Vedanta, EY, ITC" },
  { rank: 4, name: "IMI Delhi (International Management Institute)", type: "Private", avg: "₹14 LPA", highest: "₹36 LPA", rate: "98%", slug: "imi-delhi-international-management-institute", recruiters: "HDFC Bank, ICICI Bank, Bajaj Finserv, Mahindra, Tata Group, HUL" },
  { rank: 5, name: "FORE School of Management Delhi", type: "Autonomous", avg: "₹10.5 LPA", highest: "₹32 LPA", rate: "96%", slug: "fore-school-of-management-delhi", recruiters: "HDFC, Axis Bank, Reliance, HUL, Aditya Birla Group, ITC" },
  { rank: 6, name: "BIMTECH Greater Noida (Birla Institute of Management)", type: "Autonomous", avg: "₹9.2 LPA", highest: "₹24 LPA", rate: "94%", slug: "bimtech-greater-noida", recruiters: "HDFC, Wipro, TCS, Cognizant, Infosys BPM, L&T Finance" },
  { rank: 7, name: "Lal Bahadur Shastri Institute of Management (LBSIM)", type: "Autonomous", avg: "₹8.8 LPA", highest: "₹22 LPA", rate: "92%", slug: "lbsim-delhi-lal-bahadur-shastri-institute-management", recruiters: "Kotak, HDFC, Axis Bank, Bajaj, Tech Mahindra, EY" },
  { rank: 8, name: "DSM DTU (Delhi School of Management)", type: "Government", avg: "₹8.5 LPA", highest: "₹20 LPA", rate: "90%", slug: "delhi-school-of-management-dtu", recruiters: "Deloitte, EY, KPMG, HDFC Bank, TCS, Wipro, Bajaj Finserv" },
  { rank: 9, name: "Jaipuria Institute of Management Noida", type: "Private", avg: "₹7.5 LPA", highest: "₹18 LPA", rate: "88%", slug: "jaipuria-institute-management-noida", recruiters: "BFSI companies, FMCG firms, IT services, Retail chains" },
  { rank: 10, name: "IMS Ghaziabad (University Courses Campus)", type: "Private", avg: "₹6.8 LPA", highest: "₹16 LPA", rate: "85%", slug: "ims-ghaziabad-university-courses-campus", recruiters: "Bajaj Finance, HDFC, SBI, TCS, Infosys, Axis Bank, HUL" },
]

const topMBARecruiters = [
  { sector: "Consulting", companies: ["McKinsey", "BCG", "Deloitte", "EY", "KPMG", "PwC", "Accenture Strategy"] },
  { sector: "Banking / Finance", companies: ["Goldman Sachs", "HDFC Bank", "ICICI Bank", "Citi", "Barclays", "Kotak", "Bajaj Finserv"] },
  { sector: "FMCG / Consumer", companies: ["P&G", "HUL", "Marico", "Nestlé", "ITC", "Godrej", "Aditya Birla"] },
  { sector: "Technology / IT", companies: ["Microsoft", "Amazon", "TCS", "Infosys BPM", "Cognizant", "Wipro Digital"] },
  { sector: "Manufacturing / Auto", companies: ["Tata Motors", "Mahindra", "Bajaj Auto", "L&T", "Cummins India", "Thermax"] },
]

const faqs = [
  {
    question: "Which MBA college in Delhi has the highest placement package?",
    answer: "FMS Delhi (Faculty of Management Studies, Delhi University) has the highest MBA placement in Delhi with ₹28 LPA average and ₹65 LPA highest package. McKinsey, BCG, Goldman Sachs, and P&G are among the top recruiters. FMS Delhi is NIRF Rank 13 and admission requires CAT/XAT with DU MBA entrance exam.",
  },
  {
    question: "What is the average MBA salary from Delhi colleges?",
    answer: "Average MBA salaries from Delhi colleges vary widely: FMS Delhi: ₹32 LPA. MDI Gurgaon: ₹24 LPA. IIFT Delhi: ₹22 LPA. IMI Delhi: ₹14 LPA. Fore School Delhi: ₹8.5 LPA. Indira Institute: ₹7.2 LPA. Suryadatta: ₹5.8 LPA. The city average across all Delhi MBA colleges is approximately ₹10–12 LPA. Specialisations in Finance and IT+MBA command 20–30% premium.",
  },
  {
    question: "Does FMS Delhi have 100% placement?",
    answer: "Yes — FMS Delhi achieves 100% placement every year. The 2024–25 batch saw 100% placement with an average of ₹32 LPA. The highest international offer was ₹65 LPA. McKinsey, BCG, P&G, and Goldman Sachs are anchor recruiters. FMS Delhi also offers summer internships (PPO conversions) with an average stipend of ₹1.2–2L per month.",
  },
  {
    question: "Which Delhi MBA college has the best placement for Finance specialisation?",
    answer: "FMS Delhi is best for Finance MBA with Goldman Sachs, Deutsche Bank, and Kotak among top recruiters (average ₹28 LPA). MDI Gurgaon is second for finance placements. For investment banking and capital markets specifically, FMS Delhi's Finance batch consistently attracts Tier-1 BFSI recruiters. IMI Delhi is the best option for finance at a lower cost (₹12 LPA avg, ₹7–11L fees).",
  },
  {
    question: "What is the summer placement stipend at Delhi MBA colleges?",
    answer: "Summer internship stipends at Delhi MBA colleges: FMS Delhi — ₹80,000–₹2,00,000/month (McKinsey, BCG, Goldman Sachs). MDI Gurgaon — ₹60,000–₹1,50,000/month. BIMTECH Delhi — ₹50,000–₹1,00,000/month. IMI Delhi — ₹30,000–₹60,000/month. Fore School Delhi — ₹20,000–₹40,000/month. PPO (Pre-Placement Offer) conversion rate at FMS Delhi is approximately 30% of the summer batch.",
  },
  {
    question: "How does SNAP score affect placement at FMS Delhi?",
    answer: "CAT score is used for admission to FMS Delhi but doesn't directly affect final placement — your academic performance, projects, case competitions, and interview skills during the 2-year MBA program determine placement outcomes. A student with 65 percentile SNAP can outperform a 75 percentile student in final placements. Focus on building your skill set, not just the entrance score.",
  },
  {
    question: "Is MBA placement better at FMS Delhi or IIM Nagpur?",
    answer: "FMS Delhi has better mass placements (₹32 LPA avg) and stronger industry connections across Delhi NCR. IIM Nagpur has the IIM brand advantage but smaller batch and developing placement network. For North India geography, FMCG, consulting, and BFSI roles, FMS Delhi is preferred by most recruiters. IIM Nagpur is catching up but FMS Delhi has 40+ years of alumni network advantage.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
  { name: "Best for Placements", url: "/mba-colleges-delhi-placement" },
]

export default function MBACollegesDELHIPlacementPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MBA colleges in Delhi for Placements 2026",
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
              <Link href="/mba-colleges-delhi" className="hover:text-white">MBA Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Best for Placements</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Best MBA colleges in Delhi for Placements 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Ranked by average placement package, highest package, and placement rate. FMS Delhi, MDI Gurgaon, BIMTECH, IMI Delhi, Fore School Delhi — complete 2024–25 data.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>FMS Delhi</strong> tops Delhi MBA placements — ₹32 LPA average, ₹72 LPA highest, 100% placement. <strong>MDI Gurgaon</strong> is second (₹24 LPA avg). <strong>IMI Delhi</strong> offers best ROI — ₹14 LPA avg at ₹7–11L total fees. Top recruiters: McKinsey, BCG, Goldman Sachs, P&G, Deloitte, HDFC Bank.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Best Avg Package", value: "₹32 LPA", icon: "", note: "FMS Delhi" },
              { label: "Highest Package", value: "₹72 LPA", icon: "", note: "FMS Delhi" },
              { label: "100% Placement", value: "FMS Delhi & MDI Gurgaon", icon: "", note: "Top 2 colleges" },
              { label: "Best ROI", value: "IMI Delhi", icon: "", note: "₹12 LPA, ₹7–11L fees" },
            ].map(({ label, value, icon, note }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-base font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                <p className="text-xs text-red-700 font-medium">{note}</p>
              </div>
            ))}
          </div>

          {/* Placement Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">MBA College Placement Rankings — Delhi 2026</h2>
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
                        <p className="font-semibold text-gray-900 text-sm leading-tight">{c.name}</p>
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
              <TrendingUp className="w-5 h-5 text-red-600" /> Top Recruiters at Delhi MBA Colleges
            </h2>
            <div className="space-y-3">
              {topMBARecruiters.map((r) => (
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
            <h2 className="text-xl font-bold text-gray-900 mb-5">FAQs — MBA Placements in Delhi 2026</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related MBA Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Best MBA colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
              { label: "Top 10 MBA Colleges — Ranked", href: "/top-10-mba-colleges-in-delhi", icon: "" },
              { label: "Low Fees MBA colleges in Delhi", href: "/low-fees-mba-colleges-delhi", icon: "" },
              { label: "MBA Scholarships in Delhi", href: "/mba-colleges-delhi-scholarship", icon: "" },
              { label: "CAT Score colleges in Delhi", href: "/cat-colleges-delhi", icon: "" },
              { label: "PGDM colleges in Delhi", href: "/pgdm-colleges-delhi", icon: "" },
              { label: "Admission Without CAT (IPU CET)", href: "/mba-admission-delhi-without-cat", icon: "" },
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
              <p className="font-bold text-lg">Target the right MBA college for your placement goals.</p>
              <p className="text-blue-200 text-sm">Our counsellors match you with the best option for your score and budget.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Free MBA Counselling →
              </Link>
              <Link href="/mba-colleges-delhi" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                All MBA Colleges →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


