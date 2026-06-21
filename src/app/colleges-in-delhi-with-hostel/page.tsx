import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Home, Shield, Star, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "colleges in Delhi with Hostel 2026 | Fees, Facilities & Availability",
  description: "Top Delhi colleges with hostel 2026. DTU Delhi, IIIT Delhi, FMS Delhi — hostel fees ₹40K–₹1.8L/yr, boys/girls availability, food, and campus life guide.",
  path: "/colleges-in-delhi-with-hostel",
  keywords: [
    "colleges in Delhi with hostel 2026",
    "Delhi colleges with hostel facility",
    "engineering colleges Delhi hostel",
    "mba colleges Delhi hostel",
    "DTU Delhi hostel fees 2026",
    "mit wpu hostel Delhi",
    "IIIT Delhi hostel",
    "FMS Delhi hostel Delhi",
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
    hostelFees: "₹55K–₹70K/yr",
    rooms: "Double / Triple sharing",
    food: "Mess + Canteen",
    capacity: "400+ seats",
    availability: "Limited — Apply fast",
    highlight: "Government College | Cheapest Hostel | Central Delhi Location",
    slug: "dtu-delhi-delhi-technological-university",
    note: "Apply within 1 week of admission — seats fill in days",
  },
  {
    rank: 2,
    name: "IIIT Delhi (Indraprastha Institute of Information Technology)",
    stream: "Engineering",
    hostelFees: "₹80K–₹1L/yr",
    rooms: "Double / Triple sharing",
    food: "Subsidized Mess",
    capacity: "600+ seats",
    availability: "Good Availability",
    highlight: "NIRF #101 | Dwarka Sector 3 Campus | Modern Hostel Block",
    slug: "iiit-delhi-indraprastha-institute-of-information-technology",
    note: "Boys and girls hostels separate",
  },
  {
    rank: 3,
    name: "Amity University Delhi (Amity University Delhi)",
    stream: "Engineering / MBA",
    hostelFees: "₹90K–₹1.2L/yr",
    rooms: "Single / Double sharing",
    food: "Multiple Mess Options",
    capacity: "2,000+ seats",
    availability: "Good Availability",
    highlight: "Huge Residential Campus | Knowledge Park Greater Noida | All Facilities On-Campus",
    slug: "amity-university-noida-delhi-ncr",
    note: "Mandatory for some international programs",
  },
  {
    rank: 4,
    name: "FMS Delhi (Symbiosis Institute of Business Management)",
    stream: "MBA",
    hostelFees: "₹1.2L–₹1.6L/yr",
    rooms: "Single rooms for MBA",
    food: "Hostel Mess Included",
    capacity: "600+ seats",
    availability: "Mandatory for FMS Delhi MBA",
    highlight: "Symbiosis Knowledge Park Greater Noida Campus | Premium Facilities | MBA ₹28 LPA avg",
    slug: "FMS Delhi-symbiosis-institute-business-management-Delhi",
    note: "Single rooms with attached bath — fully air-conditioned",
  },
  {
    rank: 5,
    name: "AIIMS Delhi",
    stream: "Medical",
    hostelFees: "FREE for all students",
    rooms: "Government-provided",
    food: "Army Canteen (subsidized)",
    capacity: "All students",
    availability: "Mandatory for AFMC",
    highlight: "NIRF #4 | Free Hostel | Full Scholarship | Best Medical College",
    slug: "afmc-armed-forces-medical-college-delhi",
    note: "Residential — all students live on campus. Stipend ₹21,000/month",
  },
  {
    rank: 6,
    name: "Maulana Azad Medical College, Delhi",
    stream: "Medical",
    hostelFees: "₹60K–₹75K/yr",
    rooms: "Double sharing",
    food: "Hostel Mess",
    capacity: "300+ seats",
    availability: "Limited — apply on admission day",
    highlight: "NIRF #18 | Government Medical | Affordable | Sasoon Hospital",
    slug: "bj-government-medical-college-delhi",
    note: "Apply on the same day as admission — fills within hours",
  },
  {
    rank: 7,
    name: "IMI Delhi (Symbiosis Institute of Technology)",
    stream: "Engineering",
    hostelFees: "₹1.1L–₹1.4L/yr",
    rooms: "Double / Single",
    food: "Mess Included",
    capacity: "800+ seats",
    availability: "Good Availability",
    highlight: "Symbiosis Campus | Knowledge Park Greater Noida | NAAC A+",
    slug: "sit-Delhi-symbiosis-institute-of-technology",
    note: "On Symbiosis Knowledge Park Greater Noida campus — safe and well-maintained",
  },
  {
    rank: 8,
    name: "Miranda House College (Arts & Science)",
    stream: "Arts / Science",
    hostelFees: "₹40K–₹55K/yr",
    rooms: "Double / Triple sharing",
    food: "Mess Available",
    capacity: "200+ seats",
    availability: "Girls Hostel Priority",
    highlight: "NAAC A++ | Central Delhi | Heritage Campus | Affordable",
    slug: "government-college-of-engineering-Delhi",
    note: "Girls hostel in main campus; boys hostel nearby",
  },
]

const faqs = [
  {
    question: "Which Delhi college has the cheapest hostel?",
    answer: "Cheapest hostels in Delhi colleges 2026: AFMC (FREE — with ₹21K/month stipend), Miranda House College (₹40K–55K/yr), DTU Delhi (₹55K–70K/yr), Maulana Azad Medical College (₹60K–75K/yr). Government colleges offer the most affordable hostels. Apply immediately on admission day — government college hostels fill within days due to high demand.",
  },
  {
    question: "Do I need to apply separately for hostel in Delhi colleges?",
    answer: "Yes, hostel application is separate from college admission in most Delhi colleges. DTU Delhi and BJ Medical fill hostels within 1–2 days of admission. Amity University Delhi, IIIT Delhi: Apply online after admission confirmation. FMS Delhi: Hostel is mandatory for MBA students — automatically allotted. Submit hostel application on the day of admission for government colleges.",
  },
  {
    question: "Is hostel life good in Delhi colleges?",
    answer: "Delhi college hostels offer great experience: AFMC and FMS Delhi have fully-equipped single rooms. Amity University Delhi has a 2,000+ seat residential campus with gym, courts, and 24/7 security. Government hostels (DTU Delhi, Fergusson) are functional and affordable. Delhi's weather (pleasant year-round) makes hostel life comfortable. Most hostels have WiFi, mess, common rooms, and sports facilities.",
  },
  {
    question: "Can outstation students get hostel in Delhi engineering colleges?",
    answer: "Yes, all major Delhi engineering colleges prioritize outstation students for hostel allocation. DTU Delhi gives hostel preference to students from outside Delhi district. IIIT Delhi, Amity University Delhi, IMI Delhi have adequate capacity for all outstation students. Document required: Domicile certificate or distance proof (home > 50km from college). Apply on admission day for government colleges.",
  },
  {
    question: "What is included in Delhi college hostel fees?",
    answer: "Delhi college hostel fees typically include: Room rent (₹15K–60K/yr), Mess charges (₹25K–40K/yr), Security deposit (refundable ₹10K–25K), Maintenance fees. Some colleges like FMS Delhi include AC and Wi-Fi in fees. AFMC includes everything for free. Amity University Delhi hostel fees cover room + laundry + utilities. Mess fees are usually paid monthly ₹3,500–5,000/month separately.",
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
              colleges in Delhi with Hostel Facility 2026
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-6">
              Complete guide to Delhi colleges with hostel facilities — fees, availability, food, boys/girls hostel capacity, and how to apply.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "8 Colleges with Hostels" },
                { icon: "", label: "Fees ₹40K–₹1.8L/yr" },
                { icon: "", label: "Boys & Girls Hostels" },
                { icon: "🆓", label: "AFMC: Free Hostel" },
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
              { icon: Home, title: "Apply Same Day", desc: "Government college hostels (DTU Delhi, BJ Medical, Fergusson) fill within 1–2 days. Apply on admission day." },
              { icon: Shield, title: "Safety First", desc: "All major Delhi college hostels have CCTV, security guards, and biometric entry. Girls hostels have additional security." },
              { icon: Star, title: "AFMC is Free", desc: "AFMC gives free hostel + ₹21,000/month stipend. Best deal for medical students in India." },
              { icon: Users, title: "Network Matters", desc: "Hostel life builds lifelong networks. FMS Delhi and DTU Delhi hostel alumni networks are extremely strong." },
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


