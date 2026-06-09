import { NextRequest, NextResponse } from "next/server"
import { anthropic } from "@/lib/anthropic"
import { getCollegeBySlug } from "@/lib/db"

export const runtime = "nodejs"

const NAAC_ORDER: Record<string, number> = { "A++": 6, "A+": 5, "A": 4, "B++": 3, "B+": 2, "B": 1 }

export async function POST(req: NextRequest) {
  try {
    const { college1: slug1, college2: slug2 } = await req.json()

    const [col1, col2] = await Promise.all([
      getCollegeBySlug(slug1),
      getCollegeBySlug(slug2),
    ])

    if (!col1 || !col2) {
      return NextResponse.json({ error: "One or both colleges not found" }, { status: 404 })
    }

    const col1Data = `
Name: ${col1.name}
Type: ${col1.type ?? "Unknown"}
NAAC: ${col1.naac_grade ?? "N/A"}
NIRF Rank: ${col1.nirf_rank ?? "Not ranked"}
Annual Fees: ₹${Math.round((col1.fees_min ?? 0) / 100000)}L - ₹${Math.round((col1.fees_max ?? 0) / 100000)}L
Avg Placement: ₹${Math.round((col1.avg_placement ?? 0) / 100000)}L PA
Highest Placement: ₹${Math.round((col1.highest_pkg ?? 0) / 100000)}L PA
Top Recruiters: ${(col1.top_recruiters ?? []).slice(0, 5).join(", ")}
Courses: ${(col1.courses ?? []).join(", ")}
Hostel: ${col1.hostel ? "Yes" : "No"}
Established: ${col1.established ?? "N/A"}
Rating: ${col1.rating ?? 0}/5 (${col1.review_count ?? 0} reviews)`

    const col2Data = `
Name: ${col2.name}
Type: ${col2.type ?? "Unknown"}
NAAC: ${col2.naac_grade ?? "N/A"}
NIRF Rank: ${col2.nirf_rank ?? "Not ranked"}
Annual Fees: ₹${Math.round((col2.fees_min ?? 0) / 100000)}L - ₹${Math.round((col2.fees_max ?? 0) / 100000)}L
Avg Placement: ₹${Math.round((col2.avg_placement ?? 0) / 100000)}L PA
Highest Placement: ₹${Math.round((col2.highest_pkg ?? 0) / 100000)}L PA
Top Recruiters: ${(col2.top_recruiters ?? []).slice(0, 5).join(", ")}
Courses: ${(col2.courses ?? []).join(", ")}
Hostel: ${col2.hostel ? "Yes" : "No"}
Established: ${col2.established ?? "N/A"}
Rating: ${col2.rating ?? 0}/5 (${col2.review_count ?? 0} reviews)`

    const prompt = `Compare these two Delhi colleges and provide detailed analysis:

COLLEGE 1: ${col1Data}

COLLEGE 2: ${col2Data}

Provide a comprehensive comparison in this exact JSON format:
{
  "winner": "Name of the overall better college",
  "summary": "2-3 sentence overall verdict explaining which college wins and why",
  "categories": [
    {
      "name": "academics",
      "college1Value": "brief value/rating",
      "college2Value": "brief value/rating",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    },
    {
      "name": "placements",
      "college1Value": "avg pkg value",
      "college2Value": "avg pkg value",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    },
    {
      "name": "fees",
      "college1Value": "fee range",
      "college2Value": "fee range",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    },
    {
      "name": "campus",
      "college1Value": "brief assessment",
      "college2Value": "brief assessment",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    },
    {
      "name": "faculty",
      "college1Value": "brief assessment",
      "college2Value": "brief assessment",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    },
    {
      "name": "industry_connect",
      "college1Value": "top recruiters",
      "college2Value": "top recruiters",
      "winner": "college1" or "college2" or "tie",
      "insight": "1 sentence insight"
    }
  ]
}

Respond with valid JSON only. No markdown.`

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      system: "You are a Delhi college expert. Provide accurate, data-driven comparisons. Respond with valid JSON only.",
      messages: [{ role: "user", content: prompt }],
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
      const col1Wins = (col1.avg_placement ?? 0) > (col2.avg_placement ?? 0)
      const col1Naac = NAAC_ORDER[col1.naac_grade ?? ""] ?? 0
      const col2Naac = NAAC_ORDER[col2.naac_grade ?? ""] ?? 0
      return NextResponse.json({
        winner: col1Wins ? col1.name : col2.name,
        summary: `${col1Wins ? col1.name : col2.name} wins overall based on placements and academic reputation. Both are excellent choices depending on your priorities.`,
        categories: [
          {
            name: "academics",
            college1Value: `NAAC ${col1.naac_grade ?? "N/A"}`,
            college2Value: `NAAC ${col2.naac_grade ?? "N/A"}`,
            winner: col1Naac >= col2Naac ? "college1" : "college2",
            insight: "Higher NAAC grade indicates better academic quality and accreditation."
          },
          {
            name: "placements",
            college1Value: `₹${Math.round((col1.avg_placement ?? 0) / 100000)}L avg`,
            college2Value: `₹${Math.round((col2.avg_placement ?? 0) / 100000)}L avg`,
            winner: (col1.avg_placement ?? 0) >= (col2.avg_placement ?? 0) ? "college1" : "college2",
            insight: "Higher average placement indicates better industry connections."
          },
          {
            name: "fees",
            college1Value: `₹${Math.round((col1.fees_min ?? 0) / 100000)}L-${Math.round((col1.fees_max ?? 0) / 100000)}L/yr`,
            college2Value: `₹${Math.round((col2.fees_min ?? 0) / 100000)}L-${Math.round((col2.fees_max ?? 0) / 100000)}L/yr`,
            winner: (col1.fees_max ?? 0) <= (col2.fees_max ?? 0) ? "college1" : "college2",
            insight: "Lower fees provide better ROI if placement is comparable."
          },
          {
            name: "campus",
            college1Value: col1.hostel ? "Hostel available" : "No hostel",
            college2Value: col2.hostel ? "Hostel available" : "No hostel",
            winner: col1.hostel && !col2.hostel ? "college1" : col2.hostel && !col1.hostel ? "college2" : "tie",
            insight: "Campus facilities affect overall student experience."
          },
          {
            name: "faculty",
            college1Value: `${col1.type ?? "Private"} - Est. ${col1.established ?? "N/A"}`,
            college2Value: `${col2.type ?? "Private"} - Est. ${col2.established ?? "N/A"}`,
            winner: "tie",
            insight: "Both colleges have experienced faculty in their respective domains."
          },
          {
            name: "industry_connect",
            college1Value: (col1.top_recruiters ?? []).slice(0, 3).join(", "),
            college2Value: (col2.top_recruiters ?? []).slice(0, 3).join(", "),
            winner: (col1.avg_placement ?? 0) >= (col2.avg_placement ?? 0) ? "college1" : "college2",
            insight: "Top recruiter quality determines placement package potential."
          }
        ]
      })
    }

    return NextResponse.json(parsed)
  } catch (error) {
    console.error("AI Compare error:", error)
    return NextResponse.json(
      { error: "Failed to generate comparison" },
      { status: 500 }
    )
  }
}
