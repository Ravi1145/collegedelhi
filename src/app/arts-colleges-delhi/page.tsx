import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Arts & Science colleges in Delhi 2026 | BA, BSc, BCom Fees & Admission",
  description: "Top arts, science and commerce colleges in Delhi 2026. Compare Miranda House College, Hindu College, BMCC, Symbiosis College and more. BA/BSc/BCom fees from ₹10K–₹1.5L/yr, NAAC grades, placements & admission process.",
  path: "/arts-colleges-delhi",
  keywords: [
    "arts colleges in Delhi 2026",
    "science colleges in Delhi 2026",
    "commerce colleges in Delhi 2026",
    "ba colleges Delhi",
    "bsc colleges Delhi",
    "bcom colleges Delhi",
    "Miranda House College Delhi 2026",
    "Hindu College Delhi admission",
    "bmcc Delhi bcom fees",
    "symbiosis College Delhi",
    "best arts College Delhi",
    "DU affiliated arts colleges Delhi",
    "humanities colleges Delhi",
    "liberal arts Delhi 2026",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "Miranda House College, Delhi",
    type: "Government-aided (Autonomous)",
    naac: "A+",
    fees: "₹10K–₹30K/yr",
    programs: "BA, BSc, BCom, BCA",
    seats: 2400,
    highlight: "Est. 1885 | Most Prestigious | NAAC A+",
    slug: "fergusson-college-delhi",
    strengths: ["Heritage campus", "Affordable fees", "Strong alumni", "150+ years"],
  },
  {
    rank: 2,
    name: "Hindu College (Sir Parashurambhau College)",
    type: "Government-aided (Autonomous)",
    naac: "A+",
    fees: "₹12K–₹28K/yr",
    programs: "BA, BSc, BCom",
    seats: 1800,
    highlight: "NAAC A+ | Strong Science dept",
    slug: "sp-college-delhi-sir-parashurambhau-college",
    strengths: ["Best Science stream", "Research programs", "Central location", "Low fees"],
  },
  {
    rank: 3,
    name: "BMCC — Brihan Delhi College of Commerce",
    type: "Government-aided",
    naac: "A",
    fees: "₹8K–₹20K/yr",
    programs: "BCom, MCom, BBA",
    seats: 3000,
    highlight: "Best BCom College Delhi | Lowest Fees",
    slug: "bmcc-brihan-Delhi-college-of-commerce-Delhi",
    strengths: ["Commerce focus", "Cheapest BCom", "Good placements", "DU top rank"],
  },
  {
    rank: 4,
    name: "Symbiosis College of Arts & Commerce",
    type: "Private (Deemed)",
    naac: "A",
    fees: "₹40K–₹80K/yr",
    programs: "BA, BCom, BBA, BCA",
    seats: 1200,
    highlight: "Symbiosis Brand | Best Private Arts",
    slug: "symbiosis-college-of-arts-commerce-Delhi",
    strengths: ["Modern campus", "Industry interface", "International exposure", "Strong brand"],
  },
  {
    rank: 5,
    name: "Kirori Mal College of Arts, Science & Commerce",
    type: "Government-aided",
    naac: "A",
    fees: "₹10K–₹25K/yr",
    programs: "BA, BSc, BCom",
    seats: 2200,
    highlight: "Connaught Place | Strong Faculty",
    slug: "modern-college-of-arts-science-commerce-Delhi",
    strengths: ["Central location", "Experienced faculty", "Research programs", "Affordable"],
  },
  {
    rank: 6,
    name: "Gargi College of Commerce",
    type: "Government-aided",
    naac: "A",
    fees: "₹8K–₹18K/yr",
    programs: "BCom, MCom, BBA",
    seats: 1600,
    highlight: "Best for Commerce | Economics strength",
    slug: "garware-college-of-commerce-Delhi",
    strengths: ["Commerce specialization", "Affordable", "Good network", "Delhi University top"],
  },
  {
    rank: 7,
    name: "Nowrosjee Wadia College",
    type: "Government-aided",
    naac: "A",
    fees: "₹10K–₹22K/yr",
    programs: "BA, BSc, BCom",
    seats: 1500,
    highlight: "Heritage | Strong in Arts & Languages",
    slug: "nowrosjee-wadia-college-delhi",
    strengths: ["1832 est.", "Language programs", "Cultural events", "Historic campus"],
  },
  {
    rank: 8,
    name: "MES Abasaheb Gargi College",
    type: "Government-aided",
    naac: "A",
    fees: "₹12K–₹24K/yr",
    programs: "BA, BSc, BCom",
    seats: 1400,
    highlight: "Karve Road | Good Science Labs",
    slug: "mes-abasaheb-garware-college-delhi",
    strengths: ["Science labs", "Library resources", "Sports facilities", "Affordable"],
  },
  {
    rank: 9,
    name: "Poona College of Arts, Science & Commerce",
    type: "Government-aided",
    naac: "A",
    fees: "₹8K–₹16K/yr",
    programs: "BA, BSc, BCom",
    seats: 1800,
    highlight: "Camp Area | Affordable & Accessible",
    slug: "poona-college-of-arts-science-commerce-Delhi",
    strengths: ["Central location", "Camp area", "Diverse student body", "Low fees"],
  },
  {
    rank: 10,
    name: "Sharda College of Arts, Commerce & Science",
    type: "Private",
    naac: "A",
    fees: "₹20K–₹40K/yr",
    programs: "BA, BSc, BCom, BCA",
    seats: 1200,
    highlight: "Sharda Group | Modern Infrastructure",
    slug: "Sharda-college-arts-commerce-science-Delhi",
    strengths: ["Modern labs", "IT facilities", "Sports complex", "Placement assistance"],
  },
]

const faqs = [
  {
    question: "Which is the best arts college in Delhi 2026?",
    answer: "Miranda House College is the most prestigious arts college in Delhi, established in 1885 with NAAC A+ grade and the lowest fees (₹10–30K/yr). Hindu College is best for BSc programs, BMCC is the top choice for BCom, and Symbiosis College of Arts & Commerce is the best private option with modern infrastructure and a Symbiosis brand advantage.",
  },
  {
    question: "What is the fee for arts and science colleges in Delhi?",
    answer: "Arts and science college fees in Delhi range from ₹8,000 to ₹80,000 per year. Government-aided autonomous colleges like Fergusson (₹10–30K), Hindu College (₹12–28K), and BMCC (₹8–20K/yr) are the most affordable. Private colleges like Symbiosis charge ₹40–80K/yr. Total 3-year BA/BSc/BCom costs ₹24,000 to ₹2.4 lakh.",
  },
  {
    question: "How to get admission in Miranda House College Delhi 2026?",
    answer: "Miranda House College admissions are based on HSC (Class 12) merit through the Centralised Admission Process (CAP) by DU. You need 70%+ in HSC for Science, 60%+ for Commerce, and 55%+ for Arts. Apply online at the DU admission portal (admission.DU.ac.in). Forms open in June 2026. There are no entrance tests — pure merit-based.",
  },
  {
    question: "Is BCom from BMCC Delhi good for placements?",
    answer: "Yes, BCom from BMCC (Brihan Delhi College of Commerce) is well-respected in Delhi's corporate and banking sector. BMCC graduates get placed in banks (HDFC, ICICI), accounting firms (Deloitte, EY), and companies like Infosys and TCS via campus recruitment. Average starting salary is ₹3–5 LPA. Many students pursue CA/CMA/MBA after BCom from BMCC.",
  },
  {
    question: "What career can I do after BA/BSc from Delhi colleges?",
    answer: "After BA from Delhi colleges, careers include civil services (UPSC/MPSC), MBA/MMS admissions, journalism, content writing, teaching (B.Ed), law (BA LLB), and government exams. After BSc, options include MSc/MTech, government research jobs, MBA, data science, and pharma. Most graduates earn ₹3–8 LPA in their first job, rising to ₹8–15 LPA within 5 years.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://collegedelhi.com" },
  { name: "Colleges", url: "https://collegedelhi.com/colleges" },
  { name: "Arts Colleges Delhi", url: "https://collegedelhi.com/arts-colleges-delhi" },
]

export const revalidate = 86400

export default function ArtsCollegesDELHI() {
  return (
    <>
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Arts Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Best Arts &amp; Science colleges in Delhi 2026
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top BA, BSc &amp; BCom colleges in Delhi — fees from ₹8K to ₹80K/year, NAAC grades, DU CAP admissions &amp; career outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "10 Top Colleges" },
              { icon: TrendingUp, text: "Fees from ₹8K/yr" },
              { icon: Award, text: "NAAC A+ Ranked" },
              { icon: Users, text: "BA · BSc · BCom · BCA" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <Icon className="w-4 h-4 text-red-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Quick Answer */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-red-800 mb-1">⚡ Quick Answer — Top Arts &amp; Science Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best Arts:</strong> Miranda House College · <strong>Best Science:</strong> Hindu College ·{" "}
              <strong>Best Commerce (BCom):</strong> BMCC · <strong>Best Private:</strong> Symbiosis College ·{" "}
              <strong>Cheapest:</strong> BMCC &amp; Poona College (₹8K/yr)
            </p>
          </div>
          {/* College table — live from backend */}
          <StreamCollegesTable stream="Arts" keywords={["science","commerce","humanities","bsc","bcom"]} />
          <h2 className="text-xl font-bold text-gray-900 mb-5">Choose by Program — Best Colleges by Stream</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                stream: "BA (Arts)", emoji: "📚", best: "Miranda House College", why: "Heritage, affordable, best humanities faculty in Delhi",
                also: ["Hindu College", "Kirori Mal College", "Nowrosjee Wadia"],
                fees: "₹10K–₹30K/yr",
              },
              {
                stream: "BSc (Science)", emoji: "🔬", best: "Hindu College (Parashurambhau)", why: "NAAC A+, strong Physics/Chemistry/Biology labs",
                also: ["Miranda House College", "Kirori Mal College", "Gargi College"],
                fees: "₹12K–₹28K/yr",
              },
              {
                stream: "BCom (Commerce)", emoji: "📊", best: "BMCC Delhi", why: "Cheapest fees, best commerce network, CA/CMA prep",
                also: ["Gargi College", "Poona College", "Symbiosis College"],
                fees: "₹8K–₹20K/yr",
              },
            ].map(({ stream, emoji, best, why, also, fees }) => (
              <div key={stream} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="text-2xl mb-2">{emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{stream}</h3>
                <p className="text-xs text-red-700 font-semibold mb-1">Best: {best}</p>
                <p className="text-xs text-gray-500 mb-3">{why}</p>
                <p className="text-xs text-gray-600 font-medium mb-1">Also consider:</p>
                <ul className="text-xs text-gray-500 space-y-0.5 mb-3">
                  {also.map(a => <li key={a}>• {a}</li>)}
                </ul>
                <p className="text-xs text-blue-700 font-semibold">Fees: {fees}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Not sure which stream — Arts, Science or Commerce?</p>
            <p className="text-blue-200 text-sm mb-4">Our AI College Finder matches you to the best college based on your Class 12 marks, stream preference &amp; budget.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                Try AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Arts &amp; Science Colleges Delhi</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "Law Colleges Delhi", href: "/law-colleges-delhi" },
              { label: "BCA Colleges Delhi", href: "/bca-colleges-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-blue-600 hover:text-red-700 bg-white border border-gray-100 rounded-lg px-4 py-3 text-center shadow-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


