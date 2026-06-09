import Link from "next/link"
import { ExternalLink } from "lucide-react"

const API = "https://college-delhi-backend.vercel.app/api"

interface Props {
  stream: string      // e.g. "Engineering", "MBA"
  keywords?: string[] // extra keywords to match stream field in DB
}

interface DBCollege {
  _id: string
  name: string
  slug: string
  type?: string
  naac_grade?: string
  nirf_rank?: number
  avg_placement?: number
  fee_range_min?: number
  fee_range_max?: number
  established?: number
  stream?: string
  description?: string
  highlight?: string
  entrance_exams?: string[]
}

async function fetchStreamColleges(stream: string, keywords: string[]): Promise<DBCollege[]> {
  try {
    const res = await fetch(
      `${API}/colleges?status=published&limit=30`,
      { next: { revalidate: 300 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    if (!data.success) return []
    const all: DBCollege[] = data.data || []
    const kw = [stream.toLowerCase(), ...keywords.map(k => k.toLowerCase())]
    return all.filter(c => {
      const s = (c.stream || "").toLowerCase()
      return kw.some(k => s.includes(k))
    })
  } catch { return [] }
}

function formatFees(min?: number, max?: number): string {
  if (!min && !max) return "—"
  const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${(n / 1000).toFixed(0)}K`
  if (min && max) return `${fmt(min)}–${fmt(max)}/yr`
  if (min) return `${fmt(min)}/yr`
  return `${fmt(max!)}/yr`
}

function formatPlacement(avg?: number): string {
  if (!avg) return "—"
  return `₹${(avg / 100000).toFixed(1)} LPA avg`
}

export default async function StreamCollegesTable({ stream, keywords = [] }: Props) {
  const colleges = await fetchStreamColleges(stream, keywords)

  if (colleges.length === 0) return null

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{stream} College Rankings &amp; Comparison 2026</h2>
          <p className="text-xs text-gray-400 mt-0.5">Live data from CollegeDelhi database · {colleges.length} colleges listed</p>
        </div>
        <Link href={`/colleges?stream=${encodeURIComponent(stream)}`}
          className="text-xs text-red-700 font-semibold hover:underline hidden sm:block">
          View All â†’
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#0A1628] text-white">
            <tr>
              <th className="px-3 sm:px-4 py-3 text-left w-8">#</th>
              <th className="px-3 sm:px-4 py-3 text-left">College</th>
              <th className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">NAAC</th>
              <th className="px-3 sm:px-4 py-3 text-right hidden md:table-cell">Fees/Year</th>
              <th className="px-3 sm:px-4 py-3 text-right hidden lg:table-cell">Avg Package</th>
              <th className="px-3 sm:px-4 py-3 text-center">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {colleges.map((c, i) => (
              <tr key={c._id} className="hover:bg-red-50/30 transition-colors">
                <td className="px-3 sm:px-4 py-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${i < 3 ? "bg-red-100 text-red-800" : "bg-gray-50 text-gray-500"}`}>
                    {i + 1}
                  </div>
                </td>
                <td className="px-3 sm:px-4 py-3">
                  <p className="font-semibold text-gray-900">{c.name}</p>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {c.type && <span className="text-xs text-gray-500">{c.type}</span>}
                    {c.nirf_rank && <span className="text-xs bg-purple-50 text-purple-700 px-1.5 rounded-full">NIRF #{c.nirf_rank}</span>}
                    {c.highlight && <span className="text-xs bg-blue-50 text-blue-700 px-1.5 rounded-full">{c.highlight}</span>}
                  </div>
                </td>
                <td className="px-3 sm:px-4 py-3 text-center hidden sm:table-cell">
                  {c.naac_grade ? (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.naac_grade === "A++" ? "bg-green-100 text-green-800" : c.naac_grade === "A+" ? "bg-green-100 text-green-700" : c.naac_grade?.startsWith("A") ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {c.naac_grade}
                    </span>
                  ) : <span className="text-gray-400">—</span>}
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-xs text-gray-700 hidden md:table-cell">
                  {formatFees(c.fee_range_min, c.fee_range_max)}
                </td>
                <td className="px-3 sm:px-4 py-3 text-right text-xs font-semibold text-green-700 hidden lg:table-cell">
                  {formatPlacement(c.avg_placement)}
                </td>
                <td className="px-3 sm:px-4 py-3 text-center">
                  <Link href={`/colleges/${c.slug}`}
                    className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 rounded-lg transition-colors">
                    View <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

