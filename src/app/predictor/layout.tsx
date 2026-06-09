import { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Delhi College Predictor 2026 — JEE Main, JEE, NEET, CAT | CollegeDelhi",
  description: "Free Delhi college predictor 2026. Enter your JEE Main percentile, JEE Main rank, NEET score or CAT percentile and instantly see which engineering, MBA and medical colleges in Delhi you can get — based on 2020–2026 cutoff data.",
  path: "/predictor",
  keywords: [
    "Delhi college predictor",
    "jee main college predictor Delhi 2026",
    "jee main colleges Delhi predictor",
    "neet college predictor Delhi",
    "cat college predictor Delhi",
    "which college will i get in Delhi",
    "college admission predictor Delhi 2026",
    "jee main percentile to college Delhi",
  ],
})

export default function PredictorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
