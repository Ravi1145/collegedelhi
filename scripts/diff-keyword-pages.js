// Diffs delhi-seo-keywords.csv URL Slugs against existing src/app routes
// to find which planned pages don't exist yet.
//
// Usage: node scripts/diff-keyword-pages.js [--min-priority=4] [--top=50]

const fs = require("fs")
const path = require("path")

const CSV_PATH = path.join(__dirname, "..", "..", "delhi-seo-keywords.csv")
const APP_DIR = path.join(__dirname, "..", "src", "app")

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, "").split("=")
    return [k, v]
  })
)
const minPriority = Number(args["min-priority"] ?? 4)
const top = Number(args["top"] ?? 50)

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean)
  const header = splitRow(lines[0])
  return lines.slice(1).map(line => {
    const cols = splitRow(line)
    const row = {}
    header.forEach((h, i) => (row[h] = cols[i]))
    return row
  })
}

function splitRow(line) {
  const out = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      inQuotes = !inQuotes
    } else if (c === "," && !inQuotes) {
      out.push(cur)
      cur = ""
    } else {
      cur += c
    }
  }
  out.push(cur)
  return out
}

// Existing routes: dynamic segments (e.g. [slug], [pair]) are excluded —
// they're backend-driven, not static pages we'd hand-author from a keyword.
const existingSlugs = new Set(
  fs.readdirSync(APP_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith("[") && !d.name.startsWith("("))
    .map(d => "/" + d.name)
)

// Routes whose content lives behind a dynamic [slug]/[pair] segment — a CSV
// row under these prefixes means "missing DB record", not "missing page",
// so they're not actionable as new static pages and must be excluded.
const dynamicPrefixes = ["/colleges/", "/blog/", "/compare/", "/courses/", "/exams/"]

const rows = parseCsv(fs.readFileSync(CSV_PATH, "utf8"))

const seen = new Set()
const missing = []

for (const row of rows) {
  const slug = (row["URL Slug"] || "").trim()
  const priority = Number(row["Priority"] || 0)
  if (!slug || seen.has(slug)) continue
  seen.add(slug)
  if (priority < minPriority) continue
  if (existingSlugs.has(slug)) continue
  if (dynamicPrefixes.some(p => slug.startsWith(p))) continue
  missing.push({
    slug,
    keyword: row["Keyword"],
    volume: Number(row["Volume"] || 0),
    priority,
    category: row["Category"],
  })
}

missing.sort((a, b) => b.priority - a.priority || b.volume - a.volume)

console.log(`Existing static routes: ${existingSlugs.size}`)
console.log(`Unique slugs in CSV: ${seen.size}`)
console.log(`Missing (priority >= ${minPriority}): ${missing.length}`)
console.log("")
missing.slice(0, top).forEach(m => {
  console.log(`P${m.priority}  vol=${m.volume.toString().padStart(6)}  ${m.slug}  —  "${m.keyword}"  [${m.category}]`)
})
