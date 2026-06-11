import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "DTU vs IIIT Delhi 2026 — Which is Better for Computer Science?",
  description: "DTU vs IIIT Delhi detailed comparison 2026: JEE Main cutoff, CSE placements, fees, research culture, campus life. Which Delhi college is better for BTech Computer Science? Honest verdict.",
  path: "/dtu-vs-iiit-delhi",
  keywords: [
    "DTU vs IIIT Delhi", "DTU vs IIIT Delhi which is better 2026",
    "DTU vs IIIT Delhi placements", "DTU vs IIIT Delhi cutoff",
    "DTU vs IIIT Delhi for computer science", "IIIT Delhi vs DTU fees",
    "IIIT Delhi admission 2026", "DTU CSE vs IIIT Delhi CSE",
    "which is better for CS Delhi colleges", "JAC Delhi vs JOSAA IIIT Delhi",
  ],
})
export const revalidate = 300

const compData = [
  { param: "Full Name", dtu: "Delhi Technological University", iiit: "Indraprastha Institute of Information Technology" },
  { param: "Established", dtu: "1941 (as DCE)", iiit: "2008" },
  { param: "Type", dtu: "State University (Govt.)", iiit: "Autonomous Institute (State Govt.)" },
  { param: "NIRF 2024 (Engineering)", dtu: "#49", iiit: "#81" },
  { param: "NAAC Grade", dtu: "A+", iiit: "A (accredited 2024)" },
  { param: "Focus", dtu: "All Engineering Streams (15+ branches)", iiit: "CS, IT, ECE, CB, CSD only" },
  { param: "Total Students", dtu: "~7,000", iiit: "~2,500" },
  { param: "Admission Route", dtu: "JEE Main → JAC Delhi", iiit: "JEE Main → JOSAA/CSAB" },
  { param: "CSE Cutoff (General)", dtu: "99.2+ percentile", iiit: "99+ percentile" },
  { param: "Annual Fees (BTech)", dtu: "₹1.5L–2L/yr", iiit: "₹2.5L–3L/yr" },
  { param: "Avg Placement (CSE 2024)", dtu: "₹18 LPA", iiit: "₹20 LPA" },
  { param: "Highest Package", dtu: "₹72 LPA", iiit: "₹1.2 Cr" },
  { param: "Top Recruiters", dtu: "Google, Amazon, Microsoft, Uber", iiit: "Google, Uber, Sprinklr, Goldman Sachs" },
  { param: "Research Output", dtu: "Moderate — growing", iiit: "Very high per capita — research-first culture" },
  { param: "PhD Programs", dtu: "Yes — wide range", iiit: "Yes — strong research PhD culture" },
  { param: "Hostels", dtu: "7 hostels (2,500+ seats)", iiit: "2 hostels (limited, ~600 seats)" },
  { param: "Campus", dtu: "164 acres (Rohini)", iiit: "25 acres (Okhla Phase III)" },
  { param: "Startup Ecosystem", dtu: "E-Cell — growing", iiit: "Strong — AppEx, Venture Lab" },
]

const faqs = [
  { question: "Is DTU better than IIIT Delhi for computer science?", answer: "IIIT Delhi is slightly better for pure computer science in terms of placements (₹20 LPA vs DTU's ₹18 LPA CSE avg) and highest packages (₹1.2 Cr vs ₹72 LPA). IIIT Delhi has a research-first culture, smaller and more focused CS department, and stronger per-capita placement in top tech companies. However, DTU is more established (NIRF 49 vs 81), larger (7,000 students vs 2,500), has lower fees (₹1.5L vs ₹2.5L/yr), and offers more diverse branch options." },
  { question: "What is the JEE Main cutoff for IIIT Delhi vs DTU CSE?", answer: "IIIT Delhi CSE: 99+ percentile (General) via JOSAA (not JAC Delhi). DTU CSE: 99.2+ percentile (General) via JAC Delhi. Both require essentially the same JEE Main score for CSE, but the admission routes differ — DTU is through JAC Delhi counselling while IIIT Delhi is through JOSAA national counselling (same as NITs). This means students must fill both JAC Delhi and JOSAA to have both options." },
  { question: "What is the fee difference between DTU and IIIT Delhi?", answer: "DTU annual BTech fee: ₹1.5L–2L/year (government institution). IIIT Delhi annual BTech fee: ₹2.5L–3L/year (autonomous, higher than DTU). Over 4 years: DTU total cost ₹6L–8L. IIIT Delhi total cost ₹10L–12L. The ₹4L–5L additional cost at IIIT Delhi is generally offset by its marginally higher placement packages. Scholarship schemes exist at IIIT Delhi for economically weaker students." },
  { question: "Which college is better for research and startups — DTU or IIIT Delhi?", answer: "IIIT Delhi is clearly better for research — it has higher per-capita research publications, strong research labs (Infosys Centre, IoT lab, AI lab), and a faculty primarily composed of PhD holders from IITs and international universities. Many IIIT Delhi students go to IIT/IIM/foreign universities for higher education. For startups, both have active ecosystems but IIIT Delhi's Venture Lab and smaller batch size create more collaborative startup culture." },
  { question: "If I get CSE at both DTU and IIIT Delhi, which should I choose?", answer: "Choose IIIT Delhi CSE if: you want top tech company placements (₹20 LPA avg vs ₹18 LPA), plan to pursue MS/PhD abroad, value research culture, or want a smaller and more focused CS environment. Choose DTU CSE if: lower fees are important (₹1.5L vs ₹2.5L/yr), you value a larger campus/hostel ecosystem, prefer diverse social interaction with 7,000+ students, or want the DTU/DCE brand recognition in non-tech sectors. For pure tech careers, IIIT Delhi has a marginal edge. For all-round college experience, DTU is better." },
]

export default function DTUvsIIITDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Compare", url: "/compare" }, { name: "DTU vs IIIT Delhi", url: "/dtu-vs-iiit-delhi" }])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link><span>/</span>
            <span className="text-white">DTU vs IIIT Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">DTU vs IIIT Delhi 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">A data-driven comparison for students who get CSE/IT at both DTU (NIRF 49) and IIIT Delhi (NIRF 81) — covering placements, fees, research, campus, and career outcomes.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800"><strong>IIIT Delhi wins for CS-focused students</strong>: ₹20 LPA avg (vs DTU ₹18 LPA), ₹1.2 Cr highest pkg, research-first culture, stronger top-tier tech placements. <strong>DTU wins for all-round experience</strong>: lower fees (₹1.5L/yr vs ₹2.5L/yr), larger campus, more diverse branches, NIRF 49 vs 81.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">DTU vs IIIT Delhi — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold text-xs w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold text-xs">DTU</th>
                <th className="px-4 py-3 text-center font-semibold text-xs">IIIT Delhi</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.dtu}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.iiit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose Which</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose DTU if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2"><span className="text-green-600">+</span>Lower fees matter — ₹1.5L/yr vs ₹2.5L/yr saves ₹4–5L total</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>You want larger campus, better hostel availability, diverse student community</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>You're not sure about CS/IT — DTU offers 15+ branches if you want to switch</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>NIRF 49 brand recognition matters for non-tech career paths</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose IIIT Delhi if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex gap-2"><span className="text-green-600">+</span>Pure tech career: FAANG, quant finance, deep tech startups</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>Planning MS abroad (US/Europe) — IIIT Delhi research reputation helps</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>You value higher placements: ₹20 LPA avg vs ₹18 LPA at DTU</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>Smaller, focused community where you know your classmates well</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — DTU vs IIIT Delhi</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">{f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ label: "DTU vs NSUT", href: "/dtu-vs-nsut" }, { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" }, { label: "JEE Predictor Delhi", href: "/predictor" }, { label: "Government Colleges Delhi", href: "/government-colleges-delhi" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need help deciding between DTU and IIIT Delhi?</p><p className="text-blue-200 text-sm">Free 15-min call with a counsellor who knows both colleges.</p></div>
          <div className="flex gap-3">
            <Link href="/predictor" className="bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm">JEE Predictor</Link>
            <Link href="/counselling" className="bg-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm">Free Counselling</Link>
          </div>
        </div>
      </div>
    </>
  )
}
