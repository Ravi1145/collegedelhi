"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { College } from "@/types"
import CollegeCard from "@/components/colleges/CollegeCard"
import FilterTabs from "@/components/ui/FilterTabs"

const TABS = ["All", "Engineering", "MBA", "Medical", "Law", "Architecture", "Government"]
const DISPLAY_COUNT = 8

/** Shuffle array randomly */
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

/**
 * Pick colleges to show:
 * - Featured colleges come first (randomly shuffled)
 * - If featured < DISPLAY_COUNT, fill remaining slots with non-featured
 * - Total shown: up to DISPLAY_COUNT
 */
function pickColleges(all: College[]): College[] {
  const featured    = shuffle(all.filter(c => c.isFeatured))
  const nonFeatured = shuffle(all.filter(c => !c.isFeatured))
  if (featured.length >= DISPLAY_COUNT) return featured.slice(0, DISPLAY_COUNT)
  return [...featured, ...nonFeatured].slice(0, DISPLAY_COUNT)
}

export default function FeaturedColleges() {
  const [activeTab, setActiveTab] = useState("All")
  const [allColleges, setAllColleges] = useState<College[]>([])
  const [displayed, setDisplayed] = useState<College[]>([])

  useEffect(() => {
    // âœ… Fetch ALL published colleges (no featured filter) with a larger limit
    fetch('/api/colleges?limit=100')
      .then(r => r.ok ? r.json() : { colleges: [] })
      .then(d => {
        const cols = d.colleges ?? []
        setAllColleges(cols)
        setDisplayed(pickColleges(cols))
      })
      .catch(() => setAllColleges([]))
  }, [])

  // When tab changes, re-pick random colleges from the filtered pool
  const tabFiltered = allColleges.filter((c) => {
    if (activeTab === "All") return true
    if (activeTab === "Government") return c.type === "Government"
    return c.stream === activeTab
  })
  const filtered = activeTab === "All" ? displayed : pickColleges(tabFiltered)

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured colleges in Delhi</h2>
            <p className="text-gray-500 mt-2">NIRF ranked and top-rated colleges across all streams</p>
          </div>
          <Link
            href="/colleges"
            className="hidden sm:flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter tabs */}
        <FilterTabs tabs={TABS} active={activeTab} onChange={setActiveTab} className="mb-6" />

        {/* Horizontal scroll row */}
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-400 text-sm">No featured colleges yet. Check back soon!</p>
          </div>
        ) : (
          <div className="flex gap-5 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filtered.map((college) => (
              <div key={college.slug} className="flex-shrink-0 w-72">
                <CollegeCard college={college} />
              </div>
            ))}
          </div>
        )}

        {/* Mobile view all */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/colleges"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            View All Colleges <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}

