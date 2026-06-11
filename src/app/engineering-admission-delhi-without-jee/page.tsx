import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, BookOpen } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Engineering Admission in Delhi Without JEE 2026 | JEE Main Only Colleges",
  description:
    "Get B.Tech admission in Delhi without JEE Main score in 2026. 80%+ of Delhi engineering colleges accept JEE Main only. List of top colleges, lateral entry, and management quota options.",
  path: "/engineering-admission-delhi-without-jee",
  keywords: [
    "engineering admission without jee Delhi",
    "admission without entrance exam Delhi engineering",
    "btech admission Delhi without jee",
    "JEE Main only colleges Delhi",
    "engineering colleges Delhi without jee main",
    "lateral entry btech Delhi",
    "direct admission engineering Delhi",
  ],
})

const mhtCetOnlyColleges = [
  { name: "Delhi Technological University (DTU)", type: "Government", naac: "A+", nirf: 49, jeeRequired: false, note: "JEE Main 95+ %ile for CSE" },
  { name: "GL Bajaj Delhi Merit College of Engineering", type: "Private", naac: "A", nirf: null, jeeRequired: false, note: "JEE Main 60–75 %ile" },
  { name: "NIET Noida", type: "Private", naac: "A", nirf: null, jeeRequired: false, note: "JEE Main 60–70 %ile" },
  { name: "Sharda University Engineering", type: "Private", naac: "A", nirf: null, jeeRequired: false, note: "JEE Main 65–75 %ile" },
  { name: "HMR Institute Delhi", type: "Private", naac: "B++", nirf: null, jeeRequired: false, note: "JEE Main 55–65 %ile" },
  { name: "Bennett University Delhi, Dwarka", type: "Private", naac: "A", nirf: null, jeeRequired: false, note: "JEE Main 60–70 %ile" },
  { name: "Amity University Engineering", type: "Deemed", naac: "A", nirf: null, jeeRequired: false, note: "JEE Main or BVP CET" },
]

const bothExamColleges = [
  { name: "NSUT Delhi", type: "Autonomous", naac: "A", jeeNote: "Optional — JEE Main preferred", cutoff: "92–95 %ile JEE Main" },
  { name: "IIIT Delhi", type: "Autonomous", naac: "A+", jeeNote: "JEE accepted but JEE Main primary", cutoff: "88–92 %ile JEE Main" },
  { name: "IMI Delhi", type: "Deemed", naac: "A+", jeeNote: "SET / JEE / JEE Main all accepted", cutoff: "SET or JEE 85+ %ile" },
  { name: "Amity University Delhi Delhi", type: "Deemed", naac: "A+", jeeNote: "JEE Main or JEE both accepted", cutoff: "75–85 %ile JEE Main" },
  { name: "IGDTUW Delhi of Engineering", type: "Autonomous", naac: "A+", jeeNote: "JEE Main or JEE", cutoff: "88–92 %ile JEE Main" },
]

const faqs = [
  {
    question: "Is JEE compulsory for engineering colleges in Delhi?",
    answer: "No — JEE Main is NOT compulsory for most Delhi engineering colleges. Over 80% of Delhi colleges — including DTU Delhi, GL Bajaj, NIET Noida, Sharda, Indira, and D.Y. Patil — admit students through JEE Main only. JEE is optional at IIIT Delhi, Amity University Delhi, and IMI Delhi, and mandatory for IITs/NITs only.",
  },
  {
    question: "What JEE Main percentile is needed to get into DTU Delhi without JEE?",
    answer: "For Computer Engineering at DTU Delhi (the most competitive branch), you need 99.5+ percentile in JEE Main. For Mechanical Engineering at DTU Delhi, you need 95+ percentile. For Civil and other branches, 90+ percentile is typically sufficient. These are General category cutoffs — SC/ST students get 10–15 percentile relaxation.",
  },
  {
    question: "Can I get admission in a top Delhi engineering college with only JEE Main?",
    answer: "Yes. DTU (NIRF #49), NSUT (best CS college in Delhi), and IIIT Delhi (NIRF #101) all accept JEE Main as the primary entrance exam. You don't need JEE to get into these top-ranked colleges. NSUT and IIIT Delhi accept JEE Main; JEE score is optional and rarely changes the allocation.",
  },
  {
    question: "What is lateral entry admission in Delhi engineering colleges without JEE?",
    answer: "Diploma holders can get direct admission to the 2nd year of B.Tech programs at Delhi engineering colleges through lateral entry — without JEE Main. DTE Delhi conducts the Direct Second Year (DSE) JAC Delhi Rounds. Eligible candidates: 3-year diploma in relevant branch with 45%+ marks. Top colleges accepting lateral entry: DTU Delhi, IIIT Delhi, NSUT, GL Bajaj NIET.",
  },
  {
    question: "How to apply for JEE Main 2026?",
    answer: "Register on jacdelhi.admissions.nic.in. JEE Main 2026 registration: January–February 2026. Exam: April 15 – May 15, 2026 (PCM group for engineering). Results: June 2026. JAC Delhi Round 1 counselling: July 2026. Eligibility: 12th pass with Physics, Chemistry, Mathematics (PCM), minimum 45% marks (40% for reserved categories).",
  },
  {
    question: "Can I get management quota BTech in Delhi without JEE or JEE Main?",
    answer: "Yes. Private and deemed engineering colleges in Delhi (IIIT Delhi, Amity University Delhi, IMI Delhi, Cummins, GL Bajaj) offer management quota seats that don't require JEE or JEE Main scores. You only need a 12th pass with PCM. Management quota fees are typically 2–3x regular fees (₹2.5L–₹5L/yr). Contact the college admissions office directly.",
  },
  {
    question: "Which Delhi engineering college can I get with 70 percentile in JEE Main without JEE?",
    answer: "With 70 percentile in JEE Main (without JEE), you can target: GL Bajaj NIET (60–75 %ile), NIET Noida (60–70 %ile), Sharda University Engineering (65–75 %ile), HMR Institute Delhi (55–65 %ile), D.Y. Patil College Dwarka (60–70 %ile). All these colleges accept JEE Main only — no JEE required.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Colleges", url: "/colleges" },
  { name: "Engineering Colleges Delhi", url: "/engineering-colleges-delhi" },
  { name: "Admission Without JEE", url: "/engineering-admission-delhi-without-jee" },
]

export default function EngineeringAdmissionWithoutJEEPage() {
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
              <Link href="/engineering-colleges-delhi" className="hover:text-white">Engineering Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white">Admission Without JEE</span>
            </nav>
            <div className="inline-block bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3">✅ JEE NOT Required at 80%+ Delhi Colleges</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Engineering Admission in Delhi Without JEE 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              Get B.Tech / BE admission at top Delhi engineering colleges using only JEE Main score. Complete guide to JEE Main colleges, lateral entry, and management quota routes — no JEE needed.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 max-w-3xl">
              <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">⚡ Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">
                <strong>Yes, you can get B.Tech admission in Delhi without JEE Main.</strong> Over 80% of Delhi engineering colleges — including <strong>DTU Delhi</strong> (NIRF #49), <strong>NSUT</strong>, <strong>GL Bajaj</strong>, and <strong>NIET Noida</strong> — admit students through <strong>JEE Main only</strong>. Alternatives: lateral entry (diploma holders, no entrance exam), management quota (12th pass sufficient, no JEE/JEE Main needed).
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "JEE Main Only Colleges", value: "80%+", icon: "🎯" },
              { label: "Top College Without JEE", value: "DTU Delhi", icon: "🏆" },
              { label: "Lateral Entry Option", value: "2nd Year", icon: "📚" },
              { label: "Mgmt Quota", value: "No Exam", icon: "✅" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-2xl mb-1">{icon}</p>
                <p className="text-lg font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* JEE Main Only Colleges */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100 bg-green-50">
              <h2 className="text-lg font-bold text-gray-900">✅ Delhi Engineering Colleges Accepting JEE Main Only (No JEE Required)</h2>
              <p className="text-xs text-gray-500 mt-0.5">These colleges do NOT require JEE Main for B.Tech admission 2026.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
                    <th className="px-4 py-3 text-center hidden md:table-cell">NIRF</th>
                    <th className="px-4 py-3 text-left">JEE Main Cutoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {mhtCetOnlyColleges.map((c) => (
                    <tr key={c.name} className="hover:bg-green-50/30 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                        <span className="text-xs text-gray-500">{c.type}</span>
                      </td>
                      <td className="px-4 py-3 text-center hidden sm:table-cell">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.naac === "A+" ? "bg-green-100 text-green-700" : c.naac === "A" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {c.naac}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell text-xs text-gray-500">
                        {c.nirf ? `#${c.nirf}` : "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Both Exams */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-5 py-4 border-b border-gray-100 bg-blue-50">
              <h2 className="text-lg font-bold text-gray-900">Colleges Accepting Both JEE & JEE Main (JEE Optional)</h2>
              <p className="text-xs text-gray-500 mt-0.5">JEE score gives a slight advantage but JEE Main alone is sufficient for admission.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#1E3A5F] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-left hidden sm:table-cell">JEE Status</th>
                    <th className="px-4 py-3 text-left">JEE Main Cutoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {bothExamColleges.map((c) => (
                    <tr key={c.name} className="hover:bg-blue-50/20 transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                        <span className="text-xs text-gray-500">{c.type} · NAAC {c.naac}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 hidden sm:table-cell">{c.jeeNote}</td>
                      <td className="px-4 py-3 text-xs font-medium text-red-800">{c.cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alternate Routes */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Other Routes to Engineering Admission in Delhi Without JEE</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "Lateral Entry (Diploma → BTech)",
                icon: "📘",
                color: "blue",
                points: [
                  "Direct 2nd year B.Tech admission for diploma holders",
                  "No JEE or JEE Main required",
                  "Need: 3-year diploma in relevant branch with 45%+ marks",
                  "DTE Delhi conducts DSE-JAC Delhi Rounds (July–August)",
                  "Available at DTU Delhi, IIIT Delhi, NSUT, GL Bajaj NIET, NIET Noida",
                  "About 10–15% of total intake reserved for lateral entry",
                ],
              },
              {
                title: "Management Quota (No Entrance Exam)",
                icon: "🏛️",
                color: "orange",
                points: [
                  "No JEE, no JEE Main required",
                  "Only 12th pass with PCM needed",
                  "Available at private & deemed colleges (IIIT Delhi, Amity University Delhi, IMI Delhi)",
                  "Fees 2–3x regular: ₹2.5L–₹5L per year",
                  "Contact college admissions office directly",
                  "AICTE-regulated, legally valid admission",
                ],
              },
            ].map(({ title, icon, color, points }) => (
              <div key={title} className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5`}>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">{icon}</span> {title}
                </h3>
                <ul className="space-y-1.5">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${color === "blue" ? "text-blue-500" : "text-red-600"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* JEE Main Process */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-600" /> JEE Main 2026 — Key Dates & How to Apply
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase">Event</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase">Date (Expected)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { event: "JEE Main Registration", date: "Jan–Feb 2026", detail: "jacdelhi.admissions.nic.in · ₹800 fee (Gen) · ₹600 (Reserved)" },
                    { event: "Admit Card", date: "April 2026", detail: "Download from official portal" },
                    { event: "JEE Main Exam (PCM)", date: "Apr 15–May 15, 2026", detail: "Online CBT mode · 100 MCQ · 180 min" },
                    { event: "Result Declaration", date: "June 2026", detail: "Percentile score released on portal" },
                    { event: "CAP Registration", date: "June–July 2026", detail: "Register at dteDelhi.gov.in" },
                    { event: "JAC Delhi Round 1 Allotment", date: "July 2026", detail: "College preferences locked, seat allotted" },
                    { event: "JAC Delhi Round 2", date: "August 2026", detail: "Seat upgrade / re-allotment round" },
                    { event: "Direct Admission / Mgmt Quota", date: "August–September 2026", detail: "Contact colleges directly" },
                  ].map((row) => (
                    <tr key={row.event} className="hover:bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">{row.event}</td>
                      <td className="px-4 py-2.5 text-red-800 font-semibold">{row.date}</td>
                      <td className="px-4 py-2.5 text-gray-500 text-xs hidden sm:table-cell">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">FAQs — Engineering Admission in Delhi Without JEE</h2>
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
              { label: "Low Fees Engineering Colleges", href: "/low-fees-engineering-colleges-delhi", icon: "💰" },
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
              <p className="font-bold text-lg">Know your JEE Main percentile?</p>
              <p className="text-blue-200 text-sm">Use our predictor or get free counselling to find your best college match.</p>
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

