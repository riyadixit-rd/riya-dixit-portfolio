export const profile = {
  name: 'Riya Dixit',
  role: 'Electronics & Communication Engineering Student',
  tagline:
    'Building software, AI-powered applications, and engineering projects that bridge software and electronics.',
  email: 'dixitriyaspcc@gmail.com',
  photo: '/assets/images/Riya_Proffesionals.jpeg',
  resume: '/RESUME-RIYA_DIXIT.pdf',
};

export const typingRoles = [
  'Software Developer',
  'AI & ML Enthusiast',
  'Open Source Contributor',
];

export const socials = {
  github: 'https://github.com/riyadixit-rd',
  linkedin: 'https://www.linkedin.com/in/riya-dixit-97415728a/',
  leetcode: 'https://leetcode.com/u/dixitriya/',
  codeforces: 'https://codeforces.com/profile/dixitriya',
};

export const about =
  "I'm an Electronics & Communication Engineering student at VIT Bhopal who enjoys building software, AI applications, and engineering systems. My work spans full-stack development, embedded systems, drone technology, and open-source contributions while actively strengthening problem-solving through DSA.";

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Programming', items: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MATLAB'] },
  { title: 'Frameworks', items: ['React.js', 'Node.js', 'Tailwind CSS'] },
  { title: 'Libraries', items: ['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['GitHub', 'VS Code', 'LTspice', 'Jupyter Notebook'] },
];

export interface Experience {
  org: string;
  role: string;
  period: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    org: 'National Informatics Centre (NIC)',
    role: 'Summer Intern',
    period: 'May 2026 – Jun 2026',
    points: [
      'Built an expense fraud detection platform.',
      'Processed 10,000+ expense records.',
      'Reduced manual auditing effort through intelligent anomaly detection.',
      'Built a responsive admin dashboard.',
    ],
  },
  {
    org: 'IIT Jammu',
    role: 'IoT & Drone Systems Trainee',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Built an IoT monitoring system using Arduino and ThingSpeak.',
      'Designed drone components in Onshape.',
      'Worked with sensor calibration and drone systems.',
    ],
  },
];

export interface Project {
  title: string;
  summary: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    title: 'PayShield',
    summary: 'Real-time transaction fraud detection engine using machine learning.',
    tech: ['Python', 'Flask', 'MySQL', 'Machine Learning'],
    github: 'https://github.com/riyadixit-rd/Payshield',
  },
  {
    title: 'ExpenseGuard',
    summary: 'Expense anomaly detection platform built during NIC internship.',
    tech: ['Python', 'Dashboard', 'Fraud Detection'],
    github: 'https://github.com/riyadixit-rd/expenseguard',
  },
  {
    title: 'ABHRABHEDI',
    summary:
      'Autonomous drone system for intelligent navigation and emergency delivery simulation.',
    tech: ['Python', 'IoT', 'Embedded Systems'],
    github: 'https://github.com/riyadixit-rd/ABHRABHEDI-The-Cloud-Piercer',
  },
  {
    title: 'Drone Tracking Using SDR Platform',
    summary:
      'RF-based drone tracking using ADALM-PLUTO SDR, DragonOS, and ESP32 platforms.',
    tech: ['SDR', 'ESP32', 'Python', 'RF Processing'],
    status: 'Ongoing',
  },
  {
    title: 'SafeZone',
    summary:
      'Safety-focused technology project addressing real-world safety challenges.',
    tech: [],
    status: 'Ongoing',
  },
  {
    title: 'Solar Powered Charging Station',
    summary:
      'EPICS engineering project for sustainable solar-powered charging infrastructure.',
    tech: ['Solar PV', 'Circuit Design', 'Embedded Systems'],
    github: 'https://github.com/riyadixit-rd/solar-powered-charging-station',
  },
  {
    title: 'Smart Glove',
    summary: 'Sensor-based smart glove project using embedded systems.',
    tech: [],
    github: 'https://github.com/riyadixit-rd/Smart-Glove-for-Disabled-People',
  },
];

export const codingProfiles = [
  { name: 'LeetCode', username: 'dixitriya', url: 'https://leetcode.com/u/dixitriya/' },
  { name: 'Codeforces', username: 'dixitriya', url: 'https://codeforces.com/profile/dixitriya' },
  { name: 'GitHub', username: 'riyadixit-rd', url: 'https://github.com/riyadixit-rd' },
];

export interface OSSContribution {
  repo: string;
  title: string;
  url: string;
}

export const ossContributions: OSSContribution[] = [
  { repo: 'AlgoBuddy', title: 'Clear Search Filter', url: 'https://github.com/riyadixit-rd' },
  { repo: 'Kana Dojo', title: 'Japanese Haiku', url: 'https://github.com/riyadixit-rd' },
  { repo: 'Kana Dojo', title: 'Anime Quote', url: 'https://github.com/riyadixit-rd' },
  { repo: 'schema-cast', title: 'CONTRIBUTING.md', url: 'https://github.com/riyadixit-rd' },
  { repo: 'first-contributions', title: 'Riya Dixit contribution', url: 'https://github.com/riyadixit-rd' },
];

export const achievements = [
  'Cisco Champions League 2026 — Rank 27 nationwide (Top 40)',
  "Google India's Big Code Challenge — Qualified Round 1",
  'VIT Bhopal Industry Conclave 2024 — Project Expo Finalist (Top 50)',
  '6+ merged open-source pull requests',
  '300+ DSA problems solved',
];
