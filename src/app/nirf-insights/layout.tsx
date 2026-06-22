import { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "NIRF Rankings 2026 — Delhi Colleges | Rank, Score & Insights | CollegeDelhi",
  description: "Explore NIRF 2026 rankings for Delhi colleges. Compare AIIMS Delhi (Rank 1, Medical), IIT Delhi (Rank 2, Engineering), DTU (Rank 49), FMS Delhi (Rank 13) by NIRF scores across Teaching, Research, Placements and Perception.",
  path: "/nirf-insights",
  keywords: [
    "nirf rankings Delhi 2026",
    "nirf Delhi colleges",
    "nirf rank Delhi engineering colleges",
    "DTU Delhi nirf rank 2026",
    "FMS Delhi nirf rank 2026",
    "AIIMS Delhi nirf rank 2026",
    "IIIT Delhi nirf rank",
    "nirf ranking engineering colleges Delhi",
  ],
})

export default function NirfInsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
