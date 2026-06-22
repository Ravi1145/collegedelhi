import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "MAIT vs MSIT Delhi 2026 — Fees, Placements, IPU CET Cutoff",
  description: "MAIT (Maharaja Agrasen Institute of Technology) vs MSIT (Maharaja Surajmal Institute of Technology) Delhi 2026: IPU CET cutoff, fees, CSE placements, hostel",
  path: "/mait-vs-msit",
  keywords: ["MAIT vs MSIT","MAIT Delhi vs MSIT Delhi 2026","MAIT MSIT comparison","IPU CET cutoff MAIT MSIT","MSIT vs MAIT placements","which is better MAIT or MSIT Delhi engineering"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Maharaja Agrasen Institute of Technology",
    "b": "Maharaja Surajmal Institute of Technology"
  },
  {
    "param": "Established",
    "a": "1999",
    "b": "2000"
  },
  {
    "param": "Affiliation",
    "a": "GGSIPU (IP University)",
    "b": "GGSIPU (IP University)"
  },
  {
    "param": "NAAC Grade",
    "a": "A",
    "b": "A"
  },
  {
    "param": "NBA Accreditation",
    "a": "Yes (CSE, ECE, IT)",
    "b": "Yes (CSE, ECE, IT)"
  },
  {
    "param": "Admission",
    "a": "IPU CET → JEE Main merit",
    "b": "IPU CET → JEE Main merit"
  },
  {
    "param": "Annual Fees (B.Tech)",
    "a": "₹1.2L–1.5L/yr",
    "b": "₹1.2L–1.5L/yr"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹7–9 LPA",
    "b": "₹6–8 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹35 LPA",
    "b": "₹28 LPA"
  },
  {
    "param": "Campus Location",
    "a": "Rohini (Sector 22), North Delhi",
    "b": "Janakpuri, West Delhi"
  },
  {
    "param": "Campus Size",
    "a": "15 acres",
    "b": "8 acres"
  },
  {
    "param": "Hostel",
    "a": "Yes (limited)",
    "b": "Yes (limited)"
  },
  {
    "param": "Top Recruiters",
    "a": "TCS, Infosys, Wipro, Amazon, Flipkart",
    "b": "TCS, Infosys, HCL, Wipro, Byju's"
  }
]

const faqs = [
  {
    "question": "Is MAIT better than MSIT for engineering in Delhi?",
    "answer": "MAIT is slightly better — higher highest package (₹35 LPA vs ₹28 LPA), larger campus, marginally better placement percentages. However, both are NAAC A-grade, NBA-accredited IP University colleges with identical fees (~₹1.2–1.5L/yr) and very similar placements. If location doesn't matter, MAIT has the edge. If Janakpuri/West Delhi is more convenient, MSIT is a very comparable choice."
  },
  {
    "question": "What is the IPU CET cutoff for MAIT and MSIT?",
    "answer": "MAIT CSE requires approximately JEE Main 90+ percentile equivalent in IPU CET (General, Delhi quota). MSIT CSE requires approximately 88–90+ percentile. Both follow the GGSIPU JAC counselling process. Exact cutoffs vary yearly — check the official IPU CET counselling cutoff list at ipu.ac.in. ECE/IT branches have cutoffs 3–8 percentile lower than CSE at both colleges."
  },
  {
    "question": "Should I choose MAIT or MSIT for a tech career?",
    "answer": "Both prepare you equally well for tech careers — TCS, Infosys, Wipro mass recruit from both; Amazon and Flipkart selective-recruit from both. The average package gap (₹7–9 LPA vs ₹6–8 LPA) is small and depends more on your skills than the college. Choose based on which campus you can reach more easily for 4 years — that daily commute and campus life matters more than the marginal placement difference at this tier."
  },
  {
    "question": "Are MAIT and MSIT good IP University colleges?",
    "answer": "Yes — both are among the top 5 private engineering colleges under GGSIPU. The IP University tier for private colleges goes: MSIT/MAIT/IGDTUW (govt) → BPIT, ABES → BVP, JIMS Engineering → others. Getting CSE at MAIT or MSIT puts you in IP University's top tier of private colleges, comparable to NSUT/DTU for students who don't qualify JAC Delhi cutoffs."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "MAIT Delhi vs MSIT Delhi", url: "/mait-vs-msit" },
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
            <span className="text-white">MAIT Delhi vs MSIT Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">MAIT Delhi vs MSIT Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">MAIT (Maharaja Agrasen Institute of Technology) vs MSIT (Maharaja Surajmal Institute of Technology) Delhi 2026: IPU CET cutoff, fees, CSE placements, hostel, NAAC grade. Detailed comparison.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">MAIT has a slight edge over MSIT — marginally higher placements (₹7–9 LPA vs ₹6–8 LPA), higher highest package (₹35 LPA vs ₹28 LPA), and a larger campus (Rohini, 15 acres). However, both are IP University–affiliated private colleges with nearly identical fees, NAAC A grade, and NBA-accredited programs. The difference is small — location matters more (Rohini vs Janakpuri).</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MAIT Delhi vs MSIT Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">MAIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">MSIT Delhi</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MAIT Delhi vs MSIT Delhi — IPU CET / JEE Main Cutoff Comparison 2025</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">MAIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">MSIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CSE (General, Delhi)","a":"JEE Main 90+ percentile (IPU)","b":"JEE Main 88–90+ percentile (IPU)","edge":"Similar (MAIT slightly higher)"},{"cat":"ECE (General)","a":"JEE Main 82+ percentile","b":"JEE Main 80+ percentile","edge":"Similar"},{"cat":"IT Branch","a":"JEE Main 88+ percentile","b":"JEE Main 85+ percentile","edge":"Similar"},{"cat":"Annual Fees","a":"₹1.2–1.5L/yr","b":"₹1.2–1.5L/yr","edge":"Equal"},{"cat":"Average Placement","a":"₹7–9 LPA","b":"₹6–8 LPA","edge":"MAIT (marginal)"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">MAIT Delhi vs MSIT Delhi — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "MAIT Delhi", stats: [{"label":"Average Package","value":"₹7–9 LPA"},{"label":"Highest Package","value":"₹35 LPA"},{"label":"Top Recruiter","value":"Amazon, Flipkart, Infosys"},{"label":"% Placed (CSE)","value":"~85%"},{"label":"Mass Recruiters","value":"TCS, Wipro, HCL"}] },
            { college: "MSIT Delhi", stats: [{"label":"Average Package","value":"₹6–8 LPA"},{"label":"Highest Package","value":"₹28 LPA"},{"label":"Top Recruiter","value":"TCS, HCL, Infosys, Byju's"},{"label":"% Placed (CSE)","value":"~82%"},{"label":"Mass Recruiters","value":"TCS, Wipro, Cognizant"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose MAIT Delhi vs MSIT Delhi</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose MAIT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE Main percentile is 90+ for CSE and you prefer the Rohini/North Delhi area</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a slightly larger campus (15 acres vs 8 acres at MSIT)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the marginally better placement track (₹35 LPA highest vs ₹28 LPA at MSIT)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want Amazon or Flipkart as target companies — they recruit more at MAIT</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose MSIT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer Janakpuri/West Delhi location — more accessible via Blue Line metro</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE Main percentile is 85–89 — MSIT CSE may be more accessible</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You have family or preferred hostel in West Delhi area</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You're specifically targeting HCL, Byju's, or IT services companies with strong MSIT presence</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">MAIT Delhi vs MSIT Delhi — FAQs</h2>
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
          {([{"label":"DTU vs NSUT Comparison","href":"/dtu-vs-nsut"},{"label":"NSUT vs IIIT Delhi","href":"/nsut-vs-iiit-delhi"},{"label":"Engineering Colleges Delhi 2026","href":"/engineering-colleges-delhi"},{"label":"IPU CET Counselling 2026","href":"/ipu-colleges-delhi"},{"label":"MAIT Admission 2026","href":"/colleges/mait-delhi"},{"label":"MSIT Admission 2026","href":"/colleges/msit-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">MAIT or MSIT — which is right for your IPU CET rank?</p>
            <p className="text-blue-200 text-sm">Our counsellors know the exact IPU cutoffs and can predict your best college option.</p>
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
