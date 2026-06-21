"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Phone, CheckCircle, Loader2, GraduationCap } from "lucide-react"

const SESSION_KEY = "counselling_popup_shown"

const STREAMS = [
  "Engineering (B.Tech / BE)",
  "MBA / PGDM",
  "Medical (MBBS / BDS)",
  "Law (LLB / LLM)",
  "Arts & Science (BA / BSc)",
  "Commerce (B.Com / BBA)",
  "Design / Architecture",
  "Pharmacy (B.Pharm)",
  "BCA / BSc IT",
  "Other",
]

export default function ExitPopup() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", stream: "" })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const show = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    setVisible(true)
    sessionStorage.setItem(SESSION_KEY, "1")
  }, [])

  useEffect(() => {
    // Desktop: mouse leaves viewport upwards (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }
    // Mobile: back navigation
    const handlePopState = () => show()
    // Fallback: show after 40s
    const timer = setTimeout(show, 40000)

    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("popstate", handlePopState)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("popstate", handlePopState)
      clearTimeout(timer)
    }
  }, [show])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cleaned = form.phone.replace(/\D/g, "")
    if (!form.name.trim()) { setError("Please enter your name"); return }
    if (cleaned.length !== 10) { setError("Enter a valid 10-digit mobile number"); return }
    setError("")
    setSubmitting(true)
    try {
      const sp = new URLSearchParams(window.location.search)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:         form.name.trim(),
          phone:        cleaned,
          stream:       form.stream || undefined,
          source:       "exit_popup",
          page_url:     window.location.href,
          utm_source:   sp.get("utm_source")   || "organic",
          utm_medium:   sp.get("utm_medium")   || "none",
          utm_campaign: sp.get("utm_campaign") || "counselling_popup",
          utm_content:  sp.get("utm_content")  || "none",
        }),
      })
      const data = await res.json()
      if (data.success || res.ok) {
        setDone(true)
        setTimeout(() => setVisible(false), 4000)
      } else {
        setError(data.message || "Submission failed. Please try again.")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get free counselling for DELHI colleges"
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {done ? (
          /* ── Success state ── */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9 text-green-500" />
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">You&apos;re all set!</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our expert counsellor will call you within <strong>2 hours</strong> with personalised college recommendations.
            </p>
            <p className="text-xs text-gray-400 mt-3">Free · No spam · Expert guidance</p>
          </div>
        ) : (
          <>
            {/* Left accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400" />

            <div className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-0.5">Wait!</p>
                  <h2 className="text-xl font-extrabold text-gray-900 leading-tight">
                    Get Free Counselling<br />
                    <span className="text-red-600">for DELHI Colleges</span>
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Tell us your details and our expert counsellor will call you with the best college options, fees, and admission tips.
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {[
                  "Personalised college shortlist based on your score",
                  "Fees, cutoffs & placement data for 2026",
                  "Expert guidance — completely free",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-400 outline-none text-sm text-gray-900 transition-colors"
                  required
                />

                {/* Phone */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium select-none">+91</span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                    placeholder="Mobile number"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-400 outline-none text-sm text-gray-900 transition-colors"
                    required
                  />
                </div>

                {/* Stream */}
                <div className="relative">
                  <select
                    value={form.stream}
                    onChange={e => setForm({ ...form, stream: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-400 outline-none text-sm bg-white text-gray-700 transition-colors appearance-none"
                  >
                    <option value="">Select course interest</option>
                    {STREAMS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 accent-red-600 shrink-0"
                  />
                  <span className="text-xs text-gray-500">
                    I agree to the{" "}
                    <a href="/terms" className="text-red-600 underline hover:text-red-700">Terms &amp; Conditions</a>
                    {" "}and{" "}
                    <a href="/privacy" className="text-red-600 underline hover:text-red-700">Privacy Policy</a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting || !agreedToTerms}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-lg shadow-red-200"
                >
                  {submitting
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                    : <><Phone className="w-4 h-4" /> Get Free Counselling</>
                  }
                </button>
              </form>

              <p className="text-center text-[11px] text-gray-400 mt-3">
                Free · No spam · Our counsellor calls within 2 hours
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


