import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, AlertCircle, BookOpen, Users, Phone } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Direct Admission in MBA Colleges Delhi 2026 | Without SNAP/CAT",
  description:
    "Get direct MBA admission in Delhi 2026 without SNAP or CAT score. Management quota, NRI quota at FMS Delhi, IMI Delhi, Fore School Delhi. Fees ₹5L–₹25L for direct admission.",
  path: "/direct-admission-mba-colleges-delhi",
  keywords: [
    "mba direct admission Delhi",
    "direct admission in mba colleges Delhi",
    "management quota mba Delhi",
    "mba admission without cat Delhi",
  ],
})

const mbaCollegesDirectAdmission = [
  {
    name: "FMS Delhi (Faculty of Management Studies, Delhi University)",
    mq: "No MQ — CAT mandatory (98%ile+)",
    regularFees: "₹55K (2-yr total)",
    mgmtFees: "Not available",
    note: "Must clear CAT 98%ile+ — no direct admission. Best MBA value in India.",
    directAvailable: false,
  },
  {
    name: "IMI Delhi (International Management Institute)",
    mq: "~15–20%",
    regularFees: "₹7L–₹8L/yr",
    mgmtFees: "₹9L–₹11L/yr",
    note: "Direct admission possible — contact directly. CAT 85%ile+ for regular.",
    directAvailable: true,
  },
  {
    name: "FORE School of Management Delhi",
    mq: "~25%",
    regularFees: "₹5L–₹6L/yr",
    mgmtFees: "₹6.5L–₹8L/yr",
    note: "Accepts direct + MAT/CMAT applicants. AACSB accredited.",
    directAvailable: true,
  },
  {
    name: "Jaipuria Institute of Management Noida (IIMP)",
    mq: "~30%",
    regularFees: "₹3L–₹4.5L/yr",
    mgmtFees: "₹5L–₹7L/yr",
    note: "Flexible criteria for MQ seats",
    directAvailable: true,
  },
  {
    name: "GL Bajaj Noida (Indian Institute of Materials Management)",
    mq: "~25%",
    regularFees: "₹3.5L–₹5L/yr",
    mgmtFees: "₹5.5L–₹8L/yr",
    note: "Supply chain / operations MBA",
    directAvailable: true,
  },
  {
    name: "AIMS Delhi",
    mq: "~30%",
    regularFees: "₹2.5L–₹3.5L/yr",
    mgmtFees: "₹4L–₹6L/yr",
    note: "Good for working professionals",
    directAvailable: true,
  },
]

const pgdmVsMba = [
  {
    aspect: "Degree Type",
    mba: "MBA — University degree (DU affiliated)",
    pgdm: "PGDM — Diploma (AICTE approved, equivalent to MBA)",
  },
  {
    aspect: "Regulatory Body",
    mba: "Affiliated University (DU, SIU)",
    pgdm: "AICTE approved autonomous institution",
  },
  {
    aspect: "Direct Admission",
    mba: "Possible — management quota available",
    pgdm: "Generally easier — autonomous institutions have flexibility",
  },
  {
    aspect: "Entrance Exam",
    mba: "CAT/MAT/CMAT/SNAP varies by college",
    pgdm: "Often MAT/CMAT/own test — more flexible",
  },
  {
    aspect: "Fee Range",
    mba: "₹4L–₹25L (2 years total)",
    pgdm: "₹5L–₹18L (2 years total)",
  },
  {
    aspect: "Industry Value",
    mba: "Traditional preference in large companies",
    pgdm: "Equally valued — accepted across industries",
  },
]

const faqs = [
  {
    question: "Can I get direct MBA admission in Delhi without SNAP or CAT?",
    answer:
      "Yes, for most non-Symbiosis MBA colleges in Delhi. FMS Delhi (Symbiosis) mandates SNAP and does not offer management quota. However, colleges like IMI Delhi, Fore School Delhi, Indira Institute, and GL Bajaj Noida offer direct admission through management quota based on graduation marks and an interview. No SNAP, CAT, or any entrance exam is strictly required for MQ seats at these colleges.",
  },
  {
    question: "Does FMS Delhi have management quota or direct admission?",
    answer:
      "No. FMS Delhi (Faculty of Management Studies, Delhi University) does NOT offer management quota admission. All seats are filled through CAT merit — requiring 98+ CAT percentile plus strong PI/WAT performance. FMS Delhi is a government central university program with ₹55K total fees and ₹32 LPA average placement. There is no direct/backdoor admission route.",
  },
  {
    question: "What is the fee for MBA in Delhi through direct admission?",
    answer:
      "MBA through direct/management quota in Delhi costs ₹5L–₹12L per year, totaling ₹10L–₹25L for the 2-year program. IMI Delhi management quota fees are approximately ₹7L–₹10L/year. Fore School Delhi MQ fees are ₹6.5L–₹9L/year. Indira Institute MQ fees are ₹5L–₹7L/year. Compare this to regular admission which costs ₹3L–₹8L/year.",
  },
  {
    question: "What is the difference between MBA and PGDM for direct admission?",
    answer:
      "MBA is a university-affiliated degree (e.g., DU) while PGDM is an autonomous diploma equivalent to MBA, approved by AICTE. For direct admission purposes, PGDM institutes are generally more flexible since they are autonomous and set their own admission criteria. Both are equally valued by employers. If you want direct admission without strict entrance requirements, PGDM institutes like Fore School Delhi often have more flexibility.",
  },
  {
    question: "What documents are needed for direct MBA admission in Delhi?",
    answer:
      "For direct MBA admission you need: graduation certificate and all semester marksheets, Class 10 and 12 certificates, entrance exam scorecard (if available — MAT/CMAT preferred but may not be mandatory for MQ), work experience certificate (if any), photo ID (Aadhar), recent passport photos, migration certificate, and gap certificate if there is a break in education. Some colleges also require a Statement of Purpose (SOP).",
  },
  {
    question: "Is management quota MBA from Delhi colleges recognized by employers?",
    answer:
      "Yes, the mode of admission (MQ vs regular) does not appear on your degree certificate. Employers only see your institution name, degree, and percentage. An MBA from IMI Delhi or Fore School Delhi through management quota carries the same degree as a student admitted through regular entrance exam scores. The value lies in the institution's reputation and your performance, not admission route.",
  },
  {
    question: "What is the eligibility for direct MBA admission in Delhi?",
    answer:
      "Eligibility for direct MBA in Delhi: Graduation in any discipline with minimum 50% marks (45% for reserved categories). Most colleges require a bachelor's degree from a recognized university. Some colleges prefer work experience (1–2 years) but it is not mandatory for freshers. CAT/MAT/CMAT score is preferred but not strictly required for management quota seats. Age limit: typically under 30 years, but varies by college.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "MBA Admissions", url: "/mba-colleges-delhi" },
  { name: "Direct MBA Admission Delhi", url: "/direct-admission-mba-colleges-delhi" },
]

export default function DirectAdmissionMBAPage() {
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
              <span className="text-white">Direct Admission MBA</span>
            </nav>
            <div className="inline-block bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
              Management Quota Available at 5+ MBA Colleges
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Direct Admission in MBA Colleges Delhi 2026
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6">
              Management quota and direct MBA admission at top Delhi NCR colleges without CAT. Fees, eligibility, and step-by-step process.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "6 Colleges with Direct MBA" },
                { icon: "", label: "No CAT Required" },
                { icon: "", label: "MQ Fees ₹5L–₹25L" },
                { icon: "", label: "Placement ₹7–₹14 LPA" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
          {/* Colleges Table */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">MBA Colleges Delhi with Direct / Management Quota Admission 2026</h2>
            <div className="space-y-4">
              {mbaCollegesDirectAdmission.map((c) => (
                <div key={c.name} className={`bg-white rounded-2xl border p-5 shadow-sm ${c.directAvailable ? "border-green-200" : "border-red-200 opacity-70"}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-base">{c.name}</h3>
                        {c.directAvailable
                          ? <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Direct Available</span>
                          : <span className="text-[11px] bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1"><AlertCircle className="w-3 h-3" /> No Direct Route</span>
                        }
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{c.note}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">
                        <div><span className="font-semibold">MQ Seats:</span> {c.mq}</div>
                        <div><span className="font-semibold">Regular Fees:</span> {c.regularFees}</div>
                        <div><span className="font-semibold">MQ Fees:</span> {c.mgmtFees}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MBA vs PGDM */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">MBA vs PGDM — Which is Easier for Direct Admission?</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Aspect</th>
                    <th className="text-left px-4 py-3 font-bold text-blue-700">MBA</th>
                    <th className="text-left px-4 py-3 font-bold text-red-700">PGDM</th>
                  </tr>
                </thead>
                <tbody>
                  {pgdmVsMba.map((row) => (
                    <tr key={row.aspect} className="border-t border-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.aspect}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.mba}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.pgdm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">How to Apply for Direct MBA Admission in Delhi 2026</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "1", title: "Shortlist Colleges", desc: "Identify MBA colleges in Delhi offering management quota. Check their AICTE approval, NAAC grade, and placement record first." },
                { step: "2", title: "Check Eligibility", desc: "Ensure graduation with 50%+ marks. Prepare marksheets, ID proof, and migration certificate." },
                { step: "3", title: "Contact Admissions Directly", desc: "Call the college admission office and ask specifically for management quota availability. Get written confirmation of fees." },
                { step: "4", title: "Appear for GD/PI", desc: "Most colleges conduct a Group Discussion and Personal Interview even for MQ seats. Prepare your SOP and be ready to discuss your goals." },
                { step: "5", title: "Verify Fee Structure", desc: "Get a written breakdown of all fees — tuition, hostel, exam, activity — before paying any amount." },
                { step: "6", title: "Complete Admission Formalities", desc: "Submit documents, pay fees, and collect your admission letter. Verify enrollment with the university/AICTE." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <div className="w-8 h-8 bg-red-600 text-white font-extrabold text-sm rounded-full flex items-center justify-center shrink-0">{step}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "No SNAP for Non-Symbiosis", desc: "SNAP is only for Symbiosis colleges (FMS Delhi). For all other MBA colleges in Delhi, CAT/MAT/CMAT is accepted — or MQ seats require no exam at all." },
              { icon: Users, title: "MQ Seat Limit", desc: "Management quota is capped at 15-30% of total seats by AICTE. These seats cost 20-50% more than regular seats but skip entrance exam requirements." },
              { icon: Phone, title: "Contact Directly", desc: "MQ seat availability changes each year. Always call the college admission office directly in April-June for accurate seat availability and fee information." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <Icon className="w-6 h-6 text-red-600 mb-3" />
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">FAQs — Direct MBA Admission Delhi 2026</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between gap-2">
                    {faq.question}
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Get Free Guidance for Direct MBA Admission Delhi 2026</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors help you find the right MBA college with management quota seats, verify fees, and prepare for GD/PI.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/mba-colleges-delhi" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                View All MBA Colleges →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}