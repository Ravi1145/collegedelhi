import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from "@/lib/seo"
import { CheckCircle, MapPin, ExternalLink, BookOpen } from "lucide-react"
import ReviewedByline from "@/components/seo/ReviewedByline"

const LAST_UPDATED = "June 2026"

export const revalidate = 300

export const metadata: Metadata = genMeta({
  title: "Top Medical Colleges in Delhi 2026 (NIRF Ranked)",
  description:
    "Top government medical colleges in Delhi 2026: AIIMS Delhi (NIRF #1), Vardhman Mahavir Medical College, ABVIMS — NEET admission, fees, and hospital attachments",
  path: "/top-10-medical-colleges-in-delhi",
  keywords: [
    "top medical colleges in Delhi",
    "best medical colleges in Delhi",
    "best mbbs colleges Delhi ranking",
    "neet colleges Delhi 2026",
    "AIIMS Delhi NIRF rank",
  ],
})

const colleges = [
  {
    rank: 1,
    name: "AIIMS Delhi",
    type: "Government (Central)",
    nirf: 1,
    naac: "A++",
    fees: "₹1,628–₹50,000 (total course)",
    neetCutoff: "Among the highest in India (AIQ)",
    seats: 125,
    exam: "NEET UG (All India Quota)",
    slug: "aiims-delhi",
    highlight: "NIRF #1 Medical | Near-Zero Fees",
    location: "Ansari Nagar, New Delhi",
  },
  {
    rank: 2,
    name: "Vardhman Mahavir Medical College (Safdarjung Hospital)",
    type: "Government (Delhi)",
    nirf: null,
    naac: "A",
    fees: "₹1.15L–₹2.65L/yr",
    neetCutoff: "Competitive — Delhi govt quota",
    seats: null,
    exam: "NEET UG (Delhi state quota)",
    slug: "vardhman-mahavir-medical-college",
    highlight: "Govt | Attached to Safdarjung Hospital",
    location: "Safdarjung, New Delhi",
  },
  {
    rank: 3,
    name: "Atal Bihari Vajpayee Institute of Medical Sciences (Dr. RML Hospital)",
    type: "Government (Delhi)",
    nirf: null,
    naac: "A",
    fees: "₹51K–₹3.75L/yr",
    neetCutoff: "Competitive — Delhi govt quota",
    seats: null,
    exam: "NEET UG (Delhi state quota)",
    slug: "atal-bihari-vajpayee-institute-of-medical-sciences-and-dr-ram-manohar-lohia-hospital",
    highlight: "Govt | Attached to RML Hospital",
    location: "New Delhi",
  },
]

const faqData = [
  {
    question: "Which is the best medical college in Delhi in 2026?",
    answer: "AIIMS Delhi is ranked NIRF #1 in Medical nationally and is the best medical college in Delhi, with among the most affordable MBBS fees in India (₹1,628–₹50,000 total course). Admission is through NEET UG All India Quota and requires one of the highest NEET ranks in the country.",
  },
  {
    question: "What NEET score is required for MBBS in Delhi government colleges?",
    answer: "NEET cutoffs for AIIMS Delhi, Vardhman Mahavir Medical College, and Atal Bihari Vajpayee Institute of Medical Sciences vary each year and are among the most competitive in India. Check the official MCC (All India Quota, for AIIMS Delhi) and Delhi DGHS (state quota) cutoff data for the current year rather than relying on past-year estimates.",
  },
  {
    question: "What is the MBBS fee at Delhi's government medical colleges?",
    answer: "AIIMS Delhi's entire MBBS course costs approximately ₹1,628–₹50,000 — among the most affordable in India. Vardhman Mahavir Medical College charges roughly ₹1.15L–₹2.65L/year, and Atal Bihari Vajpayee Institute of Medical Sciences charges roughly ₹51K–₹3.75L/year.",
  },
  {
    question: "What hospitals are Delhi's government medical colleges attached to?",
    answer: "AIIMS Delhi has its own dedicated hospital campus. Vardhman Mahavir Medical College is attached to Safdarjung Hospital, one of Delhi's largest hospitals. Atal Bihari Vajpayee Institute of Medical Sciences is attached to Dr. Ram Manohar Lohia (RML) Hospital.",
  },
  {
    question: "How many MBBS seats does AIIMS Delhi have?",
    answer: "AIIMS Delhi has approximately 125 MBBS seats per year, filled entirely through NEET UG All India Quota counselling. Seat counts at Vardhman Mahavir Medical College and Atal Bihari Vajpayee Institute of Medical Sciences are set annually — check official NMC/MCC notifications for current numbers.",
  },
]

export default function Top10MedicalCollegesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Medical Colleges Delhi", url: "/medical-colleges-delhi" },
    { name: "Top 10 Medical Colleges", url: "/top-10-medical-colleges-in-delhi" },
  ])
  const faqSchema = generateFAQSchema(faqData)

  const articleSchema = generateArticleSchema({
    title: "Top Medical Colleges in Delhi 2026",
    description: "Top government medical colleges in Delhi 2026: AIIMS Delhi (NIRF #1), Vardhman Mahavir Medical College, ABVIMS — NEET admission, fees, and hospital",
    author: "CollegeDelhi Editorial Team",
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
    url: "/top-10-medical-colleges-in-delhi",
    category: "Medical",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
            <ReviewedByline lastUpdated={LAST_UPDATED} />
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Top Medical Colleges in Delhi 2026
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-6">
              Delhi's verified government medical colleges for MBBS 2026. Compare NIRF rank, fees, hospital attachments, and admission routes.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "", label: "Verified Govt Colleges" },
                { icon: "", label: "NEET UG Only" },
                { icon: "", label: "Fees from ₹1,628" },
                { icon: "", label: "NIRF Ranked" },
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Top Medical Colleges in Delhi 2026 — NIRF Rank & Fees</h2>
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
              { icon: ExternalLink, title: "AIIMS Delhi: All India Quota", desc: "AIIMS Delhi MBBS seats are filled entirely through NEET UG All India Quota counselling conducted by the Medical Counselling Committee (MCC) — no separate entrance test is required." },
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