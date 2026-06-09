import { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo"

export const metadata: Metadata = genMeta({
  title: "Ask a Question About Delhi Colleges — Get Answers in 48 Hours | CollegeDelhi",
  description: "Ask any question about Delhi college admissions, fees, placements, hostels or campus life. Our verified alumni and counselors answer within 48 hours — completely free.",
  path: "/ask",
  keywords: [
    "ask about Delhi colleges",
    "Delhi college admission questions",
    "ask alumni Delhi college",
    "college counselling Delhi free",
    "Delhi college helpline 2026",
    "ask question about DTU Delhi NSUT IIIT Delhi",
  ],
})

export default function AskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
