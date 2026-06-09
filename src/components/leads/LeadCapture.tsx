"use client"
import { useState } from "react"
import { Loader2, CheckCircle } from "lucide-react"

interface LeadCaptureProps {
  source: string
  collegeSlug?: string
  collegeName?: string
  buttonText?: string
  placeholderName?: string
  placeholderPhone?: string
  placeholderEmail?: string
  title?: string
  subtitle?: string
  className?: string
  onSuccess?: (bookingRef?: string) => void
  minimal?: boolean
}

export default function LeadCapture({
  source,
  collegeSlug: _collegeSlug,
  collegeName,
  buttonText = "Submit",
  placeholderName = "Full Name",
  placeholderPhone = "WhatsApp Number",
  placeholderEmail = "Email (Optional)",
  title,
  subtitle,
  className = "",
  onSuccess,
  minimal = false,
}: LeadCaptureProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    stream: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError("Please fill in name and phone number")
      return
    }
    setLoading(true)
    setError("")
    try {
      const sp = new URLSearchParams(window.location.search)
      const messageparts = [
        form.message,
        collegeName ? `College interest: ${collegeName}` : "",
      ].filter(Boolean)

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          stream: form.stream || undefined,
          message: messageparts.length ? messageparts.join(" | ") : undefined,
          college_interest: collegeName,
          source,
          page_url: window.location.href,
          utm_source: sp.get("utm_source") || undefined,
          utm_medium: sp.get("utm_medium") || undefined,
          utm_campaign: sp.get("utm_campaign") || undefined,
          utm_content: sp.get("utm_content") || undefined,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setForm({ name: "", phone: "", email: "", stream: "", message: "" })
        if (onSuccess) onSuccess(data.bookingRef)
      } else {
        const zodMsg = (data.errors as { message: string }[] | undefined)?.[0]?.message
        setError(zodMsg ?? data.message ?? "Submission failed. Please try again.")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-4 text-center ${className}`}>
        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
        <p className="text-green-700 font-semibold text-sm">Thank You!</p>
        <p className="text-green-600 text-xs mt-1">Our counsellor will contact you soon via WhatsApp.</p>
      </div>
    )
  }

  /* ── Minimal variant (name + phone only) ── */
  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        {title && <h3 className="text-base font-bold text-gray-900">{title}</h3>}
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        <input
          type="text"
          placeholder={placeholderName}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm"
          required
        />
        <input
          type="tel"
          placeholder={placeholderPhone}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
          maxLength={10}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm"
          required
        />
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
          disabled={loading || !agreedToTerms}
          className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2"
        >
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : buttonText}
        </button>
      </form>
    )
  }

  /* ── Full variant ── */
  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      {title && <h3 className="text-base font-bold text-gray-900">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <input
        type="text"
        placeholder={placeholderName}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm"
        required
      />
      <input
        type="tel"
        placeholder={placeholderPhone}
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
        maxLength={10}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm"
        required
      />
      <input
        type="email"
        placeholder={placeholderEmail}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm"
      />
      <select
        value={form.stream}
        onChange={(e) => setForm({ ...form, stream: e.target.value })}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm bg-white"
      >
        <option value="">Select Stream (Optional)</option>
        <option value="Engineering">Engineering</option>
        <option value="MBA">MBA</option>
        <option value="Medical">Medical</option>
        <option value="Law">Law</option>
        <option value="Arts & Science">Arts &amp; Science</option>
        <option value="Commerce">Commerce</option>
        <option value="Design">Design</option>
        <option value="Architecture">Architecture</option>
      </select>
      <textarea
        placeholder="Your message (Optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={3}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-red-400 text-sm resize-none"
      />
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
        disabled={loading || !agreedToTerms}
        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2"
      >
        {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : buttonText}
      </button>
    </form>
  )
}

