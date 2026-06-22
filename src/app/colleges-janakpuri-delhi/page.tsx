import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Janakpuri, Delhi 2026 | IGDTUW, IP Colleges & DU",
  description: "Best colleges in Janakpuri, Delhi 2026 — IGDTUW (women's engineering), Vivekananda College DU, VIPS, and IP University affiliated colleges",
  path: "/colleges-janakpuri-delhi",
  keywords: [
    "colleges in janakpuri delhi", "janakpuri delhi colleges 2026",
    "igdtuw janakpuri delhi", "vivekananda college janakpuri du",
    "engineering colleges janakpuri delhi", "ip university colleges janakpuri",
    "colleges near janakpuri west metro", "colleges near janakpuri east metro",
    "best colleges janakpuri west delhi", "affordable colleges janakpuri delhi",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "IGDTUW – Indira Gandhi Delhi Technical University for Women", location: "Kashmere Gate / Shastri Park area (near Janakpuri zone)", naac: "A+", fees: "₹1.2L–1.8L/yr", placement: "₹14 LPA avg", exam: "JEE Main (JAC Delhi)", slug: "igdtuw-delhi", highlight: "Best Women's Engineering College Delhi" },
  { name: "Vivekananda College – Delhi University", location: "Vivek Vihar, West Delhi (Janakpuri belt)", naac: "A", fees: "₹10K–35K/yr", placement: "DU programs", exam: "CUET", slug: "vivekananda-college-delhi-university", highlight: "DU College | Affordable" },
  { name: "VIPS – Vivekananda Institute of Professional Studies", location: "AU Block, Pitampura (near Janakpuri)", naac: "A", fees: "₹80K–1.5L/yr", placement: "₹5.5 LPA avg", exam: "IPU CET", slug: "vips-vivekananda-institute-professional-studies", highlight: "IP University | Law + Engg" },
  { name: "Swami Shraddhanand College – Delhi University", location: "Alipur Road, North West Delhi", naac: "A", fees: "₹10K–30K/yr", placement: "DU programs", exam: "CUET", slug: "swami-shraddhanand-college-delhi-university", highlight: "DU Men's College | Science" },
  { name: "Deen Dayal Upadhyaya College – Delhi University", location: "Dwarka Sector 3 (West Delhi zone)", naac: "A+", fees: "₹10K–35K/yr", placement: "DU programs", exam: "CUET", slug: "ddu-college-delhi-university", highlight: "NAAC A+ | Science & Commerce" },
]

const faqs = [
  { question: "Which is the best college in Janakpuri, Delhi?", answer: "IGDTUW (Indira Gandhi Delhi Technical University for Women) is the most prestigious institution in the Janakpuri/West Delhi area — a government engineering college (NIRF 78, NAAC A+) with ₹14 LPA average placement and JEE Main admission through JAC Delhi. For DU programs, Vivekananda College (NAAC A) and DDU College (NAAC A+) are well-respected. VIPS (IP University) offers law and engineering programs in the area." },
  { question: "Which metro stations are near colleges in Janakpuri?", answer: "Janakpuri has excellent Blue Line (Line 3) coverage: Janakpuri West, Janakpuri East, Uttam Nagar East/West, and Dwarka Mor stations. IGDTUW's main campus is in Kashmere Gate area but its West Campus is near Janakpuri. Colleges on the Janakpuri–Vikaspuri belt are within 1–3 km of Janakpuri metro stations. The Blue Line connects directly to Rajiv Chowk in 20–25 minutes and to NSUT Dwarka in 15 minutes." },
  { question: "What is the admission process for IGDTUW 2026?", answer: "IGDTUW (the only government women's engineering university in Delhi) admits through JEE Main (JAC Delhi counselling). JEE Main cutoff for IGDTUW CSE: 97+ percentile (General category women). For ECE: 94-96 percentile. Registration at jacdelhi.admissions.nic.in after JEE Main results (May-June 2026). Only women candidates eligible. Hostel available on campus — apply immediately after admission confirmation." },
  { question: "What DU colleges are near Janakpuri in West Delhi?", answer: "DU-affiliated colleges in the West Delhi/Janakpuri area: Vivekananda College (Vivek Vihar), Deen Dayal Upadhyaya College (Dwarka/Sector 3), Swami Shraddhanand College (Alipur), Shaheed Rajguru College (Vasant Vihar area), and Bhim Rao Ambedkar College (Dilshad Garden area). All require CUET 2026 for UG admission. CUET cutoffs range from 88-98 percentile depending on program and college." },
]

export default function CollegesJanakpuriDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Colleges", url: "/colleges" }, { name: "Colleges in Janakpuri Delhi", url: "/colleges-janakpuri-delhi" }])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.placement}` })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link><span>/</span>
            <span className="text-white">Janakpuri Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Colleges in Janakpuri, Delhi 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">Janakpuri and West Delhi area has IGDTUW (India's best women's engineering college), several DU colleges, and IP University institutions — all Blue Line metro-accessible.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ value: "IGDTUW", label: "Best Engg. College" }, { value: "₹14 LPA", label: "IGDTUW Avg Pkg" }, { value: "Blue Line", label: "Metro Access" }, { value: "₹10K/yr", label: "DU Min. Fees" }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-xl font-extrabold text-white">{s.value}</p><p className="text-xs text-blue-300 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800"><strong>IGDTUW</strong> (government women's engineering, NAAC A+, ₹14 LPA avg) is the best college in the Janakpuri/West Delhi zone. For DU programs, <strong>DDU College</strong> (NAAC A+) and <strong>Vivekananda College</strong> are strong options. All require CUET/JEE Main.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Janakpuri, West Delhi 2026</h2>
        <div className="space-y-3 mb-10">
          {colleges.map((c) => (
            <div key={c.slug} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <Link href={`/colleges/${c.slug}`} className="font-bold text-gray-900 hover:text-red-700 text-sm">{c.name}</Link>
              <div className="text-[10px] text-red-600 font-medium mt-0.5">{c.highlight}</div>
              <p className="text-xs text-gray-500 mt-1">{c.location}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">NAAC {c.naac}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c.fees}</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{c.placement}</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{c.exam}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">{f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ label: "Colleges in Dwarka Delhi", href: "/colleges-dwarka-delhi" }, { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" }, { label: "Government Colleges Delhi", href: "/government-colleges-delhi" }, { label: "JEE Predictor", href: "/predictor" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need guidance for IGDTUW or West Delhi college admissions?</p><p className="text-blue-200 text-sm">Free JAC Delhi and CUET counselling — 100% free.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
