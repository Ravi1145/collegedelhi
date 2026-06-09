"use client"

import { useState } from "react"

const allColleges = [
  { name: "DTU Delhi", stream: "Engineering", avg: 18, highest: 72, rate: 95, type: "Government" },
  { name: "NSUT Delhi", stream: "Engineering", avg: 16, highest: 65, rate: 93, type: "Government" },
  { name: "IGDTUW Delhi", stream: "Engineering", avg: 14, highest: 55, rate: 90, type: "Government" },
  { name: "Jamia Millia Engineering", stream: "Engineering", avg: 10, highest: 42, rate: 85, type: "Government" },
  { name: "Amity University Delhi", stream: "Engineering", avg: 8.5, highest: 40, rate: 82, type: "Private" },
  { name: "Bennett University Delhi", stream: "Engineering", avg: 9.2, highest: 45, rate: 85, type: "Private" },
  { name: "MIMI Delhi", stream: "Engineering", avg: 6.8, highest: 32, rate: 78, type: "Private" },
  { name: "FMS Delhi", stream: "MBA", avg: 32, highest: 80, rate: 100, type: "Government" },
  { name: "MDI Gurgaon", stream: "MBA", avg: 28, highest: 72, rate: 100, type: "Autonomous" },
  { name: "IIFT Delhi", stream: "MBA", avg: 24, highest: 60, rate: 100, type: "Government" },
  { name: "IMI Delhi", stream: "MBA", avg: 18, highest: 48, rate: 98, type: "Private" },
  { name: "Fore School Delhi", stream: "MBA", avg: 14, highest: 38, rate: 95, type: "Private" },
  { name: "BIMTECH Delhi", stream: "MBA", avg: 11, highest: 28, rate: 92, type: "Private" },
]

const MAX_SELECTION = 4

export default function PlacementComparator() {
  const [stream, setStream] = useState<"Engineering" | "MBA">("Engineering")
  const [selected, setSelected] = useState<string[]>(["DTU Delhi", "NSUT Delhi"])

  const colleges = allColleges.filter((c) => c.stream === stream)

  function toggle(name: string) {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : prev.length < MAX_SELECTION
        ? [...prev, name]
        : prev
    )
  }

  const compared = allColleges.filter((c) => selected.includes(c.name))
  const maxAvg = Math.max(...compared.map((c) => c.avg), 1)
  const maxHighest = Math.max(...compared.map((c) => c.highest), 1)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-5">Interactive Placement Comparator</h2>

      {/* Stream Toggle */}
      <div className="flex gap-3 mb-5">
        {(["Engineering", "MBA"] as const).map((s) => (
          <button
            key={s}
            onClick={() => { setStream(s); setSelected([]) }}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
              stream === s
                ? "bg-[#0A1628] text-white border-[#0A1628]"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            {s === "Engineering" ? "Engineering" : "MBA"}
          </button>
        ))}
      </div>

      {/* College Selection */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Select up to {MAX_SELECTION} colleges to compare
          <span className="ml-2 text-red-700">({selected.filter(n => colleges.some(c => c.name === n)).length}/{MAX_SELECTION} selected)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {colleges.map((c) => {
            const isSelected = selected.includes(c.name)
            const isDisabled = !isSelected && selected.filter(n => colleges.some(col => col.name === n)).length >= MAX_SELECTION
            return (
              <button
                key={c.name}
                onClick={() => !isDisabled && toggle(c.name)}
                disabled={isDisabled}
                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-colors ${
                  isSelected
                    ? "bg-red-600 text-white border-red-600"
                    : isDisabled
                    ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                    : "bg-white text-gray-700 border-gray-200 hover:border-red-400"
                }`}
              >
                {c.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Comparison Bars */}
      {compared.length > 0 && (
        <div className="space-y-6">
          {/* Avg Package */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Average Package (LPA)</p>
            <div className="space-y-3">
              {compared.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800">{c.name}</span>
                    <span className="text-sm font-bold text-green-700">₹{c.avg} LPA</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${(c.avg / maxAvg) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highest Package */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Highest Package (LPA)</p>
            <div className="space-y-3">
              {compared.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800">{c.name}</span>
                    <span className="text-sm font-bold text-red-800">₹{c.highest} LPA</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-red-700 rounded-full transition-all duration-500"
                      style={{ width: `${(c.highest / maxHighest) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Rate */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Placement Rate (%)</p>
            <div className="space-y-3">
              {compared.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-800">{c.name}</span>
                    <span className="text-sm font-bold text-blue-700">{c.rate}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${c.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {compared.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-8">Select colleges above to compare their placements.</p>
      )}
    </div>
  )
}
