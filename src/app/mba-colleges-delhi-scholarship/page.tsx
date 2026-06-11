import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, Award, BookOpen, TrendingUp } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "MBA colleges in Delhi with Scholarship 2026 | Fee Waiver & Fellowship Guide",
  description:
    "MBA scholarship opportunities at Delhi colleges 2026. FMS Delhi merit scholarship, IMI Delhi fellowship, government OBC/SC/ST fee waiver. Reduce MBA fees from ₹22L to under ₹10L.",
  path: "/mba-colleges-delhi-scholarship",
  keywords: [
    "mba colleges with scholarship Delhi",
    "colleges in Delhi with low fees mba",
    "mba scholarship Delhi 2026",
    "FMS Delhi scholarship",
    "mba fee waiver Delhi",
    "government scholarship mba Delhi",
    "affordable mba Delhi scholarship",
  ],
})

const scholarships = [
  {
    name: "Delhi Government Post-Matric Scholarship",
    eligibility: "SC/ST/OBC/VJNT/SBC students with family income < ₹8L/yr",
    amount: "Full tuition + ₹12,000–₹25,000 maintenance per year",
    colleges: "All approved MBA colleges",
    portal: "https://NSP Delhi Scholarship.Delhi.gov.in",
    category: "Government",
  },
  {
    name: "EBC (Economically Backward Class) Fee Waiver",
    eligibility: "Family income < ₹8L/yr (Open category)",
    amount: "Up to 50% tuition fee waiver",
    colleges: "Government-aided MBA colleges in Delhi",
    portal: "https://NSP Delhi Scholarship.Delhi.gov.in",
    category: "Government",
  },
  {
    name: "FMS Delhi Merit Scholarship",
    eligibility: "Top 10% CAT scorers admitted to FMS Delhi (DU)",
    amount: "₹10,000–₹30,000 deduction (already very low fees)",
    colleges: "FMS Delhi (Faculty of Management Studies, DU) only",
    portal: "https://fms.edu",
    category: "Institutional",
  },
  {
    name: "IMI Delhi Academic Excellence Fellowship",
    eligibility: "CAT 90+ percentile or top 5% of batch",
    amount: "₹50,000–₹1.5L per year",
    colleges: "IMI Delhi (International Management Institute)",
    portal: "https://imi.edu",
    category: "Institutional",
  },
  {
    name: "MDI Gurgaon Need-cum-Merit Scholarship",
    eligibility: "CAT 95+ percentile + family income below ₹5L/yr",
    amount: "10–30% fee waiver on tuition",
    colleges: "MDI Gurgaon (Management Development Institute)",
    portal: "https://mdi.ac.in",
    category: "Institutional",
  },
  {
    name: "AICTE Pragati Scholarship (Women)",
    eligibility: "Women students in approved MBA programs, family income < ₹8L/yr",
    amount: "₹50,000/yr + ₹2,000/month contingency",
    colleges: "All AICTE-approved MBA colleges",
    portal: "https://scholarships.gov.in",
    category: "National",
  },
  {
    name: "NSP Post-Matric Scholarship",
    eligibility: "SC/ST students with 50%+ marks",
    amount: "Full maintenance + tuition (state-specific slabs)",
    colleges: "All recognised MBA colleges",
    portal: "https://scholarships.gov.in",
    category: "National",
  },
]

const collegeFeeReduction = [
  { college: "FMS Delhi (DU)", originalFee: "₹55K total", afterScholarship: "₹25K–₹45K", saving: "Up to ₹30K (already cheapest)", exam: "CAT 98+ %ile" },
  { college: "MDI Gurgaon", originalFee: "₹22L total", afterScholarship: "₹15L–₹20L", saving: "Up to ₹2–7L", exam: "CAT 99+ %ile" },
  { college: "IMI Delhi", originalFee: "₹7L–₹11L", afterScholarship: "₹5.5L–₹9.5L", saving: "Up to ₹1.5L", exam: "CAT / MAT / CMAT" },
  { college: "Fore School Delhi", originalFee: "₹5L–₹7.5L", afterScholarship: "₹2.5L–₹6.5L", saving: "Up to ₹2.5L (Govt.)", exam: "CAT / MAT / CMAT" },
  { college: "Indira Institute", originalFee: "₹4.2L–₹6.5L", afterScholarship: "₹2L–₹4.5L", saving: "Up to ₹2.2L (Govt.)", exam: "CAT / MAT / CMAT" },
  { college: "IMS Ghaziabad", originalFee: "₹2.8L–₹4.5L", afterScholarship: "₹1.5L–₹3L", saving: "Up to ₹1.5L (Govt.)", exam: "MAT / CMAT / XAT" },
]

const faqs = [
  {
    question: "Which MBA college in Delhi gives the best scholarship?",
    answer: "FMS Delhi (DU) already has ₹55K total fees — the best value by far. For scholarships at private colleges, IMI Delhi's Academic Excellence Fellowship (₹1.5L/yr) and MDI Gurgaon's need-cum-merit scholarship are significant. Government EBC/SC/ST scholarships at FORE School, BIMTECH, and LBSIM can reduce fees by 50%, bringing MBA cost below ₹5 lakh.",
  },
  {
    question: "Can I get an MBA in Delhi for free with a scholarship?",
    answer: "Yes, for SC/ST students at government-aided MBA colleges in Delhi (like Government College of Engineering's MBA program), full fee waiver is available under Delhi government post-matric scholarship. At private colleges, full fee waiver is rare — you can typically reduce fees by 30–50%.",
  },
  {
    question: "What is the income limit for MBA scholarship in Delhi?",
    answer: "Delhi government scholarships (Post-Matric, EBC) require annual family income below ₹8 lakh. This applies to SC/ST/OBC/VJNT/SBC and Open category EBC students. Income certificate from the Tehsildar is required. Apply via NSP Delhi Scholarship portal before the academic year starts.",
  },
  {
    question: "Does FMS Delhi offer scholarship on CAT score?",
    answer: "FMS Delhi (Faculty of Management Studies, Delhi University) already has ₹55K total fees — making it the most affordable top MBA in India without any scholarship. The college does provide merit scholarships to top CAT performers and reserved category students can also claim Delhi government scholarships additionally. FMS Delhi does NOT use SNAP — admission is through CAT only.",
  },
  {
    question: "How to apply for MBA scholarship in Delhi 2026?",
    answer: "Step 1: Register on NSP Delhi Scholarship portal (NSP Delhi Scholarship.Delhi.gov.in) after admission. Step 2: Select 'Post-Matric Scholarship' or 'EBC Scholarship'. Step 3: Upload income certificate, caste certificate, admission letter, fee receipt. Step 4: Apply before the deadline (usually November each year). For institutional scholarships, contact the college admissions office directly.",
  },
  {
    question: "What is the AICTE Pragati Scholarship for MBA women students in Delhi?",
    answer: "AICTE Pragati Scholarship provides ₹50,000/year + ₹2,000/month contingency allowance to women MBA students whose family income is below ₹8 lakh/year. Available at all AICTE-approved MBA colleges in Delhi including IMI Delhi, Fore School Delhi, Indira Institute, and Symbiosis institutes. Apply via scholarships.gov.in.",
  },
  {
    question: "Is there a scholarship for MBA without CAT in Delhi?",
    answer: "Yes. Most Delhi government scholarships (EBC, Post-Matric, NSP) are exam-agnostic — they're based on income and category, not CAT score. Colleges like FORE School Delhi, BIMTECH, and LBSIM offer institutional scholarships regardless of whether you used CAT, MAT, or CMAT for admission.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
  { name: "Scholarships", url: "/mba-colleges-delhi-scholarship" },
]

export default function MBACollegesDELHIScholarshipPage() {
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
              <Link href="/mba-colleges-delhi" className="hover:text-white">MBA Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Scholarships 2026</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              MBA colleges in Delhi with Scholarship 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Complete guide to MBA scholarships at Delhi colleges — government fee waivers, institutional merit awards, and national fellowships. Reduce your MBA cost from ₹22L to under ₹5L.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">⚡ Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                Top MBA scholarship options in Delhi: <strong>Delhi Post-Matric Scholarship</strong> (SC/ST/OBC — full fee waiver), <strong>EBC Scholarship</strong> (Open category income &lt; ₹8L — 50% waiver), <strong>FMS Delhi Merit Scholarship</strong> (top SNAP scorers — ₹1–3L off), <strong>AICTE Pragati</strong> (women students — ₹50K/yr). Apply via <strong>NSP Delhi Scholarship portal</strong> within 3 months of admission.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Scholarships Available", value: "7+", icon: "🎓" },
              { label: "Max Savings", value: "₹10L+", icon: "💰" },
              { label: "Income Limit (Govt.)", value: "₹8L/yr", icon: "📋" },
              { label: "Apply Via", value: "NSP Delhi Scholarship", icon: "🌐" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Fee After Scholarship Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">MBA Fees After Scholarship — Delhi Colleges 2026</h2>
              <p className="text-xs text-gray-400 mt-0.5">Estimated fees after applying maximum available scholarships. Actual amount depends on eligibility.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-right">Original Fees</th>
                    <th className="px-4 py-3 text-right">After Scholarship</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">Max Saving</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">Entrance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {collegeFeeReduction.map((c) => (
                    <tr key={c.college} className="hover:bg-red-50/30 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{c.college}</td>
                      <td className="px-4 py-3 text-right text-gray-500 line-through text-xs">{c.originalFee}</td>
                      <td className="px-4 py-3 text-right font-bold text-green-700">{c.afterScholarship}</td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">{c.saving}</span>
                      </td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">{c.exam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarship Types */}
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Award className="w-5 h-5 text-red-600" /> All MBA Scholarships Available in Delhi 2026
          </h2>

          {/* Government Scholarships */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">G</span>
              Government Scholarships
            </h3>
            <div className="space-y-3">
              {scholarships.filter(s => s.category === "Government").map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{s.name}</h4>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full flex-shrink-0">{s.category}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2 text-xs text-gray-600">
                    <div><span className="text-gray-400">Eligibility:</span> {s.eligibility}</div>
                    <div><span className="text-gray-400">Amount:</span> <span className="font-semibold text-green-700">{s.amount}</span></div>
                    <div><span className="text-gray-400">Colleges:</span> {s.colleges}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Scholarships */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-xs font-bold">I</span>
              Institutional / Merit Scholarships
            </h3>
            <div className="space-y-3">
              {scholarships.filter(s => s.category === "Institutional").map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{s.name}</h4>
                    <span className="text-xs bg-red-50 text-red-800 px-2 py-0.5 rounded-full flex-shrink-0">{s.category}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2 text-xs text-gray-600">
                    <div><span className="text-gray-400">Eligibility:</span> {s.eligibility}</div>
                    <div><span className="text-gray-400">Amount:</span> <span className="font-semibold text-green-700">{s.amount}</span></div>
                    <div><span className="text-gray-400">Colleges:</span> {s.colleges}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* National Scholarships */}
          <div className="mb-8">
            <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">N</span>
              National Scholarships
            </h3>
            <div className="space-y-3">
              {scholarships.filter(s => s.category === "National").map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{s.name}</h4>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full flex-shrink-0">{s.category}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2 text-xs text-gray-600">
                    <div><span className="text-gray-400">Eligibility:</span> {s.eligibility}</div>
                    <div><span className="text-gray-400">Amount:</span> <span className="font-semibold text-green-700">{s.amount}</span></div>
                    <div><span className="text-gray-400">Apply:</span> {s.portal}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-600" /> How to Apply for MBA Scholarship in Delhi 2026
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Government Scholarship (NSP Delhi Scholarship)</h3>
                <ol className="space-y-2">
                  {[
                    "Get admission in any approved MBA college in Delhi",
                    "Register on NSP Delhi Scholarship.Delhi.gov.in",
                    "Select the relevant scholarship scheme (EBC / Post-Matric / OBC)",
                    "Upload income certificate, caste cert, fee receipt, admission letter",
                    "Submit application before November deadline",
                    "Track status and collect scholarship in your bank account",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Documents Required</h3>
                <ul className="space-y-1.5">
                  {[
                    "Income certificate (Tehsildar-issued, < ₹8L/yr)",
                    "Caste/category certificate (SC/ST/OBC/EBC)",
                    "College admission letter & fee receipt",
                    "10th & 12th marksheets",
                    "Bank account passbook (Aadhaar-linked)",
                    "Aadhaar card",
                    "Entrance exam scorecard (CAT/MAT/SNAP)",
                    "Domicile certificate (Delhi)",
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — MBA Scholarships in Delhi</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
            <h3 className="font-bold text-gray-900 mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi" },
                { label: "Top MBA Colleges Delhi", href: "/mba-colleges-delhi" },
                { label: "Direct MBA Admission Delhi", href: "/direct-admission-mba-colleges-delhi" },
                { label: "MBA Without CAT Delhi", href: "/mba-admission-delhi-without-cat" },
                { label: "Free Counselling", href: "/counselling" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="text-xs bg-red-50 text-red-800 border border-red-100 px-3 py-1.5 rounded-full hover:bg-red-100 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="font-bold text-lg">Need help finding MBA scholarships?</p>
              <p className="text-blue-200 text-sm">Our counsellors help you identify every scholarship you qualify for — free of charge.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Free Scholarship Guidance →
              </Link>
              <Link href="/mba-colleges-delhi" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                View All MBA Colleges →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


