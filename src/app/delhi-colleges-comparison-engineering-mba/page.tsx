import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Engineering vs MBA in Delhi 2026 | Fees, Salary & Career Comparison",
  description:
    "Should you choose Engineering (B.Tech) or MBA in Delhi 2026? Compare fees, starting salary, top colleges, entrance exams, and 10-year career paths. Detailed side-by-side comparison.",
  path: "/delhi-colleges-comparison-engineering-mba",
  keywords: [
    "engineering colleges comparison Delhi",
    "mba colleges comparison Delhi",
    "Delhi colleges ranking engineering mba",
    "engineering colleges Delhi fees",
    "mba colleges Delhi fees",
    "engineering vs mba Delhi",
    "btech or mba which is better Delhi",
  ],
})

const comparison = [
  { param: "Course Duration", engineering: "4 years (B.Tech / BE)", mba: "2 years (MBA / PGDM)" },
  { param: "Eligibility", engineering: "12th PCM, 45%+ marks", mba: "Graduation (any stream), 50%+" },
  { param: "Entrance Exam", engineering: "JEE Main / JEE Main", mba: "CAT / MAT / CMAT / SNAP" },
  { param: "Fees Range (Total)", engineering: "₹4L–₹19L (4 years)", mba: "₹3L–₹22L (2 years)" },
  { param: "Avg Starting Salary (Delhi)", engineering: "₹4–12 LPA", mba: "₹6–28 LPA" },
  { param: "Highest Package (Delhi)", engineering: "₹40–45 LPA (top college)", mba: "₹55–65 LPA (FMS Delhi)" },
  { param: "Top Entrance Exam Difficulty", engineering: "JEE Advanced (hardest), JEE Main (moderate)", mba: "CAT (hard), SNAP (moderate), MAT (easy)" },
  { param: "Return on Investment", engineering: "Best at govt. colleges (DTU Delhi ₹5L fee → ₹12 LPA avg)", mba: "Best at Indira Institute (₹5L fee → ₹7 LPA avg)" },
  { param: "Job Market in Delhi", engineering: "Excellent — IT, auto, manufacturing", mba: "Excellent — BFSI, consulting, FMCG" },
  { param: "Further Study Options", engineering: "M.Tech, MBA, MS abroad", mba: "CFA, CA, PhD, Executive MBA" },
]

const topEngineeringColleges = [
  { rank: 1, name: "DTU Delhi", fees: "₹80K–₹1.8L/yr", placement: "₹12 LPA avg", exam: "JEE Main 95+ %ile" },
  { rank: 2, name: "NSUT Delhi", fees: "₹1.4L–₹1.9L/yr", placement: "₹7.5 LPA avg", exam: "JEE Main 92–95 %ile" },
  { rank: 3, name: "IIIT Delhi", fees: "₹1.6L–₹2.2L/yr", placement: "₹8.5 LPA avg", exam: "JEE Main 88–92 %ile" },
  { rank: 4, name: "IMI Delhi", fees: "₹3.6L–₹4.8L/yr", placement: "₹9.8 LPA avg", exam: "SET / JEE" },
  { rank: 5, name: "Amity University Delhi Delhi", fees: "₹2L–₹3.8L/yr", placement: "₹7.2 LPA avg", exam: "JEE Main 75–85 %ile" },
]

const topMBAColleges = [
  { rank: 1, name: "FMS Delhi", fees: "₹16L–₹22L total", placement: "₹28 LPA avg", exam: "SNAP 60+ %ile" },
  { rank: 2, name: "MDI Gurgaon", fees: "₹12L–₹16L total", placement: "₹22 LPA avg", exam: "SNAP 55+ %ile" },
  { rank: 3, name: "BIMTECH Delhi", fees: "₹14L–₹18L total", placement: "₹18 LPA avg", exam: "SNAP 50+ %ile" },
  { rank: 4, name: "IMI Delhi", fees: "₹7L–₹11L total", placement: "₹12 LPA avg", exam: "CAT / MAT / CMAT" },
  { rank: 5, name: "Fore School Delhi", fees: "₹5L–₹7.5L total", placement: "₹8.5 LPA avg", exam: "CAT / MAT / CMAT" },
]

const faqs = [
  {
    question: "Is B.Tech or MBA better in Delhi in 2026?",
    answer: "It depends on your background and goals. If you're in 12th grade, B.Tech at DTU Delhi or NSUT is an excellent choice — low fees (₹4–8L total), great Delhi IT/manufacturing placements. If you already have a degree and want to fast-track to management roles, MBA at FMS Delhi (₹28 LPA avg) or IMI Delhi (₹12 LPA avg, better ROI) is the better path. Engineering gives more career flexibility; MBA gives faster salary jumps.",
  },
  {
    question: "Can I do MBA after B.Tech in Delhi?",
    answer: "Absolutely — this is one of the most common career paths in Delhi. B.Tech + MBA is highly valued by Delhi companies (TCS, Infosys, Wipro, Bajaj, L&T, consulting firms). After 0–2 years of work experience, top choices are FMS Delhi (SNAP), IMI Delhi (MAT/CMAT), and MDI Gurgaon (SNAP). Many tech engineers from Delhi use MBA to transition into product management, consulting, or finance.",
  },
  {
    question: "Which has a better return on investment — Engineering or MBA in Delhi?",
    answer: "Government engineering colleges offer the best ROI: DTU Delhi total fee ₹4–7L → ₹12 LPA average placement = break-even in 6 months. For MBA, Jaipuria Institute of Management Noida (₹4.2–6.5L total, ₹7.2 LPA avg) offers the best ROI. FMS Delhi (₹22L fees, ₹28 LPA avg) has good ROI but takes longer to break even. Avoid deemed private engineering colleges with ₹16–20L total fees and only ₹5–7 LPA placements.",
  },
  {
    question: "What are the fees for engineering vs MBA in Delhi?",
    answer: "Engineering (4 years): Government (DTU Delhi) — ₹4–7L total. Autonomous (NSUT, IIIT Delhi) — ₹6–9L total. Deemed (IMI Delhi) — ₹14–19L total. MBA (2 years): Budget (Suryadatta, Indira) — ₹3–6.5L total. Mid-range (IMI Delhi, Fore School Delhi) — ₹5–11L total. Premium (FMS Delhi, MDI Gurgaon) — ₹12–22L total. Engineering has lower cost for equivalent quality institutions.",
  },
  {
    question: "Which entrance exam is harder — JEE Main or CAT?",
    answer: "CAT is significantly harder than JEE Main. CAT tests advanced quantitative aptitude, verbal reasoning, and data interpretation at a high level — 99+ percentile needed for IIMs. JEE Main tests 11th–12th PCM syllabus and is considered moderate difficulty. For Delhi college admissions, JEE Main (for engineering) is more commonly cleared than CAT. However, MAT and CMAT (for MBA) are easier than both.",
  },
  {
    question: "Which Delhi stream has better placement — Engineering or MBA?",
    answer: "MBA colleges in Delhi have higher absolute placement packages (FMS Delhi at ₹28 LPA avg), but engineering colleges have broader employment (more graduates placed overall). For the best engineering placement in Delhi: DTU Delhi (₹12 LPA avg), IIIT Delhi (₹8.5 LPA). For MBA: FMS Delhi (₹28 LPA), MDI Gurgaon (₹22 LPA). Top MBA salaries are higher, but you need a prior degree + MBA exam to qualify.",
  },
  {
    question: "Is Delhi good for both engineering and MBA students?",
    answer: "Yes — Delhi is Delhi's education and industrial capital, making it ideal for both streams. For engineering students: Delhi has 300+ manufacturing companies (Bajaj, Tata Motors, Mercedes-Benz), 150+ IT firms, and strong campus recruitment. For MBA students: Delhi has BFSI companies (HDFC, ICICI, Citi), consulting offices (McKinsey, BCG, Deloitte), FMCG firms (P&G, HUL, Marico), and a thriving startup ecosystem.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Engineering vs MBA Delhi", url: "/delhi-colleges-comparison-engineering-mba" },
]

export default function DELHICollegesComparisonPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/colleges" className="hover:text-white">Colleges</Link>
              <span>›</span>
              <span className="text-white">Engineering vs MBA Delhi</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Engineering vs MBA in Delhi 2026 — Fees, Rankings & Career Comparison
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Side-by-side comparison of engineering (B.Tech) and MBA colleges in Delhi — fees, entrance exams, average salaries, top recruiters, and career paths. Make the right choice for 2026.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">⚡ Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>Choose Engineering</strong> if you&apos;re in 12th grade with PCM — DTU Delhi (₹5L fees, ₹12 LPA avg) gives best value. <strong>Choose MBA</strong> if you have a degree and want fast management growth — FMS Delhi (₹28 LPA avg) or IMI Delhi (₹12 LPA avg, better ROI). <strong>Best path</strong>: B.Tech at DTU Delhi/NSUT → 2 years work → MBA at FMS Delhi/IMI Delhi = maximum long-term salary.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Main Comparison Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Engineering vs MBA — Complete Comparison 2026</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left bg-gray-50 text-gray-600 font-semibold">Parameter</th>
                    <th className="px-4 py-3 text-center bg-blue-600 text-white font-bold">Engineering (B.Tech)</th>
                    <th className="px-4 py-3 text-center bg-red-600 text-white font-bold">MBA / PGDM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparison.map((row) => (
                    <tr key={row.param} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700 text-sm">{row.param}</td>
                      <td className="px-4 py-3 text-center text-sm text-blue-800 bg-blue-50/30">{row.engineering}</td>
                      <td className="px-4 py-3 text-center text-sm text-orange-800 bg-red-50/30">{row.mba}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side-by-Side Colleges */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Top 5 Engineering vs Top 5 MBA colleges in Delhi</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Engineering */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-blue-600 text-white">
                <h3 className="font-bold text-sm">🏛️ Top Engineering Colleges Delhi 2026</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {topEngineeringColleges.map((c) => (
                  <div key={c.name} className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{c.rank}</span>
                      <span className="font-semibold text-gray-900 text-sm">{c.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 ml-7 text-xs text-gray-500">
                      <span>Fees: <span className="text-blue-700 font-medium">{c.fees}</span></span>
                      <span>Avg: <span className="text-green-700 font-medium">{c.placement}</span></span>
                    </div>
                  </div>
                ))}
              </div>
    </div>
        </div>
        </div>
        </div>
  </>
)
}