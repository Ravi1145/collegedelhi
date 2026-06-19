import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "FMS Delhi vs IMI Delhi 2026 — Fees, Placements, CAT Cutoff & Which is Better",
  description: "FMS Delhi vs IMI Delhi 2026 comparison: fees (₹55K vs ₹22L), CAT cutoff (99+ vs 90+), average salary (₹27 LPA vs ₹17 LPA), campus, recruiters. Which MBA is right for your profile?",
  path: "/fms-vs-imi-delhi",
  keywords: ["FMS vs IMI Delhi","FMS Delhi vs IMI Delhi 2026","FMS IMI comparison","FMS Delhi better than IMI","IMI Delhi MBA CAT cutoff","which is better FMS or IMI Delhi MBA"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Faculty of Management Studies, DU",
    "b": "International Management Institute, Delhi"
  },
  {
    "param": "Program",
    "a": "MBA (2 years)",
    "b": "PGDM (2 years)"
  },
  {
    "param": "Established",
    "a": "1954",
    "b": "1981"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#4 (Management)",
    "b": "#48 (Management)"
  },
  {
    "param": "Accreditation",
    "a": "UGC / DU",
    "b": "AMBA, AICTE, NBA"
  },
  {
    "param": "Admission",
    "a": "CAT 99+ percentile",
    "b": "CAT 90+ percentile"
  },
  {
    "param": "Annual Fees",
    "a": "~₹27.5K total (2 yrs)",
    "b": "₹22L total"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹27 LPA",
    "b": "₹17 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹72 LPA",
    "b": "₹42 LPA"
  },
  {
    "param": "Batch Size",
    "a": "~235 students",
    "b": "~250 students"
  },
  {
    "param": "Campus Location",
    "a": "DU North Campus",
    "b": "Qutab Institutional Area, South Delhi"
  },
  {
    "param": "International Exchange",
    "a": "Limited",
    "b": "Strong — 40+ partner universities"
  },
  {
    "param": "Top Recruiters",
    "a": "McKinsey, BCG, Goldman Sachs",
    "b": "Deloitte, KPMG, ICICI, HUL, EY"
  }
]

const faqs = [
  {
    "question": "Should I choose IMI Delhi over FMS if I don't get FMS?",
    "answer": "IMI Delhi is a solid backup for FMS — NIRF #48, ₹17 LPA average salary, AMBA accreditation, and strong BFSI/consulting/FMCG placements. However, the gap is significant: FMS avg is ₹27 LPA vs IMI's ₹17 LPA, and FMS fees are ₹55K vs IMI's ₹22L. If your CAT score is 95–98 (shortlisted for FMS but not selected), consider waiting and re-appearing for CAT vs joining IMI immediately."
  },
  {
    "question": "What CAT percentile do I need for FMS and IMI Delhi?",
    "answer": "FMS Delhi: 99+ CAT percentile for shortlisting. Selection typically requires academics (Class 12 and graduation marks) + work experience + GD-PI performance. IMI Delhi: 90–93+ percentile for PGDM program. IMI also considers XAT, GMAT, and CMAT scores. IMI interviews candidates with 85+ percentile if they have strong academics or significant work experience."
  },
  {
    "question": "Is IMI Delhi a good college for MBA?",
    "answer": "Yes, IMI Delhi is a respectable MBA college — NIRF #48, AMBA accredited, ₹17 LPA average placement, strong Deloitte/KPMG/EY recruiting base, and 40+ international exchange programs. However, it's expensive at ₹22L total. Students should compare IMI with FORE School, LBSIM, and Great Lakes before deciding — all similar-tier colleges with varying fees and placement profiles."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "FMS Delhi vs IMI Delhi", url: "/fms-vs-imi-delhi" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link>
            <span>/</span>
            <span className="text-white">FMS Delhi vs IMI Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">FMS Delhi vs IMI Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">FMS Delhi vs IMI Delhi 2026 comparison: fees (₹55K vs ₹22L), CAT cutoff (99+ vs 90+), average salary (₹27 LPA vs ₹17 LPA), campus, recruiters. Which MBA is right for your profile?</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">FMS Delhi is significantly better by every metric — NIRF #4 vs IMI #48, ₹27 LPA vs ₹17 LPA, and India's most absurd ROI at ₹55K total fees. The only reason to choose IMI Delhi is if your CAT score is 90–95 percentile (where FMS is out of reach) or if you specifically value international exchange programs (IMI has 40+ partner universities). For anyone who can crack FMS (99+ CAT), it's a clear first choice.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IMI Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">FMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row: { param: string; a: string; b: string }, i: number) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.a}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cutoff / Admission Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IMI Delhi — CAT Percentile & Fees Comparison 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">FMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">IMI Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile (General)","a":"99+ percentile","b":"90–93+ percentile","edge":"IMI Delhi (more accessible)"},{"cat":"Total Fees","a":"₹55K (2 years)","b":"₹22L (2 years)","edge":"FMS (400x cheaper)"},{"cat":"Average Salary","a":"₹27 LPA","b":"₹17 LPA","edge":"FMS"},{"cat":"Top Salary","a":"₹72 LPA","b":"₹42 LPA","edge":"FMS"},{"cat":"International Programs","a":"Limited","b":"40+ exchange universities","edge":"IMI Delhi"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
                <tr key={r.cat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-800 text-xs">{r.cat}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.a}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.b}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">{r.edge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Placement Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IMI Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "FMS Delhi", stats: [{"label":"Average Package","value":"₹27 LPA"},{"label":"Highest Package","value":"₹72 LPA"},{"label":"Top Sectors","value":"Consulting, Finance, FMCG"},{"label":"Top Recruiter","value":"McKinsey, BCG, Goldman"},{"label":"% Placed","value":"~100%"}] },
            { college: "IMI Delhi", stats: [{"label":"Average Package","value":"₹17 LPA"},{"label":"Highest Package","value":"₹42 LPA"},{"label":"Top Sectors","value":"BFSI, Consulting, FMCG, IT"},{"label":"Top Recruiter","value":"Deloitte, KPMG, EY, HUL"},{"label":"% Placed","value":"~100%"}] },
          ] as { college: string; stats: { label: string; value: string }[] }[]).map(col => (
            <div key={col.college} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">{col.college} Placements</h3>
              <div className="space-y-2">
                {col.stats.map((s: { label: string; value: string }) => (
                  <div key={s.label} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{s.label}</span>
                    <span className="font-bold text-gray-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* When to Choose */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose FMS Delhi vs IMI Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose FMS Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 99+ — FMS is India's best ROI at ₹55K fees and ₹27 LPA avg</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want consulting / finance / FMCG — McKinsey, BCG, Goldman Sachs recruit from FMS</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a government university degree (MBA from DU) rather than a PGDM</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You don't need an international exchange semester</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IMI Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 90–95 — IMI Delhi is reachable; FMS is not</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want international exchange programs — IMI has 40+ partner universities abroad</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want AMBA-accredited PGDM which is globally recognised like an MBA</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a residential campus experience in South Delhi (Qutab area)</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IMI Delhi — FAQs</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f: { question: string; answer: string }, i: number) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">More Comparisons &amp; Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {([{"label":"FMS Delhi vs MDI Gurgaon","href":"/fms-delhi-vs-mdi-gurgaon"},{"label":"IMI Delhi vs FORE School","href":"/imi-delhi-vs-fore"},{"label":"IMI Delhi vs LBSIM","href":"/imi-delhi-vs-lbsim"},{"label":"MBA Colleges Delhi 2026","href":"/mba-colleges-delhi"},{"label":"IMI Delhi Admission 2026","href":"/colleges/imi-delhi"},{"label":"FMS Delhi Admission 2026","href":"/colleges/fms-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Unsure if you should target FMS or apply to IMI Delhi?</p>
            <p className="text-blue-200 text-sm">Share your CAT score and profile — our MBA counsellors will guide your strategy.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/ai-finder" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">AI College Finder</Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
          </div>
        </div>
      </div>
    </>
  )
}
