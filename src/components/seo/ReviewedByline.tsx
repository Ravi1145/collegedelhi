import { CheckCircle } from "lucide-react"

export default function ReviewedByline({ lastUpdated, center = false }: { lastUpdated: string; center?: boolean }) {
  return (
    <p className={`flex items-center gap-1.5 text-xs text-blue-300 mb-3 ${center ? "justify-center" : ""}`}>
      <CheckCircle className="w-3.5 h-3.5" />
      Reviewed by the CollegeDelhi Editorial Team · Last updated {lastUpdated}
    </p>
  )
}
