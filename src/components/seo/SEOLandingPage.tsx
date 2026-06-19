"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, GraduationCap, Phone, Shield, ChevronDown } from "lucide-react"

interface College {
  name: string
  location: string
  naac?: string
  fees?: string
  placement?: string
  slug: string
}

interface RelatedGuide {
  label: string
  href: string
  icon: string
}

interface FAQ {
  q: string
  a: string
}

interface SEOLandingPageProps {
  // Hero
  breadcrumb: { label: string; href: string }[]
  h1: string
  subtitle: string
  heroStats: { value: string; label: string }[]

  // Content
  introHeading: string
  introParagraphs: string[]

  // Featured colleges table
  colleges: College[]

  // Why section
  whyHeading: string
  whyPoints: { title: string; description: string }[]

  // Admission section (optional)
  admissionHeading?: string
  admissionSteps?: { step: string; title: string; description: string }[]

  // FAQs
  faqs: FAQ[]

  // CTA (optional)
  ctaHeading?: string
  ctaSubtext?: string

  // Related Guides (optional cross-links)
  relatedGuides?: RelatedGuide[]
}

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ml-3 ${open ? "rotate-180" : ""}`} />
      </button>
      {/* Always in DOM so Google crawls it; JS controls visibility */}
      <div className={`px-5 pb-4 text-gray-600 text-sm leading-relaxed ${open ? "block" : "hidden"}`}>
        {answer}
      </div>
    </div>
  )
}

export default function SEOLandingPage({
  breadcrumb,
  h1,
  subtitle,
  heroStats,
  introHeading,
  introParagraphs,
  colleges,
  whyHeading,
  whyPoints,
  admissionHeading,
  admissionSteps,
  faqs,
  ctaHeading,
  ctaSubtext,
  relatedGuides,
}: SEOLandingPageProps) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#071B3B] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {i === breadcrumb.length - 1
                  ? <span className="text-white/90">{crumb.label}</span>
                  : <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                }
              </span>
            ))}
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">{h1}</h1>
          <p className="text-white/80 text-lg max-w-3xl mb-8">{subtitle}</p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroStats.map((s, i) => (
              <div key={i} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-red-400">{s.value}</p>
                <p className="text-sm text-white/70 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{introHeading}</h2>
          {introParagraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-3">{p}</p>
          ))}
        </section>

        {/* College Table */}
        {colleges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Colleges</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#0A1628] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">#</th>
                    <th className="text-left px-4 py-3 font-semibold">College Name</th>
                    <th className="text-left px-4 py-3 font-semibold">Location</th>
                    <th className="text-left px-4 py-3 font-semibold">NAAC</th>
                    <th className="text-left px-4 py-3 font-semibold">Avg. Fees/yr</th>
                    <th className="text-left px-4 py-3 font-semibold">Placement</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((col, i) => (
                    <tr key={col.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-500">{i + 1}</td>
                      <td className="px-4 py-3">
                        <Link href={`/colleges/${col.slug}`} className="font-semibold text-red-700 hover:underline">
                          {col.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{col.location}</td>
                      <td className="px-4 py-3">
                        {col.naac && <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{col.naac}</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{col.fees ?? "—"}</td>
                      <td className="px-4 py-3 text-gray-700">{col.placement ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Why Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{whyHeading}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyPoints.map((pt, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{pt.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Steps */}
        {admissionHeading && admissionSteps && admissionSteps.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{admissionHeading}</h2>
            <div className="space-y-4">
              {admissionSteps.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#0A1628] text-white flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs — visible by default so Google crawls all answer text */}
        <section id="faqs">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i < 3} />
            ))}
          </div>
        </section>

        {/* Related Guides */}
        {relatedGuides && relatedGuides.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedGuides.map(({ label, href, icon }) => (
                <Link key={href} href={href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-red-200 hover:shadow transition-all group">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">{ctaHeading ?? "Find Your Perfect College in Delhi"}</h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">{ctaSubtext ?? "Get free expert counselling for Delhi & NCR college admissions 2026."}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-finder"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              Find My College
            </Link>
            <Link
              href="/counselling"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Talk to Advisor
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-4 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            100% Free · No Hidden Charges
          </p>
        </section>

      </div>
    </main>
  )
}

