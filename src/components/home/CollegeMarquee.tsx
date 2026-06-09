import Link from "next/link"
import { Building2 } from "lucide-react"

// Color palette — cycle through for variety
const COLORS = [
  { color: "#1E40AF", bg: "#EFF6FF" },
  { color: "#B91C1C", bg: "#FEF2F2" },
  { color: "#047857", bg: "#ECFDF5" },
  { color: "#7C3AED", bg: "#F5F3FF" },
  { color: "#B45309", bg: "#FFFBEB" },
  { color: "#0369A1", bg: "#F0F9FF" },
  { color: "#065F46", bg: "#ECFDF5" },
  { color: "#9D174D", bg: "#FDF2F8" },
  { color: "#92400E", bg: "#FFF7ED" },
  { color: "#1D4ED8", bg: "#EFF6FF" },
]

interface College {
  _id: string
  name: string
  slug: string
  stream?: string
  type?: string
  logo_base64?: string
  logo_filename?: string
}

async function fetchColleges(): Promise<College[]> {
  try {
    const res = await fetch(
      "https://college-delhi-backend.vercel.app/api/colleges?status=published&limit=24",
      { next: { revalidate: 300 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? (data.data || []) : []
  } catch {
    return []
  }
}

function getAbbr(name: string): string {
  const upper = name.match(/[A-Z]/g)?.join("") || ""
  if (upper.length >= 2 && upper.length <= 5) return upper
  return name.split(" ").map((w: string) => w[0]).join("").toUpperCase().slice(0, 4)
}

export default async function CollegeMarquee() {
  const colleges = await fetchColleges()

  // Fallback if backend is empty
  const items: College[] = colleges.length > 0 ? colleges : [
    { _id: "1", name: "DTU Delhi Technological University", slug: "DTU Delhi-college-of-engineering-DELHI" },
    { _id: "2", name: "Amity University Delhi", slug: "mit-world-peace-university" },
    { _id: "3", name: "NSUT Delhi", slug: "NSUT-DELHI-institute-of-computer-technology" },
    { _id: "4", name: "Symbiosis International University", slug: "symbiosis-international-university" },
    { _id: "5", name: "DY Patil Vidyapeeth", slug: "dpu-dr-dy-patil-vidyapeeth" },
    { _id: "6", name: "IIIT Delhi", slug: "vit-DELHI-vishwakarma-institute-of-technology" },
    { _id: "7", name: "PCCOE DELHI", slug: "pccoe-Rohini-college-of-engineering" },
    { _id: "8", name: "Indira College Delhi", slug: "indira-college-delhi" },
  ]

  // Duplicate 3x for seamless infinite scroll
  const ITEMS = [...items, ...items, ...items]

  return (
    <section className="bg-white py-8 border-b border-gray-100">
      {/* Section title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200 max-w-[80px]" />
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            Top colleges in Delhi
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200 max-w-[80px]" />
        </div>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="group flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {ITEMS.map((college, i) => {
            const palette = COLORS[i % COLORS.length]
            const abbr = getAbbr(college.name)
            const displayName = college.name.split(" ").slice(0, 3).join(" ")
            const subtitle = college.name.split(" ").slice(3).join(" ") || college.stream || ""
            return (
              <CollegeCard
                key={`${college._id}-${i}`}
                slug={college.slug}
                abbr={abbr}
                name={displayName}
                subtitle={subtitle}
                color={palette.color}
                bg={palette.bg}
                logo={college.logo_base64 || ""}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// â”€â”€ CollegeCard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CollegeCard({
  slug, abbr, name, subtitle, color, bg, logo
}: {
  slug: string
  abbr: string
  name: string
  subtitle: string
  color: string
  bg: string
  logo: string
}) {
  return (
    <Link
      href={`/colleges/${slug}`}
      className="group/card flex items-center gap-3 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-[210px] cursor-pointer"
    >
      {/* Logo — real image if available, else letter avatar */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden select-none"
        style={logo ? {} : { backgroundColor: bg }}
      >
        {logo ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-full h-full object-contain p-0.5"
          />
        ) : (
          <span className="font-extrabold text-base" style={{ color }}>
            {abbr.slice(0, 2)}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-gray-900 font-bold text-sm truncate group-hover/card:text-red-600 transition-colors">
          {name}
        </p>
        {subtitle && (
          <p className="text-gray-400 text-[11px] truncate leading-tight mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  )
}


