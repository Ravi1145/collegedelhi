import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best BCA Colleges in Delhi 2026 | Fees, Cutoff & IT Placements",
  description: "Top BCA colleges in Delhi 2026. MAIT, JIMS, Amity, VIPS — fees ₹20K–₹1.8L/yr, IPU CET cutoffs, placement up to ₹12 LPA. Complete BCA admission guide.",
  path: "/bca-colleges-delhi",
  keywords: [
    "bca colleges in Delhi 2026",
    "best bca college Delhi",
    "bca colleges Delhi NCR",
    "bca fees Delhi 2026",
    "bca admission Delhi 2026",
    "ip university bca Delhi",
    "ggsipu bca colleges Delhi",
    "bca placement Delhi",
    "bca vs bsc cs Delhi",
    "bachelor of computer applications Delhi",
    "mait bca delhi",
    "jims bca delhi",
    "amity bca noida",
    "vips bca delhi",
  ],
})

export const revalidate = 300

const colleges = [
  {
    rank: 1,
    name: "Maharaja Agrasen Institute of Technology (MAIT), Delhi",
    type: "Government-aided (GGSIPU)",
    naac: "A+",
    fees: "₹55K–₹75K/yr",
    placement: "₹6–12 LPA",
    seats: 120,
    cutoff: "IPU CET 2026 (Merit-based)",
    highlight: "Best Govt BCA Delhi | Top GGSIPU College | Strong IT Placements",
    slug: "mait-maharaja-agrasen-institute-of-technology-delhi",
  },
  {
    rank: 2,
    name: "JIMS — Jagan Institute of Management Studies, Rohini",
    type: "Autonomous (GGSIPU)",
    naac: "A",
    fees: "₹80K–₹1.1L/yr",
    placement: "₹5–9 LPA",
    seats: 120,
    cutoff: "IPU CET / 12th Merit",
    highlight: "Top IPU BCA | Industry-Linked | Strong Alumni Network",
    slug: "jims-jagan-institute-management-studies-delhi",
  },
  {
    rank: 3,
    name: "Amity University Noida — BCA Programme",
    type: "Deemed University",
    naac: "A+",
    fees: "₹1.5L–₹1.8L/yr",
    placement: "₹6–12 LPA",
    seats: 180,
    cutoff: "Own Entrance / 12th 60%+",
    highlight: "NAAC A+ | MNC Placements | TCS, Infosys, Wipro Recruiters",
    slug: "amity-university-noida-delhi-ncr",
  },
  {
    rank: 4,
    name: "VIPS — Vivekananda Institute of Professional Studies, Delhi",
    type: "Autonomous (GGSIPU)",
    naac: "A",
    fees: "₹70K–₹95K/yr",
    placement: "₹4–8 LPA",
    seats: 120,
    cutoff: "IPU CET / 12th 55%+",
    highlight: "North Delhi | Practical Curriculum | Good Placement Record",
    slug: "vips-vivekananda-institute-professional-studies-delhi",
  },
  {
    rank: 5,
    name: "Maharaja Surajmal Institute, Janakpuri, Delhi",
    type: "Autonomous (GGSIPU)",
    naac: "A",
    fees: "₹55K–₹80K/yr",
    placement: "₹4–7 LPA",
    seats: 60,
    cutoff: "IPU CET / 12th 55%+",
    highlight: "West Delhi | Affordable | Government-aided",
    slug: "maharaja-surajmal-institute-janakpuri-delhi",
  },
  {
    rank: 6,
    name: "Tecnia Institute of Advanced Studies, Delhi",
    type: "Private (GGSIPU)",
    naac: "A",
    fees: "₹65K–₹90K/yr",
    placement: "₹4–7 LPA",
    seats: 60,
    cutoff: "IPU CET / 12th 50%+",
    highlight: "Rohini Campus | IT-focused | Budget-Friendly",
    slug: "tecnia-institute-advanced-studies-delhi",
  },
  {
    rank: 7,
    name: "Sharda University, Greater Noida (NCR)",
    type: "Deemed University",
    naac: "A+",
    fees: "₹80K–₹1.2L/yr",
    placement: "₹4–8 LPA",
    seats: 120,
    cutoff: "Own Entrance / 12th 50%+",
    highlight: "Large Campus | Modern Labs | NCR Location",
    slug: "sharda-university-greater-noida",
  },
]

const faqs = [
  {
    question: "Which is the best BCA college in Delhi 2026?",
    answer: "MAIT (Maharaja Agrasen Institute of Technology) is the best government-aided BCA college in Delhi under GGSIPU, with fees around ₹55–75K/year and placements averaging ₹6–12 LPA from TCS, Infosys, Wipro, and Cognizant. Amity University Noida is the best deemed university option for BCA with NAAC A+ accreditation and strong corporate tie-ups. For the most affordable option, MAIT and Maharaja Surajmal Institute offer government-aided seats under ₹80K/year.",
  },
  {
    question: "What is the fee for BCA in Delhi 2026?",
    answer: "BCA fees in Delhi 2026: Government-aided colleges (MAIT, Maharaja Surajmal Institute) charge ₹55K–₹80K/year under GGSIPU. Autonomous private colleges (JIMS, VIPS, Tecnia) charge ₹70K–₹1.1L/year. Deemed universities (Amity Noida, Sharda) charge ₹1.2L–₹1.8L/year. Total 3-year fees range from ₹1.65L (government) to ₹5.4L (deemed). Apply through IPU CET for GGSIPU-affiliated colleges at ipu.ac.in.",
  },
  {
    question: "Is BCA better than BSc Computer Science in Delhi?",
    answer: "BCA is more application-oriented — focused on programming, software development, and database management — making it better for direct IT jobs. BSc CS has a stronger mathematical/theoretical foundation, better for AI/ML research, GATE exam, and MTech. Both are accepted by top IT recruiters (TCS, Infosys, Wipro). BCA → MCA pathway is popular; BSc CS → MTech or MS abroad is preferred by research-oriented students. For immediate IT employment, BCA from a good GGSIPU college is the practical choice.",
  },
  {
    question: "What entrance exam is required for BCA in Delhi?",
    answer: "BCA entrance for Delhi 2026: GGSIPU-affiliated colleges (MAIT, JIMS, VIPS, Tecnia) require IPU CET (Indraprastha University Common Entrance Test) — register at ipu.ac.in. Deemed universities (Amity Noida, Sharda) conduct their own entrance tests. Most colleges require Class 12 in any stream with Mathematics, minimum 50–60% marks. JEE Main is NOT required for BCA admission in Delhi.",
  },
  {
    question: "What are the career options after BCA from Delhi?",
    answer: "BCA graduates from Delhi colleges work as: Software Developer (₹4–8 LPA), Web Developer (₹4–7 LPA), Data Analyst (₹5–10 LPA), System Administrator (₹4–6 LPA), Cybersecurity Analyst (₹6–12 LPA). Top recruiters: TCS, Infosys, Wipro, Capgemini, Cognizant, Accenture, HCL. Further education: MCA (2 years) boosts salary to ₹10–20 LPA; MBA from FMS Delhi or MDI Gurgaon targets ₹20–30 LPA in consulting and product management.",
  },
  {
    question: "What percentage is required for BCA admission in Delhi?",
    answer: "BCA admission requirements in Delhi 2026: Class 12 in any stream with Mathematics as a compulsory subject. Minimum percentage: GGSIPU colleges — 45–55% in Class 12 + IPU CET score. Amity University — 60%+ in Class 12 + own entrance/interview. Most private colleges set the cutoff at 50–55%. Students from Science, Commerce, or Arts streams can all apply. PCB (Biology without Maths) students need to verify individual college rules.",
  },
]

export default function BCACollegesDELHI() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Colleges", url: "/colleges" },
    { name: "BCA Colleges Delhi", url: "/bca-colleges-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqs)
  const itemListSchema = generateItemListSchema(
    colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `${c.fees} fees · ${c.placement} placement` }))
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">BCA Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Best BCA Colleges in Delhi 2026
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            BCA (Bachelor of Computer Applications) is a 3-year IT undergraduate degree. Compare top BCA colleges in Delhi — fees from ₹55K/year, placements up to ₹12 LPA, admission via IPU CET without JEE Main.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { icon: BookOpen, text: "7 BCA Colleges Delhi" },
              { icon: TrendingUp, text: "Up to ₹12 LPA" },
              { icon: Award, text: "NAAC A+ Colleges" },
              { icon: Users, text: "IPU CET Admission" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <Icon className="w-4 h-4 text-red-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Quick Answer — AEO/GEO block */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-blue-800 mb-1">Quick Answer — BCA Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best govt BCA:</strong> MAIT Delhi (₹55K/yr, GGSIPU) ·{" "}
              <strong>Best private:</strong> Amity Noida (NAAC A+, ₹1.8L/yr) ·{" "}
              <strong>Best placement:</strong> MAIT &amp; Amity (₹12 LPA) ·{" "}
              <strong>Entrance:</strong> IPU CET (govt) / Own test (deemed) ·{" "}
              <strong>No JEE Main</strong> required for BCA
            </p>
          </div>

          {/* Colleges Table */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top BCA Colleges in Delhi 2026</h2>
          <div className="space-y-4 mb-10">
            {colleges.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-blue-700 text-sm">#{c.rank}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-blue-700 transition-colors text-base">
                        {c.name}
                      </Link>
                      <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                      <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">NAAC {c.naac}</span>
                    </div>
                    <p className="text-xs text-blue-700 font-semibold mb-2">{c.highlight}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
                      <div><span className="font-semibold">Fees:</span> {c.fees}</div>
                      <div><span className="font-semibold">Placement:</span> {c.placement}</div>
                      <div><span className="font-semibold">Seats:</span> {c.seats}</div>
                      <div><span className="font-semibold">Cutoff:</span> {c.cutoff}</div>
                    </div>
                  </div>
                  <Link href={`/colleges/${c.slug}`}
                    className="shrink-0 text-xs font-semibold text-blue-700 hover:text-blue-800 border border-blue-200 hover:border-blue-400 px-3 py-1.5 rounded-lg transition-colors">
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* BCA vs BSc CS Comparison */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">BCA vs BSc Computer Science: Which is Better?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Choose BCA if you want:</h3>
              <ul className="text-sm text-blue-800 space-y-1.5">
                <li>Direct entry into software/web development</li>
                <li>TCS, Infosys, Wipro campus recruitment</li>
                <li>MCA or MBA after graduation</li>
                <li>App/web development specialization</li>
                <li>Startup / freelancing career path</li>
                <li>Industry-ready skills from Year 1</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
              <h3 className="font-bold text-purple-900 mb-3">Choose BSc CS if you want:</h3>
              <ul className="text-sm text-purple-800 space-y-1.5">
                <li>AI/ML/Data Science career</li>
                <li>Government / research sector jobs</li>
                <li>MTech or MS abroad after graduation</li>
                <li>GATE exam eligibility for MTech</li>
                <li>Strong mathematics and algorithms foundation</li>
                <li>IIT/NIT postgraduate programs</li>
              </ul>
            </div>
          </div>

          {/* Admission Process */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Get Admission in BCA Colleges Delhi 2026</h2>
          <div className="space-y-3 mb-10">
            {[
              { step: "1", title: "Check Eligibility", desc: "Class 12 (any stream) with Mathematics as a subject. Minimum 45–60% depending on college. Science, Commerce, and Arts students all eligible." },
              { step: "2", title: "Register for IPU CET", desc: "For GGSIPU colleges (MAIT, JIMS, VIPS), register for IPU CET at ipu.ac.in (March–April 2026). For Amity/Sharda, register on the college website directly." },
              { step: "3", title: "Appear for Entrance Test", desc: "IPU CET BCA covers Logical Reasoning, Mathematics, English, and Computer Awareness (60 questions, 60 minutes). Amity/Sharda conduct their own tests + PI." },
              { step: "4", title: "Check Merit List & Apply", desc: "GGSIPU releases centralized merit lists at ipu.ac.in. Choose BCA program and preferred college in the counselling portal. Fill college preferences in order of priority." },
              { step: "5", title: "Pay Fees & Confirm Seat", desc: "Pay seat confirmation fees within 3 days of allotment. Submit original Class 12 marksheet, migration certificate, category certificate (if applicable), and photos." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{step}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">BCA, BSc CS or BTech — what&apos;s right for you?</p>
            <p className="text-blue-200 text-sm mb-4">Our AI Finder compares all 3 paths based on your Class 12 marks, budget &amp; career goal — in 60 seconds.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-sm transition-all">
                Try AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — BCA Colleges Delhi</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 group">
                <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                  {faq.question}
                  <span className="text-blue-600 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          {/* Related Guides */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides for Delhi College Admission</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "BTech Colleges Delhi", href: "/btech-colleges-delhi" },
              { label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" },
              { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
              { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
              { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
              { label: "All Colleges in Delhi", href: "/colleges" },
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
