import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Home, Shield, Star, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Colleges in Delhi with Hostel 2026",
  description: "Delhi colleges with hostel facilities 2026: DTU, NSUT, IIIT Delhi, AIIMS Delhi, Miranda House — availability, food, and application guide",
  path: "/colleges-in-delhi-with-hostel",
  keywords: [
    "colleges in Delhi with hostel 2026",
    "Delhi colleges with hostel facility",
    "engineering colleges Delhi hostel",
    "DTU Delhi hostel fees 2026",
    "IIIT Delhi hostel",
    "government College Delhi hostel",
    "hostel fees Delhi colleges 2026",
    "outstation students Delhi colleges",
  ],
})

const hostelColleges = [
  {
    rank: 1,
    name: "DTU (Delhi Technological University)",
    stream: "Engineering",
    hostelFees: "Government-subsidized rates",
    rooms: "Double / Triple sharing",
    food: "Mess + Canteen",
    capacity: "Limited seats",
    availability: "Limited — Apply fast",
    highlight: "Government College | Central Delhi Location",
    slug: "dtu-delhi",
    note: "Apply soon after admission — government college hostel seats fill quickly",
  },
  {
    rank: 2,
    name: "NSUT (Netaji Subhas University of Technology)",
    stream: "Engineering",
    hostelFees: "Government-subsidized rates",
    rooms: "Double / Triple sharing",
    food: "Mess + Canteen",
    capacity: "Limited seats",
    availability: "Limited — Apply fast",
    highlight: "Government College | Dwarka Campus",
    slug: "nsut-delhi",
    note: "Apply soon after admission",
  },
  {
    rank: 3,
    name: "IIIT Delhi (Indraprastha Institute of Information Technology)",
    stream: "Engineering",
    hostelFees: "Government-subsidized rates",
    rooms: "Double / Triple sharing",
    food: "Subsidized Mess",
    capacity: "Moderate seats",
    availability: "Good Availability",
    highlight: "Govt | Dwarka Campus | Boys & Girls Hostels Separate",
    slug: "indraprastha-institute-of-information-technology-delhi",
    note: "Apply online after admission confirmation",
  },
  {
    rank: 4,
    name: "IGDTUW (Indira Gandhi Delhi Technical University for Women)",
    stream: "Engineering (Women)",
    hostelFees: "Government-subsidized rates",
    rooms: "Double / Triple sharing",
    food: "Mess Available",
    capacity: "Limited seats",
    availability: "Priority for outstation students",
    highlight: "Govt Women's University | On-campus hostel",
    slug: "igdtuw-delhi",
    note: "Apply on admission confirmation",
  },
  {
    rank: 5,
    name: "AIIMS Delhi",
    stream: "Medical",
    hostelFees: "Government-subsidized rates",
    rooms: "Government-provided",
    food: "Subsidized Canteen",
    capacity: "Residential for most students",
    availability: "Mandatory residential for many MBBS students",
    highlight: "NIRF #1 Medical | On-campus hostel",
    slug: "aiims-delhi",
    note: "Confirm current hostel policy and fees with the institute directly",
  },
  {
    rank: 6,
    name: "Miranda House",
    stream: "Arts / Science (Women)",
    hostelFees: "DU government fee structure",
    rooms: "Double / Triple sharing",
    food: "Mess Available",
    capacity: "Limited seats",
    availability: "Girls hostel — priority for outstation students",
    highlight: "Top DU Women's College | Central Delhi",
    slug: "miranda-house",
    note: "Apply through the college's hostel admission process after DU admission",
  },
]

const faqs = [
  {
    question: "Which Delhi college has the most affordable hostel?",
    answer: "Government colleges in Delhi — DTU, NSUT, IIIT Delhi, IGDTUW, and DU colleges like Miranda House — offer the most affordable, government-subsidized hostel fees compared to private institutions. Exact fees vary by year and room type; check each institution's official hostel office for current rates.",
  },
  {
    question: "Do I need to apply separately for hostel in Delhi colleges?",
    answer: "Yes, in most Delhi colleges hostel application is separate from college admission and must be submitted promptly after admission confirmation, since government college hostel seats are limited and fill quickly. Check each institution's official admission/hostel portal for the exact process and deadlines.",
  },
  {
    question: "Is hostel life good in Delhi colleges?",
    answer: "Government college hostels in Delhi (DTU, NSUT, IIIT Delhi, IGDTUW, DU colleges) are functional, affordable, and typically include mess facilities, WiFi, and common rooms, with separate hostels for men and women. Facilities and exact amenities vary by institution — confirm directly with each college's hostel office.",
  },
  {
    question: "Can outstation students get hostel priority in Delhi colleges?",
    answer: "Many Delhi colleges give hostel allocation priority to outstation students (those living beyond a certain distance from the college, typically proven via domicile certificate or distance documentation). Exact eligibility criteria vary by institution — check the specific college's hostel policy.",
  },
  {
    question: "What is typically included in Delhi college hostel fees?",
    answer: "Hostel fees at Delhi colleges typically cover room rent, mess/food charges, and a refundable security deposit, with maintenance fees sometimes charged separately. Government colleges have regulated, lower fee structures than private institutions. Always confirm the current year's exact fee breakdown with the specific college's hostel office.",
  },
]

export default function CollegesWithHostelDELHIPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "colleges in Delhi with Hostel", url: "/colleges-in-delhi-with-hostel" },
  ])
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-surface min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[#0A1628] to-[#0D3B2E] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-blue-300 mb-4 flex gap-1 items-center">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span className="text-white">colleges in Delhi with Hostel</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Colleges in Delhi with Hostel Facility 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              Real, verified Delhi colleges with hostel facilities — availability, food, boys/girls hostel access, and how to apply.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "Verified Govt Colleges" },
                { icon: "", label: "Govt-Subsidized Fees" },
                { icon: "", label: "Boys & Girls Hostels" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* College Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Delhi Colleges with Hostel — 2026 Guide</h2>
          <div className="space-y-4">
            {hostelColleges.map((c) => (
              <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-teal-600 text-sm">#{c.rank}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 transition-colors text-base">
                        {c.name}
                      </Link>
                      <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{c.stream}</span>
                    </div>
                    <p className="text-xs text-red-700 font-semibold mb-2">{c.highlight}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs text-gray-600 mb-2">
                      <div><span className="font-semibold">Hostel Fees:</span> {c.hostelFees}</div>
                      <div><span className="font-semibold">Rooms:</span> {c.rooms}</div>
                      <div><span className="font-semibold">Food:</span> {c.food}</div>
                      <div><span className="font-semibold">Capacity:</span> {c.capacity}</div>
                      <div className={`font-semibold ${c.availability.includes("Limited") ? "text-red-600" : "text-green-600"}`}>
                        {c.availability}
                      </div>
                    </div>
                    <p className="text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded-lg inline-block">{c.note}</p>
                  </div>
                  <Link href={`/colleges/${c.slug}`}
                    className="shrink-0 text-xs font-semibold text-red-700 hover:text-red-800 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors">
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Home, title: "Apply Promptly", desc: "Government college hostels (DTU, NSUT, IIIT Delhi) fill quickly. Apply as soon as admission is confirmed." },
              { icon: Shield, title: "Safety First", desc: "Major Delhi college hostels have security measures in place. Women's hostels typically have additional security protocols." },
              { icon: Star, title: "Check Government Options First", desc: "Government colleges (DTU, NSUT, IIIT Delhi, IGDTUW, DU colleges) offer the most affordable hostel fees in Delhi." },
              { icon: Users, title: "Network Matters", desc: "Hostel life builds lasting networks — alumni from government college hostels in Delhi maintain strong professional connections." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions — Hostels in Delhi Colleges</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 group">
                  <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex items-center justify-between gap-2">
                    {faq.question}
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-extrabold text-white mb-2">Need Help with Hostel & Admission in Delhi?</h2>
            <p className="text-gray-300 text-sm mb-4">Our counselors guide outstation students through college admission + hostel booking — completely free.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/colleges" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                Browse All Colleges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


