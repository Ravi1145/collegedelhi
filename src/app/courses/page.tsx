import { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo"
import CoursesClient from "@/components/courses/CoursesClient"
import { GraduationCap, TrendingUp, IndianRupee, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = genMeta({
  title: "Courses in Delhi 2026 — UG, PG, Diploma, Certificate & More",
  description:
    "Browse 500+ courses offered by top Delhi colleges — B.Tech, MBA, MBBS, BCA, BBA, B.Arch and more. Compare fees, duration, avg salary and eligible colleges.",
  path: "/courses",
  keywords: ["courses in Delhi", "engineering courses Delhi", "mba courses Delhi", "btech Delhi", "bca Delhi", "ug pg courses Delhi"],
})

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Courses</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Courses in Delhi 2026
          </h1>
          <p className="text-blue-200 max-w-2xl text-base mb-8">
            Explore UG, PG, Diploma and Certificate courses from top Delhi colleges. Compare fees, duration, salary and admission requirements.
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: GraduationCap, label: "500+ Courses", sub: "UG to Doctorate" },
              { icon: BookOpen,      label: "12 Streams",   sub: "Engineering to Arts" },
              { icon: TrendingUp,    label: "Avg ₹8 LPA",   sub: "Graduate salary" },
              { icon: IndianRupee,   label: "₹20K – ₹20L",  sub: "Annual fees range" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{label}</p>
                  <p className="text-blue-300 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CoursesClient />
    </div>
  )
}

