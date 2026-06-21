import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "MDI Gurgaon MBA 2026 | Fees ₹22.5L, CAT Cutoff 97%ile & Placement ₹26 LPA",
  description: "MDI Gurgaon (NIRF #9) MBA PGDM 2026: ₹22.5L total fees, CAT 97+ percentile cutoff, ₹26 LPA avg placement. WAT-PI process, MDI vs FMS comparison, deadlines.",
  path: "/mdi-gurgaon",
  keywords: [
    "mdi gurgaon mba admission",
    "mdi gurgaon cutoff",
    "mdi gurgaon fees",
    "mdi gurgaon placement",
    "mdi gurgaon ranking",
    "mdi gurgaon mba 2026",
    "mdi gurgaon pgdm",
    "management development institute gurgaon",
    "mdi gurgaon cat cutoff 2026",
    "mdi gurgaon selection process",
    "mdi gurgaon average package",
    "mdi gurgaon vs fms delhi",
    "mdi gurgaon wat pi",
    "mba fees in mdi gurgaon",
    "mdi gurgaon placement 2024",
  ],
})

export const revalidate = 300

const faqs = [
  { q: "What is the MDI Gurgaon CAT cutoff 2026?", a: "MDI Gurgaon PGDM CAT 2026 cutoff (estimated): General category — 95–97 percentile for shortlisting, 97+ percentile for final admission after WAT-PI. OBC-NCL — 92+ percentile shortlist. SC — 87+ percentile. ST — 82+ percentile. MDI Gurgaon also accepts GMAT scores for PGDM-IB (International Business) — GMAT 650+ typically gets shortlisted. MDI's 2024 actual median CAT score for admitted batch: 98.5 percentile (General category)." },
  { q: "What are the total MDI Gurgaon fees for PGDM?", a: "MDI Gurgaon PGDM (Flagship) total fees 2026 batch: ₹22.5L for 2 years (₹11.25L per year). Includes tuition, library, IT, and placement fees. Hostel: ₹1.5L–2L/year extra. PGDM-HRM (HR Management): ₹21L total. PGDM-IB (International Business): ₹22.5L total. MDI Gurgaon offers education loans via HDFC Credila, Avanse, and Prodigy Finance at 10–13% p.a. Scholarship: Merit-based fee waivers available for top 5% of batch." },
  { q: "What is MDI Gurgaon placement average 2024?", a: "MDI Gurgaon PGDM Placement 2024: Average CTC ₹26.14 LPA, Median CTC ₹24 LPA, Highest CTC ₹73 LPA. 100% placement. Top sectors: Consulting (McKinsey, BCG, Bain, EY-Parthenon — 40+ offers), Finance (Goldman Sachs, JP Morgan, Deutsche), FMCG (HUL, ITC, P&G, L'Oreal). Finance track average at MDI: ₹30+ LPA. Dream offers (₹40+ LPA) extended to 22% of batch." },
  { q: "What is the MDI Gurgaon WAT-PI process?", a: "MDI Gurgaon WAT-PI (Written Ability Test + Personal Interview) 2026: Shortlisted candidates (CAT 95+ %ile) invited to MDI Gurgaon campus in Gurgaon for WAT-PI. WAT: 20-minute written essay on a current affairs or business topic (350–400 words). PI: 20–25 minutes panel interview focusing on work experience (MDI values 15–30 months experience), current business events, career goals, and academics. Final selection: CAT score 50% + WAT-PI 35% + Academics 10% + Diversity 5%." },
  { q: "Is MDI Gurgaon better than FMS Delhi?", a: "MDI Gurgaon vs FMS Delhi: FMS offers slightly better average placement (₹32 LPA vs MDI ₹26 LPA) at ₹55K total fees vs MDI's ₹22.5L — making FMS's ROI 400× better. However, MDI has a stronger overall ranking (NIRF #9 vs FMS #13), better campus infrastructure, and stronger alumni in Consulting and Finance. Work-experienced candidates prefer MDI (it's a major differentiator). Freshers with very high CAT scores usually prefer FMS for the ROI. Both require 97–99+ percentile." },
  { q: "What programmes does MDI Gurgaon offer?", a: "MDI Gurgaon programmes 2026: (1) PGDM Flagship — 2 years, 240 seats, ₹22.5L, CAT/GMAT. (2) PGDM-HRM (Human Resource Management) — 2 years, 60 seats, ₹21L. (3) PGDM-IB (International Business) — 2 years, 60 seats, ₹22.5L, accepts GMAT. (4) PGPM (Post Graduate Programme in Management) — 15 months Executive MBA for 5+ years experience, ₹18L, GMAT/CAT. (5) NMP (National Management Programme) — 12 months for Senior Executives, GMAT/interview only." },
]

export default function MDIGurgaonPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Gurgaon", url: "/mba-colleges-gurgaon" },
    { name: "MDI Gurgaon", url: "/mdi-gurgaon" },
  ])
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Management Development Institute, Gurgaon",
    alternateName: "MDI Gurgaon",
    url: "https://mdi.ac.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mehrauli Road, Sukhrali",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122007",
      addressCountry: "IN",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }} />

      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-white/60 mb-4 flex flex-wrap gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/mba-colleges-gurgaon" className="hover:text-white">MBA Colleges Gurgaon</Link>
              <span>›</span>
              <span className="text-white/90">MDI Gurgaon</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-semibold">NIRF #9</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-semibold">NAAC A+</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-semibold">Autonomous — Haryana</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              MDI Gurgaon — PGDM Admission 2026
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mb-6">
              India's #9 ranked B-school (NIRF 2024). MDI Gurgaon PGDM: CAT 97+ percentile, ₹22.5L total fees, ₹26 LPA average placement. Located in Gurgaon's corporate hub with McKinsey, Goldman Sachs, and HUL as top recruiters.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: "NIRF Rank", value: "#9" },
                { label: "Total Fees", value: "₹22.5L" },
                { label: "Avg Placement", value: "₹26 LPA" },
                { label: "Highest Package", value: "₹73 LPA" },
                { label: "CAT Cutoff", value: "97+ %ile" },
                { label: "Batch Size", value: "240" },
              ].map(s => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-white font-extrabold text-xl">{s.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">What is MDI Gurgaon?</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              MDI Gurgaon (Management Development Institute) is India's #9 ranked B-school (NIRF 2024), located in Gurgaon's corporate corridor. Established in 1973, MDI offers PGDM, PGDM-HRM, and PGDM-IB programmes. With 250+ Fortune 500 company offices within 10 km and McKinsey, Goldman Sachs, and HUL as recurring Day 0 recruiters, MDI is the premier choice for Consulting and Finance careers in Delhi NCR.
            </p>
          </section>

          {/* Programmes table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MDI Gurgaon Programmes 2026</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Programme</th>
                    <th className="px-4 py-3 text-left">Duration</th>
                    <th className="px-4 py-3 text-left">Seats</th>
                    <th className="px-4 py-3 text-left">Total Fees</th>
                    <th className="px-4 py-3 text-left">Entrance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PGDM (Flagship)", "2 years", "240", "₹22.5L", "CAT / GMAT"],
                    ["PGDM-HRM", "2 years", "60", "₹21L", "CAT / GMAT"],
                    ["PGDM-IB", "2 years", "60", "₹22.5L", "CAT / GMAT"],
                    ["PGPM (Executive)", "15 months", "80", "₹18L", "GMAT / CAT + 5yr exp"],
                    ["NMP (Senior Executive)", "12 months", "40", "₹16L", "Interview + 10yr exp"],
                  ].map(([prog, dur, seats, fees, exam], i) => (
                    <tr key={prog} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{prog}</td>
                      <td className="px-4 py-3 text-gray-700">{dur}</td>
                      <td className="px-4 py-3 text-gray-700">{seats}</td>
                      <td className="px-4 py-3 font-bold text-red-700">{fees}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{exam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* WAT-PI Admission steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">MDI Gurgaon PGDM Admission Process 2026</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Appear for CAT 2025 (November)", desc: "Register at iimcat.ac.in (August 2025). Target 97+ percentile for MDI shortlisting. MDI also accepts GMAT 650+ for PGDM-IB. Work experience (15–30 months) adds significant weight to MDI composite score — experienced candidates need slightly lower CAT percentile." },
                { step: "2", title: "Apply to MDI Gurgaon", desc: "MDI Gurgaon applications open December 2025 at mdi.ac.in. Application fee: ₹2,000. Fill programme preference: PGDM / PGDM-HRM / PGDM-IB. Upload work experience documents if applicable. Early application (December) recommended." },
                { step: "3", title: "Shortlisting for WAT-PI", desc: "MDI shortlists ~1,200 candidates for WAT-PI from CAT 95+ percentile scorers. Composite score: CAT (50%) + Work experience (20%) + Academic record (20%) + Diversity (10%). Work-experienced candidates with 24–36 months experience have significantly better shortlisting odds at the same percentile." },
                { step: "4", title: "WAT + Personal Interview at MDI Campus", desc: "WAT-PI held at MDI Gurgaon campus (February–March 2026). WAT: 20-minute essay on a business/current affairs topic. PI: 20–25 minute panel (2–3 faculty members). PI topics: past work experience, why MBA, industry knowledge, ethics, current events. Dress formally — MDI PIs are formal and structured." },
                { step: "5", title: "Final Merit & Fee Payment", desc: "Final PGDM merit list released April 2026. Accept offer within 10 days. First installment: ₹5.6L. Total: ₹22.5L over 4 semesters. Education loans via HDFC Credila (preferred partner) at ~11% p.a. MDI campus hostel allocation — on-campus living is strongly recommended (networking with batchmates is central to the MDI experience)." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-5">MDI Gurgaon FAQ 2026</h2>
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

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related MBA Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
                { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
                { label: "IIFT Delhi — MBA IB 2026", href: "/iift-delhi", icon: "" },
                { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
                { label: "MBA Colleges Gurgaon", href: "/mba-colleges-gurgaon", icon: "" },
                { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
                { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
                { label: "MBA in Operations Delhi", href: "/mba-in-operations-delhi", icon: "" },
                { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
                { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-red-200 hover:shadow-sm transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2">Targeting MDI Gurgaon PGDM 2026?</h2>
            <p className="text-white/85 mb-5 text-sm">Get personalised WAT-PI coaching and MDI composite score analysis — free counselling session.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/counselling" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm">Free MDI Counselling</Link>
              <Link href="/predictor" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">Check Your CAT Score</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
