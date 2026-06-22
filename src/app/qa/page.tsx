import { Metadata } from "next"
import Link from "next/link"
import { generateMetadata as genMeta } from "@/lib/seo"
import QAPageClient from "@/components/home/QAPageClient"

export const revalidate = 60

export const metadata: Metadata = genMeta({
  title: "Delhi College Q&A 2026 — Real Questions Answered by Alumni",
  description: "Browse answered questions about Delhi college admissions, cutoffs, fees, hostels, and placements. Ask your question and get answers from CollegeDelhi alumni.",
  path: "/qa",
  keywords: ["Delhi college questions", "DTU Delhi admission question", "FMS Delhi mba questions", "JEE Main cutoff Delhi", "entrance exams Delhi"],
})

const API = "https://college-delhi-backend.vercel.app/api"

async function fetchQnAs() {
  try {
    const res = await fetch(`${API}/qna?limit=50`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return data.success ? (data.data || []) : []
  } catch { return [] }
}

export default async function QAPage() {
  const qnas = await fetchQnAs()
  return <QAPageClient initialQnas={qnas} />
}
