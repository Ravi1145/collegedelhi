import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Delhi Admission Deadline Tracker 2026",
  description:
    "All Delhi college admission deadlines for 2026 in one place. JEE Main, JAC Delhi Rounds, SNAP, CMAT, NEET, CAT — never miss a deadline for engineering or MBA",
  path: "/delhi-admission-deadline-tracker-2026",
  keywords: [
    "engineering admission Delhi 2026",
    "mba admission Delhi 2026",
    "admission open engineering colleges Delhi",
    "admission open mba colleges Delhi",
    "last date engineering admission Delhi",
    "last date mba admission Delhi",
    "JEE Main 2026 dates",
    "snap 2026 registration",
  ],
})

const engineeringTimeline = [
  { event: "JEE Main Session 1 Result", date: "Feb 2026", status: "upcoming", detail: "Check jeemain.nta.nic.in", link: "https://jeemain.nta.nic.in" },
  { event: "JEE Main 2026 Registration Opens", date: "Jan–Feb 2026", status: "upcoming", detail: "Register at jacdelhi.admissions.nic.in · ₹800 fee (Gen)", link: "https://jacdelhi.admissions.nic.in" },
  { event: "JEE Main Session 2", date: "Apr 2026", status: "upcoming", detail: "NTA conducts JEE Main · Results in May", link: "https://jeemain.nta.nic.in" },
  { event: "JEE Main 2026 Exam (PCM)", date: "Apr 15 – May 15, 2026", status: "upcoming", detail: "Computer-Based Test · PCM for Engineering", link: "https://jacdelhi.admissions.nic.in" },
  { event: "JEE Main Result Declaration", date: "June 2026", status: "upcoming", detail: "Percentile scores released on MahaCET portal", link: "https://jacdelhi.admissions.nic.in" },
  { event: "CAP (BTech) Registration", date: "Jun–Jul 2026", status: "upcoming", detail: "Register at dteDelhi.gov.in · Document verification", link: "https://dteDelhi.gov.in" },
  { event: "JAC Delhi Round 1 — Seat Allotment", date: "July 2026", status: "upcoming", detail: "Freeze/Float/Slide — accept your seat", link: "https://dteDelhi.gov.in" },
  { event: "JAC Delhi Round 2 — Upgrade Round", date: "Aug 2026", status: "upcoming", detail: "Option to upgrade if better seat available", link: "https://dteDelhi.gov.in" },
  { event: "JAC Delhi Round 3 (if applicable)", date: "Aug 2026", status: "upcoming", detail: "Vacant seats filled in Round 3", link: "https://dteDelhi.gov.in" },
  { event: "Direct / Management Quota Admission", date: "Aug–Sep 2026", status: "upcoming", detail: "Contact private/deemed colleges directly", link: "/direct-admission-engineering-colleges-delhi" },
  { event: "Lateral Entry (DSE-BTech) CAP", date: "Aug–Sep 2026", status: "upcoming", detail: "For diploma holders — 2nd year direct entry", link: "https://dteDelhi.gov.in" },
]

const mbaTimeline = [
  { event: "MAT Registration (Feb 2026)", date: "Jan 2026", status: "upcoming", detail: "mat.aima.in · Accepted at IMI Delhi, Fore School Delhi, Indira Institute", link: "https://mat.aima.in" },
  { event: "CMAT 2026 Registration", date: "Oct–Nov 2026", status: "upcoming", detail: "NTA CMAT · January 2027 exam · Accepted widely", link: "https://cmat.nta.nic.in" },
  { event: "SNAP 2026 Registration", date: "Aug–Nov 2026", status: "upcoming", detail: "snaptest.org · Mandatory for FMS Delhi, MDI Gurgaon, BIMTECH", link: "https://snaptest.org" },
  { event: "XAT 2027 Registration", date: "Jul–Nov 2026", status: "upcoming", detail: "XLRI entrance · Also accepted at some Delhi MBA colleges", link: "https://xatonline.in" },
  { event: "CAT 2026 Registration", date: "Aug–Sep 2026", status: "upcoming", detail: "iimcat.ac.in · November 23, 2026 exam", link: "https://iimcat.ac.in" },
  { event: "CAT 2026 Exam", date: "Nov 23, 2026", status: "upcoming", detail: "3 slots · 2 hours · IIM Common Admission Test", link: "https://iimcat.ac.in" },
  { event: "SNAP 2026 — Attempt 1", date: "Dec 6, 2026", status: "upcoming", detail: "snaptest.org · 60-minute online exam", link: "https://snaptest.org" },
  { event: "SNAP 2026 — Attempt 2", date: "Dec 13, 2026", status: "upcoming", detail: "Best of 3 attempts counted for FMS Delhi/MDI Gurgaon", link: "https://snaptest.org" },
  { event: "SNAP 2026 — Attempt 3", date: "Dec 20, 2026", status: "upcoming", detail: "Final SNAP attempt · Best score used", link: "https://snaptest.org" },
  { event: "FMS Delhi WAT + PI", date: "Jan–Feb 2027", status: "upcoming", detail: "Written Ability Test + Personal Interview at FMS Delhi Campus", link: "https://FMS DelhiDELHI.edu.in" },
  { event: "CMAT 2027 Exam", date: "Jan 2027", status: "upcoming", detail: "NTA CMAT · Score valid for IMI Delhi, Fore School Delhi, Indira", link: "https://cmat.nta.nic.in" },
  { event: "MBA Admission — Direct/Mgmt Quota", date: "Jan–Mar 2027", status: "upcoming", detail: "Contact colleges directly for management quota seats", link: "/direct-admission-mba-colleges-delhi" },
]

const importantLinks = [
  { name: "JEE Main Official Portal", url: "https://jacdelhi.admissions.nic.in", desc: "Registration, admit card, result" },
  { name: "DTE Delhi (CAP)", url: "https://dteDelhi.gov.in", desc: "BTech JAC Delhi Rounds, documents" },
  { name: "JEE Main NTA", url: "https://jeemain.nta.nic.in", desc: "JEE registration & results" },
  { name: "SNAP Test", url: "https://snaptest.org", desc: "SNAP registration for Symbiosis" },
  { name: "CAT 2026 IIM", url: "https://iimcat.ac.in", desc: "CAT registration & admit card" },
  { name: "CMAT NTA", url: "https://cmat.nta.nic.in", desc: "CMAT registration" },
  { name: "MAT AIMA", url: "https://mat.aima.in", desc: "MAT registration (5 times/year)" },
  { name: "NSP Delhi Scholarship Scholarship", url: "https://NSP Delhi Scholarship.Delhi.gov.in", desc: "Apply for govt scholarships" },
]

const faqs = [
  {
    question: "When does JEE Main 2026 registration start?",
    answer: "JEE Main 2026 registration is expected to start in January–February 2026 on the official portal jacdelhi.admissions.nic.in. The exam is scheduled for April 15 – May 15, 2026 (PCM group for engineering). Results are expected in June 2026. The registration fee is ₹800 for General category and ₹600 for Reserved categories.",
  },
  {
    question: "What is the last date for engineering admission in Delhi colleges?",
    answer: "Engineering admission in Delhi for 2026 follows DTE Delhi JAC Delhi Rounds. JAC Delhi Round 1 allotment: July 2026. JAC Delhi Round 2: August 2026. Direct/Management quota admission: August–September 2026. After September, seats are rarely available. Do not wait until the last minute — confirm your admission by August to avoid missing out.",
  },
  {
    question: "When does SNAP 2026 registration open?",
    answer: "SNAP 2026 registration typically opens in August 2026 at snaptest.org. The exam is conducted 3 times in December (Dec 6, 13, and 20, 2026). SNAP registration closes by November 2026. Fee: ₹1,750 per attempt. Register early — FMS Delhi, MDI Gurgaon, and BIMTECH Delhi all require SNAP score for admission.",
  },
  {
    question: "What is the CAT 2026 exam date?",
    answer: "CAT 2026 is scheduled for November 23, 2026. Registration opens in August 2026 at iimcat.ac.in. CAT is a 2-hour computer-based test with 3 sections: VARC, DILR, and Quantitative Aptitude. While most Delhi MBA colleges accept CAT, it is NOT mandatory — MAT, CMAT, and SNAP are also widely accepted.",
  },
  {
    question: "Can I get MBA admission in Delhi after January 2027?",
    answer: "Yes, to some extent. Some Delhi MBA colleges with unfilled seats offer spot admissions or management quota after January 2027. Fore School Delhi, Indira Institute, IMS Ghaziabad, and GL Bajaj Noida often have seats available through February–March. However, popular programs at FMS Delhi, MDI Gurgaon, and IMI Delhi fill up by January. Don't delay if you have a SNAP/CMAT score.",
  },
]

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Admissions 2026", url: "/delhi-admission-deadline-tracker-2026" },
]

export default function DELHIAdmissionDeadlineTrackerPage() {
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
              <span className="text-white">Admission Deadline Tracker 2026</span>
            </nav>
            <div className="inline-block bg-red-600/20 text-red-300 text-xs font-bold px-3 py-1 rounded-full mb-3">Updated for 2026 Admissions</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Delhi College Admission Deadline Tracker 2026
            </h1>
            <p className="text-blue-200 text-base max-w-3xl mb-6">
              All engineering and MBA admission deadlines for Delhi colleges in one place. JEE Main, JAC Delhi Rounds, SNAP 2026, CMAT, CAT — track every date and never miss a deadline.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "JEE Main Exam", date: "Apr–May 2026" },
                { label: "JAC Delhi Round 1", date: "July 2026" },
                { label: "SNAP 2026", date: "Dec 6/13/20" },
                { label: "CAT 2026", date: "Nov 23, 2026" },
              ].map(({ label, date }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                  <p className="text-xs text-blue-300 mb-1">{label}</p>
                  <p className="text-sm font-bold text-white">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Engineering Timeline */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              Engineering Admission Timeline — Delhi 2026
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Event</th>
                      <th className="px-4 py-3 text-center w-36">Date</th>
                      <th className="px-4 py-3 text-left hidden md:table-cell">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {engineeringTimeline.map((row, i) => (
                      <tr key={i} className="hover:bg-blue-50/20">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.event}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full">{row.date}</span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500 hidden md:table-cell">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* MBA Timeline */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              MBA Admission Timeline — Delhi 2026–27
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Event</th>
                      <th className="px-4 py-3 text-center w-36">Date</th>
                      <th className="px-4 py-3 text-left hidden md:table-cell">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mbaTimeline.map((row, i) => (
                      <tr key={i} className="hover:bg-red-50/20">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.event}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full">{row.date}</span>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500 hidden md:table-cell">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Important Official Links</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {importantLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col p-3 bg-gray-50 rounded-xl hover:bg-red-50 border border-gray-100 hover:border-red-200 transition-colors group">
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-red-800 transition-colors">{link.name}</span>
                  <span className="text-xs text-gray-400 mt-0.5">{link.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">FAQs — Delhi Admission Deadlines 2026</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Admission Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
              { label: "NAAC A+ colleges in Delhi", href: "/naac-a-plus-colleges-delhi", icon: "" },
              { label: "Low Fee colleges in Delhi", href: "/low-fee-colleges-Delhi", icon: "" },
              { label: "Delhi Colleges Fees Guide 2026", href: "/colleges-Delhi-fees", icon: "" },
              { label: "Top Placement colleges in Delhi", href: "/top-placement-colleges-delhi", icon: "" },
              { label: "College Fees Calculator", href: "/delhi-college-fees-calculator", icon: "" },
              { label: "Placement Comparator Tool", href: "/delhi-college-placement-comparator", icon: "" },
              { label: "Engineering vs MBA Comparison", href: "/delhi-colleges-comparison-engineering-mba", icon: "" },
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
              <p className="font-bold text-lg">Don&apos;t navigate deadlines alone.</p>
              <p className="text-blue-200 text-sm">Get a personalised admission calendar and reminders from our counsellors.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/counselling" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Free Counselling →
              </Link>
              <Link href="/predictor" className="flex items-center justify-center gap-2 bg-white text-[#0A1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
                College Predictor →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


