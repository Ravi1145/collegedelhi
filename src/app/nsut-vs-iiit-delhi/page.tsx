import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "NSUT vs IIIT Delhi 2026 — Placements, Fees, Cutoff & Which is Better",
  description: "NSUT vs IIIT Delhi 2026 head-to-head: JEE cutoff, fees, CSE/IT placements, research, campus. Which Delhi engineering college is better for CSE and tech careers?",
  path: "/nsut-vs-iiit-delhi",
  keywords: ["NSUT vs IIIT Delhi","NSUT vs IIIT Delhi which is better 2026","NSUT IIIT Delhi comparison","IIIT Delhi vs NSUT placements","IIIT Delhi cutoff vs NSUT cutoff","which is better NSUT or IIIT Delhi"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Netaji Subhas University of Technology",
    "b": "IIIT Delhi (Indraprastha Inst. of IT)"
  },
  {
    "param": "Established",
    "a": "1983 (as NSIT)",
    "b": "2008"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#52 (Engineering)",
    "b": "#60 (Engineering)"
  },
  {
    "param": "Type",
    "a": "Government (Delhi State)",
    "b": "Deemed University (State)"
  },
  {
    "param": "Admission",
    "a": "JEE Main → JAC Delhi",
    "b": "JEE Main → IIIT Delhi portal"
  },
  {
    "param": "Specialisation",
    "a": "Broad engineering (CSE, ECE, ME, Civil)",
    "b": "CS + ECE only (research-focused)"
  },
  {
    "param": "Annual Fees (B.Tech)",
    "a": "₹1.5L–2L/yr",
    "b": "₹3.5L–4L/yr"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹16 LPA",
    "b": "₹18 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹65 LPA",
    "b": "₹60 LPA"
  },
  {
    "param": "Campus",
    "a": "Dwarka (83 acres) + East Campus",
    "b": "Okhla (7 acres, compact urban campus)"
  },
  {
    "param": "Research Focus",
    "a": "Growing — 400+ papers/yr",
    "b": "Very strong — IIIT model built for research"
  },
  {
    "param": "Batch Size (B.Tech)",
    "a": "~1,500/yr",
    "b": "~300/yr (smaller, more selective per seat)"
  },
  {
    "param": "Top Recruiters",
    "a": "Google, Microsoft, Adobe, Qualcomm",
    "b": "Microsoft, Adobe, Samsung R&D, Qualcomm"
  }
]

const faqs = [
  {
    "question": "Is NSUT better than IIIT Delhi?",
    "answer": "For most engineering students focused on campus placements and government college affordability, NSUT is better. NSUT has NIRF #52 vs IIIT Delhi #60, lower fees (₹1.5–2L/yr vs ₹3.5–4L/yr), a larger campus, and more branch options. However, IIIT Delhi has better research output, stronger MS/PhD programs, and slightly higher average placements (₹18 LPA vs ₹16 LPA) for a much smaller batch — making per-student research opportunities better at IIIT Delhi."
  },
  {
    "question": "What is the JEE cutoff for NSUT vs IIIT Delhi for CSE?",
    "answer": "NSUT CSE requires 98.8+ percentile via JAC Delhi (General category). IIIT Delhi CSE requires approximately 97.5+ percentile via the IIIT Delhi portal (separate from JAC). The cutoff gap is ~1.3 percentile — students who get NSUT CSE could typically get IIIT Delhi CSE as well. For ECE, the gap is larger: NSUT ECE ~97.5+ vs IIIT Delhi ECE ~93+."
  },
  {
    "question": "Which has better placements — NSUT or IIIT Delhi?",
    "answer": "IIIT Delhi has a marginally higher average (₹18 LPA) vs NSUT's ₹16 LPA, but NSUT has a much larger batch (~1,500/yr vs ~300/yr at IIIT Delhi). Both see Google, Microsoft, Adobe, and Qualcomm recruiting. IIIT Delhi's smaller batch means more elite company offers per student in percentage terms, but NSUT's absolute placement numbers are larger. For research placements (Samsung R&D, Qualcomm Research), IIIT Delhi leads."
  },
  {
    "question": "Which Delhi college is better for CSE — NSUT or IIIT Delhi?",
    "answer": "For a placement-focused CSE career: NSUT wins (lower fees, larger peer group, government college credibility). For research-focused CSE (publications, MS/PhD, faculty interaction): IIIT Delhi wins. The JEE percentile required for NSUT CSE is slightly higher (~98.8+) than IIIT Delhi CSE (~97.5+), meaning students who get NSUT often have IIIT Delhi as a backup — choose based on your career goal, not just cutoff."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "NSUT vs IIIT Delhi", url: "/nsut-vs-iiit-delhi" },
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
            <span className="text-white">NSUT vs IIIT Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">NSUT vs IIIT Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">NSUT vs IIIT Delhi 2026 head-to-head: JEE cutoff, fees, CSE/IT placements, research, campus. Which Delhi engineering college is better for CSE and tech careers?</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">NSUT wins for most B.Tech students — larger batch, government college fees (₹1.5–2L/yr vs IIIT Delhi's ₹3.5–4L/yr), slightly better average placement coverage, and a wider branch ecosystem. IIIT Delhi wins if you want research, an MS abroad, or a focused CS/ECE environment with smaller classes. For pure placement-focused tech careers at Government college fees, NSUT is the better value.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">NSUT vs IIIT Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">NSUT</th>
                <th className="px-4 py-3 text-center font-semibold">IIIT Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">NSUT vs IIIT Delhi — JEE Main Cutoff 2025 — NSUT (JAC Delhi) vs IIIT Delhi</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">NSUT</th>
                <th className="px-4 py-3 text-center font-semibold">IIIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CSE (General)","a":"JEE Main 98.8+ percentile (JAC)","b":"JEE Main 97.5+ percentile (IIIT portal)","edge":"NSUT (slightly higher cutoff = more demand)"},{"cat":"ECE (General)","a":"97.5+ percentile","b":"93+ percentile","edge":"NSUT (higher demand)"},{"cat":"AI / Data Science","a":"98.5+ percentile","b":"95+ percentile","edge":"NSUT"},{"cat":"IT / ICT","a":"98+ percentile","b":"N/A (no IT program)","edge":"NSUT"},{"cat":"Research / PhD track","a":"Limited PhD intake","b":"Strong MS/PhD programs","edge":"IIIT Delhi"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">NSUT vs IIIT Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "NSUT", stats: [{"label":"Average Package","value":"₹16 LPA"},{"label":"Highest Package","value":"₹65 LPA"},{"label":"Companies Visiting","value":"400+"},{"label":"% Placed (CSE)","value":"~93%"},{"label":"Top Recruiter","value":"Microsoft, Adobe"}] },
            { college: "IIIT Delhi", stats: [{"label":"Average Package","value":"₹18 LPA"},{"label":"Highest Package","value":"₹60 LPA"},{"label":"% Placed (CSE)","value":"~90%"},{"label":"Top Recruiter","value":"Samsung R&D, Adobe, Qualcomm"},{"label":"Research Placements","value":"Strong (MS abroad, PhD)"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose NSUT vs IIIT Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose NSUT if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want government college fees (₹1.5–2L/yr vs ₹3.5L+ at IIIT Delhi)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want broader branch options beyond CS/ECE (ME, Civil, ICT, AI/DS at NSUT)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer a larger campus (Dwarka) with more extracurriculars and hostel space</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE Main percentile is 98–99+ and you're targeting multiple college options</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IIIT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to pursue research — IIIT Delhi is built as a research institute with funded MS/PhD</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You plan to do MS abroad — IIIT Delhi's research environment and faculty connections help</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer smaller classes (IIIT Delhi 300/yr vs NSUT 1,500/yr) with more faculty attention</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE Main percentile is 93–97 for CS — IIIT Delhi may be more accessible than NSUT CSE</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">NSUT vs IIIT Delhi — FAQs</h2>
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
          {([{"label":"DTU vs NSUT Comparison","href":"/dtu-vs-nsut"},{"label":"DTU vs IIIT Delhi","href":"/dtu-vs-iiit-delhi"},{"label":"Engineering Colleges Delhi 2026","href":"/engineering-colleges-delhi"},{"label":"NSUT Admission 2026","href":"/colleges/nsut-delhi"},{"label":"IIIT Delhi Admission 2026","href":"/colleges/iiit-delhi"},{"label":"JAC Delhi 2026 Counselling","href":"/jac-delhi-counselling"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Confused between NSUT and IIIT Delhi for your JEE rank?</p>
            <p className="text-blue-200 text-sm">Our counsellors know the exact cutoffs and can predict your chances at both colleges.</p>
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
