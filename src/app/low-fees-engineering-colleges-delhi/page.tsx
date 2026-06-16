import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, TrendingUp, BookOpen, IndianRupee } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Low Fees Engineering colleges in Delhi 2026 | Under ₹5L & ₹10L",
  description:
    "List of affordable engineering colleges in Delhi 2026. DTU Delhi fees ₹80K/yr, NIET Noida ₹1.1L/yr. Find budget B.Tech colleges under ₹5 lakh & ₹10 lakh total fees.",
  path: "/low-fees-engineering-colleges-delhi",
  keywords: [
    "low fees engineering colleges in Delhi",
    "affordable engineering colleges Delhi",
    "cheapest engineering colleges in Delhi",
    "engineering colleges in Delhi under 5 lakh",
    "engineering colleges in Delhi under 10 lakh",
    "budget engineering colleges Delhi",
    "low cost engineering colleges Delhi",
  ],
})

const under5LColleges = [
  {
    name: "HMR Institute Delhi & Management",
    type: "Private",
    feesPerYear: "₹95K–₹1.35L/yr",
    total4Yr: "~₹3.8–5.4L",
    naac: "B++",
    exam: "JEE Main",
    slug: "indira-college-of-engineering-management-Delhi",
    note: "Lowest private fees",
  },
  {
    name: "Delhi Technological University (DTU)",
    type: "Government",
    feesPerYear: "₹80K–₹1.8L/yr",
    total4Yr: "~₹4–7L",
    naac: "A+",
    exam: "JEE Main / JEE",
    slug: "dtu-delhi-delhi-technological-university",
    note: "Best govt. — lowest fees overall",
  },
  {
    name: "NIET Noida",
    type: "Private",
    feesPerYear: "₹1.1L–₹1.55L/yr",
    total4Yr: "~₹4.4–6.2L",
    naac: "A",
    exam: "JEE Main",
    slug: "NIET Noida-college-of-engineering-Delhi",
    note: "Affordable & reliable",
  },
  {
    name: "Sharda University Engineering",
    type: "Private",
    feesPerYear: "₹1.15L–₹1.6L/yr",
    total4Yr: "~₹4.6–6.4L",
    naac: "A",
    exam: "JEE Main",
    slug: "Sharda-college-of-engineering-Delhi",
    note: "Large campus",
  },
  {
    name: "GL Bajaj Delhi Merit College of Engineering",
    type: "Private",
    feesPerYear: "₹1.2L–₹1.7L/yr",
    total4Yr: "~₹4.8–6.8L",
    naac: "A",
    exam: "JEE Main",
    slug: "GL Bajaj-gl-bajaj-institute-technology-management-noida",
    note: "Best private budget",
  },
]

const under10LColleges = [
  {
    name: "Delhi Institute of Computer Technology (NSUT)",
    type: "Autonomous",
    feesPerYear: "₹1.4L–₹1.9L/yr",
    total4Yr: "~₹5.6–7.6L",
    naac: "A",
    exam: "JEE Main / JEE",
    slug: "nsut-delhi",
    note: "Best for CS/IT",
  },
  {
    name: "Indraprastha Institute of Information Technology (IIIT Delhi)",
    type: "Autonomous",
    feesPerYear: "₹1.6L–₹2.2L/yr",
    total4Yr: "~₹6.4–8.8L",
    naac: "A+",
    exam: "JEE Main / JEE",
    slug: "iiit-delhi-indraprastha-institute-of-information-technology",
    note: "NIRF #101",
  },
]

const faqs = [
  {
    question: "Which is the cheapest engineering college in Delhi?",
    answer:
      "Delhi Technological University (DTU) is the cheapest engineering college in Delhi with fees of ₹80,000–₹1.8L per year (government college). Among private colleges, HMR Institute Delhi & Management charges ₹95K–₹1.35L/yr making it the most affordable private option. Total 4-year cost at DTU Delhi is approximately ₹4–7 lakh including all fees.",
  },
  {
    question: "Can I do B.Tech in Delhi under 5 lakh total fees?",
    answer:
      "Yes, you can complete B.Tech in Delhi under ₹5 lakh total fees at government college DTU Delhi (if you get in early and avail scholarships). HMR Institute Delhi has total fees starting from ₹3.8L for 4 years. SC/ST students can get full fee waivers at government colleges, making B.Tech nearly free. EBC (Economically Backward Class) students also get substantial fee concessions.",
  },
  {
    question: "What is the cheapest private engineering college in Delhi?",
    answer:
      "HMR Institute Delhi & Management (ICEM) at Delhi is the cheapest private engineering college with fees of ₹95,000–₹1.35L per year (total ₹3.8–5.4L for 4 years). NIET Noida charges ₹1.1L–₹1.55L/yr and is another very affordable option. Both are NAAC accredited and affiliated to Savitribai Phule Delhi University (DU).",
  },
  {
    question: "Which engineering colleges in Delhi have fees under ₹10 lakh total?",
    answer:
      "Several Delhi engineering colleges have total 4-year B.Tech fees under ₹10 lakh: DTU Delhi (₹4–7L), Indira College (₹3.8–5.4L), NIET Noida (₹4.4–6.2L), Sharda College (₹4.6–6.4L), GL Bajaj NIET (₹4.8–6.8L), NSUT (₹5.6–7.6L), and IIIT Delhi (₹6.4–8.8L). All except IMI Delhi and Amity University Delhi fall under the ₹10L mark.",
  },
  {
    question: "What is the fee structure for government engineering colleges in Delhi?",
    answer:
      "Government engineering colleges in Delhi like DTU Delhi have a fee structure that includes: Tuition fees (₹40,000–₹80,000/yr), development fees (₹20,000–₹40,000/yr), examination fees (₹5,000–₹10,000/yr), and other charges. Total annual fees at DTU Delhi range from ₹80,000 to ₹1.8L depending on branch. Delhi government regulates fees for government and government-aided colleges.",
  },
  {
    question: "How to reduce engineering college fees in Delhi?",
    answer:
      "You can reduce engineering college fees through: (1) EBC quota — Economically Backward Class students with family income below ₹8L/year get 50% fee concession. (2) SC/ST fee waiver — full tuition fee waiver for students from Scheduled Caste/Tribe. (3) OBC fee reduction — students from Other Backward Classes get 25–50% fee reduction. (4) Merit scholarships — top-ranking students get merit-based scholarships. (5) AICTE scholarship — ₹30,000/year for eligible students. (6) NSP (National Scholarship Portal) scholarships.",
  },
  {
    question: "Is DTU Delhi really cheaper than private colleges in Delhi?",
    answer:
      "Yes, DTU (Delhi Technological University) is significantly cheaper than private colleges. DTU Delhi charges ₹80,000–₹1.8L/year as a government institution. In comparison, private autonomous colleges charge ₹1.4L–₹2.2L/year and deemed universities charge ₹2L–₹4.8L/year. However, DTU Delhi requires 95+ percentile in JEE Main which makes admission very competitive. If you cannot qualify for DTU Delhi, NIET Noida and Indira College offer the next best affordable options.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Low Fees Engineering Colleges Delhi", url: "/low-fees-engineering-colleges-delhi" },
]

export default function LowFeesEngineeringCollegesDELHIPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-xs text-blue-300 mb-4 flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/colleges" className="hover:text-white">Colleges</Link>
              <span>›</span>
              <span className="text-white">Low Fees Engineering Colleges Delhi</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Cheapest Engineering colleges in Delhi 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Complete list of affordable B.Tech colleges in Delhi with fees under ₹5 lakh and ₹10 lakh total. Compare government vs private fee structures, scholarships, and best value options.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">⚡ Quick Answer — Cheapest Engineering colleges in Delhi</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>DTU Delhi</strong> is cheapest at ₹80K/yr (govt). Among private colleges: <strong>NIET Noida</strong> ₹1.1L/yr, <strong>GL Bajaj NIET</strong> ₹1.2L/yr, <strong>Indira College</strong> ₹95K/yr. Total 4-year B.Tech under ₹5L is possible at DTU Delhi (with scholarships), Indira College (₹3.8L), and NIET Noida (₹4.4L). SC/ST students get full fee waiver at govt colleges.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Cheapest Govt. Fees/yr", value: "₹80,000", icon: "🏛️" },
              { label: "Cheapest Private Fees/yr", value: "₹95,000", icon: "💰" },
              { label: "Min 4-Year Total", value: "₹3.8L", icon: "📉" },
              { label: "Affordable Colleges", value: "7+", icon: "🎓" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Table 1: Under ₹5L */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100 bg-green-50">
              <h2 className="text-lg font-bold text-gray-900">Engineering colleges in Delhi — Under ₹5 Lakh Total Fees</h2>
              <p className="text-xs text-gray-500 mt-0.5">4-year B.Tech total cost including tuition, development & exam fees. Data verified 2026.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
                    <th className="px-4 py-3 text-right">Fees/Year</th>
                    <th className="px-4 py-3 text-right hidden md:table-cell">4-Yr Total</th>
                    <th className="px-4 py-3 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {under5LColleges.map((c) => (
                    <tr key={c.slug} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          <span className="text-xs text-gray-500">{c.type}</span>
                          <span className="text-xs bg-green-50 text-green-700 px-1.5 rounded-full">{c.note}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.naac === "A+" ? "bg-green-100 text-green-700" : c.naac === "A" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {c.naac}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-xs text-gray-700">{c.feesPerYear}</td>
                      <td className="px-4 py-3 text-right text-xs font-semibold text-green-700 hidden md:table-cell">{c.total4Yr}</td>
                      <td className="px-4 py-3 text-center">
                        <Link href={`/colleges/${c.slug}`} className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 rounded-lg">
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Under ₹10L */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100 bg-blue-50">
              <h2 className="text-lg font-bold text-gray-900">Engineering colleges in Delhi — Under ₹10 Lakh Total Fees</h2>
              <p className="text-xs text-gray-500 mt-0.5">Autonomous and NIRF-ranked colleges with strong placements and fees under ₹10L for 4 years.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
                    <th className="px-4 py-3 text-right">Fees/Year</th>
                    <th className="px-4 py-3 text-right hidden md:table-cell">4-Yr Total</th>
                    <th className="px-4 py-3 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {under10LColleges.map((c) => (
                    <tr key={c.slug} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <div className="flex flex-wrap gap-1 mt-0.5">
                          <span className="text-xs text-gray-500">{c.type}</span>
                          <span className="text-xs bg-blue-50 text-blue-700 px-1.5 rounded-full">{c.note}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.naac === "A+" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                          {c.naac}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-xs text-gray-700">{c.feesPerYear}</td>
                      <td className="px-4 py-3 text-right text-xs font-semibold text-blue-700 hidden md:table-cell">{c.total4Yr}</td>
                      <td className="px-4 py-3 text-center">
                        <Link href={`/colleges/${c.slug}`} className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 rounded-lg">
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fee Structure Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-red-600" /> Government vs Private Fee Difference
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-5">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span> Government Colleges (e.g. DTU Delhi)
                </h3>
                <div className="space-y-2">
                  {[
                    { item: "Tuition Fees", amount: "₹40,000–₹80,000/yr" },
                    { item: "Development Fees", amount: "₹20,000–₹40,000/yr" },
                    { item: "Examination Fees", amount: "₹5,000–₹10,000/yr" },
                    { item: "Library & Lab Fees", amount: "₹5,000–₹15,000/yr" },
                    { item: "Total Annual Fees", amount: "₹70,000–₹1.45L/yr" },
                  ].map(({ item, amount }) => (
                    <div key={item} className="flex items-center justify-between text-sm border-b border-gray-50 pb-1.5">
                      <span className="text-gray-600">{item}</span>
                      <span className="font-semibold text-gray-900">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> Private Colleges (e.g. NIET Noida, GL Bajaj)
                </h3>
                <div className="space-y-2">
                  {[
                    { item: "Tuition Fees", amount: "₹70,000–₹1.2L/yr" },
                    { item: "Development Fees", amount: "₹25,000–₹50,000/yr" },
                    { item: "Examination Fees", amount: "₹5,000–₹10,000/yr" },
                    { item: "Other Charges", amount: "₹5,000–₹20,000/yr" },
                    { item: "Total Annual Fees", amount: "₹1.05L–₹2L/yr" },
                  ].map(({ item, amount }) => (
                    <div key={item} className="flex items-center justify-between text-sm border-b border-gray-50 pb-1.5">
                      <span className="text-gray-600">{item}</span>
                      <span className="font-semibold text-gray-900">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="text-sm text-orange-800">
                <strong>Key difference:</strong> Government engineering colleges in Delhi are regulated by Delhi government with fee caps. Private colleges under Shikshan Shulkha Samiti (Fee Regulatory Authority) have fees set every 3 years. Deemed universities set their own fees.
              </p>
            </div>
          </div>

          {/* How to Reduce Fees */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" /> How to Reduce Engineering College Fees in Delhi
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                {[
                  { title: "EBC Quota (Economically Backward Class)", desc: "Family income below ₹8L/year qualifies for 50% fee concession at government and aided colleges. Apply through NSP Delhi Scholarship portal." },
                  { title: "SC/ST Full Fee Waiver", desc: "Students from Scheduled Caste/Scheduled Tribe communities get full tuition fee waiver at government colleges in Delhi." },
                  { title: "OBC Fee Reduction", desc: "OBC students (non-creamy layer) get 25–50% fee reduction. Family income ceiling is ₹8L/year." },
                  { title: "Merit Scholarship", desc: "Students who rank in top 10% of JEE Main get merit-based scholarships from Delhi government worth ₹20,000–₹50,000/year." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { title: "AICTE Scholarship", desc: "AICTE provides ₹30,000/year scholarship for economically weaker section students in AICTE-approved colleges. Apply via NSP portal." },
                  { title: "National Scholarship Portal (NSP)", desc: "Central government scholarships via NSP at scholarships.gov.in for SC/ST, OBC, minorities, and EWS students." },
                  { title: "PM-USHA Scholarship", desc: "PM's Higher Education Scholarship for NER and J&K students. ₹30,000/year for engineering students." },
                  { title: "Private College Merit Scholarships", desc: "IIIT Delhi, NSUT, and Sharda offer institutional merit scholarships for students with 90%+ in 12th or 95+ percentile in JEE Main." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Low Fees Engineering colleges in Delhi</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Engineering Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "Best Engineering colleges in Delhi 2026", href: "/engineering-colleges-delhi", icon: "🏛️" },
              { label: "Top 10 Engineering Colleges — Ranked", href: "/top-10-engineering-colleges-in-delhi", icon: "🏆" },
              { label: "Placement Stats — Avg & Highest LPA", href: "/engineering-colleges-delhi-placement", icon: "💼" },
              { label: "Engineering Scholarships in Delhi", href: "/engineering-colleges-delhi-scholarship", icon: "🎓" },
              { label: "JEE Main Colleges & Cutoffs 2026", href: "/JEE Main-colleges-Delhi", icon: "📝" },
              { label: "JEE Main colleges in Delhi", href: "/jee-colleges-delhi", icon: "📚" },
              { label: "Computer Engineering Colleges Delhi", href: "/computer-engineering-colleges-delhi", icon: "💻" },
              { label: "Government colleges in Delhi", href: "/government-colleges-delhi", icon: "🏛️" },
              ].map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Find the most affordable college for your score</p>
              <p className="text-blue-200 text-sm">Use our free Fee Calculator or get expert counselling on scholarships.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/predictor" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                College Predictor →
              </Link>
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                Free Counselling →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


