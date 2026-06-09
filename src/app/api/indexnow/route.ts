import { NextRequest, NextResponse } from "next/server"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://collegedelhi.com"
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "CollegeDelhi2026indexnow"

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
]

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret") || new URL(req.url).searchParams.get("secret")
  if (!secret || secret !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { urls } = await req.json() as { urls?: string[] }

    const urlList = urls && urls.length > 0
      ? urls
      : [`${BASE_URL}/sitemap.xml`]

    const payload = {
      host: BASE_URL.replace("https://", "").replace("http://", ""),
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }

    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map((endpoint) =>
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(payload),
        })
      )
    )

    const summary = results.map((r, i) => ({
      endpoint: INDEXNOW_ENDPOINTS[i],
      status: r.status === "fulfilled" ? r.value.status : "failed",
    }))

    return NextResponse.json({ ok: true, submitted: urlList.length, results: summary })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

// GET - returns the IndexNow key file (required for ownership verification)
export async function GET() {
  return new Response(INDEXNOW_KEY, {
    headers: { "Content-Type": "text/plain" },
  })
}
