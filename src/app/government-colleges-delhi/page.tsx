import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users, ShieldCheck } from "lucide-react"
import ReviewedByline from "@/components/seo/ReviewedByline"

const LAST_UPDATED = "June 2026"

export const metadata: Metadata = genMeta({
  title: "Government Colleges in Delhi 2026 | DTU, AIIMS, NLU & More",
  description: "Top government colleges in Delhi 2026: DTU, NSUT, IIT Delhi (engineering), AIIMS Delhi (medical), Miranda House, Hindu College (arts), NLU Delhi (law)",
  path: "/government-colleges-delhi",
  keywords: [
    "government colleges in Delhi 2026",
    "best government College Delhi",
    "government engineering College Delhi",
    "DTU Delhi government college",
    "Miranda House College government aided",
    "government medical College Delhi",
    "AIIMS Delhi government",
    "free government College Delhi",
    "low fee government College Delhi",
    "DU government affiliated colleges",
    "National Law University Delhi",
  ],
})

const categories = [
  {
    type: "Government Engineering",
    emoji: "",
    colleges: [
      { name: "IIT Delhi", fees: "Government IIT fee structure", naac: "A++", nirf: 2, program: "BTech, MTech, PhD", slug: "iit-delhi", note: "NIRF #2 Engineering | JEE Advanced" },
      { name: "Delhi Technological University (DTU)", fees: "Government fee structure", naac: "A+", nirf: 49, program: "BTech, MTech, PhD", slug: "dtu-delhi", note: "Best Govt State Engineering | NIRF #49" },
      { name: "Netaji Subhas University of Technology (NSUT)", fees: "Government fee structure", naac: "A+", nirf: null, program: "BTech, MTech", slug: "nsut-delhi", note: "Top Govt Engineering | JAC Delhi" },
      { name: "Indira Gandhi Delhi Technical University for Women (IGDTUW)", fees: "Government fee structure", naac: "A", nirf: null, program: "BTech (Women)", slug: "igdtuw-delhi", note: "Govt Women's Engineering University" },
      { name: "Indraprastha Institute of Information Technology Delhi (IIIT Delhi)", fees: "Government fee structure", naac: "A", nirf: null, program: "BTech, MTech, PhD (CS/IT focus)", slug: "indraprastha-institute-of-information-technology-delhi", note: "Govt | CS/AI Focused" },
    ],
  },
  {
    type: "Government Arts & Science",
    emoji: "",
    colleges: [
      { name: "Miranda House", fees: "DU government fee structure", naac: "A+", nirf: null, program: "BA, BSc", slug: "miranda-house", note: "Est. 1948 | Top Women's College, University of Delhi" },
      { name: "Hindu College, University of Delhi", fees: "DU government fee structure", naac: "A+", nirf: null, program: "BA, BSc", slug: "hindu-college-university-of-delhi", note: "Premier DU Constituent College" },
      { name: "Lady Shri Ram College for Women (LSR)", fees: "DU government fee structure", naac: "A+", nirf: null, program: "BA, BSc", slug: "lsr-delhi", note: "Top Women's College, University of Delhi" },
      { name: "Sri Venkateswara College", fees: "DU government fee structure", naac: "A", nirf: null, program: "BSc, BA", slug: "sri-venkateswara-college", note: "DU Constituent College" },
    ],
  },
  {
    type: "Government Commerce",
    emoji: "",
    colleges: [
      { name: "Shri Ram College of Commerce (SRCC)", fees: "DU government fee structure", naac: "A+", nirf: null, program: "BCom (Hons), Economics", slug: "shri-ram-college-of-commerce", note: "India's Top Commerce College, University of Delhi" },
    ],
  },
  {
    type: "Government Medical",
    emoji: "",
    colleges: [
      { name: "AIIMS Delhi", fees: "₹1,628–₹50,000 total course", naac: "A++", nirf: 1, program: "MBBS, MD, MS", slug: "aiims-delhi", note: "NIRF #1 Medical | NEET UG All India Quota" },
      { name: "Vardhman Mahavir Medical College (Safdarjung Hospital)", fees: "₹1.15L–₹2.65L/yr", naac: "A", nirf: null, program: "MBBS", slug: "vardhman-mahavir-medical-college", note: "Govt | Attached to Safdarjung Hospital" },
      { name: "Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital)", fees: "₹51K–₹3.75L/yr", naac: "A", nirf: null, program: "MBBS", slug: "atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital", note: "Govt | Attached to RML Hospital" },
    ],
  },
  {
    type: "Government Law",
    emoji: "",
    colleges: [
      { name: "National Law University, Delhi (NLU Delhi)", fees: "Government NLU fee structure", naac: "A", nirf: null, program: "BA LLB (5yr), LLM", slug: "national-law-university-delhi", note: "Top Law School in India | CLAT/AILET" },
    ],
  },
  {
    type: "Government Management & Design",
    emoji: "",
    colleges: [
      { name: "Faculty of Management Studies (FMS), Delhi", fees: "Government DU fee structure", naac: "A+", nirf: 13, program: "MBA (2yr)", slug: "fms-delhi", note: "NIRF #13 Management | Best MBA Value in India" },
      { name: "School of Planning and Architecture, New Delhi (SPA Delhi)", fees: "Government fee structure", naac: "A", nirf: null, program: "B.Arch, M.Arch, Planning", slug: "school-of-planning-and-architecture-new-delhi", note: "Institute of National Importance" },
    ],
  },
]

const faqs = [
  {
    question: "Which are the best government colleges in Delhi?",
    answer: "The best government colleges in Delhi by stream: Engineering — IIT Delhi (NIRF #2) and DTU (NIRF #49); Medical — AIIMS Delhi (NIRF #1); Arts — Miranda House, Hindu College, and Lady Shri Ram College, all constituent colleges of University of Delhi; Commerce — Shri Ram College of Commerce (SRCC); Law — National Law University, Delhi (NLU Delhi); Management — Faculty of Management Studies, Delhi (FMS Delhi, NIRF #13).",
  },
  {
    question: "What is the fee for government colleges in Delhi?",
    answer: "Government colleges in Delhi follow regulated, low fee structures. AIIMS Delhi's entire MBBS course costs roughly ₹1,628–₹50,000. DU constituent colleges (Miranda House, Hindu College, SRCC) charge government-regulated annual fees, among the lowest in the country for their tier. FMS Delhi's MBA is widely cited as the best ROI MBA in India at roughly ₹55,000 total. Always check the official college or DU admission portal for the current year's exact fee notification.",
  },
  {
    question: "How to get admission in government colleges in Delhi?",
    answer: "Admission routes vary by stream: Engineering colleges (IIT Delhi, DTU, NSUT, IGDTUW) admit via JEE Advanced or JEE Main through JoSAA/JAC Delhi counselling. AIIMS Delhi admits via NEET UG All India Quota. DU constituent colleges (Miranda House, Hindu College, SRCC, LSR) admit via CUET. NLU Delhi admits via AILET. FMS Delhi admits via CAT. Always confirm current-year exam and counselling dates on official portals.",
  },
  {
    question: "Are government college degrees from Delhi respected for jobs and higher studies?",
    answer: "Yes. IIT Delhi and DTU graduates are recruited by top global tech and engineering firms. AIIMS Delhi is India's top-ranked medical institution. DU constituent colleges like Miranda House, Hindu College, and SRCC are nationally recognized for academics and have strong alumni in civil services, academia, and industry. NLU Delhi and FMS Delhi are top-ranked in law and management respectively. Degrees from all these institutions are fully recognized for further study and competitive exams in India and abroad.",
  },
  {
    question: "Can I get a scholarship at government colleges in Delhi?",
    answer: "Yes. Government colleges in Delhi offer multiple scholarship routes, including the GOI Post-Matric Scholarship for SC/ST students, EBC (Economically Backward Class) scholarships, OBC scholarships, and merit-based scholarships from University of Delhi for top-ranking students in each faculty. Check each institution's official scholarship cell for current eligibility and amounts.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Government Colleges Delhi", url: "https://www.collegedelhi.com/government-colleges-delhi" },
]

export const revalidate = 86400

export default function GovernmentCollegesDELHI() {
  const articleSchema = generateArticleSchema({
    title: "Government Colleges in Delhi 2026",
    description: "Top government colleges in Delhi 2026: DTU, NSUT, IIT Delhi (engineering), AIIMS Delhi (medical), Miranda House, Hindu College (arts), NLU Delhi (law)",
    author: "CollegeDelhi Editorial Team",
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
    url: "/government-colleges-delhi",
    category: "Government Colleges",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
          <ReviewedByline lastUpdated={LAST_UPDATED} center />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Government Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Real, verified government colleges in Delhi — engineering, medical, arts, commerce, law &amp; management. Government fee structures with scholarship options.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: ShieldCheck, text: "Verified Govt Colleges" },
              { icon: BookOpen, text: "All Streams" },
              { icon: Award, text: "NIRF + NAAC Ranked" },
              { icon: TrendingUp, text: "Affordable Govt Fees" },
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
              <strong>Engineering:</strong> IIT Delhi (NIRF #2) / DTU (NIRF #49) · <strong>Medical:</strong> AIIMS Delhi (NIRF #1) ·{" "}
              <strong>Arts:</strong> Miranda House, Hindu College, LSR · <strong>Commerce:</strong> SRCC · <strong>MBA:</strong> FMS Delhi (NIRF #13) ·{" "}
              <strong>Law:</strong> NLU Delhi
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
                "AIIMS Delhi — Stipend for select categories per Govt of India norms",
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
            <p className="text-blue-200 text-sm mb-4">Our JEE Main / NEET predictor tells you your chances at DTU, NSUT, AIIMS Delhi and other government colleges in seconds.</p>
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


