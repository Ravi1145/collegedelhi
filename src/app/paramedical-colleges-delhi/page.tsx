import { Metadata } from "next"
import Link from "next/link"
import StreamCollegesTable from "@/components/colleges/StreamCollegesTable"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { Award, BookOpen, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = genMeta({
  title: "Best Paramedical Colleges in Delhi 2026 | B.Sc. MLT, Radiology Fees & Admission",
  description: "Top paramedical colleges in Delhi 2026 — AIIMS, MAMC, Jamia Hamdard. Compare B.Sc. MLT, Radiology, Physiotherapy fees ₹30K–₹2L/yr and NEET/direct admission.",
  path: "/paramedical-colleges-delhi",
  keywords: [
    "paramedical colleges in Delhi 2026",
    "best paramedical college Delhi",
    "BSc MLT colleges Delhi",
    "BSc radiology colleges Delhi",
    "physiotherapy colleges Delhi",
    "AIIMS paramedical Delhi",
    "paramedical admission Delhi 2026",
    "paramedical courses Delhi fees",
    "MAMC paramedical Delhi",
    "Jamia Hamdard paramedical Delhi",
  ],
})

const colleges = [
  { rank: 1, name: "AIIMS Delhi — Paramedical Programs", type: "Government (Central)", naac: "–", fees: "₹30K–₹60K/yr", program: "B.Sc. MLT, Radiology, Physiotherapy, Optometry", exam: "AIIMS Paramedical Entrance", highlight: "India's best paramedical | Government hospital exposure | Top placements" },
  { rank: 2, name: "Maulana Azad Medical College (MAMC) — Allied Health", type: "Government (Delhi Govt)", naac: "A+", fees: "₹20K–₹50K/yr", program: "B.Sc. MLT, Radiology, OT Technology", exam: "Delhi CET / NEET", highlight: "Top Delhi Govt hospital | Lok Nanak Hospital training | Affordable" },
  { rank: 3, name: "Jamia Hamdard — Faculty of Allied Health Sciences", type: "Deemed University", naac: "A+", fees: "₹80K–₹1.5L/yr", program: "B.Sc. MLT, Physiotherapy, Radiography (4yr)", exam: "Jamia Hamdard Entrance", highlight: "Best private paramedical Delhi | Modern labs | Industry tie-ups" },
  { rank: 4, name: "Guru Gobind Singh Indraprastha University — Allied Health", type: "State University", naac: "–", fees: "₹60K–₹1.2L/yr", program: "B.Sc. MLT, Radiology, Physiotherapy (BPTH)", exam: "IPU CET", highlight: "IP University affiliated | Multiple colleges | Delhi hospital internships" },
  { rank: 5, name: "Vardhman Mahavir Medical College (VMMC) — Paramedical", type: "Government (Safdarjung)", naac: "A", fees: "₹25K–₹50K/yr", program: "B.Sc. MLT, OT Technology, Cardiology Tech", exam: "Delhi Paramedical CET", highlight: "Safdarjung Hospital training | Govt fees | High job rate" },
  { rank: 6, name: "Amity University — School of Allied Health Sciences", type: "Deemed University", naac: "A+", fees: "₹1L–₹2L/yr", program: "B.Sc. MLT, Physiotherapy, Radiography (3–4yr)", exam: "Amity JEE", highlight: "Private | Modern equipment | Placement support | Noida campus" },
]

const programs = [
  { name: "B.Sc. Medical Lab Technology (MLT)", duration: "3–4 years", jobs: "Lab Technician, Pathologist Assistant", salary: "₹3–8 LPA" },
  { name: "B.Sc. Radiology & Imaging Technology", duration: "3–4 years", jobs: "Radiographer, MRI Technician, CT Scan Tech", salary: "₹3–9 LPA" },
  { name: "B.Sc. (BPTh) Physiotherapy", duration: "4.5 years", jobs: "Physiotherapist (Hospital/Sports/Rehab)", salary: "₹3–10 LPA" },
  { name: "B.Sc. Operation Theatre Technology (OTT)", duration: "3 years", jobs: "OT Technician, Surgical Assistant", salary: "₹3–7 LPA" },
  { name: "B.Sc. Optometry", duration: "3–4 years", jobs: "Optometrist, Vision Therapist", salary: "₹3–8 LPA" },
  { name: "B.Sc. Cardiac Technology", duration: "3 years", jobs: "Cardiac Tech, Cath Lab Technician", salary: "₹4–10 LPA" },
]

const faqs = [
  { question: "Which is the best paramedical college in Delhi 2026?", answer: "AIIMS Delhi paramedical programs are India's best — B.Sc. MLT, Radiology, Physiotherapy, and Optometry with government fees and training at India's top hospital. For Delhi government colleges, MAMC (Maulana Azad Medical College) and VMMC (Safdarjung Hospital) offer excellent paramedical programs at ₹20–50K/yr. For private, Jamia Hamdard's Faculty of Allied Health Sciences is the top choice with modern labs and strong placements." },
  { question: "What paramedical courses are available in Delhi colleges?", answer: "Top paramedical courses in Delhi: B.Sc. Medical Lab Technology (MLT) — 3–4 years, B.Sc. Radiology & Imaging Technology — 3–4 years, B.Sc. Physiotherapy (BPTh) — 4.5 years, B.Sc. Operation Theatre Technology (OTT) — 3 years, B.Sc. Optometry — 3–4 years, B.Sc. Cardiac Technology — 3 years, B.Sc. Respiratory Therapy — 3 years, B.Sc. Dialysis Technology — 3 years. All lead to jobs in Delhi's 50+ hospitals and diagnostics labs." },
  { question: "What entrance exam is needed for paramedical in Delhi?", answer: "AIIMS Delhi requires AIIMS Paramedical Entrance Exam (conducted by AIIMS). Government colleges (MAMC, VMMC, GTB) accept Delhi Paramedical CET or NEET paramedical scores. IP University colleges need IPU CET (Allied Health Sciences). Jamia Hamdard has its own entrance test. Private colleges like Amity use Amity JEE or direct admission on 12th marks (PCB). Most paramedical programs require Physics, Chemistry, Biology in Class 12." },
  { question: "What is the salary after paramedical from Delhi colleges?", answer: "Paramedical salaries in Delhi after graduation: B.Sc. MLT — ₹3–6 LPA in hospitals and diagnostics labs (Apollo, Max, Fortis, government hospitals). B.Sc. Physiotherapy — ₹3–8 LPA (hospitals, sports clubs, rehabilitation centres). B.Sc. Radiology — ₹4–9 LPA (MRI/CT technicians are in high demand). B.Sc. Cardiac Technology — ₹5–12 LPA (cath lab technicians, highest-paid paramedics). Government hospital jobs offer additional job security + pension benefits." },
  { question: "Is NEET required for paramedical admission in Delhi?", answer: "NEET is not universally required for paramedical courses in Delhi, but some colleges use NEET Biology scores for shortlisting. AIIMS Delhi has its own paramedical entrance (separate from NEET MBBS). Delhi government colleges (MAMC, VMMC) use Delhi CET for paramedical — separate from NEET. IP University uses IPU CET. Most private colleges do NOT require NEET for B.Sc. paramedical — direct admission on Class 12 PCB marks. However, for B.Sc. Physiotherapy at some institutes, NEET score may be used." },
]

const breadcrumb = [
  { name: "Home", url: "https://www.collegedelhi.com" },
  { name: "Colleges", url: "https://www.collegedelhi.com/colleges" },
  { name: "Paramedical Colleges Delhi", url: "https://www.collegedelhi.com/paramedical-colleges-delhi" },
]

export const revalidate = 86400

export default function ParamedicalCollegesDelhi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumb)) }} />

      <div className="min-h-screen bg-surface">
        <div className="py-14 px-4 text-center" style={{ background: "linear-gradient(135deg,#0A1628 0%,#1E3A5F 100%)" }}>
          <nav className="text-xs text-blue-300 mb-4 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/colleges" className="hover:text-white">Colleges</Link>
            <span>›</span>
            <span className="text-white">Paramedical Colleges Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Best Paramedical Colleges in Delhi 2026</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-base mb-6">
            Top B.Sc. MLT, Radiology & Physiotherapy colleges in Delhi — AIIMS, MAMC, Jamia Hamdard. Fees ₹20K–₹2L/yr, entrance exams and career salaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: BookOpen, text: "13+ Paramedical Colleges" },
              { icon: TrendingUp, text: "₹3–12 LPA Placements" },
              { icon: Award, text: "AIIMS & MAMC Top Ranked" },
              { icon: Users, text: "MLT / Radiology / Physiotherapy" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200">
                <Icon className="w-4 h-4 text-red-400" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-red-800 mb-1">⚡ Quick Answer — Top Paramedical Colleges Delhi 2026</p>
            <p className="text-sm text-gray-700">
              <strong>Best govt:</strong> AIIMS Delhi · <strong>Best Delhi Govt:</strong> MAMC / VMMC (Safdarjung) · <strong>Best private:</strong> Jamia Hamdard · <strong>IP University:</strong> GGSIPU Allied Health Colleges
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Paramedical Colleges Delhi — Fees & Programs 2026</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Rank</th>
                  <th className="px-4 py-3 text-left font-semibold">College</th>
                  <th className="px-4 py-3 text-left font-semibold">Programs</th>
                  <th className="px-4 py-3 text-left font-semibold">Exam</th>
                  <th className="px-4 py-3 text-left font-semibold">Fees/yr</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c, i) => (
                  <tr key={c.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-red-600">#{c.rank}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-xs text-blue-600 mt-0.5">{c.type}</p>
                      <p className="text-xs text-green-600 mt-0.5">{c.highlight}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{c.program}</td>
                    <td className="px-4 py-3 text-orange-600 font-medium text-xs">{c.exam}</td>
                    <td className="px-4 py-3 text-gray-600">{c.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Programs Table */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Paramedical Courses in Delhi — Salary & Career</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Course</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Career Options</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Avg Salary</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">{p.duration}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{p.jobs}</td>
                    <td className="px-4 py-3 font-medium text-green-700">{p.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <StreamCollegesTable stream="Paramedical" keywords={["paramedical", "MLT", "physiotherapy", "radiology"]} />

          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: "linear-gradient(135deg,#0A1628,#1E3A5F)" }}>
            <p className="text-white font-bold text-lg mb-2">Which paramedical course is right for you?</p>
            <p className="text-blue-200 text-sm mb-4">Get free guidance on AIIMS paramedical, MAMC, and Jamia Hamdard admissions from our healthcare education experts.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/ai-finder" className="inline-flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all" style={{ background: "linear-gradient(90deg,var(--color-accent),color-mix(in srgb, var(--color-accent) 70%, #FFD000))" }}>
                AI College Finder
              </Link>
              <Link href="/counselling" className="inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl text-sm border border-white/30 hover:bg-white/10 transition-all">
                Free Counselling
              </Link>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions — Paramedical Colleges Delhi</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Medical Colleges Delhi", href: "/medical-colleges-delhi" },
              { label: "MBBS Colleges Delhi", href: "/mbbs-colleges-delhi" },
              { label: "NEET Colleges Delhi", href: "/neet-colleges-delhi" },
              { label: "Nursing Colleges Delhi", href: "/nursing-colleges-delhi" },
              { label: "Science Colleges Delhi", href: "/science-colleges-delhi" },
              { label: "All Colleges Delhi", href: "/colleges" },
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
