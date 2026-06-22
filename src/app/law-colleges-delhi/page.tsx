import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, generateSpeakableSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Law Colleges in Delhi 2026",
  description: "Top 8 law colleges in Delhi 2026 — NLU Delhi, DU Law Faculty, Jamia Law, SLS Delhi",
  path: "/law-colleges-delhi",
  keywords: [
    "law colleges in Delhi 2026",
    "best law college Delhi",
    "llb colleges Delhi fees",
    "clat cutoff Delhi 2026",
    "NLU Delhi",
    "ba llb colleges Delhi",
    "du law faculty Delhi",
    "law colleges Delhi placements",
    "integrated law course Delhi",
    "llm colleges Delhi",
    "ip university law colleges Delhi",
    "jamia law college Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "Faculty of Law, Delhi University (DU)", type: "Government (Central University)", naac: "A++", fees: "₹20K–₹35K/yr", program: "LLB (3yr), LLM", seats: 900, exam: "DU LLB Entrance / CUET PG", slug: "faculty-of-law-delhi-university", highlight: "India's Oldest Law School | DU Brand | ₹20K fees" },
  { rank: 2, name: "Campus Law Centre (CLC), DU", type: "Government (Central University)", naac: "A++", fees: "₹20K–₹35K/yr", program: "LLB (3yr)", seats: 1800, exam: "DU LLB Entrance Test", slug: "campus-law-centre-du-delhi", highlight: "Largest DU Law College | 1800 seats | Evening option" },
  { rank: 3, name: "NLU Delhi — National Law University Delhi", type: "Government (NLU)", naac: "–", fees: "₹2L–₹2.5L/yr", program: "BA LLB (5yr)", seats: 120, exam: "CLAT top 2000 AIR", slug: "mnlu-delhi-national-law-university-delhi", highlight: "NLU Status | CLAT Admission | Most Prestigious" },
  { rank: 4, name: "Symbiosis Law School Delhi (SLS)", type: "Deemed University", naac: "A+", fees: "₹1.8L–₹2.5L/yr", program: "BA LLB, BBA LLB, LLM", seats: 200, exam: "SLAT score", slug: "sls-symbiosis-law-school-delhi", highlight: "Top 5 Law School India | Best Private Placements ₹18 LPA" },
  { rank: 5, name: "Faculty of Law, Jamia Millia Islamia", type: "Central University", naac: "A++", fees: "₹18K–₹30K/yr", program: "LLB (3yr), LLM, PhD", seats: 240, exam: "Jamia Entrance Test", slug: "jamia-millia-islamia-law-delhi", highlight: "Central Univ | Low Fees | Strong Alumni" },
  { rank: 6, name: "ILS Law College, Delhi", type: "Government-aided", naac: "A", fees: "₹20K–₹40K/yr", program: "BA LLB (5yr), LLM", seats: 180, exam: "MH-CET Law / Merit", slug: "ils-law-college-delhi", highlight: "Founded 1924 | Most Prestigious Govt Option" },
  { rank: 7, name: "GGSIPU (IP University) Law Faculty", type: "State University", naac: "A+", fees: "₹75K–₹1L/yr", program: "BA LLB (5yr), LLM", seats: 600, exam: "IPU CET Law", slug: "ipu-law-faculty-delhi", highlight: "IP University Brand | 600 Seats | Delhi Based" },
  { rank: 8, name: "Bharati Vidyapeeth Law College, Delhi", type: "Private", naac: "A", fees: "₹60K–₹90K/yr", program: "BA LLB, LLB (3yr)", seats: 120, exam: "MH-CET Law", slug: "bharati-vidyapeeth-law-college-delhi", highlight: "Affordable Private | Good Faculty" },
]

const faqs = [
  {
    question: "Which is the best law college in Delhi 2026?",
    answer: "Faculty of Law, Delhi University is the best value option (₹20K/yr, 900 seats, DU brand). NLU Delhi is the most prestigious — it is a National Law University with CLAT-based admission (top 2000 AIR needed). Symbiosis Law School Delhi has the best private-sector placements (₹18 LPA top offer). For maximum seats at low cost, Campus Law Centre DU (1800 seats, ₹20K/yr) is Delhi's largest law college.",
  },
  {
    question: "What is the fee for law colleges in Delhi?",
    answer: "Law college fees in Delhi 2026 range widely. Government colleges: DU Law Faculty & CLC (₹20–35K/yr), ILS Law College (₹20–40K/yr), Jamia Law (₹18–30K/yr). NLU Delhi (₹2–2.5L/yr). Private deemed: SLS Delhi (₹1.8–2.5L/yr), Bharati Vidyapeeth (₹60–90K/yr). IP University law colleges (₹75K–1L/yr). Total 5-year BA LLB cost: ₹1L at government to ₹12.5L at private.",
  },
  {
    question: "What entrance exam is needed for law colleges in Delhi?",
    answer: "Different exams for different colleges: CLAT (Common Law Admission Test) — for NLU Delhi, top 2000 AIR needed. DU LLB Entrance Test — for Faculty of Law DU and Campus Law Centre (900–1800 seats). Jamia Law Entrance Test — for Jamia Millia Islamia. SLAT — for SLS Delhi. IPU CET Law — for IP University law colleges. MH-CET Law — for Bharati Vidyapeeth and ILS. CUET PG — for LLM at DU.",
  },
  {
    question: "What are career opportunities after law from Delhi colleges?",
    answer: "Law graduates from Delhi colleges can become: Advocates at Delhi High Court / Supreme Court (India's legal capital), corporate lawyers at MNCs & law firms (AZB, Trilegal, Khaitan — ₹6–18 LPA), legal officers in banks & PSUs, judicial services (Delhi Higher Judicial Service), civil services (IAS/IPS with law background), legal departments of startups. Delhi's proximity to Supreme Court and 30,000+ law firms makes it India's best city for legal careers.",
  },
  {
    question: "Which law college in Delhi has the best placements?",
    answer: "Symbiosis Law School Delhi (SLS) leads private sector placements — average ₹6–8 LPA, top offers ₹18 LPA from AZB & Partners, Trilegal, Khaitan & Co. NLU Delhi places graduates in top Tier-1 law firms. DU Law Faculty and Campus Law Centre graduates frequently join Delhi High Court chambers for litigation careers. For corporate law, NLU Delhi and SLS are the top choices.",
  },
  {
    question: "What is the CLAT cutoff for NLU Delhi 2026?",
    answer: "NLU Delhi (Delhi National Law University) requires a CLAT rank of approximately 1000–2000 AIR in the General category for BA LLB admission. OBC candidates get rank relaxation. SC/ST candidates have approximately 4000–5000 AIR cutoff. CLAT exam is held in December 2025 for 2026 admissions. Apply at consortiumofnlus.ac.in after CLAT results.",
  },
  {
    question: "How to get admission in DU Law Faculty 2026?",
    answer: "Step 1: Appear for DU LLB Entrance Test (May–June 2026) — tests logical reasoning, legal awareness, and language comprehension. Step 2: Secure admission based on merit. Step 3: Apply to Faculty of Law or Campus Law Centre on the DU admissions portal. DU Law Faculty has 900 seats with lower cutoff than NLU. Fees: ₹20,000–35,000/yr. Apply at du.ac.in.",
  },
  {
    question: "Is a 5-year integrated law course better than 3-year LLB in Delhi?",
    answer: "5-year BA LLB (after Class 12) gives both a BA degree and law degree, is internationally recognised, and lets you enter the legal workforce 2 years earlier. 3-year LLB (after graduation) suits engineering, commerce, or arts graduates adding a law qualification. Both qualify for Bar Council enrolment and judicial services. NLU Delhi and SLS Delhi only offer the 5-year BA LLB program.",
  },
  {
    question: "Which Delhi law college is best for corporate law jobs?",
    answer: "SLS Delhi (Symbiosis) is best for corporate law placements — Tier-1 law firms and MNC legal departments actively recruit. NLU Delhi graduates are preferred by top Delhi NCR law firms like AZB, Cyril Amarchand Mangaldas, and Shardul Amarchand. DU Law Faculty alumni dominate High Court and Supreme Court litigation. For Tier-2 law firms, IP University law colleges offer strong industry connections.",
  },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Law Colleges Delhi", url: "https://www.collegedelhi.com/law-colleges-delhi" },
]

const BASE_URL = "https://www.collegedelhi.com"

export const revalidate = 86400

export default function LawCollegesDELHI() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumb)
  const speakableSchema = generateSpeakableSchema(`${BASE_URL}/law-colleges-delhi`, ["h1", "h2", "#quick-answer"])

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "LLB / BA LLB — Law Courses in Delhi",
    description: "3-year LLB (after graduation) and 5-year BA LLB (after Class 12) offered by NLU Delhi, DU Law Faculty, SLS Delhi, Jamia Law, and 8+ colleges in Delhi. Admitted via CLAT, DU LLB Entrance, SLAT, IPU CET Law.",
    provider: { "@type": "Organization", name: "CollegeDelhi.com", sameAs: BASE_URL },
    timeRequired: "P3Y",
    url: `${BASE_URL}/law-colleges-delhi`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: 18000,
      priceSpecification: { "@type": "PriceSpecification", minPrice: 18000, maxPrice: 250000, priceCurrency: "INR" },
    },
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Admission in Law Colleges in Delhi 2026",
    description: "Step-by-step admission guide for NLU Delhi (CLAT), DU Law Faculty (DU Entrance), SLS Delhi (SLAT), and IP University law colleges.",
    totalTime: "P6M",
    step: [
      { "@type": "HowToStep", position: 1, name: "Choose Your Law Program & Exam", text: "Decide between 5-year BA LLB (after Class 12) or 3-year LLB (after graduation). Then choose college: NLU Delhi (CLAT, top 2000 AIR), DU Law Faculty (DU Entrance, 900 seats, ₹20K/yr), SLS Delhi (SLAT, private, ₹1.8L/yr), Jamia Law (Jamia Entrance, central univ, ₹18K/yr), IP University Law (IPU CET Law, ₹75K/yr)." },
      { "@type": "HowToStep", position: 2, name: "Appear for Entrance Exam", text: "CLAT (December 2025) for NLU Delhi. DU LLB Entrance Test (May–June 2026) for DU Law Faculty & Campus Law Centre. SLAT (May 2026) for SLS Delhi. Jamia Entrance Test (April–May 2026) for Jamia Law. IPU CET Law (April 2026) for IP University colleges." },
      { "@type": "HowToStep", position: 3, name: "Apply on College Portal After Results", text: "After results, register on du.ac.in (DU colleges), consortiumofnlus.ac.in for NLU, set.ac.in for SLS, or Jamia's admissions portal. Submit Class 10, 12 marksheets, graduation marksheets (for 3-yr LLB), category certificate, and domicile certificate." },
      { "@type": "HowToStep", position: 4, name: "Accept Seat & Pay Fees", text: "Accept allotment, attend document verification, and pay fees within the deadline. DU law colleges: ₹20K–35K/yr. NLU Delhi: ₹2–2.5L/yr. SLS: ₹1.8–2.5L/yr. Enrol with Bar Council of India after completing the degree to practice as an advocate." },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Law Colleges in Delhi 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${BASE_URL}/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Law Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Law Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Compare top LLB &amp; BA LLB colleges in Delhi — NLU Delhi, DU Law Faculty, SLS, Jamia Law. Fees ₹18K–₹2.5L/yr, CLAT &amp; DU Entrance cutoffs, placement data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "8 Top Law Colleges" },
              { icon: TrendingUp, text: "Up to ₹18 LPA (SLS)" },
              { icon: Award, text: "NLU + NAAC A++ Ranked" },
              { icon: Users, text: "BA LLB / LLB / LLM" },
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
          <div id="quick-answer" className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-red-800 mb-1">Quick Answer — Top Law Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best value:</strong> Faculty of Law DU (₹20K/yr, 900 seats) ·{" "}
              <strong>Most prestigious:</strong> NLU Delhi (CLAT, top 2000 AIR) ·{" "}
              <strong>Best private placements:</strong> SLS Delhi (₹18 LPA top offer) ·{" "}
              <strong>Lowest fees, central univ:</strong> Jamia Law (₹18K/yr) ·{" "}
              <strong>Most seats:</strong> Campus Law Centre DU (1800 seats, ₹20K/yr)
            </p>
          </div>

          {/* LLB vs BA LLB */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">LLB vs BA LLB — Which Law Program to Choose?</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Delhi is India&apos;s legal capital — home to the Supreme Court, Delhi High Court, 30,000+ law firms, and the legal departments of every major MNC. Studying law in Delhi gives you unparalleled access to internships, moot court competitions, and corporate placements.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="font-bold text-blue-900 mb-1">BA LLB / BBA LLB (5 years)</p>
                <p className="text-sm text-gray-600">After Class 12. Integrated degree — BA + law. Internationally recognised. Admitted via CLAT (NLU Delhi) or DU LLB Entrance / SLAT. Best for students certain about law from school itself.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-900 mb-1">LLB (3 years)</p>
                <p className="text-sm text-gray-600">After any graduation (engineering, commerce, arts). DU Law Faculty and Campus Law Centre (1800 seats) are prime choices. Fees as low as ₹20K/yr. Ideal for cross-disciplinary legal careers (IP law, corporate law, tax law).</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Source:{" "}
              <a href="https://www.barcouncilofindia.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bar Council of India</a>{" · "}
              <a href="https://consortiumofnlus.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Consortium of NLUs (CLAT)</a>
            </p>
          </section>

          {/* Rankings Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Law College Rankings — Delhi 2026</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-3 py-3 text-left">#</th>
                    <th className="px-3 py-3 text-left">College</th>
                    <th className="px-3 py-3 text-left">Type</th>
                    <th className="px-3 py-3 text-left">Fees/yr</th>
                    <th className="px-3 py-3 text-left">Exam</th>
                    <th className="px-3 py-3 text-left">Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((c, i) => (
                    <tr key={c.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-3 py-3 font-bold text-gray-500">{c.rank}</td>
                      <td className="px-3 py-3">
                        <span className="font-semibold text-gray-900">{c.name}</span>
                        <span className="block text-xs text-red-600 mt-0.5">{c.highlight}</span>
                      </td>
                      <td className="px-3 py-3 text-gray-600">{c.type}</td>
                      <td className="px-3 py-3 font-medium text-green-700">{c.fees}</td>
                      <td className="px-3 py-3 text-gray-600 text-xs">{c.exam}</td>
                      <td className="px-3 py-3 text-gray-600">{c.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Live college table from backend */}
          <StreamCollegesTable stream="Law" keywords={["legal", "law", "llb"]} />

          {/* Admission Steps */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Admission in Law Colleges in Delhi 2026</h2>
            <div className="space-y-3">
              {[
                { step: "1", title: "Choose Program & Entrance Exam", desc: "5-year BA LLB (Class 12): CLAT for NLU Delhi, DU LLB Entrance for DU Law (900 seats, ₹20K/yr), SLAT for SLS Delhi, Jamia Entrance for Jamia Law (₹18K/yr). 3-year LLB (after graduation): DU LLB Entrance for Faculty of Law DU / Campus Law Centre (1800 seats, ₹20K/yr)." },
                { step: "2", title: "Appear for Entrance Exam", desc: "CLAT — December 2025 at consortiumofnlus.ac.in. DU LLB Entrance — May–June 2026 at du.ac.in. SLAT — May 2026 at set.ac.in. Jamia Entrance — April–May 2026 at jmicoe.in. IPU CET Law — April 2026." },
                { step: "3", title: "Register on Admission Portal", desc: "After results, apply on du.ac.in (DU colleges), consortiumofnlus.ac.in (NLU Delhi), set.ac.in (SLS), or Jamia's portal. Submit: Class 10/12 marksheets, graduation marksheets (for 3-yr LLB), category certificate, domicile certificate." },
                { step: "4", title: "Accept Seat & Pay Fees", desc: "Accept allotment within deadline, attend document verification, pay fees. DU law: ₹20K–35K/yr. NLU Delhi: ₹2–2.5L/yr. SLS: ₹1.8–2.5L/yr. After degree completion, enrol with Bar Council of India to practice as an advocate." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-red-700 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Delhi for Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Study Law in Delhi?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "India's Legal Capital", desc: "Supreme Court of India, Delhi High Court, 30,000+ law firms, and legal departments of every major MNC are based in Delhi NCR." },
                { title: "Lowest Fees for Top Degree", desc: "DU Law Faculty and Campus Law Centre charge ₹20K–35K/yr — India's lowest for a recognised law degree with Central University status." },
                { title: "Internship Access from Year 1", desc: "DU Law students intern at Supreme Court chambers, Tier-1 law firms (AZB, Trilegal, Cyril Amarchand), and MNC legal teams." },
                { title: "Multiple Entrance Paths", desc: "8+ law colleges in Delhi accept CLAT, DU Entrance, Jamia, SLAT, IPU CET — multiple shots at a quality law degree." },
                { title: "Litigation + Corporate Tracks", desc: "Delhi offers both: litigation at High Court / Supreme Court chambers, and corporate law at MNCs paying ₹6–18 LPA." },
                { title: "LLM & PhD Opportunities", desc: "After LLB, DU Law Faculty, Jamia Law, NLU Delhi offer LLM in International Law, Corporate Law, Human Rights at ₹25K–1.5L/yr." },
              ].map((w) => (
                <div key={w.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{w.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Need help choosing the right law college?</p>
            <p className="text-blue-200 text-sm mb-4">Our counsellors help you choose between NLU Delhi, DU Law Faculty, SLS and more based on CLAT score, budget &amp; career goals.</p>
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
          <section id="faqs" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Law Colleges Delhi 2026</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Engineering Colleges Delhi", href: "/engineering-colleges-delhi" },
                { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
                { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
                { label: "BBA Colleges Delhi", href: "/bba-colleges-delhi" },
                { label: "IPU Colleges Delhi", href: "/ipu-colleges-delhi" },
                { label: "Government Colleges Delhi", href: "/government-colleges-delhi" },
                { label: "DU Colleges Delhi", href: "/du-colleges-delhi" },
                { label: "All Colleges in Delhi", href: "/colleges" },
                { label: "AI College Finder", href: "/ai-finder" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm text-blue-600 hover:text-red-700 bg-white border border-gray-100 rounded-lg px-4 py-3 text-center shadow-sm transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
