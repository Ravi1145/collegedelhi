"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  ArrowRight, TrendingUp, IndianRupee,
  Wrench, Briefcase, Stethoscope, Scale, Building2,
  BarChart2, Palette, Microscope, Monitor, Pill,
  GraduationCap, BookOpen, Utensils, Brush, Camera
} from "lucide-react"
import FilterTabs from "@/components/ui/FilterTabs"
import { courses as staticCourses } from "@/data/courses"

const COURSE_TABS = ["All", "Engineering", "Management", "MBA", "Medical", "Law", "Architecture", "Commerce", "Science", "Design"]
const COURSE_BANNER = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=75"

const levelColors: Record<string, string> = {
  UG:      "bg-blue-500 text-white",
  PG:      "bg-purple-500 text-white",
  Diploma: "bg-green-500 text-white",
  Doctorate: "bg-red-500 text-white",
  Certificate: "bg-teal-500 text-white",
}

// Stream icon map — Lucide icons only, no emojis
const StreamIcon: Record<string, React.ElementType> = {
  Engineering:          Wrench,
  Management:           Briefcase,
  MBA:                  Briefcase,
  Medical:              Stethoscope,
  Law:                  Scale,
  Architecture:         Building2,
  Commerce:             BarChart2,
  Arts:                 Palette,
  Science:              Microscope,
  Design:               Brush,
  "Computer Application": Monitor,
  Pharmacy:             Pill,
  Education:            GraduationCap,
  "Hotel Management":   Utensils,
  Finance:              TrendingUp,
  Animation:            Camera,
}
const DefaultIcon = BookOpen

const fmtFees = (min: number, max: number) => {
  if (!min && !max) return "—"
  const f = (n: number) => n >= 100000 ? `₹${(n/100000).toFixed(1)}L` : n >= 1000 ? `₹${(n/1000).toFixed(0)}K` : `₹${n}`
  if (min && max) return `${f(min)} – ${f(max)}`
  return f(min || max)
}
const fmtSalary = (n: number) => n >= 100000 ? `₹${(n/100000).toFixed(1)} LPA` : n >= 1000 ? `₹${(n/1000).toFixed(0)}K` : `₹${n}`

// Normalise static Course type → shape the card template expects
function normalise(c: (typeof staticCourses)[number]) {
  return {
    _id:           c.slug,
    slug:          c.slug,
    name:          c.name,
    fullName:      c.fullName,
    level:         c.level,
    stream:        c.stream,
    duration:      c.duration,
    description:   c.description,
    fees:          { min: c.avgFees.min, max: c.avgFees.max },
    avgSalary:     { min: c.avgSalary, max: c.avgSalary },
    entranceExams: c.entranceExams,
    topColleges:   c.topColleges.map(name => ({ name })),
  }
}

const allNormalised = staticCourses.map(normalise)

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState("All")

  const featured = useMemo(() => {
    const filtered = activeTab === "All"
      ? allNormalised
      : allNormalised.filter(c =>
          c.stream.toLowerCase() === activeTab.toLowerCase() ||
          c.name.toLowerCase().includes(activeTab.toLowerCase())
        )
    return filtered.slice(0, 10)
  }, [activeTab])

  const loading = false

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses in DELHI</h2>
            <p className="text-gray-500 mt-2">Top UG &amp; PG programs with fees, salary &amp; entrance exam details</p>
          </div>
          <Link href="/courses" className="hidden sm:flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter tabs */}
        <FilterTabs tabs={COURSE_TABS} active={activeTab} onChange={setActiveTab} className="mb-6" />

        {/* Cards row */}
        {loading ? (
          <div className="flex gap-5 overflow-x-auto pb-3">
            {[1,2,3,4].map(i => <div key={i} className="flex-shrink-0 w-72 h-64 bg-gray-100 rounded-2xl animate-pulse" />)}
          </div>
        ) : featured.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <GraduationCap className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p>No courses found for this stream</p>
          </div>
        ) : (
          <div className="flex gap-5 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((course) => {
              const Icon = StreamIcon[course.stream] || DefaultIcon
              return (
                <Link key={course.slug} href={`/courses/${course.slug}`} className="flex-shrink-0 w-72 block group">
                  <article className="bg-white rounded-2xl border border-gray-100 hover:border-red-400 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">

                    {/* Header with bg image */}
                    <div className="relative p-4 pb-3 overflow-hidden"
                      style={{ backgroundImage: `url(${COURSE_BANNER})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]/92" />

                      {/* Level badge */}
                      <span className={`absolute top-3 right-3 z-20 text-xs font-bold px-2.5 py-0.5 rounded-full ${levelColors[course.level] ?? "bg-gray-500 text-white"}`}>
                        {course.level}
                      </span>

                      {/* Icon + name */}
                      <div className="relative z-10 flex items-start gap-3 pr-10">
                        {/* Stream icon badge — no emojis */}
                        <div className="shrink-0 w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center">
                          <Icon className="w-7 h-7 text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <h3 className="text-white font-bold text-base leading-snug group-hover:text-red-300 transition-colors"
                            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                            {course.name}
                          </h3>
                          <p className="text-xs text-white/90 mt-1 line-clamp-1"
                            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}>
                            {course.fullName || course.description?.slice(0, 50)}
                          </p>
                        </div>
                      </div>

                      {/* Stream + duration badges */}
                      <div className="relative z-10 flex flex-wrap gap-1.5 mt-3">
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-red-600 text-white">{course.stream}</span>
                        {course.duration && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-white/20 text-white border border-white/30">{course.duration}</span>
                        )}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 flex flex-col flex-1 gap-3 bg-white">

                      {/* Fees + Salary */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
                          <div className="flex items-center gap-1 mb-1">
                            <IndianRupee className="w-3 h-3 text-red-400 shrink-0" />
                            <span className="text-[9px] text-red-600 font-semibold uppercase tracking-wider">Annual Fees</span>
                          </div>
                          <p className="text-xs font-bold text-gray-900 leading-tight">
                            {fmtFees(course.fees?.min, course.fees?.max)}
                          </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5">
                          <div className="flex items-center gap-1 mb-1">
                            <TrendingUp className="w-3 h-3 text-blue-400 shrink-0" />
                            <span className="text-[9px] text-blue-500 font-semibold uppercase tracking-wider">Avg Salary</span>
                          </div>
                          <p className="text-xs font-bold text-gray-900 leading-tight">
                            {course.avgSalary?.min > 0 ? fmtSalary(course.avgSalary?.min) : "—"}
                          </p>
                        </div>
                      </div>

                      {/* Entrance exams */}
                      {course.entranceExams?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {course.entranceExams.slice(0, 3).map((exam: string) => (
                            <span key={exam} className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full font-medium">{exam}</span>
                          ))}
                          {course.entranceExams.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full font-medium">+{course.entranceExams.length - 3} more</span>
                          )}
                        </div>
                      )}

                      {/* Top colleges */}
                      {course.topColleges?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 mt-auto">
                          <span className="text-xs text-gray-400 font-medium w-full">Top Colleges:</span>
                          {course.topColleges.slice(0, 3).map((col: any) => (
                            <span key={col.name} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{col.name}</span>
                          ))}
                          {course.topColleges.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">+{course.topColleges.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}

        {/* Mobile view all */}
        <div className="text-center mt-8 sm:hidden">
          <Link href="/courses" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}


