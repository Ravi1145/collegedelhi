"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { courses as staticCourses } from "@/data/courses"
import {
  Filter, X, ChevronDown, ChevronUp, RotateCcw,
  Clock, IndianRupee, TrendingUp, BookOpen, GraduationCap,
  Grid3X3, List, ArrowUpDown, SlidersHorizontal,
  Search, ChevronRight,
  Wrench, Briefcase, Stethoscope, Scale, Building2,
  BarChart2, Palette, Microscope, Monitor, Pill,
  Utensils, Brush, Camera
} from "lucide-react"
import { cn } from "@/lib/utils"

const COURSE_BANNER = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=75"

const StreamIcon: Record<string, React.ElementType> = {
  Engineering:            Wrench,
  Management:             Briefcase,
  MBA:                    Briefcase,
  Medical:                Stethoscope,
  Law:                    Scale,
  Architecture:           Building2,
  Commerce:               BarChart2,
  Arts:                   Palette,
  Science:                Microscope,
  Design:                 Brush,
  "Computer Application": Monitor,
  Pharmacy:               Pill,
  Education:              GraduationCap,
  "Hotel Management":     Utensils,
  Finance:                TrendingUp,
  Animation:              Camera,
}
const DefaultIcon = BookOpen

// â”€â”€ Constants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const STREAM_TABS = ["All", "Engineering", "MBA", "Management", "Medical", "Law", "Design", "Architecture", "Commerce", "Science", "Arts", "Pharmacy", "Computer Application", "Others"]

const LEVELS       = ["UG", "PG", "Diploma", "Certificate", "After 10th", "Doctorate", "Advanced Masters", "Post Graduation", "Graduation", "Certification", "Others"]
const STREAMS_FILTER = ["Engineering", "Medical", "MBA", "Management", "Law", "Arts", "Commerce", "Science", "Design", "Architecture", "Pharmacy", "Computer Application", "Finance", "Others"]
const MODES        = ["Full-time", "Part-time", "Distance", "Online", "Hybrid"]
const DURATIONS    = ["6 Months", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "5.5 Years", "3-5 Years"]
const EXAMS        = ["JEE Main", "JEE Main", "JEE Advanced", "NEET", "GATE", "CAT", "SNAP", "MAT", "CMAT", "NATA", "CLAT", "UGC-NET"]

const LEVEL_COLOR: Record<string, { bg: string; text: string; dot: string }> = {
  'UG':               { bg: 'bg-blue-50',    text: 'text-blue-700',   dot: 'bg-blue-500' },
  'PG':               { bg: 'bg-purple-50',  text: 'text-purple-700', dot: 'bg-purple-500' },
  'Diploma':          { bg: 'bg-yellow-50',  text: 'text-yellow-700', dot: 'bg-yellow-500' },
  'Certificate':      { bg: 'bg-green-50',   text: 'text-green-700',  dot: 'bg-green-500' },
  'After 10th':       { bg: 'bg-red-50',  text: 'text-red-800', dot: 'bg-red-600' },
  'Doctorate':        { bg: 'bg-red-50',     text: 'text-red-700',    dot: 'bg-red-500' },
  'Advanced Masters': { bg: 'bg-indigo-50',  text: 'text-indigo-700', dot: 'bg-indigo-500' },
  'Post Graduation':  { bg: 'bg-violet-50',  text: 'text-violet-700', dot: 'bg-violet-500' },
  'Graduation':       { bg: 'bg-teal-50',    text: 'text-teal-700',   dot: 'bg-teal-500' },
  'Certification':    { bg: 'bg-cyan-50',    text: 'text-cyan-700',   dot: 'bg-cyan-500' },
  'Others':           { bg: 'bg-gray-50',    text: 'text-gray-600',   dot: 'bg-gray-400' },
}

const fmt = (n: number) => {
  if (!n || n === 0) return null
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000)   return `₹${(n / 1000).toFixed(0)}K`
  return `₹${n}`
}

// Normalise static Course type → shape the card expects
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

const allNormalisedCourses = staticCourses.map(normalise)

// â”€â”€ FilterSection (collapsible) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-sm font-semibold text-gray-800 mb-3">
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && children}
    </div>
  )
}

// â”€â”€ CheckboxGroup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CheckboxGroup({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => onChange(opt)}
            className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-400 accent-red-600" />
          <span className={cn("text-sm transition-colors", selected.includes(opt) ? "text-red-700 font-medium" : "text-gray-600 group-hover:text-gray-900")}>{opt}</span>
        </label>
      ))}
    </div>
  )
}

const levelBadge: Record<string, string> = {
  UG: "bg-blue-500 text-white", PG: "bg-purple-500 text-white",
  Diploma: "bg-green-500 text-white", Doctorate: "bg-red-500 text-white",
  Certificate: "bg-teal-500 text-white", "After 10th": "bg-red-600 text-white",
  "Advanced Masters": "bg-indigo-500 text-white",
}

// â”€â”€ CourseCard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CourseCard({ course, viewMode }: { course: any; viewMode: 'grid' | 'list' }) {
  const Icon = StreamIcon[course.stream] || DefaultIcon
  const lvlBadge = levelBadge[course.level] || "bg-gray-500 text-white"

  // List view — compact horizontal row
  if (viewMode === 'list') {
    return (
      <Link href={`/courses/${course.slug}`}
        className="group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-red-300 hover:shadow-md transition-all">
        {/* Icon */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", lvlBadge)}>{course.level}</span>
            <span className="text-xs text-gray-400">{course.stream}</span>
          </div>
          <p className="font-bold text-gray-900 text-sm group-hover:text-red-700 transition-colors truncate">{course.name}</p>
          {course.fullName && <p className="text-xs text-gray-400 truncate">{course.fullName}</p>}
        </div>
        {/* Stats */}
        <div className="hidden sm:flex items-center gap-5 shrink-0 text-sm">
          {course.duration && <div className="flex items-center gap-1.5 text-gray-500 text-xs"><Clock className="w-3.5 h-3.5" />{course.duration}</div>}
          {course.fees?.min > 0 && <div className="flex items-center gap-1.5 text-gray-600 text-xs"><IndianRupee className="w-3.5 h-3.5" />{fmt(course.fees.min)}+</div>}
          {course.avgSalary?.min > 0 && <div className="flex items-center gap-1.5 text-green-600 font-medium text-xs"><TrendingUp className="w-3.5 h-3.5" />{fmt(course.avgSalary.min)} avg</div>}
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-red-600 transition-colors shrink-0" />
      </Link>
    )
  }

  // Grid view — same design as FeaturedCourses home page card
  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-gray-100 hover:border-red-400 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">

        {/* Dark header with bg image */}
        <div className="relative p-4 pb-3 overflow-hidden"
          style={{ backgroundImage: `url(${COURSE_BANNER})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]/92" />

          {/* Level badge top-right */}
          <span className={cn("absolute top-3 right-3 z-20 text-xs font-bold px-2.5 py-0.5 rounded-full", lvlBadge)}>
            {course.level}
          </span>

          {/* Stream icon + name */}
          <div className="relative z-10 flex items-start gap-3 pr-10">
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
                {course.fees?.min > 0 ? fmt(course.fees.min) + (course.fees.max > course.fees.min ? ` – ${fmt(course.fees.max)}` : "+") : "—"}
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5">
              <div className="flex items-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="text-[9px] text-blue-500 font-semibold uppercase tracking-wider">Avg Salary</span>
              </div>
              <p className="text-xs font-bold text-gray-900 leading-tight">
                {course.avgSalary?.min > 0 ? fmt(course.avgSalary.min) + " LPA+" : "—"}
              </p>
            </div>
          </div>

          {/* Entrance exams */}
          {course.entranceExams?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {course.entranceExams.slice(0, 3).map((e: string, i: number) => (
                <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full font-medium">{e}</span>
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
}

// â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function CoursesClient() {
  const [activeStream, setActiveStream] = useState("All")
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState("name")
  const [search, setSearch] = useState("")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sidebar filter state
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedStreams, setSelectedStreams] = useState<string[]>([])
  const [selectedModes, setSelectedModes] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedExams, setSelectedExams] = useState<string[]>([])
  const [feesMax, setFeesMax] = useState(2000000)

  const toggleArr = (arr: string[], setArr: (v: string[]) => void, val: string) =>
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])

  // Active filter count
  const activeCount = selectedLevels.length + selectedStreams.length + selectedModes.length + selectedDurations.length + selectedExams.length + (feesMax < 2000000 ? 1 : 0)

  const resetFilters = () => {
    setSelectedLevels([]); setSelectedStreams([]); setSelectedModes([])
    setSelectedDurations([]); setSelectedExams([]); setFeesMax(2000000)
  }

  // Filter + sort
  const filtered = useMemo(() => {
    let result = [...allNormalisedCourses]

    // Stream tab
    if (activeStream !== "All") result = result.filter(c => c.stream === activeStream)

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(c =>
        c.name?.toLowerCase().includes(q) ||
        c.fullName?.toLowerCase().includes(q) ||
        c.stream?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q)
      )
    }

    // Sidebar filters
    if (selectedLevels.length)    result = result.filter(c => selectedLevels.includes(c.level))
    if (selectedStreams.length)   result = result.filter(c => selectedStreams.includes(c.stream))
    if (selectedModes.length)     result = result.filter(c => selectedModes.includes((c as any).mode))
    if (selectedDurations.length) result = result.filter(c => selectedDurations.includes(c.duration))
    if (selectedExams.length)     result = result.filter(c => c.entranceExams?.some((e: string) => selectedExams.includes(e)))
    if (feesMax < 2000000)        result = result.filter(c => !c.fees?.min || c.fees.min <= feesMax)

    // Sort
    switch (sortBy) {
      case 'salary_high': result.sort((a, b) => (b.avgSalary?.max || 0) - (a.avgSalary?.max || 0)); break
      case 'fees_low':    result.sort((a, b) => (a.fees?.min || 0) - (b.fees?.min || 0)); break
      case 'fees_high':   result.sort((a, b) => (b.fees?.max || 0) - (a.fees?.max || 0)); break
      case 'name':        result.sort((a, b) => a.name.localeCompare(b.name)); break
      case 'duration_short': result.sort((a, b) => (a.duration || '').localeCompare(b.duration || '')); break
    }

    return result
  }, [activeStream, search, selectedLevels, selectedStreams, selectedModes, selectedDurations, selectedExams, feesMax, sortBy])

  // â”€â”€ Filter sidebar content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const filterContent = (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-red-600" />
          <h2 className="font-bold text-gray-900">Filters</h2>
          {activeCount > 0 && <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{activeCount}</span>}
        </div>
        {activeCount > 0 && (
          <button onClick={resetFilters} className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-700 transition-colors">
            <RotateCcw className="w-3 h-3" /> Reset All
          </button>
        )}
      </div>

      <FilterSection title="Level">
        <CheckboxGroup options={LEVELS} selected={selectedLevels} onChange={v => toggleArr(selectedLevels, setSelectedLevels, v)} />
      </FilterSection>

      <FilterSection title="Stream / Program">
        <CheckboxGroup options={STREAMS_FILTER} selected={selectedStreams} onChange={v => toggleArr(selectedStreams, setSelectedStreams, v)} />
      </FilterSection>

      <FilterSection title="Study Mode" defaultOpen={false}>
        <CheckboxGroup options={MODES} selected={selectedModes} onChange={v => toggleArr(selectedModes, setSelectedModes, v)} />
      </FilterSection>

      <FilterSection title="Duration" defaultOpen={false}>
        <CheckboxGroup options={DURATIONS} selected={selectedDurations} onChange={v => toggleArr(selectedDurations, setSelectedDurations, v)} />
      </FilterSection>

      <FilterSection title="Annual Fees Range" defaultOpen={false}>
        <div>
          <label className="text-xs text-gray-500 mb-2 block">
            Max Fees: {feesMax >= 2000000 ? 'Any' : `₹${(feesMax / 100000).toFixed(1)}L/yr`}
          </label>
          <input type="range" min={0} max={2000000} step={50000} value={feesMax}
            onChange={e => setFeesMax(Number(e.target.value))}
            className="w-full accent-red-600" />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>Free</span><span>₹20L/yr</span></div>
        </div>
      </FilterSection>

      <FilterSection title="Entrance Exam" defaultOpen={false}>
        <CheckboxGroup options={EXAMS} selected={selectedExams} onChange={v => toggleArr(selectedExams, setSelectedExams, v)} />
      </FilterSection>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Stream tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4 mb-6 overflow-x-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Filter by Stream</p>
        <div className="flex gap-2 flex-wrap">
          {STREAM_TABS.map(tab => (
            <button key={tab} onClick={() => setActiveStream(tab)}
              className={cn("px-3.5 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeStream === tab ? "bg-red-600 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* â”€â”€ Sidebar Filters — sticky â”€â”€ */}
        <div className="lg:w-72 flex-shrink-0">
          {/* Mobile button */}
          <div className="lg:hidden mb-4">
            <button onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:border-red-300 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
              {activeCount > 0 && <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{activeCount}</span>}
            </button>
          </div>
          {/* Desktop sticky */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            {filterContent}
          </div>
        </div>

        {/* â”€â”€ Main content â”€â”€ */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="flex items-center gap-3 mb-5 bg-white rounded-xl border border-gray-100 px-4 py-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..."
                className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-red-400" />
            </div>
            {/* Count */}
            <p className="text-sm text-gray-500 whitespace-nowrap">
              <span className="font-semibold text-gray-900">{filtered.length}</span> courses
            </p>
            {/* Sort */}
            <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
              <ArrowUpDown className="w-4 h-4 text-gray-400 shrink-0" />
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="text-sm text-gray-700 bg-transparent outline-none cursor-pointer">
                <option value="name">A - Z</option>
                <option value="salary_high">Highest Salary</option>
                <option value="fees_low">Fees: Low to High</option>
                <option value="fees_high">Fees: High to Low</option>
                <option value="duration_short">Duration: Short First</option>
              </select>
            </div>
            {/* View toggle */}
            <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
              <button onClick={() => setViewMode('grid')} className={cn("p-1.5 rounded", viewMode === 'grid' ? "bg-red-100 text-red-700" : "text-gray-400 hover:text-gray-600")}><Grid3X3 className="w-4 h-4" /></button>
              <button onClick={() => setViewMode('list')} className={cn("p-1.5 rounded", viewMode === 'list' ? "bg-red-100 text-red-700" : "text-gray-400 hover:text-gray-600")}><List className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Active filter chips */}
          {activeCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedLevels.map(v => <Chip key={v} label={v} onRemove={() => toggleArr(selectedLevels, setSelectedLevels, v)} />)}
              {selectedStreams.map(v => <Chip key={v} label={v} onRemove={() => toggleArr(selectedStreams, setSelectedStreams, v)} />)}
              {selectedModes.map(v => <Chip key={v} label={v} onRemove={() => toggleArr(selectedModes, setSelectedModes, v)} />)}
              {selectedDurations.map(v => <Chip key={v} label={v} onRemove={() => toggleArr(selectedDurations, setSelectedDurations, v)} />)}
              {selectedExams.map(v => <Chip key={v} label={v} onRemove={() => toggleArr(selectedExams, setSelectedExams, v)} />)}
              {feesMax < 2000000 && <Chip label={`Max ₹${(feesMax / 100000).toFixed(0)}L`} onRemove={() => setFeesMax(2000000)} />}
            </div>
          )}

          {/* Course grid / list */}
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SlidersHorizontal className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500 text-sm mb-4">Try adjusting your filters</p>
              <button onClick={resetFilters} className="text-sm text-red-700 hover:text-red-800 font-medium">Reset all filters</button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(c => <CourseCard key={c._id} course={c} viewMode="grid" />)}
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map(c => <CourseCard key={c._id} course={c} viewMode="list" />)}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b sticky top-0 bg-white">
              <span className="font-bold text-gray-900">Filters {activeCount > 0 && `(${activeCount})`}</span>
              <button onClick={() => setMobileFiltersOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
            </div>
            <div className="p-5">{filterContent}</div>
            <div className="px-5 pb-8 pt-2 flex gap-3 sticky bottom-0 bg-white border-t">
              <button onClick={resetFilters} className="flex-1 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700">Reset</button>
              <button onClick={() => setMobileFiltersOpen(false)} className="flex-1 bg-red-600 text-white rounded-xl py-3 text-sm font-semibold">Apply {activeCount > 0 && `(${activeCount})`}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// â”€â”€ Chip component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1 bg-red-50 text-red-800 text-xs font-medium px-3 py-1.5 rounded-full border border-red-200">
      {label}
      <button onClick={onRemove} className="ml-0.5 hover:text-orange-900"><X className="w-3 h-3" /></button>
    </span>
  )
}

