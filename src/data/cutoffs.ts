export interface CutoffYear {
  year: number
  open: number
  obc: number
  sc: number
  st?: number
}

export interface CollegeCutoff {
  college_slug: string
  college_name: string
  college_short: string
  exam: string
  stream: string
  unit?: string
  cutoffs: CutoffYear[]
}

export const cutoffsData: CollegeCutoff[] = [
  // ── ENGINEERING – JEE Main (JAC Delhi) ──────────────────────────────────
  {
    college_slug: "delhi-technological-university-dtu",
    college_name: "Delhi Technological University",
    college_short: "DTU",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 99.0, obc: 97.5, sc: 93.5, st: 89.0 },
      { year: 2021, open: 99.1, obc: 97.7, sc: 93.8, st: 89.5 },
      { year: 2022, open: 99.2, obc: 97.8, sc: 94.0, st: 90.0 },
      { year: 2023, open: 99.3, obc: 98.0, sc: 94.2, st: 90.5 },
      { year: 2024, open: 99.4, obc: 98.2, sc: 94.5, st: 91.0 },
      { year: 2025, open: 99.2, obc: 97.5, sc: 92.0, st: 85.0 },
      { year: 2026, open: 99.4, obc: 98.0, sc: 94.0, st: 90.0 },
    ],
  },
  {
    college_slug: "nsut-netaji-subhas-university-of-technology",
    college_name: "Netaji Subhas University of Technology",
    college_short: "NSUT",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 98.5, obc: 96.5, sc: 91.5, st: 86.0 },
      { year: 2021, open: 98.6, obc: 96.7, sc: 92.0, st: 86.5 },
      { year: 2022, open: 98.7, obc: 96.9, sc: 92.3, st: 87.0 },
      { year: 2023, open: 98.8, obc: 97.0, sc: 92.5, st: 87.5 },
      { year: 2024, open: 98.9, obc: 97.2, sc: 93.0, st: 88.0 },
      { year: 2025, open: 98.8, obc: 96.5, sc: 91.0, st: 83.0 },
      { year: 2026, open: 99.0, obc: 97.0, sc: 92.0, st: 87.0 },
    ],
  },
  {
    college_slug: "igdtuw-indira-gandhi-delhi-technical-university-women",
    college_name: "IGDTUW – Indira Gandhi Delhi Technical University for Women",
    college_short: "IGDTUW",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 96.5, obc: 94.0, sc: 88.0, st: 80.0 },
      { year: 2022, open: 96.8, obc: 94.3, sc: 88.5, st: 80.5 },
      { year: 2023, open: 97.0, obc: 94.5, sc: 89.0, st: 81.0 },
      { year: 2024, open: 97.2, obc: 94.8, sc: 89.5, st: 81.5 },
      { year: 2025, open: 97.0, obc: 95.0, sc: 88.0, st: 80.0 },
      { year: 2026, open: 97.5, obc: 95.5, sc: 90.0, st: 82.0 },
    ],
  },
  {
    college_slug: "iiit-delhi",
    college_name: "IIIT Delhi – Indraprastha Institute of Information Technology",
    college_short: "IIIT-D",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 98.5, obc: 96.0, sc: 90.0, st: 82.0 },
      { year: 2021, open: 98.7, obc: 96.3, sc: 90.5, st: 82.5 },
      { year: 2022, open: 98.9, obc: 96.5, sc: 91.0, st: 83.0 },
      { year: 2023, open: 99.0, obc: 96.8, sc: 91.5, st: 83.5 },
      { year: 2024, open: 99.1, obc: 97.0, sc: 92.0, st: 84.0 },
      { year: 2025, open: 99.0, obc: 97.0, sc: 90.0, st: 83.0 },
      { year: 2026, open: 99.2, obc: 97.5, sc: 92.5, st: 84.5 },
    ],
  },
  {
    college_slug: "amity-university-noida-engineering",
    college_name: "Amity University Noida – Engineering",
    college_short: "Amity",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 70.0, obc: 62.0, sc: 52.0, st: 45.0 },
      { year: 2021, open: 72.0, obc: 64.0, sc: 54.0, st: 47.0 },
      { year: 2022, open: 74.0, obc: 66.0, sc: 56.0, st: 49.0 },
      { year: 2023, open: 75.0, obc: 67.0, sc: 57.0, st: 50.0 },
      { year: 2024, open: 76.0, obc: 68.0, sc: 58.0, st: 51.0 },
      { year: 2025, open: 75.0, obc: 67.0, sc: 57.0, st: 50.0 },
      { year: 2026, open: 77.0, obc: 69.0, sc: 59.0, st: 52.0 },
    ],
  },
  {
    college_slug: "gl-bajaj-institute-technology-management-noida",
    college_name: "GL Bajaj Institute of Technology",
    college_short: "GL Bajaj",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 72.0, obc: 65.0, sc: 55.0, st: 48.0 },
      { year: 2021, open: 73.0, obc: 66.0, sc: 56.0, st: 49.0 },
      { year: 2022, open: 74.0, obc: 67.0, sc: 57.0, st: 50.0 },
      { year: 2023, open: 75.0, obc: 68.0, sc: 58.0, st: 51.0 },
      { year: 2024, open: 76.0, obc: 69.0, sc: 59.0, st: 52.0 },
      { year: 2025, open: 75.0, obc: 68.0, sc: 58.0, st: 51.0 },
      { year: 2026, open: 77.0, obc: 70.0, sc: 60.0, st: 53.0 },
    ],
  },

  // ── ENGINEERING – JEE Main rank (JOSAA) ─────────────────────────────────
  {
    college_slug: "delhi-technological-university-dtu",
    college_name: "Delhi Technological University – CSE",
    college_short: "DTU",
    exam: "jee",
    stream: "engineering",
    unit: "rank",
    cutoffs: [
      { year: 2020, open: 7500, obc: 11000, sc: 20000, st: 32000 },
      { year: 2021, open: 7200, obc: 10500, sc: 19500, st: 31000 },
      { year: 2022, open: 6900, obc: 10200, sc: 19000, st: 30000 },
      { year: 2023, open: 6600, obc: 9800,  sc: 18500, st: 29000 },
      { year: 2024, open: 6300, obc: 9500,  sc: 18000, st: 28000 },
      { year: 2025, open: 6500, obc: 9800,  sc: 18500, st: 29000 },
      { year: 2026, open: 6200, obc: 9300,  sc: 17500, st: 27500 },
    ],
  },
  {
    college_slug: "iiit-delhi",
    college_name: "IIIT Delhi – CSE (JOSAA)",
    college_short: "IIIT-D",
    exam: "jee",
    stream: "engineering",
    unit: "rank",
    cutoffs: [
      { year: 2020, open: 9000, obc: 14000, sc: 24000, st: 38000 },
      { year: 2021, open: 8500, obc: 13500, sc: 23000, st: 36000 },
      { year: 2022, open: 8000, obc: 13000, sc: 22000, st: 34000 },
      { year: 2023, open: 7500, obc: 12500, sc: 21000, st: 32000 },
      { year: 2024, open: 7200, obc: 12000, sc: 20000, st: 30000 },
      { year: 2025, open: 7500, obc: 12000, sc: 21000, st: 31000 },
      { year: 2026, open: 7000, obc: 11500, sc: 19500, st: 29000 },
    ],
  },

  // ── MEDICAL – NEET ───────────────────────────────────────────────────────
  {
    college_slug: "aiims-delhi",
    college_name: "AIIMS Delhi – All India Institute of Medical Sciences",
    college_short: "AIIMS",
    exam: "neet",
    stream: "medical",
    unit: "score",
    cutoffs: [
      { year: 2020, open: 690, obc: 678, sc: 655, st: 640 },
      { year: 2021, open: 692, obc: 680, sc: 657, st: 642 },
      { year: 2022, open: 693, obc: 681, sc: 659, st: 644 },
      { year: 2023, open: 694, obc: 682, sc: 660, st: 645 },
      { year: 2024, open: 695, obc: 683, sc: 661, st: 646 },
      { year: 2025, open: 697, obc: 685, sc: 660, st: 645 },
      { year: 2026, open: 696, obc: 684, sc: 662, st: 647 },
    ],
  },
  {
    college_slug: "maulana-azad-medical-college-delhi",
    college_name: "Maulana Azad Medical College (MAMC)",
    college_short: "MAMC",
    exam: "neet",
    stream: "medical",
    unit: "score",
    cutoffs: [
      { year: 2020, open: 645, obc: 625, sc: 595, st: 570 },
      { year: 2021, open: 648, obc: 628, sc: 598, st: 573 },
      { year: 2022, open: 650, obc: 630, sc: 600, st: 575 },
      { year: 2023, open: 652, obc: 632, sc: 602, st: 577 },
      { year: 2024, open: 654, obc: 634, sc: 604, st: 579 },
      { year: 2025, open: 652, obc: 632, sc: 600, st: 575 },
      { year: 2026, open: 655, obc: 635, sc: 605, st: 580 },
    ],
  },
  {
    college_slug: "lady-hardinge-medical-college-delhi",
    college_name: "Lady Hardinge Medical College (LHMC)",
    college_short: "LHMC",
    exam: "neet",
    stream: "medical",
    unit: "score",
    cutoffs: [
      { year: 2020, open: 638, obc: 618, sc: 587, st: 560 },
      { year: 2021, open: 640, obc: 620, sc: 590, st: 563 },
      { year: 2022, open: 642, obc: 622, sc: 592, st: 565 },
      { year: 2023, open: 644, obc: 624, sc: 594, st: 567 },
      { year: 2024, open: 646, obc: 626, sc: 596, st: 570 },
      { year: 2025, open: 643, obc: 623, sc: 592, st: 565 },
      { year: 2026, open: 647, obc: 627, sc: 597, st: 571 },
    ],
  },

  // ── MBA – CAT ────────────────────────────────────────────────────────────
  {
    college_slug: "fms-delhi-faculty-management-studies",
    college_name: "FMS Delhi – Faculty of Management Studies",
    college_short: "FMS",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 98.0, obc: 95.0, sc: 88.0, st: 83.0 },
      { year: 2021, open: 98.5, obc: 95.5, sc: 88.5, st: 83.5 },
      { year: 2022, open: 99.0, obc: 96.0, sc: 89.0, st: 84.0 },
      { year: 2023, open: 99.0, obc: 96.5, sc: 89.5, st: 84.5 },
      { year: 2024, open: 99.1, obc: 97.0, sc: 90.0, st: 85.0 },
      { year: 2025, open: 99.0, obc: 97.0, sc: 90.0, st: 85.0 },
      { year: 2026, open: 99.2, obc: 97.2, sc: 90.5, st: 85.5 },
    ],
  },
  {
    college_slug: "mdi-gurgaon-management-development-institute",
    college_name: "MDI Gurgaon – Management Development Institute",
    college_short: "MDI",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2020, open: 95.0, obc: 92.0, sc: 85.0, st: 79.0 },
      { year: 2021, open: 95.5, obc: 92.5, sc: 85.5, st: 79.5 },
      { year: 2022, open: 96.0, obc: 93.0, sc: 86.0, st: 80.0 },
      { year: 2023, open: 96.5, obc: 93.5, sc: 86.5, st: 80.5 },
      { year: 2024, open: 97.0, obc: 94.0, sc: 87.0, st: 81.0 },
      { year: 2025, open: 96.0, obc: 93.0, sc: 86.0, st: 80.0 },
      { year: 2026, open: 97.2, obc: 94.2, sc: 87.5, st: 81.5 },
    ],
  },
  {
    college_slug: "imi-delhi-international-management-institute",
    college_name: "IMI Delhi – International Management Institute",
    college_short: "IMI",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 90.0, obc: 86.0, sc: 78.0, st: 72.0 },
      { year: 2022, open: 91.0, obc: 87.0, sc: 79.0, st: 73.0 },
      { year: 2023, open: 92.0, obc: 88.0, sc: 80.0, st: 74.0 },
      { year: 2024, open: 93.0, obc: 89.0, sc: 81.0, st: 75.0 },
      { year: 2025, open: 90.0, obc: 87.0, sc: 79.0, st: 73.0 },
      { year: 2026, open: 93.5, obc: 89.5, sc: 81.5, st: 75.5 },
    ],
  },

  // ── MBA – SNAP ───────────────────────────────────────────────────────────
  {
    college_slug: "fore-school-management-delhi",
    college_name: "FORE School of Management Delhi",
    college_short: "FORE",
    exam: "snap",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 85.0, obc: 80.0, sc: 72.0, st: 65.0 },
      { year: 2022, open: 86.0, obc: 81.0, sc: 73.0, st: 66.0 },
      { year: 2023, open: 87.0, obc: 82.0, sc: 74.0, st: 67.0 },
      { year: 2024, open: 88.0, obc: 83.0, sc: 75.0, st: 68.0 },
      { year: 2025, open: 85.0, obc: 80.0, sc: 72.0, st: 65.0 },
      { year: 2026, open: 89.0, obc: 84.0, sc: 76.0, st: 69.0 },
    ],
  },
]

export const examLabels: Record<string, string> = {
  "JEE Main": "JEE Main",
  "jee":      "JEE Advanced / JOSAA",
  "neet":     "NEET UG",
  "snap":     "SNAP",
  "cat":      "CAT",
  "cuet":     "CUET",
  "ipu-cet":  "IPU CET",
  "clat":     "CLAT",
}

export const streamLabels: Record<string, string> = {
  "engineering": "Engineering",
  "medical":     "Medical",
  "mba":         "MBA",
}

export function getCutoff(slug: string, exam: string): CollegeCutoff | undefined {
  return cutoffsData.find((c) => c.college_slug === slug && c.exam === exam)
}

export function getCutoffsByCollege(slug: string): CollegeCutoff[] {
  return cutoffsData.filter((c) => c.college_slug === slug)
}

export function getCutoffsByExam(exam: string): CollegeCutoff[] {
  return cutoffsData.filter((c) => c.exam === exam)
}

export function getAllCutoffParams(): { exam: string; college: string }[] {
  return cutoffsData.map((c) => ({ exam: c.exam, college: c.college_slug }))
}
