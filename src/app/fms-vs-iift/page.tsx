import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "FMS Delhi vs IIFT Delhi 2026",
  description: "FMS Delhi vs IIFT Delhi 2026 MBA comparison: fees (₹20K vs ₹15L), CAT vs IIFT exam, average placement (₹27 LPA vs ₹24 LPA), specialisations, campus",
  path: "/fms-vs-iift",
  keywords: ["FMS vs IIFT","FMS Delhi vs IIFT Delhi 2026","FMS IIFT comparison","FMS Delhi fees vs IIFT","IIFT vs FMS placements","which is better FMS or IIFT for MBA"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Faculty of Management Studies, DU",
    "b": "Indian Institute of Foreign Trade"
  },
  {
    "param": "Program",
    "a": "MBA (2 years)",
    "b": "MBA (International Business) — 2 yrs"
  },
  {
    "param": "Established",
    "a": "1954",
    "b": "1963"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#4 (Management)",
    "b": "#23 (Management)"
  },
  {
    "param": "Admission Exam",
    "a": "CAT (99+ percentile)",
    "b": "IIFT Entrance Test / CAT"
  },
  {
    "param": "Annual Fees",
    "a": "~₹27.5K total (₹55K for 2 yrs)",
    "b": "₹15L total"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹27 LPA",
    "b": "₹24 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹72 LPA",
    "b": "₹60 LPA"
  },
  {
    "param": "Specialisation",
    "a": "General MBA (Finance, Marketing, HR)",
    "b": "International Business (Trade, Forex, Logistics)"
  },
  {
    "param": "Batch Size",
    "a": "~235 students",
    "b": "~500 students (Delhi + Kolkata)"
  },
  {
    "param": "Campus",
    "a": "Delhi University, North Campus",
    "b": "Vasant Kunj, South Delhi (new campus)"
  },
  {
    "param": "Hostel",
    "a": "Limited DU hostel",
    "b": "On-campus hostel available"
  },
  {
    "param": "Top Recruiters",
    "a": "Mckinsey, Bain, BCG, Goldman Sachs",
    "b": "HSBC, ICICI, Deloitte, Amazon, ITC"
  }
]

const faqs = [
  {
    "question": "Is FMS Delhi better than IIFT?",
    "answer": "Yes, overall FMS Delhi is better — NIRF #4 vs IIFT #23, ₹27 LPA avg vs ₹24 LPA, and legendary ROI (₹55K total fees). But FMS is harder to get into (99+ CAT vs 95+ IIFT). If you want International Business as a specialisation, IIFT is actually the better choice — it's Asia's #1 in International Business and no other Indian MBA college matches its depth in global trade."
  },
  {
    "question": "What is the CAT cutoff for FMS and IIFT?",
    "answer": "FMS Delhi: 99+ percentile CAT (General, for a shortlist). Actual call typically goes to 99.5+ for top students with good academics and work experience. IIFT: either 95+ percentile on IIFT's own entrance exam, or 98+ CAT percentile. IIFT's own exam covers English, GK, Quant, and Reasoning — a different format from CAT."
  },
  {
    "question": "Which has better placements — FMS or IIFT?",
    "answer": "FMS has higher placements: ₹27 LPA average vs IIFT's ₹24 LPA, highest ₹72 LPA vs ₹60 LPA. FMS attracts McKinsey, BCG, Bain, Goldman Sachs. IIFT attracts HSBC, ITC, Amazon, Deloitte, and international trade companies. If you want consulting or investment banking, FMS leads. If you want international trade, supply chain, or global business roles, IIFT is the market leader."
  },
  {
    "question": "Is IIFT Delhi worth it if I don't get FMS?",
    "answer": "Absolutely yes. IIFT Delhi is a NIRF #23 ranked management institute with ₹24 LPA average placements and a highly specialised International Business program. The ROI is strong despite ₹15L fees — payback in under 1 year for most graduates. IIFT alumni dominate international trade, EXIM, forex, and global MNC roles in ways no other Indian MBA does."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "FMS Delhi vs IIFT Delhi", url: "/fms-vs-iift" },
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
            <span className="text-white">FMS Delhi vs IIFT Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">FMS Delhi vs IIFT Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">FMS Delhi vs IIFT Delhi 2026 MBA comparison: fees (₹20K vs ₹15L), CAT vs IIFT exam, average placement (₹27 LPA vs ₹24 LPA), specialisations, campus. Honest verdict for MBA aspirants.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">FMS Delhi wins overall — NIRF #4 vs IIFT #23, higher average placement (₹27 LPA vs ₹24 LPA), and India's best ROI (total fees ₹55K vs ₹15L at IIFT). However, FMS requires 99+ CAT percentile — the hardest cut in India. IIFT is the right choice if your CAT score is 95–98 percentile, or if you want to specialise in International Business, Forex, and Global Trade (where IIFT is unmatched).</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IIFT Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">FMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">IIFT Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IIFT Delhi — CAT Cutoff & Admission Requirements 2026</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">FMS Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">IIFT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CAT Percentile (General)","a":"99+ percentile","b":"95+ percentile (IIFT exam) or 98+ CAT","edge":"IIFT (more accessible)"},{"cat":"GD-PI Process","a":"Group Discussion + Personal Interview","b":"Group Discussion + Essay + Interview","edge":"Similar"},{"cat":"Work Experience","a":"Preferred but not mandatory","b":"Preferred but not mandatory","edge":"Similar"},{"cat":"Total Fees","a":"₹55K (2 years total)","b":"₹15L (2 years total)","edge":"FMS (275x cheaper)"},{"cat":"ROI (Salary / Fees)","a":"Highest in India","b":"Very good ROI","edge":"FMS (unbeatable ROI)"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IIFT Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "FMS Delhi", stats: [{"label":"Average Package","value":"₹27 LPA"},{"label":"Highest Package","value":"₹72 LPA"},{"label":"% Placed","value":"~100%"},{"label":"Top Sectors","value":"Consulting, BFSI, FMCG"},{"label":"Top Recruiter","value":"McKinsey, BCG, Bain"}] },
            { college: "IIFT Delhi", stats: [{"label":"Average Package","value":"₹24 LPA"},{"label":"Highest Package","value":"₹60 LPA"},{"label":"% Placed","value":"~100%"},{"label":"Top Sectors","value":"International Trade, BFSI, Consulting"},{"label":"Top Recruiter","value":"HSBC, ITC, Amazon, Deloitte"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose FMS Delhi vs IIFT Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose FMS Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 99+ and you want India's best MBA ROI (₹55K fees, ₹27 LPA avg)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want general management — consulting, BFSI, FMCG, strategy roles</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the McKinsey / BCG / Bain consulting track — FMS is heavily targeted by top firms</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want DU brand + central university credibility</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IIFT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your CAT percentile is 95–98 — IIFT is more accessible than FMS</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to specialise in International Business, Export-Import, Forex Management, or Global Supply Chain</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a structured on-campus experience with hostel — IIFT has better residential facilities</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're interested in careers at WTO, EXIM Bank, International Trade departments of MNCs</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FMS Delhi vs IIFT Delhi — FAQs</h2>
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
          {([{"label":"FMS Delhi vs MDI Gurgaon","href":"/fms-delhi-vs-mdi-gurgaon"},{"label":"FMS Delhi vs IIFT — Full Analysis","href":"/fms-delhi-vs-iift-delhi"},{"label":"MBA Colleges Delhi 2026","href":"/mba-colleges-delhi"},{"label":"CAT Score vs College Predictor","href":"/predictor"},{"label":"FMS Admission 2026","href":"/colleges/fms-delhi"},{"label":"IIFT Delhi Admission 2026","href":"/colleges/iift-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Know your CAT score? Find out if you can get FMS or IIFT.</p>
            <p className="text-blue-200 text-sm">Our MBA counsellors will assess your profile and guide your applications.</p>
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
