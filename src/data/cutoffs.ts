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
    college_slug: "dtu-delhi",
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
    college_slug: "nsut-delhi",
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
    college_slug: "igdtuw-delhi",
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
    college_slug: "dtu-delhi",
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

  // ── ENGINEERING – JEE Main (more colleges) ──────────────────────────────
  {
    college_slug: "iit-delhi",
    college_name: "IIT Delhi – Indian Institute of Technology Delhi",
    college_short: "IIT Delhi",
    exam: "JEE Main",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 99.9, obc: 99.7, sc: 99.2, st: 98.5 },
      { year: 2022, open: 99.9, obc: 99.7, sc: 99.3, st: 98.6 },
      { year: 2023, open: 99.9, obc: 99.8, sc: 99.4, st: 98.7 },
      { year: 2024, open: 99.9, obc: 99.8, sc: 99.5, st: 98.8 },
      { year: 2025, open: 99.9, obc: 99.8, sc: 99.3, st: 98.6 },
      { year: 2026, open: 99.9, obc: 99.8, sc: 99.5, st: 98.8 },
    ],
  },
  {
    college_slug: "mait-delhi",
    college_name: "Maharaja Agrasen Institute of Technology (MAIT)",
    college_short: "MAIT",
    exam: "ipu-cet",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 88.0, obc: 82.0, sc: 72.0, st: 62.0 },
      { year: 2022, open: 89.0, obc: 83.0, sc: 73.0, st: 63.0 },
      { year: 2023, open: 90.0, obc: 84.0, sc: 74.0, st: 64.0 },
      { year: 2024, open: 91.0, obc: 85.0, sc: 75.0, st: 65.0 },
      { year: 2025, open: 90.0, obc: 84.0, sc: 74.0, st: 64.0 },
      { year: 2026, open: 91.5, obc: 85.5, sc: 75.5, st: 65.5 },
    ],
  },
  {
    college_slug: "msit-delhi",
    college_name: "Maharaja Surajmal Institute of Technology (MSIT)",
    college_short: "MSIT",
    exam: "ipu-cet",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 86.0, obc: 80.0, sc: 70.0, st: 60.0 },
      { year: 2022, open: 87.0, obc: 81.0, sc: 71.0, st: 61.0 },
      { year: 2023, open: 88.0, obc: 82.0, sc: 72.0, st: 62.0 },
      { year: 2024, open: 89.0, obc: 83.0, sc: 73.0, st: 63.0 },
      { year: 2025, open: 88.0, obc: 82.0, sc: 72.0, st: 62.0 },
      { year: 2026, open: 89.5, obc: 83.5, sc: 73.5, st: 63.5 },
    ],
  },
  {
    college_slug: "nsut-delhi",
    college_name: "Netaji Subhas University of Technology (NSUT) — IPU CET",
    college_short: "NSUT",
    exam: "ipu-cet",
    stream: "engineering",
    unit: "percentile",
    cutoffs: [
      { year: 2022, open: 98.5, obc: 96.0, sc: 90.0, st: 82.0 },
      { year: 2023, open: 98.7, obc: 96.5, sc: 90.5, st: 83.0 },
      { year: 2024, open: 98.9, obc: 97.0, sc: 91.0, st: 83.5 },
      { year: 2025, open: 98.8, obc: 96.5, sc: 90.5, st: 83.0 },
      { year: 2026, open: 99.0, obc: 97.0, sc: 91.5, st: 84.0 },
    ],
  },

  // ── MEDICAL – NEET (more colleges) ──────────────────────────────────────
  {
    college_slug: "vmmc-delhi",
    college_name: "Vardhman Mahavir Medical College & Safdarjung Hospital",
    college_short: "VMMC",
    exam: "neet",
    stream: "medical",
    unit: "score",
    cutoffs: [
      { year: 2021, open: 635, obc: 612, sc: 580, st: 555 },
      { year: 2022, open: 638, obc: 615, sc: 583, st: 558 },
      { year: 2023, open: 640, obc: 618, sc: 585, st: 560 },
      { year: 2024, open: 642, obc: 620, sc: 587, st: 562 },
      { year: 2025, open: 640, obc: 618, sc: 585, st: 560 },
      { year: 2026, open: 643, obc: 621, sc: 588, st: 563 },
    ],
  },
  {
    college_slug: "ucms-delhi",
    college_name: "University College of Medical Sciences (UCMS), Delhi",
    college_short: "UCMS",
    exam: "neet",
    stream: "medical",
    unit: "score",
    cutoffs: [
      { year: 2021, open: 630, obc: 608, sc: 575, st: 548 },
      { year: 2022, open: 633, obc: 610, sc: 578, st: 551 },
      { year: 2023, open: 635, obc: 613, sc: 580, st: 553 },
      { year: 2024, open: 637, obc: 615, sc: 582, st: 555 },
      { year: 2025, open: 635, obc: 612, sc: 580, st: 552 },
      { year: 2026, open: 638, obc: 616, sc: 583, st: 556 },
    ],
  },

  // ── MBA – CAT (more colleges) ────────────────────────────────────────────
  {
    college_slug: "iift-delhi",
    college_name: "IIFT Delhi – Indian Institute of Foreign Trade",
    college_short: "IIFT",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 95.0, obc: 90.0, sc: 82.0, st: 75.0 },
      { year: 2022, open: 95.5, obc: 91.0, sc: 83.0, st: 76.0 },
      { year: 2023, open: 96.0, obc: 92.0, sc: 84.0, st: 77.0 },
      { year: 2024, open: 96.5, obc: 92.5, sc: 84.5, st: 78.0 },
      { year: 2025, open: 96.0, obc: 92.0, sc: 84.0, st: 77.0 },
      { year: 2026, open: 97.0, obc: 93.0, sc: 85.0, st: 78.5 },
    ],
  },
  {
    college_slug: "imt-ghaziabad",
    college_name: "IMT Ghaziabad – Institute of Management Technology",
    college_short: "IMT",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 90.0, obc: 85.0, sc: 77.0, st: 70.0 },
      { year: 2022, open: 91.0, obc: 86.0, sc: 78.0, st: 71.0 },
      { year: 2023, open: 92.0, obc: 87.0, sc: 79.0, st: 72.0 },
      { year: 2024, open: 93.0, obc: 88.0, sc: 80.0, st: 73.0 },
      { year: 2025, open: 92.0, obc: 87.0, sc: 79.0, st: 72.0 },
      { year: 2026, open: 93.5, obc: 88.5, sc: 80.5, st: 73.5 },
    ],
  },
  {
    college_slug: "lbsim-delhi",
    college_name: "LBSIM Delhi – Lal Bahadur Shastri Institute of Management",
    college_short: "LBSIM",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 75.0, obc: 70.0, sc: 62.0, st: 55.0 },
      { year: 2022, open: 76.0, obc: 71.0, sc: 63.0, st: 56.0 },
      { year: 2023, open: 77.0, obc: 72.0, sc: 64.0, st: 57.0 },
      { year: 2024, open: 78.0, obc: 73.0, sc: 65.0, st: 58.0 },
      { year: 2025, open: 77.0, obc: 72.0, sc: 64.0, st: 57.0 },
      { year: 2026, open: 79.0, obc: 74.0, sc: 66.0, st: 59.0 },
    ],
  },
  {
    college_slug: "bimtech-greater-noida",
    college_name: "BIMTECH – Birla Institute of Management Technology, Greater Noida",
    college_short: "BIMTECH",
    exam: "cat",
    stream: "mba",
    unit: "percentile",
    cutoffs: [
      { year: 2021, open: 78.0, obc: 72.0, sc: 63.0, st: 56.0 },
      { year: 2022, open: 79.0, obc: 73.0, sc: 64.0, st: 57.0 },
      { year: 2023, open: 80.0, obc: 74.0, sc: 65.0, st: 58.0 },
      { year: 2024, open: 82.0, obc: 76.0, sc: 67.0, st: 60.0 },
      { year: 2025, open: 80.0, obc: 74.0, sc: 65.0, st: 58.0 },
      { year: 2026, open: 83.0, obc: 77.0, sc: 68.0, st: 61.0 },
    ],
  },

  // ── LAW – CLAT ───────────────────────────────────────────────────────────
  {
    college_slug: "mnlu-delhi-national-law-university-delhi",
    college_name: "NLU Delhi – National Law University Delhi",
    college_short: "NLU Delhi",
    exam: "clat",
    stream: "law",
    unit: "rank",
    cutoffs: [
      { year: 2021, open: 1800, obc: 3200, sc: 5500, st: 7000 },
      { year: 2022, open: 1700, obc: 3000, sc: 5200, st: 6800 },
      { year: 2023, open: 1600, obc: 2800, sc: 5000, st: 6500 },
      { year: 2024, open: 1500, obc: 2600, sc: 4800, st: 6200 },
      { year: 2025, open: 1600, obc: 2700, sc: 5000, st: 6400 },
      { year: 2026, open: 1500, obc: 2600, sc: 4800, st: 6200 },
    ],
  },
  {
    college_slug: "faculty-of-law-delhi-university",
    college_name: "Faculty of Law, Delhi University (DU LLB Entrance)",
    college_short: "DU Law",
    exam: "clat",
    stream: "law",
    unit: "score",
    cutoffs: [
      { year: 2021, open: 82, obc: 76, sc: 68, st: 60 },
      { year: 2022, open: 83, obc: 77, sc: 69, st: 61 },
      { year: 2023, open: 84, obc: 78, sc: 70, st: 62 },
      { year: 2024, open: 85, obc: 79, sc: 71, st: 63 },
      { year: 2025, open: 84, obc: 78, sc: 70, st: 62 },
      { year: 2026, open: 85, obc: 79, sc: 71, st: 63 },
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
  "clat":     "CLAT / DU LLB Entrance",
}

export const examDescriptions: Record<string, string> = {
  "JEE Main": "JEE Main percentile cutoff (JAC Delhi counselling) for government engineering colleges in Delhi",
  "jee":      "JEE Main rank cutoff (JOSAA counselling) for IIT Delhi and centrally-funded institutes",
  "neet":     "NEET UG score cutoff for MBBS/BDS admission at top Delhi medical colleges",
  "cat":      "CAT percentile cutoff for MBA/PGDM shortlisting at Delhi NCR management institutes",
  "snap":     "SNAP percentile cutoff for MBA at Symbiosis and affiliated colleges",
  "ipu-cet":  "IPU CET percentile cutoff for B.Tech at IP University affiliated colleges in Delhi",
  "clat":     "CLAT rank / DU LLB Entrance score cutoff for law colleges in Delhi",
}

export const unitSuffix: Record<string, string> = {
  percentile: " %ile",
  rank:       " rank",
  score:      " marks",
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
