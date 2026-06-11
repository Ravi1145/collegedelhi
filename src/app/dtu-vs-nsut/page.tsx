import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "DTU vs NSUT 2026 — Which is Better? Placements, Fees, Cutoff",
  description: "DTU vs NSUT detailed comparison 2026: NIRF rank, JEE Main cutoff, branch-wise placements, fees, hostel, campus size. Which is better for CSE, ECE, Mechanical? Honest verdict.",
  path: "/dtu-vs-nsut",
  keywords: [
    "DTU vs NSUT",
    "DTU vs NSUT which is better 2026",
    "DTU NSUT comparison",
    "Delhi Technological University vs Netaji Subhas University of Technology",
    "DTU vs NSUT placements",
    "DTU vs NSUT cutoff",
    "DTU vs NSUT fees",
    "DTU vs NSUT for CSE",
    "JAC Delhi DTU NSUT",
    "which is better DTU or NSUT",
  ],
})
export const revalidate = 300

const compData = [
  { param: "Full Name", dtu: "Delhi Technological University", nsut: "Netaji Subhas University of Technology" },
  { param: "Established", dtu: "1941 (as DCE)", nsut: "1983 (as NSIT)" },
  { param: "NIRF 2024 Rank", dtu: "#49 (Engineering)", nsut: "#52 (Engineering)" },
  { param: "NAAC Grade", dtu: "A+", nsut: "A+" },
  { param: "Type", dtu: "Government (Delhi State)", nsut: "Government (Delhi State)" },
  { param: "Admission Exam", dtu: "JEE Main → JAC Delhi", nsut: "JEE Main → JAC Delhi" },
  { param: "CSE Cutoff (General)", dtu: "99.2+ percentile", nsut: "98.8+ percentile" },
  { param: "Annual Fees (B.Tech)", dtu: "₹1.5L–2L/yr", nsut: "₹1.5L–2L/yr" },
  { param: "Avg Placement (2024)", dtu: "₹18 LPA", nsut: "₹16 LPA" },
  { param: "Highest Package (2024)", dtu: "₹72 LPA", nsut: "₹65 LPA" },
  { param: "Top Recruiters", dtu: "Google, Amazon, Microsoft, Goldman Sachs", nsut: "Google, Microsoft, Adobe, Qualcomm" },
  { param: "Campus Size", dtu: "164 acres (Rohini)", nsut: "83 acres (Dwarka) + East Campus (Geeta Colony)" },
  { param: "Hostels", dtu: "7 hostels (2,500+ seats)", nsut: "5 hostels (1,800+ seats)" },
  { param: "Total Students", dtu: "~7,000", nsut: "~6,500" },
  { param: "PhD Programs", dtu: "Yes — strong research output", nsut: "Yes — growing research" },
]

const faqs = [
  { question: "Is DTU better than NSUT?", answer: "DTU is marginally better overall: NIRF #49 vs NSUT's #52, higher average placement (₹18 LPA vs ₹16 LPA), larger campus (164 vs 83 acres), and more hostels. However, for computer science specifically, both are nearly equivalent. NSUT Dwarka has a newer, more modern campus. The JEE cutoff gap between them is small — about 0.3-0.5 percentile for CSE." },
  { question: "What is the JEE Main cutoff for DTU and NSUT CSE in 2026?", answer: "DTU CSE typically requires 99.2+ percentile (General, JAC Delhi Round 1). NSUT CSE requires 98.8+ percentile. These cutoffs have been rising 0.1-0.2 percentile each year. OBC-NCL: DTU CSE 97+, NSUT CSE 96.5+. SC: DTU CSE 92+, NSUT CSE 91+. For non-CS branches (ECE, Mechanical, Civil), cutoffs are 2-4 percentile lower." },
  { question: "Which college is better for placements — DTU or NSUT?", answer: "DTU has higher average placements at ₹18 LPA (2024) vs NSUT's ₹16 LPA. DTU's highest package was ₹72 LPA vs NSUT's ₹65 LPA. Both colleges see Google, Microsoft, and Amazon recruiting from campus. DTU has a slight edge due to its longer reputation (formerly DCE) and slightly better alumni network density in top tech firms." },
  { question: "What branches are offered at DTU vs NSUT?", answer: "DTU offers: CSE, IT, ECE, EE, ME, Civil, Production & Industrial Engg, Software Engg, Environmental Engg, Bio-Technology, and Mathematics & Computing. NSUT offers: CSE, IT, ECE, EE, Mechanical, Civil, ICT, BT (Biotechnology), and newer programs like Artificial Intelligence and Data Science. NSUT has recently added AI/DS branches which are gaining popularity." },
  { question: "Which campus is better — DTU Rohini or NSUT Dwarka?", answer: "Both campuses are excellent government engineering colleges. DTU's Rohini campus is older (more established, 164 acres) and has more greenery and space. NSUT's Dwarka campus is newer (built post-2000) with more modern infrastructure and facilities. NSUT is accessible from Dwarka metro (Blue Line), while DTU is accessible from Rohini metro stations (Red Line). Campus preference is subjective — both are high quality." },
  { question: "Should I choose DTU or NSUT if I get both?", answer: "If you get CSE at both: Choose DTU — marginally higher placements, stronger brand recognition, and NIRF ranking advantage. If you get a branch you prefer only at NSUT: Take NSUT for your preferred branch over DTU for a weaker branch. Branch matters more than college at this tier — a CS graduate from NSUT earns more than a Civil graduate from DTU. If you get non-CS at DTU vs non-CS at NSUT: DTU still has the edge due to overall placement culture." },
]

export default function DTUvsNSUTPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "DTU vs NSUT", url: "/dtu-vs-nsut" },
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
            <span className="text-white">DTU vs NSUT</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">DTU vs NSUT 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            A head-to-head comparison of Delhi Technological University (DTU) and Netaji Subhas University of Technology (NSUT) on placements, JEE cutoffs, fees, campus, and more.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict — for AI Overviews */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800"><strong>DTU wins overall</strong>: NIRF #49 vs NSUT #52, ₹18 LPA vs ₹16 LPA average placement, larger campus. However, the gap is small. If you get a preferred branch at NSUT, it can be a better choice than a non-preferred branch at DTU. Both are equally good government engineering colleges with JEE Main admission.</p>
        </div>

        {/* Head-to-head table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">DTU vs NSUT — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">DTU</th>
                <th className="px-4 py-3 text-center font-semibold">NSUT</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.dtu}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.nsut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Branch-wise Cutoff */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">DTU vs NSUT — JEE Main Cutoff by Branch (2025, JAC Delhi)</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Branch</th>
                <th className="px-4 py-3 text-center font-semibold">DTU (General)</th>
                <th className="px-4 py-3 text-center font-semibold">NSUT (General)</th>
                <th className="px-4 py-3 text-center font-semibold">Winner</th>
              </tr>
            </thead>
            <tbody>
              {[
                { branch: "CSE / IT", dtu: "99.2+", nsut: "98.8+", winner: "DTU (higher brand)" },
                { branch: "ECE / Electronics", dtu: "98+", nsut: "97.5+", winner: "DTU" },
                { branch: "Mechanical Engg.", dtu: "95+", nsut: "94.5+", winner: "Similar" },
                { branch: "Civil Engineering", dtu: "92+", nsut: "91.5+", winner: "Similar" },
                { branch: "AI / Data Science", dtu: "99.4+", nsut: "98.5+", winner: "NSUT (newer program)" },
              ].map((r, i) => (
                <tr key={r.branch} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-800 text-xs">{r.branch}</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.dtu} percentile</td>
                  <td className="px-4 py-3 text-center text-gray-700 text-xs">{r.nsut} percentile</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">{r.winner}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">* Based on 2025 JAC Delhi data. 2026 cutoffs will be updated after JEE Main results.</p>

        {/* Placement comparison */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">DTU vs NSUT — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { college: "DTU", stats: [
              { label: "Average Package", value: "₹18 LPA" },
              { label: "Highest Package", value: "₹72 LPA" },
              { label: "Companies Visiting", value: "500+" },
              { label: "% Placed (CSE)", value: "~95%" },
              { label: "Top Recruiter", value: "Google" },
            ]},
            { college: "NSUT", stats: [
              { label: "Average Package", value: "₹16 LPA" },
              { label: "Highest Package", value: "₹65 LPA" },
              { label: "Companies Visiting", value: "400+" },
              { label: "% Placed (CSE)", value: "~93%" },
              { label: "Top Recruiter", value: "Microsoft" },
            ]},
          ].map(col => (
            <div key={col.college} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">{col.college} Placements</h3>
              <div className="space-y-2">
                {col.stats.map(s => (
                  <div key={s.label} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{s.label}</span>
                    <span className="font-bold text-gray-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed verdict */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose DTU vs NSUT</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose DTU if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the stronger alumni network (DTU/DCE alumni are in senior roles at Google, Amazon, Flipkart)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE rank is good for CSE at both — take DTU for the marginal placement edge</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want more research opportunities (DTU has more PhD students and research papers)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer Rohini location (Red Line metro)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose NSUT if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You get a preferred branch at NSUT but only a weaker branch at DTU</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer Dwarka campus (newer, Blue Line metro, near Indira Gandhi Airport)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to pursue AI/DS — NSUT's newer programs in these areas are strong</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Family in West/Southwest Delhi — Dwarka campus is more convenient</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">DTU vs NSUT — FAQs</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        {/* Related */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">More Comparisons & Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Engineering Colleges Delhi — Full List", href: "/engineering-colleges-delhi" },
            { label: "JEE Main College Predictor Delhi", href: "/predictor" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "DTU Admission 2026", href: "/colleges/delhi-technological-university-dtu" },
            { label: "NSUT Admission 2026", href: "/colleges/nsut-netaji-subhas-university-of-technology" },
            { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Not sure which to choose based on your JEE rank?</p>
            <p className="text-blue-200 text-sm">Use our free predictor or talk to a counsellor who knows DTU and NSUT inside out.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">
              JEE Predictor
            </Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap">
              Free Counselling
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
