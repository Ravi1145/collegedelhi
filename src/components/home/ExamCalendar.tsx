import Link from "next/link"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const API = "https://college-delhi-backend.vercel.app/api"

const levelColors: Record<string, string> = {
  National:    "bg-blue-100 text-blue-700",
  State:       "bg-green-100 text-green-700",
  University:  "bg-purple-100 text-purple-700",
  International: "bg-red-100 text-red-800",
}

async function fetchExams() {
  try {
    const res = await fetch(`${API}/exams?status=published&limit=8`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? (data.data || []) : []
  } catch {
    return []
  }
}

function getDate(importantDates: any[], keywords: string[]) {
  if (!Array.isArray(importantDates)) return ""
  const match = importantDates.find((d: any) =>
    keywords.some(k => (d.event || "").toLowerCase().includes(k))
  )
  return match?.date || ""
}

export default async function ExamCalendar() {
  const exams = await fetchExams()

  if (exams.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full mb-3">
              <Calendar className="w-4 h-4" />
              Upcoming Exams
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Entrance Exam Calendar 2026
            </h2>
            <p className="text-gray-500 mt-1">Key dates for engineering, MBA, and medical entrance exams</p>
          </div>
          <Link href="/exams" className="hidden sm:flex items-center gap-2 text-red-700 font-semibold hover:text-red-800">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Exam</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Level</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Application Date</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Exam Date</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">For</th>
                <th className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {exams.map((exam: any) => {
                const appDate  = getDate(exam.importantDates, ["application", "form", "registration"])
                const examDate = getDate(exam.importantDates, ["exam", "test", "conduct"])
                return (
                  <tr key={exam._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-3 sm:px-5 py-3">
                      <p className="font-bold text-gray-900 text-sm">{exam.name}</p>
                      {exam.conductedBy && (
                        <p className="text-xs text-gray-500 hidden sm:block">
                          {exam.conductedBy.split(" ").slice(0, 4).join(" ")}
                        </p>
                      )}
                    </td>
                    <td className="px-3 sm:px-5 py-3 hidden sm:table-cell">
                      <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", levelColors[exam.type] || "bg-gray-100 text-gray-600")}>
                        {exam.type || "—"}
                      </span>
                    </td>
                    <td className="px-3 sm:px-5 py-3 text-sm text-gray-600 hidden md:table-cell">
                      {appDate || "—"}
                    </td>
                    <td className="px-3 sm:px-5 py-3">
                      <span className="text-sm font-semibold text-gray-900">{examDate || "—"}</span>
                    </td>
                    <td className="px-3 sm:px-5 py-3 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {(exam.streams || []).slice(0, 2).map((s: string) => (
                          <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 sm:px-5 py-3 text-center">
                      {exam.officialWebsite ? (
                        <a href={exam.officialWebsite} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-red-700 hover:text-red-800 text-xs font-medium">
                          Register <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link href={`/exams/${exam.slug}`} className="text-xs font-medium text-red-700 hover:text-red-800">
                          Details â†’
                        </Link>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-5 sm:hidden">
          <Link href="/exams" className="inline-flex items-center gap-2 text-red-700 font-semibold">
            View All Exams <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

