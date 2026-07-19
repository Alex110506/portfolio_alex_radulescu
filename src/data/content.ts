export interface Job {
  num: string
  role: string
  company: string
  dates: string
  points: string[]
}

export interface Project {
  name: string
  sub: string
  badge: string
  link?: string
  problem: string
  solution: string
  result: string
  stack: string[]
  images: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Award {
  year: string
  title: string
  tag: string
}

export const contact = {
  email: 'alex11amr110506@gmail.com',
  phone: '+40742273700',
  phoneDisplay: '+40 742 273 700',
  github: 'https://github.com/Alex110506',
  linkedin: 'https://www.linkedin.com/in/alexandru-r%C4%83dulescu-12b115264/',
  cv: '/uploads/cv-alex-radulescu.pdf',
}

export const jobs: Job[] = [
  {
    num: '01',
    role: 'Web Software Engineer Intern',
    company: 'Nokia Networks SRL',
    dates: '03/2026 — NOW',
    points: [
      'Built and maintained high-performance Python backend services with clean data processing.',
      'Shipped interactive Power BI visualization suites turning raw system metrics into decisions.',
      'Tuned MySQL / MariaDB performance with schema improvements and efficient query logic.',
      'Cut manual deployment time with Jenkins automation pipelines.',
    ],
  },
  {
    num: '02',
    role: 'Full-Stack Developer',
    company: 'Parohia Ortodoxă Română Sântana I (freelance)',
    dates: '07/2026 — 07/2026',
    points: [
      'Shipped a parish website with a custom CMS as three decoupled Dockerized services — React (Vite, Tailwind CSS), FastAPI content API, Python calendar scraper - hosted on Railway with managed MongoDB and Redis over private networking.',
      'Architected a Redis-first read path with MongoDB fallback and write-through saves; secured the admin dashboard with httpOnly-cookie JWT auth (bcrypt), Redis-backed per-IP rate limiting and async gallery uploads to Cloudflare R2.',
    ],
  },
  {
    num: '03',
    role: 'AI & ML Trainee',
    company: 'Bitdefender × LigaAC Labs',
    dates: '04/2026 — 06/2026',
    points: [
      'Intensive AI/ML program: data science (NumPy, Pandas), classical ML, deep learning (CNNs, Keras, TensorFlow).',
      'Capstone InterroAI: local multi-agent desktop platform with RAG semantic file indexing (React, Electron, FastAPI, ChromaDB).',
      'Built a self-correcting Plan → Code → Verify agent loop with sandboxed pytest execution.',
    ],
  },
  {
    num: '04',
    role: 'Full-Stack Developer',
    company: 'Jade Intimo — Rus S Anca PFA (freelance)',
    dates: '12/2025 — 02/2026',
    points: [
      'Full-stack e-commerce: React storefront + admin, Node.js backend, Drizzle ORM, Neon PostgreSQL, Cloudflare R2 media.',
      'RBAC, JWT auth, Zod validation; solved order-service race conditions for accurate inventory under load.',
      'Stripe + pay-on-delivery; Docker + Railway behind Cloudflare CDN.',
    ],
  },
  {
    num: '05',
    role: 'Full-Stack Developer',
    company: 'Masco-Baits S.R.L. (freelance)',
    dates: '05/2025 — 08/2025',
    points: [
      'Production SEO-optimized e-commerce on React, Express and MySQL with a deeply relational normalized schema.',
      'Server-side RBAC admin: live stock tracking, content management, multi-state order fulfillment.',
      'Transactional email pipelines, GDPR-compliant data handling, multi-channel checkout (COD + IBAN).',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'iTECify',
    sub: 'Real-time collaborative cloud IDE',
    badge: 'iTEC 2026 · 1ST PLACE · LEAD DEV',
    problem:
      'Teams at hackathons lose hours wiring up shared dev environments — no common editor, no safe code execution, no deploys.',
    solution:
      'High-concurrency monorepo (Bun Workspaces, Turborepo): React 19 frontend, Hono/Drizzle backend, live collaborative coding via Y-Monaco + xterm.js over WebSockets, Docker-sandboxed execution (2 GB / 3 s caps) and an LLM tool-calling layer with Accept/Reject diff overlays.',
    result: '1st place, iTEC 2026 Web Track. One-click Vercel deploys straight from the editor.',
    stack: [
      'React 19',
      'Bun',
      'Turborepo',
      'Hono',
      'Drizzle',
      'WebSockets',
      'Y-Monaco',
      'Docker',
      'LLM tools',
      'Vercel API',
    ],
    images: ['/assets/itecify-1.jpeg', '/assets/itecify-2.png'],
  },
  {
    name: 'InterroAI',
    sub: 'Local multi-agent desktop platform',
    badge: 'BITDEFENDER CAPSTONE',
    problem: 'Your files hold answers, but cloud AI tools mean shipping private data off-device.',
    solution:
      'Fully local desktop app (React, Electron, FastAPI, ChromaDB) with RAG-based semantic file indexing, offline intent classification (TF-IDF + Logistic Regression) and a self-correcting Plan → Code → Verify agent loop running sandboxed pytest.',
    result: 'Private, offline AI over your own files — agents that catch and fix their own errors autonomously.',
    stack: ['React', 'Electron', 'FastAPI', 'ChromaDB', 'RAG', 'TF-IDF', 'scikit-learn', 'pytest'],
    images: ['/assets/interro.png'],
  },
  {
    name: 'Parohia Sântana I',
    sub: 'Parish website & lightweight CMS',
    badge: 'FREELANCE · LIVE IN PRODUCTION',
    link: 'https://parohia-santana-1.ro/',
    problem:
      'A local church from my city needed one platform to unify its calendar and events so the community can see them, share the parish’s history and information, offer contact details, and welcome newcomers.',
    solution:
      'Three decoupled Dockerized services on Railway: a React (Vite, Tailwind CSS) one-page site with a hidden admin dashboard, a FastAPI CMS API with httpOnly-cookie JWT auth and Redis-backed rate limiting, and a monthly Python scraper that keeps the Orthodox feast calendar fresh. Redis-first reads with MongoDB fallback, write-through saves, gallery uploads to Cloudflare R2.',
    result:
      'Live at parohia-santana-1.ro — the parish edits every section itself and the feast calendar updates automatically every month.',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'FastAPI', 'MongoDB', 'Redis', 'Cloudflare R2', 'BeautifulSoup', 'Docker', 'Railway'],
    images: ['/assets/church-1.png', '/assets/church-2.png'],
  },
  {
    name: 'Jade Intimo',
    sub: 'Full-stack lingerie e-commerce',
    badge: 'FREELANCE · LIVE IN PRODUCTION',
    link: 'https://jadeintimo.ro/',
    problem:
      'A lingerie brand needed a real online store — elegant storefront, live inventory, and payments that hold up under concurrent orders.',
    solution:
      'React storefront + admin dashboard, Node.js backend with Drizzle ORM on Neon PostgreSQL, Cloudflare R2 media delivery, RBAC + JWT auth, Zod validation, and race-condition-safe order handling. Stripe + pay-on-delivery, deployed with Docker + Railway behind Cloudflare CDN.',
    result: 'Live at jadeintimo.ro — accurate inventory under load, fast media, real orders every day.',
    stack: ['React', 'Node.js', 'Drizzle', 'Neon PostgreSQL', 'Cloudflare R2', 'Stripe', 'Docker', 'Railway'],
    images: ['/assets/jade-1.jpeg', '/assets/jade-2.jpeg'],
  },
  {
    name: 'Masco Baits',
    sub: 'SEO-optimized fishing bait e-commerce',
    badge: 'FREELANCE · LIVE IN PRODUCTION',
    link: 'https://www.masco-baits.ro/home',
    problem:
      'A bait manufacturer selling through Facebook needed a proper storefront: deep product hierarchies, reviews, multi-state orders, and admin workflows.',
    solution:
      'Production e-commerce on React, Express and MySQL with a normalized relational schema; server-side RBAC admin with live stock tracking and order fulfillment; transactional email pipelines, GDPR-compliant data handling, COD + IBAN checkout.',
    result: 'Live at masco-baits.ro — the brand’s full catalog online with automated fulfillment.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'RBAC', 'SEO', 'Transactional email'],
    images: ['/assets/masco-1.png', '/assets/masco-2.png'],
  },
]

export const skills: SkillGroup[] = [
  { label: 'LANGUAGES', items: ['JavaScript / TS', 'Python', 'Java', 'C', 'SQL'] },
  { label: 'FRONTEND', items: ['React', 'Tailwind CSS', 'HTML / CSS'] },
  { label: 'BACKEND', items: ['Node.js', 'Express', 'Hono', 'FastAPI', 'Spring'] },
  { label: 'DATA', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB', 'Drizzle ORM'] },
  { label: 'DEVOPS', items: ['Docker', 'Git · Linux', 'Railway · Render', 'Cloudflare', 'Jenkins CI/CD'] },
]

export const awards: Award[] = [
  { year: '2026', title: '1st place — iTEC Timișoara Hackathon', tag: 'WEB DEV' },
  {
    year: '2025',
    title: 'Bronze — National Olympiad in Digital Innovation & Creation (10th nationally)',
    tag: 'WEB DEV',
  },
  { year: '2025', title: 'National Informatics Olympiad — 55th / 100', tag: 'ALGO' },
  { year: '2025', title: 'First Prize — County Informatics Olympiad', tag: 'ALGO' },
  { year: '2023', title: 'Bronze — National IT Olympiad, TIC Section', tag: 'TIC' },
]
