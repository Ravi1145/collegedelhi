import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users, ShieldCheck } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Government colleges in Delhi 2026",
  description: "Top govt colleges in Delhi 2026: DTU Delhi (NIRF #49, ₹80K/yr), AFMC (NIRF #4, free MBBS), BJ Medical (NIRF #18). Fees ₹8K–₹1.8L/yr. CAP/NEET/JEE Main cutoffs",
  path: "/government-colleges-delhi",
  keywords: [
    "government colleges in Delhi 2026",
    "best government College Delhi",
    "government engineering College Delhi",
    "DTU Delhi government college",
    "Miranda House College government aided",
    "government medical College Delhi",
    "Maulana Azad Medical College Delhi government",
    "free government College Delhi",
    "low fee government College Delhi",
    "DU government affiliated colleges",
    "autonomous government colleges Delhi",
    "Delhi municipal corporation colleges",
    "state government colleges Delhi Delhi",
  ],
})

const categories = [
  {
    type: "Government Engineering",
    emoji: "",
    colleges: [
      { name: "DTU Delhi Technological University", fees: "₹80K–₹1.8L/yr", naac: "A+", nirf: 49, program: "BTech, MTech, PhD", slug: "dtu-delhi-delhi-technological-university", note: "Best Govt Engineering | Est. 1854 | NIRF #49" },
      { name: "Army Institute of Technology (AIT)", fees: "₹1.5L–₹2L/yr", naac: "A", nirf: null, program: "BTech (4 branches)", slug: "army-institute-of-technology-Delhi", note: "Defence-backed | Delhi Cantonment | Very selective" },
      { name: "Government Polytechnic, Delhi", fees: "₹15K–₹25K/yr", naac: "–", nirf: null, program: "Diploma Engineering", slug: "government-polytechnic-Delhi", note: "Cheapest Technical | JEE Main Diploma" },
    ],
  },
  {
    type: "Government Arts & Science",
    emoji: "",
    colleges: [
      { name: "Miranda House College", fees: "₹10K–₹30K/yr", naac: "A+", nirf: null, program: "BA, BSc, BCom, BCA", slug: "miranda-house-college-delhi", note: "Est. 1885 | Most Prestigious Arts College Delhi" },
      { name: "Hindu College (Sir Parashurambhau)", fees: "₹12K–₹28K/yr", naac: "A+", nirf: null, program: "BA, BSc, BCom", slug: "sp-college-delhi-sir-parashurambhau-college", note: "Top Science Stream | NAAC A+" },
      { name: "BMCC — Brihan Delhi College of Commerce", fees: "₹8K–₹20K/yr", naac: "A", nirf: null, program: "BCom, MCom, BBA", slug: "bmcc-brihan-Delhi-college-of-commerce-Delhi", note: "Cheapest BCom in Delhi | Govt-aided" },
      { name: "Kirori Mal College of Arts, Science & Commerce", fees: "₹10K–₹25K/yr", naac: "A", nirf: null, program: "BA, BSc, BCom", slug: "modern-college-of-arts-science-commerce-Delhi", note: "Connaught Place | Large intake" },
      { name: "Nowrosjee Wadia College", fees: "₹10K–₹22K/yr", naac: "A", nirf: null, program: "BA, BSc, BCom", slug: "nowrosjee-wadia-college-delhi", note: "Est. 1832 | Heritage campus" },
    ],
  },
  {
    type: "Government Medical",
    emoji: "",
    colleges: [
      { name: "AFMC — AIIMS Delhi", fees: "₹50,000 (total 4.5 yrs)", naac: "A++", nirf: 4, program: "MBBS (Defence)", slug: "afmc-armed-forces-medical-college-delhi", note: "NIRF #4 | Free for Defence | 650+ NEET" },
      { name: "Maulana Azad Medical College, Delhi (MAMC)", fees: "₹60K–₹1.2L/yr", naac: "A+", nirf: 18, program: "MBBS, MD, MS", slug: "bj-medical-college-delhi", note: "NIRF #18 | Best Govt for Open Category | 625+ NEET" },
      { name: "Byramjee Jeejeebhoy Government Medical College (BJGMC)", fees: "₹50K–₹80K/yr", naac: "A", nirf: null, program: "MBBS", slug: "byramjee-jeejeebhoy-government-medical-college", note: "Govt Medical | Delhi City Centre" },
      { name: "Delhi Dental College & Hospital", fees: "₹1.5L–₹2.5L/yr", naac: "A", nirf: null, program: "BDS, MDS", slug: "Delhi-dental-college-delhi", note: "Best Govt Dental College Delhi | 500+ NEET BDS" },
    ],
  },
  {
    type: "Government Law",
    emoji: "",
    colleges: [
      { name: "ILS Law College", fees: "₹20K–₹40K/yr", naac: "A", nirf: null, program: "BA LLB (5yr), LLM", slug: "ils-law-college-delhi", note: "Est. 1924 | Most Prestigious Law College Delhi" },
      { name: "New Law College (BMCC Road)", fees: "₹15K–₹25K/yr", naac: "B+", nirf: null, program: "LLB (3yr)", slug: "new-law-college-delhi", note: "Cheapest LLB Delhi | 360 seats | DU" },
    ],
  },
  {
    type: "Government Research & Specialised",
    emoji: "",
    colleges: [
      { name: "IISER Delhi (Indian Institute of Science Education & Research)", fees: "₹15K–₹30K/yr", naac: "–", nirf: null, program: "BS-MS (5yr), PhD", slug: "iiser-Delhi-indian-institute-science-education-research", note: "National Institute | IAT + JEE Advanced | Research excellence" },
      { name: "DIAT (Defence Institute of Advanced Technology)", fees: "₹50K–₹80K/yr", naac: "–", nirf: null, program: "MTech, PhD (Defence)", slug: "diat-defence-institute-advanced-technology-Delhi", note: "Defence University | GATE required | PG only" },
      { name: "Gokhale Institute of Politics & Economics", fees: "₹25K–₹50K/yr", naac: "A", nirf: null, program: "MA Economics, MBA", slug: "gokhale-institute-politics-economics-Delhi", note: "Deemed | Economics research | MPSC alumni" },
      { name: "Delhi School of Management (DSM) — DTU MBA", fees: "₹60K–₹90K/yr", naac: "A+", nirf: null, program: "MBA (2yr)", slug: "delhi-school-of-management-dtu", note: "Best Govt MBA Delhi | IPU CET / CAT" },
    ],
  },
]

const faqs = [
  {
    question: "Which are the best government colleges in Delhi?",
    answer: "The best government colleges in Delhi are: (1) DTU Delhi Technological University — best government engineering college (NIRF #49), (2) AFMC — best government medical college (NIRF #4, nearly free), (3) Maulana Azad Medical College (NIRF #18), (4) ILS Law College — most prestigious government law college (est. 1924), (5) Miranda House College — best government arts college (est. 1885, NAAC A+), (6) DSM DTU — best government MBA.",
  },
  {
    question: "What is the fee for government colleges in Delhi?",
    answer: "Government college fees in Delhi are the most affordable in Delhi: Government arts/commerce colleges charge just ₹8,000–₹30,000/year. DTU Delhi engineering charges ₹80K–₹1.8L/year. Maulana Azad Medical College MBBS costs ₹60K–₹1.2L/year. AFMC MBBS is effectively free at ₹50,000 for the entire 4.5-year course. Government law colleges charge ₹15,000–₹40,000/year.",
  },
  {
    question: "How to get admission in government colleges in Delhi?",
    answer: "Government college admissions in Delhi go through centralized processes: Engineering — JEE Main + JAC Delhi Rounds by Delhi State CET Cell; Medical — NEET + State CET counselling; Arts/Commerce/Science — DU CAP (Class 12 merit); Law — MH-CET Law + CAP; MBA — MAH-MBA CET + CAP. DTU Delhi and IISER have separate entrance tests. All processes are online through respective state portals.",
  },
  {
    question: "Are government college degrees respected for jobs and higher studies?",
    answer: "Yes, government college degrees from Delhi are highly respected. DTU Delhi graduates get placed in top MNCs like TCS, Infosys, Mahindra, and L&T. AFMC and MAMC doctors are among India's most respected medical professionals. ILS Law College alumni include High Court judges and senior advocates. Miranda House College alumni include IAS/IPS officers and entrepreneurs. Government degrees from DU-affiliated autonomous colleges are accepted for UPSC, MPSC, and all government exams.",
  },
  {
    question: "Can I get scholarship in government colleges in Delhi?",
    answer: "Yes, government colleges in Delhi offer multiple scholarships: (1) GOI Post-Matric Scholarship for SC/ST students (full fee waiver + stipend), (2) EBC (Economically Backward Class) scholarship — family income < ₹8L, (3) OBC scholarship — government-funded, (4) Rajarshri Shahu Maharaj Scholarship for OBC girls, (5) DU merit scholarships for top 3 rank holders. Students at AFMC, IISER, and DIAT get full stipend from the Government of India.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Government Colleges Delhi", url: "https://www.collegedelhi.com/government-colleges-delhi" },
]

export const revalidate = 86400

export default function GovernmentCollegesDELHI() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Government Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Government colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Complete list of top government &amp; government-aided colleges in Delhi — engineering, medical, arts, law &amp; research. Fees from ₹8K/year with full scholarship options.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: ShieldCheck, text: "20+ Govt Colleges" },
              { icon: BookOpen, text: "All Streams" },
              { icon: Award, text: "NIRF + NAAC Ranked" },
              { icon: TrendingUp, text: "Fees from ₹8K/yr" },
              { icon: Users, text: "Scholarships Available" },
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
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-10">
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Best Government Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Engineering:</strong> DTU (NIRF #49) · <strong>Medical:</strong> AFMC (NIRF #4, free!) / BJ Medical (NIRF #18) ·{" "}
              <strong>Arts:</strong> Miranda House College · <strong>Commerce:</strong> SRCC · <strong>MBA:</strong> DSM DTU ·{" "}
              <strong>Law:</strong> ILS Law College · <strong>Research:</strong> IISER Delhi
            </p>
          </div>

          {/* Category sections */}
          {categories.map(({ type, emoji, colleges }) => (
            <div key={type} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">{emoji}</span> {type} colleges in Delhi
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#0A1628" }}>
                      {["College", "NAAC", "NIRF", "Fees/yr", "Programs", "Note"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {colleges.map((c, i) => (
                      <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3">
                          <Link href={`/colleges/${c.slug}`} className="font-semibold text-blue-700 hover:text-red-700 transition-colors">
                            {c.name}
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">{c.naac}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{c.nirf ? `#${c.nirf}` : "–"}</td>
                        <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{c.fees}</td>
                        <td className="px-4 py-3 text-gray-600">{c.program}</td>
                        <td className="px-4 py-3 text-xs text-gray-600">{c.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Scholarships banner */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
            <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Scholarships at Government Colleges Delhi
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-green-800">
              {[
                "GOI Post-Matric Scholarship (SC/ST) — Full fee + monthly stipend",
                "EBC Scholarship (income < ₹8L) — Partial fee waiver",
                "OBC Scholarship — Government funded, applicable all streams",
                "Rajarshri Shahu Maharaj Scholarship — OBC girls",
                "DU Merit Scholarship — Top 3 rank holders in each faculty",
                "IISER / AFMC / DIAT — Full stipend from Govt of India",
              ].map(s => (
                <div key={s} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5"></span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Which government college can you get with your score?</p>
            <p className="text-blue-200 text-sm mb-4">Our JEE Main / NEET predictor tells you your chances at DTU Delhi, MAMC, AFMC and all government colleges in seconds.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/predictor" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                College Predictor
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Government Colleges Delhi</h2>
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
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "Arts & Science Colleges", href: "/arts-colleges-delhi" },
              { label: "Law Colleges Delhi", href: "/law-colleges-delhi" },
              { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi" },
              { label: "NIRF Rankings Delhi", href: "/nirf-insights" },
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


