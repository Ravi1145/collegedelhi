import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { GraduationCap, Clock, IndianRupee, TrendingUp, BookOpen, Users, CheckCircle, Building2, Briefcase, Star, ChevronRight, Award, Target } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"

export const revalidate = 300

const API = process.env.NEXT_PUBLIC_API_URL || "https://college-delhi-backend.vercel.app/api"

import { courses as staticCourses, getCourseBySlug as getStaticCourse } from "@/data/courses"

async function getCourse(slug: string) {
  // 1. Try backend API
  try {
    const res = await fetch(`${API}/courses/slug/${slug}`, { next: { revalidate: 300 } })
    if (res.ok) {
      const data = await res.json()
      if (data.success && data.data) return data.data
    }
  } catch { /* fall through to static */ }

  // 2. Fallback to static data
  const staticCourse = getStaticCourse(slug)
  if (staticCourse) return staticCourse

  return null
}

// Pre-build all 50 static course pages at build time
export async function generateStaticParams() {
  return staticCourses.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = await getCourse(slug)
  if (!course) return { title: "Course Not Found" }
  // Long fullName values (e.g. "Bachelor of Technology in Computer Science &
  // Engineering") push the title past the ~580px SERP truncation threshold.
  // Swap the degree-type prefix for its short form (name) to keep it scannable.
  const subject = course.fullName?.replace(
    /^(Bachelor|Master) of (Technology|Science|Business Administration|Computer Applications)\s+(in|of)\s+/i,
    ""
  )
  const titleSubject = subject && course.name ? `${course.name} ${subject}` : course.fullName || course.name
  return genMeta({
    title: course.meta_title || `${titleSubject} in Delhi 2026 — Fees, Colleges, Scope`,
    description: course.meta_desc || course.description,
    path: `/courses/${slug}`,
    keywords: course.seo_keywords ?? [],
  })
}

const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1)} LPA` : n >= 1000 ? `₹${(n / 1000).toFixed(0)}K` : `₹${n}`

const LEVEL_COLOR: Record<string, string> = {
  'UG': 'bg-blue-500', 'PG': 'bg-purple-500', 'Diploma': 'bg-yellow-500',
  'Certificate': 'bg-green-500', 'After 10th': 'bg-orange-500', 'Doctorate': 'bg-red-500',
  'Others': 'bg-gray-500'
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = await getCourse(slug)
  if (!course) notFound()

  const levelColor = LEVEL_COLOR[course.level] || 'bg-gray-500'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* â”€â”€ HERO â”€â”€ */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white truncate">{course.name}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`${levelColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{course.level}</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{course.stream}</span>
            {course.mode && <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{course.mode}</span>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.fullName || course.name}</h1>
          {course.specialization && <p className="text-blue-200 text-lg mb-4">Specialization: {course.specialization}</p>}
          <p className="text-gray-300 text-base max-w-3xl mb-6">{course.overview || course.description}</p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 text-white"><Clock className="w-4 h-4 text-orange-400" /><div><p className="text-xs text-blue-300">Duration</p><p className="font-semibold">{course.duration}</p></div></div>
            {course.fees?.min > 0 && <div className="flex items-center gap-2 text-white"><IndianRupee className="w-4 h-4 text-green-400" /><div><p className="text-xs text-blue-300">Fees Range</p><p className="font-semibold">{fmt(course.fees.min)} – {fmt(course.fees.max)}</p></div></div>}
            {course.avgSalary?.min > 0 && <div className="flex items-center gap-2 text-white"><TrendingUp className="w-4 h-4 text-yellow-400" /><div><p className="text-xs text-blue-300">Avg Salary</p><p className="font-semibold">{fmt(course.avgSalary.min)} – {fmt(course.avgSalary.max)}</p></div></div>}
            {course.totalSemesters && <div className="flex items-center gap-2 text-white"><BookOpen className="w-4 h-4 text-purple-400" /><div><p className="text-xs text-blue-300">Semesters</p><p className="font-semibold">{course.totalSemesters}</p></div></div>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* â”€â”€ MAIN CONTENT â”€â”€ */}
          <div className="lg:col-span-2 space-y-6">

            {/* Highlights */}
            {course.highlights?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-orange-500" /> Key Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {course.highlights.map((h: any, i: number) => (
                    <div key={i} className="bg-orange-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-1">{h.title}</p>
                      <p className="font-bold text-orange-600 text-sm">{h.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About */}
            {(course.about || course.description) && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-500" /> About {course.name}</h2>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{course.about || course.description}</div>
              </div>
            )}

            {/* Eligibility */}
            {course.eligibility && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-orange-500" /> Eligibility Criteria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {course.eligibility.minPercentage > 0 && <div className="bg-blue-50 rounded-lg p-3"><p className="text-xs text-gray-500">Min Percentage</p><p className="font-bold text-blue-700">{course.eligibility.minPercentage}%</p></div>}
                  {course.eligibility.workExperienceYears > 0 && <div className="bg-purple-50 rounded-lg p-3"><p className="text-xs text-gray-500">Work Experience</p><p className="font-bold text-purple-700">{course.eligibility.workExperienceYears} yrs</p></div>}
                  {course.eligibility.ageLimit && <div className="bg-green-50 rounded-lg p-3"><p className="text-xs text-gray-500">Age Limit</p><p className="font-bold text-green-700">{course.eligibility.ageLimit}</p></div>}
                </div>
                {course.eligibility.requiredSubjects?.length > 0 && (
                  <div className="mb-3"><p className="text-sm font-semibold text-gray-700 mb-2">Required Subjects:</p><div className="flex flex-wrap gap-2">{course.eligibility.requiredSubjects.map((s: string, i: number) => <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{s}</span>)}</div></div>
                )}
                {course.eligibility.details && <p className="text-sm text-gray-600 mt-3 bg-gray-50 p-3 rounded-lg">{course.eligibility.details}</p>}
              </div>
            )}

            {/* Entrance Exams */}
            {course.entranceExams?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-orange-500" /> Entrance Exams</h2>
                <div className="flex flex-wrap gap-3">
                  {course.entranceExams.map((exam: string, i: number) => (
                    <span key={i} className="bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-sm px-4 py-2 rounded-xl">{exam}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Admission Process */}
            {course.admissionProcess?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Admission Process</h2>
                <div className="space-y-3">
                  {course.admissionProcess.map((step: any, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{step.step || i + 1}</div>
                      <div>
                        <p className="font-semibold text-gray-800">{step.title}</p>
                        {step.description && <p className="text-sm text-gray-500 mt-0.5">{step.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus */}
            {course.syllabus?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-500" /> Syllabus</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.syllabus.map((s: any, i: number) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-4">
                      <p className="font-semibold text-gray-800 mb-2 text-sm">{s.yearOrSemester}</p>
                      <ul className="space-y-1">
                        {s.subjects.filter(Boolean).map((sub: string, j: number) => (
                          <li key={j} className="text-xs text-gray-600 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0" />{sub}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Job Roles */}
            {course.jobRoles?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-orange-500" /> Top Job Roles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.jobRoles.map((job: any, i: number) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-4 hover:border-orange-200 transition">
                      <p className="font-semibold text-gray-800">{job.title}</p>
                      {job.avgSalary > 0 && <p className="text-orange-600 font-bold text-sm mt-1">{fmt(job.avgSalary)} avg</p>}
                      {job.description && <p className="text-xs text-gray-500 mt-1">{job.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Options */}
            {course.careerOptions?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-orange-500" /> Career Options</h2>
                <div className="flex flex-wrap gap-2">
                  {course.careerOptions.map((c: string, i: number) => (
                    <span key={i} className="bg-green-50 text-green-700 border border-green-200 text-sm px-3 py-1.5 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {course.skills?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Skills You'll Gain</h2>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((s: string, i: number) => (
                    <span key={i} className="bg-purple-50 text-purple-700 border border-purple-200 text-sm px-3 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Pros & Cons */}
            {(course.pros?.length > 0 || course.cons?.length > 0) && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Pros & Cons</h2>
                <div className="grid grid-cols-2 gap-4">
                  {course.pros?.length > 0 && (
                    <div>
                      <p className="font-semibold text-green-700 mb-2">âœ… Pros</p>
                      <ul className="space-y-1">{course.pros.map((p: string, i: number) => <li key={i} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>{p}</li>)}</ul>
                    </div>
                  )}
                  {course.cons?.length > 0 && (
                    <div>
                      <p className="font-semibold text-red-700 mb-2">Cons</p>
                      <ul className="space-y-1">{course.cons.map((c: string, i: number) => <li key={i} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-500 mt-0.5">–</span>{c}</li>)}</ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Top Colleges */}
            {course.topColleges?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-orange-500" /> Top Colleges for {course.name}</h2>
                <div className="space-y-3">
                  {course.topColleges.map((c: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-orange-200 transition">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                        <div>
                          {c.slug ? <Link href={`/${c.slug}`} className="font-semibold text-gray-800 hover:text-orange-600 transition">{c.name}</Link> : <p className="font-semibold text-gray-800">{c.name}</p>}
                          {c.fees > 0 && <p className="text-xs text-gray-400">Fees: {fmt(c.fees)}</p>}
                        </div>
                      </div>
                      {c.rating > 0 && <span className="flex items-center gap-1 text-yellow-600 text-sm font-bold"><Star size={13} className="fill-yellow-400 text-yellow-400" />{c.rating}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {course.faqs?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {course.faqs.map((f: any, i: number) => (
                    <details key={i} className="group border border-gray-100 rounded-xl">
                      <summary className="flex items-center justify-between cursor-pointer p-4 text-gray-800 font-medium text-sm">{f.question}<ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" /></summary>
                      <p className="px-4 pb-4 text-sm text-gray-600">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* â”€â”€ SIDEBAR â”€â”€ */}
          <div className="space-y-5">

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-sm p-5 lg:sticky lg:top-24">
              <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "Level", value: course.level },
                    { label: "Stream", value: course.stream },
                    { label: "Duration", value: course.duration },
                    { label: "Mode", value: course.mode },
                    course.totalSemesters && { label: "Semesters", value: course.totalSemesters },
                    course.applicationMode && { label: "Application", value: course.applicationMode },
                    course.fees?.scholarshipAvailable && { label: "Scholarship", value: "Available âœ…" },
                  ].filter(Boolean).map((row: any, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-3 text-gray-500 text-xs">{row.label}</td>
                      <td className="py-2 px-3 font-medium text-gray-800 text-xs">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-5 space-y-3">
                <Link href="/counselling" className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition text-sm">
                  Get Free Counselling
                </Link>
                <Link href="/courses" className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition text-sm">
                  â† All Courses
                </Link>
              </div>
            </div>

            {/* Top Recruiters */}
            {course.topRecruiters?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3">Top Recruiters</h3>
                <div className="flex flex-wrap gap-2">
                  {course.topRecruiters.map((r: string, i: number) => (
                    <span key={i} className="bg-gray-50 border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Specializations */}
            {course.specializations?.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3">Specializations</h3>
                <div className="space-y-2">
                  {course.specializations.map((s: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 bg-orange-400 rounded-full" />{s}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
