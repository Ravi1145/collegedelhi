# GEO Analysis: collegedelhi.com vs Collegedunia
**Scope:** Delhi, Greater Noida, Gurugram college-discovery queries
**Date:** 2026-06-22

## GEO Readiness Score: 58/100

Technically strong (SSR, schema, AI-crawler access, llms.txt present) but undermined by stale/inaccurate data in some pages and near-zero brand/entity presence — the factor Google and LLM providers weight most heavily for AI-search citation.

## Platform Breakdown

| Platform | Score | Why |
|---|---|---|
| Google AI Overviews | 55/100 | SSR + schema are right; but indexation only just resumed after the canonical bug fix this session, so there's no ranking history yet to draw AIO citations from |
| ChatGPT | 45/100 | No Wikipedia, Reddit, or LinkedIn presence found — the two strongest ChatGPT citation sources (47.9% Wikipedia, 11.3% Reddit) are both absent |
| Perplexity | 40/100 | Same gap — Perplexity leans even more on Reddit (46.7%) and Wikipedia; zero community-validated mentions found |
| Bing Copilot | 60/100 | Bing indexing should follow once Google indexation stabilizes; no Bing-specific blockers found |

## AI Crawler Access Status

**collegedelhi.com — robots.txt explicitly allows:**
GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, Claude-Web, PerplexityBot, Perplexity-User, Applebot, DuckDuckBot, Bytespider, cohere-ai, Diffbot. Blocks only CCBot (training-only, correctly excluded). This is a clean, deliberate AI-crawler allowlist — better configured than most sites I've audited.

**Collegedunia — could not verify.** Their `robots.txt` returned a CloudFront 403 ("Request blocked") on this fetch, which is most likely a bot-protection/WAF rule rather than a real robots directive — but I can't confirm their actual AI-crawler policy from here. Don't treat this as "Collegedunia blocks AI crawlers"; it's an unverified gap, not a finding.

## llms.txt Status

**collegedelhi.com:** Present at `/llms.txt`, well-structured with sections for core pages, stream-specific pages, exam guides, and tools. **However, it contains stale data that contradicts the data-accuracy fixes made earlier this session** — it still lists "MAMC, VMMC, Lady Hardinge" and "NID, NIFT Delhi" as verified Delhi institutions, none of which exist in the backend's verified college roster. Per Google's official guidance (and the evidence cited in this skill's reference docs), llms.txt carries no confirmed citation weight with major AI systems — so this is a maintenance/consistency issue, not a ranking risk, but it should still be corrected so it doesn't contradict the rest of the site.

**Collegedunia:** Returned 403 on this fetch — presence unconfirmed.

## Brand Mention Analysis

| Signal | collegedelhi.com | Collegedunia |
|---|---|---|
| Wikipedia | None found | Likely has some presence given 10+ year operating history (not independently verified this session) |
| Reddit | None found | Established brand likely has organic mentions (unverified) |
| YouTube | None found | Unverified |
| LinkedIn | Not checked | Unverified |

This is the most consequential gap. Per the Ahrefs study cited in this skill, brand mentions correlate ~3x more strongly with AI citation than backlinks, and YouTube/Reddit mentions are the single strongest signals (~0.737 correlation). A 10+ year incumbent has almost certainly accumulated incidental mentions across these platforms simply by existing in the space; a new site has none by default. This isn't fixable through on-page work — it requires actual presence-building (the "High Impact" actions below).

## Passage-Level Citability

Spot-checked pages already reviewed this session (`engineering-colleges-delhi`, `medical-colleges-delhi`) have:
- "Quick Answer" boxes in the 60-100 word range — slightly short of the optimal 134-167 word citation window
- Clear "X is Y" definition patterns in places (e.g., AIIMS Delhi NIRF #1 framing)
- FAQ sections with direct Q&A structure — good for extraction

**Gap:** the Quick Answer boxes are optimized for human skimming, not for the 134-167 word self-contained block AI systems prefer to lift verbatim. Worth lengthening 2-3 sentences in the highest-traffic Quick Answer boxes to hit that window without padding.

## Server-Side Rendering Check

Confirmed earlier this session: Next.js App Router with SSG + ISR (`revalidate` set per-page, mostly 300s). This is not a client-rendered site — AI crawlers that don't execute JavaScript will see full content. No SSR gap.

## Top 5 Highest-Impact Changes

1. **Fix the llms.txt content drift** — it currently asserts facts (MAMC/VMMC/Lady Hardinge/NID/NIFT as verified) that the rest of the site's data-accuracy work this session just removed. Low effort, prevents a self-contradicting signal across the site's own surfaces.
2. **Lengthen Quick Answer boxes to 134-167 words** on the top 10 highest-traffic pages — currently most run 60-100 words, under the optimal AI-citation passage length.
3. **Build actual entity presence** — a LinkedIn company page, a YouTube channel (even just predictor/comparison-tool demo videos), and seeking organic Reddit mentions (e.g., answering r/DelhiUniversity, r/Btechtards questions genuinely, not promotionally) would do more for AI-search visibility than any further on-page change.
4. **Confirm Google indexation actually recovered** from the canonical fix earlier this session — GEO optimization is moot if the underlying pages aren't indexed at all yet. This is upstream of everything else here.
5. **Add author/publication date bylines** — none of the reviewed pages have a visible author credential or last-updated date, both "Authority & Brand Signal" factors this framework weights at 20%.

## Schema Recommendations

Already present and solid: FAQPage, BreadcrumbList, ItemList, Course, Organization, WebSite (confirmed earlier this session). **Missing:** Person schema for content authorship (if pages have a named author/editor) and Article schema with `datePublished`/`dateModified` — both currently absent given the lack of bylines/dates noted above.

## Content Reformatting Suggestions

- Engineering/Medical/MBA hub pages: expand the "Quick Answer" box from ~80 words to the 134-167 word range by adding one more concrete data point per stream (e.g., a specific cutoff trend or fee range) rather than padding with filler.
- Add explicit "X is..." definition sentences as the first sentence of major hub pages (e.g., "AIIMS Delhi is India's premier government medical institution, ranked NIRF #1 in Medical...") — several already do this; extend the pattern to the Greater Noida/Gurugram location pages (`colleges-greater-noida`, `colleges-gurugram`, `mba-colleges-greater-noida`, `mba-colleges-gurgaon`), which currently open with the location label rather than a definitional sentence.

---

**On Collegedunia specifically:** I could not directly audit their GEO posture — their robots.txt and llms.txt both returned blocked/error responses to this session's fetches (likely WAF, not necessarily their actual AI policy). The honest comparison is: collegedelhi.com's *technical* GEO foundation (SSR, schema, AI-crawler allowlist, llms.txt) is comparably strong or better than what's typical for a site this size — the gap with an incumbent like Collegedunia is almost entirely in *brand/entity presence* built over a decade, which no amount of on-page optimization closes quickly.
