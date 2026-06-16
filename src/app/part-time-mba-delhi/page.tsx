import type { Metadata } from "next"
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo"
import SEOLandingPage from "@/components/seo/SEOLandingPage"

export const metadata: Metadata = genMeta({
  title: "Part-Time MBA in Delhi 2026 | Weekend MBA Colleges, Fees & Admission",
  description: "Best part-time MBA colleges in Delhi 2026: FMS Evening, IMT Part-Time, LBSIM, MDI PGPM-Ex. Weekend MBA, Saturday-Sunday classes. Fees ₹2L–₹15L. For working professionals.",
  path: "/part-time-mba-delhi",
  keywords: [
    "part time mba in delhi",
    "part time mba colleges in delhi",
    "weekend mba delhi",
    "part time mba for working professionals delhi",
    "saturday sunday mba delhi",
    "evening mba delhi",
    "part time pgdm delhi",
    "best part time mba delhi",
    "part time mba fees delhi",
    "part time mba admission delhi",
    "weekend mba colleges delhi ncr",
    "part time mba from delhi university",
    "part time mba from fms delhi",
    "part time executive mba delhi",
    "part time mba vs executive mba delhi",
  ],
})

export const revalidate = 300

const colleges = [
  { name: "FMS Delhi — MBA (Evening / Part-Time Programme)", location: "University Enclave, North Delhi", naac: "A++", fees: "₹55K total", placement: "Self-placed (working professionals)", slug: "fms-delhi-faculty-management-studies" },
  { name: "IMT Ghaziabad — PGDM Part-Time (Weekend Classes)", location: "Knowledge Park II, Ghaziabad (Delhi NCR)", naac: "A+", fees: "₹7.5L total", placement: "Career uplift (working)", slug: "imt-ghaziabad-pgdm-part-time" },
  { name: "MDI Gurgaon — PGPM-Ex (Executive / Part-Time for Experienced)", location: "MG Road, Gurgaon, Haryana", naac: "A+", fees: "₹14.5L total", placement: "₹18 LPA avg (post-programme)", slug: "mdi-gurgaon-pgpm-executive" },
  { name: "LBSIM Delhi — PGDM Part-Time (Saturday Classes)", location: "Dwarka, New Delhi", naac: "A", fees: "₹5.5L total", placement: "Self-placed (working professionals)", slug: "lbsim-lal-bahadur-shastri-institute-management-delhi" },
  { name: "IIM Lucknow — MBA Working Professionals (Delhi Centre)", location: "Noida Centre (Delhi NCR accessible)", naac: "A++", fees: "₹19.5L total", placement: "Self-placed (senior professionals)", slug: "iim-lucknow-mba-working-professionals-delhi" },
  { name: "Amity University — MBA (Weekend Batch, Noida Campus)", location: "Sector 125, Noida (Delhi NCR)", naac: "A+", fees: "₹3L per year", placement: "Career support provided", slug: "amity-university-noida-mba-weekend" },
]

const faqs = [
  { q: "Which is the best part-time MBA college in Delhi for working professionals?", a: "FMS Delhi (Faculty of Management Studies) is the best part-time MBA in Delhi — the Evening MBA programme at FMS is one of India's most prestigious part-time MBAs, same NAAC A++ quality as the full-time programme, at just ₹55K total fees. Admission is through CAT score. However, FMS Evening is very competitive. For candidates who miss FMS Evening: IMT Ghaziabad Part-Time PGDM (weekend classes, ₹7.5L total) and LBSIM Delhi Part-Time PGDM (Saturday classes, ₹5.5L total, Delhi campus) are strong alternatives. MDI Gurgaon PGPM-Ex is best for candidates with 5+ years experience targeting senior roles." },
  { q: "What is the difference between part-time MBA, executive MBA, and online MBA in Delhi?", a: "Part-Time MBA: 2–3 year programme with evening/weekend classes — for working professionals who continue their job. Same curriculum as full-time MBA. Degree: MBA or PGDM (same as full-time). Executive MBA (EMBA): 1–2 year intensive programme for senior professionals (5+ years experience). More peer-learning, cohort model, leadership focus. Often weekend residential. Online MBA: Fully online, no campus attendance required. Maximum flexibility, no geographic constraint, government-recognized from UGC-approved universities. Choose part-time if you want campus experience + peer network. Choose EMBA if you have 5+ years experience and want leadership focus. Choose online if cost and flexibility are primary." },
  { q: "What is the CAT cutoff for FMS Evening MBA Delhi?", a: "FMS Delhi Evening Programme (part-time MBA) CAT cutoff 2026 (expected): 90–93 percentile overall. Section-wise minimum: Verbal 85+ %ile, Quantitative 85+ %ile, DILR 80+ %ile. FMS Evening is significantly easier to get into than FMS Day (99+ %ile) but still requires a strong CAT score. Work experience is mandatory — typically 2+ years required. Application at fms.edu (December 2025–February 2026). Selection: CAT score 50% + work experience 30% + PI 20%. FMS Evening MBA is the same quality degree as FMS Day MBA — highly valued by employers." },
  { q: "Can I do an MBA while working full-time in Delhi?", a: "Yes — multiple good options for MBA while working full-time in Delhi: FMS Delhi Evening MBA (weekday evenings 6–9 PM), IMT Ghaziabad Part-Time PGDM (Saturday–Sunday full day), LBSIM Delhi Part-Time PGDM (Saturday classes), MDI Gurgaon PGPM-Ex (weekend residential modules). All programmes are designed for employed professionals — classes scheduled outside office hours. Average workload: 15–20 hours per week (classes + study + assignments). Employers generally support MBA pursuit — some provide study leave for exams. Choose a programme with a campus within 30 min of your office for minimum disruption." },
  { q: "What is the fee for part-time MBA in Delhi 2026?", a: "Part-time MBA fees in Delhi 2026: FMS Delhi Evening MBA: ₹55,000 total (cheapest by far for the quality). LBSIM Delhi Part-Time PGDM: ₹5.5L total. IMT Ghaziabad Part-Time PGDM: ₹7.5L total. MDI Gurgaon PGPM-Ex: ₹14.5L total. IIM Lucknow MBA-WP (Delhi Centre): ₹19.5L total. Amity Weekend MBA: ₹3L per year (total ₹6L for 2 years). Compare: full-time PGDM at FORE costs ₹16.5L + 2 years of lost salary (₹15–25L) = ₹31–41L total cost of full-time MBA. Part-time MBA total cost is ₹55K–₹19.5L with no lost salary — much better ROI for most working professionals." },
]

export default function PartTimeMBADelhiPage() {
  const faqSchema = generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "MBA Colleges Delhi", url: "/mba-colleges-delhi" },
    { name: "Part-Time MBA Delhi", url: "/part-time-mba-delhi" },
  ])
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Part-Time MBA Colleges in Delhi NCR 2026",
    numberOfItems: colleges.length,
    itemListElement: colleges.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `https://www.collegedelhi.com/colleges/${c.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <SEOLandingPage
        breadcrumb={[
          { label: "MBA Colleges Delhi", href: "/mba-colleges-delhi" },
          { label: "Part-Time MBA Delhi", href: "/part-time-mba-delhi" },
        ]}
        h1="Best Part-Time MBA Colleges in Delhi 2026 — Weekend & Evening MBA"
        subtitle="Part-time MBA (weekend MBA / evening MBA) lets you earn an MBA while keeping your job. Best options in Delhi: FMS Evening MBA (₹55K, CAT 90+ %ile), IMT Part-Time PGDM (₹7.5L, weekends), LBSIM Part-Time (₹5.5L, Saturdays), MDI PGPM-Ex (₹14.5L, 5+ years exp). All UGC-recognized PGDM/MBA degrees."
        heroStats={[
          { value: "₹55K", label: "FMS Evening MBA Total Fees" },
          { value: "2–3 Years", label: "Part-Time MBA Duration" },
          { value: "0 Salary Loss", label: "Continue Working Full-Time" },
          { value: "CAT 90+", label: "FMS Evening Cutoff" },
        ]}
        introHeading="Part-Time MBA in Delhi 2026 — Weekend MBA Guide for Working Professionals"
        introParagraphs={[
          "Part-time MBA (also called weekend MBA, evening MBA, or Saturday MBA) is the fastest-growing MBA format among Delhi's working professionals — offering the same PGDM/MBA degree as full-time programmes while allowing you to keep your job and salary. Delhi NCR's high concentration of corporate employees (500,000+ in Gurgaon, 400,000+ in Noida) makes it India's largest market for part-time MBA programmes, with 6+ established options ranging from ₹55K (FMS Evening) to ₹19.5L (IIM Lucknow MBA-WP).",
          "FMS Delhi's Evening MBA is the gold standard of part-time MBA in Delhi — same NAAC A++ quality, same faculty, same degree as the full-time MBA programme, at ₹55K total fees. Admission through CAT (90–93 percentile required) with mandatory 2+ years work experience. Classes are held on weekday evenings (6–9 PM) at the FMS campus in North Delhi. For candidates who miss FMS Evening: IMT Ghaziabad Part-Time PGDM (weekend classes, ₹7.5L, Delhi NCR campus) and LBSIM Delhi Part-Time PGDM (Saturday classes, ₹5.5L, Dwarka) are the best Delhi NCR alternatives.",
          "Key decision: Part-time MBA vs Online MBA vs Executive MBA. Part-time MBA is best when you want campus experience, peer networking, and a full-time equivalent credential while working. Online MBA is best for maximum flexibility and lowest cost (IGNOU ₹31,500 total). Executive MBA (MDI PGPM-Ex, IIM Lucknow MBA-WP) is best for senior professionals with 5+ years who want a leadership-focused programme and are willing to pay ₹14–20L. All three earn the same recognition in most private sector jobs.",
        ]}
        colleges={colleges}
        whyHeading="Why Part-Time MBA in Delhi 2026?"
        whyPoints={[
          { title: "Keep Your Salary While Getting MBA", description: "The biggest advantage of part-time MBA: you keep your full salary (₹6–15 LPA typically for candidates considering MBA) while earning the degree. Over 2–3 years, a working professional earning ₹8 LPA saves ₹16–24L compared to leaving the job for full-time MBA. Combined with lower fees (₹55K–₹7.5L vs ₹16–22L for full-time PGDM), the total financial advantage is ₹25–40L over a full-time programme." },
          { title: "Apply MBA Learning Immediately", description: "Part-time MBA students can apply concepts learned in class directly at their current job — this creates a compound learning effect where work experience reinforces academics and vice versa. Marketing MBA students immediately test brand strategies. Finance MBA students apply valuation models to their CFO's projects. This practical application is unavailable in full-time MBA and creates significantly faster skill development." },
          { title: "FMS Evening — India's Best Part-Time MBA Brand", description: "FMS Delhi's Evening MBA programme is one of India's most prestigious part-time credentials — the same NAAC A++ institution, same faculty, same PGDM degree. FMS Evening alumni work at senior positions in HDFC Bank, McKinsey, Amazon, and Unilever. The FMS brand on a part-time MBA CV commands the same respect as an IIM or MDI full-time MBA in most Delhi NCR corporate contexts." },
          { title: "Weekend Classes — Minimal Work Disruption", description: "IMT Ghaziabad Part-Time PGDM classes are Saturday–Sunday (full day). LBSIM Part-Time PGDM classes are Saturday-only. MDI PGPM-Ex uses monthly 3-day residential modules (Friday evening – Sunday). This minimal weekday disruption allows maintaining full work performance. Delhi NCR's excellent metro connectivity means no car needed — metro from any point to IMT Ghaziabad (Anand Vihar), LBSIM (Dwarka), or MDI (HUDA City Centre)." },
          { title: "Peer Network of Working Professionals", description: "Part-time MBA cohorts are all working professionals — classmates are engineers, bankers, consultants, and entrepreneurs who bring real industry experience to classroom discussions. This peer network is more immediately actionable than fresh graduate cohorts in full-time MBA. Referrals, co-founder relationships, and senior job recommendations come from part-time MBA peer networks within 1–2 years of graduating." },
          { title: "Career Change While Maintaining Security", description: "Part-time MBA is the safest path for career change — you can switch industries (IT to consulting, banking to FMCG) without the risk of having no income during the transition. By MBA Semester 3–4, you can apply for jobs in your target new industry with an MBA credential + your existing 3–5 years of experience — making you far more competitive than fresh full-time MBA graduates with no experience." },
        ]}
        admissionHeading="Part-Time MBA Admission Process Delhi 2026"
        admissionSteps={[
          { step: "1", title: "Choose the Right Programme by Score & Experience", description: "CAT 90–93 %ile + 2–5 years exp → FMS Evening MBA (₹55K, Delhi campus, best brand). CAT 75–85 %ile + any exp → IMT Ghaziabad Part-Time PGDM (₹7.5L, Ghaziabad). CAT 65–75 %ile + Delhi resident → LBSIM Part-Time PGDM (₹5.5L, Dwarka campus). 5+ years exp, senior role → MDI Gurgaon PGPM-Ex (₹14.5L, Gurgaon) or IIM Lucknow MBA-WP Delhi Centre (₹19.5L). Budget priority → Amity Weekend MBA (₹3L/year, Noida) or IGNOU Online MBA (₹31,500 total)." },
          { step: "2", title: "FMS Evening MBA Application", description: "FMS Evening MBA 2026: Apply at fms.edu (December 2025–February 2026). Submit CAT 2025 score + work experience certificate (minimum 2 years post-graduation). Shortlisting based on CAT score 50% + work experience quality and quantity 30% + academic record 20%. Selection: Group Discussion + Personal Interview at FMS Delhi campus (March 2026). GD topic is typically a current business/economic issue. PI covers work experience, career goals, and why part-time MBA (not full-time)." },
          { step: "3", title: "IMT Ghaziabad Part-Time Application", description: "IMT Ghaziabad Part-Time PGDM 2026: Apply at imt.edu (January–April 2026). Accepts CAT, XAT, GMAT. Work experience requirement: minimum 1 year. Classes: Saturday and Sunday at Ghaziabad campus. Duration: 3 years (weekend-only format). Shortlisting: entrance score + work experience profile + PI. PI at IMT campus or online (Zoom). Batch starts July 2026. IMT Part-Time PGDM is AICTE-approved and recognized — same PGDM credential as full-time programme." },
          { step: "4", title: "Prepare for Work-Experience-Focused PI", description: "Part-time MBA PI is fundamentally different from full-time MBA PI — focus is on work experience and career goals, not just academics and entrance scores. Prepare: (1) STAR-format stories of 3–4 significant professional achievements. (2) Clear 'Why MBA now?' — what specific skill gap does MBA address at this career stage. (3) Clear post-MBA goal — career change, promotion, or entrepreneurship. (4) Why part-time (not full-time) — demonstrate awareness that you're choosing stability over risk. PI panels at all part-time MBA programmes are especially interested in work experience depth and clarity of purpose." },
          { step: "5", title: "Manage Work-Study Balance After Joining", description: "The #1 challenge in part-time MBA is work-study balance. Best practices from Delhi part-time MBA alumni: Block calendar: protect Saturday/Sunday for classes and Friday evening for study prep. Communicate with manager: disclose part-time MBA plans to direct manager — most Delhi NCR managers are supportive (many did part-time MBA themselves). Study in commute: 1–1.5 hours daily in Delhi metro is sufficient for most reading assignments. Form study groups with cohort immediately — peer support is critical for assignment completion. Expect 18–20 months of intense schedule before semester rhythm settles." },
        ]}
        faqs={faqs}
        ctaHeading="Get Free Part-Time MBA Guidance for Delhi 2026"
        ctaSubtext="Tell us your CAT score, years of work experience, and weekly class availability — our counsellors will recommend the best part-time or weekend MBA in Delhi NCR for your situation."
        relatedGuides={[
          { label: "MBA Colleges in Delhi 2026", href: "/mba-colleges-delhi", icon: "🏛️" },
          { label: "Executive MBA Delhi", href: "/executive-mba-delhi", icon: "💼" },
          { label: "Online MBA Delhi", href: "/online-mba-delhi", icon: "💻" },
          { label: "FMS Delhi — ₹55K MBA", href: "/fms-delhi", icon: "🎓" },
          { label: "MDI Gurgaon — PGDM", href: "/mdi-gurgaon", icon: "📍" },
          { label: "IMT Ghaziabad — PGDM", href: "/imt-ghaziabad", icon: "🏫" },
          { label: "LBSIM Delhi — PGDM", href: "/lbsim-delhi", icon: "🏛️" },
          { label: "Low Fees MBA Colleges Delhi", href: "/low-fees-mba-colleges-delhi", icon: "💰" },
          { label: "MBA Admission Without CAT Delhi", href: "/mba-admission-delhi-without-cat", icon: "📝" },
          { label: "Top 10 MBA Colleges Delhi", href: "/top-10-mba-colleges-in-delhi", icon: "🏆" },
        ]}
      />
    </>
  )
}
