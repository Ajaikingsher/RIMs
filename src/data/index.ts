import { NavItem, TeamMember, FAQItem, StateDeployment } from "@/types"

export const navigationItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Features", href: "/features" },
  { name: "Leadership", href: "/leadership" },
  { name: "Clients", href: "/clients" },
  { name: "Gallery", href: "/gallery" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
]

export const leadershipTeam: TeamMember[] = [
  {
    name: "Shri. C. THANGARAJ",
    role: "Founder & Chairman",
    initials: "CT",
    bio: "Visionary entrepreneur who founded RIMs in 1996, pioneering cooperative digitization across South India.",
  },
  {
    name: "Shri. K. VELLINGIRI",
    role: "Mentor",
    subtitle: "Former Manager (Milk Production), AAVIN – Coimbatore",
    initials: "KV",
    bio: "Deep domain expertise from a decorated career at AAVIN Coimbatore guides Gramya Paledu's feature evolution.",
  },
  {
    name: "Dr. BABU RAJAGOPAL",
    role: "Managing Director",
    initials: "BR",
    bio: "Drives strategy, product development, and multi-state expansion at RIMs Software Company.",
  },
]

export const coreTeamMembers: TeamMember[] = [
  {
    name: "Mr. R. VENKATESAN",
    role: "System Manager",
    initials: "RV",
    bio: "Manages all technical operations, system deployments, and client infrastructure.",
  },
  {
    name: "Mr. R. VIGNESH",
    role: "Developer",
    initials: "RV",
    bio: "Leads Gramya Paledu feature development and new module integrations.",
  },
]

export const customerCareTeam: TeamMember[] = [
  { name: "Ms. M. GEETHA", role: "Customer Care", initials: "MG" },
  { name: "Ms. N. KALEESWARI", role: "Customer Care", initials: "NK" },
  { name: "Ms. K. KAVIYA", role: "Customer Care", initials: "KK" },
  { name: "Ms. S. VINOTHA", role: "Customer Care", initials: "SV" },
]

export const stateDeployments: StateDeployment[] = [
  {
    state: "Tamil Nadu",
    deployments: 3200,
    districts: 38,
    flag: "🏛️",
    desc: "Coimbatore, Erode, Salem, Madurai, Tirunelveli, Chennai, and 32 more districts.",
  },
  {
    state: "Kerala",
    deployments: 400,
    districts: 14,
    flag: "🌴",
    desc: "Thrissur, Palakkad, Malappuram, and other major cooperative districts.",
  },
  {
    state: "Karnataka",
    deployments: 250,
    districts: 10,
    flag: "🏰",
    desc: "Mysuru, Bengaluru Rural, Tumkur, Hassan, and expanding districts.",
  },
  {
    state: "Andhra Pradesh",
    deployments: 150,
    districts: 8,
    flag: "🌾",
    desc: "Vijayawada, Guntur, Krishna, Nellore, and growing cooperatives.",
  },
]

export const faqData: FAQItem[] = [
  {
    question: "What is Gramya Paledu and which cooperatives can use it?",
    answer: "Gramya Paledu is a comprehensive ERP platform designed specifically for dairy cooperative societies, Aavin parlours, BMC units, consumer cooperatives, and other cooperative types. It handles everything from daily milk collection entry to annual audit report generation.",
  },
  {
    question: "Does Gramya Paledu support Tamil language?",
    answer: "Yes — Gramya Paledu has complete Tamil language support. The entire user interface, all data entry screens, bills, and statutory registers can be operated in Tamil. The language switch works at login level.",
  },
  {
    question: "How long does installation and setup take?",
    answer: "A standard installation is typically completed within 3–5 working days. This includes software setup, data migration, staff training, and a go-live walkthrough with our support team.",
  },
  {
    question: "What government registers does the software generate automatically?",
    answer: "Gramya Paledu generates 18+ statutory registers including: Milk Register, Payment Register, Cash Book, Ledger, Stock Register, Member Loan Register, Share Capital Register, Trial Balance, P&L Account, and Balance Sheet — all in government-mandated formats.",
  },
  {
    question: "Is banking integration available and with which banks?",
    answer: "Yes. Gramya Paledu integrates with major nationalized banks including SBI, Canara Bank, and Indian Bank. Integration supports direct member salary credit, loan disbursement, and bank statement import.",
  },
  {
    question: "How is remote support provided?",
    answer: "Our support team provides remote assistance via AnyDesk and TeamViewer. Our team can connect to your system remotely within minutes.",
  },
]

export const companyTimeline = [
  { year: "1996", title: "Founded", description: "RIMs Software Company established in Coimbatore by Shri. C. Thangaraj." },
  { year: "2000", title: "First 100 Deployments", description: "Gramya Paledu reached 100+ cooperative societies across Coimbatore and Erode districts." },
  { year: "2005", title: "Tamil Language Integration", description: "Full Tamil language support added — bilingual UI, Tamil statutory registers, and Tamil print-ready reports." },
  { year: "2010", title: "Banking Integration", description: "Integrated with nationalized banks for direct member salary credits and cooperative banking transactions." },
  { year: "2015", title: "Multi-State Expansion", description: "Extended operations to Kerala, Karnataka, and Andhra Pradesh. Over 2000 societies running on Gramya Paledu." },
  { year: "2018", title: "Audit Automation Launch", description: "Launched automated audit pack generation — one-click compliance reports for cooperative auditors." },
  { year: "2022", title: "4000+ Deployments", description: "Milestone achieved: 4000+ active cooperative deployments across four states." },
  { year: "2024", title: "Next-Gen Platform", description: "Launched modernized platform with cloud backup, remote support infrastructure, and enhanced analytics dashboards." },
]
