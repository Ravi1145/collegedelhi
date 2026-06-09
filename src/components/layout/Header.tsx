"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu, X, GraduationCap, ChevronDown, Sparkles, PhoneCall,
  Search, Calculator, BarChart3, BookOpen, Award, Compass,
  Building2, TrendingUp, Star, Settings, Briefcase, HeartPulse,
  Scale, Palette, FlaskConical,
  Newspaper, MessageCircle, LineChart, Gift
} from "lucide-react"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
const SearchModal = dynamic(() => import("@/components/ui/SearchModal"), { ssr: false })

const API = "https://college-delhi-backend.vercel.app/api"

interface BackendCollege { _id: string; name: string; slug: string; stream?: string }
interface BackendCourse  { _id: string; name: string; slug: string; stream?: string; level?: string }
interface BackendExam    { _id: string; name: string; slug: string; category?: string; streams?: string[] }

// Stream definitions — using Lucide icons instead of emoji to avoid encoding issues
const STREAM_DEFS = [
  { label: "Engineering",    href: "/engineering-colleges-delhi",       Icon: Settings },
  { label: "MBA",            href: "/best-mba-colleges-delhi",          Icon: Briefcase },
  { label: "Medical",        href: "/medical-colleges-delhi",           Icon: HeartPulse },
  { label: "Arts & Science", href: "/colleges?stream=Arts+%26+Science", Icon: FlaskConical },
  { label: "Law",            href: "/law-colleges-delhi",               Icon: Scale },
  { label: "Design",         href: "/design-colleges-delhi",            Icon: Palette },
]

const COLLEGE_KEYWORDS: Record<string, string[]> = {
  "Engineering":    ["engineering", "technology", "tech", "polytechnic"],
  "MBA":            ["mba", "management", "business", "pgdm"],
  "Medical":        ["medical", "medicine", "pharmacy", "dental", "nursing", "ayurved"],
  "Arts & Science": ["arts", "science", "commerce", "bca", "bsc", "humanities", "liberal"],
  "Law":            ["law", "legal"],
  "Design":         ["design", "architecture", "arch", "animation"],
}

const COURSE_KEYWORDS: Record<string, string[]> = {
  "Engineering":    ["engineering", "technology", "computer", "mechanical", "civil", "electrical"],
  "MBA":            ["mba", "management", "business", "pgdm", "bba"],
  "Medical":        ["medical", "mbbs", "pharmacy", "dental", "nursing", "bpharm"],
  "Arts & Science": ["arts", "science", "bca", "bsc", "bcom", "ba", "commerce"],
  "Law":            ["law", "llb"],
  "Design":         ["design", "architecture", "arch", "animation", "bdes"],
}

const EXAM_KEYWORDS: Record<string, string[]> = {
  "Engineering":    ["engineering", "jee", "gate"],
  "MBA":            ["mba", "cat", "snap", "mat", "cmat", "xat", "management"],
  "Medical":        ["medical", "neet", "aiims"],
  "Arts & Science": ["arts", "science", "commerce", "cuet"],
  "Law":            ["law", "clat", "ailet"],
  "Design":         ["design", "nata", "nid", "architecture"],
}

const tools = [
  { label: "College Predictor",    href: "/predictor",                              icon: GraduationCap, desc: "Find colleges by your score",  color: "text-red-700 bg-red-50" },
  { label: "Compare Colleges",     href: "/compare",                                icon: BarChart3,     desc: "Side-by-side comparison",       color: "text-blue-600 bg-blue-50" },
  { label: "ROI Calculator",       href: "/roi-calculator",                         icon: Calculator,    desc: "Calculate education returns",   color: "text-green-600 bg-green-50" },
  { label: "Fees Calculator",      href: "/delhi-college-fees-calculator",           icon: Calculator,    desc: "Total course fee estimator",    color: "text-yellow-600 bg-yellow-50" },
  { label: "Placement Comparator", href: "/delhi-college-placement-comparator",     icon: TrendingUp,    desc: "Compare placement data",        color: "text-indigo-600 bg-indigo-50" },
  { label: "Admission Deadlines",  href: "/delhi-admission-deadline-tracker-2026",  icon: Star,          desc: "2026 deadline tracker",         color: "text-red-600 bg-red-50" },
  { label: "NIRF Insights",        href: "/nirf-insights",                          icon: Award,         desc: "Official rankings & data",      color: "text-purple-600 bg-purple-50" },
  { label: "AI College Finder",    href: "/ai-finder",                              icon: Sparkles,      desc: "AI-powered matching",           color: "text-pink-600 bg-pink-50" },
  { label: "Free Counselling",     href: "/counselling",                            icon: PhoneCall,     desc: "Talk to an expert",             color: "text-teal-600 bg-teal-50" },
]

const explore = [
  { label: "News & Updates",  href: "/news",         icon: Newspaper },
  { label: "Cutoffs 2026",    href: "/cutoffs",      icon: LineChart },
  { label: "Scholarships",    href: "/scholarships", icon: Gift },
  { label: "Community Q&A",   href: "/qa",           icon: MessageCircle },
  { label: "Blog & Guides",   href: "/blog",         icon: BookOpen },
  { label: "Entrance Exams",  href: "/exams",        icon: Compass },
  { label: "All Courses",     href: "/courses",      icon: Star },
  { label: "All Colleges",    href: "/colleges",     icon: Building2 },
]

export default function Header() {
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [searchOpen,     setSearchOpen]     = useState(false)
  const [scrolled,       setScrolled]       = useState(false)

  const [backendColleges, setBackendColleges] = useState<BackendCollege[]>([])
  const [backendCourses,  setBackendCourses]  = useState<BackendCourse[]>([])
  const [backendExams,    setBackendExams]    = useState<BackendExam[]>([])

  const pathname    = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    fetch(`${API}/colleges?status=published&limit=60`)
      .then(r => r.json())
      .then(d => { if (d.success) setBackendColleges(d.data || []) })
      .catch(() => {})

    fetch(`${API}/courses?status=published&limit=60`)
      .then(r => r.json())
      .then(d => { if (d.success) setBackendCourses(d.data || []) })
      .catch(() => {})

    fetch(`${API}/exams?status=published&limit=60`)
      .then(r => r.json())
      .then(d => { if (d.success) setBackendExams(d.data || []) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [pathname])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const openDropdown  = (id: string) => { if (timerRef.current) clearTimeout(timerRef.current); setActiveDropdown(id) }
  const closeDropdown = () => { timerRef.current = setTimeout(() => setActiveDropdown(null), 120) }
  const keepDropdown  = () => { if (timerRef.current) clearTimeout(timerRef.current) }

  const filterByKeywords = (text: string, keywords: string[]) =>
    keywords.some(k => text.toLowerCase().includes(k))

  const getCollegesForStream = (label: string) => {
    const kw = COLLEGE_KEYWORDS[label] || []
    const items = backendColleges
      .filter(c => filterByKeywords(c.stream || "", kw))
      .slice(0, 5)
      .map(c => ({ name: c.name.length > 34 ? c.name.slice(0, 34) + "..." : c.name, href: `/colleges/${c.slug}` }))
    items.push({ name: `All ${label} Colleges`, href: `/colleges?stream=${encodeURIComponent(label)}` })
    return items
  }

  const getCoursesForStream = (label: string) => {
    const kw = COURSE_KEYWORDS[label] || []
    const items = backendCourses
      .filter(c => filterByKeywords((c.stream || "") + " " + (c.name || ""), kw))
      .slice(0, 4)
      .map(c => ({ name: c.name.length > 34 ? c.name.slice(0, 34) + "..." : c.name, href: `/courses/${c.slug}` }))
    items.push({ name: `All ${label} Courses`, href: `/courses?stream=${encodeURIComponent(label)}` })
    return items
  }

  const getExamsForStream = (label: string) => {
    const kw = EXAM_KEYWORDS[label] || []
    const items = backendExams
      .filter(e => {
        const text = [(e.category || ""), (e.name || ""), ...(e.streams || [])].join(" ")
        return filterByKeywords(text, kw)
      })
      .slice(0, 4)
      .map(e => ({ name: e.name, href: `/exams/${e.slug}` }))
    if (items.length === 0) items.push({ name: "All Exams", href: "/exams" })
    return items
  }

  const backendReady = backendColleges.length > 0 || backendCourses.length > 0 || backendExams.length > 0

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-200", scrolled ? "shadow-md" : "")}>
        {/* Top bar */}
        <div className="bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="CollegeDelhi - Best colleges in Delhi" height={52} className="h-12 sm:h-14 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
            </Link>

            {/* Search bar - desktop */}
            <div className="hidden md:flex flex-1 max-w-3xl mx-8">
              <SearchModal />
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-2">
              <button className="md:hidden text-white/70 hover:text-white p-1" onClick={() => setSearchOpen(v => !v)}>
                <Search className="w-5 h-5" />
              </button>
              <Link href="/ai-finder" className="hidden sm:flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4" />
                <span className="hidden lg:inline">AI Finder</span>
              </Link>
              <Link href="/counselling" className="hidden md:flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span className="hidden lg:inline">Free Counselling</span>
              </Link>
              <button className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-4 pb-3">
            <form action="/colleges" method="get">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input name="search" type="text" autoFocus placeholder="Search colleges, courses..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm rounded-xl pl-9 pr-4 py-2 outline-none" />
              </div>
            </form>
          </div>
        )}

        {/* Nav bar (desktop) */}
        <nav className="hidden lg:block bg-white border-b border-gray-200" ref={dropdownRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-0.5 h-10">

              {STREAM_DEFS.map((stream) => (
                <div key={stream.label} onMouseEnter={() => openDropdown(stream.label)} onMouseLeave={closeDropdown} className="relative h-full flex items-center">
                  <button className={cn(
                    "h-full px-3.5 text-sm font-medium flex items-center gap-1.5 transition-colors border-b-2",
                    activeDropdown === stream.label ? "text-red-700 border-red-600" : "text-gray-700 hover:text-red-700 border-transparent"
                  )}>
                    <stream.Icon className="w-3.5 h-3.5" />
                    {stream.label}
                    <ChevronDown className={cn("w-3 h-3 transition-transform", activeDropdown === stream.label && "rotate-180")} />
                  </button>

                  {activeDropdown === stream.label && (
                    <div onMouseEnter={keepDropdown} onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-0 w-[min(580px,calc(100vw-2rem))] bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-2 border-t-red-600 z-50 p-5">
                      <div className="grid grid-cols-3 gap-6">

                        {/* Colleges from backend */}
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Building2 className="w-3 h-3" /> Top Colleges
                          </p>
                          <ul className="space-y-1.5">
                            {(backendReady
                              ? getCollegesForStream(stream.label)
                              : [{ name: `All ${stream.label} Colleges`, href: `/colleges?stream=${encodeURIComponent(stream.label)}` }]
                            ).map((c, i) => (
                              <li key={i}>
                                <Link href={c.href} className="text-sm text-gray-700 hover:text-red-700 transition-colors block py-0.5">{c.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Courses from backend */}
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <BookOpen className="w-3 h-3" /> Courses
                          </p>
                          <ul className="space-y-1.5">
                            {(backendReady
                              ? getCoursesForStream(stream.label)
                              : [{ name: `All ${stream.label} Courses`, href: "/courses" }]
                            ).map((c, i) => (
                              <li key={i}>
                                <Link href={c.href} className="text-sm text-gray-700 hover:text-red-700 transition-colors block py-0.5">{c.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exams from backend */}
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Compass className="w-3 h-3" /> Entrance Exams
                          </p>
                          <ul className="space-y-1.5">
                            {(backendReady
                              ? getExamsForStream(stream.label)
                              : [{ name: "All Exams", href: "/exams" }]
                            ).map((e, i) => (
                              <li key={i}>
                                <Link href={e.href} className="text-sm text-gray-700 hover:text-red-700 transition-colors block py-0.5">{e.name}</Link>
                              </li>
                            ))}
                          </ul>
                          <Link href="/predictor" className="mt-3 block text-xs bg-red-50 text-red-800 font-semibold px-3 py-2 rounded-lg hover:bg-red-100 transition-colors">
                            Predict your college &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="w-px h-5 bg-gray-200 mx-1" />

              {/* Tools */}
              <div onMouseEnter={() => openDropdown("tools")} onMouseLeave={closeDropdown} className="relative h-full flex items-center">
                <button className={cn("h-full px-3.5 text-sm font-medium flex items-center gap-1.5 transition-colors border-b-2",
                  activeDropdown === "tools" ? "text-red-700 border-red-600" : "text-gray-700 hover:text-red-700 border-transparent")}>
                  <TrendingUp className="w-3.5 h-3.5" /> Tools
                  <ChevronDown className={cn("w-3 h-3 transition-transform", activeDropdown === "tools" && "rotate-180")} />
                </button>
                {activeDropdown === "tools" && (
                  <div onMouseEnter={keepDropdown} onMouseLeave={closeDropdown}
                    className="absolute top-full left-0 mt-0 w-[min(440px,calc(100vw-2rem))] bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-2 border-t-red-600 z-50 p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {tools.map(t => (
                        <Link key={t.href} href={t.href} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", t.color)}>
                            <t.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-red-700 transition-colors">{t.label}</p>
                            <p className="text-xs text-gray-400">{t.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Explore */}
              <div onMouseEnter={() => openDropdown("explore")} onMouseLeave={closeDropdown} className="relative h-full flex items-center">
                <button className={cn("h-full px-3.5 text-sm font-medium flex items-center gap-1.5 transition-colors border-b-2",
                  activeDropdown === "explore" ? "text-red-700 border-red-600" : "text-gray-700 hover:text-red-700 border-transparent")}>
                  <Compass className="w-3.5 h-3.5" /> Explore
                  <ChevronDown className={cn("w-3 h-3 transition-transform", activeDropdown === "explore" && "rotate-180")} />
                </button>
                {activeDropdown === "explore" && (
                  <div onMouseEnter={keepDropdown} onMouseLeave={closeDropdown}
                    className="absolute top-full left-0 mt-0 w-80 bg-white rounded-b-2xl shadow-2xl border border-gray-100 border-t-2 border-t-red-600 z-50 p-2">
                    <div className="grid grid-cols-2 gap-0.5">
                      {explore.map(e => (
                        <Link key={e.href} href={e.href} className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors rounded-lg">
                          <e.icon className="w-4 h-4 text-gray-400 flex-shrink-0" /> {e.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile slide-over */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[320px] max-w-full bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-[#0A1628]">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="CollegeDelhi" height={36} className="h-10 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-gray-50 border-b">
              <form action="/colleges" method="get">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input name="search" type="text" placeholder="Search colleges, courses..."
                    className="w-full bg-white border border-gray-200 text-sm rounded-lg pl-9 pr-3 py-2 outline-none" />
                </div>
              </form>
            </div>

            <div className="flex-1 overflow-y-auto">
              {STREAM_DEFS.map(stream => (
                <div key={stream.label} className="border-b border-gray-100">
                  <button onClick={() => setMobileExpanded(mobileExpanded === stream.label ? null : stream.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                    <span className="flex items-center gap-2">
                      <stream.Icon className="w-4 h-4 text-gray-500" />
                      {stream.label}
                    </span>
                    <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", mobileExpanded === stream.label && "rotate-180")} />
                  </button>
                  {mobileExpanded === stream.label && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-3">
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Colleges</p>
                        {(backendReady
                          ? getCollegesForStream(stream.label)
                          : [{ name: `All ${stream.label} Colleges`, href: `/colleges?stream=${encodeURIComponent(stream.label)}` }]
                        ).map((c, i) => (
                          <Link key={i} href={c.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-700 hover:text-red-700">{c.name}</Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Courses</p>
                        {(backendReady
                          ? getCoursesForStream(stream.label)
                          : [{ name: `All ${stream.label} Courses`, href: "/courses" }]
                        ).map((c, i) => (
                          <Link key={i} href={c.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-700 hover:text-red-700">{c.name}</Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Entrance Exams</p>
                        {(backendReady
                          ? getExamsForStream(stream.label)
                          : [{ name: "All Exams", href: "/exams" }]
                        ).map((e, i) => (
                          <Link key={i} href={e.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-700 hover:text-red-700">{e.name}</Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="border-b border-gray-100">
                <button onClick={() => setMobileExpanded(mobileExpanded === "tools" ? null : "tools")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                  <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Tools</span>
                  <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", mobileExpanded === "tools" && "rotate-180")} />
                </button>
                {mobileExpanded === "tools" && (
                  <div className="bg-gray-50 px-4 pb-3">
                    {tools.map(t => (
                      <Link key={t.href} href={t.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-red-700">
                        <t.icon className="w-4 h-4 text-gray-400" /> {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {explore.map(e => (
                  <Link key={e.href} href={e.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700 border-b border-gray-100">
                    <e.icon className="w-4 h-4 text-gray-400" /> {e.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3 pb-2 pt-1 border-t border-gray-100 grid grid-cols-4 gap-1.5">
              {[
                { href: "/news",         icon: Newspaper,     label: "News",         color: "text-blue-600 bg-blue-50" },
                { href: "/cutoffs",      icon: LineChart,     label: "Cutoffs",      color: "text-red-700 bg-red-50" },
                { href: "/scholarships", icon: Gift,          label: "Scholarships", color: "text-green-600 bg-green-50" },
                { href: "/qa",           icon: MessageCircle, label: "Q&A",          color: "text-purple-600 bg-purple-50" },
              ].map(({ href, icon: Icon, label, color }) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl ${color} transition-colors`}>
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] font-semibold">{label}</span>
                </Link>
              ))}
            </div>

            <div className="p-3 border-t bg-gray-50 grid grid-cols-2 gap-2">
              <Link href="/ai-finder" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-1.5 bg-red-600 text-white text-sm font-bold py-2.5 rounded-xl">
                <Sparkles className="w-4 h-4" /> AI Finder
              </Link>
              <Link href="/counselling" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-1.5 bg-green-500 text-white text-sm font-bold py-2.5 rounded-xl">
                <PhoneCall className="w-4 h-4" /> Counselling
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
