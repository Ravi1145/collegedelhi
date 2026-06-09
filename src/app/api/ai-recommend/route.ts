import { NextRequest, NextResponse } from "next/server"
import { anthropic } from "@/lib/anthropic"
import { getAllColleges } from "@/lib/db"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { stream, budget, careerGoal, examType, examScore, preferences } = await req.json()

    const { colleges } = await getAllColleges({ status: "published", stream, limit: 200 })

    const collegesSummary = colleges
      .map(
        (c) =>
          `${c.name}${c.short_name ? ` (${c.short_name})` : ""}: ${c.stream ?? "General"}, NAAC ${c.naac_grade ?? "N/A"}, fees ₹${Math.round((c.fees_min ?? 0) / 100000)}L-${Math.round((c.fees_max ?? 0) / 100000)}L/yr, avg pkg ₹${Math.round((c.avg_placement ?? 0) / 100000)}L PA, exams: ${(c.entrance_exams ?? []).join("/") || "N/A"}, hostel: ${c.hostel ?? false}, slug: ${c.slug}`
      )
      .join("\n")

    const userQuery = `
Student Profile:
- Stream of interest: ${stream}
- Annual budget: ₹${Math.round(Number(budget) / 100000)}L
- Career goal: ${careerGoal || "Not specified"}
- Entrance exam: ${examType}
- Score/percentile: ${examScore || "Not specified"}
- Preferences: ${preferences?.join(", ") || "None"}

Available Delhi Colleges:
${collegesSummary}

Based on this student profile, recommend the TOP 3 best matching colleges from the list above. Respond ONLY with valid JSON in this exact format:
{
  "colleges": [
    {
      "college": "Full College Name",
      "slug": "college-slug-from-list",
      "matchScore": 92,
      "reasons": ["reason 1", "reason 2", "reason 3"],
      "fees": "₹X.XL - ₹X.XL/yr",
      "avgPackage": "₹X LPA",
      "admissionTip": "specific tip for this student"
    }
  ],
  "reasoning": "Brief 2-sentence explanation of the overall recommendation strategy"
}`

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1500,
      system: "You are an expert Delhi college admissions counselor. Respond only with valid JSON. No markdown, no extra text.",
      messages: [{ role: "user", content: userQuery }],
    })

    const responseText = message.content[0].type === "text" ? message.content[0].text : ""

    let parsed
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/)
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : null
    } catch {
      parsed = null
    }

    if (!parsed) {
      const fallback = colleges[0]
      return NextResponse.json(
        {
          colleges: fallback ? [
            {
              college: fallback.name,
              slug: fallback.slug,
              matchScore: 80,
              reasons: ["Top-rated Delhi college", "Strong placement record", "Good infrastructure"],
              fees: `₹${Math.round((fallback.fees_min ?? 0) / 100000)}L - ₹${Math.round((fallback.fees_max ?? 0) / 100000)}L/yr`,
              avgPackage: `₹${Math.round((fallback.avg_placement ?? 0) / 100000)} LPA`,
              admissionTip: "Please use the AI chat for personalised admission advice."
            }
          ] : [],
          reasoning: "Based on your profile, we recommend these top-rated Delhi colleges. Please use the AI chat for personalized advice."
        },
        { status: 200 }
      )
    }

    return NextResponse.json(parsed)
  } catch (error) {
    console.error("AI Recommend error:", error)
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    )
  }
}
