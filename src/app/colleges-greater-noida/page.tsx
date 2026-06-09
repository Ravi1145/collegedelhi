import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Greater Noida 2026 | Galgotias, Sharda, BIMTECH, GL Bajaj & More",
  description: "Top 15+ colleges in Greater Noida 2026 — Galgotias University (NAAC A+), Sharda University (NAAC A+), BIMTECH (NIRF #61), Shiv Nadar, GL Bajaj, NIET. Engineering, MBA, Medical. Fees, admission & metro guide.",
  path: "/colleges-greater-noida",
  keywords: [
    "colleges in greater noida", "best colleges greater noida 2026",
    "galgotias university greater noida", "sharda university greater noida",
    "bimtech greater noida", "shiv nadar university noida",
    "gl bajaj greater noida", "engineering colleges greater noida",
    "mba colleges greater noida", "universities in greater noida",
    "knowledge park colleges", "gautam buddha university greater noida",
    "private colleges greater noida fees", "greater noida college admission 2026",
    "niet greater noida", "lloyd law college greater noida",
  ],
})
export const revalidate = 300

const colleges = [
  { rank: 1, name: "Galgotias University", location: "Sector 17A, Yamuna Expressway, Greater Noida", naac: "A+", nirf: null, fees: "₹1L–4L/yr", streams: "Engineering, MBA, BBA, BCA, Law, Pharmacy, Education", slug: "galgotias-university-engineering-greater-noida", highlight: "Fastest Growing | 30,000+ Students | NAAC A+", type: "Private University" },
  { rank: 2, name: "Sharda University", location: "Plot 32-34, Knowledge Park III, Greater Noida", naac: "A+", nirf: null, fees: "₹80K–15L/yr", streams: "Engineering, MBBS, MBA, BBA, Law, Pharmacy, Architecture", slug: "sharda-university-engineering-greater-noida", highlight: "4,000+ International Students | Medical + Engineering", type: "Private University" },
  { rank: 3, name: "Shiv Nadar University", location: "NH 91, Tehsil Dadri, Greater Noida", naac: "A", nirf: null, fees: "₹2.5L–5L/yr", streams: "B.Tech, BSc, BA, MBA, MSc, PhD", slug: "shiv-nadar-university-greater-noida", highlight: "HCL Group | Research-led | Strong CS/ECE Placements", type: "Deemed University" },
  { rank: 4, name: "Gautam Buddha University", location: "Yamuna Expressway, Greater Noida", naac: "A", nirf: null, fees: "₹60K–1.5L/yr", streams: "B.Tech, MBA, BBA, LLB, B.Pharm, BSc, MSc", slug: "gautam-buddha-university-greater-noida", highlight: "UP Govt University | Best Govt Option Greater Noida", type: "Government University" },
  { rank: 5, name: "BIMTECH — Birla Institute of Management Technology", location: "Plot No. 5, Knowledge Park II, Greater Noida", naac: "A", nirf: 61, fees: "₹14L–18L (total)", streams: "PGDM, PGDM-IB, PGDM-IBM, PGDM-RM", slug: "bimtech-birla-institute-management-technology-noida", highlight: "Birla Group | NIRF #61 MBA | Top NCR B-school", type: "Private" },
  { rank: 6, name: "IILM University", location: "17, Knowledge Park II, Greater Noida", naac: "A", nirf: null, fees: "₹90K–3L/yr", streams: "B.Tech, MBA, BBA, BCA, LLB", slug: "iilm-university-greater-noida", highlight: "Strong Corporate Network | Knowledge Park", type: "Private University" },
  { rank: 7, name: "Galgotias College of Engineering & Technology (GCET)", location: "1, Knowledge Park I, Greater Noida", naac: "A", nirf: null, fees: "₹1.5L–2.2L/yr", streams: "B.Tech (IP University), MCA, MBA", slug: "galgotias-college-engineering-noida", highlight: "Best IP University B.Tech Greater Noida | ₹7.5 LPA avg", type: "IP University Affiliate" },
  { rank: 8, name: "GL Bajaj Institute of Technology & Management", location: "Plot No. 2, Knowledge Park III, Greater Noida", naac: "A+", nirf: null, fees: "₹1.2L–2L/yr", streams: "B.Tech (IP University), MBA, BBA", slug: "gl-bajaj-institute-technology-management-noida", highlight: "NAAC A+ | Best ROI | ₹1.2L/yr B.Tech", type: "IP University Affiliate" },
  { rank: 9, name: "NIET — Noida Institute of Engineering & Technology", location: "19, Knowledge Park II, Greater Noida", naac: "A", nirf: null, fees: "₹1.4L–2L/yr", streams: "B.Tech (IP University), BCA, MCA, MBA", slug: "niet-noida-institute-engineering-technology", highlight: "Largest IP University Intake | Knowledge Park II", type: "IP University Affiliate" },
  { rank: 10, name: "JSS Academy of Technical Education", location: "C-20/1, Sector 62, Noida", naac: "A", nirf: null, fees: "₹1.3L–1.9L/yr", streams: "B.Tech (IP University), MCA", slug: "jss-academy-technical-education-noida", highlight: "South India Origin | Strong Placement Culture", type: "IP University Affiliate" },
  { rank: 11, name: "Lloyd Law College", location: "Plot No. 11, Knowledge Park II, Greater Noida", naac: "A", nirf: null, fees: "₹1.5L–2.5L/yr", streams: "BA LLB (5-yr), LLB (3-yr), LLM", slug: "lloyd-law-college-greater-noida", highlight: "Top Private Law College NCR | Bar Council Approved", type: "Private" },
  { rank: 12, name: "Noida International University", location: "Yamuna Expressway, Greater Noida", naac: "B+", nirf: null, fees: "₹80K–2.5L/yr", streams: "B.Tech, MBA, BBA, BCA, LLB, B.Pharm", slug: "noida-international-university", highlight: "Affordable | Expressway Campus | Wide Programs", type: "Private University" },
  { rank: 13, name: "ITS Engineering College", location: "46, Knowledge Park III, Greater Noida", naac: "B+", nirf: null, fees: "₹1.1L–1.8L/yr", streams: "B.Tech (IP University), MBA", slug: "its-engineering-college-greater-noida", highlight: "Budget BTech | Knowledge Park III", type: "IP University Affiliate" },
  { rank: 14, name: "Bennett University", location: "Plot Nos. 8-11, Tech Zone II, Greater Noida", naac: "A+", nirf: null, fees: "₹3L–5L/yr", streams: "B.Tech (CS/ECE), MBA, BBA, BCA, B.Journalism", slug: "bennett-university-delhi-engineering", highlight: "Times Group | Strong CS/AI | Industry Curriculum", type: "Deemed University" },
  { rank: 15, name: "Sharda University — Medical College", location: "Plot 32-34, Knowledge Park III, Greater Noida", naac: "A+", nirf: null, fees: "₹12L–15L/yr", streams: "MBBS, MD, BDS, B.Pharm, B.Sc Nursing", slug: "sharda-university-medical-college-greater-noida", highlight: "Largest Private Medical NCR | International Faculty", type: "Private University" },
]

const faqs = [
  {
    question: "What are the best colleges in Greater Noida 2026?",
    answer: "Top colleges in Greater Noida 2026: (1) Galgotias University — NAAC A+, 30,000+ students, Engineering+MBA+Law. (2) Sharda University — NAAC A+, international campus, Engineering+Medical. (3) Shiv Nadar University — HCL Group, research-led, strong CS. (4) Gautam Buddha University — Government, cheapest option. (5) BIMTECH — NIRF #61 MBA, Birla Group. (6) GL Bajaj — NAAC A+, cheapest BTech at ₹1.2L/yr. The Knowledge Park cluster (I, II, III) has the highest concentration of colleges in India outside Delhi."
  },
  {
    question: "How do I reach Greater Noida colleges from Delhi?",
    answer: "Greater Noida from Delhi 2026: Aqua Line Metro (Noida–Greater Noida) runs from Sector 51 Noida to Depot station — change to Blue Line at Sector 52 for Central Delhi (total 1.5 hours). Express buses from Anand Vihar ISBT reach Knowledge Park in 45 minutes. Yamuna Expressway from South Delhi takes 40–50 minutes by road. College shuttle buses from Noida Sector 62, Anand Vihar, and Hazrat Nizamuddin. Uber/Ola: ₹400–700 one way from Central Delhi."
  },
  {
    question: "Is Galgotias University better than Sharda University?",
    answer: "Both are NAAC A+ and comparable. Galgotias is better for: Engineering (stronger BTech placements at ₹7 LPA avg), focused STEM culture, faster growing reputation, and IP University B.Tech via GCET (sister college). Sharda is better for: Medical (MBBS/BDS available), international exposure (4,000+ international students from 85 countries), diverse programs (Architecture, Law, Design), and students wanting a true 'university experience'. For BTech CSE: Galgotias University leads. For Medical or international programs: Sharda wins clearly."
  },
  {
    question: "What is the cheapest BTech college in Greater Noida?",
    answer: "Cheapest BTech colleges in Greater Noida 2026: (1) GL Bajaj GITM — ₹1.2L/yr (NAAC A+, IP University). (2) ITS Engineering College — ₹1.1L/yr (IP University). (3) JSS Academy — ₹1.3L/yr (IP University, NAAC A). (4) NIET — ₹1.4L/yr (IP University, NAAC A). For comparison, Shiv Nadar University costs ₹2.5L–5L/yr but has research exposure and better CS placements. Budget seekers should target GL Bajaj or GCET."
  },
  {
    question: "Which Greater Noida college has the best MBA program?",
    answer: "Best MBA in Greater Noida: BIMTECH (Birla Institute of Management Technology) — NIRF #61, PGDM accepted by top firms, CAT/XAT required, ₹11.8 LPA avg placement. For affordable MBA: Galgotias University MBA (₹2–4L total, ₹6 LPA avg). GL Bajaj MBA (₹3L total, ₹7.5 LPA avg — best ROI). For premium B-school MBA in NCR, consider MDI Gurgaon or IMI Delhi in addition."
  },
  {
    question: "Which entrance exams are needed for Greater Noida colleges?",
    answer: "Greater Noida college entrance exams 2026: B.Tech (IP University Affiliates — GL Bajaj, GCET, NIET, JSS): IPU CET or JEE Main. B.Tech (Private Universities — Galgotias, Sharda, Shiv Nadar): JEE Main + own entrance. MBBS (Sharda Medical): NEET UG (Score 530+). MBA (BIMTECH): CAT/XAT/CMAT. MBA (Galgotias, Sharda): CAT/CMAT/MAT. BA LLB (Lloyd Law): CLAT/LSAT India. BBA/BCA: Own entrance + 12th Merit. CUET accepted at Sharda and Galgotias for UG admissions."
  },
  {
    question: "Does Greater Noida have medical colleges?",
    answer: "Yes — Sharda University hosts one of North India's largest private medical complexes. Sharda Medical College (Greater Noida) offers MBBS (₹12–15L/yr), BDS, B.Pharm, and nursing. NEET cutoff: 530+ for management quota. The campus has 1,500-bed Sharda Hospital for clinical training. Additionally, Santosh Medical College is nearby in Ghaziabad. For government MBBS, candidates must seek Delhi/UP government quota."
  },
]

export default function CollegesGreaterNoidaPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "Colleges in Greater Noida", url: "/colleges-greater-noida" },
  ])
  const itemListSchema = generateItemListSchema(
    colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.streams}` }))
  )

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link><span>/</span>
            <span className="text-white">Greater Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Colleges in Greater Noida 2026
          </h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            Greater Noida's Knowledge Park cluster is India's largest private university zone — Galgotias, Sharda, Shiv Nadar, BIMTECH, GL Bajaj & 15+ more. Engineering, MBA, Medical, Law at competitive fees. Aqua Line metro access.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "15+", label: "Universities & Colleges" },
              { value: "3 NAAC A+", label: "Tier-1 Universities" },
              { value: "₹1.1L/yr", label: "Min. B.Tech Fees" },
              { value: "NIRF #61", label: "BIMTECH MBA Rank" },
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
            Best colleges in Greater Noida: <strong>Galgotias University</strong> (NAAC A+, Engineering+MBA), <strong>Sharda University</strong> (NAAC A+, Medical+International), <strong>Shiv Nadar University</strong> (HCL Group, Research), <strong>Gautam Buddha University</strong> (Govt, cheapest), <strong>BIMTECH</strong> (NIRF #61 MBA, Birla Group), <strong>GL Bajaj</strong> (NAAC A+, cheapest BTech ₹1.2L/yr).
          </p>
        </div>

        {/* College Rankings */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 15 Colleges in Greater Noida 2026 — Ranked</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {c.rank}
                </div>
                <div className="flex-1">
                  <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">
                    {c.name}
                  </Link>
                  <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
                  <p className="text-xs text-gray-500 mt-1">📍 {c.location}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.type} | Programs: {c.streams}</p>
                </div>
                <div className="flex flex-wrap gap-2 flex-shrink-0">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">NAAC {c.naac}</span>
                  {c.nirf && <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">NIRF #{c.nirf}</span>}
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Park Map */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h2 className="text-lg font-bold text-amber-900 mb-3">🗺️ Knowledge Park Cluster Guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              { area: "Knowledge Park I", colleges: "Galgotias College (GCET), ITS Engineering", transport: "Pari Chowk Metro nearby" },
              { area: "Knowledge Park II", colleges: "BIMTECH, IILM, NIET, JSS Academy, Lloyd Law", transport: "Knowledge Park II Metro" },
              { area: "Knowledge Park III", colleges: "Sharda University, GL Bajaj, Galgotias University", transport: "Knowledge Park III Metro" },
              { area: "Yamuna Expressway", colleges: "Gautam Buddha Univ, Noida International Univ, Bennett Univ", transport: "Expressway — cab/bus" },
              { area: "Tech Zone / Dadri", colleges: "Shiv Nadar University", transport: "Private transport recommended" },
              { area: "Sector 62 Noida", colleges: "JSS Academy, Amity Noida, Symbiosis Noida", transport: "Sector 62 Metro (Blue)" },
            ].map(k => (
              <div key={k.area} className="bg-white rounded-lg p-3 border border-amber-100">
                <p className="font-bold text-amber-900 text-xs">{k.area}</p>
                <p className="text-xs text-gray-700 mt-1">{k.colleges}</p>
                <p className="text-xs text-gray-400 mt-1">🚇 {k.transport}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Colleges in Greater Noida 2026</h2>
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

        {/* Related */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Colleges in Gurugram", href: "/colleges-gurugram" },
            { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" },
            { label: "MBA Colleges Noida", href: "/mba-colleges-noida" },
            { label: "BCA Colleges Noida", href: "/bca-colleges-noida" },
            { label: "BBA Colleges Noida", href: "/bba-colleges-noida" },
            { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
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
            <p className="font-bold">Need guidance for Greater Noida college admission 2026?</p>
            <p className="text-blue-200 text-sm">Free counselling for Galgotias, Sharda, BIMTECH, GL Bajaj & all NCR colleges.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Free Counselling
          </Link>
        </div>
      </div>
    </>
  )
}
