import type { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "IIFT Delhi MBA 2026 | Fees, IIFT Exam Cutoff & Placement",
  description: "IIFT Delhi MBA International Business 2026: ₹18.5L fees, IIFT exam cutoff 45+ marks, ₹22 LPA avg placement",
  path: "/iift-delhi",
  keywords: [
    "iift delhi mba admission",
    "iift delhi cutoff",
    "iift delhi fees",
    "iift delhi placement",
    "iift delhi ranking",
    "iift delhi mba 2026",
    "iift delhi exam",
    "indian institute of foreign trade delhi",
    "iift delhi mba fees total",
    "iift delhi selection process",
    "iift delhi average package",
    "iift delhi vs fms delhi",
    "iift delhi mba international business",
    "mba fees in iift delhi",
    "iift delhi eligibility 2026",
  ],
})

export const revalidate = 300

const faqs = [
  { q: "What is the IIFT Delhi cutoff 2026?", a: "IIFT Delhi 2026 cutoff (estimated for IIFT Entrance Exam 2025): Overall cutoff approximately 45–50 marks out of 100 for General category. Sectional cutoffs: Quantitative Aptitude 10+, Verbal Ability 12+, Reading Comprehension 12+, GK & Current Affairs 7+. After written exam shortlisting, Group Discussion + Essay Writing + Personal Interview determine final selection. IIFT 2024 overall cutoff for Delhi campus was 48.5 for General category." },
  { q: "What are the MBA fees at IIFT Delhi?", a: "IIFT Delhi MBA (International Business) fees 2026 batch: Total programme fee ₹18.5L for 2 years (approximately ₹9.25L per year). This covers tuition, library, lab, and examination fees. Hostel: ₹1.2L–1.5L/year extra. IIFT is a central government institute under Ministry of Commerce, making it more affordable than private B-schools (IMI Delhi ₹19.5L, MDI Gurgaon ₹22.5L). Education loans available via SBI Scholar Loan at 8.15% p.a." },
  { q: "What is the IIFT Delhi placement average?", a: "IIFT Delhi MBA Placement 2024: Average CTC ₹22 LPA, Median CTC ₹20 LPA, Highest CTC ₹50 LPA. 100% placement. Top sectors: International Trade & EXIM Banking (Standard Chartered, DBS, Citi), Consulting (Deloitte, EY, KPMG), FMCG (HUL, ITC, P&G), E-commerce (Amazon International, Flipkart). IIFT is the #1 choice for Trade Finance, EXIM Banking, and International Business roles in India." },
  { q: "How is IIFT Delhi different from FMS Delhi and MDI Gurgaon?", a: "IIFT Delhi vs FMS vs MDI: IIFT specializes in MBA International Business — the only premier B-school offering a dedicated IB programme. FMS Delhi is a generalist MBA at ₹55K total fees (₹32 LPA avg). MDI Gurgaon is best for Consulting and Finance (₹26 LPA avg, ₹22.5L fees). IIFT has a unique edge: EXIM Bank, World Bank, ITC global, and trade finance firms specifically recruit from IIFT. IIFT also uses its own entrance exam, not CAT." },
  { q: "What is the IIFT Delhi admission process 2026?", a: "IIFT Delhi MBA 2026 admission: (1) Register for IIFT 2025 exam at iift.ac.in (September–October 2025). (2) Appear for IIFT entrance exam (December 2025) — covers Quantitative Aptitude, Verbal Ability, Reading Comprehension, Data Interpretation & Logical Reasoning, General Knowledge. (3) Shortlisting based on exam score (January 2026). (4) Group Discussion + Essay Writing + Personal Interview at IIFT Delhi campus (February–March 2026). (5) Final merit list April 2026. (6) Classes begin July 2026." },
  { q: "What GK topics are important for IIFT Delhi exam?", a: "IIFT Delhi exam GK section is uniquely challenging — it covers International Trade & Commerce, WTO regulations, India's export-import data, Foreign Trade Policy, major trade agreements (RCEP, FTAs), International Finance (IMF, World Bank, ADB), current affairs (last 6 months), and business/economic news. Unlike CAT, IIFT heavily tests trade and global business awareness. Recommended: Read The Economic Times, Mint, and EXIM India newsletter 3 months before exam." },
]

export default function IIFTDelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "IIFT Delhi", url: "/iift-delhi" },
  ])
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Indian Institute of Foreign Trade, New Delhi",
    alternateName: "IIFT Delhi",
    url: "https://iift.ac.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-21, Qutab Institutional Area",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110016",
      addressCountry: "IN",
    },
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
              <span className="text-white/90">IIFT Delhi</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-semibold">NIRF #28</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-semibold">NAAC A++</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full font-semibold">Central Govt — Ministry of Commerce</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              IIFT Delhi — MBA International Business 2026
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mb-6">
              India's only specialized MBA in International Business. IIFT Delhi (Indian Institute of Foreign Trade) combines Finance + Trade expertise. IIFT exam cutoff ~48 marks, ₹18.5L total fees, ₹22 LPA average placement.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: "NIRF Rank", value: "#28" },
                { label: "Total Fees", value: "₹18.5L" },
                { label: "Avg Placement", value: "₹22 LPA" },
                { label: "Highest Package", value: "₹50 LPA" },
                { label: "Exam Cutoff", value: "~48/100" },
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

          {/* Quick answer */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">What is IIFT Delhi?</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              IIFT Delhi (Indian Institute of Foreign Trade) is a premier government business school under India's Ministry of Commerce, established in 1963. It offers a 2-year MBA (International Business) programme — the only one of its kind at a premier B-school. IIFT uses its own entrance exam (not CAT), tests GK on trade & commerce, and places students in EXIM banking, international trade finance, and global FMCG roles at ₹22 LPA average.
            </p>
          </section>

          {/* IIFT exam structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">IIFT 2025 Exam Pattern & Cutoff</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Section</th>
                    <th className="px-4 py-3 text-left">Questions</th>
                    <th className="px-4 py-3 text-left">Marks</th>
                    <th className="px-4 py-3 text-left">Sectional Cutoff (Gen)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Quantitative Aptitude", "25", "25", "10–12"],
                    ["Verbal Ability", "20", "20", "10–12"],
                    ["Reading Comprehension", "16", "16", "10–12"],
                    ["Data Interpretation & LR", "20", "20", "8–10"],
                    ["General Knowledge & Trade", "19", "19", "6–8"],
                    ["Total", "100", "100", "~48–50"],
                  ].map(([sec, q, m, cut], i) => (
                    <tr key={sec} className={i === 5 ? "bg-gray-900 text-white font-bold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3">{sec}</td>
                      <td className="px-4 py-3">{q}</td>
                      <td className="px-4 py-3">{m}</td>
                      <td className="px-4 py-3 font-semibold text-red-600">{i === 5 ? cut : cut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">Negative marking: 1/3 mark deducted per wrong answer. Exam date: December 2025. Results: January 2026.</p>
          </section>

          {/* Admission steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">IIFT Delhi MBA Admission Process 2026</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Register for IIFT 2025 Exam", desc: "Register at iift.ac.in (September–October 2025). Application fee ₹2,000 (General), ₹1,000 (SC/ST). Choose Delhi campus (vs Kolkata campus) in the form. Download admit card in November 2025." },
                { step: "2", title: "Appear for IIFT Entrance Exam", desc: "IIFT 2025 exam: December 2025. 2-hour paper with 5 sections. GK on India's trade policy, WTO, FTAs is uniquely tested — start GK prep 3 months early. Negative marking (1/3) applies — attempt carefully." },
                { step: "3", title: "Shortlisting Based on Score + Profile", desc: "IIFT shortlists ~800 candidates from Delhi campus based on exam score (satisfying both overall and sectional cutoffs), academic record (10th, 12th, graduation marks), and work experience (bonus points for 24+ months)." },
                { step: "4", title: "GD + Essay Writing + Personal Interview", desc: "GDPI at IIFT Delhi campus (Qutab Institutional Area) in February–March 2026. Essay Writing (30 min, 300 words on trade/international affairs topic). GD on current business topic. PI focused on trade knowledge, international business awareness, and career goals." },
                { step: "5", title: "Final Selection & Joining", desc: "Final merit list April 2026. IIFT batches are small (240 students per year) giving better faculty attention. Classes begin July 2026. On-campus hostel allocation by merit." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-5">IIFT Delhi FAQ 2026</h2>
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
                { label: "MBA Colleges Delhi 2026", href: "/mba-colleges-delhi", icon: "" },
                { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "" },
                { label: "MDI Gurgaon — PGDM 2026", href: "/mdi-gurgaon", icon: "" },
                { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon", icon: "" },
                { label: "Government MBA Colleges Delhi", href: "/government-mba-colleges-delhi", icon: "" },
                { label: "MBA in Finance Delhi", href: "/mba-in-finance-delhi", icon: "" },
                { label: "MBA in HR Delhi", href: "/mba-in-hr-delhi", icon: "" },
                { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "" },
                { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "" },
                { label: "MBA Placement Rankings", href: "/mba-colleges-delhi-placement", icon: "" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:border-red-200 hover:shadow-sm transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2">Targeting IIFT Delhi 2026?</h2>
            <p className="text-white/85 mb-5 text-sm">Get a personalised IIFT exam strategy and GD-PI prep plan — free counselling session.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/counselling" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm">
                Free IIFT Counselling
              </Link>
              <Link href="/predictor" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Check Your Chances
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
