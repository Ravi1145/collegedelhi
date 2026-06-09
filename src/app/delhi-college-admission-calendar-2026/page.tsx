import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Delhi College Admission Calendar 2026 — All Important Dates",
  description: "Complete Delhi college admission calendar 2026: JEE Main, NEET, CUET, JAC Delhi, DU CSAS, IPU CET, CAT, CLAT, JEE Advanced — all exam and counselling dates for Delhi colleges in one place.",
  path: "/delhi-college-admission-calendar-2026",
  keywords: [
    "delhi college admission calendar 2026",
    "JEE Main 2026 dates Delhi",
    "CUET 2026 important dates",
    "JAC Delhi 2026 schedule",
    "DU CSAS 2026 dates",
    "NEET 2026 Delhi admission dates",
    "IPU CET 2026 schedule",
    "CAT 2026 dates",
    "delhi university admission 2026 dates",
    "engineering college admission Delhi 2026 schedule",
  ],
})
export const revalidate = 86400

const calendarData = [
  { month: "November 2025", events: [
    { date: "Nov 1–30, 2025", exam: "JEE Main Session 1", detail: "Application opens at jeemain.nta.nic.in", type: "Engineering", link: "/jee-colleges-delhi" },
    { date: "Nov 23, 2025", exam: "CAT 2025", detail: "IIM CAT exam. Results in Jan 2026 for 2026 batch admissions", type: "MBA", link: "/best-mba-colleges-delhi" },
  ]},
  { month: "January 2026", events: [
    { date: "Jan 20 – Feb 5, 2026", exam: "JEE Main Session 1 Exam", detail: "At NTA centres nationwide. Admit card available 1 week before", type: "Engineering", link: "/engineering-colleges-delhi" },
    { date: "Jan 2026", exam: "FMS Delhi GD-PI Calls", detail: "FMS Delhi shortlists based on CAT 2025 score. Check fms.edu for shortlist", type: "MBA", link: "/best-mba-colleges-delhi" },
  ]},
  { month: "February 2026", events: [
    { date: "Feb 2026", exam: "JEE Main Session 1 Results", detail: "Results on jeemain.nta.nic.in. Scorecard download open", type: "Engineering", link: "/predictor" },
    { date: "Feb 1–28, 2026", exam: "CUET UG 2026 Registration", detail: "Registration at cuet.nta.nic.in for DU, JMI, and 250+ university admissions", type: "All Streams", link: "/colleges-north-delhi" },
    { date: "Feb 10 – Mar 10, 2026", exam: "NEET 2026 Registration", detail: "Apply at neet.nta.nic.in. Deadline is firm — no extension typically", type: "Medical", link: "/medical-colleges-delhi" },
    { date: "Feb 2026", exam: "CLAT 2026 Registration", detail: "Apply at consortiumofnlus.ac.in for NLU Delhi and other NLUs", type: "Law", link: "/law-colleges-delhi" },
  ]},
  { month: "March 2026", events: [
    { date: "Mar 20, 2026", exam: "CMAT 2026 Exam", detail: "NTA management entrance. Accepted by Delhi NCR MBA colleges", type: "MBA", link: "/mba-colleges-delhi" },
    { date: "Mar 2026", exam: "IPU CET 2026 Registration", detail: "Opens at ipu.ac.in for all IP University affiliated college admissions", type: "Engineering/MBA", link: "/colleges" },
  ]},
  { month: "April 2026", events: [
    { date: "Apr 1–30, 2026", exam: "JEE Main Session 2", detail: "Second attempt. Best of 2 sessions counts for JAC Delhi counselling", type: "Engineering", link: "/engineering-colleges-delhi" },
    { date: "Apr 25 – May 4, 2026", exam: "JEE Advanced Registration", detail: "Only top 2.5 lakh JEE Main qualifiers eligible. Register at jeeadv.ac.in", type: "Engineering (IIT)", link: "/colleges/iit-delhi" },
  ]},
  { month: "May 2026", events: [
    { date: "May 2026", exam: "CUET UG 2026 Exam", detail: "Exam for DU and all central universities. Admit card 10 days before exam", type: "All Streams", link: "/colleges-north-delhi" },
    { date: "May 3, 2026", exam: "NEET 2026 Exam", detail: "Single-day national medical entrance. Results in June 2026", type: "Medical", link: "/medical-colleges-delhi" },
    { date: "May 10, 2026", exam: "CLAT 2026 Exam", detail: "Common Law Admission Test for NLU Delhi and all National Law Universities", type: "Law", link: "/law-colleges-delhi" },
    { date: "May 11, 2026", exam: "NATA 2026 (Session 1)", detail: "Architecture entrance. Required for SPA Delhi, DTU Architecture, and private architecture colleges", type: "Architecture", link: "/architecture-colleges-delhi" },
    { date: "May 17, 2026", exam: "JEE Advanced 2026 Exam", detail: "At IIT Delhi and other centres. For IIT Delhi and IIIT Delhi admissions", type: "Engineering (IIT)", link: "/colleges/iit-delhi" },
    { date: "May 2026", exam: "IPU CET 2026 Exam", detail: "IP University entrance for MAIT, BPIT, USICT, MSIT, and 100+ affiliated colleges", type: "Engineering/MBA", link: "/colleges" },
  ]},
  { month: "June 2026", events: [
    { date: "Jun 2026", exam: "JEE Main Session 2 Results", detail: "Final JEE Main scores released. JAC Delhi registration begins", type: "Engineering", link: "/engineering-colleges-delhi" },
    { date: "Jun 2026", exam: "CUET UG 2026 Results", detail: "DU CSAS portal opens for preference filling. Deadline: typically 2 weeks after results", type: "All Streams", link: "/colleges-north-delhi" },
    { date: "Jun 2026", exam: "JEE Advanced 2026 Results", detail: "JOSAA counselling for IIT Delhi registration begins immediately after results", type: "Engineering (IIT)", link: "/colleges/iit-delhi" },
    { date: "Jun 2026", exam: "NEET 2026 Results", detail: "NEET scorecard available. Delhi medical counselling (MCC) registration begins", type: "Medical", link: "/medical-colleges-delhi" },
  ]},
  { month: "July 2026", events: [
    { date: "Jul 2026", exam: "JAC Delhi Counselling Round 1", detail: "Online counselling for DTU, NSUT, IGDTUW, IIIT Delhi at jacdelhi.admissions.nic.in", type: "Engineering", link: "/dtu-vs-nsut" },
    { date: "Jul 2026", exam: "DU CSAS Round 1", detail: "First allocation round for all DU colleges. Accept seat within 5 days of allocation", type: "All Streams", link: "/colleges-north-delhi" },
    { date: "Jul 2026", exam: "JOSAA Round 1 (IIT Delhi)", detail: "First seat allocation for IIT Delhi, IIIT Delhi, NIT, GFTI through JoSAA portal", type: "Engineering (IIT)", link: "/engineering-colleges-delhi" },
    { date: "Jul 2026", exam: "IPU CET Counselling", detail: "IP University releases merit list and begins seat allotment for all affiliated colleges", type: "Engineering/MBA", link: "/colleges" },
  ]},
  { month: "August 2026", events: [
    { date: "Aug 2026", exam: "JAC Delhi Round 2 & 3", detail: "Subsequent rounds with upgraded seats. Deadline to report to college after Round 3", type: "Engineering", link: "/engineering-colleges-delhi" },
    { date: "Aug 2026", exam: "DU CSAS Round 2 & 3", detail: "Final rounds. Last chance to upgrade or secure seat in DU colleges", type: "All Streams", link: "/colleges-north-delhi" },
    { date: "Aug 2026", exam: "Direct / Management Quota Opens", detail: "Most private Delhi engineering and MBA colleges open direct quota after JAC Delhi Rounds close", type: "All Streams", link: "/direct-admission-engineering-colleges-delhi" },
    { date: "Aug 1, 2026", exam: "CAT 2026 Registration Opens", detail: "Apply at iimcat.ac.in for CAT 2026 (for 2027 MBA batch). Deadline: Sep 15, 2026", type: "MBA", link: "/best-mba-colleges-delhi" },
  ]},
  { month: "November 2026", events: [
    { date: "Nov 2026", exam: "SNAP 2026 Registration Closes", detail: "Symbiosis MBA entrance test. SNAP exam in Dec 2026 for 2027 MBA batch", type: "MBA", link: "/mba-colleges-delhi" },
    { date: "Nov 23, 2026", exam: "CAT 2026 Exam", detail: "For 2027 MBA batch admissions at FMS Delhi, MDI Gurgaon, IMI Delhi, BIMTECH", type: "MBA", link: "/best-mba-colleges-delhi" },
  ]},
]

const faqs = [
  { question: "When does JAC Delhi 2026 counselling start?", answer: "JAC Delhi (Joint Admission Counselling) 2026 is expected to begin in July 2026, approximately 2-3 weeks after JEE Main Session 2 results (expected June 2026). JAC Delhi Round 1 registration typically opens at jacdelhi.admissions.nic.in. This is the counselling for DTU, NSUT, IGDTUW, IIIT Delhi, and other Delhi government engineering colleges." },
  { question: "When does DU CSAS 2026 open for DU college admissions?", answer: "DU CSAS (Common Seat Allocation System) 2026 opens approximately 1-2 weeks after CUET UG results (expected June 2026). Students fill preferences for DU colleges in CSAS. Round 1 allocation typically happens in July 2026. There are usually 3 rounds. Accept your seat within 5 days of each round's result — missing the deadline forfeits your seat." },
  { question: "What is the deadline for CUET 2026 registration for Delhi University?", answer: "CUET 2026 registration is expected to open in February 2026 and close in March 2026 at cuet.nta.nic.in. The exam is conducted in May 2026. Delhi University (all 90+ DU colleges) requires CUET for all undergraduate admissions in Arts, Science, Commerce, and most other streams from 2022 onwards." },
  { question: "When is the last date to apply for NEET 2026 for Delhi medical colleges?", answer: "NEET 2026 registration is expected from February 10 to March 10, 2026 at neet.nta.nic.in. The NEET exam date is May 3, 2026. Results are typically in June 2026. Delhi medical college admissions (AIIMS, MAMC, LHMC, IP University medical colleges) proceed through MCC counselling and Delhi state counselling in July-August 2026." },
]

export default function DelhiAdmissionCalendarPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Delhi Admission Calendar 2026", url: "/delhi-college-admission-calendar-2026" },
  ])

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Delhi College Admission Calendar 2026</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Delhi College Admission Calendar 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl">
            Every important date for Delhi college admissions 2026 — JEE Main, NEET, CUET, JEE Advanced, JAC Delhi, DU CSAS, IPU CET, CAT, CLAT — all in one place. Bookmark this page.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-amber-900 mb-1">Important Note</p>
          <p className="text-sm text-amber-800">All dates are indicative based on 2025 patterns. Official dates will be confirmed by NTA, DU, JAC Delhi, and respective authorities. Check official websites for confirmed dates. This calendar is updated as announcements are made.</p>
        </div>

        {calendarData.map(month => (
          <div key={month.month} className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-red-600 rounded-full inline-block"></span>
              {month.month}
            </h2>
            <div className="space-y-2">
              {month.events.map((ev, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="sm:w-40 shrink-0">
                    <p className="text-xs font-bold text-gray-500">{ev.date}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{ev.exam}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{ev.detail}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{ev.type}</span>
                    <Link href={ev.link} className="text-xs text-red-700 hover:underline font-semibold whitespace-nowrap">Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between">
                {f.question}
                <span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-3">Related Guides</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
            { label: "DTU vs NSUT 2026", href: "/dtu-vs-nsut" },
            { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
            { label: "MBA Colleges Delhi", href: "/best-mba-colleges-delhi" },
            { label: "JEE Main College Predictor", href: "/predictor" },
            { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
            { label: "DU North Campus Colleges", href: "/colleges-north-delhi" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-bold">Confused about which exam to appear for?</p>
            <p className="text-blue-200 text-sm">Our counsellors create a personalised admission roadmap based on your stream and target college. Free session.</p>
          </div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
            Book Free Session
          </Link>
        </div>
      </div>
    </>
  )
}
