# Schema Markup Report — collegedelhi.com
**Audit date:** June 11, 2026  
**Format:** JSON-LD (server-rendered `<script type="application/ld+json">`)

---

## Validation Results

| Schema | Pages | Status | Issues Fixed |
|--------|-------|--------|--------------|
| Organization | Homepage | ✅ Valid | BASE_URL www fix applied |
| WebSite + SearchAction | Homepage | ✅ Valid | BASE_URL www fix applied |
| LocalBusiness | Homepage | ✅ Valid | BASE_URL www fix applied |
| BreadcrumbList | 10+ page types | ✅ Valid | BASE_URL www fix applied |
| CollegeOrUniversity | College profiles | ✅ Valid | Rich, complete, with AggregateRating |
| AggregateRating | College profiles | ✅ Valid | ratingValue, reviewCount, bestRating all present |
| Review | College profiles | ✅ Valid | Up to 5 reviews per profile |
| Article + BlogPosting | Blog `[slug]` | ✅ Valid | ISO 8601 dates, publisher logo present |
| ItemList | SEO landing pages | ✅ Fixed | Was using non-www URLs — bulk fix applied |
| FAQPage | 87 pages | ⚠️ Restricted | See Issue 1 below |
| HowTo | 2 pages | ❌ Deprecated | **Removed** (Sep 2023 deprecation) |
| SpeakableSpecification | 2 pages | ⚠️ Removed | **Removed** (negligible support) |

---

## Issues Found & Fixed

### ❌ CRITICAL (Fixed) — `https://collegedelhi.com` hardcoded in 54 files

**Problem:** All schema URLs, `@id` values, `url` properties, and entity identifiers used the non-www domain `https://collegedelhi.com`. The live canonical site is `https://www.collegedelhi.com`. Mismatched `@id` values mean Google's entity graph cannot reliably connect schemas across pages.  
**Fix applied:** Bulk replaced all instances across 54 src/ files. `BASE_URL` in `seo.ts` also updated to www. All future schema-generated URLs will use canonical www form.

---

### ❌ CRITICAL (Fixed) — HowTo schema on 2 pages

**Pages:** `best-colleges-in-delhi`, `best-mba-colleges-delhi`  
**Problem:** Google removed HowTo rich results in **September 2023**. Any HowTo schema is ignored by Google and other major engines. Keeping deprecated schemas adds bloat and can confuse automated schema validators.  
**Fix applied:** Removed `generateHowToSchema` calls and import from both pages. The `generateHowToSchema` function still exists in `seo.ts` for potential future use on platforms that may support it, but it is no longer rendered.

---

### ⚠️ HIGH — FAQPage schema on 87 non-gov/non-healthcare pages

**Problem:** Google restricted FAQPage rich results in **August 2023** to government and healthcare authority websites only. CollegeDelhi is neither. FAQPage schemas on these pages will:
- **Not** generate visible FAQ rich result accordions in Google SERP
- Not cause a ranking penalty (schema itself is valid)
- Still be read by AI engines (Perplexity, ChatGPT Search) for GEO/AEO — a positive signal

**Recommendation:** Consider replacing FAQPage with `WebPage` + `mainEntity` pattern on non-eligible pages. However, given the GEO/AEO benefit and the zero-penalty cost, this is low urgency. Monitor Google Search Console → Enhancements → FAQs for any manual action notices.  
**Status:** Not removed — FAQPage data is valuable for AI engines even without Google rich results.

---

### ⚠️ MEDIUM — SpeakableSpecification on 2 pages (removed)

**Pages:** `best-colleges-in-delhi`, `best-mba-colleges-delhi`  
**Problem:** Speakable is only supported on Google Assistant / Google Home, with no current Google Search rich result. Support is minimal and Google's own documentation marks it as "BETA" with "limited support." CSS selectors `.quick-answer` referenced in the schema don't exist as class names in the SEOLandingPage component — the schema was pointing to non-existent elements.  
**Fix applied:** Removed from both pages.

---

### ⚠️ MEDIUM — Article author lacks credentials

**Pages:** All blog `[slug]` pages  
**Problem:** Article schema `author` field sets `name: post.author` (pulled from DB) and `url: /blog`. For E-E-A-T, Google prefers:
- `author.url` pointing to an actual author bio page (`/authors/[name]`), not the blog index
- A `sameAs` linking to the author's LinkedIn or other authoritative profile
- `knowsAbout` or `jobTitle` properties

**Recommendation:** Create `/authors/[slug]` pages with Person schema. Map each post author to a named person with credentials. Update `generateArticleSchema` to accept author URL and sameAs.

---

### ⚠️ MEDIUM — Organization + LocalBusiness both on homepage

**Problem:** Homepage emits 4 schema blocks: Organization, WebSite, FAQPage, and LocalBusiness. Organization and LocalBusiness overlap significantly — both declare `name`, `url`, `telephone`, `address`. This creates redundant entity declarations that can confuse Google's knowledge graph.  
**Recommendation:** Remove LocalBusiness from the homepage. Keep Organization (covers the brand entity) + WebSite (enables Sitelinks Searchbox). LocalBusiness is appropriate for a physical storefront — CollegeDelhi is a digital platform.

---

### ⚠️ LOW — `generateCourseSchema` defined but unused in app pages

**Problem:** `generateCourseSchema` is exported from `seo.ts` but not imported by any page. Course schema is an active Google-supported type and would be valuable on course detail pages (`/courses/[slug]`).  
**Recommendation:** Add Course schema to each `courses/[slug]/page.tsx`.

---

## What's Working Well

| Signal | Detail |
|--------|--------|
| Server-rendered JSON-LD | All schemas use native `<script type="application/ld+json">` tags — Google sees them in raw HTML without JS execution |
| CollegeOrUniversity richness | Full address, telephone, email, courses (via OfferCatalog), AggregateRating, and Reviews — one of the most complete implementations possible |
| WebSite SearchAction | Sitelinks Searchbox eligible — `urlTemplate` correctly formatted for Google |
| Article ISO dates | `datePublished` and `dateModified` correctly formatted as ISO 8601 strings |
| BreadcrumbList coverage | Present on college profiles, blogs, alumni pages, comparison pages, SEO landing pages |
| Social sameAs links | Organization schema links to Twitter, Facebook, Instagram, LinkedIn, YouTube — strengthens entity graph |

---

## Missing Schema Opportunities

### 1. Event schema on admission calendar page

`/delhi-college-admission-calendar-2026` lists dated events (exam registrations, result dates) with no Event schema. Each calendar entry should have:

```json
{
  "@type": "Event",
  "name": "JEE Main 2026 Session 1",
  "startDate": "2026-01-22",
  "endDate": "2026-01-30",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": { "@type": "VirtualLocation", "url": "https://jeemain.nta.nic.in" },
  "organizer": { "@type": "Organization", "name": "NTA", "url": "https://nta.ac.in" }
}
```

### 2. EducationalOccupationalProgram on course pages

`/courses/[slug]` pages should use `EducationalOccupationalProgram` (active, Google-supported) instead of or in addition to `Course`. This type includes `occupationalCategory`, `salaryUponCompletion`, and `timeToComplete` — properties that feed directly into Google's education rich results.

### 3. Course schema on `/courses/[slug]` pages

`generateCourseSchema` is already built — just needs to be wired up:

```typescript
// src/app/courses/[slug]/page.tsx
import { generateCourseSchema } from "@/lib/seo"
// ...
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCourseSchema({
  name: course.name,
  description: course.description,
  provider: "CollegeDelhi",
  duration: course.duration,
  url: `/courses/${course.slug}`,
  fees: { min: course.feesMin, max: course.feesMax },
})) }} />
```

### 4. Person schema on `/about` page

The About page should declare the team/founders with Person schema including `jobTitle`, `alumniOf`, `sameAs` (LinkedIn). This is a direct E-E-A-T signal for YMYL education content.

### 5. ProfilePage schema on `/alumni/[slug]`

Already has BreadcrumbList. Should add `ProfilePage` schema:

```json
{
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Rahul Sharma",
    "alumniOf": { "@type": "CollegeOrUniversity", "name": "DTU Delhi" },
    "worksFor": { "@type": "Organization", "name": "Google" }
  }
}
```

---

## Summary

| Category | Count | Action |
|---|---|---|
| ❌ Critical fixed | 2 | HowTo removed (2 pages), non-www URLs bulk-fixed (54 files) |
| ⚠️ High — monitor | 1 | FAQPage on 87 pages (no penalty, GEO benefit retained) |
| ⚠️ Medium — action needed | 3 | Article author, Org+LocalBiz duplication, unused CourseSchema |
| ✅ Missing opportunities | 4 | Event, EducationalOccupationalProgram, Person, ProfilePage |
| ✅ Strong | 6 | Server-rendered JSON-LD, CollegeOrUniversity depth, SearchAction, dates, BreadcrumbList, sameAs |
