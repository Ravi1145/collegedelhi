"use client"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ThumbsUp, MessageCircle, ChevronDown, ChevronUp, ChevronRight, Send, Loader2, Search, Filter, X } from "lucide-react"

const API = "https://college-delhi-backend.vercel.app/api"
const ANSWER_LIMIT = 200
const STREAMS = ["All", "Engineering", "MBA", "Management", "Medical", "Law", "Arts", "Science", "Commerce", "Design"]

function QACard({ qa }: { qa: any }) {
  const [expanded, setExpanded] = useState(false)
  const answer = qa.answer || ""
  const isLong = answer.length > ANSWER_LIMIT
  const displayAnswer = expanded || !isLong ? answer : answer.slice(0, ANSWER_LIMIT) + "â€¦"
  const avatarColor = qa.avatarColor || "bg-blue-600"
  const avatar = qa.avatar || qa.askedBy?.[0]?.toUpperCase() || "?"

  return (
    <article className="bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className={`${avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>{avatar}</div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">{qa.askedBy}</span>
              {qa.verified && <CheckCircle className="w-3.5 h-3.5 text-blue-500" />}
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {qa.isAlumni ? "Alumni" : "Student"}{qa.college ? ` · ${qa.college}` : ""}{qa.batch ? ` · Batch ${qa.batch}` : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {qa.stream && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${qa.streamColor || "bg-blue-100 text-blue-700"}`}>{qa.stream}</span>
          )}
          {qa.tags?.slice(0, 2).map((tag: string) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full hidden sm:block">{tag}</span>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-gray-50 rounded-xl px-4 py-3 mb-4">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          <span className="text-red-600 font-black mr-1.5">Q.</span>{qa.question}
        </p>
      </div>

      {/* Answer */}
      {answer ? (
        <div className="mb-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-[#0A1628] mr-1">A.</span>{displayAnswer}
          </p>
          {isLong && (
            <button onClick={() => setExpanded(v => !v)}
              className="mt-2 flex items-center gap-1 text-xs font-semibold text-red-700 hover:opacity-80">
              {expanded ? <><ChevronUp className="w-3 h-3" /> Show less</> : <><ChevronDown className="w-3 h-3" /> Read full answer</>}
            </button>
          )}
          {qa.answeredBy && <p className="text-xs text-gray-400 mt-2">Answered by {qa.answeredBy}</p>}
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic mb-4">Awaiting answerâ€¦</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-400"><ThumbsUp className="w-3.5 h-3.5" />{qa.helpful || 0} helpful</span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400"><MessageCircle className="w-3.5 h-3.5" />{qa.replies || 0} replies</span>
        </div>
        {qa.collegeSlug && (
          <Link href={`/${qa.collegeSlug}`} className="text-xs font-semibold text-red-700 hover:opacity-80 flex items-center gap-1">
            View college <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </article>
  )
}

export default function QAPageClient({ initialQnas }: { initialQnas: any[] }) {
  const [qnas, setQnas] = useState(initialQnas)
  const [activeStream, setActiveStream] = useState("All")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  // Ask form
  const [name, setName] = useState("")
  const [college, setCollege] = useState("")
  const [question, setQuestion] = useState("")
  const [stream, setStream] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const filtered = qnas.filter(q => {
    const streamMatch = activeStream === "All" || q.stream === activeStream
    const searchMatch = !search || q.question.toLowerCase().includes(search.toLowerCase()) || (q.answer || "").toLowerCase().includes(search.toLowerCase()) || (q.college || "").toLowerCase().includes(search.toLowerCase())
    return streamMatch && searchMatch
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || !name.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch(`${API}/qna`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, askedBy: name, college, stream, askedByEmail: '', approvalStatus: 'pending' })
      })
      const data = await res.json()
      if (data.success) { setSubmitted(true); setQuestion(""); setName(""); setCollege(""); setStream("") }
    } catch {}
    finally { setSubmitting(false) }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-blue-300 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span><span className="text-white">Q&amp;A</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">DELHI College Q&amp;A</h1>
          <p className="text-blue-200 max-w-2xl mb-6">Real questions answered by alumni, students and CollegeDelhi counsellors. Get honest answers about admissions, fees, placements and campus life.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/10 px-3 py-1.5 rounded-full">{qnas.length}+ Answered Questions</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-full">247 Active Alumni</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-full">24-48hr Response Time</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Q&A list */}
          <div className="lg:col-span-2">
            {/* Search + stream filter */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 mb-5 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search questions, colleges..." value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-red-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {STREAMS.map(s => (
                  <button key={s} onClick={() => setActiveStream(s)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${activeStream === s ? "bg-red-600 border-red-600 text-white" : "bg-white border-gray-200 text-gray-600 hover:border-red-300"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4"><span className="font-semibold text-gray-800">{filtered.length}</span> questions found</p>

            <div className="space-y-4">
              {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                  <MessageCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No questions found. Be the first to ask!</p>
                </div>
              ) : filtered.map(q => <QACard key={q._id} qa={q} />)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:sticky lg:top-24 self-start">
            {/* Ask form */}
            <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-5 text-white">
              <h3 className="text-lg font-bold mb-1">Ask a Question</h3>
              <p className="text-xs text-white/60 mb-4">Get answers from alumni and counsellors within 24-48 hours</p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="font-bold text-green-300">Question Submitted!</p>
                  <p className="text-xs text-white/60 mt-1">We'll answer within 24-48 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-3 text-xs text-white/60 underline">Ask another question</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name *" required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400" />
                  <input value={college} onChange={e => setCollege(e.target.value)} placeholder="College name (e.g. DTU Delhi, FMS Delhiâ€¦)"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400" />
                  <select value={stream} onChange={e => setStream(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm outline-none focus:border-red-400">
                    <option value="" className="text-gray-900">Stream (optional)</option>
                    {["Engineering","MBA","Medical","Law","Architecture","Arts","Science","Commerce"].map(s => (
                      <option key={s} value={s} className="text-gray-900">{s}</option>
                    ))}
                  </select>
                  <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Your question for alumniâ€¦ *" rows={4} required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-3 py-2.5 text-sm outline-none resize-none focus:border-red-400" />
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
                  <button type="submit" disabled={submitting || !agreedToTerms}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60">
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Submit Question
                  </button>
                </form>
              )}
            </div>

            {/* Popular topics */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["JEE Main Cutoff", "FMS Delhi SNAP", "DTU Delhi Placements", "AFMC NEET", "Hostel Facilities", "MBA Fees", "NSUT vs VIT", "Direct Admission"].map(t => (
                  <button key={t} onClick={() => setSearch(t)}
                    className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-red-300 hover:text-red-700 transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "All colleges in Delhi", href: "/colleges" },
                  { label: "College Predictor", href: "/predictor" },
                  { label: "Entrance Exams 2026", href: "/exams" },
                  { label: "Free Counselling", href: "/counselling" },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between text-sm text-gray-600 hover:text-red-700 transition-colors py-1">
                    {l.label} <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


