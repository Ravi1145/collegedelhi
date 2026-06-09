import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Miranda House vs LSR 2026 — Which DU College is Better?",
  description: "Miranda House vs Lady Shri Ram College (LSR) detailed comparison 2026: CUET cutoff, NAAC grade, courses, placement, campus life, hostel. Which is better for Arts & Science? Honest verdict.",
  path: "/miranda-house-vs-lsr",
  keywords: [
    "Miranda House vs LSR", "Miranda House vs Lady Shri Ram College",
    "Miranda House vs LSR which is better 2026", "miranda house lsr comparison",
    "best du college for women delhi", "miranda house cuet cutoff 2026",
    "lsr cuet cutoff 2026", "miranda house vs lsr arts",
    "du north campus vs south campus women", "best women college du delhi",
  ],
})
export const revalidate = 300

const compData = [
  { param: "Full Name", mh: "Miranda House", lsr: "Lady Shri Ram College for Women" },
  { param: "Established", mh: "1948", lsr: "1956" },
  { param: "NAAC Grade", mh: "A++ (highest in India)", lsr: "A++" },
  { param: "NIRF (Colleges Rank)", mh: "#1 College India (multiple years)", lsr: "Top 5 Colleges India" },
  { param: "Location", mh: "North Campus, University Road", lsr: "Lajpat Nagar IV, South Delhi" },
  { param: "Campus Type", mh: "Women's College", lsr: "Women's College" },
  { param: "Strong Streams", mh: "Science, Arts, Chemistry, Physics", lsr: "Social Sciences, Economics, English, Journalism" },
  { param: "CUET Cutoff (BA Hons)", mh: "99+ percentile", lsr: "99+ percentile" },
  { param: "CUET Cutoff (BSc Hons)", mh: "99+ percentile", lsr: "Not applicable (no science)" },
  { param: "Annual Fees", mh: "₹12K–40K/yr", lsr: "₹12K–38K/yr" },
  { param: "Hostel", mh: "Yes — limited seats, North Campus hostel", lsr: "Yes — limited seats, South Campus hostel" },
  { param: "Top Courses", mh: "BSc Chemistry/Physics, BA English, BA History", lsr: "BA Economics, BA English, Journalism, Psychology" },
  { param: "Alumni", mh: "Sheila Dikshit, Mrinal Pande, academic leaders", lsr: "Mira Nair, Barkha Dutt, Sheela Bhatt, journalists" },
  { param: "Campus Culture", mh: "Academic + scientific research culture", lsr: "Journalism, media, social activism, debate culture" },
  { param: "Placement (Corporate)", mh: "₹6–10 LPA (those who take placement)", lsr: "₹8–12 LPA (journalism/media focused)" },
]

const faqs = [
  { question: "Is Miranda House better than LSR (Lady Shri Ram College)?", answer: "Miranda House and LSR are both NAAC A++ — India's two best women's colleges. Miranda House is consistently ranked India's #1 college overall (NIRF) and is stronger in Science (BSc Chemistry, Physics, Botany, Zoology) and equal in Arts. LSR is stronger in Social Sciences (BA Economics, Journalism, Psychology) and has produced more media/journalism alumni. If your stream is Science, Miranda House is the choice. For Social Sciences and Journalism, LSR is equally or more prestigious." },
  { question: "What CUET score is needed for Miranda House vs LSR?", answer: "Both Miranda House and LSR require near-perfect CUET scores for popular programs. Miranda House BA (Hons) English — 99+ percentile. Miranda House BSc (Hons) Chemistry/Physics — 99+ percentile. LSR BA (Hons) Economics — 99+ percentile. LSR BA (Hons) English — 99+ percentile. LSR BA (Hons) Journalism — 98-99 percentile. The cutoffs are essentially the same for both colleges in popular programs. Miranda House uniquely offers Science programs which LSR does not." },
  { question: "What is the difference between Miranda House North Campus and LSR South Campus?", answer: "Miranda House is on DU North Campus (University Road area, Yellow Line — Delhi University station) in a traditional residential campus setting. LSR is on DU South Campus (Lajpat Nagar IV, near Lajpat Nagar metro, Yellow Line). North Campus has a more vibrant, festival-heavy college culture (Mecca Fest nearby). South Campus has a more professional atmosphere closer to Delhi's corporate hubs. Both have excellent hostel facilities (very limited seats — apply immediately after admission)." },
  { question: "Which DU women's college is better for placement — Miranda House or LSR?", answer: "LSR has slightly better corporate placement outcomes because of its focus on Economics, Journalism, and Social Sciences — programs that attract HR, consulting, and media company recruitment. LSR alumni include Barkha Dutt (journalist), Mira Nair (filmmaker). Miranda House alumni tend to pursue research, academia, and civil services more than corporate roles. For journalism and media: LSR. For research/academia: Miranda House. For corporate: both are equivalent." },
  { question: "Which college should I prefer in DU CSAS — Miranda House or LSR?", answer: "In DU CSAS preference filling: If you want Science programs (BSc Chemistry, Physics, Botany), put Miranda House first — LSR does not offer these. If you want Arts/Social Sciences and get both — put LSR first for Economics, Journalism, Psychology (LSR's speciality), and Miranda House first for English, History, Political Science. If you get either college for an Arts program, both are life-changing and essentially equivalent for career outcomes. Don't lose either over preference ordering — fill both high." },
]

export default function MirandaHousevsLSRPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Compare", url: "/compare" }, { name: "Miranda House vs LSR", url: "/miranda-house-vs-lsr" }])

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#0A1628] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/compare" className="hover:text-white">Compare</Link><span>/</span>
            <span className="text-white">Miranda House vs LSR</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Miranda House vs LSR 2026 — Which DU College is Better?</h1>
          <p className="text-blue-200 text-base max-w-3xl">India's two top women's colleges — Miranda House (India's #1 college, NAAC A++) and Lady Shri Ram College (NAAC A++) — compared on CUET cutoff, streams, alumni, placement, and campus culture.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8">
          <p className="text-sm font-bold text-amber-900 mb-1">Quick Verdict</p>
          <p className="text-sm text-amber-800"><strong>Miranda House for Science</strong> (only college offering BSc Hons in Science) and equal for Arts. <strong>LSR for Journalism/Media/Economics</strong> (stronger alumni and program focus). Both are NAAC A++ — India's best. In DU CSAS, fill both high based on your subject preference.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Miranda House vs LSR — Full Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628] text-white">
                <th className="px-4 py-3 text-left font-semibold text-xs w-1/3">Parameter</th>
                <th className="px-4 py-3 text-center font-semibold text-xs">Miranda House</th>
                <th className="px-4 py-3 text-center font-semibold text-xs">LSR</th>
              </tr>
            </thead>
            <tbody>
              {compData.map((row, i) => (
                <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.param}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.mh}</td>
                  <td className="px-4 py-3 text-center text-gray-800 text-xs">{row.lsr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">When to Choose Which</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Choose Miranda House if...</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2"><span className="text-green-600">+</span>Science stream — Miranda House offers BSc Hons (Chemistry, Physics, Botany) that LSR does not</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>You want India's #1 ranked college brand (NIRF consistently)</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>Arts — English, History, Hindi (Miranda House equally strong)</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>You prefer North Campus lively college culture and Mecca Fest proximity</li>
            </ul>
          </div>
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
            <h3 className="font-bold text-rose-900 mb-3">Choose LSR if...</h3>
            <ul className="space-y-2 text-sm text-rose-800">
              <li className="flex gap-2"><span className="text-green-600">+</span>Journalism/Mass Communication career — LSR's JMC alumni network is unmatched</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>BA Economics — LSR's Economics program feeds FMS, MDI, and top MBA schools</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>Psychology — LSR has a strong, dedicated Psychology program</li>
              <li className="flex gap-2"><span className="text-green-600">+</span>South Delhi proximity — Lajpat Nagar location closer to corporate Delhi</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs — Miranda House vs LSR</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
              <summary className="font-semibold text-gray-900 text-sm cursor-pointer list-none flex justify-between">{f.question}<span className="text-gray-400 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ label: "SRCC vs Hindu College", href: "/srcc-vs-hindu-college" }, { label: "Colleges in North Delhi", href: "/colleges-north-delhi" }, { label: "Colleges in South Delhi", href: "/colleges-south-delhi" }, { label: "Low Fee Colleges Delhi", href: "/low-fee-colleges-delhi" }, { label: "Government Colleges Delhi", href: "/government-colleges-delhi" }].map(l => (
            <Link key={l.href} href={l.href} className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white"><p className="font-bold">Need DU CSAS preference strategy for Miranda House or LSR?</p><p className="text-blue-200 text-sm">Free counselling — we'll help you optimise your college-course preferences.</p></div>
          <Link href="/counselling" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">Book Free Call</Link>
        </div>
      </div>
    </>
  )
}
