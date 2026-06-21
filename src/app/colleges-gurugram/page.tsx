import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Gurugram (Gurgaon) 2026 | MDI, GD Goenka, BML Munjal & More",
  description: "Top colleges in Gurugram 2026 — MDI Gurgaon (NIRF #17), GD Goenka University, BML Munjal University, K.R. Mangalam, Amity Gurugram. Engineering, MBA, BBA, BCA. Fees, courses & admission guide.",
  path: "/colleges-gurugram",
  keywords: [
    "colleges in gurugram", "colleges in gurgaon 2026",
    "mdi gurgaon admission", "gd goenka university gurugram",
    "bml munjal university gurgaon", "kr mangalam university gurugram",
    "amity university gurugram", "engineering colleges gurugram",
    "mba colleges gurgaon", "best college gurgaon 2026",
    "private colleges gurugram fees", "universities in gurugram haryana",
    "sgt university gurugram", "ansal university gurgaon",
    "imt gurgaon mba admission",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "MDI Gurgaon — Management Development Institute", location: "Mehrauli Road, Gurugram", naac: "A", nirf: 17, fees: "₹22L–28L (total)", streams: "PGPM (MBA), NMP, PGP-HRM", slug: "mdi-gurgaon-management-development-institute", highlight: "NIRF #17 MBA | India Top 5 | CAT 99%ile", type: "Autonomous" },
  { name: "IMT Gurgaon — Institute of Management Technology", location: "Sector 53, Gurugram", naac: "A", nirf: null, fees: "₹16L–20L (total)", streams: "PGDM, Executive PGDM", slug: "imt-gurgaon", highlight: "Top MBA Gurgaon | Corporate Belt", type: "Private" },
  { name: "GD Goenka University", location: "Sohna Road, Gurugram", naac: "A", nirf: null, fees: "₹1.5L–4L/yr", streams: "B.Tech, MBA, BBA, B.Des, LLB, B.Pharm", slug: "gd-goenka-university-gurugram", highlight: "Sohna Road | Multi-stream | Strong Infrastructure", type: "Private" },
  { name: "BML Munjal University", location: "NH-48, Sidhrawali, Gurugram", naac: "A", nirf: null, fees: "₹2L–4.5L/yr", streams: "B.Tech, MBA, BBA, B.Des (Fashion)", slug: "bml-munjal-university-gurugram", highlight: "Hero Group | Industry-Integrated Curriculum", type: "Private" },
  { name: "K.R. Mangalam University", location: "Sohna Road, Sector 43, Gurugram", naac: "A", nirf: null, fees: "₹1.2L–3L/yr", streams: "B.Tech, MBA, BBA, BCA, LLB, B.Des", slug: "kr-mangalam-university-gurugram", highlight: "Affordable Multi-stream | Sohna Road", type: "Private" },
  { name: "Amity University Gurugram Campus", location: "Manesar, Gurugram", naac: "A+", nirf: null, fees: "₹2L–4.5L/yr", streams: "B.Tech, MBA, BBA, BCA, LLB", slug: "amity-university-gurugram", highlight: "Amity Brand | Manesar Corporate Zone", type: "Deemed" },
  { name: "Ansal University", location: "Sector 55, Gurugram", naac: "B+", nirf: null, fees: "₹1.5L–3.5L/yr", streams: "B.Arch, B.Tech, MBA, BBA, B.Des", slug: "ansal-university-gurugram", highlight: "Architecture Focus | South Gurgaon", type: "Private" },
  { name: "SGT University", location: "Budhera, Badli Road, Gurugram", naac: "A", nirf: null, fees: "₹80K–10L/yr", streams: "MBBS, B.Tech, MBA, BBA, BDS, B.Pharm", slug: "sgt-university-gurugram", highlight: "Medical + Engineering | Gurugram", type: "Private" },
  { name: "Apeejay Stya University", location: "Sohna–Palwal Road, Sohna", naac: "B+", nirf: null, fees: "₹1.2L–2.8L/yr", streams: "B.Tech, MBA, BBA, BCA, B.Des", slug: "apeejay-stya-university-gurugram", highlight: "Sohna Campus | Affordable Gurugram", type: "Private" },
  { name: "IILM University Gurugram", location: "Sector 53, Gurugram", naac: "A", nirf: null, fees: "₹1.5L–3.5L/yr", streams: "MBA, BBA, BCA, B.Com", slug: "iilm-university-gurugram", highlight: "Corporate Hub Location | Management", type: "Private" },
  { name: "World College of Technology & Management", location: "Farrukhnagar, Gurugram", naac: "B", nirf: null, fees: "₹90K–1.8L/yr", streams: "B.Tech, MBA, BBA", slug: "wctm-world-college-technology-management-gurugram", highlight: "Budget Engineering | Gurgaon Belt", type: "Private" },
  { name: "Starex University", location: "Hamidpur, Gurugram", naac: "B+", nirf: null, fees: "₹85K–2.2L/yr", streams: "B.Tech, MBA, BBA, BCA, B.Pharm", slug: "starex-university-gurugram", highlight: "Affordable | Near Delhi Border", type: "Private" },
]

const faqs = [
  {
    question: "Which is the best college in Gurugram (Gurgaon) 2026?",
    answer: "MDI Gurgaon (Management Development Institute) is the best college in Gurugram — ranked NIRF #17 nationally for MBA, with ₹26 LPA average placement and top recruiters like McKinsey, BCG, and Deloitte. For engineering, GD Goenka University (NAAC A) and BML Munjal University (Hero Group, NAAC A) are the top choices. For a multi-stream university, Amity University Gurugram (NAAC A+) is the best-ranked private university in the city."
  },
  {
    question: "What MBA programs are available in Gurugram colleges?",
    answer: "Gurugram has excellent MBA options: MDI Gurgaon (PGPM — NIRF #17, CAT required, ₹26 LPA avg), IMT Gurgaon (PGDM, CAT/XAT, ₹13 LPA avg), IILM Gurugram (MBA, CAT/GMAT/XAT), GD Goenka MBA (BBA+MBA pathway), BML Munjal MBA (₹2.5L–4L total), and K.R. Mangalam MBA (affordable option at ₹1.8L/yr). MDI Gurgaon is in a different league — comparable to IIM Indore/IIM Kozhikode."
  },
  {
    question: "What engineering colleges are there in Gurugram?",
    answer: "Engineering colleges in Gurugram (Gurgaon) 2026: GD Goenka University (B.Tech, NAAC A, ₹2L–3.5L/yr), BML Munjal University (B.Tech, Hero Group, ₹2.5L–4L/yr), K.R. Mangalam University (B.Tech, ₹1.2L–2.5L/yr), Ansal University (B.Tech + B.Arch, ₹1.5L–3.5L/yr), SGT University (B.Tech, ₹1.5L/yr), World College of Technology (B.Tech, AKTU, ₹90K–1.5L/yr — budget option). Most are affiliated with MDU Rohtak or are private deemed universities."
  },
  {
    question: "How to reach colleges in Gurugram from Delhi?",
    answer: "Gurugram connectivity from Delhi 2026: Delhi Metro Yellow Line (HUDA City Centre, Cyber City) connects directly to Golf Course Road colleges. Rapid Metro Gurgaon covers Cyber Hub area. Road: NH-48 (Delhi-Gurgaon Expressway) takes 30–45 min from South Delhi. Sohna Road colleges (GD Goenka, K.R. Mangalam) are 1–1.5 hours from Central Delhi. College buses from major Delhi points (Dhaula Kuan, AIIMS, Rajiv Chowk) serve most universities. Uber/Ola: ₹200–400 from South Delhi."
  },
  {
    question: "Is MDI Gurgaon worth it for MBA?",
    answer: "MDI Gurgaon absolutely worth it — it's consistently ranked NIRF #17 and competes with IIM Indore and IIM Kozhikode. Average placement is ₹26 LPA (2025 batch) with McKinsey, BCG, Goldman Sachs, and P&G recruiting. Fees are ₹22L–28L total. ROI is excellent — typical MDI grad recoups fees within 12–18 months. Entry requires CAT 99+ percentile or GMAT 700+. MDI is the only top-tier B-school physically located in Gurgaon's corporate hub (Mehrauli Road), giving students unparalleled industry networking advantages."
  },
  {
    question: "What is the fee range for colleges in Gurugram?",
    answer: "Gurugram college fees 2026: MDI MBA — ₹22L–28L (total). IMT Gurgaon MBA — ₹16L–20L (total). GD Goenka B.Tech — ₹2L–3.5L/yr. BML Munjal B.Tech — ₹2.5L–4L/yr. K.R. Mangalam B.Tech — ₹1.2L–2.5L/yr. SGT University B.Tech — ₹1.5L/yr. World College (budget) B.Tech — ₹90K/yr. SGT MBBS — ₹7L–10L/yr. BBA: ₹1.5L–3L/yr across all colleges. Gurugram colleges are generally more expensive than Greater Noida but offer better corporate proximity for placements."
  },
  {
    question: "Which Gurugram colleges offer placement assistance?",
    answer: "MDI Gurgaon has the best placement record in Gurugram with 100% placement (₹26 LPA avg). IMT Gurgaon offers ₹13 LPA average. GD Goenka B.Tech placements: ₹7 LPA avg with Cognizant, Infosys, HCL, TCS. BML Munjal: ₹8 LPA avg with global firms. K.R. Mangalam: ₹6.5 LPA avg. Placement advantage: Gurugram's location in the IT/corporate hub means many companies visit as local recruiters, reducing travel and relocation needs for graduates."
  },
]

export default function CollegesGurugramPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in Gurugram", url: "/colleges-gurugram" },
  ])
  const itemListSchema = generateItemListSchema(
    colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.streams}` }))
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link><span>/</span>
            <span className="text-white">Gurugram</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Colleges in Gurugram (Gurgaon) 2026
          </h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            Gurugram houses MDI Gurgaon (NIRF #17 MBA), GD Goenka, BML Munjal, K.R. Mangalam, and 12+ universities. Best location for MBA & management — India's corporate capital with direct placement access to Fortune 500 companies.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "12+", label: "Universities" },
              { value: "NIRF #17", label: "MDI Gurgaon MBA" },
              { value: "₹26 LPA", label: "MDI Avg Placement" },
              { value: "Yellow Line", label: "Delhi Metro Access" },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">
            Best colleges in Gurugram: <strong>MDI Gurgaon</strong> (NIRF #17 MBA, ₹26 LPA avg), <strong>IMT Gurgaon</strong> (MBA, ₹13 LPA avg), <strong>GD Goenka University</strong> (Engineering+MBA+Law), <strong>BML Munjal University</strong> (Hero Group, Engineering), <strong>Amity Gurugram</strong> (NAAC A+, Multi-stream).
          </p>
        </div>

        {/* Why Study in Gurugram */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Why Study in Gurugram 2026?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "India's Corporate Capital", desc: "Gurugram hosts 250+ Fortune 500 India offices (Google, Amazon, BCG, Deloitte, Goldman Sachs). Students get internship and placement access rarely available elsewhere." },
              { title: "MDI — Top 5 MBA India", desc: "MDI Gurgaon is ranked NIRF #17 and competes with IIM Indore — the only world-class B-school physically embedded in a corporate hub." },
              { title: "Metro-Connected Campus", desc: "Delhi Metro Yellow Line (Rapid Metro Gurgaon) connects campuses to central Delhi in 45 minutes. NH-48 offers fast road access from South Delhi." },
            ].map(w => (
              <div key={w.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{w.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* College List */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Gurugram 2026</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c, i) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">
                    {c.name}
                  </Link>
                  <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
                  <p className="text-xs text-gray-500 mt-1">{c.location}</p>
                  <p className="text-xs text-gray-500 mt-1">Programs: {c.streams}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">NAAC {c.naac}</span>
                  {c.nirf && <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">NIRF #{c.nirf}</span>}
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Gurugram vs Greater Noida Colleges — Which is Better?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="text-left px-4 py-3 text-xs font-bold">Parameter</th>
                  <th className="text-left px-4 py-3 text-xs font-bold">Gurugram Colleges</th>
                  <th className="text-left px-4 py-3 text-xs font-bold">Greater Noida Colleges</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best for MBA", "MDI Gurgaon (NIRF #17)", "BIMTECH (NIRF #61)"],
                  ["Best for Engineering", "GD Goenka, BML Munjal", "Galgotias, Sharda, GL Bajaj"],
                  ["Fees (B.Tech)", "₹1.5L–4L/yr", "₹80K–3.5L/yr"],
                  ["Placement Quality", "₹7–26 LPA (MDI leads)", "₹6–9.2 LPA avg"],
                  ["Corporate Access", "250+ MNCs nearby", "Noida tech park"],
                  ["Metro Access", "Yellow Line", "Aqua Line"],
                  ["Campus Life", "Urban, premium", "Larger campuses"],
                  ["Medical Colleges", "SGT University MBBS", "Sharda Medical"],
                ].map(([p, g, n], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2.5 text-xs font-medium text-gray-700">{p}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600">{g}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Colleges in Gurugram 2026</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related College Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Colleges in Greater Noida", href: "/colleges-greater-noida" },
            { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" },
            { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
            { label: "FMS Delhi vs MDI Gurgaon", href: "/fms-delhi-vs-mdi-gurgaon" },
            { label: "Private MBA Colleges Delhi", href: "/private-mba-colleges-delhi" },
            { label: "Best MBA Colleges Delhi", href: "/best-mba-colleges-delhi" },
            { label: "Colleges in Rohini", href: "/colleges-rohini-delhi" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Need guidance for Gurugram college admission 2026?</p>
            <p className="text-blue-200 text-sm">Free counselling for MDI Gurgaon, GD Goenka, BML Munjal & all Gurugram colleges.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Free Counselling
          </Link>
        </div>
      </div>
    </>
  )
}
