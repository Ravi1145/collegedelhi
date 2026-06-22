// Shortens oversized title/description metadata in src/app/**/page.tsx to fit
// Google's display limits (title <=60 chars, description <=160 chars).
// Truncates at the nearest natural boundary (separator/punctuation/word) —
// never rewrites or invents content, only trims existing text.
//
// Usage:
//   node scripts/fix-meta-lengths.js            # dry run, prints planned changes
//   node scripts/fix-meta-lengths.js --apply    # writes the changes to disk

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const APPLY = process.argv.includes("--apply")
const TITLE_LIMIT = 60
const DESC_LIMIT = 160

const files = execSync("git ls-files src/app | grep page.tsx", { cwd: path.join(__dirname, "..") })
  .toString()
  .split("\n")
  .filter(Boolean)

// Words/punctuation that read as "cut off mid-thought" if left dangling at
// the end of a trimmed string — strip them iteratively so the result always
// ends on a complete-feeling word.
const DANGLING_TRAILERS = /(\s+(for|of|in|on|to|with|and|or|the|a|an|by|via|vs|which|who|whom|that|this|these|those|is|are|was|were|be|being|been|such|very|–|—|-)|[\s,;:&\-–—]+|[₹$]\s*\d*[.,]?\d*)$/i

function stripDangling(text) {
  let prev
  do {
    prev = text
    text = text.replace(DANGLING_TRAILERS, "")
  } while (text !== prev && text.length > 0)
  return text.trim()
}

// Cut at the last separator/punctuation before `limit`; fall back to last
// whitespace before `limit` so we never slice mid-word. Always strips any
// dangling trailing word/punctuation left by the cut.
function smartTrim(text, limit, separators) {
  if (text.length <= limit) return text
  let bestCut = -1
  for (const sep of separators) {
    const idx = text.lastIndexOf(sep, limit)
    if (idx > bestCut) bestCut = idx
  }
  if (bestCut > limit * 0.4) {
    return stripDangling(text.slice(0, bestCut))
  }
  const lastSpace = text.lastIndexOf(" ", limit)
  return stripDangling(text.slice(0, lastSpace > 0 ? lastSpace : limit))
}

function fixTitle(t) {
  return smartTrim(t, TITLE_LIMIT, [" | ", " — ", " - "])
}

function fixDescription(d) {
  // Prefer cutting at sentence-ending punctuation so the result reads cleanly.
  const trimmed = smartTrim(d, DESC_LIMIT, [". ", "! ", "? "])
  if (/[.!?]$/.test(trimmed)) return trimmed
  // No clean sentence boundary found — word-boundary cut, end with a period
  // only if the original had terminal punctuation already (don't invent tone).
  return trimmed.replace(/[,;:]$/, "")
}

const changes = []

for (const f of files) {
  const full = path.join(__dirname, "..", f)
  let content = fs.readFileSync(full, "utf8")

  const titleMatch = content.match(/title:\s*"([^"]*)"/)
  const descMatch = content.match(/description:\s*"([^"]*)"/)
  const t = titleMatch ? titleMatch[1] : null
  const d = descMatch ? descMatch[1] : null

  let newContent = content
  const fileChanges = {}

  if (t && t.length > TITLE_LIMIT) {
    const newT = fixTitle(t)
    if (newT !== t) {
      // Replace using the actual matched text (preserves whatever whitespace/
      // line-break formatting surrounds the value) instead of assuming a
      // fixed "key: \"value\"" layout, which silently failed to match files
      // that wrap the string onto the next line.
      newContent = newContent.replace(titleMatch[0], titleMatch[0].replace(t, newT))
      fileChanges.title = { from: t, to: newT }
    }
  }
  if (d && d.length > DESC_LIMIT) {
    const newD = fixDescription(d)
    if (newD !== d) {
      newContent = newContent.replace(descMatch[0], descMatch[0].replace(d, newD))
      fileChanges.description = { from: d, to: newD }
    }
  }

  if (Object.keys(fileChanges).length > 0) {
    changes.push({ f, fileChanges })
    if (APPLY) fs.writeFileSync(full, newContent)
  }
}

console.log(`${APPLY ? "Applied" : "Planned"} changes to ${changes.length} files\n`)
for (const { f, fileChanges } of changes) {
  console.log(f)
  if (fileChanges.title) {
    console.log(`  title (${fileChanges.title.from.length}->${fileChanges.title.to.length}): ${fileChanges.title.to}`)
  }
  if (fileChanges.description) {
    console.log(`  desc  (${fileChanges.description.from.length}->${fileChanges.description.to.length}): ${fileChanges.description.to}`)
  }
}

if (!APPLY) {
  console.log("\nDry run only. Re-run with --apply to write these changes.")
}
