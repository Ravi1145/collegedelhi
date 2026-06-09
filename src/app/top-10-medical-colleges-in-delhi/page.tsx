import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { CheckCircle, MapPin, ExternalLink, BookOpen } from "lucide-react"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Top 10 Medical colleges in Delhi 2026 (NIRF Ranked)",
  description:
    "Ranked list of top 10 medical colleges in Delhi 2026 by NIRF rank, NAAC grade, NEET cutoff & fees. AFMC #4, BJ Medical #18 — compare all data in one place.",
  path: "/top-10-medical-colleges-in-delhi",
  keywords: [
    "top 10 medical colleges in Delhi",
    "top medical colleges in Delhi",
    "best medical colleges in Delhi",
    "best mbbs colleges Delhi ranking",
    "neet colleges Delhi 2026",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "AIIMS Delhi (AFMC)",
    type: "Government (Defence)",
    nirf: 4,
    naac: "A++",
    fees: "₹50K (total)",
    neetCutoff: "655+",
    seats: 150,
    exam: "NEET + AFMC Entrance",
    slug: "afmc-armed-forces-medical-college-delhi",
    highlight: "Best NIRF | Near-Zero Fees",
    location: "Delhi Cantonment, Delhi",
  },
  {
    rank: 2,
    name: "BJ Government Medical College (MAMC)",
    type: "Government",
    nirf: 18,
    naac: "A",
    fees: "₹60K–₹1.2L/yr",
    neetCutoff: "625+",
    seats: 200,
    exam: "NEET (State Quota)",
    slug: "bj-medical-college-delhi",
    highlight: "Best Govt. MBBS | NIRF #18",
    location: "Sassoon Road, Delhi",
  },
  {
    rank: 3,
    name: "Dr. Lady Hardinge Medical College",
    type: "Deemed University",
    nirf: null,
    naac: "A+",
    fees: "₹12L–₹18L/yr",
    neetCutoff: "550+",
    seats: 250,
    exam: "NEET",
    slug: "dy-patil-medical-college-delhi",
    highlight: "Best Private | Strong Placements",
    location: "Pitampura, Delhi",
  },
  {
    rank: 4,
    name: "Maulana Azad Medical College",
    type: "Deemed University",
    nirf: null,
    naac: "A",
    fees: "₹10L–₹14L/yr",
    neetCutoff: "540+",
    seats: 200,
    exam: "NEET",
    slug: "bharati-vidyapeeth-medical-college-delhi",
    highlight: "Established 1989 | Strong Alumni",
    location: "Rohini Sector 17, Delhi",
  },
  {
    rank: 5,
    name: "Seth GS Medical College (KEM Hospital)",
    type: "Government",
    nirf: null,
    naac: "A",
    fees: "₹80K–₹1.5L/yr",
    neetCutoff: "615+",
    seats: 180,
    exam: "NEET (MCC Quota)",
    slug: "seth-gs-medical-college-delhi",
    highlight: "Government | 800-Bed Hospital",
    location: "Kashmere Gate, Delhi",
  },
  {
    rank: 6,
    name: "Smt Kashibai Navale Medical College",
    type: "Private",
    nirf: null,
    naac: "A",
    fees: "₹8L–₹12L/yr",
    neetCutoff: "520+",
    seats: 150,
    exam: "NEET",
    slug: "sknmc-kashibai-navale-medical-college-delhi",
    highlight: "Affordable Private | Good Infrastructure",
    location: "Narhe, Delhi",
  },
  {
    rank: 7,
    name: "Delhi Institute of Medical Sciences (MIMS)",
    type: "Private",
    nirf: null,
    naac: "B++",
    fees: "₹9L–₹13L/yr",
    neetCutoff: "500+",
    seats: 100,
    exam: "NEET",
    slug: "mims-medical-college-delhi",
    highlight: "Growing Campus | Modern Labs",
    location: "Okhla Phase III, Delhi",
  },
  {
    rank: 8,
    name: "Ruby Hall Clinic Medical College",
    type: "Private",
    nirf: null,
    naac: "B+",
    fees: "₹10L–₹15L/yr",
    neetCutoff: "490+",
    seats: 100,
    exam: "NEET",
    slug: "ruby-hall-clinic-medical-college-delhi",
    highlight: "Top-Tier Hospital Training",
    location: "Rohini, Delhi",
  },
  {
    rank: 9,
    name: "Dr. Vithalrao Vikhe Patil Foundation Medical College",
    type: "Private",
    nirf: null,
    naac: "A",
    fees: "₹7L–₹11L/yr",
    neetCutoff: "510+",
    seats: 150,
    exam: "NEET",
    slug: "dvvpf-medical-college-ahmednagar-Delhi",
    highlight: "Affordable | Rural Exposure",
    location: "Ahmednagar (near Delhi)",
  },
  {
    rank: 10,
    name: "Symbiosis Medical College for Women (SMCW)",
    type: "Deemed University",
    nirf: null,
    naac: "A",
    fees: "₹13L–₹17L/yr",
    neetCutoff: "530+",
    seats: 100,
    exam: "NEET",
    slug: "smcw-symbiosis-medical-college-delhi",
    highlight: "Women Only | Knowledge Park Greater Noida Campus",
    location: "Knowledge Park Greater Noida, Delhi",
  },
]

const faqData = [
  {
    question: "Which is the best medical college in Delhi in 2026?",
    answer: "AIIMS Delhi is ranked #4 by NIRF nationally and is the best medical college in Delhi with near-zero fees (₹50,000 total). For civilian government MBBS, Maulana Azad Medical College (NIRF #18) is the top choice with NEET cutoff 625+.",
  },
  {
    question: "What NEET score is required for MBBS in Delhi?",
    answer: "AFMC requires 655+ NEET score plus an AFMC entrance exam. Maulana Azad Medical College requires 625+ for open category (state quota). Private deemed universities in Delhi (DY Patil, Bharati Vidyapeeth) accept NEET scores from 500–550.",
  },
  {
    question: "What is the MBBS fee in Delhi medical colleges 2026?",
    answer: "AFMC: ₹50,000 total; BJ Govt Medical: ₹60K–1.2L/year; Private deemed (DY Patil, Bharati Vidyapeeth): ₹10L–18L/year. SC/ST students at government colleges receive full fee waiver.",
  },
  {
    question: "Is AFMC better than Maulana Azad Medical College Delhi?",
    answer: "AFMC has a higher NIRF rank (#4 vs BJ at #18) and near-zero fees, but requires a separate AFMC entrance test and a commitment to military service post-graduation. Maulana Azad Medical College has a larger intake, better state quota access, and no bond requirements.",
  },
  {
    question: "Which Delhi medical college has the most seats?",
    answer: "Dr. Lady Hardinge Medical College has the highest intake at 250 MBBS seats per year, followed by BJ Government Medical College (200 seats) and Maulana Azad Medical College (200 seats).",
  },
]

export default function Top10MedicalCollegesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Medical Colleges Delhi", url: "/medical-colleges-delhi" },
    { name: "Top 10 Medical Colleges", url: "/top-10-medical-colleges-in-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqData)

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#0A1628] via-[#0D2040] to-[#1a1a2e] text-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <Link href="/medical-colleges-delhi" className="hover:text-white">Medical Colleges Delhi</Link>
              <span>›</span>
              <span className="text-white/80">Top 10 Medical Colleges</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Top 10 Medical Colleges in Delhi 2026
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-6">
              NIRF-ranked top medical colleges in Delhi for MBBS 2026. Compare NEET cutoffs, fees, seats, and career outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "🏥", label: "10 Medical Colleges" },
                { icon: "🩺", label: "NEET 490–655+" },
                { icon: "💰", label: "Fees ₹50K–₹18L/yr" },
                { icon: "📊", label: "NIRF Ranked" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white text-sm">
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* Colleges Table */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top 10 Medical Colleges in Delhi 2026 — NEET Cutoff & Fees</h2>
            <div className="space-y-4">
              {colleges.map((c) => (
                <div key={c.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-extrabold text-red-700 text-sm">#{c.rank}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-base transition-colors">
                          {c.name}
                        </Link>
                        <span className="text-[11px] bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-semibold">{c.type}</span>
                        <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-semibold">NAAC {c.naac}</span>
                        {c.nirf && <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold">NIRF #{c.nirf}</span>}
                      </div>
                      <p className="text-xs text-red-700 font-semibold mb-2">{c.highlight}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                        <MapPin className="w-3 h-3" /> {c.location}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
                        <div><span className="font-semibold">Fees:</span> {c.fees}</div>
                        <div><span className="font-semibold">NEET Cutoff:</span> {c.neetCutoff}</div>
                        <div><span className="font-semibold">Seats:</span> {c.seats}</div>
                        <div><span className="font-semibold">Exam:</span> {c.exam}</div>
                      </div>
                    </div>
                    <Link href={`/colleges/${c.slug}`} className="shrink-0 text-xs font-semibold text-red-700 hover:text-red-800 border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors">
                      View →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle, title: "NEET is Mandatory", desc: "NEET-UG is the only entrance exam for all MBBS admissions in India since 2020. No college can admit students without a valid NEET score." },
              { icon: BookOpen, title: "State vs All-India Quota", desc: "85% of government MBBS seats are filled via state quota (NEET state counselling). 15% are All-India Quota filled by MCC at mcc.nic.in." },
              { icon: ExternalLink, title: "AFMC Requires Separate Test", desc: "AFMC Delhi requires NEET score + AFMC screening test + SSB interview. Successful candidates get near-zero fees but must serve in the Armed Forces for 7 years post-MBBS." },
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
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">FAQs — Top Medical Colleges Delhi 2026</h2>
            <div className="space-y-3">
              {faqData.map((faq) => (
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
            <h2 className="text-xl font-extrabold text-white mb-2">Prepare for NEET & MBBS Admission 2026</h2>
            <p className="text-gray-300 text-sm mb-4">Get free counselling for Delhi MBBS admission, NEET cutoff prediction, and seat availability.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                Book Free Counselling
              </Link>
              <Link href="/medical-colleges-delhi" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                All Medical Colleges →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}