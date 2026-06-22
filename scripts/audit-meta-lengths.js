const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const files = execSync("git ls-files src/app | grep page.tsx", { cwd: path.join(__dirname, "..") })
  .toString()
  .split("\n")
  .filter(Boolean)

const results = []

for (const f of files) {
  const full = path.join(__dirname, "..", f)
  const content = fs.readFileSync(full, "utf8")
  const titleMatch = content.match(/title:\s*"([^"]*)"/)
  const descMatch = content.match(/description:\s*"([^"]*)"/)
  const t = titleMatch ? titleMatch[1] : null
  const d = descMatch ? descMatch[1] : null
  if ((t && t.length > 60) || (d && d.length > 160)) {
    results.push({ f, t, d, tlen: t ? t.length : 0, dlen: d ? d.length : 0 })
  }
}

results.sort((a, b) => b.dlen - a.dlen)

console.log("Total page.tsx scanned:", files.length)
console.log("Pages with title>60 or desc>160:", results.length)
console.log("")
results.forEach(r => {
  console.log(`${r.f}  title=${r.tlen}  desc=${r.dlen}`)
})
