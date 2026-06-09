import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getExamBySlug, getAllExams, getAllColleges } from "@/lib/db"
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { Calendar, Clock, Globe, Users, BookOpen, GraduationCap, ArrowRight } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export const revalidate = 300

export async function generateStaticParams() {
  try {
    const { exams } = await getAllExams({ limit: 100 })
    return exams.map(e => ({ slug: e.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const exam = await getExamBySlug(slug)
  if (!exam) return {}
  return genMeta({
    title: `${exam.name} 2026 — Dates, Eligibility & Colleges | CollegeDelhi`,
    description: `${exam.fullName || exam.name} 2026: Eligibility, exam dates, syllabus overview, and top Delhi colleges accepting ${exam.name}.`,
    path: `/exams/${slug}`,
  })
}

export default async function ExamDetailPage({ params }: Props) {
  const { slug } = await params
  const exam = await getExamBySlug(slug)
  if (!exam) notFound()

  // Colleges accepting this exam
  const { colleges } = await getAllColleges({ limit: 100 })
  const acceptingColleges = colleges
    .filter(c => c.entrance_exams?.some(ex => ex.toLowerCase().includes((exam.shortName || exam.name).toLowerCase())))
    .slice(0, 8)

  const faqs = [
    { question: `What is ${exam.name}?`, answer: exam.about || exam.description || `${exam.fullName || exam.name} is an entrance exam.` },
    { question: `Who conducts ${exam.name}?`, answer: exam.conductedBy ? `${exam.name} is conducted by ${exam.conductedBy}.` : `Please visit the official website for details.` },
    { question: `Which Delhi colleges accept ${exam.name} scores?`, answer: acceptingColleges.length > 0 ? `Top Delhi colleges accepting ${exam.name}: ${acceptingColleges.map(c => c.name).join(", ")}.` : `Many top Delhi colleges accept ${exam.name} scores. Check each college's admission page for details.` },
  ]

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Exams", url: "/exams" },
    { name: exam.name, url: `/exams/${slug}` },
  ]

  const levelColor = {
    National:   "bg-blue-100 text-blue-700",
    State:      "bg-green-100 text-green-700",
    University: "bg-red-100 text-red-700",
  }[exam.type || ''] ?? "bg-gray-100 text-gray-700"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-[#0A1628] text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <nav className="flex items-center gap-2 text-xs text-blue-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/exams" className="hover:text-white transition-colors">Exams</Link>
              <span>›</span>
              <span className="text-white">{exam.name}</span>
            </nav>

            <div className="flex flex-wrap items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {exam.type && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${levelColor}`}>
                      {exam.type} Level
                    </span>
                  )}
                  {exam.streams?.map(s => (
                    <span key={s} className="px-2.5 py-1 bg-white/10 rounded-full text-xs text-blue-200">{s}</span>
                  ))}
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold mb-2">{exam.name} 2026</h1>
                {exam.fullName && <p className="text-blue-200 text-base">{exam.fullName}</p>}
                {exam.conductedBy && <p className="text-xs text-blue-300 mt-1">Conducted by: {exam.conductedBy}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {(exam.about || exam.description) && (
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-red-500" /> About {exam.name}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{exam.about || exam.description}</p>
                </section>
              )}

              {exam.highlights && exam.highlights.length > 0 && (
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-red-500" /> Key Highlights
                  </h2>
                  <ul className="space-y-2">
                    {exam.highlights.map((h: any, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                        {typeof h === 'string' ? h : `${h.title ?? ''}: ${h.value ?? ''}`}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {acceptingColleges.length > 0 && (
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    Delhi Colleges Accepting {exam.name}
                  </h2>
                  <div className="space-y-3">
                    {acceptingColleges.map(c => (
                      <Link
                        key={c.slug}
                        href={`/colleges/${c.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all group"
                      >
                        <div>
                          <p className="font-semibold text-gray-900 text-sm group-hover:text-red-600 transition-colors">{c.name}</p>
                          <p className="text-xs text-gray-500">{c.type} · {c.city}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={`/colleges?exam=${exam.name}`}
                    className="mt-4 flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                  >
                    View all colleges accepting {exam.name} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </section>
              )}

              {/* FAQs */}
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {exam.importantDates && exam.importantDates.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-500" /> Key Dates 2026
                  </h3>
                  <div className="space-y-3">
                    {exam.importantDates.slice(0, 5).map((d, i) => (
                      <div key={i}>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{d.event}</p>
                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{d.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Need Admission Help?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get free counseling for {exam.name} admissions in Delhi from our expert team.
                </p>
                <Link
                  href="/counselling"
                  className="block text-center bg-white text-red-600 font-bold text-sm rounded-xl py-2.5 hover:bg-red-50 transition-colors"
                >
                  Book Free Counselling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
