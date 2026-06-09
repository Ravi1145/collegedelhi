import { Course } from "@/types"

export const courses: Course[] = [
  // ── ENGINEERING UG ─────────────────────────────────────────────────────────
  {
    id: 1, slug: "btech-computer-science-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Computer Science & Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech CSE is the most sought-after engineering program in Delhi NCR. DTU, NSUT, IIIT Delhi, and Amity Noida offer cutting-edge curricula in AI, cloud, and full-stack development. Graduates land roles at Google, Amazon, Microsoft, and top startups with packages up to ₹60 LPA.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main score mandatory for govt colleges.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET", "CUET"],
    avgFees: { min: 150000, max: 500000 },
    avgSalary: 1200000,
    topColleges: ["DTU Delhi", "NSUT Delhi", "IIIT Delhi", "IGDTUW Delhi", "Amity University Noida", "Bennett University Noida", "Sharda University Noida"],
    careerOptions: ["Software Engineer", "Data Scientist", "DevOps Engineer", "ML Engineer", "Full-Stack Developer", "Product Manager", "Cloud Architect"],
    skills: ["Python", "Java", "Data Structures", "Algorithms", "Cloud Computing", "Machine Learning", "System Design"],
    subjects: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "AI/ML", "Web Technologies", "Software Engineering"]
  },
  {
    id: 2, slug: "btech-mechanical-engineering-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Mechanical Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Mechanical Engineering in Delhi NCR prepares students for careers in automotive, aerospace, manufacturing, and energy. Delhi's proximity to Maruti Suzuki, Tata Motors, Hero MotoCorp, and DRDO provides exceptional placement opportunities.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main required.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET"],
    avgFees: { min: 150000, max: 420000 },
    avgSalary: 700000,
    topColleges: ["DTU Delhi", "NSUT Delhi", "IGDTUW Delhi", "Amity University Noida", "GL Bajaj Noida", "KIET Ghaziabad"],
    careerOptions: ["Design Engineer", "Production Manager", "Quality Engineer", "R&D Engineer", "Automotive Engineer", "Project Manager"],
    skills: ["CAD/CAM", "SolidWorks", "AutoCAD", "Manufacturing Processes", "Thermodynamics", "FEA Analysis"],
    subjects: ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing Technology", "Heat Transfer", "Robotics"]
  },
  {
    id: 3, slug: "btech-civil-engineering-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Civil Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Civil Engineering in Delhi offers excellent career opportunities with CPWD, DDA, L&T, and infrastructure giants. Delhi Metro, smart city projects, and real estate boom create high demand. DTU and NSUT are top choices for civil engineering.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main required.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET"],
    avgFees: { min: 120000, max: 400000 },
    avgSalary: 600000,
    topColleges: ["DTU Delhi", "NSUT Delhi", "Amity University Noida", "KIET Ghaziabad", "GL Bajaj Noida"],
    careerOptions: ["Structural Engineer", "Site Engineer", "Urban Planner", "Project Manager", "Construction Manager", "Consultant"],
    skills: ["AutoCAD", "STAAD Pro", "REVIT", "Project Management", "Surveying", "Structural Analysis"],
    subjects: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Transportation Engineering", "Surveying", "Construction Management"]
  },
  {
    id: 4, slug: "btech-electronics-communication-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Electronics & Communication Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech ECE in Delhi NCR is ideal for students interested in semiconductors, telecom, and embedded systems. With 5G rollout and IoT boom, ECE graduates from DTU and NSUT are highly valued at Samsung, Qualcomm, Intel, and DRDO.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main required.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET"],
    avgFees: { min: 150000, max: 450000 },
    avgSalary: 800000,
    topColleges: ["DTU Delhi", "NSUT Delhi", "IIIT Delhi", "Amity University Noida", "Jaypee Institute Noida"],
    careerOptions: ["Embedded Systems Engineer", "VLSI Designer", "Telecom Engineer", "IoT Developer", "RF Engineer", "Signal Processing Engineer"],
    skills: ["VHDL/Verilog", "PCB Design", "MATLAB", "Embedded C", "Signal Processing", "FPGA"],
    subjects: ["Analog Electronics", "Digital Electronics", "Signal Processing", "Microprocessors", "VLSI Design", "Wireless Communication"]
  },
  {
    id: 5, slug: "btech-electrical-engineering-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Electrical Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Electrical Engineering in Delhi NCR opens doors to power sector, BSES, NTPC, BHEL, and renewable energy companies. With India's push toward solar and smart grids, electrical engineers from DTU are in high demand.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main required.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET"],
    avgFees: { min: 130000, max: 420000 },
    avgSalary: 650000,
    topColleges: ["DTU Delhi", "NSUT Delhi", "IGDTUW Delhi", "Amity University Noida", "GL Bajaj Noida"],
    careerOptions: ["Power Systems Engineer", "Electrical Design Engineer", "Control Systems Engineer", "Energy Auditor", "Renewable Energy Specialist"],
    skills: ["MATLAB/Simulink", "AutoCAD Electrical", "Power Systems", "PLC Programming", "Circuit Design"],
    subjects: ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics", "High Voltage Engineering"]
  },
  {
    id: 6, slug: "btech-information-technology-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Information Technology",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech IT in Delhi NCR focuses on software applications, networking, and enterprise systems. NSUT, IGDTUW, and Amity Noida offer strong IT programs. Graduates join TCS, Infosys, Wipro, Capgemini with packages from ₹4–18 LPA.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main or IPU CET required.",
    entranceExams: ["JEE Main", "IPU CET", "CUET"],
    avgFees: { min: 140000, max: 450000 },
    avgSalary: 700000,
    topColleges: ["NSUT Delhi", "IGDTUW Delhi", "Amity University Noida", "Galgotias University", "NIET Noida"],
    careerOptions: ["Software Developer", "IT Consultant", "System Administrator", "Network Engineer", "Business Analyst"],
    skills: ["Java", "Python", ".NET", "Database Management", "Cloud Computing", "Cybersecurity"],
    subjects: ["Software Engineering", "Database Management", "Computer Networks", "Web Technologies", "Information Security", "Cloud Computing"]
  },
  {
    id: 7, slug: "btech-ai-machine-learning-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech AI/ML is the newest and hottest engineering program in Delhi NCR. IIIT Delhi, Bennett University, Sharda University, and Galgotias offer dedicated AI/ML programs. Graduates are placed at top AI companies, research labs, and product firms with packages ₹12–50 LPA.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main or university entrance required.",
    entranceExams: ["JEE Main", "IPU CET", "Bennett University Entrance", "CUET"],
    avgFees: { min: 180000, max: 550000 },
    avgSalary: 1400000,
    topColleges: ["IIIT Delhi", "Bennett University Noida", "Sharda University Noida", "Galgotias University", "Amity University Noida"],
    careerOptions: ["ML Engineer", "AI Researcher", "Data Scientist", "NLP Engineer", "Computer Vision Engineer", "AI Product Manager"],
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "NLP", "Computer Vision", "Statistics"],
    subjects: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Big Data Analytics"]
  },
  {
    id: 8, slug: "btech-data-science-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Data Science",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Data Science in Delhi NCR is a rapidly growing specialization covering statistics, programming, and big data analytics. Bennett University, Galgotias, and Amity Noida offer full-time B.Tech Data Science programs with industry partnerships.",
    eligibility: "Class 12 with PCM/Mathematics, min. 50% marks.",
    entranceExams: ["JEE Main", "Bennett University Entrance", "CUET", "IPU CET"],
    avgFees: { min: 170000, max: 530000 },
    avgSalary: 1100000,
    topColleges: ["Bennett University Noida", "Galgotias University", "Amity University Noida", "Sharda University", "NIET Noida"],
    careerOptions: ["Data Scientist", "Data Analyst", "Business Intelligence Analyst", "Data Engineer", "Analytics Consultant"],
    skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning", "Statistics"],
    subjects: ["Statistics", "Data Mining", "Big Data Analytics", "Machine Learning", "Data Visualization", "Database Systems"]
  },
  {
    id: 9, slug: "btech-computer-science-cybersecurity-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Computer Science with Cybersecurity",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Cybersecurity in Delhi NCR trains students in ethical hacking, network security, and digital forensics. With rising cyber threats, graduates are hired by CERT-In, NIC, banking sector, and IT security firms at ₹8–30 LPA.",
    eligibility: "Class 12 with PCM, min. 50% marks. JEE Main or entrance test.",
    entranceExams: ["JEE Main", "IPU CET", "CUET"],
    avgFees: { min: 160000, max: 500000 },
    avgSalary: 900000,
    topColleges: ["IIIT Delhi", "Amity University Noida", "Bennett University Noida", "Sharda University", "Galgotias University"],
    careerOptions: ["Cybersecurity Analyst", "Ethical Hacker", "Security Architect", "Forensic Analyst", "SOC Analyst"],
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "Penetration Testing", "SIEM Tools", "Incident Response"],
    subjects: ["Network Security", "Cryptography", "Ethical Hacking", "Digital Forensics", "Malware Analysis", "Cloud Security"]
  },
  {
    id: 10, slug: "btech-chemical-engineering-delhi",
    name: "B.Tech", fullName: "Bachelor of Technology in Chemical Engineering",
    duration: "4 Years", level: "UG", stream: "Engineering",
    description: "B.Tech Chemical Engineering in Delhi NCR covers process design, petrochemicals, and pharmaceuticals. DTU's chemical engineering program is highly rated. Graduates join IOCL, HPCL, BPCL, Reliance, and pharma giants.",
    eligibility: "Class 12 with PCM (Chemistry mandatory), min. 50% marks. JEE Main required.",
    entranceExams: ["JEE Main", "JEE Advanced", "IPU CET"],
    avgFees: { min: 130000, max: 400000 },
    avgSalary: 650000,
    topColleges: ["DTU Delhi", "Amity University Noida", "KIET Ghaziabad", "Sharda University"],
    careerOptions: ["Process Engineer", "Chemical Plant Operator", "Quality Control Engineer", "Environmental Engineer", "R&D Chemist"],
    skills: ["ASPEN Plus", "HYSYS", "Process Design", "Lab Techniques", "Chemical Safety"],
    subjects: ["Thermodynamics", "Fluid Mechanics", "Heat Transfer", "Mass Transfer", "Chemical Reaction Engineering", "Process Control"]
  },

  // ── ENGINEERING PG ─────────────────────────────────────────────────────────
  {
    id: 11, slug: "mtech-computer-science-delhi",
    name: "M.Tech", fullName: "Master of Technology in Computer Science",
    duration: "2 Years", level: "PG", stream: "Engineering",
    description: "M.Tech CS/IT in Delhi is highly competitive. DTU, NSUT, IIIT Delhi, and IIT Delhi offer GATE-based M.Tech with ₹12,400/month GATE fellowship. Specializations in AI, Systems, Networks, and Security. Strong research culture with publications and patents.",
    eligibility: "B.Tech/BE in CS/IT/ECE with min. 55% marks. GATE score required.",
    entranceExams: ["GATE", "IPU CET M.Tech", "CUET PG"],
    avgFees: { min: 25000, max: 350000 },
    avgSalary: 1400000,
    topColleges: ["IIT Delhi", "DTU Delhi", "NSUT Delhi", "IIIT Delhi", "Jamia Millia Islamia"],
    careerOptions: ["Senior Software Engineer", "Research Scientist", "Technical Architect", "Professor/Lecturer", "AI Research Engineer"],
    skills: ["Advanced Algorithms", "Research Methodology", "Paper Writing", "Specialization Domain", "Teaching Assistantship"],
    subjects: ["Advanced Algorithms", "Research Methodology", "Specialization Core", "Thesis/Dissertation", "Seminar"]
  },
  {
    id: 12, slug: "mtech-mechanical-engineering-delhi",
    name: "M.Tech", fullName: "Master of Technology in Mechanical Engineering",
    duration: "2 Years", level: "PG", stream: "Engineering",
    description: "M.Tech Mechanical Engineering in Delhi offers specializations in CAD/CAM, Thermal Engineering, Manufacturing, and Robotics. GATE stipend of ₹12,400/month available at IIT Delhi, DTU, and NSUT. Research collaboration with DRDO, HAL, and ISRO.",
    eligibility: "B.Tech Mechanical/Production/Aerospace with min. 55%. GATE required.",
    entranceExams: ["GATE"],
    avgFees: { min: 20000, max: 300000 },
    avgSalary: 1000000,
    topColleges: ["IIT Delhi", "DTU Delhi", "NSUT Delhi", "Amity University Noida"],
    careerOptions: ["R&D Engineer", "Senior Design Engineer", "Manufacturing Manager", "Robotics Engineer", "Professor"],
    skills: ["FEA/FEM", "Advanced Manufacturing", "CFD", "Robotics Programming", "Research Skills"],
    subjects: ["Advanced Manufacturing", "FEM/FEA", "Robotics", "Thermal Engineering", "Dissertation"]
  },

  // ── MANAGEMENT UG ──────────────────────────────────────────────────────────
  {
    id: 13, slug: "bba-bachelor-business-administration-delhi",
    name: "BBA", fullName: "Bachelor of Business Administration",
    duration: "3 Years", level: "UG", stream: "Management",
    description: "BBA in Delhi NCR prepares students for business careers or MBA studies. SSCBS (Shaheed Sukhdev College DU) is India's top BBA college. Amity Noida, IILM, and Galgotias also offer excellent programs. Strong corporate exposure with Delhi's business ecosystem.",
    eligibility: "Class 12 in any stream, min. 45% marks. CUET for DU; IPU CET for IP University.",
    entranceExams: ["CUET", "IPU CET", "College Entrance Test"],
    avgFees: { min: 20000, max: 350000 },
    avgSalary: 450000,
    topColleges: ["Shaheed Sukhdev College DU", "Amity University Noida", "IILM University", "Galgotias University", "Deen Dayal Upadhyaya College DU"],
    careerOptions: ["Business Analyst", "Sales Manager", "HR Executive", "Marketing Executive", "Entrepreneur", "MBA Student"],
    skills: ["Business Communication", "Financial Literacy", "Marketing Basics", "Leadership", "Analytics", "Presentation Skills"],
    subjects: ["Principles of Management", "Business Communication", "Marketing Management", "Financial Accounting", "HRM", "Business Law", "Entrepreneurship"]
  },
  {
    id: 14, slug: "bba-finance-delhi",
    name: "BBA", fullName: "Bachelor of Business Administration in Finance",
    duration: "3 Years", level: "UG", stream: "Management",
    description: "BBA Finance in Delhi NCR specializes in financial markets, investment banking, and corporate finance. With Delhi being India's financial hub — NSE, BSE, SEBI, major bank HQs — BBA Finance graduates have unmatched internship and job access.",
    eligibility: "Class 12 with Commerce/Mathematics, min. 45% marks.",
    entranceExams: ["CUET", "IPU CET", "College Entrance Test"],
    avgFees: { min: 50000, max: 400000 },
    avgSalary: 550000,
    topColleges: ["Amity University Noida", "IILM University", "Galgotias University", "Bennett University Noida", "Sharda University"],
    careerOptions: ["Financial Analyst", "Investment Banker", "Equity Researcher", "CA Article Student", "Wealth Manager"],
    skills: ["Financial Modeling", "Excel", "Tally", "Stock Markets", "Taxation", "Financial Statement Analysis"],
    subjects: ["Financial Accounting", "Corporate Finance", "Investment Analysis", "Taxation", "Financial Markets", "Banking Operations"]
  },
  {
    id: 15, slug: "bcom-bachelor-commerce-delhi",
    name: "B.Com", fullName: "Bachelor of Commerce",
    duration: "3 Years", level: "UG", stream: "Commerce",
    description: "B.Com in Delhi University is offered at SRCC, Hansraj, Hindu College, and 50+ DU colleges. CUET-based admission. Strong foundation for CA, CMA, CS, or MBA. SRCC's B.Com Hons is India's most prestigious commerce programme with alumni at Goldman Sachs, McKinsey, and top banks.",
    eligibility: "Class 12 with Commerce, min. 45–50% marks. CUET required for DU colleges.",
    entranceExams: ["CUET", "IPU CET", "Class 12 Merit"],
    avgFees: { min: 8000, max: 120000 },
    avgSalary: 400000,
    topColleges: ["SRCC Delhi University", "Hansraj College DU", "Hindu College DU", "Deen Dayal Upadhyaya College DU", "Shaheed Bhagat Singh College DU"],
    careerOptions: ["Chartered Accountant", "Cost Accountant", "Company Secretary", "Financial Analyst", "Bank Officer", "MBA"],
    skills: ["Accounting", "Taxation", "Auditing", "Tally", "MS Excel", "Financial Analysis"],
    subjects: ["Financial Accounting", "Business Law", "Income Tax", "Cost Accounting", "Business Statistics", "Corporate Accounting"]
  },
  {
    id: 16, slug: "bcom-hons-delhi",
    name: "B.Com (Hons)", fullName: "Bachelor of Commerce (Honours)",
    duration: "3 Years", level: "UG", stream: "Commerce",
    description: "B.Com (Hons) from SRCC, Hansraj, or Hindu College DU is the gold standard of commerce education in India. Requires CUET top scores. Alumni at Big 4 firms, investment banks, and top MBA programs worldwide. Excellent CA/MBA gateway.",
    eligibility: "Class 12 with Commerce, min. 50%+ marks. High CUET score required for top DU colleges.",
    entranceExams: ["CUET"],
    avgFees: { min: 10000, max: 50000 },
    avgSalary: 500000,
    topColleges: ["SRCC Delhi University", "Hansraj College DU", "Hindu College DU", "Ramjas College DU", "Shri Ram College of Commerce"],
    careerOptions: ["CA (ICAI)", "Investment Banker", "Financial Analyst", "Corporate Finance Manager", "MBA Graduate"],
    skills: ["Advanced Accounting", "Audit", "Taxation Law", "Financial Markets", "Business Analytics"],
    subjects: ["Corporate Accounting", "Business Law", "Auditing", "Income Tax Law", "Financial Markets", "Statistics"]
  },

  // ── MANAGEMENT PG ──────────────────────────────────────────────────────────
  {
    id: 17, slug: "mba-delhi-master-business-administration",
    name: "MBA", fullName: "Master of Business Administration",
    duration: "2 Years", level: "PG", stream: "Management",
    description: "MBA from Delhi NCR opens doors to top leadership roles. FMS Delhi (₹55K total fees, ₹32 LPA avg) is India's best value MBA. MDI Gurgaon (₹22L, ₹24 LPA avg), IIFT Delhi (₹20L, ₹22 LPA avg), and IMI Delhi (₹14L) complete the elite tier. CAT is the primary entrance exam.",
    eligibility: "Bachelor's degree with min. 50% marks. CAT/XAT/CMAT/MAT score required.",
    entranceExams: ["CAT", "XAT", "CMAT", "MAT", "IIFT Exam", "IPU CET MBA"],
    avgFees: { min: 55000, max: 2300000 },
    avgSalary: 1800000,
    topColleges: ["FMS Delhi", "MDI Gurgaon", "IIFT Delhi", "IMI Delhi", "FORE School Delhi", "BIMTECH Noida", "LBSIM Delhi", "DSM DTU"],
    careerOptions: ["Management Consultant", "Product Manager", "Finance Manager", "Marketing Manager", "Operations Manager", "Business Analyst", "Investment Banker"],
    skills: ["Strategic Thinking", "Leadership", "Financial Analysis", "Marketing", "Data Analytics", "Negotiation", "Presentation"],
    subjects: ["Business Strategy", "Financial Management", "Marketing Management", "Operations Management", "Organizational Behavior", "Business Analytics", "Leadership"]
  },
  {
    id: 18, slug: "pgdm-delhi",
    name: "PGDM", fullName: "Post Graduate Diploma in Management",
    duration: "2 Years", level: "PG", stream: "Management",
    description: "PGDM is an AICTE-approved management diploma equivalent to MBA, offered by autonomous institutes in Delhi NCR. MDI Gurgaon, IMI Delhi, FORE, BIMTECH, LBSIM, and IMT Ghaziabad offer top PGDM programs. Industry-oriented curriculum updated annually without university delays.",
    eligibility: "Bachelor's degree with min. 50% marks. CAT/XAT/CMAT score required.",
    entranceExams: ["CAT", "XAT", "CMAT", "MAT"],
    avgFees: { min: 500000, max: 2200000 },
    avgSalary: 1600000,
    topColleges: ["MDI Gurgaon", "IMI Delhi", "FORE School Delhi", "BIMTECH Noida", "LBSIM Delhi", "IMT Ghaziabad", "Jaipuria Institute Noida"],
    careerOptions: ["Management Consultant", "Brand Manager", "Finance Manager", "Operations Manager", "HR Manager"],
    skills: ["Business Strategy", "Leadership", "Analytics", "Financial Modeling", "Case Study Analysis"],
    subjects: ["Business Policy", "Managerial Economics", "Financial Management", "Marketing", "Operations", "Business Research Methods"]
  },
  {
    id: 19, slug: "mba-finance-delhi",
    name: "MBA", fullName: "Master of Business Administration in Finance",
    duration: "2 Years", level: "PG", stream: "Management",
    description: "MBA Finance from Delhi's top colleges leads to investment banking, equity research, and corporate finance roles. FMS Delhi, MDI Gurgaon, and IIFT Delhi are gold standards. Goldman Sachs, JP Morgan, HSBC, and Deloitte are top recruiters. Avg salary ₹20–40 LPA at premier colleges.",
    eligibility: "Bachelor's degree with min. 50% marks. CAT/XAT score and strong quantitative aptitude.",
    entranceExams: ["CAT", "XAT", "GMAT", "CMAT"],
    avgFees: { min: 55000, max: 2300000 },
    avgSalary: 2000000,
    topColleges: ["FMS Delhi", "MDI Gurgaon", "IMI Delhi", "FORE School Delhi", "BIMTECH Noida"],
    careerOptions: ["Investment Banker", "Equity Analyst", "Corporate Finance Manager", "Risk Manager", "CFO Track"],
    skills: ["Financial Modeling", "Valuation", "Excel/VBA", "Bloomberg Terminal", "DCF Analysis", "Financial Statement Analysis"],
    subjects: ["Corporate Finance", "Investment Banking", "Derivatives", "Portfolio Management", "Financial Risk Management", "M&A"]
  },
  {
    id: 20, slug: "mba-marketing-delhi",
    name: "MBA", fullName: "Master of Business Administration in Marketing",
    duration: "2 Years", level: "PG", stream: "Management",
    description: "MBA Marketing from Delhi NCR's top B-schools leads to brand management, digital marketing, and sales leadership roles. With HUL, P&G, Marico, ITC, and Nestle having major Delhi offices, marketing MBA graduates from FMS and MDI are heavily recruited.",
    eligibility: "Bachelor's degree with min. 50% marks. CAT/XAT/CMAT score required.",
    entranceExams: ["CAT", "XAT", "CMAT", "MAT"],
    avgFees: { min: 55000, max: 2200000 },
    avgSalary: 1600000,
    topColleges: ["FMS Delhi", "MDI Gurgaon", "IMI Delhi", "FORE School Delhi", "Amity Business School Noida"],
    careerOptions: ["Brand Manager", "Digital Marketing Manager", "Sales Manager", "Market Research Analyst", "CMO Track"],
    skills: ["Digital Marketing", "Brand Management", "Consumer Research", "Social Media", "Analytics", "Communication"],
    subjects: ["Consumer Behavior", "Brand Management", "Digital Marketing", "Sales Management", "Advertising", "Market Research"]
  },

  // ── MEDICAL / HEALTHCARE ───────────────────────────────────────────────────
  {
    id: 21, slug: "mbbs-delhi-bachelor-medicine-surgery",
    name: "MBBS", fullName: "Bachelor of Medicine and Bachelor of Surgery",
    duration: "5.5 Years", level: "UG", stream: "Medical",
    description: "MBBS from Delhi's top medical colleges offers world-class education. AIIMS Delhi (NIRF #2, fees ~₹1,600/yr) is India's best. MAMC, Lady Hardinge, and VMMC are other top government options with attached hospitals having 1000+ beds for clinical training. NEET is mandatory.",
    eligibility: "Class 12 with PCB, min. 50% (40% SC/ST). NEET UG score mandatory.",
    entranceExams: ["NEET UG"],
    avgFees: { min: 2000, max: 1500000 },
    avgSalary: 1500000,
    topColleges: ["AIIMS Delhi", "Maulana Azad Medical College Delhi", "Lady Hardinge Medical College Delhi", "VMMC Safdarjung Delhi", "Jamia Hamdard"],
    careerOptions: ["General Physician", "Specialist Doctor", "Surgeon", "Medical Researcher", "Hospital Administrator", "Medical Officer"],
    skills: ["Clinical Diagnosis", "Patient Care", "Medical Ethics", "Surgical Skills", "Research", "Communication"],
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Microbiology", "Surgery", "Medicine", "Obstetrics & Gynecology"]
  },
  {
    id: 22, slug: "bds-bachelor-dental-surgery-delhi",
    name: "BDS", fullName: "Bachelor of Dental Surgery",
    duration: "5 Years", level: "UG", stream: "Medical",
    description: "BDS from Delhi's top dental colleges leads to a rewarding career in oral healthcare. Maulana Azad Institute of Dental Sciences (MAIDS) and Jamia Millia Islamia dental program are among India's best. NEET-based admission. Scope in private practice and hospital dentistry.",
    eligibility: "Class 12 with PCB, min. 50% marks. NEET UG score required.",
    entranceExams: ["NEET UG"],
    avgFees: { min: 50000, max: 700000 },
    avgSalary: 700000,
    topColleges: ["MAIDS Delhi", "Jamia Millia Islamia Dental", "Manipal College Dental Delhi", "Subharti Medical College Ghaziabad"],
    careerOptions: ["Dentist", "Oral Surgeon", "Orthodontist", "Dental Researcher", "Dental Clinic Owner"],
    skills: ["Dental Procedures", "Radiology", "Patient Communication", "Oral Surgery", "Prosthodontics"],
    subjects: ["Oral Anatomy", "Dental Materials", "Oral Medicine", "Periodontology", "Oral Surgery", "Orthodontics", "Pedodontics"]
  },
  {
    id: 23, slug: "bpharm-bachelor-pharmacy-delhi",
    name: "B.Pharm", fullName: "Bachelor of Pharmacy",
    duration: "4 Years", level: "UG", stream: "Medical",
    description: "B.Pharm in Delhi NCR prepares students for the pharmaceutical industry. DIPSAR (Delhi Institute of Pharmaceutical Sciences and Research) and Jamia Hamdard are India's top pharmacy colleges. Graduates join Sun Pharma, Cipla, Ranbaxy, Abbott, and Pfizer India.",
    eligibility: "Class 12 with PCB/PCM, min. 50% marks. CUET/IPU CET/D.Pharm for lateral entry.",
    entranceExams: ["CUET", "IPU CET", "GPAT", "NEET (some colleges)"],
    avgFees: { min: 50000, max: 450000 },
    avgSalary: 500000,
    topColleges: ["DIPSAR Delhi", "Jamia Hamdard Delhi", "Delhi Pharmaceutical Sciences University", "Amity University Noida", "Galgotias University"],
    careerOptions: ["Pharmacist", "Drug Inspector", "Medical Sales Rep", "R&D Scientist", "Quality Assurance Manager"],
    skills: ["Pharmacology", "Drug Formulation", "Quality Control", "GMP", "Clinical Trials", "Regulatory Affairs"],
    subjects: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry", "Pharmacognosy", "Quality Assurance", "Biopharmaceutics"]
  },
  {
    id: 24, slug: "bsc-nursing-delhi",
    name: "B.Sc Nursing", fullName: "Bachelor of Science in Nursing",
    duration: "4 Years", level: "UG", stream: "Medical",
    description: "B.Sc Nursing in Delhi NCR is offered at AIIMS Delhi, Jamia Hamdard, and multiple hospital-based nursing schools. High demand post-COVID with nurses in short supply globally. Delhi nurses are placed in Max Healthcare, Fortis, Apollo, and abroad.",
    eligibility: "Class 12 with PCB, min. 45% marks. NEET/entrance test required at some colleges.",
    entranceExams: ["NEET UG", "AIIMS Nursing Entrance", "IPU CET"],
    avgFees: { min: 30000, max: 500000 },
    avgSalary: 450000,
    topColleges: ["AIIMS Delhi Nursing College", "Jamia Hamdard Delhi", "Amity University Noida", "Sharda University Noida", "Era University Lucknow Noida"],
    careerOptions: ["Staff Nurse", "ICU Nurse", "Nurse Educator", "Community Health Nurse", "Nursing Officer (Govt)"],
    skills: ["Patient Care", "Clinical Assessment", "Medical Procedures", "Emergency Care", "Communication"],
    subjects: ["Anatomy & Physiology", "Medical Surgical Nursing", "Community Health Nursing", "Obstetric Nursing", "Pediatric Nursing", "Mental Health Nursing"]
  },
  {
    id: 25, slug: "bams-ayurvedic-medicine-delhi",
    name: "BAMS", fullName: "Bachelor of Ayurvedic Medicine and Surgery",
    duration: "5.5 Years", level: "UG", stream: "Medical",
    description: "BAMS in Delhi NCR offers training in Ayurvedic medicine with modern medical sciences. Approved by Central Council of Indian Medicine (CCIM). NEET-based admission. Delhi has growing demand for Ayurvedic practitioners with wellness industry boom.",
    eligibility: "Class 12 with PCB, min. 50% marks. NEET UG score required.",
    entranceExams: ["NEET UG"],
    avgFees: { min: 50000, max: 600000 },
    avgSalary: 500000,
    topColleges: ["Jamia Hamdard Delhi", "Ch. Brahm Prakash Ayurved Charak Sansthan Delhi", "Amity University Noida"],
    careerOptions: ["Ayurvedic Doctor", "Wellness Consultant", "Hospital Physician", "Researcher", "Entrepreneur"],
    skills: ["Ayurvedic Diagnosis", "Panchakarma", "Herbal Medicine", "Yoga Therapy", "Diet & Nutrition"],
    subjects: ["Kriya Sharir", "Dravyaguna Vigyan", "Shalya Tantra", "Kayachikitsa", "Panchakarma", "Rasashastra"]
  },

  // ── ARTS & SCIENCE UG ──────────────────────────────────────────────────────
  {
    id: 26, slug: "ba-hons-english-delhi",
    name: "BA (Hons)", fullName: "Bachelor of Arts (Honours) in English",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BA (Hons) English from Delhi University — Miranda House, Lady Shri Ram, Hindu College — is one of India's most prestigious humanities degrees. Strong foundation in literature, critical theory, creative writing, and communication. Alumni in media, civil services, academia, and MNCs.",
    eligibility: "Class 12 in any stream, min. 45% marks. CUET required for DU colleges.",
    entranceExams: ["CUET"],
    avgFees: { min: 8000, max: 50000 },
    avgSalary: 400000,
    topColleges: ["Miranda House DU", "Lady Shri Ram College DU", "Hindu College DU", "Ramjas College DU", "St. Stephens College Delhi"],
    careerOptions: ["Content Writer", "Journalist", "Teacher/Professor", "Civil Services Officer", "Editor", "Corporate Communications"],
    skills: ["Writing", "Critical Thinking", "Research", "Communication", "Literary Analysis", "Content Creation"],
    subjects: ["British Literature", "American Literature", "Indian Writing in English", "Literary Theory", "Linguistics", "Creative Writing"]
  },
  {
    id: 27, slug: "ba-hons-economics-delhi",
    name: "BA (Hons)", fullName: "Bachelor of Arts (Honours) in Economics",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BA (Hons) Economics from Delhi University is the gateway to careers in finance, consulting, policy, and research. SRCC, Hindu College, and Lady Shri Ram are top choices. Strong quantitative component prepares students for MBA/MA Economics/CA paths.",
    eligibility: "Class 12 with Mathematics preferred, min. 50% marks. CUET required.",
    entranceExams: ["CUET"],
    avgFees: { min: 8000, max: 50000 },
    avgSalary: 500000,
    topColleges: ["SRCC DU", "Hindu College DU", "Lady Shri Ram College DU", "Miranda House DU", "Hansraj College DU"],
    careerOptions: ["Economist", "Financial Analyst", "Policy Researcher", "Investment Banker", "Civil Services", "MBA Student"],
    skills: ["Econometrics", "Statistics", "Data Analysis", "Economic Modeling", "Research", "Excel"],
    subjects: ["Microeconomics", "Macroeconomics", "Mathematical Economics", "Econometrics", "Development Economics", "International Trade"]
  },
  {
    id: 28, slug: "ba-hons-political-science-delhi",
    name: "BA (Hons)", fullName: "Bachelor of Arts (Honours) in Political Science",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BA (Hons) Political Science from DU is popular for UPSC Civil Services preparation. Miranda House, Hindu College, and Ramjas offer top programmes. Strong analytical framework for understanding governance, international relations, and public policy.",
    eligibility: "Class 12 in any stream, min. 45% marks. CUET required.",
    entranceExams: ["CUET"],
    avgFees: { min: 8000, max: 50000 },
    avgSalary: 400000,
    topColleges: ["Miranda House DU", "Hindu College DU", "Lady Shri Ram College DU", "Ramjas College DU", "Kirori Mal College DU"],
    careerOptions: ["IAS/IPS Officer", "Political Analyst", "Diplomat", "Journalist", "NGO Worker", "Researcher"],
    skills: ["Policy Analysis", "Research", "Writing", "Public Speaking", "Critical Thinking"],
    subjects: ["Political Theory", "Indian Government & Politics", "International Relations", "Comparative Politics", "Public Administration"]
  },
  {
    id: 29, slug: "bsc-physics-delhi",
    name: "B.Sc (Hons)", fullName: "Bachelor of Science (Honours) in Physics",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "B.Sc (Hons) Physics from Delhi University's top colleges — Hindu College, Hansraj, Kirori Mal — is excellent preparation for M.Sc/PhD, DRDO, ISRO, or engineering careers. Strong placement in research institutions, IIT M.Sc programmes, and tech companies.",
    eligibility: "Class 12 with PCM, min. 50% marks. CUET required for DU.",
    entranceExams: ["CUET", "IIT JAM (for M.Sc)"],
    avgFees: { min: 10000, max: 60000 },
    avgSalary: 450000,
    topColleges: ["Hindu College DU", "Hansraj College DU", "Kirori Mal College DU", "Ramjas College DU", "Sri Venkateswara College DU"],
    careerOptions: ["Research Scientist", "DRDO Scientist", "Physics Teacher", "Data Analyst", "M.Sc/PhD Student"],
    skills: ["Mathematics", "Computational Physics", "Lab Skills", "MATLAB", "Research Methodology"],
    subjects: ["Classical Mechanics", "Quantum Mechanics", "Thermodynamics", "Electromagnetism", "Mathematical Physics", "Optics"]
  },
  {
    id: 30, slug: "bsc-mathematics-delhi",
    name: "B.Sc (Hons)", fullName: "Bachelor of Science (Honours) in Mathematics",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "B.Sc (Hons) Mathematics from DU is ideal for students targeting IIT JAM, CAT, or data science careers. Hindu College, Hansraj, and Miranda House offer top maths programmes. Strong base for actuarial science, quantitative finance, and research.",
    eligibility: "Class 12 with Mathematics, min. 50% marks. CUET required.",
    entranceExams: ["CUET", "IIT JAM"],
    avgFees: { min: 8000, max: 50000 },
    avgSalary: 500000,
    topColleges: ["Miranda House DU", "Hindu College DU", "Hansraj College DU", "St. Stephens College Delhi", "Gargi College DU"],
    careerOptions: ["Data Scientist", "Actuary", "Quantitative Analyst", "Professor", "CAT/GMAT Aspirant", "Statistician"],
    skills: ["Pure Mathematics", "Statistics", "Programming", "Problem Solving", "Logical Reasoning"],
    subjects: ["Real Analysis", "Abstract Algebra", "Linear Algebra", "Differential Equations", "Probability & Statistics", "Numerical Methods"]
  },

  // ── COMPUTER APPLICATIONS ──────────────────────────────────────────────────
  {
    id: 31, slug: "bca-bachelor-computer-applications-delhi",
    name: "BCA", fullName: "Bachelor of Computer Applications",
    duration: "3 Years", level: "UG", stream: "Engineering",
    description: "BCA in Delhi NCR is a popular 3-year IT programme. Amity Noida, Galgotias, GL Bajaj, and DU colleges offer strong BCA. Close to Noida-Greater Noida IT corridor gives excellent internship access. Many BCA graduates join TCS, Infosys, Wipro at ₹3.5–6 LPA.",
    eligibility: "Class 12 pass with Mathematics, min. 45% marks.",
    entranceExams: ["CUET", "IPU CET", "Class 12 Merit"],
    avgFees: { min: 40000, max: 250000 },
    avgSalary: 450000,
    topColleges: ["Amity University Noida", "Galgotias University", "GL Bajaj Noida", "Gargi College DU", "VIPS Delhi"],
    careerOptions: ["Software Developer", "Web Developer", "System Analyst", "Database Administrator", "MCA Student"],
    skills: ["Java", "Python", "PHP", "Web Development", "Database Management", "Networking"],
    subjects: ["Programming in C", "Java", "Web Technologies", "DBMS", "Software Engineering", "Computer Networks", "Operating Systems"]
  },
  {
    id: 32, slug: "mca-master-computer-applications-delhi",
    name: "MCA", fullName: "Master of Computer Applications",
    duration: "2 Years", level: "PG", stream: "Engineering",
    description: "MCA in Delhi NCR is a 2-year PG programme in software development and IT management. NIMCET for NIT Warangal/Allahabad; IPU CET for GGSIPU-affiliated colleges. Strong placement at TCS, Infosys, Wipro, HCL with packages ₹4–12 LPA. Good alternative to M.Tech.",
    eligibility: "BCA/B.Sc CS/IT/Mathematics with min. 50% marks. NIMCET/IPU CET required.",
    entranceExams: ["NIMCET", "IPU CET MCA", "CUET PG"],
    avgFees: { min: 60000, max: 300000 },
    avgSalary: 600000,
    topColleges: ["GGSIPU Delhi", "Amity University Noida", "Galgotias University", "Sharda University Noida", "Jamia Hamdard Delhi"],
    careerOptions: ["Software Developer", "Full Stack Developer", "System Analyst", "IT Project Manager", "Tech Lead"],
    skills: ["Java", "Python", "Full Stack Development", "Database", "Cloud", "System Design"],
    subjects: ["Advanced Java", "Software Engineering", "Cloud Computing", "DBMS", "System Analysis", "Dissertation"]
  },

  // ── LAW ────────────────────────────────────────────────────────────────────
  {
    id: 33, slug: "llb-5yr-integrated-delhi",
    name: "BA LLB", fullName: "Bachelor of Arts & Bachelor of Laws (5-Year Integrated)",
    duration: "5 Years", level: "UG", stream: "Law",
    description: "BA LLB 5-year integrated programme is the most popular law programme in Delhi. NLU Delhi (via CLAT) is India's #1 law school. Faculty of Law DU (via AILET/CLAT), Amity Law School, and VIPS Delhi are strong alternatives. Excellent access to Delhi High Court and Supreme Court for internships.",
    eligibility: "Class 12 pass in any stream, min. 45% marks. CLAT/AILET score required for NLU.",
    entranceExams: ["CLAT", "AILET", "IPU CET Law", "CUET"],
    avgFees: { min: 30000, max: 500000 },
    avgSalary: 700000,
    topColleges: ["NLU Delhi (NLUD)", "Faculty of Law Delhi University", "Amity Law School Delhi", "VIPS Delhi", "Jamia Millia Islamia Law"],
    careerOptions: ["Corporate Lawyer", "Advocate", "Legal Advisor", "Judge", "LLM/Judicial Services"],
    skills: ["Legal Research", "Contract Drafting", "Argumentation", "Constitutional Law", "Legal Writing"],
    subjects: ["Constitutional Law", "Contract Law", "Criminal Law", "Company Law", "Labour Law", "Evidence Act", "International Law"]
  },
  {
    id: 34, slug: "llb-3yr-delhi",
    name: "LLB", fullName: "Bachelor of Laws (3-Year Programme)",
    duration: "3 Years", level: "PG", stream: "Law",
    description: "LLB 3-year programme is for graduates seeking legal careers. Faculty of Law DU, Jamia Millia Islamia, and Amity Law School Delhi are top options. Proximity to Supreme Court, Delhi High Court, and 1000+ law firms makes Delhi the best city for legal education.",
    eligibility: "Bachelor's degree with min. 45% marks. CLAT PG/IPU CET/DU LLB entrance required.",
    entranceExams: ["CLAT PG", "DU LLB Entrance", "IPU CET Law"],
    avgFees: { min: 25000, max: 400000 },
    avgSalary: 600000,
    topColleges: ["Faculty of Law Delhi University", "Jamia Millia Islamia Law", "Amity Law School Delhi", "VIPS Delhi", "GGSIPU Law"],
    careerOptions: ["Advocate", "Corporate Lawyer", "Legal Counsel", "Government Lawyer", "Solicitor"],
    skills: ["Legal Research", "Court Procedures", "Drafting", "Constitutional Law", "Litigation"],
    subjects: ["Jurisprudence", "Administrative Law", "Commercial Law", "Property Law", "Civil Procedure Code", "Criminal Procedure Code"]
  },

  // ── ARCHITECTURE ───────────────────────────────────────────────────────────
  {
    id: 35, slug: "barch-bachelor-architecture-delhi",
    name: "B.Arch", fullName: "Bachelor of Architecture",
    duration: "5 Years", level: "UG", stream: "Architecture",
    description: "B.Arch from SPA Delhi (School of Planning & Architecture) is India's best architecture degree. NIRF #1 Architecture school. DTU, Amity, and GGSIPU-affiliated colleges also offer strong programmes. NATA score mandatory. Career in building design, urban planning, and real estate.",
    eligibility: "Class 12 with Mathematics, min. 50% marks. NATA/JEE Main Paper 2 required.",
    entranceExams: ["NATA", "JEE Main Paper 2"],
    avgFees: { min: 100000, max: 400000 },
    avgSalary: 600000,
    topColleges: ["SPA Delhi (School of Planning & Architecture)", "DTU Delhi", "Amity University Delhi", "GGSIPU Affiliated Colleges", "Chandigarh University Delhi Campus"],
    careerOptions: ["Architect", "Urban Planner", "Interior Designer", "Construction Manager", "Project Consultant", "Landscape Architect"],
    skills: ["AutoCAD", "Revit", "SketchUp", "3D Modeling", "Design Thinking", "Urban Planning", "Structural Awareness"],
    subjects: ["Architectural Design", "Building Construction", "Structural Systems", "Environmental Studies", "History of Architecture", "Urban Design", "Thesis"]
  },

  // ── HOTEL MANAGEMENT ───────────────────────────────────────────────────────
  {
    id: 36, slug: "bhmct-hotel-management-delhi",
    name: "BHMCT", fullName: "Bachelor of Hotel Management & Catering Technology",
    duration: "4 Years", level: "UG", stream: "Management",
    description: "BHMCT in Delhi NCR prepares students for careers in hospitality, hotel management, and F&B. IHM Pusa (Institute of Hotel Management, NCHMCT) is India's top hotel management college with Delhi. Graduates placed at Taj, ITC, Marriott, Hyatt, Oberoi globally.",
    eligibility: "Class 12 pass in any stream, min. 45% marks. NCHM JEE / IPU CET required.",
    entranceExams: ["NCHMCT JEE", "IPU CET", "Class 12 Merit"],
    avgFees: { min: 80000, max: 350000 },
    avgSalary: 400000,
    topColleges: ["IHM Pusa Delhi", "Amity University Noida", "IILM University Delhi", "Galgotias University", "Sharda University Noida"],
    careerOptions: ["Hotel Manager", "Food & Beverage Manager", "Chef", "Event Manager", "Travel & Tourism Manager", "Airline Hospitality"],
    skills: ["Food Production", "Hotel Operations", "Customer Service", "F&B Service", "Housekeeping", "Front Office Management"],
    subjects: ["Food Production", "Food & Beverage Service", "Front Office Operations", "Accommodation Management", "Tourism Management", "Food Science"]
  },

  // ── MASS COMMUNICATION / JOURNALISM ───────────────────────────────────────
  {
    id: 37, slug: "bjmc-mass-communication-delhi",
    name: "BJMC", fullName: "Bachelor of Journalism & Mass Communication",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BJMC in Delhi is top-tier thanks to being the media capital of India. Jamia Millia Islamia (AJK MCRC) is India's best media school. DU's journalism programme, IP University, and Amity Media School also offer strong programmes. Graduates join NDTV, Times of India, Star TV, BBC.",
    eligibility: "Class 12 in any stream, min. 45% marks. Entrance test at most institutes.",
    entranceExams: ["CUET", "IPU CET", "Jamia Entrance Test", "College Entrance"],
    avgFees: { min: 30000, max: 300000 },
    avgSalary: 400000,
    topColleges: ["AJK MCRC Jamia Millia Islamia", "IP University Delhi", "Amity University Noida", "IIMC Delhi", "Lady Shri Ram College DU"],
    careerOptions: ["Journalist", "TV Reporter", "PR Manager", "Content Strategist", "Social Media Manager", "Documentary Filmmaker"],
    skills: ["Reporting", "Writing", "Video Production", "Photography", "Social Media", "Broadcast Skills"],
    subjects: ["News Reporting", "Media Laws & Ethics", "Feature Writing", "TV Production", "Digital Media", "Public Relations", "Research Methods"]
  },

  // ── DESIGN ─────────────────────────────────────────────────────────────────
  {
    id: 38, slug: "bdes-bachelor-design-delhi",
    name: "B.Des", fullName: "Bachelor of Design",
    duration: "4 Years", level: "UG", stream: "Architecture",
    description: "B.Des in Delhi NCR covers product design, UI/UX, fashion, and communication design. Pearl Academy Delhi, Amity School of Fashion Technology, and IIIT Delhi's HCI programme are top options. With India's design industry growing 25% YoY, B.Des graduates are highly sought after.",
    eligibility: "Class 12 in any stream, min. 45% marks. NID DAT/UCEED/NIFT Entrance required for top colleges.",
    entranceExams: ["NID DAT", "UCEED", "NIFT Entrance", "Pearl Academy Entrance"],
    avgFees: { min: 150000, max: 700000 },
    avgSalary: 600000,
    topColleges: ["NID Delhi", "NIFT Delhi", "Pearl Academy Delhi", "Amity School of Design Delhi", "IIIT Delhi"],
    careerOptions: ["UI/UX Designer", "Product Designer", "Graphic Designer", "Fashion Designer", "Design Researcher", "Creative Director"],
    skills: ["Figma", "Adobe Suite", "Design Thinking", "Prototyping", "User Research", "3D Modeling"],
    subjects: ["Design Fundamentals", "Typography", "Color Theory", "UI/UX Design", "Product Design", "Design Research", "Portfolio"]
  },

  // ── EDUCATION ──────────────────────────────────────────────────────────────
  {
    id: 39, slug: "bed-bachelor-education-delhi",
    name: "B.Ed", fullName: "Bachelor of Education",
    duration: "2 Years", level: "PG", stream: "Arts & Science",
    description: "B.Ed in Delhi is mandatory for teaching in Central/Navodaya/KVS/govt schools. IP University, CIE Delhi University, and multiple Delhi colleges offer 2-year NCTE-approved B.Ed. CTET/DSSSB qualification follows B.Ed for government teaching jobs.",
    eligibility: "Bachelor's degree with min. 50% marks in relevant subject. Delhi University B.Ed Entrance Test.",
    entranceExams: ["DU B.Ed Entrance", "IPU CET B.Ed", "CUET PG"],
    avgFees: { min: 30000, max: 150000 },
    avgSalary: 350000,
    topColleges: ["CIE Delhi University", "IP University Delhi", "Jamia Millia Islamia", "Amity University Noida", "Sharda University Noida"],
    careerOptions: ["School Teacher", "KVS Teacher", "NVS Teacher", "Private School Teacher", "Educational Counsellor", "School Administrator"],
    skills: ["Lesson Planning", "Classroom Management", "Pedagogy", "Assessment", "Child Psychology", "ICT in Education"],
    subjects: ["Education Psychology", "Pedagogy", "School Internship", "Contemporary Education", "Value Education", "ICT in Teaching"]
  },

  // ── SCIENCE PG ─────────────────────────────────────────────────────────────
  {
    id: 40, slug: "msc-computer-science-delhi",
    name: "M.Sc", fullName: "Master of Science in Computer Science",
    duration: "2 Years", level: "PG", stream: "Engineering",
    description: "M.Sc CS in Delhi is offered at DU's South Campus, Miranda House, Hansraj, and IGDTUW. IIT JAM exam for IITs; CUET PG for DU. Good route to PhD or software careers. Strong theoretical foundation distinguishes M.Sc from M.Tech.",
    eligibility: "B.Sc CS/IT/Mathematics with min. 55% marks. IIT JAM/CUET PG required.",
    entranceExams: ["IIT JAM", "CUET PG", "JNU Entrance"],
    avgFees: { min: 20000, max: 200000 },
    avgSalary: 700000,
    topColleges: ["University of Delhi South Campus", "IIT Delhi", "JNU Delhi", "Miranda House DU", "Hansraj College DU"],
    careerOptions: ["Software Developer", "Data Scientist", "Research Scientist", "Professor/Lecturer", "PhD Student"],
    skills: ["Advanced Programming", "Machine Learning", "Research Methods", "System Design", "Algorithms"],
    subjects: ["Advanced Algorithms", "Machine Learning", "Compiler Design", "Distributed Systems", "Research Project"]
  },
  {
    id: 41, slug: "msc-data-science-delhi",
    name: "M.Sc", fullName: "Master of Science in Data Science",
    duration: "2 Years", level: "PG", stream: "Engineering",
    description: "M.Sc Data Science in Delhi NCR is offered at IIIT Delhi, Amity Noida, and Bennett University. Highly specialized programme combining statistics, ML, and big data engineering. Graduates placed at Amazon, Flipkart, Paytm, and analytics firms at ₹10–25 LPA.",
    eligibility: "B.Tech/B.Sc with Mathematics/Statistics, min. 55% marks.",
    entranceExams: ["IIT JAM", "CUET PG", "University Entrance Test"],
    avgFees: { min: 100000, max: 400000 },
    avgSalary: 1200000,
    topColleges: ["IIIT Delhi", "Bennett University Noida", "Amity University Noida", "Sharda University Noida"],
    careerOptions: ["Data Scientist", "ML Engineer", "Data Engineer", "Analytics Manager", "Research Scientist"],
    skills: ["Python", "R", "TensorFlow", "Spark", "SQL", "Statistical Modeling", "Visualization"],
    subjects: ["Statistical Learning", "Big Data Analytics", "Deep Learning", "Data Engineering", "Business Analytics", "Thesis"]
  },

  // ── PHARMACY PG ───────────────────────────────────────────────────────────
  {
    id: 42, slug: "mpharm-master-pharmacy-delhi",
    name: "M.Pharm", fullName: "Master of Pharmacy",
    duration: "2 Years", level: "PG", stream: "Medical",
    description: "M.Pharm in Delhi NCR is offered at Jamia Hamdard, DIPSAR, and Amity Noida with specializations in Pharmaceutics, Pharmacology, and Medicinal Chemistry. GPAT exam-based admission. Strong placement in Sun Pharma, Cipla, Dr. Reddy's, and regulatory bodies.",
    eligibility: "B.Pharm with min. 55% marks. GPAT score required for PG in Pharmacy.",
    entranceExams: ["GPAT", "IPU CET M.Pharm"],
    avgFees: { min: 80000, max: 350000 },
    avgSalary: 700000,
    topColleges: ["Jamia Hamdard Delhi", "DIPSAR Delhi", "Amity University Noida", "Galgotias University", "Sharda University"],
    careerOptions: ["Pharmaceutical Scientist", "Regulatory Affairs Manager", "Clinical Research Associate", "Quality Assurance Manager", "Medical Affairs Manager"],
    skills: ["Drug Development", "Clinical Trials", "Regulatory Affairs", "Quality Systems", "Research Skills"],
    subjects: ["Advanced Pharmaceutics", "Pharmacology", "Pharmaceutical Analysis", "Drug Regulatory Affairs", "Research Project"]
  },

  // ── DIPLOMA PROGRAMMES ─────────────────────────────────────────────────────
  {
    id: 43, slug: "polytechnic-diploma-engineering-delhi",
    name: "Diploma (Polytechnic)", fullName: "Diploma in Engineering (Polytechnic)",
    duration: "3 Years", level: "Diploma", stream: "Engineering",
    description: "Polytechnic Diploma in Delhi is offered at 50+ government and private polytechnics. Delhi government polytechnics have near-zero fees (₹10K–30K/yr). After diploma, students can take lateral entry into 2nd year B.Tech. Excellent for Class 10 passouts wanting quick employment.",
    eligibility: "Class 10 pass with min. 35% marks. Delhi CET/DET required for govt polytechnics.",
    entranceExams: ["Delhi CET (Polytechnic)", "IPU CET", "Class 10 Merit"],
    avgFees: { min: 10000, max: 150000 },
    avgSalary: 300000,
    topColleges: ["Delhi Polytechnic Pusa", "Delhi Polytechnic Wazirpur", "Delhi Polytechnic Shakarpur", "Amity University Noida", "Galgotias University"],
    careerOptions: ["Junior Engineer", "Technician", "Supervisor", "B.Tech Lateral Entry", "ITI Instructor"],
    skills: ["Technical Drawing", "Workshop Practice", "Basic Programming", "Electrical/Mechanical Skills"],
    subjects: ["Engineering Drawing", "Workshop Technology", "Applied Mathematics", "Applied Science", "Core Engineering Subject"]
  },
  {
    id: 44, slug: "dpharm-diploma-pharmacy-delhi",
    name: "D.Pharm", fullName: "Diploma in Pharmacy",
    duration: "2 Years", level: "Diploma", stream: "Medical",
    description: "D.Pharm in Delhi is a 2-year pharmacy diploma that qualifies graduates to work as pharmacists in retail pharmacy, hospitals, and drug stores. DPSR, DIPSAR, and multiple Delhi pharmacy colleges offer D.Pharm. Low-cost entry into the pharmaceutical sector.",
    eligibility: "Class 12 with PCB or PCM, min. 40% marks.",
    entranceExams: ["Class 12 Merit", "College Entrance Test"],
    avgFees: { min: 30000, max: 150000 },
    avgSalary: 250000,
    topColleges: ["DIPSAR Delhi", "Jamia Hamdard Delhi", "Amity University Noida", "Galgotias University"],
    careerOptions: ["Pharmacist", "Medical Sales Rep", "Drug Store Manager", "Hospital Pharmacist"],
    skills: ["Drug Dispensing", "Pharmacology Basics", "Drug Storage", "Patient Counseling"],
    subjects: ["Pharmaceutics", "Pharmacology", "Biochemistry", "Pharmaceutical Chemistry", "Hospital Pharmacy"]
  },

  // ── PhD ────────────────────────────────────────────────────────────────────
  {
    id: 45, slug: "phd-engineering-delhi",
    name: "Ph.D", fullName: "Doctor of Philosophy in Engineering",
    duration: "3–5 Years", level: "PhD", stream: "Engineering",
    description: "Ph.D Engineering in Delhi NCR is offered at IIT Delhi (NIRF #2), DTU, NSUT, IIIT Delhi, JNU, and Jamia Millia. UGC-NET/GATE/direct entrance-based admission. ₹31,000/month JRF fellowship available. Strong R&D collaboration with DRDO, ISRO, CSIR labs nearby.",
    eligibility: "M.Tech/M.Sc/M.E with min. 55% marks. GATE/UGC-NET/Institute Entrance required.",
    entranceExams: ["GATE", "UGC-NET", "Institute PhD Entrance"],
    avgFees: { min: 15000, max: 200000 },
    avgSalary: 1500000,
    topColleges: ["IIT Delhi", "DTU Delhi", "NSUT Delhi", "IIIT Delhi", "JNU Delhi", "Jamia Millia Islamia"],
    careerOptions: ["Research Scientist", "Professor", "Senior R&D Engineer", "Postdoc Researcher", "Think Tank Expert"],
    skills: ["Research Methodology", "Technical Writing", "Data Analysis", "Specialization Domain", "Supervision"],
    subjects: ["Research Methodology", "Specialization Courses", "Dissertation/Thesis", "Seminar", "Publication"]
  },
  {
    id: 46, slug: "phd-management-delhi",
    name: "Ph.D", fullName: "Doctor of Philosophy in Management / FPM",
    duration: "4–5 Years", level: "PhD", stream: "Management",
    description: "Ph.D / FPM (Fellow Programme in Management) at MDI Gurgaon, FMS Delhi, IMI Delhi, and IIM Rohtak (near NCR) is the path to becoming a management professor or top researcher. FPM is equivalent to Ph.D and is fully funded with stipend. Placements at IIMs, IITs, and global B-schools.",
    eligibility: "MBA/PGDM/M.Com/M.Sc with min. 55% marks. CAT/GMAT/UGC-NET required.",
    entranceExams: ["CAT", "GMAT", "UGC-NET", "Institute Entrance"],
    avgFees: { min: 0, max: 300000 },
    avgSalary: 1800000,
    topColleges: ["FMS Delhi", "MDI Gurgaon", "IMI Delhi", "IIM Rohtak", "IIM Lucknow (NCR Campus)"],
    careerOptions: ["Professor at IIM/IIT", "Senior Research Consultant", "Think Tank Expert", "Corporate Researcher"],
    skills: ["Quantitative Research", "Qualitative Methods", "Academic Writing", "Statistical Analysis", "Teaching"],
    subjects: ["Research Methodology", "Organizational Theory", "Quantitative Methods", "Specialization Courses", "Thesis"]
  },

  // ── SOCIAL WORK / PSYCHOLOGY ───────────────────────────────────────────────
  {
    id: 47, slug: "bsw-bachelor-social-work-delhi",
    name: "BSW", fullName: "Bachelor of Social Work",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BSW in Delhi NCR is offered at DU, Jamia Millia Islamia, and IP University. Fieldwork placements with NGOs, government welfare departments, and international agencies give hands-on experience. Growing career in CSR, NGOs, and social enterprise.",
    eligibility: "Class 12 pass in any stream, min. 45% marks. CUET/College Entrance required.",
    entranceExams: ["CUET", "Jamia Entrance", "IPU CET"],
    avgFees: { min: 15000, max: 100000 },
    avgSalary: 300000,
    topColleges: ["Department of Social Work DU", "Jamia Millia Islamia Delhi", "Amity University Noida", "IP University Delhi"],
    careerOptions: ["Social Worker", "NGO Programme Officer", "CSR Manager", "Community Development Officer", "Child Welfare Officer"],
    skills: ["Counselling", "Community Mobilization", "Project Management", "Research", "Advocacy"],
    subjects: ["Social Work Methods", "Community Organization", "Social Welfare Administration", "Field Work", "Research Methods"]
  },
  {
    id: 48, slug: "ba-hons-psychology-delhi",
    name: "BA (Hons)", fullName: "Bachelor of Arts (Honours) in Psychology",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "BA (Hons) Psychology from Delhi University — Miranda House, Lady Shri Ram, Jesus & Mary College — leads to clinical psychology, counselling, and organizational HR careers. Strong gateway for M.Sc Psychology, MBA HR, and mental health professions.",
    eligibility: "Class 12 in any stream, min. 45% marks. CUET required for DU.",
    entranceExams: ["CUET"],
    avgFees: { min: 8000, max: 50000 },
    avgSalary: 400000,
    topColleges: ["Miranda House DU", "Lady Shri Ram College DU", "Jesus & Mary College DU", "Hindu College DU", "Gargi College DU"],
    careerOptions: ["Clinical Psychologist", "Counsellor", "HR Executive", "Researcher", "School Counsellor", "Therapist"],
    skills: ["Counselling", "Psychological Assessment", "Research Methods", "Clinical Skills", "Communication"],
    subjects: ["Abnormal Psychology", "Social Psychology", "Developmental Psychology", "Biological Bases of Behavior", "Research Methods", "Statistics"]
  },

  // ── FINE ARTS ──────────────────────────────────────────────────────────────
  {
    id: 49, slug: "bfa-bachelor-fine-arts-delhi",
    name: "BFA", fullName: "Bachelor of Fine Arts",
    duration: "4 Years", level: "UG", stream: "Arts & Science",
    description: "BFA in Delhi is offered at College of Art Delhi (Govt, free), Jamia Millia Islamia, and Delhi College of Art. India's design and animation industry growing rapidly — BFA graduates join Pixar, DreamWorks, Zee Entertainment, and top advertising agencies.",
    eligibility: "Class 12 pass in any stream, min. 45% marks. Portfolio/Studio Test required at most institutes.",
    entranceExams: ["NID DAT", "College Portfolio Test", "CUET", "Jamia Entrance"],
    avgFees: { min: 10000, max: 300000 },
    avgSalary: 400000,
    topColleges: ["College of Art Delhi", "Jamia Millia Islamia Art Faculty", "NIFT Delhi", "Pearl Academy Delhi", "Amity School of Fine Arts"],
    careerOptions: ["Fine Artist", "Illustrator", "Animator", "Art Director", "Graphic Designer", "Art Curator"],
    skills: ["Drawing", "Painting", "Digital Art", "Sculpture", "Art History", "Color Theory", "3D Animation"],
    subjects: ["Drawing & Painting", "Sculpture", "Printmaking", "Art History", "Digital Media", "Portfolio Development"]
  },

  // ── PHYSICAL EDUCATION ─────────────────────────────────────────────────────
  {
    id: 50, slug: "bped-bachelor-physical-education-delhi",
    name: "B.P.Ed", fullName: "Bachelor of Physical Education",
    duration: "3 Years", level: "UG", stream: "Arts & Science",
    description: "B.P.Ed in Delhi is offered at DU's Faculty of Education, IGDTUW, and IP University. Excellent option for sports enthusiasts and national-level athletes. Teaching in KVS, NVS, Delhi govt schools, and sports academies after clearing CTET/DSSSB.",
    eligibility: "Class 12 pass with Physical Education/Sports background, min. 45% marks. Entrance test required.",
    entranceExams: ["CUET", "IPU CET", "DU B.P.Ed Entrance"],
    avgFees: { min: 20000, max: 100000 },
    avgSalary: 350000,
    topColleges: ["Faculty of Education DU", "IP University Delhi", "Jamia Millia Islamia Delhi", "Amity University Noida"],
    careerOptions: ["Physical Education Teacher", "Sports Coach", "Fitness Trainer", "Sports Administrator", "Athletic Trainer"],
    skills: ["Sports Coaching", "Exercise Science", "Anatomy", "Sports Psychology", "Physiotherapy Basics"],
    subjects: ["Anatomy & Physiology", "Theory of Physical Education", "Sports Psychology", "Health Education", "Sports Training", "Yoga"]
  }
]

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find(c => c.slug === slug)

export const getCoursesByStream = (stream: string): Course[] =>
  courses.filter(c => c.stream.toLowerCase() === stream.toLowerCase())

export const getCoursesByLevel = (level: string): Course[] =>
  courses.filter(c => c.level === level)

export const getAllCourseStreams = (): string[] =>
  [...new Set(courses.map(c => c.stream))]
