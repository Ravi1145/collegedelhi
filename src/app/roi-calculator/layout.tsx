import { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Delhi College ROI Calculator 2026 — Is Your College Worth the Fees? | CollegeDelhi",
  description: "Calculate the return on investment for any Delhi college. Enter fees, expected salary and loan details to see break-even time, net ROI and 10-year earning potential. Compare DTU Delhi, FMS Delhi, IIIT Delhi and more.",
  path: "/roi-calculator",
  keywords: [
    "Delhi college roi calculator",
    "is engineering college worth it Delhi",
    "college fee vs salary Delhi",
    "mba roi calculator Delhi",
    "DTU Delhi fees vs placement roi",
    "engineering college investment return Delhi 2026",
    "should i take education loan Delhi college",
  ],
})

export default function ROICalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
