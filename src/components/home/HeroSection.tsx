"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  Sparkles, Search, ChevronRight,
  Building2, Users, BookOpen, Headphones,
} from "lucide-react"

const BG_IMAGES = [
  "/hero-students.png",
  "/hero-college-1.jpg.png",
  "/hero-college-2.jpg.png",
]

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STATS = [
  { icon: Building2,  value: "25+",  label: "Colleges"          },
  { icon: BookOpen,   value: "500+", label: "Courses"           },
  { icon: Users,      value: "50K+", label: "Student Reviews"   },
  { icon: Headphones, value: "100%", label: "Admission Support" },
]

const PILLS = ["DTU", "NSUT", "IP University", "Jamia", "JNU"]
const TYPEWRITER_WORDS = ["University", "Course", "Career Goal", "Stream", "Budget"]

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const word = words[wordIndex]
    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed)
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pausing"), pauseMs)
      }
    } else if (phase === "pausing") {
      setPhase("deleting")
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase("typing")
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}

export default function HeroSection() {
  const [query, setQuery] = useState("")
  const [bgIndex, setBgIndex] = useState(0)
  const router = useRouter()
  const typewriterText = useTypewriter(TYPEWRITER_WORDS)

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(i => (i + 1) % BG_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (q) router.push(`/colleges?search=${encodeURIComponent(q)}`)
  }

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 480 }}>

      {/* All bg images stacked — active one is opacity:1, others opacity:0 */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{
            opacity: i === bgIndex ? 1 : 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(7,27,59,0.78) 0%, rgba(7,27,59,0.72) 100%)",
          zIndex: 1,
        }}
      />

      {/* Fallback solid bg (shows if images fail) */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #071B3B 100%)", zIndex: -1 }}
      />

      {/* Decorative circles */}
      <div className="absolute pointer-events-none rounded-full"
           style={{ width: 340, height: 340, top: -90, right: -90, border: "3px solid rgba(255,106,0,0.25)", zIndex: 2 }} />
      <div className="absolute pointer-events-none rounded-full"
           style={{ width: 220, height: 220, top: -40, right: -40, border: "2px solid rgba(255,106,0,0.12)", zIndex: 2 }} />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 text-center" style={{ zIndex: 3 }}>

        {/* AI badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-5"
          style={{ border: "1.5px solid color-mix(in srgb, var(--color-accent) 60%, transparent)", color: "var(--color-accent)" }}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          India&apos;s AI-Powered College Portal 2026
        </div>

        {/* H1 typewriter */}
        <motion.h1
          className="text-white font-extrabold leading-[1.1] tracking-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
        >
          Find the Right{" "}
          <span className="text-accent">
            {typewriterText}
            <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-0.5 animate-pulse" />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="leading-relaxed mb-6 mx-auto"
          style={{ color: "rgba(200,218,240,0.92)", fontSize: "1rem", maxWidth: "520px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
        >
          Compare colleges, fees, placements &amp; get direct admission
          guidance for BTech, MBA, BCA &amp; more.
        </motion.p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div
            className="flex items-center bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.28)" }}
          >
            <Search className="ml-4 w-5 h-5 shrink-0 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search colleges in Delhi (e.g. DTU, NSUT, IP University...)"
              className="flex-1 px-3 py-[14px] text-gray-900 text-sm outline-none placeholder:text-gray-400 bg-transparent"
            />
            <button
              type="submit"
              className="shrink-0 font-bold text-white bg-accent px-6 py-[14px] text-sm transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </div>
        </form>

        {/* Quick-search pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {PILLS.map(p => (
            <button
              key={p}
              onClick={() => router.push(`/colleges?search=${p}`)}
              className="text-sm font-medium px-4 py-1.5 rounded-full text-white transition-all hover:opacity-75"
              style={{ border: "1px solid rgba(255,255,255,0.30)", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              {p}
            </button>
          ))}
          <Link
            href="/colleges"
            className="text-sm font-medium px-4 py-1.5 rounded-full text-white flex items-center gap-1 transition-all hover:opacity-75"
            style={{ border: "1px solid rgba(255,255,255,0.30)", backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl"
          style={{
            backgroundColor: "rgba(7,27,59,0.82)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.10)",
            padding: "16px 24px",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-2">
                <Icon className="w-5 h-5 shrink-0" style={{ color: "rgba(255,255,255,0.42)" }} />
                <div className="text-left">
                  <p className="font-extrabold text-base leading-none text-accent">{value}</p>
                  <p className="leading-tight mt-0.5" style={{ color: "rgba(178,200,228,0.82)", fontSize: "0.62rem" }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
