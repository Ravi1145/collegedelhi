import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "IIT Delhi vs DTU 2026 — Placements, JEE Cutoff, Fees",
  description: "IIT Delhi vs DTU (Delhi Technological University) 2026: JEE cutoff, branch-wise placement, fees, campus life, research output",
  path: "/iit-delhi-vs-dtu",
  keywords: ["IIT Delhi vs DTU","IIT Delhi vs DTU which is better 2026","IIT Delhi DTU comparison","JEE cutoff IIT Delhi DTU","IIT Delhi placements vs DTU placements","which is better IIT Delhi or DTU"],
})
export const revalidate = 86400

const compData = [
  {
    "param": "Full Name",
    "a": "Indian Institute of Technology Delhi",
    "b": "Delhi Technological University"
  },
  {
    "param": "Established",
    "a": "1961",
    "b": "1941 (as DCE)"
  },
  {
    "param": "NIRF 2024 Rank",
    "a": "#2 (Overall), #2 (Engineering)",
    "b": "#49 (Engineering)"
  },
  {
    "param": "Type",
    "a": "Central Institute (IIT)",
    "b": "Government (Delhi State)"
  },
  {
    "param": "Admission",
    "a": "JEE Advanced (top ~250 AIR for CSE)",
    "b": "JEE Main → JAC Delhi (99.2+ for CSE)"
  },
  {
    "param": "Annual Fees (B.Tech)",
    "a": "₹2.2L/yr",
    "b": "₹1.5L–2L/yr"
  },
  {
    "param": "Avg Placement (2024)",
    "a": "₹30+ LPA",
    "b": "₹18 LPA"
  },
  {
    "param": "Highest Package",
    "a": "₹2.4 crore (international)",
    "b": "₹72 LPA"
  },
  {
    "param": "Campus Size",
    "a": "325 acres (South Delhi)",
    "b": "164 acres (Rohini)"
  },
  {
    "param": "Hostels",
    "a": "12 hostels (all residential)",
    "b": "7 hostels (2,500+ seats)"
  },
  {
    "param": "PhD / Research",
    "a": "India's top research output",
    "b": "Growing research, 500+ publications/yr"
  },
  {
    "param": "International Ranking",
    "a": "QS World #197 (2024)",
    "b": "Not ranked internationally"
  },
  {
    "param": "Alumni Network",
    "a": "India's strongest tech alumni",
    "b": "Strong Delhi NCR alumni network"
  }
]

const faqs = [
  {
    "question": "Is DTU equivalent to IIT Delhi?",
    "answer": "No — IIT Delhi is significantly higher ranked (NIRF #2 vs DTU #49). IIT Delhi requires JEE Advanced while DTU requires JEE Main. Average placements at IIT Delhi (~₹30 LPA) are nearly double DTU's (~₹18 LPA). IIT Delhi is globally ranked (QS #197) while DTU is not. However, DTU is still an excellent college — it's Delhi's best state engineering college and JEE Main 99.2+ for CSE."
  },
  {
    "question": "What JEE rank is needed for IIT Delhi CSE vs DTU CSE?",
    "answer": "IIT Delhi CSE requires JEE Advanced top ~250 AIR (General category, Home State — Delhi quota may vary). DTU CSE requires JEE Main 99.2+ percentile and a JAC Delhi rank of approximately 1000–1500 (General, Delhi quota). The admission processes are entirely different — JEE Advanced is a separate exam after qualifying JEE Main, making IIT Delhi accessible only to JEE Main top ~2.5% scorers."
  },
  {
    "question": "Which has better placements — IIT Delhi or DTU?",
    "answer": "IIT Delhi has significantly better placements. Average package: IIT Delhi ₹30+ LPA, DTU ₹18 LPA. Highest package: IIT Delhi ₹2.4 crore (international), DTU ₹72 LPA. International offers: IIT Delhi 200+ annually (USA, Japan, Singapore), DTU 30–50. Top recruiters overlap (Google, Microsoft) but IIT Delhi also attracts Goldman Sachs, McKinsey, Jane Street, and top-tier international companies."
  },
  {
    "question": "Should I choose DTU CSE or IIT Delhi Mechanical?",
    "answer": "This is a common dilemma. Branch matters significantly — a DTU CSE graduate typically earns more in the first 5 years than an IIT Delhi Mechanical graduate (due to higher tech salaries). However, for long-term career growth, research opportunities, and MBA applications, IIT Delhi brand adds significant value. If career goal is high-paying tech jobs immediately, DTU CSE can outperform IIT Delhi Mechanical. For research, core engineering, or management consulting, IIT Delhi any branch wins."
  },
  {
    "question": "Is IIT Delhi worth it over DTU for the same branch?",
    "answer": "Yes, if you're comparing the same branch: IIT Delhi provides ~65% higher average packages, international placement opportunities, global alumni network (IIT Delhi alumni at Microsoft, Google, Facebook US offices), stronger research credentials for MS/PhD abroad, and the IIT brand for MBA (IIM interview calls correlate with JEE rank/institute). The effort to get JEE Advanced rank for IIT Delhi pays off significantly over a career lifetime."
  }
]

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: "IIT Delhi vs DTU", url: "/iit-delhi-vs-dtu" },
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
            <span className="text-white">IIT Delhi vs DTU</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">IIT Delhi vs DTU 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">IIT Delhi vs DTU (Delhi Technological University) 2026: JEE cutoff, branch-wise placement, fees, campus life, research output. Which college is right for your JEE rank?</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">IIT Delhi wins comprehensively — NIRF #2, avg ₹30+ LPA vs DTU's ₹18 LPA, QS World #197, and India's most powerful tech alumni network. However, only ~9,000 students get JEE Advanced rank. If your JEE Advanced rank isn't sufficient for IIT Delhi, DTU CSE (JEE Main 99.2+ percentile) is an excellent second choice — it's Delhi's top state engineering college with strong placements.</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IIT Delhi vs DTU — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">IIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">DTU</th>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IIT Delhi vs DTU — JEE Advanced vs JEE Main Cutoff 2025</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">IIT Delhi</th>
                <th className="px-4 py-3 text-center font-semibold">DTU</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {([{"cat":"CSE (B.Tech)","a":"JEE Adv top ~250 AIR","b":"JEE Main 99.2+ percentile","edge":"IIT Delhi (far higher)"},{"cat":"ECE / Electronics","a":"JEE Adv top ~600 AIR","b":"JEE Main 98+ percentile","edge":"IIT Delhi"},{"cat":"Mechanical Engg","a":"JEE Adv top ~1500 AIR","b":"JEE Main 95+ percentile","edge":"IIT Delhi"},{"cat":"Civil Engineering","a":"JEE Adv top ~2000 AIR","b":"JEE Main 92+ percentile","edge":"IIT Delhi"},{"cat":"Mathematics & Computing","a":"JEE Adv top ~400 AIR","b":"JEE Main 99.4+ percentile","edge":"IIT Delhi"}] as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">IIT Delhi vs DTU — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: "IIT Delhi", stats: [{"label":"Average Package","value":"₹30+ LPA"},{"label":"Highest Package","value":"₹2.4 Cr (International)"},{"label":"% Placed (CSE)","value":"~98%"},{"label":"Top Recruiter","value":"Google, Microsoft, Goldman Sachs"},{"label":"Intl Offers","value":"200+ (USA, Japan, Singapore)"}] },
            { college: "DTU", stats: [{"label":"Average Package","value":"₹18 LPA"},{"label":"Highest Package","value":"₹72 LPA"},{"label":"% Placed (CSE)","value":"~95%"},{"label":"Top Recruiter","value":"Google, Amazon, Microsoft"},{"label":"Intl Offers","value":"30–50/year"}] },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose IIT Delhi vs DTU</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose IIT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You have JEE Advanced rank in top 2000 for your preferred branch</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want international placements — IIT Delhi gets 200+ international offers/year</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want PhD or research — IIT Delhi has India's top research output in engineering</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want the strongest possible brand name for an MBA or startup later</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose DTU if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> Your JEE Advanced rank is not sufficient for IIT Delhi but JEE Main is 99.2+ for CSE</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You prefer lower fees (DTU is ₹1.5–2L/yr vs IIT Delhi's ₹2.2L/yr, though negligible difference)</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want to stay in Delhi state — DTU has strong local industry connections</li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> You want a less intense academic environment while still getting good placements</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">IIT Delhi vs DTU — FAQs</h2>
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
          {([{"label":"DTU vs NSUT Comparison","href":"/dtu-vs-nsut"},{"label":"DTU vs IIIT Delhi","href":"/dtu-vs-iiit-delhi"},{"label":"Engineering Colleges Delhi 2026","href":"/engineering-colleges-delhi"},{"label":"JEE Main College Predictor","href":"/predictor"},{"label":"IIT Delhi Admission 2026","href":"/colleges/iit-delhi"},{"label":"DTU Admission 2026","href":"/colleges/dtu-delhi"}] as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Not sure which college to choose based on your JEE rank?</p>
            <p className="text-blue-200 text-sm">Our AI predictor and counsellors will match you to the best college for your exact rank.</p>
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
