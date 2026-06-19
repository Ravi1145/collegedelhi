const fs = require("fs")
const path = require("path")

const BASE = path.join(__dirname, "..", "src", "app")

function write(slug, content) {
  const dir = path.join(BASE, slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, "page.tsx"), content)
  console.log("Done:", slug)
}

// ─── Shared renderer ───────────────────────────────────────────────────────

function page({ slug, title, desc, keywords, a, b, compData, cutoffRows, cutoffNote, placementA, placementB, chooseA, chooseB, faqs, related, verdictText, cta, aLabel, bLabel, admissionNote }) {
  const slug1 = a.slug
  const slug2 = b.slug
  return `import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  path: ${JSON.stringify("/" + slug)},
  keywords: ${JSON.stringify(keywords)},
})
export const revalidate = 86400

const compData = ${JSON.stringify(compData, null, 2)}

const faqs = ${JSON.stringify(faqs, null, 2)}

export default function CompPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Compare Colleges", url: "/compare" },
    { name: ${JSON.stringify(a.short + " vs " + b.short)}, url: ${JSON.stringify("/" + slug)} },
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
            <span className="text-white">${a.short} vs ${b.short}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">${a.short} vs ${b.short} 2026 — Which is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">${desc}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Verdict */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-green-900 mb-1">Quick Verdict (2026)</p>
          <p className="text-sm text-green-800">${verdictText}</p>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">${a.short} vs ${b.short} — Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold">${a.short}</th>
                <th className="px-4 py-3 text-center font-semibold">${b.short}</th>
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

${cutoffRows ? `        {/* Cutoff / Admission Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">${a.short} vs ${b.short} — ${cutoffNote || "Cutoff / Admission Comparison"}</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Category / Program</th>
                <th className="px-4 py-3 text-center font-semibold">${a.short}</th>
                <th className="px-4 py-3 text-center font-semibold">${b.short}</th>
                <th className="px-4 py-3 text-center font-semibold">Edge</th>
              </tr>
            </thead>
            <tbody>
              {(${JSON.stringify(cutoffRows)} as { cat: string; a: string; b: string; edge: string }[]).map((r, i) => (
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
        </div>` : ""}

${placementA ? `        {/* Placement Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">${a.short} vs ${b.short} — Placement Statistics 2024</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {([
            { college: ${JSON.stringify(a.short)}, stats: ${JSON.stringify(placementA)} },
            { college: ${JSON.stringify(b.short)}, stats: ${JSON.stringify(placementB)} },
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
        </div>` : ""}

        {/* When to Choose */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose ${a.short} vs ${b.short}</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose ${a.short} if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              ${chooseA.map((c) => `<li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> ${c}</li>`).join("\n              ")}
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Choose ${b.short} if...</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              ${chooseB.map((c) => `<li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">+</span> ${c}</li>`).join("\n              ")}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">${a.short} vs ${b.short} — FAQs</h2>
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
          {(${JSON.stringify(related)} as { label: string; href: string }[]).map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">${cta.heading}</p>
            <p className="text-blue-200 text-sm">${cta.sub}</p>
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
`
}

// ═══════════════════════════════════════════════════════════
// 1. IIT DELHI vs DTU
// ═══════════════════════════════════════════════════════════
write("iit-delhi-vs-dtu", page({
  slug: "iit-delhi-vs-dtu",
  a: { short: "IIT Delhi", slug: "iit-delhi" },
  b: { short: "DTU", slug: "dtu-delhi" },
  title: "IIT Delhi vs DTU 2026 — Placements, JEE Cutoff, Fees & Which is Better",
  desc: "IIT Delhi vs DTU (Delhi Technological University) 2026: JEE cutoff, branch-wise placement, fees, campus life, research output. Which college is right for your JEE rank?",
  keywords: ["IIT Delhi vs DTU", "IIT Delhi vs DTU which is better 2026", "IIT Delhi DTU comparison", "JEE cutoff IIT Delhi DTU", "IIT Delhi placements vs DTU placements", "which is better IIT Delhi or DTU"],
  compData: [
    { param: "Full Name", a: "Indian Institute of Technology Delhi", b: "Delhi Technological University" },
    { param: "Established", a: "1961", b: "1941 (as DCE)" },
    { param: "NIRF 2024 Rank", a: "#2 (Overall), #2 (Engineering)", b: "#49 (Engineering)" },
    { param: "Type", a: "Central Institute (IIT)", b: "Government (Delhi State)" },
    { param: "Admission", a: "JEE Advanced (top ~250 AIR for CSE)", b: "JEE Main → JAC Delhi (99.2+ for CSE)" },
    { param: "Annual Fees (B.Tech)", a: "₹2.2L/yr", b: "₹1.5L–2L/yr" },
    { param: "Avg Placement (2024)", a: "₹30+ LPA", b: "₹18 LPA" },
    { param: "Highest Package", a: "₹2.4 crore (international)", b: "₹72 LPA" },
    { param: "Campus Size", a: "325 acres (South Delhi)", b: "164 acres (Rohini)" },
    { param: "Hostels", a: "12 hostels (all residential)", b: "7 hostels (2,500+ seats)" },
    { param: "PhD / Research", a: "India's top research output", b: "Growing research, 500+ publications/yr" },
    { param: "International Ranking", a: "QS World #197 (2024)", b: "Not ranked internationally" },
    { param: "Alumni Network", a: "India's strongest tech alumni", b: "Strong Delhi NCR alumni network" },
  ],
  cutoffRows: [
    { cat: "CSE (B.Tech)", a: "JEE Adv top ~250 AIR", b: "JEE Main 99.2+ percentile", edge: "IIT Delhi (far higher)" },
    { cat: "ECE / Electronics", a: "JEE Adv top ~600 AIR", b: "JEE Main 98+ percentile", edge: "IIT Delhi" },
    { cat: "Mechanical Engg", a: "JEE Adv top ~1500 AIR", b: "JEE Main 95+ percentile", edge: "IIT Delhi" },
    { cat: "Civil Engineering", a: "JEE Adv top ~2000 AIR", b: "JEE Main 92+ percentile", edge: "IIT Delhi" },
    { cat: "Mathematics & Computing", a: "JEE Adv top ~400 AIR", b: "JEE Main 99.4+ percentile", edge: "IIT Delhi" },
  ],
  cutoffNote: "JEE Advanced vs JEE Main Cutoff 2025",
  placementA: [
    { label: "Average Package", value: "₹30+ LPA" },
    { label: "Highest Package", value: "₹2.4 Cr (International)" },
    { label: "% Placed (CSE)", value: "~98%" },
    { label: "Top Recruiter", value: "Google, Microsoft, Goldman Sachs" },
    { label: "Intl Offers", value: "200+ (USA, Japan, Singapore)" },
  ],
  placementB: [
    { label: "Average Package", value: "₹18 LPA" },
    { label: "Highest Package", value: "₹72 LPA" },
    { label: "% Placed (CSE)", value: "~95%" },
    { label: "Top Recruiter", value: "Google, Amazon, Microsoft" },
    { label: "Intl Offers", value: "30–50/year" },
  ],
  verdictText: "IIT Delhi wins comprehensively — NIRF #2, avg ₹30+ LPA vs DTU's ₹18 LPA, QS World #197, and India's most powerful tech alumni network. However, only ~9,000 students get JEE Advanced rank. If your JEE Advanced rank isn't sufficient for IIT Delhi, DTU CSE (JEE Main 99.2+ percentile) is an excellent second choice — it's Delhi's top state engineering college with strong placements.",
  chooseA: [
    "You have JEE Advanced rank in top 2000 for your preferred branch",
    "You want international placements — IIT Delhi gets 200+ international offers/year",
    "You want PhD or research — IIT Delhi has India's top research output in engineering",
    "You want the strongest possible brand name for an MBA or startup later",
  ],
  chooseB: [
    "Your JEE Advanced rank is not sufficient for IIT Delhi but JEE Main is 99.2+ for CSE",
    "You prefer lower fees (DTU is ₹1.5–2L/yr vs IIT Delhi's ₹2.2L/yr, though negligible difference)",
    "You want to stay in Delhi state — DTU has strong local industry connections",
    "You want a less intense academic environment while still getting good placements",
  ],
  faqs: [
    { question: "Is DTU equivalent to IIT Delhi?", answer: "No — IIT Delhi is significantly higher ranked (NIRF #2 vs DTU #49). IIT Delhi requires JEE Advanced while DTU requires JEE Main. Average placements at IIT Delhi (~₹30 LPA) are nearly double DTU's (~₹18 LPA). IIT Delhi is globally ranked (QS #197) while DTU is not. However, DTU is still an excellent college — it's Delhi's best state engineering college and JEE Main 99.2+ for CSE." },
    { question: "What JEE rank is needed for IIT Delhi CSE vs DTU CSE?", answer: "IIT Delhi CSE requires JEE Advanced top ~250 AIR (General category, Home State — Delhi quota may vary). DTU CSE requires JEE Main 99.2+ percentile and a JAC Delhi rank of approximately 1000–1500 (General, Delhi quota). The admission processes are entirely different — JEE Advanced is a separate exam after qualifying JEE Main, making IIT Delhi accessible only to JEE Main top ~2.5% scorers." },
    { question: "Which has better placements — IIT Delhi or DTU?", answer: "IIT Delhi has significantly better placements. Average package: IIT Delhi ₹30+ LPA, DTU ₹18 LPA. Highest package: IIT Delhi ₹2.4 crore (international), DTU ₹72 LPA. International offers: IIT Delhi 200+ annually (USA, Japan, Singapore), DTU 30–50. Top recruiters overlap (Google, Microsoft) but IIT Delhi also attracts Goldman Sachs, McKinsey, Jane Street, and top-tier international companies." },
    { question: "Should I choose DTU CSE or IIT Delhi Mechanical?", answer: "This is a common dilemma. Branch matters significantly — a DTU CSE graduate typically earns more in the first 5 years than an IIT Delhi Mechanical graduate (due to higher tech salaries). However, for long-term career growth, research opportunities, and MBA applications, IIT Delhi brand adds significant value. If career goal is high-paying tech jobs immediately, DTU CSE can outperform IIT Delhi Mechanical. For research, core engineering, or management consulting, IIT Delhi any branch wins." },
    { question: "Is IIT Delhi worth it over DTU for the same branch?", answer: "Yes, if you're comparing the same branch: IIT Delhi provides ~65% higher average packages, international placement opportunities, global alumni network (IIT Delhi alumni at Microsoft, Google, Facebook US offices), stronger research credentials for MS/PhD abroad, and the IIT brand for MBA (IIM interview calls correlate with JEE rank/institute). The effort to get JEE Advanced rank for IIT Delhi pays off significantly over a career lifetime." },
  ],
  related: [
    { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut" },
    { label: "DTU vs IIIT Delhi", href: "/dtu-vs-iiit-delhi" },
    { label: "Engineering Colleges Delhi 2026", href: "/engineering-colleges-delhi" },
    { label: "JEE Main College Predictor", href: "/predictor" },
    { label: "IIT Delhi Admission 2026", href: "/colleges/iit-delhi" },
    { label: "DTU Admission 2026", href: "/colleges/dtu-delhi" },
  ],
  cta: {
    heading: "Not sure which college to choose based on your JEE rank?",
    sub: "Our AI predictor and counsellors will match you to the best college for your exact rank.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 2. NSUT vs IIIT Delhi
// ═══════════════════════════════════════════════════════════
write("nsut-vs-iiit-delhi", page({
  slug: "nsut-vs-iiit-delhi",
  a: { short: "NSUT", slug: "nsut-delhi" },
  b: { short: "IIIT Delhi", slug: "iiit-delhi" },
  title: "NSUT vs IIIT Delhi 2026 — Placements, Fees, Cutoff & Which is Better",
  desc: "NSUT vs IIIT Delhi 2026 head-to-head: JEE cutoff, fees, CSE/IT placements, research, campus. Which Delhi engineering college is better for CSE and tech careers?",
  keywords: ["NSUT vs IIIT Delhi", "NSUT vs IIIT Delhi which is better 2026", "NSUT IIIT Delhi comparison", "IIIT Delhi vs NSUT placements", "IIIT Delhi cutoff vs NSUT cutoff", "which is better NSUT or IIIT Delhi"],
  compData: [
    { param: "Full Name", a: "Netaji Subhas University of Technology", b: "IIIT Delhi (Indraprastha Inst. of IT)" },
    { param: "Established", a: "1983 (as NSIT)", b: "2008" },
    { param: "NIRF 2024 Rank", a: "#52 (Engineering)", b: "#60 (Engineering)" },
    { param: "Type", a: "Government (Delhi State)", b: "Deemed University (State)" },
    { param: "Admission", a: "JEE Main → JAC Delhi", b: "JEE Main → IIIT Delhi portal" },
    { param: "Specialisation", a: "Broad engineering (CSE, ECE, ME, Civil)", b: "CS + ECE only (research-focused)" },
    { param: "Annual Fees (B.Tech)", a: "₹1.5L–2L/yr", b: "₹3.5L–4L/yr" },
    { param: "Avg Placement (2024)", a: "₹16 LPA", b: "₹18 LPA" },
    { param: "Highest Package", a: "₹65 LPA", b: "₹60 LPA" },
    { param: "Campus", a: "Dwarka (83 acres) + East Campus", b: "Okhla (7 acres, compact urban campus)" },
    { param: "Research Focus", a: "Growing — 400+ papers/yr", b: "Very strong — IIIT model built for research" },
    { param: "Batch Size (B.Tech)", a: "~1,500/yr", b: "~300/yr (smaller, more selective per seat)" },
    { param: "Top Recruiters", a: "Google, Microsoft, Adobe, Qualcomm", b: "Microsoft, Adobe, Samsung R&D, Qualcomm" },
  ],
  cutoffRows: [
    { cat: "CSE (General)", a: "JEE Main 98.8+ percentile (JAC)", b: "JEE Main 97.5+ percentile (IIIT portal)", edge: "NSUT (slightly higher cutoff = more demand)" },
    { cat: "ECE (General)", a: "97.5+ percentile", b: "93+ percentile", edge: "NSUT (higher demand)" },
    { cat: "AI / Data Science", a: "98.5+ percentile", b: "95+ percentile", edge: "NSUT" },
    { cat: "IT / ICT", a: "98+ percentile", b: "N/A (no IT program)", edge: "NSUT" },
    { cat: "Research / PhD track", a: "Limited PhD intake", b: "Strong MS/PhD programs", edge: "IIIT Delhi" },
  ],
  cutoffNote: "JEE Main Cutoff 2025 — NSUT (JAC Delhi) vs IIIT Delhi",
  placementA: [
    { label: "Average Package", value: "₹16 LPA" },
    { label: "Highest Package", value: "₹65 LPA" },
    { label: "Companies Visiting", value: "400+" },
    { label: "% Placed (CSE)", value: "~93%" },
    { label: "Top Recruiter", value: "Microsoft, Adobe" },
  ],
  placementB: [
    { label: "Average Package", value: "₹18 LPA" },
    { label: "Highest Package", value: "₹60 LPA" },
    { label: "% Placed (CSE)", value: "~90%" },
    { label: "Top Recruiter", value: "Samsung R&D, Adobe, Qualcomm" },
    { label: "Research Placements", value: "Strong (MS abroad, PhD)" },
  ],
  verdictText: "NSUT wins for most B.Tech students — larger batch, government college fees (₹1.5–2L/yr vs IIIT Delhi's ₹3.5–4L/yr), slightly better average placement coverage, and a wider branch ecosystem. IIIT Delhi wins if you want research, an MS abroad, or a focused CS/ECE environment with smaller classes. For pure placement-focused tech careers at Government college fees, NSUT is the better value.",
  chooseA: [
    "You want government college fees (₹1.5–2L/yr vs ₹3.5L+ at IIIT Delhi)",
    "You want broader branch options beyond CS/ECE (ME, Civil, ICT, AI/DS at NSUT)",
    "You prefer a larger campus (Dwarka) with more extracurriculars and hostel space",
    "Your JEE Main percentile is 98–99+ and you're targeting multiple college options",
  ],
  chooseB: [
    "You want to pursue research — IIIT Delhi is built as a research institute with funded MS/PhD",
    "You plan to do MS abroad — IIIT Delhi's research environment and faculty connections help",
    "You prefer smaller classes (IIIT Delhi 300/yr vs NSUT 1,500/yr) with more faculty attention",
    "Your JEE Main percentile is 93–97 for CS — IIIT Delhi may be more accessible than NSUT CSE",
  ],
  faqs: [
    { question: "Is NSUT better than IIIT Delhi?", answer: "For most engineering students focused on campus placements and government college affordability, NSUT is better. NSUT has NIRF #52 vs IIIT Delhi #60, lower fees (₹1.5–2L/yr vs ₹3.5–4L/yr), a larger campus, and more branch options. However, IIIT Delhi has better research output, stronger MS/PhD programs, and slightly higher average placements (₹18 LPA vs ₹16 LPA) for a much smaller batch — making per-student research opportunities better at IIIT Delhi." },
    { question: "What is the JEE cutoff for NSUT vs IIIT Delhi for CSE?", answer: "NSUT CSE requires 98.8+ percentile via JAC Delhi (General category). IIIT Delhi CSE requires approximately 97.5+ percentile via the IIIT Delhi portal (separate from JAC). The cutoff gap is ~1.3 percentile — students who get NSUT CSE could typically get IIIT Delhi CSE as well. For ECE, the gap is larger: NSUT ECE ~97.5+ vs IIIT Delhi ECE ~93+." },
    { question: "Which has better placements — NSUT or IIIT Delhi?", answer: "IIIT Delhi has a marginally higher average (₹18 LPA) vs NSUT's ₹16 LPA, but NSUT has a much larger batch (~1,500/yr vs ~300/yr at IIIT Delhi). Both see Google, Microsoft, Adobe, and Qualcomm recruiting. IIIT Delhi's smaller batch means more elite company offers per student in percentage terms, but NSUT's absolute placement numbers are larger. For research placements (Samsung R&D, Qualcomm Research), IIIT Delhi leads." },
    { question: "Which Delhi college is better for CSE — NSUT or IIIT Delhi?", answer: "For a placement-focused CSE career: NSUT wins (lower fees, larger peer group, government college credibility). For research-focused CSE (publications, MS/PhD, faculty interaction): IIIT Delhi wins. The JEE percentile required for NSUT CSE is slightly higher (~98.8+) than IIIT Delhi CSE (~97.5+), meaning students who get NSUT often have IIIT Delhi as a backup — choose based on your career goal, not just cutoff." },
  ],
  related: [
    { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut" },
    { label: "DTU vs IIIT Delhi", href: "/dtu-vs-iiit-delhi" },
    { label: "Engineering Colleges Delhi 2026", href: "/engineering-colleges-delhi" },
    { label: "NSUT Admission 2026", href: "/colleges/nsut-delhi" },
    { label: "IIIT Delhi Admission 2026", href: "/colleges/iiit-delhi" },
    { label: "JAC Delhi 2026 Counselling", href: "/jac-delhi-counselling" },
  ],
  cta: {
    heading: "Confused between NSUT and IIIT Delhi for your JEE rank?",
    sub: "Our counsellors know the exact cutoffs and can predict your chances at both colleges.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 3. FMS vs IIFT (slug: fms-vs-iift)
// ═══════════════════════════════════════════════════════════
write("fms-vs-iift", page({
  slug: "fms-vs-iift",
  a: { short: "FMS Delhi", slug: "fms-delhi" },
  b: { short: "IIFT Delhi", slug: "iift-delhi" },
  title: "FMS Delhi vs IIFT Delhi 2026 — Fees, Placements, CAT Score & Which is Better",
  desc: "FMS Delhi vs IIFT Delhi 2026 MBA comparison: fees (₹20K vs ₹15L), CAT vs IIFT exam, average placement (₹27 LPA vs ₹24 LPA), specialisations, campus. Honest verdict for MBA aspirants.",
  keywords: ["FMS vs IIFT", "FMS Delhi vs IIFT Delhi 2026", "FMS IIFT comparison", "FMS Delhi fees vs IIFT", "IIFT vs FMS placements", "which is better FMS or IIFT for MBA"],
  compData: [
    { param: "Full Name", a: "Faculty of Management Studies, DU", b: "Indian Institute of Foreign Trade" },
    { param: "Program", a: "MBA (2 years)", b: "MBA (International Business) — 2 yrs" },
    { param: "Established", a: "1954", b: "1963" },
    { param: "NIRF 2024 Rank", a: "#4 (Management)", b: "#23 (Management)" },
    { param: "Admission Exam", a: "CAT (99+ percentile)", b: "IIFT Entrance Test / CAT" },
    { param: "Annual Fees", a: "~₹27.5K total (₹55K for 2 yrs)", b: "₹15L total" },
    { param: "Avg Placement (2024)", a: "₹27 LPA", b: "₹24 LPA" },
    { param: "Highest Package", a: "₹72 LPA", b: "₹60 LPA" },
    { param: "Specialisation", a: "General MBA (Finance, Marketing, HR)", b: "International Business (Trade, Forex, Logistics)" },
    { param: "Batch Size", a: "~235 students", b: "~500 students (Delhi + Kolkata)" },
    { param: "Campus", a: "Delhi University, North Campus", b: "Vasant Kunj, South Delhi (new campus)" },
    { param: "Hostel", a: "Limited DU hostel", b: "On-campus hostel available" },
    { param: "Top Recruiters", a: "Mckinsey, Bain, BCG, Goldman Sachs", b: "HSBC, ICICI, Deloitte, Amazon, ITC" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile (General)", a: "99+ percentile", b: "95+ percentile (IIFT exam) or 98+ CAT", edge: "IIFT (more accessible)" },
    { cat: "GD-PI Process", a: "Group Discussion + Personal Interview", b: "Group Discussion + Essay + Interview", edge: "Similar" },
    { cat: "Work Experience", a: "Preferred but not mandatory", b: "Preferred but not mandatory", edge: "Similar" },
    { cat: "Total Fees", a: "₹55K (2 years total)", b: "₹15L (2 years total)", edge: "FMS (275x cheaper)" },
    { cat: "ROI (Salary / Fees)", a: "Highest in India", b: "Very good ROI", edge: "FMS (unbeatable ROI)" },
  ],
  cutoffNote: "CAT Cutoff & Admission Requirements 2026",
  placementA: [
    { label: "Average Package", value: "₹27 LPA" },
    { label: "Highest Package", value: "₹72 LPA" },
    { label: "% Placed", value: "~100%" },
    { label: "Top Sectors", value: "Consulting, BFSI, FMCG" },
    { label: "Top Recruiter", value: "McKinsey, BCG, Bain" },
  ],
  placementB: [
    { label: "Average Package", value: "₹24 LPA" },
    { label: "Highest Package", value: "₹60 LPA" },
    { label: "% Placed", value: "~100%" },
    { label: "Top Sectors", value: "International Trade, BFSI, Consulting" },
    { label: "Top Recruiter", value: "HSBC, ITC, Amazon, Deloitte" },
  ],
  verdictText: "FMS Delhi wins overall — NIRF #4 vs IIFT #23, higher average placement (₹27 LPA vs ₹24 LPA), and India's best ROI (total fees ₹55K vs ₹15L at IIFT). However, FMS requires 99+ CAT percentile — the hardest cut in India. IIFT is the right choice if your CAT score is 95–98 percentile, or if you want to specialise in International Business, Forex, and Global Trade (where IIFT is unmatched).",
  chooseA: [
    "Your CAT percentile is 99+ and you want India's best MBA ROI (₹55K fees, ₹27 LPA avg)",
    "You want general management — consulting, BFSI, FMCG, strategy roles",
    "You want the McKinsey / BCG / Bain consulting track — FMS is heavily targeted by top firms",
    "You want DU brand + central university credibility",
  ],
  chooseB: [
    "Your CAT percentile is 95–98 — IIFT is more accessible than FMS",
    "You want to specialise in International Business, Export-Import, Forex Management, or Global Supply Chain",
    "You want a structured on-campus experience with hostel — IIFT has better residential facilities",
    "You're interested in careers at WTO, EXIM Bank, International Trade departments of MNCs",
  ],
  faqs: [
    { question: "Is FMS Delhi better than IIFT?", answer: "Yes, overall FMS Delhi is better — NIRF #4 vs IIFT #23, ₹27 LPA avg vs ₹24 LPA, and legendary ROI (₹55K total fees). But FMS is harder to get into (99+ CAT vs 95+ IIFT). If you want International Business as a specialisation, IIFT is actually the better choice — it's Asia's #1 in International Business and no other Indian MBA college matches its depth in global trade." },
    { question: "What is the CAT cutoff for FMS and IIFT?", answer: "FMS Delhi: 99+ percentile CAT (General, for a shortlist). Actual call typically goes to 99.5+ for top students with good academics and work experience. IIFT: either 95+ percentile on IIFT's own entrance exam, or 98+ CAT percentile. IIFT's own exam covers English, GK, Quant, and Reasoning — a different format from CAT." },
    { question: "Which has better placements — FMS or IIFT?", answer: "FMS has higher placements: ₹27 LPA average vs IIFT's ₹24 LPA, highest ₹72 LPA vs ₹60 LPA. FMS attracts McKinsey, BCG, Bain, Goldman Sachs. IIFT attracts HSBC, ITC, Amazon, Deloitte, and international trade companies. If you want consulting or investment banking, FMS leads. If you want international trade, supply chain, or global business roles, IIFT is the market leader." },
    { question: "Is IIFT Delhi worth it if I don't get FMS?", answer: "Absolutely yes. IIFT Delhi is a NIRF #23 ranked management institute with ₹24 LPA average placements and a highly specialised International Business program. The ROI is strong despite ₹15L fees — payback in under 1 year for most graduates. IIFT alumni dominate international trade, EXIM, forex, and global MNC roles in ways no other Indian MBA does." },
  ],
  related: [
    { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
    { label: "FMS Delhi vs IIFT — Full Analysis", href: "/fms-delhi-vs-iift-delhi" },
    { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
    { label: "CAT Score vs College Predictor", href: "/predictor" },
    { label: "FMS Admission 2026", href: "/colleges/fms-delhi" },
    { label: "IIFT Delhi Admission 2026", href: "/colleges/iift-delhi" },
  ],
  cta: {
    heading: "Know your CAT score? Find out if you can get FMS or IIFT.",
    sub: "Our MBA counsellors will assess your profile and guide your applications.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 4. FMS vs IMI Delhi
// ═══════════════════════════════════════════════════════════
write("fms-vs-imi-delhi", page({
  slug: "fms-vs-imi-delhi",
  a: { short: "FMS Delhi", slug: "fms-delhi" },
  b: { short: "IMI Delhi", slug: "imi-delhi" },
  title: "FMS Delhi vs IMI Delhi 2026 — Fees, Placements, CAT Cutoff & Which is Better",
  desc: "FMS Delhi vs IMI Delhi 2026 comparison: fees (₹55K vs ₹22L), CAT cutoff (99+ vs 90+), average salary (₹27 LPA vs ₹17 LPA), campus, recruiters. Which MBA is right for your profile?",
  keywords: ["FMS vs IMI Delhi", "FMS Delhi vs IMI Delhi 2026", "FMS IMI comparison", "FMS Delhi better than IMI", "IMI Delhi MBA CAT cutoff", "which is better FMS or IMI Delhi MBA"],
  compData: [
    { param: "Full Name", a: "Faculty of Management Studies, DU", b: "International Management Institute, Delhi" },
    { param: "Program", a: "MBA (2 years)", b: "PGDM (2 years)" },
    { param: "Established", a: "1954", b: "1981" },
    { param: "NIRF 2024 Rank", a: "#4 (Management)", b: "#48 (Management)" },
    { param: "Accreditation", a: "UGC / DU", b: "AMBA, AICTE, NBA" },
    { param: "Admission", a: "CAT 99+ percentile", b: "CAT 90+ percentile" },
    { param: "Annual Fees", a: "~₹27.5K total (2 yrs)", b: "₹22L total" },
    { param: "Avg Placement (2024)", a: "₹27 LPA", b: "₹17 LPA" },
    { param: "Highest Package", a: "₹72 LPA", b: "₹42 LPA" },
    { param: "Batch Size", a: "~235 students", b: "~250 students" },
    { param: "Campus Location", a: "DU North Campus", b: "Qutab Institutional Area, South Delhi" },
    { param: "International Exchange", a: "Limited", b: "Strong — 40+ partner universities" },
    { param: "Top Recruiters", a: "McKinsey, BCG, Goldman Sachs", b: "Deloitte, KPMG, ICICI, HUL, EY" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile (General)", a: "99+ percentile", b: "90–93+ percentile", edge: "IMI Delhi (more accessible)" },
    { cat: "Total Fees", a: "₹55K (2 years)", b: "₹22L (2 years)", edge: "FMS (400x cheaper)" },
    { cat: "Average Salary", a: "₹27 LPA", b: "₹17 LPA", edge: "FMS" },
    { cat: "Top Salary", a: "₹72 LPA", b: "₹42 LPA", edge: "FMS" },
    { cat: "International Programs", a: "Limited", b: "40+ exchange universities", edge: "IMI Delhi" },
  ],
  cutoffNote: "CAT Percentile & Fees Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹27 LPA" },
    { label: "Highest Package", value: "₹72 LPA" },
    { label: "Top Sectors", value: "Consulting, Finance, FMCG" },
    { label: "Top Recruiter", value: "McKinsey, BCG, Goldman" },
    { label: "% Placed", value: "~100%" },
  ],
  placementB: [
    { label: "Average Package", value: "₹17 LPA" },
    { label: "Highest Package", value: "₹42 LPA" },
    { label: "Top Sectors", value: "BFSI, Consulting, FMCG, IT" },
    { label: "Top Recruiter", value: "Deloitte, KPMG, EY, HUL" },
    { label: "% Placed", value: "~100%" },
  ],
  verdictText: "FMS Delhi is significantly better by every metric — NIRF #4 vs IMI #48, ₹27 LPA vs ₹17 LPA, and India's most absurd ROI at ₹55K total fees. The only reason to choose IMI Delhi is if your CAT score is 90–95 percentile (where FMS is out of reach) or if you specifically value international exchange programs (IMI has 40+ partner universities). For anyone who can crack FMS (99+ CAT), it's a clear first choice.",
  chooseA: [
    "Your CAT percentile is 99+ — FMS is India's best ROI at ₹55K fees and ₹27 LPA avg",
    "You want consulting / finance / FMCG — McKinsey, BCG, Goldman Sachs recruit from FMS",
    "You want a government university degree (MBA from DU) rather than a PGDM",
    "You don't need an international exchange semester",
  ],
  chooseB: [
    "Your CAT percentile is 90–95 — IMI Delhi is reachable; FMS is not",
    "You want international exchange programs — IMI has 40+ partner universities abroad",
    "You want AMBA-accredited PGDM which is globally recognised like an MBA",
    "You want a residential campus experience in South Delhi (Qutab area)",
  ],
  faqs: [
    { question: "Should I choose IMI Delhi over FMS if I don't get FMS?", answer: "IMI Delhi is a solid backup for FMS — NIRF #48, ₹17 LPA average salary, AMBA accreditation, and strong BFSI/consulting/FMCG placements. However, the gap is significant: FMS avg is ₹27 LPA vs IMI's ₹17 LPA, and FMS fees are ₹55K vs IMI's ₹22L. If your CAT score is 95–98 (shortlisted for FMS but not selected), consider waiting and re-appearing for CAT vs joining IMI immediately." },
    { question: "What CAT percentile do I need for FMS and IMI Delhi?", answer: "FMS Delhi: 99+ CAT percentile for shortlisting. Selection typically requires academics (Class 12 and graduation marks) + work experience + GD-PI performance. IMI Delhi: 90–93+ percentile for PGDM program. IMI also considers XAT, GMAT, and CMAT scores. IMI interviews candidates with 85+ percentile if they have strong academics or significant work experience." },
    { question: "Is IMI Delhi a good college for MBA?", answer: "Yes, IMI Delhi is a respectable MBA college — NIRF #48, AMBA accredited, ₹17 LPA average placement, strong Deloitte/KPMG/EY recruiting base, and 40+ international exchange programs. However, it's expensive at ₹22L total. Students should compare IMI with FORE School, LBSIM, and Great Lakes before deciding — all similar-tier colleges with varying fees and placement profiles." },
  ],
  related: [
    { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
    { label: "IMI Delhi vs FORE School", href: "/imi-delhi-vs-fore" },
    { label: "IMI Delhi vs LBSIM", href: "/imi-delhi-vs-lbsim" },
    { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
    { label: "IMI Delhi Admission 2026", href: "/colleges/imi-delhi" },
    { label: "FMS Delhi Admission 2026", href: "/colleges/fms-delhi" },
  ],
  cta: {
    heading: "Unsure if you should target FMS or apply to IMI Delhi?",
    sub: "Share your CAT score and profile — our MBA counsellors will guide your strategy.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 5. IMI Delhi vs FORE School
// ═══════════════════════════════════════════════════════════
write("imi-delhi-vs-fore", page({
  slug: "imi-delhi-vs-fore",
  a: { short: "IMI Delhi", slug: "imi-delhi" },
  b: { short: "FORE School", slug: "fore-school-management-delhi" },
  title: "IMI Delhi vs FORE School 2026 — Fees, Placements, CAT Score & Which is Better",
  desc: "IMI Delhi vs FORE School of Management 2026: fees (₹22L vs ₹18L), CAT cutoff, placements (₹17 LPA vs ₹14 LPA), campus, accreditation, recruiters. Detailed MBA comparison.",
  keywords: ["IMI Delhi vs FORE School", "IMI vs FORE 2026", "IMI Delhi FORE comparison MBA", "FORE School vs IMI Delhi placements", "IMI Delhi better than FORE", "which MBA college Delhi IMI or FORE"],
  compData: [
    { param: "Full Name", a: "International Management Institute, Delhi", b: "FORE School of Management, Delhi" },
    { param: "Program", a: "PGDM (2 years)", b: "PGDM / PGDM-IB (2 years)" },
    { param: "Established", a: "1981", b: "1981" },
    { param: "NIRF 2024 Rank", a: "#48 (Management)", b: "#55 (Management)" },
    { param: "Accreditation", a: "AMBA, AICTE, NBA", b: "AICTE, NBA, South Asian QS ranked" },
    { param: "Admission", a: "CAT 90+ percentile", b: "CAT 85+ percentile" },
    { param: "Total Fees", a: "₹22L (2 years)", b: "₹18L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹17 LPA", b: "₹14 LPA" },
    { param: "Highest Package", a: "₹42 LPA", b: "₹30 LPA" },
    { param: "Batch Size", a: "~250 students", b: "~240 students" },
    { param: "Campus Location", a: "Qutab Institutional Area, South Delhi", b: "Qutab Institutional Area, South Delhi" },
    { param: "International Exchange", a: "40+ partner universities", b: "20+ partner universities" },
    { param: "Specialisations", a: "Finance, Marketing, HR, Operations, IB", b: "Finance, Marketing, HR, IB (PGDM-IB)" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile", a: "90+ percentile", b: "85+ percentile", edge: "FORE (more accessible)" },
    { cat: "Total Fees", a: "₹22L", b: "₹18L", edge: "FORE (₹4L cheaper)" },
    { cat: "Average Placement", a: "₹17 LPA", b: "₹14 LPA", edge: "IMI Delhi" },
    { cat: "Accreditation", a: "AMBA (global)", b: "AICTE + NBA", edge: "IMI (AMBA is stronger)" },
    { cat: "Intl Exchange", a: "40+ universities", b: "20+ universities", edge: "IMI Delhi" },
  ],
  cutoffNote: "CAT Cutoff & Key Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹17 LPA" },
    { label: "Highest Package", value: "₹42 LPA" },
    { label: "Top Recruiters", value: "Deloitte, KPMG, EY, HUL" },
    { label: "Top Sector", value: "BFSI, Consulting, FMCG" },
    { label: "% Placed", value: "~100%" },
  ],
  placementB: [
    { label: "Average Package", value: "₹14 LPA" },
    { label: "Highest Package", value: "₹30 LPA" },
    { label: "Top Recruiters", value: "Accenture, HDFC, Yes Bank, Godrej" },
    { label: "Top Sector", value: "BFSI, FMCG, IT Services" },
    { label: "% Placed", value: "~100%" },
  ],
  verdictText: "IMI Delhi wins over FORE — higher NIRF rank (#48 vs #55), stronger average placements (₹17 LPA vs ₹14 LPA), AMBA global accreditation, and better international exchange network (40+ vs 20+ universities). However, IMI charges ₹4L more (₹22L vs ₹18L). If your CAT score is 85–89 (FORE range but not IMI range), FORE is a solid choice in the same campus area (both in Qutab Institutional Area).",
  chooseA: [
    "Your CAT percentile is 90–95 and you want the stronger brand between the two",
    "You want AMBA accreditation — globally recognised for international career aspirations",
    "You want richer international exchange opportunities (40+ vs 20+ universities)",
    "The ₹4L fee difference (₹22L vs ₹18L) is manageable with education loan",
  ],
  chooseB: [
    "Your CAT percentile is 85–89 — FORE is reachable; IMI may not be",
    "You want to save ₹4L in fees (FORE is ₹18L vs IMI's ₹22L)",
    "You're interested in the PGDM-IB (International Business) program, which is FORE's strength",
    "You prefer a slightly smaller, tighter-knit batch environment",
  ],
  faqs: [
    { question: "Is IMI Delhi better than FORE School?", answer: "Yes, IMI Delhi is ranked higher (NIRF #48 vs FORE #55), has higher average placements (₹17 LPA vs ₹14 LPA), AMBA global accreditation, and more international exchange programs. However, it costs ₹4L more. For students with 90+ CAT percentile, IMI is the clear choice. For students at 85–89 percentile, FORE is the right fit — don't stretch your CAT score claim for the ₹3 LPA avg difference." },
    { question: "What is the CAT cutoff for IMI Delhi and FORE School?", answer: "IMI Delhi shortlists candidates with 90+ CAT percentile for PGDM and 85+ for PGDM-IB (International Business). FORE shortlists at 85+ percentile for PGDM and PGDM-IB. Both colleges also accept XAT, GMAT, and CMAT scores. Selection beyond shortlist involves group exercises, case analysis, and personal interviews where academics and work experience matter significantly." },
    { question: "Which MBA college is better located — IMI or FORE?", answer: "Both IMI Delhi and FORE School of Management are located in Qutab Institutional Area (South Delhi), making them neighbors. They share the same location ecosystem — close to corporate offices in Gurgaon, accessible from MG Road and Saket metro stations. The campus quality is similar — both have dedicated management institute campuses with modern facilities." },
  ],
  related: [
    { label: "FMS Delhi vs IMI Delhi", href: "/fms-vs-imi-delhi" },
    { label: "IMI Delhi vs LBSIM", href: "/imi-delhi-vs-lbsim" },
    { label: "MDI vs IMI", href: "/mdi-vs-imi" },
    { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
    { label: "IMI Delhi Admission 2026", href: "/colleges/imi-delhi" },
    { label: "FORE School Admission 2026", href: "/colleges/fore-school-management-delhi" },
  ],
  cta: {
    heading: "IMI Delhi or FORE — which should you apply to based on your CAT score?",
    sub: "Our MBA counsellors will guide your shortlist and application strategy.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 6. IMI Delhi vs LBSIM
// ═══════════════════════════════════════════════════════════
write("imi-delhi-vs-lbsim", page({
  slug: "imi-delhi-vs-lbsim",
  a: { short: "IMI Delhi", slug: "imi-delhi" },
  b: { short: "LBSIM Delhi", slug: "lbsim-delhi" },
  title: "IMI Delhi vs LBSIM Delhi 2026 — Fees, CAT Cutoff, Placements & Which is Better",
  desc: "IMI Delhi vs LBSIM (Lal Bahadur Shastri Institute of Management) 2026: fees (₹22L vs ₹14L), CAT cutoff, average placements (₹17 LPA vs ₹12 LPA), campus, accreditation comparison.",
  keywords: ["IMI Delhi vs LBSIM", "IMI vs LBSIM 2026", "LBSIM vs IMI Delhi MBA", "LBSIM Delhi placements vs IMI", "which is better IMI or LBSIM Delhi", "LBSIM Delhi CAT cutoff 2026"],
  compData: [
    { param: "Full Name", a: "International Management Institute, Delhi", b: "Lal Bahadur Shastri Inst. of Management" },
    { param: "Program", a: "PGDM (2 years)", b: "PGDM / PGDM-Finance (2 years)" },
    { param: "Established", a: "1981", b: "1995" },
    { param: "NIRF 2024 Rank", a: "#48 (Management)", b: "#70–80 (Management)" },
    { param: "Accreditation", a: "AMBA, AICTE, NBA", b: "AICTE, NBA" },
    { param: "Admission", a: "CAT 90+ percentile", b: "CAT 75–80+ percentile" },
    { param: "Total Fees", a: "₹22L (2 years)", b: "₹14L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹17 LPA", b: "₹12 LPA" },
    { param: "Highest Package", a: "₹42 LPA", b: "₹24 LPA" },
    { param: "Batch Size", a: "~250 students", b: "~240 students" },
    { param: "Campus Location", a: "Qutab Institutional Area, South Delhi", b: "Dwarka, West Delhi" },
    { param: "Finance Specialisation", a: "Strong", b: "Very Strong — PGDM-Finance flagship" },
    { param: "Top Recruiters", a: "Deloitte, KPMG, EY, HUL", b: "HDFC Bank, Kotak, ICICI, Axis Bank, EY" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile", a: "90+ percentile", b: "75–80+ percentile", edge: "LBSIM (more accessible)" },
    { cat: "Total Fees", a: "₹22L", b: "₹14L", edge: "LBSIM (₹8L cheaper)" },
    { cat: "Average Placement", a: "₹17 LPA", b: "₹12 LPA", edge: "IMI Delhi (₹5 LPA higher)" },
    { cat: "Finance Career", a: "Strong", b: "Flagship strength", edge: "LBSIM (for banking/finance)" },
    { cat: "NIRF Rank", a: "#48", b: "#70–80", edge: "IMI Delhi" },
  ],
  cutoffNote: "CAT Cutoff & Program Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹17 LPA" },
    { label: "Highest Package", value: "₹42 LPA" },
    { label: "Top Sector", value: "Consulting, BFSI, FMCG" },
    { label: "Top Recruiter", value: "Deloitte, KPMG, EY" },
    { label: "% Placed", value: "~100%" },
  ],
  placementB: [
    { label: "Average Package", value: "₹12 LPA" },
    { label: "Highest Package", value: "₹24 LPA" },
    { label: "Top Sector", value: "Banking, NBFC, BFSI" },
    { label: "Top Recruiter", value: "HDFC, Kotak, Axis, ICICI" },
    { label: "% Placed", value: "~98%" },
  ],
  verdictText: "IMI Delhi is the stronger college overall — higher NIRF rank, higher placements (₹17 LPA vs ₹12 LPA), and AMBA global accreditation. However, LBSIM costs ₹8L less (₹14L vs ₹22L) and has a notably stronger Finance specialisation (PGDM-Finance) — if banking and BFSI is your target, LBSIM can match IMI's outcome at significantly lower cost.",
  chooseA: [
    "Your CAT percentile is 90+ and you want a higher-ranked PGDM college",
    "You want AMBA accreditation for global recognition",
    "You're targeting consulting, FMCG, or general management roles",
    "You want international exchange programs (IMI has 40+ partner universities)",
  ],
  chooseB: [
    "Your CAT percentile is 75–85 — LBSIM is reachable; IMI likely is not",
    "You want to specialise in Finance / Banking — LBSIM's PGDM-Finance is its flagship strength",
    "You want to save ₹8L in fees (₹14L vs ₹22L) — significant difference for self-financing students",
    "You're targeting banking/NBFC roles — HDFC, Kotak, Axis actively recruit from LBSIM",
  ],
  faqs: [
    { question: "Is IMI Delhi much better than LBSIM?", answer: "IMI Delhi is ranked higher (NIRF #48 vs LBSIM ~#75), has ₹5 LPA higher avg placement (₹17 vs ₹12), and carries AMBA accreditation. However, LBSIM costs ₹8L less (₹14L vs ₹22L). For a Finance specialisation student targeting banking careers, the gap narrows — LBSIM's PGDM-Finance places students well in HDFC, Kotak, Axis at ₹10–15 LPA, comparable outcome for ₹8L less cost." },
    { question: "What CAT score is needed for IMI and LBSIM?", answer: "IMI Delhi shortlists at 90+ CAT percentile. LBSIM shortlists at 75–80+ percentile. LBSIM also accepts XAT, MAT, CMAT scores. If your CAT score is 80–89 percentile, LBSIM is a strong target while IMI Delhi may be a stretch. Both require GD-PI rounds after shortlisting." },
    { question: "Is LBSIM good for Finance specialisation?", answer: "Yes — LBSIM's PGDM-Finance program is its flagship and the strongest program it offers. HDFC Bank, Kotak Mahindra Bank, Axis Bank, ICICI Bank, and Edelweiss are among top LBSIM recruiters. Students targeting banking operations, credit analysis, treasury, or retail banking find LBSIM's network valuable. The average Finance placement at LBSIM is ₹11–14 LPA." },
  ],
  related: [
    { label: "IMI Delhi vs FORE School", href: "/imi-delhi-vs-fore" },
    { label: "FMS vs IMI Delhi", href: "/fms-vs-imi-delhi" },
    { label: "MDI vs IMI", href: "/mdi-vs-imi" },
    { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
    { label: "LBSIM Delhi Admission 2026", href: "/colleges/lbsim-delhi" },
    { label: "IMI Delhi Admission 2026", href: "/colleges/imi-delhi" },
  ],
  cta: {
    heading: "Need help choosing between IMI Delhi and LBSIM based on your CAT score?",
    sub: "Our MBA counsellors will match you to the best-fit college for your profile.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 7. MDI vs IMI
// ═══════════════════════════════════════════════════════════
write("mdi-vs-imi", page({
  slug: "mdi-vs-imi",
  a: { short: "MDI Gurgaon", slug: "mdi-gurgaon" },
  b: { short: "IMI Delhi", slug: "imi-delhi" },
  title: "MDI Gurgaon vs IMI Delhi 2026 — Fees, Placements, CAT Score & Which is Better",
  desc: "MDI Gurgaon vs IMI Delhi 2026: NIRF rank, CAT cutoff (97+ vs 90+), fees (₹22L vs ₹22L), placements (₹26 LPA vs ₹17 LPA), campus. Detailed MBA head-to-head comparison.",
  keywords: ["MDI vs IMI", "MDI Gurgaon vs IMI Delhi 2026", "MDI IMI comparison MBA", "MDI better than IMI", "MDI Gurgaon IMI Delhi placements", "which is better MDI or IMI for MBA"],
  compData: [
    { param: "Full Name", a: "Management Development Institute, Gurgaon", b: "International Management Institute, Delhi" },
    { param: "Program", a: "PGPM / PGP (2 years)", b: "PGDM (2 years)" },
    { param: "Established", a: "1973", b: "1981" },
    { param: "NIRF 2024 Rank", a: "#9 (Management)", b: "#48 (Management)" },
    { param: "Accreditation", a: "AMBA, EQUIS, AICTE", b: "AMBA, AICTE, NBA" },
    { param: "Admission", a: "CAT 97+ percentile", b: "CAT 90+ percentile" },
    { param: "Total Fees", a: "₹22–23L (2 years)", b: "₹22L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹26 LPA", b: "₹17 LPA" },
    { param: "Highest Package", a: "₹77 LPA", b: "₹42 LPA" },
    { param: "Batch Size", a: "~230 students", b: "~250 students" },
    { param: "Location", a: "Sector 57, Gurgaon (Haryana)", b: "Qutab Institutional Area, South Delhi" },
    { param: "Top Recruiters", a: "BCG, Deloitte, Amazon, Aon, KPMG", b: "Deloitte, KPMG, EY, HUL, Axis Bank" },
    { param: "Double Accreditation", a: "AMBA + EQUIS (very rare in India)", b: "AMBA only" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile", a: "97+ percentile", b: "90+ percentile", edge: "IMI (more accessible)" },
    { cat: "Average Placement", a: "₹26 LPA", b: "₹17 LPA", edge: "MDI (₹9 LPA higher)" },
    { cat: "NIRF Rank", a: "#9", b: "#48", edge: "MDI (significantly higher)" },
    { cat: "Accreditation", a: "AMBA + EQUIS", b: "AMBA only", edge: "MDI (EQUIS is rare)" },
    { cat: "Same Fee Level", a: "₹22–23L", b: "₹22L", edge: "Similar" },
  ],
  cutoffNote: "CAT Cutoff & Key Metrics Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹26 LPA" },
    { label: "Highest Package", value: "₹77 LPA" },
    { label: "Companies Visiting", value: "200+" },
    { label: "Top Recruiter", value: "BCG, Amazon, Deloitte" },
    { label: "% Placed", value: "~100%" },
  ],
  placementB: [
    { label: "Average Package", value: "₹17 LPA" },
    { label: "Highest Package", value: "₹42 LPA" },
    { label: "Top Sector", value: "BFSI, Consulting, FMCG" },
    { label: "Top Recruiter", value: "Deloitte, KPMG, EY" },
    { label: "% Placed", value: "~100%" },
  ],
  verdictText: "MDI Gurgaon wins decisively — NIRF #9 vs IMI #48, ₹26 LPA avg vs ₹17 LPA, double accreditation (AMBA + EQUIS), and significantly stronger consulting/strategy recruiter base. At the same fee level (₹22–23L), MDI is a far better value. The only reason to choose IMI over MDI is if your CAT score is 90–96 (IMI range but not MDI range).",
  chooseA: [
    "Your CAT percentile is 97+ — MDI is NIRF #9 at similar fees to IMI; no reason to choose IMI",
    "You want double accreditation (AMBA + EQUIS) — MDI is one of very few Indian MBA colleges with EQUIS",
    "You want consulting/strategy roles — BCG, Deloitte, Aon recruit heavily at MDI",
    "You want the strongest MBA outside IIMs A/B/C at the same fee level",
  ],
  chooseB: [
    "Your CAT percentile is 90–96 — IMI is within reach; MDI likely is not",
    "You prefer Delhi location over Gurgaon (though both are NCR)",
    "You want international exchange programs — IMI has 40+ partner universities",
    "You want a Delhi University ecosystem for networking and events",
  ],
  faqs: [
    { question: "Is MDI Gurgaon better than IMI Delhi?", answer: "Yes, significantly — MDI is NIRF #9, IMI is #48. MDI's average placement is ₹26 LPA vs IMI's ₹17 LPA. MDI has double accreditation (AMBA + EQUIS — very rare in India). Both charge similar fees (~₹22L). For a student with 97+ CAT percentile who can get MDI, choosing IMI instead would be a significant downgrade. MDI is in the IIM-B/C/L tier of non-IIM MBAs." },
    { question: "What is the CAT cutoff for MDI vs IMI Delhi?", answer: "MDI Gurgaon shortlists at 97+ CAT percentile (General). The actual selection considers academics, work experience, GD-WAT-PI performance. IMI Delhi shortlists at 90+ percentile. The 7-percentile gap is meaningful — students at 90–96 percentile are IMI candidates, not MDI candidates. Both have similar fees, making MDI the clear value choice for 97+ scorers." },
    { question: "MDI vs IMI — which is closer to IIM level?", answer: "MDI Gurgaon is closer to IIM level — often grouped with IIM Kozhikode, IIM Shillong, and XLRI in the 'B-tier IIM equivalent' category. MDI placement (₹26 LPA) is similar to IIM Kozhikode (₹29 LPA) and significantly above IMI (₹17 LPA). IMI Delhi is a solid MBA college but in a different tier — comparable to FORE, LBSIM, and Great Lakes rather than IIM-equivalent colleges." },
  ],
  related: [
    { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
    { label: "MDI vs IMT Ghaziabad", href: "/mdi-vs-imt" },
    { label: "FMS vs IMI Delhi", href: "/fms-vs-imi-delhi" },
    { label: "IMI vs FORE School", href: "/imi-delhi-vs-fore" },
    { label: "MDI Gurgaon Admission 2026", href: "/colleges/mdi-gurgaon" },
    { label: "MBA Colleges Delhi NCR 2026", href: "/mba-colleges-delhi" },
  ],
  cta: {
    heading: "Targeting MDI or IMI based on your CAT score?",
    sub: "Our MBA counsellors will assess your exact profile and recommend the right college.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 8. MDI vs IMT
// ═══════════════════════════════════════════════════════════
write("mdi-vs-imt", page({
  slug: "mdi-vs-imt",
  a: { short: "MDI Gurgaon", slug: "mdi-gurgaon" },
  b: { short: "IMT Ghaziabad", slug: "imt-ghaziabad" },
  title: "MDI Gurgaon vs IMT Ghaziabad 2026 — Placements, CAT Cutoff & Which is Better",
  desc: "MDI Gurgaon vs IMT Ghaziabad 2026 MBA comparison: NIRF rank (#9 vs #30), CAT cutoff (97+ vs 93+), fees (₹22L vs ₹19L), placements (₹26 LPA vs ₹19 LPA), campus. Detailed head-to-head.",
  keywords: ["MDI vs IMT", "MDI Gurgaon vs IMT Ghaziabad 2026", "MDI IMT comparison", "MDI better than IMT Ghaziabad", "IMT Ghaziabad vs MDI placements", "CAT cutoff MDI IMT 2026"],
  compData: [
    { param: "Full Name", a: "Management Development Institute, Gurgaon", b: "Institute of Management Technology, Ghaziabad" },
    { param: "Program", a: "PGPM / PGP (2 years)", b: "PGDM (2 years)" },
    { param: "Established", a: "1973", b: "1980" },
    { param: "NIRF 2024 Rank", a: "#9 (Management)", b: "#30 (Management)" },
    { param: "Accreditation", a: "AMBA + EQUIS", b: "AMBA, AICTE" },
    { param: "Admission", a: "CAT 97+ percentile", b: "CAT 93+ percentile" },
    { param: "Total Fees", a: "₹22–23L (2 years)", b: "₹19L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹26 LPA", b: "₹19 LPA" },
    { param: "Highest Package", a: "₹77 LPA", b: "₹55 LPA" },
    { param: "Location", a: "Sector 57, Gurgaon", b: "NH-58, Ghaziabad (NCR)" },
    { param: "Batch Size", a: "~230 students", b: "~470 students" },
    { param: "Top Recruiters", a: "BCG, Amazon, Deloitte, Aon, KPMG", b: "Amazon, Deloitte, KPMG, HCL, Gartner" },
    { param: "Campus", a: "75-acre green campus", b: "100-acre campus, Ghaziabad" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile", a: "97+ percentile", b: "93+ percentile", edge: "IMT (more accessible)" },
    { cat: "Total Fees", a: "₹22–23L", b: "₹19L", edge: "IMT (₹3–4L cheaper)" },
    { cat: "Average Placement", a: "₹26 LPA", b: "₹19 LPA", edge: "MDI (₹7 LPA higher)" },
    { cat: "NIRF Rank", a: "#9", b: "#30", edge: "MDI (significantly higher)" },
    { cat: "Accreditation", a: "AMBA + EQUIS", b: "AMBA only", edge: "MDI (EQUIS rare)" },
  ],
  cutoffNote: "CAT Cutoff & Fees Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹26 LPA" },
    { label: "Highest Package", value: "₹77 LPA" },
    { label: "Companies", value: "200+" },
    { label: "Top Recruiter", value: "BCG, Amazon, Deloitte" },
    { label: "% Placed", value: "~100%" },
  ],
  placementB: [
    { label: "Average Package", value: "₹19 LPA" },
    { label: "Highest Package", value: "₹55 LPA" },
    { label: "Companies", value: "250+" },
    { label: "Top Recruiter", value: "Amazon, Deloitte, Gartner" },
    { label: "% Placed", value: "~100%" },
  ],
  verdictText: "MDI Gurgaon wins convincingly — NIRF #9 vs IMT #30, ₹26 LPA avg vs ₹19 LPA, and double accreditation (AMBA + EQUIS). Both are strong NCR MBA colleges. The choice comes down to CAT score: 97+ can target MDI, 93–96 makes IMT the right choice. At MDI's ₹26 LPA avg vs IMT's ₹19 LPA, the ₹3–4L extra fee at MDI pays back within months of joining.",
  chooseA: [
    "Your CAT percentile is 97+ — MDI is NIRF #9 with ₹7 LPA higher avg placement for just ₹3L more fees",
    "You want double accreditation (AMBA + EQUIS) — relevant for international MBA applications",
    "You want consulting/strategy firms — BCG, Aon, McKinsey have stronger MDI presence",
    "You want a Gurgaon location — proximity to corporate offices and startup ecosystem",
  ],
  chooseB: [
    "Your CAT percentile is 93–96 — IMT is more accessible and NIRF #30 is still excellent",
    "You want to save ₹3–4L in fees (IMT ₹19L vs MDI ₹22–23L)",
    "You prefer a larger batch (IMT ~470 vs MDI ~230) for more diverse peer group",
    "You're targeting operations, supply chain, or IT consulting roles where IMT has strong alumni",
  ],
  faqs: [
    { question: "Is MDI Gurgaon better than IMT Ghaziabad?", answer: "Yes — MDI is NIRF #9 vs IMT #30, avg placement ₹26 LPA vs ₹19 LPA, and has double accreditation (AMBA + EQUIS). MDI is in a tier above IMT — comparable to IIM Kozhikode, while IMT is in the FORE/TAPMI tier. For a 97+ CAT scorer choosing between MDI and IMT, MDI wins on every metric except batch diversity (IMT has a larger batch of ~470)." },
    { question: "What is the CAT cutoff for MDI and IMT?", answer: "MDI Gurgaon: 97+ CAT percentile for shortlisting. Selection based on academics, work experience, GD-WAT-PI. IMT Ghaziabad: 93+ CAT percentile. IMT also accepts XAT and GMAT. The 4-percentile gap between them is significant — many students who are shortlisted by IMT are not shortlisted by MDI. For 94–96 percentile scorers, IMT is the right target." },
    { question: "Which has better ROI — MDI or IMT Ghaziabad?", answer: "MDI has better ROI in absolute terms — ₹26 LPA salary / ₹22L fees = 1.18x. IMT: ₹19 LPA / ₹19L fees = 1.0x. MDI's higher salary more than offsets the ₹3–4L fee difference. Both colleges see nearly full placement, making the comparison more about salary premium than placement risk. MDI graduates pay back fees in under 11 months; IMT graduates in about 12 months." },
  ],
  related: [
    { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
    { label: "MDI vs IMI Delhi", href: "/mdi-vs-imi" },
    { label: "IMT vs BIMTECH", href: "/imt-vs-bimtech" },
    { label: "MBA Colleges Delhi NCR 2026", href: "/mba-colleges-delhi" },
    { label: "MDI Gurgaon Admission 2026", href: "/colleges/mdi-gurgaon" },
    { label: "IMT Ghaziabad Admission 2026", href: "/colleges/imt-ghaziabad" },
  ],
  cta: {
    heading: "MDI or IMT — which matches your CAT score and career goals?",
    sub: "Our MBA counsellors will help you make the right call with your profile.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 9. IMT vs BIMTECH
// ═══════════════════════════════════════════════════════════
write("imt-vs-bimtech", page({
  slug: "imt-vs-bimtech",
  a: { short: "IMT Ghaziabad", slug: "imt-ghaziabad" },
  b: { short: "BIMTECH", slug: "bimtech-greater-noida" },
  title: "IMT Ghaziabad vs BIMTECH 2026 — Fees, Placements, CAT Cutoff & Which is Better",
  desc: "IMT Ghaziabad vs BIMTECH (Birla Institute of Management Technology) 2026: NIRF rank, fees (₹19L vs ₹13L), CAT cutoff, placements (₹19 LPA vs ₹12 LPA), campus, specialisations.",
  keywords: ["IMT vs BIMTECH", "IMT Ghaziabad vs BIMTECH 2026", "IMT BIMTECH comparison MBA", "BIMTECH vs IMT Ghaziabad placements", "BIMTECH Greater Noida CAT cutoff", "which is better IMT or BIMTECH"],
  compData: [
    { param: "Full Name", a: "Institute of Management Technology, Ghaziabad", b: "Birla Institute of Management Technology, Greater Noida" },
    { param: "Program", a: "PGDM (2 years)", b: "PGDM / PGDM-IBM / PGDM-Insurance (2 yrs)" },
    { param: "Established", a: "1980", b: "1988" },
    { param: "NIRF 2024 Rank", a: "#30 (Management)", b: "#50–60 (Management)" },
    { param: "Accreditation", a: "AMBA, AICTE", b: "AICTE, NBA, AACSB candidate" },
    { param: "Admission", a: "CAT 93+ percentile", b: "CAT 80–85+ percentile" },
    { param: "Total Fees", a: "₹19L (2 years)", b: "₹13L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹19 LPA", b: "₹12 LPA" },
    { param: "Highest Package", a: "₹55 LPA", b: "₹30 LPA" },
    { param: "Location", a: "NH-58, Ghaziabad", b: "Greater Noida (NCR)" },
    { param: "Batch Size", a: "~470 students", b: "~350 students" },
    { param: "Unique Programs", a: "PGDM + Dual country programs", b: "PGDM-Insurance (India's only dedicated MBA)" },
    { param: "Top Recruiters", a: "Amazon, Deloitte, Gartner, HCL", b: "ICICI Lombard, HDFC Ergo, Mahindra, EY" },
  ],
  cutoffRows: [
    { cat: "CAT Percentile", a: "93+ percentile", b: "80–85+ percentile", edge: "BIMTECH (more accessible)" },
    { cat: "Total Fees", a: "₹19L", b: "₹13L", edge: "BIMTECH (₹6L cheaper)" },
    { cat: "Average Placement", a: "₹19 LPA", b: "₹12 LPA", edge: "IMT (₹7 LPA higher)" },
    { cat: "NIRF Rank", a: "#30", b: "#50–60", edge: "IMT" },
    { cat: "Insurance MBA", a: "Not available", b: "PGDM-Insurance (India's only)", edge: "BIMTECH (unique)" },
  ],
  cutoffNote: "CAT Cutoff, Fees & Placement Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹19 LPA" },
    { label: "Highest Package", value: "₹55 LPA" },
    { label: "Top Recruiter", value: "Amazon, Deloitte, Gartner" },
    { label: "% Placed", value: "~100%" },
    { label: "International Placements", value: "Limited" },
  ],
  placementB: [
    { label: "Average Package", value: "₹12 LPA" },
    { label: "Highest Package", value: "₹30 LPA" },
    { label: "Top Recruiter", value: "ICICI Lombard, HDFC Ergo, EY" },
    { label: "% Placed", value: "~98%" },
    { label: "Insurance Placements", value: "Best in India" },
  ],
  verdictText: "IMT Ghaziabad is the better college overall — NIRF #30 vs BIMTECH ~#55, ₹19 LPA vs ₹12 LPA average placement, AMBA accreditation, and a stronger general management recruiter base. However, BIMTECH costs ₹6L less (₹13L vs ₹19L) and offers India's only PGDM-Insurance — if you're targeting the insurance/BFSI sector, BIMTECH's specialisation edge is unmatched.",
  chooseA: [
    "Your CAT percentile is 93+ — IMT is significantly higher ranked and better placed",
    "You want AMBA accreditation for global MBA recognition",
    "You want consulting, FMCG, or IT consulting roles — Amazon, Deloitte, Gartner recruit at IMT",
    "You want a larger peer network (470 students/year vs 350 at BIMTECH)",
  ],
  chooseB: [
    "Your CAT percentile is 80–88 — BIMTECH is more accessible than IMT",
    "You want to specialise in Insurance / Risk Management — BIMTECH's PGDM-Insurance is India's only dedicated program",
    "You want to save ₹6L in fees (₹13L vs ₹19L)",
    "You're targeting BFSI, insurance companies, or NBFCs where BIMTECH has strong alumni",
  ],
  faqs: [
    { question: "Is IMT Ghaziabad better than BIMTECH?", answer: "Yes — IMT is NIRF #30 vs BIMTECH ~#55, average placement ₹19 LPA vs ₹12 LPA, AMBA accredited, and has a larger, more diverse batch with stronger general management company recruitment. However, BIMTECH is the better choice for Insurance/Risk Management careers (PGDM-Insurance) and for students with 80–88 CAT percentile who can't access IMT." },
    { question: "What is the CAT cutoff for IMT and BIMTECH?", answer: "IMT Ghaziabad: 93+ CAT percentile for shortlisting. Also accepts XAT and GMAT. BIMTECH: 80–85+ CAT percentile, also accepts XAT, MAT, CMAT. For 85–92 percentile scorers, BIMTECH is a strong target and IMT is a stretch — don't apply to IMT with 87 percentile expecting a call." },
    { question: "Is BIMTECH good for non-engineers and Finance specialists?", answer: "Yes — BIMTECH welcomes non-engineers (Commerce, Humanities, Science) and has a strong Finance and Insurance specialisation. The PGDM-Insurance is India's only dedicated program with deep industry connections to IRDAI, ICICI Lombard, HDFC Ergo, Bajaj Allianz, and SBI Life. For students targeting insurance, actuarial support, or risk management careers, BIMTECH is the best MBA option regardless of rank." },
  ],
  related: [
    { label: "MDI vs IMT Ghaziabad", href: "/mdi-vs-imt" },
    { label: "JIMS vs NDIM", href: "/jims-vs-ndim" },
    { label: "MBA Colleges Delhi NCR 2026", href: "/mba-colleges-delhi" },
    { label: "IMT Ghaziabad Admission 2026", href: "/colleges/imt-ghaziabad" },
    { label: "BIMTECH Admission 2026", href: "/colleges/bimtech-greater-noida" },
    { label: "MBA Colleges Greater Noida", href: "/mba-colleges-greater-noida" },
  ],
  cta: {
    heading: "Comparing IMT and BIMTECH for your CAT score?",
    sub: "Our counsellors will tell you which is the right call for your profile and career goals.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 10. JIMS vs NDIM
// ═══════════════════════════════════════════════════════════
write("jims-vs-ndim", page({
  slug: "jims-vs-ndim",
  a: { short: "JIMS Delhi", slug: "jims-delhi" },
  b: { short: "NDIM Delhi", slug: "ndim-delhi" },
  title: "JIMS vs NDIM Delhi 2026 — Fees, Placements, Admission & Which is Better",
  desc: "JIMS (Jagannath International Management School) vs NDIM (New Delhi Institute of Management) 2026: fees (₹10L vs ₹8L), CAT/MAT cutoff, placements, campus, AICTE approval. Honest comparison.",
  keywords: ["JIMS vs NDIM", "JIMS Delhi vs NDIM 2026", "JIMS NDIM comparison MBA Delhi", "NDIM Delhi placements vs JIMS", "JIMS Rohini vs NDIM Tughlakabad", "which is better JIMS or NDIM Delhi MBA"],
  compData: [
    { param: "Full Name", a: "Jagannath International Management School", b: "New Delhi Institute of Management" },
    { param: "Program", a: "PGDM (2 years)", b: "PGDM (2 years)" },
    { param: "Established", a: "1993", b: "1992" },
    { param: "Approval", a: "AICTE approved", b: "AICTE approved" },
    { param: "NIRF Rank", a: "Not in top 100", b: "Not in top 100" },
    { param: "Admission", a: "CAT/XAT/MAT 60+ percentile", b: "CAT/XAT/MAT 55+ percentile" },
    { param: "Total Fees", a: "₹10–11L (2 years)", b: "₹8–9L (2 years)" },
    { param: "Avg Placement (2024)", a: "₹6–8 LPA", b: "₹5–7 LPA" },
    { param: "Highest Package", a: "₹15 LPA", b: "₹14 LPA" },
    { param: "Campuses", a: "Rohini, Vasant Kunj (multiple)", b: "Tughlakabad Extension" },
    { param: "Batch Size", a: "~600 students across campuses", b: "~300 students" },
    { param: "Industry Connections", a: "Strong — 25+ years Delhi NCR", b: "Good — Delhi corporate connections" },
    { param: "Specialisations", a: "Finance, Marketing, HR, IT, IB", b: "Finance, Marketing, HR" },
  ],
  cutoffRows: [
    { cat: "CAT/MAT Percentile", a: "60+ percentile", b: "55+ percentile", edge: "NDIM (easier entry)" },
    { cat: "Total Fees", a: "₹10–11L", b: "₹8–9L", edge: "NDIM (₹2L cheaper)" },
    { cat: "Average Placement", a: "₹6–8 LPA", b: "₹5–7 LPA", edge: "JIMS (marginal)" },
    { cat: "Campus Locations", a: "Multiple (Rohini, Vasant Kunj)", b: "Single (Tughlakabad)", edge: "JIMS" },
    { cat: "Specialisation Width", a: "Finance, Marketing, HR, IT, IB", b: "Finance, Marketing, HR", edge: "JIMS" },
  ],
  cutoffNote: "Admission & Fees Comparison 2026",
  placementA: [
    { label: "Average Package", value: "₹6–8 LPA" },
    { label: "Highest Package", value: "₹15 LPA" },
    { label: "Top Sector", value: "BFSI, Sales, Marketing" },
    { label: "% Placed", value: "~90%" },
    { label: "Top Recruiter", value: "HDFC, Axis, Wipro, ITC" },
  ],
  placementB: [
    { label: "Average Package", value: "₹5–7 LPA" },
    { label: "Highest Package", value: "₹14 LPA" },
    { label: "Top Sector", value: "BFSI, IT Sales, Retail" },
    { label: "% Placed", value: "~88%" },
    { label: "Top Recruiter", value: "ICICI, HCL, Accenture" },
  ],
  verdictText: "JIMS is marginally better than NDIM — slightly higher placements (₹6–8 LPA vs ₹5–7 LPA), broader specialisations, and multiple campus locations. However, both are mid-tier Delhi MBA colleges with similar profiles. The ₹2L fee difference (NDIM is cheaper) may be worth considering if budget is a constraint. Both are best suited for students with 50–70 CAT percentile or MAT 600+ looking for an AICTE-approved PGDM in Delhi.",
  chooseA: [
    "You want more specialisation choices (JIMS offers IT and International Business tracks)",
    "You prefer Rohini or Vasant Kunj campus locations",
    "You want a slightly stronger placement track record",
    "You want the larger peer network (JIMS has ~600 students across campuses)",
  ],
  chooseB: [
    "You want to save ₹2L in fees (NDIM at ₹8–9L vs JIMS ₹10–11L)",
    "You prefer a smaller, more intimate batch (~300 students)",
    "Your CAT/MAT score is in the 55–62 percentile range",
    "South Delhi / Tughlakabad location is more convenient for you",
  ],
  faqs: [
    { question: "Is JIMS better than NDIM for MBA in Delhi?", answer: "JIMS has slightly better placements (₹6–8 LPA vs NDIM ₹5–7 LPA), more specialisations, and multiple campuses. Both are AICTE-approved PGDM colleges. For students targeting a Delhi-based MBA with CAT 55–70 percentile, both are comparable options — JIMS has a minor edge in placement outcomes while NDIM is ₹2L cheaper." },
    { question: "What score do I need for JIMS and NDIM?", answer: "JIMS: CAT 60+, XAT 55+, MAT 600+, CMAT 150+. NDIM: CAT 55+, MAT 550+, CMAT 130+. Both accept a wide range of management entrance exams. Direct admission may be available based on Class 12 and graduation marks. Both conduct group discussions and personal interviews after shortlisting." },
    { question: "Are JIMS and NDIM good for starting a career in banking/finance?", answer: "Both colleges have reasonable BFSI connections — HDFC, ICICI, Axis, Kotak, and NBFCs recruit from both. Salaries typically range ₹4–8 LPA for entry-level banking roles from these colleges. For higher BFSI ambitions (₹12–20 LPA roles at top banks), target IMI, LBSIM, or higher-ranked colleges. JIMS and NDIM are strong for retail banking, SME banking, and insurance sales tracks." },
  ],
  related: [
    { label: "IMT vs BIMTECH", href: "/imt-vs-bimtech" },
    { label: "IMI Delhi vs FORE School", href: "/imi-delhi-vs-fore" },
    { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi" },
    { label: "PGDM vs MBA Delhi", href: "/pgdm-vs-mba-delhi" },
    { label: "JIMS Admission 2026", href: "/colleges/jims-delhi" },
    { label: "NDIM Delhi Admission 2026", href: "/colleges/ndim-delhi" },
  ],
  cta: {
    heading: "JIMS or NDIM — which suits your CAT/MAT score and career goal?",
    sub: "Talk to our counsellors for a personalised recommendation based on your profile.",
  },
}))

// ═══════════════════════════════════════════════════════════
// 11. MAIT vs MSIT
// ═══════════════════════════════════════════════════════════
write("mait-vs-msit", page({
  slug: "mait-vs-msit",
  a: { short: "MAIT Delhi", slug: "mait-delhi" },
  b: { short: "MSIT Delhi", slug: "msit-delhi" },
  title: "MAIT vs MSIT Delhi 2026 — Fees, Placements, IPU CET Cutoff & Which is Better",
  desc: "MAIT (Maharaja Agrasen Institute of Technology) vs MSIT (Maharaja Surajmal Institute of Technology) Delhi 2026: IPU CET cutoff, fees, CSE placements, hostel, NAAC grade. Detailed comparison.",
  keywords: ["MAIT vs MSIT", "MAIT Delhi vs MSIT Delhi 2026", "MAIT MSIT comparison", "IPU CET cutoff MAIT MSIT", "MSIT vs MAIT placements", "which is better MAIT or MSIT Delhi engineering"],
  compData: [
    { param: "Full Name", a: "Maharaja Agrasen Institute of Technology", b: "Maharaja Surajmal Institute of Technology" },
    { param: "Established", a: "1999", b: "2000" },
    { param: "Affiliation", a: "GGSIPU (IP University)", b: "GGSIPU (IP University)" },
    { param: "NAAC Grade", a: "A", b: "A" },
    { param: "NBA Accreditation", a: "Yes (CSE, ECE, IT)", b: "Yes (CSE, ECE, IT)" },
    { param: "Admission", a: "IPU CET → JEE Main merit", b: "IPU CET → JEE Main merit" },
    { param: "Annual Fees (B.Tech)", a: "₹1.2L–1.5L/yr", b: "₹1.2L–1.5L/yr" },
    { param: "Avg Placement (2024)", a: "₹7–9 LPA", b: "₹6–8 LPA" },
    { param: "Highest Package", a: "₹35 LPA", b: "₹28 LPA" },
    { param: "Campus Location", a: "Rohini (Sector 22), North Delhi", b: "Janakpuri, West Delhi" },
    { param: "Campus Size", a: "15 acres", b: "8 acres" },
    { param: "Hostel", a: "Yes (limited)", b: "Yes (limited)" },
    { param: "Top Recruiters", a: "TCS, Infosys, Wipro, Amazon, Flipkart", b: "TCS, Infosys, HCL, Wipro, Byju's" },
  ],
  cutoffRows: [
    { cat: "CSE (General, Delhi)", a: "JEE Main 90+ percentile (IPU)", b: "JEE Main 88–90+ percentile (IPU)", edge: "Similar (MAIT slightly higher)" },
    { cat: "ECE (General)", a: "JEE Main 82+ percentile", b: "JEE Main 80+ percentile", edge: "Similar" },
    { cat: "IT Branch", a: "JEE Main 88+ percentile", b: "JEE Main 85+ percentile", edge: "Similar" },
    { cat: "Annual Fees", a: "₹1.2–1.5L/yr", b: "₹1.2–1.5L/yr", edge: "Equal" },
    { cat: "Average Placement", a: "₹7–9 LPA", b: "₹6–8 LPA", edge: "MAIT (marginal)" },
  ],
  cutoffNote: "IPU CET / JEE Main Cutoff Comparison 2025",
  placementA: [
    { label: "Average Package", value: "₹7–9 LPA" },
    { label: "Highest Package", value: "₹35 LPA" },
    { label: "Top Recruiter", value: "Amazon, Flipkart, Infosys" },
    { label: "% Placed (CSE)", value: "~85%" },
    { label: "Mass Recruiters", value: "TCS, Wipro, HCL" },
  ],
  placementB: [
    { label: "Average Package", value: "₹6–8 LPA" },
    { label: "Highest Package", value: "₹28 LPA" },
    { label: "Top Recruiter", value: "TCS, HCL, Infosys, Byju's" },
    { label: "% Placed (CSE)", value: "~82%" },
    { label: "Mass Recruiters", value: "TCS, Wipro, Cognizant" },
  ],
  verdictText: "MAIT has a slight edge over MSIT — marginally higher placements (₹7–9 LPA vs ₹6–8 LPA), higher highest package (₹35 LPA vs ₹28 LPA), and a larger campus (Rohini, 15 acres). However, both are IP University–affiliated private colleges with nearly identical fees, NAAC A grade, and NBA-accredited programs. The difference is small — location matters more (Rohini vs Janakpuri).",
  chooseA: [
    "Your JEE Main percentile is 90+ for CSE and you prefer the Rohini/North Delhi area",
    "You want a slightly larger campus (15 acres vs 8 acres at MSIT)",
    "You want the marginally better placement track (₹35 LPA highest vs ₹28 LPA at MSIT)",
    "You want Amazon or Flipkart as target companies — they recruit more at MAIT",
  ],
  chooseB: [
    "You prefer Janakpuri/West Delhi location — more accessible via Blue Line metro",
    "Your JEE Main percentile is 85–89 — MSIT CSE may be more accessible",
    "You have family or preferred hostel in West Delhi area",
    "You're specifically targeting HCL, Byju's, or IT services companies with strong MSIT presence",
  ],
  faqs: [
    { question: "Is MAIT better than MSIT for engineering in Delhi?", answer: "MAIT is slightly better — higher highest package (₹35 LPA vs ₹28 LPA), larger campus, marginally better placement percentages. However, both are NAAC A-grade, NBA-accredited IP University colleges with identical fees (~₹1.2–1.5L/yr) and very similar placements. If location doesn't matter, MAIT has the edge. If Janakpuri/West Delhi is more convenient, MSIT is a very comparable choice." },
    { question: "What is the IPU CET cutoff for MAIT and MSIT?", answer: "MAIT CSE requires approximately JEE Main 90+ percentile equivalent in IPU CET (General, Delhi quota). MSIT CSE requires approximately 88–90+ percentile. Both follow the GGSIPU JAC counselling process. Exact cutoffs vary yearly — check the official IPU CET counselling cutoff list at ipu.ac.in. ECE/IT branches have cutoffs 3–8 percentile lower than CSE at both colleges." },
    { question: "Should I choose MAIT or MSIT for a tech career?", answer: "Both prepare you equally well for tech careers — TCS, Infosys, Wipro mass recruit from both; Amazon and Flipkart selective-recruit from both. The average package gap (₹7–9 LPA vs ₹6–8 LPA) is small and depends more on your skills than the college. Choose based on which campus you can reach more easily for 4 years — that daily commute and campus life matters more than the marginal placement difference at this tier." },
    { question: "Are MAIT and MSIT good IP University colleges?", answer: "Yes — both are among the top 5 private engineering colleges under GGSIPU. The IP University tier for private colleges goes: MSIT/MAIT/IGDTUW (govt) → BPIT, ABES → BVP, JIMS Engineering → others. Getting CSE at MAIT or MSIT puts you in IP University's top tier of private colleges, comparable to NSUT/DTU for students who don't qualify JAC Delhi cutoffs." },
  ],
  related: [
    { label: "DTU vs NSUT Comparison", href: "/dtu-vs-nsut" },
    { label: "NSUT vs IIIT Delhi", href: "/nsut-vs-iiit-delhi" },
    { label: "Engineering Colleges Delhi 2026", href: "/engineering-colleges-delhi" },
    { label: "IPU CET Counselling 2026", href: "/ipu-colleges-delhi" },
    { label: "MAIT Admission 2026", href: "/colleges/mait-delhi" },
    { label: "MSIT Admission 2026", href: "/colleges/msit-delhi" },
  ],
  cta: {
    heading: "MAIT or MSIT — which is right for your IPU CET rank?",
    sub: "Our counsellors know the exact IPU cutoffs and can predict your best college option.",
  },
}))

console.log("\n✅ All 11 pages generated.")
