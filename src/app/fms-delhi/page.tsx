import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "FMS Delhi MBA 2026 | Fees ₹55K, CAT Cutoff 99+%ile & Placement ₹32 LPA",
  description: "FMS Delhi (Faculty of Management Studies, DU) MBA 2026: India's best value MBA at ₹55K total fees. CAT 99+ percentile cutoff, ₹32 LPA avg placement, ₹75 LPA highest. Admission process, eligibility & dates.",
  path: "/fms-delhi",
  keywords: [
    "fms delhi mba admission",
    "fms delhi cutoff",
    "fms delhi fees",
    "fms delhi placement",
    "fms delhi ranking",
    "fms delhi cat cutoff 2026",
    "fms delhi mba 2026",
    "faculty of management studies delhi",
    "fms delhi eligibility",
    "fms delhi selection process",
    "fms delhi average package",
    "fms delhi vs mdi gurgaon",
    "fms delhi mba fees total",
    "du mba admission fms delhi",
    "fms delhi hostel",
  ],
})

export const revalidate = 300

const stats = [
  { label: "NIRF Rank 2024", value: "#13", sub: "Management" },
  { label: "Total MBA Fees", value: "₹55K", sub: "2-year programme" },
  { label: "Avg Placement 2024", value: "₹32 LPA", sub: "100% placed" },
  { label: "Highest Package", value: "₹75 LPA", sub: "2024 batch" },
  { label: "CAT Cutoff", value: "99+ %ile", sub: "General category" },
  { label: "Seats", value: "222", sub: "MBA + MBA(MS)" },
]

const placements = [
  { sector: "Consulting", avg: "₹28–45 LPA", cos: "McKinsey, BCG, Bain, EY-Parthenon" },
  { sector: "Finance / IB", avg: "₹25–50 LPA", cos: "Goldman Sachs, JP Morgan, Deutsche, HSBC" },
  { sector: "FMCG & Retail", avg: "₹18–32 LPA", cos: "HUL, ITC, Nestle, P&G, Marico" },
  { sector: "Tech / Product", avg: "₹20–40 LPA", cos: "Google, Microsoft, Amazon, Flipkart" },
  { sector: "General Mgmt", avg: "₹15–28 LPA", cos: "Reliance, Tata, Mahindra, L&T" },
]

const faqs = [
  { q: "What is FMS Delhi CAT cutoff 2026?", a: "FMS Delhi CAT 2026 cutoff (estimated): General/UR — 99+ percentile for shortlisting, final admission typically requires 99.5+ percentile after GDPI. OBC-NCL — 97+ percentile. SC — 90+ percentile. ST — 85+ percentile. PWD — 85+ percentile. FMS also considers Class 10, Class 12, and graduation marks (composite score). Work experience is valued but not mandatory. In 2024, the lowest CAT score admitted in General category was 99.1 percentile." },
  { q: "What are the total MBA fees at FMS Delhi?", a: "FMS Delhi MBA total fees (2-year programme, 2026 batch): ₹55,000 total for the entire 2-year MBA — making it India's most affordable top-ranked MBA. Breakdown: Tuition ₹10,000/year, Development fee ₹5,000/year, Examination fee ₹2,500/year, Other charges ₹15,000/year approximately. Hostel fee (optional): ₹40,000–60,000/year on campus. This compares with MDI Gurgaon at ₹22.5L and IIM-A at ₹25L for the same 2-year MBA." },
  { q: "What is the FMS Delhi placement average 2024?", a: "FMS Delhi Placement 2024: Average CTC ₹32.14 LPA, Median CTC ₹28 LPA, Highest CTC ₹75 LPA. 100% placement with 222 students placed. Top sectors: Consulting (McKinsey, BCG, Bain hired 35+ students), Finance (Goldman Sachs, JP Morgan), FMCG (HUL, ITC, P&G). Dream offers (₹40+ LPA) extended to 28% of the batch. FMS placement is consistently #1 among Delhi MBA colleges and Top 5 nationally." },
  { q: "What is the FMS Delhi MBA admission process 2026?", a: "FMS Delhi MBA 2026 admission steps: (1) Appear for CAT 2025 (November 2025) — target 99+ percentile. (2) Apply via DU MBA admission portal admission.uod.ac.in in January 2026 — application fee ₹2,000. (3) Shortlisting based on composite score (CAT 55% + 10th 10% + 12th 10% + Graduation 25%). (4) Group Discussion (GD) + Personal Interview (PI) at FMS Delhi campus — February-March 2026. (5) Final merit list in April 2026. Classes begin July 2026." },
  { q: "Is FMS Delhi better than IIM Calcutta?", a: "FMS Delhi vs IIM Calcutta comparison: IIM-C ranks higher (NIRF #4 vs FMS #13) and has ₹34 LPA average (vs FMS ₹32 LPA). IIM-C fees: ₹27L total (vs FMS ₹55K). CAT cutoff: Both require 99+ percentile. IIM-C has a longer, more established alumni network globally. However, FMS delivers comparable placement at 500× better ROI — most Finance/Consulting professionals who get both offers choose IIM-C for IB, but FMS for those optimizing ROI. FMS has a slight edge in government/PSU finance roles." },
  { q: "Does FMS Delhi offer MBA in Finance or Marketing?", a: "FMS Delhi does not have fixed specializations like IIMs. Instead, FMS offers an integrated MBA with electives chosen in Year 2. Popular elective tracks: Finance (50+ students choose Finance electives — Capital Markets, Investment Banking, Derivatives), Marketing (Brand Management, Digital Marketing, Consumer Behaviour), Consulting (Strategy, Operations, Analytics). The programme is generalist in Year 1 and specialization-driven in Year 2. FMS also offers MBA (Management of Services) — MS track with 54 seats." },
]

export default function FMSDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "FMS Delhi", url: "/fms-delhi" },
  ])
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Faculty of Management Studies, University of Delhi",
    alternateName: "FMS Delhi",
    url: "https://fms.edu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "University Enclave, Delhi University North Campus",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110007",
      addressCountry: "IN",
    },
    sameAs: ["https://fms.edu", "https://en.wikipedia.org/wiki/Faculty_of_Management_Studies,_Delhi"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }} />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-white/60 mb-4 flex flex-wrap gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/mba-colleges-delhi" className="hover:text-white">MBA Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white/90">FMS Delhi</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-semibold">NIRF #13</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-semibold">NAAC A++</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full font-semibold">Govt — DU</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              FMS Delhi — Faculty of Management Studies 2026
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mb-6">
              India's best MBA value: ₹55,000 total fees, ₹32 LPA average placement, CAT 99+ percentile cutoff. FMS Delhi is ranked #13 nationally (NIRF) and consistently places in India's top MBA colleges for ROI.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stats.map(s => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-white font-extrabold text-xl">{s.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                  <div className="text-white/40 text-[10px]">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

          {/* AEO Quick Answer */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">What is FMS Delhi?</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              FMS Delhi (Faculty of Management Studies) is a premier business school within the University of Delhi, established in 1954. It offers a 2-year MBA programme with just 222 seats at ₹55,000 total fees — making it India's most affordable top-10 MBA. FMS Delhi requires CAT 99+ percentile for admission and delivers ₹32 LPA average placement with recruiters including Goldman Sachs, McKinsey, BCG, HUL, and Google.
            </p>
          </section>

          {/* Cutoff table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FMS Delhi CAT Cutoff 2026 — Category-wise</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-left">Shortlist Cutoff</th>
                    <th className="px-4 py-3 text-left">Typical Admit Cutoff</th>
                    <th className="px-4 py-3 text-left">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["General / UR", "99+ %ile", "99.5+ %ile", "~111"],
                    ["OBC-NCL", "97+ %ile", "98+ %ile", "~60"],
                    ["SC", "90+ %ile", "93+ %ile", "~33"],
                    ["ST", "85+ %ile", "87+ %ile", "~17"],
                    ["EWS", "97+ %ile", "98+ %ile", "~22"],
                    ["PWD", "85+ %ile", "86+ %ile", "~6"],
                  ].map(([cat, short, admit, seats], i) => (
                    <tr key={cat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{cat}</td>
                      <td className="px-4 py-3 text-gray-700">{short}</td>
                      <td className="px-4 py-3 font-bold text-red-700">{admit}</td>
                      <td className="px-4 py-3 text-gray-600">{seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* 2026 estimates based on 2021–2025 trends. Actual cutoffs declared after CAT 2025 results (January 2026).</p>
          </section>

          {/* Fees breakdown */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FMS Delhi MBA Fees 2026 — Complete Breakdown</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Programme Fees (2 years)</h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Tuition Fee", "₹10,000/yr", "₹20,000"],
                    ["Development Fee", "₹5,000/yr", "₹10,000"],
                    ["Examination Fee", "₹2,500/yr", "₹5,000"],
                    ["Library & Other", "₹10,000/yr", "₹20,000"],
                    ["Total Programme", "", "~₹55,000"],
                  ].map(([item, per, total]) => (
                    <div key={item} className="flex justify-between py-1 border-b border-green-100 last:border-0 last:font-bold last:text-green-700 last:text-base">
                      <span className="text-gray-700">{item}</span>
                      <span className="text-gray-500 text-xs self-center">{per}</span>
                      <span className="font-semibold text-gray-900">{total}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Living Expenses (Optional)</h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["On-campus Hostel", "₹40K–60K/yr"],
                    ["Mess/Food", "₹25K–35K/yr"],
                    ["Transport", "₹10K–15K/yr"],
                    ["Books & Material", "₹8K–12K/yr"],
                    ["Total Living (2 yr)", "~₹1.7L–2.5L"],
                  ].map(([item, cost]) => (
                    <div key={item} className="flex justify-between py-1 border-b border-blue-100 last:border-0 last:font-bold last:text-blue-700 last:text-base">
                      <span className="text-gray-700">{item}</span>
                      <span className="font-semibold text-gray-900">{cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-gray-700">
              <strong>ROI Comparison:</strong> FMS Delhi MBA at ₹55K total fees vs MDI Gurgaon at ₹22.5L — FMS ROI is 400× better (₹32 LPA avg vs ₹26 LPA avg). FMS is the only top-15 B-school globally where total fees are under ₹1 lakh.
            </div>
          </section>

          {/* Placement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FMS Delhi Placement 2024 — Sector-wise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {[
                { label: "Average CTC", value: "₹32.14 LPA" },
                { label: "Median CTC", value: "₹28 LPA" },
                { label: "Highest CTC", value: "₹75 LPA" },
                { label: "Placement Rate", value: "100%" },
                { label: "Companies Visited", value: "120+" },
                { label: "Dream Offers (40+L)", value: "28% batch" },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-red-700 font-extrabold text-lg">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Sector</th>
                    <th className="px-4 py-3 text-left">Avg Package Range</th>
                    <th className="px-4 py-3 text-left">Top Recruiters</th>
                  </tr>
                </thead>
                <tbody>
                  {placements.map((p, i) => (
                    <tr key={p.sector} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{p.sector}</td>
                      <td className="px-4 py-3 font-bold text-green-700">{p.avg}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{p.cos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Admission steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">FMS Delhi MBA Admission Process 2026</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Appear for CAT 2025", desc: "Register at iimcat.ac.in (August 2025). Exam in November 2025. Target 99+ percentile overall. Strong performance in Verbal Ability & Reading Comprehension (VARC) is critical at FMS — the composite score weights VA heavily. FMS does not use sectional cutoffs like IIMs." },
                { step: "2", title: "Apply to FMS Delhi", desc: "FMS Delhi applications open at admission.uod.ac.in in January 2026 (after CAT results). Application fee: ₹2,000 for General/OBC, ₹1,000 for SC/ST. Fill academic details carefully — 10th, 12th, and graduation marks all count in the composite score formula." },
                { step: "3", title: "Shortlisting by Composite Score", desc: "FMS shortlists ~1,500 candidates for GD-PI using: CAT score (55% weight) + Class 10 (10%) + Class 12 (10%) + Graduation (25%). Work experience adds points but is NOT mandatory — fresher students with strong academics regularly make the shortlist." },
                { step: "4", title: "Group Discussion (GD) + Personal Interview (PI)", desc: "GD-PI held at FMS Delhi campus (North Delhi, University Enclave) in February–March 2026. GD topics are typically current affairs, business cases, or abstract topics. PI is 15–20 minutes: current affairs, subject expertise, career goals, stress questions. Former GD topics: 'India's startup ecosystem post-2025', 'CAT should test soft skills'." },
                { step: "5", title: "Final Merit List & Joining", desc: "Final FMS merit list released in April 2026. Wait-list movement is significant — 2025 wait-list moved 80+ positions in General category. Accept offer within 10 days. FMS classes begin July 2026. On-campus hostel allocation by lottery — apply early." },
              ].map(s => (
                <div key={s.step} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#0A1628] text-white rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">FMS Delhi FAQ 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none text-sm">
                    {faq.q}
                    <span className="text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-2">›</span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related MBA Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
                { label: "IIFT Delhi — MBA IB 2026", href: "/iift-delhi", icon: "🌐" },
                { label: "MDI Gurgaon — PGDM 2026", href: "/mdi-gurgaon", icon: "📍" },
                { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "⚖️" },
                { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "🏛️" },
                { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "💹" },
                { label: "MBA in Marketing Delhi", href: "/mba-in-marketing-delhi", icon: "📊" },
                { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "👥" },
                { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "💼" },
                { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
                { label: "MBA Placement Rankings", href: "/mba-colleges-delhi-placement", icon: "📈" },
                { label: "CAT Colleges Delhi", href: "/cat-colleges-delhi", icon: "📝" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-red-200 hover:shadow-sm transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2">Targeting FMS Delhi MBA 2026?</h2>
            <p className="text-white/85 mb-5 text-sm">Get a personalised GD-PI prep plan and composite score estimate — free in 2 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/counselling" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm">
                Free FMS Counselling
              </Link>
              <Link href="/predictor" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Check Your CAT Score Chances
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
