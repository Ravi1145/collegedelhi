"use client"
import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"
import type { College } from "@/types"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  size?: "sm" | "lg"
  placeholder?: string
  className?: string
}

export default function SearchBar({
  size = "lg",
  placeholder = "Search colleges, courses, exams...",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<{ type: string; name: string; slug: string }[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [allColleges, setAllColleges] = useState<College[]>([])
  const [allCourses, setAllCourses] = useState<{ name: string; fullName: string; slug: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/colleges')
      .then(r => r.ok ? r.json() : { colleges: [] })
      .then(d => setAllColleges(d.colleges ?? []))
      .catch(() => setAllColleges([]))
    fetch(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/courses?status=published&limit=100`)
      .then(r => r.ok ? r.json() : { data: [] })
      .then(d => setAllCourses((d.data || []).map((c: Record<string, unknown>) => ({ name: c.shortName || c.name, fullName: c.fullName || c.name, slug: c.slug }))))
      .catch(() => setAllCourses([]))
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const q = query.toLowerCase()
    const collegeSuggestions = allColleges
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.shortName.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q)
      )
      .slice(0, 5)
      .map((c) => ({ type: "College", name: c.name, slug: `/colleges/${c.slug}` }))

    const courseSuggestions = allCourses
      .filter(c => c.fullName.toLowerCase().includes(q) || c.name.toLowerCase().includes(q))
      .slice(0, 3)
      .map(c => ({ type: "Course", name: c.fullName, slug: `/courses/${c.slug}` }))

    setSuggestions([...collegeSuggestions, ...courseSuggestions])
    setIsOpen(true)
  }, [query, allColleges, allCourses])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (slug: string) => {
    setIsOpen(false)
    setQuery("")
    router.push(slug)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/colleges?search=${encodeURIComponent(query)}`)
      setIsOpen(false)
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <form onSubmit={handleSearch}>
        <div
          className={cn(
            "flex items-center bg-white border-2 border-gray-200 rounded-2xl shadow-lg transition-all focus-within:border-red-400 focus-within:shadow-red-100",
            size === "lg" ? "h-14 px-4 gap-3" : "h-10 px-3 gap-2"
          )}
        >
          <Search
            className={cn(
              "text-gray-400 flex-shrink-0",
              size === "lg" ? "w-5 h-5" : "w-4 h-4"
            )}
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className={cn(
              "flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent",
              size === "lg" ? "text-base" : "text-sm"
            )}
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(""); setSuggestions([]); setIsOpen(false) }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className={cn(
              "bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors flex-shrink-0",
              size === "lg" ? "px-5 py-2 text-sm" : "px-3 py-1 text-xs"
            )}
          >
            Search
          </button>
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSelect(s.slug)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            >
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0",
                  s.type === "College"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                )}
              >
                {s.type}
              </span>
              <span className="text-sm text-gray-800 truncate">{s.name}</span>
            </button>
          ))}
          <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
            <button
              onClick={handleSearch as unknown as React.MouseEventHandler}
              className="text-sm text-red-700 hover:text-red-800 font-medium"
            >
              Search all results for &quot;{query}&quot; →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

