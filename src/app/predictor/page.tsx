"use client"
import { useState, useEffect } from "react"
import { GraduationCap, Search, ChevronRight, MapPin, TrendingUp, Award, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import type { DBCollege } from "@/lib/db"
import { cn } from "@/lib/utils"

type Exam = "JEE Main" | "JEE Advanced" | "NEET" | "CAT" | "SNAP" | "MAT" | "CMAT"
type Category = "General" | "OBC" | "SC" | "ST"

const EXAM_RANGES: Record<string, { label: string; unit: string; min: number; max: number; streams: string[] }> = {
  "JEE Main":     { label: "JEE Main Percentile",  unit: "percentile", min: 0,     max: 100,   streams: ["Engineering"] },
  "JEE Advanced": { label: "JEE Advanced Rank",     unit: "rank",       min: 1,     max: 50000, streams: ["Engineering"] },
  "NEET":         { label: "NEET Score",             unit: "score",      min: 0,     max: 720,   streams: ["Medical"] },
  "CAT":          { label: "CAT Percentile",         unit: "percentile", min: 0,     max: 100,   streams: ["MBA"] },
  "SNAP":         { label: "SNAP Score",             unit: "score",      min: 0,     max: 150,   streams: ["MBA"] },
  "MAT":          { label: "MAT Score",              unit: "score",      min: 0,     max: 800,   streams: ["MBA"] },
  "CMAT":         { label: "CMAT Score",             unit: "score",      min: 0,     max: 400,   streams: ["MBA"] },
}

function getProbability(college: DBCollege, exam: Exam, score: number, category: Category): number {
  const catBonus = category === "SC" || category === "ST" ? 15 : category === "OBC" ? 7 : 0
  const collegeStream = (college.stream as string) || ""
  const collegeType   = (college.type as string) || ""
  const collegeNaac   = (college.naac_grade as string) || ""

  if (exam === "JEE Main" && collegeStream === "Engineering") {
    const adjusted = Math.min(score + catBonus * 0.3, 100)
    if (collegeType === "Government") return adjusted >= 99.5 ? 85 : adjusted >= 99 ? 65 : adjusted >= 97 ? 40 : adjusted >= 95 ? 20 : 5
    if (collegeNaac === "A+" || collegeNaac === "A++") return adjusted >= 97 ? 80 : adjusted >= 95 ? 65 : adjusted >= 90 ? 45 : adjusted >= 85 ? 25 : 10
    return adjusted >= 90 ? 85 : adjusted >= 85 ? 70 : adjusted >= 80 ? 55 : adjusted >= 75 ? 40 : adjusted >= 60 ? 20 : 10
  }
  if (exam === "JEE Advanced" && collegeStream === "Engineering") {
    const rank = score
    const adjustedRank = Math.max(rank - catBonus * 50, 1)
    if (collegeType === "Government") return adjustedRank <= 500 ? 85 : adjustedRank <= 1500 ? 65 : adjustedRank <= 5000 ? 40 : adjustedRank <= 15000 ? 20 : 5
    return adjustedRank <= 2000 ? 80 : adjustedRank <= 5000 ? 65 : adjustedRank <= 10000 ? 45 : adjustedRank <= 20000 ? 25 : 10
  }
  if (exam === "NEET" && collegeStream === "Medical") {
    const catMin = category === "General" ? 550 : category === "OBC" ? 500 : 450
    if (collegeType === "Government") return score >= catMin + 40 ? 70 : score >= catMin + 20 ? 45 : score >= catMin ? 25 : 5
    return score >= catMin + 20 ? 75 : score >= catMin ? 55 : score >= catMin - 20 ? 35 : 10
  }
  if ((exam === "CAT" || exam === "SNAP" || exam === "MAT" || exam === "CMAT") && collegeStream === "MBA") {
    const percentile = exam === "CAT" ? score : exam === "SNAP" ? (score / 150) * 100 : exam === "MAT" ? (score / 800) * 100 : (score / 400) * 100
    const adjusted = Math.min(percentile + catBonus * 0.5, 100)
    if (collegeNaac === "A++" || collegeNaac === "A+") return adjusted >= 90 ? 75 : adjusted >= 80 ? 55 : adjusted >= 70 ? 35 : 15
    return adjusted >= 80 ? 80 : adjusted >= 70 ? 65 : adjusted >= 60 ? 50 : adjusted >= 50 ? 30 : 15
  }
  return 0
}

function getProbabilityLabel(p: number) {
  if (p >= 70) return { label: "High Chance",  color: "text-green-700 bg-green-100" }
  if (p >= 40) return { label: "Good Chance",  color: "text-blue-700 bg-blue-100" }
  if (p >= 20) return { label: "Moderate",     color: "text-yellow-700 bg-yellow-100" }
  return           { label: "Low Chance",      color: "text-red-700 bg-red-100" }
}

export default function PredictorPage() {
  const [exam, setExam]         = useState<Exam>("JEE Main")
  const [score, setScore]       = useState("")
  const [category, setCategory] = useState<Category>("General")
  const [colleges, setColleges] = useState<DBCollege[]>([])
  const [results, setResults]   = useState<{ college: DBCollege; probability: number }[] | null>(null)
  const [predicted, setPredicted] = useState(false)
  const [loading, setLoading]   = useState(true)

  const examConfig = EXAM_RANGES[exam]

  useEffect(() => {
    fetch('/api/colleges?limit=500')
      .then(r => r.ok ? r.json() : { colleges: [] })
      .then(d => {
        const mapped: DBCollege[] = (d.colleges ?? []).map((c: Record<string, unknown>) => ({
          id:            c.id as number,
          slug:          c.slug as string,
          name:          c.name as string,
          short_name:    c.shortName as string,
          type:          c.type as string,
          naac_grade:    c.naac as string,
          nirf_rank:     c.nirfRank as number | null,
          city:          c.location as string,
          stream:        c.stream as string,
          avg_placement: c.avgPlacement as number,
          fees_min:      (c.feesRange as { min: number } | undefined)?.min,
          fees_max:      (c.feesRange as { max: number } | undefined)?.max,
          hostel:        c.hostel as boolean,
          rating:        c.rating as number,
          review_count:  c.reviewCount as number,
        }))
        setColleges(mapped)
      })
      .catch(() => setColleges([]))
      .finally(() => setLoading(false))
  }, [])

  const handlePredict = () => {
    const numScore = parseFloat(score)
    if (isNaN(numScore)) return
    const eligible = colleges.filter((c) => examConfig.streams.includes((c.stream as string) || ""))
    const scored = eligible
      .map((c) => ({ college: c, probability: getProbability(c, exam, numScore, category) }))
      .filter((r) => r.probability > 0)
      .sort((a, b) => b.probability - a.probability)
    setResults(scored)
    setPredicted(true)
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> FREE COLLEGE PREDICTOR
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Find Your Best-Fit Colleges
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto text-base">
            Enter your exam score and get a personalised list of Delhi colleges with admission probability.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Predictor Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Enter Your Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Exam */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Exam</label>
              <select
                value={exam}
                onChange={(e) => { setExam(e.target.value as Exam); setResults(null); setPredicted(false) }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400 bg-white"
              >
                {Object.keys(EXAM_RANGES).map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
            {/* Score */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Your {examConfig.unit === "percentile" ? "Percentile" : examConfig.unit === "rank" ? "Rank" : "Score"}
              </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder={examConfig.unit === "rank" ? "e.g. 5000" : "e.g. 95.5"}
                min={examConfig.min}
                max={examConfig.max}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400"
              />
            </div>
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400 bg-white"
              >
                {(["General", "OBC", "SC", "ST"] as Category[]).map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* CTA */}
            <div className="flex items-end">
              <button
                onClick={handlePredict}
                disabled={!score || loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <Search className="w-4 h-4" /> {loading ? "Loading..." : "Predict Colleges"}
              </button>
            </div>
          </div>

          {/* Score range hint */}
          <p className="text-xs text-gray-400 mt-3">
            Valid range: {examConfig.min} - {examConfig.max} {examConfig.unit} | Covers: {examConfig.streams.join(", ")} stream colleges in Delhi
          </p>
        </div>

        {/* Results */}
        {predicted && results !== null && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {results.length} Colleges Found <span className="text-sm font-normal text-gray-400">for {exam} {examConfig.unit === "rank" ? "Rank" : "Score"} {score} ({category})</span>
              </h2>
              <Link href="/counselling" className="text-xs text-red-700 font-semibold hover:underline">
                Get expert guidance &rarr;
              </Link>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <p className="text-gray-500 mb-3">No colleges matched your score. Consider improving your score or exploring other exams.</p>
                <Link href="/ai-finder" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
                  <Sparkles className="w-4 h-4" /> Try AI Finder
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map(({ college, probability }) => {
                  const { label, color } = getProbabilityLabel(probability)
                  return (
                    <div key={college.slug} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-red-200 transition-colors">
                      <div className="w-12 h-12 bg-[#0A1628] rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {(college.short_name ?? college.name).slice(0, 3)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-sm">{college.name}</h3>
                          {college.nirf_rank && (
                            <span className="text-[11px] bg-purple-50 text-purple-700 font-semibold px-2 py-0.5 rounded-full">
                              NIRF #{college.nirf_rank}
                            </span>
                          )}
                          {college.naac_grade && (
                            <span className="text-[11px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                              NAAC {college.naac_grade}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{college.city}</span>
                          <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" />Avg ₹{((college.avg_placement ?? 0) / 100000).toFixed(1)}L</span>
                          <span className="flex items-center gap-1"><Award className="w-3 h-3" />{college.type}</span>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                        <div className="text-center">
                          <p className="text-2xl font-extrabold text-gray-900">{probability}%</p>
                          <span className={cn("text-[11px] font-bold px-2 py-0.5 rounded-full", color)}>{label}</span>
                        </div>
                        <Link
                          href={`/colleges/${college.slug}`}
                          className="flex items-center gap-1 text-xs text-red-700 font-semibold hover:underline whitespace-nowrap"
                        >
                          View Details <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* CTA banner */}
            <div className="mt-6 bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <p className="font-bold">Want personalised guidance?</p>
                <p className="text-blue-200 text-sm">Talk to our expert counsellors - free, 15-min session.</p>
              </div>
              <Link href="/counselling" className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm whitespace-nowrap transition-colors">
                Book Free Session &rarr;
              </Link>
            </div>
          </div>
        )}
      {/* SEO Content Section */}
      <div className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About the Delhi College Predictor 2026</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The CollegeDelhi College Predictor helps students identify which Delhi colleges they are eligible for based on their entrance exam performance. Enter your <strong>JEE Main percentile</strong>, <strong>JEE Advanced rank</strong>, <strong>NEET score</strong>, <strong>CAT percentile</strong>, or <strong>SNAP score</strong> and instantly see admission probabilities for 100+ Delhi colleges including DTU, NSIT, IGDTUW, FMS Delhi, AIIMS Delhi, and Maulana Azad Medical College.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: "JEE Main / Advanced 2026", desc: "99+ percentile for DTU/NSIT top branches. 95+ for good branches in IP Univ colleges. JEE Advanced rank under 5000 for premium engineering." },
              { title: "NEET 2026", desc: "690+ for AIIMS Delhi. 650+ (Open) for MAMC / LHMC. 580+ for IP University medical colleges. 500+ for private medical colleges." },
              { title: "CAT / SNAP 2026", desc: "99+ CAT percentile for FMS Delhi. 95+ for MDI Gurgaon. 85+ for IMI Delhi and Fore School. SNAP 70+ for Symbiosis Delhi programs." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">How to Use the College Predictor</h2>
          <ol className="space-y-2 text-sm text-gray-600">
            {[
              "Select your entrance exam (JEE Main, JEE Advanced, NEET, CAT, or SNAP) from the dropdown.",
              "Enter your score or percentile in the input box.",
              "Select your category (General, OBC, SC, or ST) — reserved categories get cutoff relaxation.",
              "Click Predict — the tool ranks all eligible Delhi colleges by your admission probability.",
              "Click View Details on any college to see fees, placements, and admission process.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      </div>
    </div>
  )
}
