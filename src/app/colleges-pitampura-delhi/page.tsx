import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Colleges in Pitampura, Delhi 2026 | Engineering, BCA & DU Colleges",
  description: "Best colleges in Pitampura, Delhi 2026 — MAIT, VIPS, Delhi Technical Campus, and DU colleges near Pitampura. Red Line metro access, fees, BCA/BTech/MBA admission guide.",
  path: "/colleges-pitampura-delhi",
  keywords: [
    "colleges in pitampura delhi", "pitampura delhi colleges 2026",
    "mait pitampura rohini engineering", "vips pitampura delhi",
    "colleges near pitampura metro", "engineering colleges pitampura delhi",
    "ip university colleges pitampura", "bca colleges pitampura delhi",
    "best colleges pitampura north west delhi",
  ],
})
export const revalidate = 300

const colleges = [
  { name: "MAIT – Maharaja Agrasen Institute of Technology", location: "Sector 22, Rohini (near Pitampura)", naac: "A", fees: "₹1.6L–2.1L/yr", placement: "₹7.5 LPA avg", exam: "IPU CET / JEE Main", slug: "mait-maharaja-agrasen-institute-technology", highlight: "Best Engineering Near Pitampura" },
  { name: "VIPS – Vivekananda Institute of Professional Studies", location: "AU Block, Pitampura", naac: "A", fees: "₹80K–1.5L/yr", placement: "₹5.5 LPA avg", exam: "IPU CET", slug: "vips-vivekananda-institute-professional-studies", highlight: "Law + BCA + BA Programs" },
  { name: "Delhi Technical Campus", location: "28/1, Knowledge Park III (Pitampura area)", naac: "B+", fees: "₹1L–1.5L/yr", placement: "₹4.5 LPA avg", exam: "IPU CET", slug: "delhi-technical-campus-pitampura", highlight: "Budget Engineering Option" },
  { name: "Maharaja Surajmal Institute (MSI)", location: "C-4, Janakpuri (near Pitampura metro belt)", naac: "A", fees: "₹1L–1.5L/yr", placement: "₹5 LPA avg", exam: "IPU CET", slug: "maharaja-surajmal-institute-janakpuri", highlight: "Good IP Univ Engineering" },
  { name: "Shaheed Rajguru College of Applied Sciences – DU", location: "Vasant Vihar (near Pitampura zone)", naac: "A+", fees: "₹12K–35K/yr", placement: "DU programs", exam: "CUET", slug: "shaheed-rajguru-college-du", highlight: "NAAC A+ DU Women's Science" },
]

const faqs = [
  { question: "What are the best colleges in Pitampura, Delhi?", answer: "MAIT (Maharaja Agrasen Institute of Technology, Rohini Sector 22) is the best engineering college near Pitampura — NAAC A, IPU University, ₹7.5 LPA average placement. VIPS (Vivekananda Institute, Pitampura) is the best for BCA, law, and management programs. Both are accessible via Red Line metro (Pitampura and Kohat Enclave stations). For DU programs, Shaheed Rajguru College (Women's, NAAC A+) is nearby in the Vasant Vihar area." },
  { question: "Which metro stations are near colleges in Pitampura?", answer: "Pitampura is served by the Red Line (Line 5): Kohat Enclave station is the primary station for VIPS and nearby colleges. Pitampura station is also nearby. MAIT in Rohini Sector 22 is closest to Rohini East station (Red Line, Line 5). The Red Line connects Pitampura to Kashmere Gate in 20 minutes, where you can transfer to Yellow or Blue Lines. Excellent connectivity to Central Delhi and DTU campus." },
  { question: "Is MAIT better than BPIT for engineering?", answer: "MAIT (Maharaja Agrasen, Rohini) and BPIT (Bhagwan Parshuram, Rohini Sector 17) are both IP University affiliated colleges near Pitampura. MAIT has marginally better placements (₹7.5 LPA avg vs ₹7 LPA at BPIT) and slightly higher cutoffs in IPU CET. Both are NAAC A accredited. For CS/IT branch, MAIT is preferred. For non-CS branches (ECE, Mechanical), both are equivalent — prefer whichever branch you get at a good rank." },
  { question: "What courses does VIPS Pitampura offer?", answer: "VIPS (Vivekananda Institute of Professional Studies, Pitampura) offers: BA LLB (5 years, integrated law), LLB (3 years), BCA (3 years), B.Tech CSE (4 years), BBA, and MBA programs. All are IP University affiliated. Admission through IPU CET. VIPS is particularly known for its law programs — BA LLB at VIPS has strong moot court and legal internship culture. BCA and BTech placement averages: ₹5–5.5 LPA." },
]

export default function CollegesPitampuraDelhiPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Colleges", url: "/colleges" }, { name: "Colleges in Pitampura Delhi", url: "/colleges-pitampura-delhi" }])
  const itemListSchema = generateItemListSchema(colleges.map(c => ({ name: c.name, url: `/colleges/${c.slug}`, description: `NAAC ${c.naac} | ${c.fees} | ${c.placement}` })))

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link><span>/</span>
            <span className="text-white">Pitampura Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Colleges in Pitampura, Delhi 2026</h1>
          <p className="text-blue-200 text-base max-w-3xl mb-6">Pitampura and nearby Rohini area hosts MAIT, VIPS, Delhi Technical Campus, and MSI — offering Engineering, BCA, Law, and MBA via IP University. Red Line metro (Kohat Enclave, Pitampura stations) connects to all of Delhi.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-blue-900 mb-1">Quick Answer</p>
          <p className="text-sm text-blue-800">Best colleges near Pitampura Delhi: <strong>MAIT</strong> (Rohini, NAAC A, best engineering, ₹7.5 LPA avg), <strong>VIPS</strong> (Pitampura, BCA + Law + BTech), <strong>MSI</strong> (Janakpuri, IPU engineering). Admission via IPU CET or JEE Main.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Colleges in Pitampura, Delhi 2026</h2>
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
          {[{ label: "Colleges in Rohini Delhi", href: "/colleges-rohini-delhi" }, { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" }, { label: "DTU vs NSUT", href: "/dtu-vs-nsut" }, { label: "Predictor", href: "/predictor" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need guidance for Pitampura area college admissions?</p><p className="text-blue-200 text-sm">Free IPU CET and CUET counselling for Pitampura colleges.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Free Counselling</Link>
        </div>
      </div>
    </>
  )
}
