import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Hotel Management Colleges in Delhi 2026 | BHM Fees, Placements & Admission",
  description: "Top hotel management colleges in Delhi 2026 — IHM Delhi, Amity, IIHM. Compare BHM fees ₹80K–₹4L/yr, NCHMCT JEE cutoffs, placement packages up to ₹8 LPA.",
  path: "/hotel-management-colleges-delhi",
  keywords: [
    "hotel management colleges in Delhi 2026",
    "best hotel management college Delhi",
    "BHM colleges Delhi fees",
    "IHM Delhi admission 2026",
    "NCHMCT JEE Delhi colleges",
    "hospitality management colleges Delhi",
    "hotel management course Delhi fees",
    "top hotel management institutes Delhi",
    "government hotel management college Delhi",
    "BHM placement Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "IHM Delhi (Institute of Hotel Management)", type: "Government (NCHMCT)", naac: "A", fees: "₹80K–₹1.2L/yr", program: "B.Sc. HHA (3yr)", seats: 120, exam: "NCHMCT JEE", highlight: "India's #1 Hotel Management | Top Placements" },
  { rank: 2, name: "Amity School of Hospitality, Delhi", type: "Private (Deemed)", naac: "A+", fees: "₹2.5L–₹3.5L/yr", program: "BHM, B.Sc. HM", seats: 120, exam: "Amity JEE", highlight: "Best Private | Global Internships | MNC Placements" },
  { rank: 3, name: "IIHM Delhi (International Institute of Hotel Management)", type: "Private", naac: "A", fees: "₹1.8L–₹2.5L/yr", program: "B.Sc. HM (4yr)", seats: 90, exam: "IIHM eCHAT", highlight: "Industry tie-ups | International exposure" },
  { rank: 4, name: "Delhi Institute of Hotel Management (DIHM)", type: "Government (Delhi Govt)", naac: "B+", fees: "₹60K–₹90K/yr", program: "Diploma HM, B.Sc. HM", seats: 150, exam: "Delhi CET HM", highlight: "Affordable | Delhi Govt Backed | Good faculty" },
  { rank: 5, name: "Guru Gobind Singh Indraprastha University — HM Colleges", type: "University affiliated", naac: "–", fees: "₹1L–₹1.8L/yr", program: "BHM (4yr)", seats: 200, exam: "IPU CET HM", highlight: "IP University affiliated | Central Delhi" },
  { rank: 6, name: "Banarsidas Chandiwala Institute of Hotel Management", type: "Private aided", naac: "B+", fees: "₹90K–₹1.3L/yr", program: "B.Sc. HHA, BHM", seats: 120, exam: "NCHMCT JEE / Direct", highlight: "South Delhi | Good placement record" },
]

const faqs = [
  { question: "Which is the best hotel management college in Delhi 2026?", answer: "IHM Delhi (Institute of Hotel Management, Pusa Road) is India's top government hotel management college — NCHMCT JEE admission, fees ₹80K–1.2L/yr, placements in Taj, Oberoi, Marriott, ITC. For private colleges, Amity School of Hospitality offers global internships and MNC placements at ₹2.5–3.5L/yr. Both are significantly better than national alternatives for Delhi students." },
  { question: "What is the fee for hotel management colleges in Delhi?", answer: "Hotel management fees in Delhi: Government (IHM Delhi) ₹80K–1.2L/yr, Delhi Govt (DIHM) ₹60–90K/yr, IP University affiliated colleges ₹1–1.8L/yr, private institutes (IIHM) ₹1.8–2.5L/yr, private deemed (Amity) ₹2.5–3.5L/yr. Total 3–4 year BHM/B.Sc. HM degree costs ₹2.4L (govt) to ₹14L (private)." },
  { question: "Which entrance exam is needed for hotel management in Delhi?", answer: "NCHMCT JEE (April–May 2026) is the main exam for IHM Delhi and all central government HM institutes. IPU CET HM is needed for GGSIPU-affiliated colleges. IIHM accepts its own eCHAT exam. Amity conducts its own Amity JEE. Private colleges often offer direct admission on 12th marks. NCHMCT JEE is the most important exam for quality government colleges." },
  { question: "What is the placement salary for hotel management graduates from Delhi?", answer: "Hotel management placements from Delhi colleges: IHM Delhi graduates get ₹3–8 LPA in Taj Hotels, Oberoi, Marriott, ITC, Hyatt. Amity Hospitality graduates average ₹4–6 LPA with international placements. Top students at IHM Delhi get pre-placement offers from 5-star hotels. Starting salary for B.Sc. HHA graduates is typically ₹3–4 LPA in the food & beverage sector." },
  { question: "What career options are there after BHM from Delhi colleges?", answer: "BHM graduates from Delhi colleges work as Hotel Management Trainees (Taj, Marriott, Hyatt), F&B Executives, Front Office Managers, Event Managers, Airline Catering professionals, Cruise Line staff, and hospitality entrepreneurs. After 5–7 years, senior managers earn ₹12–20 LPA. IHM Delhi alumni frequently become General Managers of 5-star properties within 10–12 years." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Hotel Management Colleges Delhi", url: "https://www.collegedelhi.com/hotel-management-colleges-delhi" },
]

export const revalidate = 86400

export default function HotelManagementCollegesDelhi() {
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
            <span className="text-white">Hotel Management Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Hotel Management Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top BHM & B.Sc. HM colleges in Delhi — IHM Delhi, Amity, IIHM. Fees ₹60K–₹3.5L/yr, NCHMCT JEE cutoffs, Taj & Marriott placements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "21 HM Colleges Delhi" },
              { icon: TrendingUp, text: "Up to ₹8 LPA" },
              { icon: Award, text: "IHM Delhi #1 India" },
              { icon: Users, text: "BHM / B.Sc. HHA / Diploma" },
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
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Hotel Management Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best govt:</strong> IHM Delhi (NCHMCT JEE) · <strong>Best private:</strong> Amity Hospitality · <strong>Most affordable:</strong> DIHM (₹60K/yr) · <strong>IP University:</strong> GGSIPU HM Colleges · <strong>Top placement:</strong> IHM Delhi (Taj, Oberoi, Marriott)
            </p>
          </div>

          {/* College Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Fees/yr</th>
                  <th className="px-4 py-3 text-left font-semibold">Program</th>
                  <th className="px-4 py-3 text-left font-semibold">Exam</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c, i) => (
                  <tr key={c.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-red-600">#{c.rank}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.type}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{c.fees}</td>
                    <td className="px-4 py-3 text-gray-600">{c.program}</td>
                    <td className="px-4 py-3 text-gray-600">{c.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="Hotel Management" keywords={["hotel", "hospitality", "bhm"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Not sure which hotel management college to choose?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you pick between IHM Delhi, Amity, IIHM based on your NCHMCT JEE score, budget & career goals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Hotel Management Colleges Delhi</h2>
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
              { label: "BHM Colleges Delhi", href: "/hotel-management-colleges-delhi" },
              { label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" },
              { label: "Commerce Colleges Delhi", href: "/commerce-colleges-delhi" },
              { label: "Design Colleges Delhi", href: "/design-colleges-delhi" },
              { label: "All Colleges Delhi", href: "/colleges" },
              { label: "AI College Finder", href: "/ai-finder" },
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
