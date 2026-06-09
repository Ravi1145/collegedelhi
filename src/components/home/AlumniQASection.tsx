"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, ChevronRight, CheckCircle, ThumbsUp, ChevronDown, ChevronUp, Send, Loader2 } from "lucide-react"

const API = "https://college-delhi-backend.vercel.app/api"
const ANSWER_LIMIT = 140

function QACard({ qa }: { qa: any }) {
  const [expanded, setExpanded] = useState(false)
  const answer = qa.answer || ""
  const isLong = answer.length > ANSWER_LIMIT
  const displayAnswer = expanded || !isLong ? answer : answer.slice(0, ANSWER_LIMIT) + "â€¦"

  const avatarColor = qa.avatarColor || "bg-blue-600"
  const avatar = qa.avatar || qa.askedBy?.[0]?.toUpperCase() || "?"
  const streamColor = qa.streamColor || "bg-blue-100 text-blue-700"

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 flex flex-col gap-3">
      {/* Alumni header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className={`${avatarColor} w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0`}>
            {avatar}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-gray-900">{qa.askedBy}</span>
              {qa.verified && <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {qa.isAlumni ? "Alumni" : "Student"} {qa.college ? `· ${qa.college}` : ""} {qa.batch ? `· Batch ${qa.batch}` : ""}
            </p>
          </div>
        </div>
        {qa.stream && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${streamColor}`}>{qa.stream}</span>
        )}
      </div>

      {/* Question */}
      <div className="bg-gray-50 rounded-xl px-3 py-2.5">
        <p className="text-xs font-semibold text-gray-800 leading-snug">
          <span className="text-red-600 mr-1 font-black">Q.</span>{qa.question}
        </p>
      </div>

      {/* Answer */}
      {answer && (
        <div>
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-bold text-[#0A1628]">A. </span>
            {displayAnswer}
          </p>
          {isLong && (
            <button onClick={() => setExpanded(v => !v)}
              className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-red-700 hover:opacity-80 transition-opacity">
              {expanded ? <><ChevronUp className="w-3 h-3" /> Show less</> : <><ChevronDown className="w-3 h-3" /> Read full answer</>}
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <ThumbsUp className="w-3 h-3" />
            <span>{qa.helpful || 0} helpful</span>
          </span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            <MessageCircle className="w-3 h-3" />
            <span>{qa.replies || 0} replies</span>
          </span>
        </div>
        {qa.collegeSlug && (
          <Link href={`/${qa.collegeSlug}`}
            className="text-[10px] font-semibold text-red-700 hover:opacity-80 transition-opacity flex items-center gap-0.5">
            View college <ChevronRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  )
}

function AskCard() {
  const [question, setQuestion] = useState("")
  const [college, setCollege] = useState("")
  const [name, setName] = useState("")
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || !name.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch(`${API}/qna`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, askedBy: name, college, askedByEmail: '', approvalStatus: 'pending' })
      })
      const data = await res.json()
      if (data.success) setSent(true)
    } catch {}
    finally { setSubmitting(false) }
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-2 h-full">
        <CheckCircle className="w-8 h-8 text-green-600" />
        <p className="text-sm font-bold text-green-800">Question submitted!</p>
        <p className="text-xs text-green-600">Alumni will answer within 24-48 hours.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl p-5 flex flex-col gap-4 h-full"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)" }}>
      <div>
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs font-bold text-white">247 alumni answering</span>
        </div>
        <h3 className="text-lg font-extrabold text-white leading-tight">Have a question?<br />Ask a real alumni.</h3>
        <p className="text-xs text-white/60 mt-1.5">Get honest answers about placements, hostel, faculty, fees, and campus life.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 flex-1">
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="w-full px-3 py-2.5 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-white" required />
        <input type="text" value={college} onChange={e => setCollege(e.target.value)} placeholder="Which college? (e.g. DTU Delhi, FMS Delhiâ€¦)" className="w-full px-3 py-2.5 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-white" />
        <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Your question for alumniâ€¦" rows={3} className="w-full px-3 py-2.5 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-white resize-none" required />
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-0.5 accent-red-400 shrink-0"
          />
          <span className="text-[10px] text-white/60">
            I agree to the{" "}
            <a href="/terms" className="underline hover:text-white">Terms &amp; Conditions</a>
            {" "}and{" "}
            <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>
          </span>
        </label>
        <button type="submit" disabled={submitting || !agreedToTerms} className="mt-auto flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-2.5 rounded-xl transition disabled:opacity-60">
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          Ask Alumni
        </button>
      </form>
    </div>
  )
}

export default function AlumniQASection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [qnas, setQnas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const filters = ["All", "Engineering", "MBA", "Medical", "Law"]

  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams({ limit: '6' })
    if (activeFilter !== 'All') params.set('stream', activeFilter)
    fetch(`${API}/qna?${params.toString()}`)
      .then(r => r.json())
      .then(d => { if (d.success) setQnas(d.data || []) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [activeFilter])

  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0A1628, #1E3A5F)" }}>
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">Alumni Q&amp;A</h2>
              <p className="text-xs text-gray-500 mt-0.5">Real answers from DELHI college alumni</p>
            </div>
          </div>
          <Link href="/qa" className="hidden sm:flex items-center gap-1 text-xs font-semibold text-red-700 hover:opacity-80 transition-opacity">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Stream filters */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                activeFilter === f ? "bg-red-600 border-red-600 text-white" : "bg-white border-gray-200 text-gray-600 hover:border-red-300"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {[1,2,3,4,5].map(i => <div key={i} className="bg-white rounded-2xl h-48 animate-pulse border border-gray-100" />)}
            <AskCard />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {qnas.slice(0, 5).map((qa: any) => <QACard key={qa._id} qa={qa} />)}
            <AskCard />
          </div>
        )}

        {/* Mobile view all */}
        <div className="mt-4 sm:hidden text-center">
          <Link href="/qa" className="text-xs font-semibold text-red-700">View all Q&amp;As â†’</Link>
        </div>
      </div>
    </section>
  )
}


