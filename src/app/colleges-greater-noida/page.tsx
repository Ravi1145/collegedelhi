import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Best Colleges in Greater Noida 2026 | Fees, Admission Guide",
  description: "Top 20 colleges in Greater Noida 2026 — Galgotias (NAAC A+), Sharda, BIMTECH (NIRF #61), Shiv Nadar, GL Bajaj. Compare fees, NAAC grades & placements.",
  path: "/colleges-greater-noida",
  keywords: [
    "colleges in greater noida",
    "best colleges in greater noida 2026",
    "top universities in greater noida",
    "galgotias university greater noida",
    "sharda university greater noida",
    "bimtech greater noida",
    "shiv nadar university greater noida",
    "gl bajaj greater noida",
    "bennett university greater noida",
    "engineering colleges greater noida 2026",
    "mba colleges greater noida 2026",
    "knowledge park colleges noida",
    "gautam buddha university greater noida",
    "private universities greater noida fees",
    "greater noida college admission 2026",
    "niet greater noida",
    "lloyd law college greater noida",
    "top college greater noida for btech",
    "best university greater noida for mba",
  ],
})
export const revalidate = 300

const colleges = [
  {
    rank: 1,
    name: "Galgotias University",
    location: "Sector 17A, Yamuna Expressway, Greater Noida",
    naac: "A+",
    nirf: null,
    fees: "₹1L–4L/yr",
    streams: "Engineering, MBA, BBA, BCA, Law, Pharmacy, Education",
    slug: "galgotias-university-engineering-greater-noida",
    highlight: "30,000+ Students | NAAC A+ | Best BTech Greater Noida",
    type: "Private University",
    placement: "₹7.5 LPA avg",
    exam: "JEE Main / Own Test",
  },
  {
    rank: 2,
    name: "Sharda University",
    location: "Plot 32-34, Knowledge Park III, Greater Noida",
    naac: "A+",
    nirf: null,
    fees: "₹80K–15L/yr",
    streams: "Engineering, MBBS, MBA, Law, Pharmacy, Architecture",
    slug: "sharda-university-engineering-greater-noida",
    highlight: "NAAC A+ | Medical+Engineering | 4,000+ International Students",
    type: "Private University",
    placement: "₹6.5 LPA avg",
    exam: "JEE Main / NEET / Own",
  },
  {
    rank: 3,
    name: "Shiv Nadar University",
    location: "NH 91, Tehsil Dadri, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹2.5L–5L/yr",
    streams: "B.Tech, BSc, BA, MBA, MSc, PhD",
    slug: "shiv-nadar-university-greater-noida",
    highlight: "HCL Group | Research-Led | Top CS+AI Placements NCR",
    type: "Deemed University",
    placement: "₹10 LPA avg",
    exam: "JEE Main + SAT (holistic)",
  },
  {
    rank: 4,
    name: "Gautam Buddha University",
    location: "Yamuna Expressway, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹60K–1.5L/yr",
    streams: "B.Tech, MBA, LLB, B.Pharm, BSc, MSc",
    slug: "gautam-buddha-university-greater-noida",
    highlight: "UP Govt University | Lowest Fees | Best Govt Option Greater Noida",
    type: "Government University",
    placement: "₹5.5 LPA avg",
    exam: "UPCET / JEE Main",
  },
  {
    rank: 5,
    name: "BIMTECH — Birla Institute of Management Technology",
    location: "Plot No. 5, Knowledge Park II, Greater Noida",
    naac: "A",
    nirf: 61,
    fees: "₹14L–18L (total 2-yr)",
    streams: "PGDM, PGDM-IB, PGDM-IBM, PGDM-RM",
    slug: "bimtech-birla-institute-management-technology-noida",
    highlight: "Birla Group | NIRF #61 MBA | Best B-School Greater Noida",
    type: "Private (PGDM)",
    placement: "₹11.8 LPA avg",
    exam: "CAT / XAT / GMAT",
  },
  {
    rank: 6,
    name: "Bennett University",
    location: "Plot Nos. 8-11, Tech Zone II, Greater Noida West",
    naac: "A+",
    nirf: null,
    fees: "₹3L–5L/yr",
    streams: "B.Tech (CS/AI/ECE), MBA, BBA, BCA, B.Journalism, Law",
    slug: "bennett-university-delhi-engineering",
    highlight: "Times Group | NAAC A+ | Industry Curriculum | CS+AI Focus",
    type: "Deemed University",
    placement: "₹9 LPA avg",
    exam: "JEE Main / Bennett Entrance",
  },
  {
    rank: 7,
    name: "Galgotias College of Engineering & Technology (GCET)",
    location: "1, Knowledge Park I, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹1.5L–2.2L/yr",
    streams: "B.Tech (IP University), MCA, MBA",
    slug: "galgotias-college-engineering-noida",
    highlight: "Best IPU B.Tech Greater Noida | ₹7.5 LPA avg",
    type: "IP University Affiliate",
    placement: "₹7.5 LPA avg",
    exam: "JEE Main (IPU CET optional)",
  },
  {
    rank: 8,
    name: "GL Bajaj Institute of Technology & Management",
    location: "Plot No. 2, Knowledge Park III, Greater Noida",
    naac: "A+",
    nirf: null,
    fees: "₹1.2L–2L/yr",
    streams: "B.Tech (IP University), MBA, BBA",
    slug: "gl-bajaj-institute-technology-management-noida",
    highlight: "NAAC A+ | Cheapest BTech Greater Noida | Best ROI",
    type: "IP University Affiliate",
    placement: "₹6.5 LPA avg",
    exam: "JEE Main (IPU CET optional)",
  },
  {
    rank: 9,
    name: "NIET — Noida Institute of Engineering & Technology",
    location: "19, Knowledge Park II, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹1.4L–2L/yr",
    streams: "B.Tech (IP University), BCA, MCA, MBA",
    slug: "niet-noida-institute-engineering-technology",
    highlight: "Largest IPU Intake | Knowledge Park II | Good Placements",
    type: "IP University Affiliate",
    placement: "₹6 LPA avg",
    exam: "JEE Main (IPU CET optional)",
  },
  {
    rank: 10,
    name: "IILM University",
    location: "17, Knowledge Park II, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹90K–3L/yr",
    streams: "B.Tech, MBA, BBA, BCA, LLB",
    slug: "iilm-university-greater-noida",
    highlight: "Strong Corporate Network | Knowledge Park Location",
    type: "Private University",
    placement: "₹6 LPA avg",
    exam: "JEE Main / Own Test",
  },
  {
    rank: 11,
    name: "Lloyd Law College",
    location: "Plot No. 11, Knowledge Park II, Greater Noida",
    naac: "A",
    nirf: null,
    fees: "₹1.5L–2.5L/yr",
    streams: "BA LLB (5-yr), LLB (3-yr), LLM",
    slug: "lloyd-law-college-greater-noida",
    highlight: "Top Private Law NCR | Bar Council Approved | Delhi HC Moots",
    type: "Private",
    placement: "₹5 LPA avg",
    exam: "CLAT / LSAT India",
  },
  {
    rank: 12,
    name: "JSS Academy of Technical Education",
    location: "C-20/1, Sector 62, Noida",
    naac: "A",
    nirf: null,
    fees: "₹1.3L–1.9L/yr",
    streams: "B.Tech (IP University), MCA",
    slug: "jss-academy-technical-education-noida",
    highlight: "Strong Placement Culture | South India Academic Heritage",
    type: "IP University Affiliate",
    placement: "₹6.5 LPA avg",
    exam: "JEE Main (IPU CET optional)",
  },
  {
    rank: 13,
    name: "Noida International University",
    location: "Yamuna Expressway, Greater Noida",
    naac: "B+",
    nirf: null,
    fees: "₹80K–2.5L/yr",
    streams: "B.Tech, MBA, BBA, BCA, LLB, B.Pharm",
    slug: "noida-international-university",
    highlight: "Affordable | Wide Programs | Expressway Campus",
    type: "Private University",
    placement: "₹4.5 LPA avg",
    exam: "Own Entrance / Merit",
  },
  {
    rank: 14,
    name: "Sharda University — Medical College",
    location: "Plot 32-34, Knowledge Park III, Greater Noida",
    naac: "A+",
    nirf: null,
    fees: "₹12L–15L/yr",
    streams: "MBBS, MD, BDS, B.Pharm, B.Sc Nursing",
    slug: "sharda-university-medical-college-greater-noida",
    highlight: "Largest Private Medical NCR | 1,500-bed Hospital",
    type: "Private University",
    placement: "₹8 LPA avg (PG)",
    exam: "NEET UG (530+ cutoff)",
  },
  {
    rank: 15,
    name: "ITS Engineering College",
    location: "46, Knowledge Park III, Greater Noida",
    naac: "B+",
    nirf: null,
    fees: "₹1.1L–1.8L/yr",
    streams: "B.Tech (IP University), MBA",
    slug: "its-engineering-college-greater-noida",
    highlight: "Budget BTech | Knowledge Park III | IPU Affiliated",
    type: "IP University Affiliate",
    placement: "₹5 LPA avg",
    exam: "JEE Main (IPU CET optional)",
  },
]

const faqs = [
  {
    question: "Which is the best college in Greater Noida in 2026?",
    answer: "The best colleges in Greater Noida 2026 are: (1) Galgotias University — NAAC A+, 30,000+ students, best for B.Tech CSE with ₹7.5 LPA avg placement. (2) Sharda University — NAAC A+, best for Medical (MBBS) and international programs. (3) Shiv Nadar University — HCL Group funded, best for research-oriented CS/ECE with ₹10 LPA avg placement. (4) Gautam Buddha University — best government option with fees as low as ₹60,000/year. (5) BIMTECH — NIRF #61 MBA, Birla Group, best B-school in Greater Noida NCR.",
  },
  {
    question: "What is the best engineering college in Greater Noida?",
    answer: "Best engineering colleges in Greater Noida for B.Tech 2026: (1) Shiv Nadar University — best CS/AI, ₹10 LPA avg, research culture. (2) Bennett University — NAAC A+, Times Group, strong CS+AI curriculum. (3) Galgotias University — largest, ₹7.5 LPA avg, NAAC A+. (4) GCET — best IP University B.Tech option, ₹7.5 LPA avg. (5) GL Bajaj — NAAC A+, cheapest at ₹1.2L/yr with ₹6.5 LPA avg. For JEE Main 80+ percentile: aim for Shiv Nadar or Bennett. For JEE 60-79%ile: Galgotias University. For JEE below 60%ile: GL Bajaj or GCET via IPU CET.",
  },
  {
    question: "What is the fee for engineering colleges in Greater Noida?",
    answer: "B.Tech fees in Greater Noida 2026: Government (Gautam Buddha University) ₹60,000–1L/yr. IP University affiliated (GL Bajaj, GCET, NIET, JSS) ₹1.1L–2.2L/yr. Private universities (Galgotias, IILM) ₹1L–2.5L/yr. Premium private (Bennett, Galgotias) ₹2L–4L/yr. Research universities (Shiv Nadar) ₹2.5L–5L/yr. Total 4-year B.Tech cost ranges from ₹4L (GL Bajaj) to ₹20L (Shiv Nadar) depending on institution.",
  },
  {
    question: "Is Galgotias University better than Sharda University?",
    answer: "Galgotias University vs Sharda University 2026: Choose Galgotias for B.Tech (stronger engineering placements ₹7.5 LPA avg, better IP University affiliation via GCET, more focused STEM culture). Choose Sharda for MBBS/Medical (1,500-bed hospital, NEET admission, MBBS at ₹12-15L/yr), international exposure (4,000+ students from 85 countries), Architecture, and Law programs. Both are NAAC A+ and comparable for MBA/BBA. For pure B.Tech CSE: Galgotias leads. For Medical or international experience: Sharda is clearly better.",
  },
  {
    question: "How to reach Greater Noida colleges from Delhi by metro?",
    answer: "Greater Noida from Delhi by metro 2026: Take Blue Line metro to Sector 52 Noida (from Rajiv Chowk/Botanical Garden), change to Aqua Line (Noida–Greater Noida Metro) at Sector 52. Aqua Line stations serving colleges: Knowledge Park II (BIMTECH, NIET, Lloyd Law), Knowledge Park III (Sharda, GL Bajaj), Pari Chowk (GBU, Galgotias). Total Delhi to Knowledge Park: 1.5–2 hours. Metro fare: ₹60–80. Bennett University and Shiv Nadar University require cab/bus from Aqua Line terminus — additional 30 minutes.",
  },
  {
    question: "Which Greater Noida college is best for MBA?",
    answer: "Best MBA colleges in Greater Noida 2026: (1) BIMTECH — NIRF #61, PGDM, Birla Group, ₹11.8 LPA avg, requires CAT/XAT. (2) Shiv Nadar University MBA — research-led, ₹9 LPA avg, excellent for Data Analytics/Finance. (3) Bennett University MBA — Times Group, industry curriculum, ₹8 LPA avg. (4) Galgotias University MBA — affordable, ₹6 LPA avg, accepts CAT/CMAT. (5) GL Bajaj MBA — best ROI, ₹3L total cost, ₹7.5 LPA avg. For CAT 85%+ aspirants: BIMTECH. For budget-conscious: GL Bajaj.",
  },
  {
    question: "What entrance exams are required for Greater Noida colleges?",
    answer: "Entrance exams for Greater Noida colleges 2026: B.Tech (IP University affiliates — GL Bajaj, GCET, NIET, JSS): JEE Main score used directly. B.Tech (Private universities — Galgotias, Sharda, Bennett, Shiv Nadar): JEE Main + own entrance test. MBBS (Sharda Medical): NEET UG (530+ marks recommended). MBA (BIMTECH): CAT/XAT/GMAT. MBA (Galgotias, Bennett, Sharda): CAT/CMAT/MAT. BA LLB (Lloyd Law): CLAT/LSAT India. BBA/BCA: Own entrance or merit. CUET scores accepted at Sharda and Galgotias for UG admissions.",
  },
  {
    question: "Does Greater Noida have any government colleges?",
    answer: "Yes — Gautam Buddha University (GBU) is the main government university in Greater Noida. GBU is funded by the UP Government, offers B.Tech (₹60,000/yr), MBA (₹80K/yr), LLB, B.Pharm, and BSc programs. Admission via UPCET/JEE Main. NAAC A rated. Other near-government options: NIT Delhi (30 km away in Narela), and Delhi government colleges accessible via metro. GBU is the best budget option in Greater Noida for families wanting government-regulated fees.",
  },
  {
    question: "Which college in Greater Noida has the best placement?",
    answer: "Best placement colleges in Greater Noida 2026: B.Tech: Shiv Nadar University (₹10 LPA avg, top recruiters: Google, Microsoft, Adobe), Bennett University (₹9 LPA avg), Galgotias University/GCET (₹7.5 LPA avg, recruiters: TCS, Infosys, Wipro, Cognizant). MBA: BIMTECH (₹11.8 LPA avg, recruiters: Amazon, Deloitte, KPMG, Nestle). Overall: Shiv Nadar has the highest engineering placement packages. BIMTECH has best MBA placements. For volume of placements: Galgotias University places 5,000+ students/year.",
  },
]

const comparisonData = [
  { college: "Galgotias University", btech: "₹1L–2L/yr", mba: "₹2–4L/yr", naac: "A+", metro: "Yes (KP-III)", bestFor: "B.Tech Volume" },
  { college: "Sharda University", btech: "₹1.2–2L/yr", mba: "₹3–5L/yr", naac: "A+", metro: "Yes (KP-III)", bestFor: "MBBS+International" },
  { college: "Shiv Nadar University", btech: "₹2.5–5L/yr", mba: "₹4–6L/yr", naac: "A", metro: "No (cab needed)", bestFor: "CS Research" },
  { college: "Gautam Buddha University", btech: "₹60K–1L/yr", mba: "₹80K/yr", naac: "A", metro: "Pari Chowk", bestFor: "Budget/Govt" },
  { college: "BIMTECH", btech: "—", mba: "₹7–9L/yr (PGDM)", naac: "A", metro: "Yes (KP-II)", bestFor: "MBA Only" },
  { college: "GL Bajaj", btech: "₹1.2–2L/yr", mba: "₹1.5–2L/yr", naac: "A+", metro: "Yes (KP-III)", bestFor: "Best ROI BTech" },
  { college: "Bennett University", btech: "₹3–5L/yr", mba: "₹4–6L/yr", naac: "A+", metro: "No (cab needed)", bestFor: "CS+AI Premium" },
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

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Colleges in Greater Noida 2026",
    description: "Complete guide to top colleges in Greater Noida — Galgotias, Sharda, Shiv Nadar, BIMTECH, Bennett, GL Bajaj, Gautam Buddha University.",
    url: "https://collegedelhi.com/colleges-greater-noida",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://collegedelhi.com" },
        { "@type": "ListItem", position: 2, name: "Colleges Greater Noida", item: "https://collegedelhi.com/colleges-greater-noida" },
      ],
    },
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>/</span>
            <span className="text-white">Greater Noida</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
            Best Colleges in Greater Noida 2026
          </h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">
            Greater Noida&apos;s Knowledge Park cluster is India&apos;s largest private university zone — 20+ universities and colleges offering Engineering, MBA, MBBS, Law, BBA, BCA. Galgotias (NAAC A+), Sharda (NAAC A+), BIMTECH (NIRF #61), Shiv Nadar (HCL Group), Bennett (Times Group), GL Bajaj. Aqua Line metro connectivity to all major campuses.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "20+", label: "Universities & Colleges" },
              { value: "4 NAAC A+", label: "Top-Tier Institutions" },
              { value: "₹1.1L/yr", label: "Lowest BTech Fees" },
              { value: "₹11.8 LPA", label: "BIMTECH Avg CTC" },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* Quick Answer — targets AI Overview */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-2">Quick Answer — Best Colleges in Greater Noida 2026</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Top 5:</strong> (1) <strong>Galgotias University</strong> — NAAC A+, best B.Tech CSE, ₹7.5 LPA avg. (2) <strong>Sharda University</strong> — NAAC A+, MBBS+Engineering, international campus. (3) <strong>Shiv Nadar University</strong> — HCL Group, best research, ₹10 LPA avg CS. (4) <strong>Gautam Buddha University</strong> — Government, fees from ₹60K/yr. (5) <strong>BIMTECH</strong> — NIRF #61 MBA, Birla Group, ₹11.8 LPA avg. For best ROI BTech: GL Bajaj (NAAC A+, ₹1.2L/yr).
          </p>
        </div>

        {/* Overview Content */}
        <section className="mb-10 prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Colleges in Greater Noida: Complete 2026 Guide</h2>
          <p>
            Greater Noida, located 40 km from Delhi on the Yamuna Expressway, hosts the largest concentration of private higher-education institutions in North India. The <strong>Knowledge Park cluster</strong> (Knowledge Park I, II, and III) alone has 15+ campuses within a 5 km radius — all metro-connected via the Aqua Line. For engineering, management, medical, and law education at competitive fees, Greater Noida is the top alternative to Delhi&apos;s overcrowded college ecosystem.
          </p>
          <p>
            Four Greater Noida institutions have achieved NAAC A+ accreditation — <strong>Galgotias, Sharda, Bennett</strong>, and <strong>GL Bajaj Institute of Technology</strong>. BIMTECH (Birla Group) holds NIRF #61 rank among management schools — the only NIRF-ranked B-school in the Greater Noida region. According to <a href="https://www.nirfindia.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">NIRF 2024 rankings</a>, Sharda also features in the university category.
          </p>
          <p>
            <strong>Why choose Greater Noida over Delhi?</strong> Three reasons: (1) Fees are 30–60% lower than equivalent Delhi private colleges. (2) Campus size is larger — most institutions here have 50–100 acre campuses vs Delhi&apos;s constrained urban plots. (3) On-campus hostels are available at almost every college, unlike Delhi where students typically rent PG accommodation at extra cost.
          </p>
        </section>

        {/* College Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-5">Top 15 Colleges in Greater Noida 2026 — Ranked</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {c.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-blue-700 text-sm">
                    {c.name}
                  </Link>
                  <div className="text-[10px] text-blue-700 font-semibold mt-0.5">{c.highlight}</div>
                  <p className="text-xs text-gray-500 mt-1">📍 {c.location}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-500">
                    <span>🎓 {c.type}</span>
                    <span>📋 {c.exam}</span>
                    <span>💼 {c.placement}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 truncate">Programs: {c.streams}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium border border-blue-100">NAAC {c.naac}</span>
                  {c.nirf && <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium border border-green-100">NIRF #{c.nirf}</span>}
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">{c.fees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Greater Noida Colleges Fee Comparison 2026</h2>
        <div className="overflow-x-auto mb-10 rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">College</th>
                <th className="px-4 py-3 font-semibold">B.Tech/yr</th>
                <th className="px-4 py-3 font-semibold">MBA/yr</th>
                <th className="px-4 py-3 font-semibold">NAAC</th>
                <th className="px-4 py-3 font-semibold">Metro</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((r, i) => (
                <tr key={r.college} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900">{r.college}</td>
                  <td className="px-4 py-3 text-gray-700">{r.btech}</td>
                  <td className="px-4 py-3 text-gray-700">{r.mba}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full font-semibold ${r.naac === "A+" ? "bg-green-100 text-green-800" : "bg-blue-50 text-blue-700"}`}>
                      {r.naac}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{r.metro}</td>
                  <td className="px-4 py-3 text-gray-700 font-medium">{r.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Knowledge Park Map */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h2 className="text-lg font-bold text-amber-900 mb-3">Knowledge Park Campus Guide — Metro Connectivity</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { area: "Knowledge Park I", colleges: "Galgotias College (GCET), ITS Engineering", metro: "Pari Chowk Station (Aqua Line)" },
              { area: "Knowledge Park II", colleges: "BIMTECH, IILM, NIET, JSS Academy, Lloyd Law", metro: "Knowledge Park II Station" },
              { area: "Knowledge Park III", colleges: "Sharda University, GL Bajaj, Galgotias University", metro: "Knowledge Park III Station" },
              { area: "Yamuna Expressway", colleges: "Gautam Buddha University, Noida International University", metro: "Pari Chowk (5 km) + auto" },
              { area: "Tech Zone II / Dadri", colleges: "Bennett University, Shiv Nadar University", metro: "Cab from Pari Chowk (20 min)" },
              { area: "Sector 62, Noida", colleges: "JSS Academy (Noida campus), Amity Noida", metro: "Sector 62 Station (Blue Line)" },
            ].map(k => (
              <div key={k.area} className="bg-white rounded-lg p-3 border border-amber-100">
                <p className="font-bold text-amber-900 text-xs">{k.area}</p>
                <p className="text-xs text-gray-700 mt-1">{k.colleges}</p>
                <p className="text-[11px] text-gray-400 mt-1">🚇 {k.metro}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-amber-800 mt-3">
            <strong>Aqua Line route:</strong> Change at Sector 52 Noida (Blue Line) → Aqua Line runs 29 km to Depot station via all Knowledge Park stops.
          </p>
        </div>

        {/* Stream Guide */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Stream-Wise Best Colleges in Greater Noida</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              stream: "B.Tech / Engineering",
              icon: "⚙️",
              colleges: [
                { name: "Shiv Nadar University", note: "Best CS/Research, ₹10 LPA avg" },
                { name: "Bennett University", note: "AI/ML focus, Times Group, ₹9 LPA avg" },
                { name: "Galgotias University", note: "Volume + placement, ₹7.5 LPA avg" },
                { name: "GL Bajaj", note: "Best ROI, NAAC A+, ₹1.2L/yr only" },
              ],
            },
            {
              stream: "MBA / PGDM",
              icon: "📊",
              colleges: [
                { name: "BIMTECH", note: "NIRF #61, Birla Group, ₹11.8 LPA avg" },
                { name: "Shiv Nadar MBA", note: "Analytics focus, ₹9 LPA avg" },
                { name: "Bennett University MBA", note: "Industry curriculum, ₹8 LPA avg" },
                { name: "GL Bajaj MBA", note: "Best ROI, ₹3L total, ₹7.5 LPA avg" },
              ],
            },
            {
              stream: "MBBS / Medical",
              icon: "🏥",
              colleges: [
                { name: "Sharda Medical College", note: "1,500-bed hospital, NEET 530+" },
                { name: "Sharda BDS/Pharmacy", note: "Best Dental + Pharmacy NCR" },
                { name: "NIU B.Pharm", note: "Budget option, GPAT coaching" },
                { name: "Galgotias B.Pharm", note: "NAAC A+, industry exposure" },
              ],
            },
            {
              stream: "Law Colleges",
              icon: "⚖️",
              colleges: [
                { name: "Lloyd Law College", note: "Best private law NCR, CLAT/LSAT" },
                { name: "Galgotias University Law", note: "NAAC A+, BA LLB 5-yr" },
                { name: "Sharda University Law", note: "International moots exposure" },
                { name: "GBU LLB", note: "Government fees, cheapest option" },
              ],
            },
          ].map(s => (
            <div key={s.stream} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-3">{s.icon} {s.stream}</h3>
              <ol className="space-y-2">
                {s.colleges.map((c, i) => (
                  <li key={c.name} className="flex items-start gap-2 text-xs">
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span><span className="font-semibold text-gray-800">{c.name}</span> — <span className="text-gray-500">{c.note}</span></span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Colleges in Greater Noida 2026</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between items-center p-4">
                <span>{f.question}</span>
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-2">+</span>
              </summary>
              <p className="text-gray-600 text-sm px-4 pb-4 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Links */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related College Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Engineering Colleges Noida", href: "/engineering-colleges-noida" },
            { label: "MBA Colleges Noida", href: "/mba-colleges-noida" },
            { label: "IP University Colleges Delhi", href: "/ipu-colleges-delhi" },
            { label: "Colleges in Gurugram", href: "/colleges-gurugram" },
            { label: "BCA Colleges Noida", href: "/bca-colleges-noida" },
            { label: "BBA Colleges Noida", href: "/bba-colleges-noida" },
            { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "Low Fee Engineering Delhi", href: "/low-fees-engineering-colleges-delhi" },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Authoritative Citations — improves E-E-A-T */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-xs text-gray-600">
          <p className="font-semibold text-gray-700 mb-2">Official Sources & Accreditation Data</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="https://www.naac.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">NAAC — National Assessment & Accreditation Council</a>
            <a href="https://www.nirfindia.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">NIRF Rankings — Ministry of Education</a>
            <a href="https://www.ugc.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">UGC — University Grants Commission</a>
            <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">AICTE — All India Council for Technical Education</a>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1B3A6B] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold text-base">Need free guidance for Greater Noida college admission 2026?</p>
            <p className="text-blue-200 text-sm mt-1">Expert counselling for Galgotias, Sharda, BIMTECH, Shiv Nadar, GL Bajaj & all NCR colleges.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap transition-colors">
            Free Counselling
          </Link>
        </div>

      </main>
    </>
  )
}
