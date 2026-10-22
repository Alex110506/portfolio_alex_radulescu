export interface Job {
  num: string
  role: string
  company: string
  dates: string
  points: string[]
  // Anchor id of the matching case study, when the job has one.
  caseStudy?: string
}

export interface ProjectImage {
  // Base name in public/assets/shots/, generated from source-assets/screenshots/ by `npm run images`.
  name: string
  alt: string
}

export interface Project {
  id: string
  name: string
  sub: string
  badge: string
  featured?: boolean
  link?: string
  problem: string
  solution: string
  result: string
  stack: string[]
  images: ProjectImage[]
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

export interface Stat {
  value: string
  label: string
  accent?: boolean
}

export const contact = {
  email: 'alex11amr110506@gmail.com',
  phone: '+40742273700',
  phoneDisplay: '+40 742 273 700',
  github: 'https://github.com/Alex110506',
  linkedin: 'https://www.linkedin.com/in/alexandru-r%C4%83dulescu-12b115264/',
  cv: '/uploads/cv-alex-radulescu.pdf',
  availability: 'Open to internships & freelance · Timișoara or remote',
}

export const stats: Stat[] = [
  { value: '4+', label: 'Production systems shipped' },
  { value: '1st', label: 'iTEC 2026, web track', accent: true },
  { value: '3', label: 'Olympiad medals' },
  { value: '3', label: 'Client sites live' },
]

export const jobs: Job[] = [
  {
    num: '01',
    role: 'Web Software Engineer Intern',
    company: 'Nokia Networks SRL',
    dates: '03/2026 – NOW',
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
    dates: '07/2026',
    points: ['Parish website with a self-managed CMS, live in production.'],
    caseStudy: 'parohia',
  },
  {
    num: '03',
    role: 'AI & ML Trainee',
    company: 'Bitdefender × LigaAC Labs',
    dates: '04/2026 – 06/2026',
    points: [
      'Intensive AI/ML program: data science (NumPy, Pandas), classical ML, deep learning (CNNs, Keras, TensorFlow).',
      'Capstone InterroAI: local multi-agent desktop platform with RAG semantic file indexing (React, Electron, FastAPI, ChromaDB).',
      'Built a self-correcting Plan → Code → Verify agent loop with sandboxed pytest execution.',
    ],
    caseStudy: 'interroai',
  },
  {
    num: '04',
    role: 'Full-Stack Developer',
    company: 'Jade Intimo — Rus S Anca PFA (freelance)',
    dates: '12/2025 – 02/2026',
    points: [
      'Full-stack e-commerce: React storefront + admin, Node.js backend, Drizzle ORM, Neon PostgreSQL, Cloudflare R2 media.',
      'RBAC, JWT auth, Zod validation; solved order-service race conditions for accurate inventory under load.',
      'Stripe + pay-on-delivery; Docker + Railway behind Cloudflare CDN.',
    ],
    caseStudy: 'jade-intimo',
  },
  {
    num: '05',
    role: 'Full-Stack Developer',
    company: 'Masco-Baits S.R.L. (freelance)',
    dates: '05/2025 – 08/2025',
    points: [
      'Production SEO-optimized e-commerce on React, Express and MySQL with a deeply relational normalized schema.',
      'Server-side RBAC admin: live stock tracking, content management, multi-state order fulfillment.',
      'Transactional email pipelines, GDPR-compliant data handling, multi-channel checkout (COD + IBAN).',
    ],
    caseStudy: 'masco-baits',
  },
]

export const projects: Project[] = [
  {
    id: 'itecify',
    name: 'iTECify',
    sub: 'Real-time collaborative cloud IDE',
    badge: 'iTEC 2026 · 1ST PLACE · LEAD DEV',
    featured: true,
    problem:
      'Teams at hackathons lose hours wiring up shared dev environments — no common editor, no safe code execution, no deploys.',
    solution:
      'High-concurrency monorepo (Bun Workspaces, Turborepo): React 19 frontend, Hono/Drizzle backend, live collaborative coding via Y-Monaco + xterm.js over WebSockets, Docker-sandboxed execution (2 GB / 3 s caps) and an LLM tool-calling layer with Accept/Reject diff overlays.',
    result: '1st place, iTEC 2026 Web Track. One-click Vercel deploys straight from the editor.',
    stack: [
      'React 19',
      'Hono',
      'WebSockets',
      'Docker',
      'LLM tools',
      'Bun',
      'Turborepo',
      'Drizzle',
      'Y-Monaco',
      'Vercel API',
    ],
    images: [
      {
        name: 'itecify-1',
        alt: 'iTECify landing page: "The Future of Collaborative Coding" headline above a live code-editor preview',
      },
      {
        name: 'itecify-2',
        alt: 'iTECify editor with file explorer, Monaco code editor, terminal and AI agent chat panel',
      },
    ],
  },
  {
    id: 'interroai',
    name: 'InterroAI',
    sub: 'Local multi-agent desktop platform',
    badge: 'BITDEFENDER CAPSTONE',
    problem: 'Cloud AI coding assistants typically require uploading entire codebases off-device, while local setups risk exposing platform API keys and lack scalable indexing.',
    solution:
      'Hybrid desktop-cloud architecture pairing an Electron/React UI and local Python/FastAPI runtime with Azure Container Apps. Features incremental, AST-aware indexing over Azure Service Bus and PostgreSQL (pgvector) that stores only vector hashes and line ranges—keeping raw source code strictly on the local disk. Implements intent classification and a sandboxed Plan ➔ Code ➔ Verify loop with autonomous multi-round self-correction via ruff and pytest.',
    result: 'Private, local-first code modification — autonomous agent workflows running directly on disk without exposing source code to cloud indexes or leaking model keys.',
    stack: ['React', 'Electron', 'FastAPI', 'PostgreSQL', 'RAG', 'Message Queues'],
    images: [
      {
        name: 'interro',
        alt: "InterroAI desktop app: an agent explaining a codebase's auth flow, with its file-search reasoning steps listed alongside",
      },
    ],
  },
  {
    id: 'parohia',
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
    stack: ['React 19', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'Vite', 'Tailwind CSS', 'Cloudflare R2', 'BeautifulSoup', 'Railway'],
    images: [
      {
        name: 'church-1',
        alt: 'Parohia Sântana I homepage: the church towers behind the parish name and service-schedule buttons',
      },
      {
        name: 'church-2',
        alt: 'Parish admin dashboard with the weekly service schedule editor and photo gallery manager',
      },
    ],
  },
  {
    id: 'jade-intimo',
    name: 'Jade Intimo',
    sub: 'Full-stack lingerie e-commerce',
    badge: 'FREELANCE · LIVE IN PRODUCTION',
    link: 'https://jadeintimo.ro/',
    problem:
      'A lingerie brand needed a real online store — elegant storefront, live inventory, and payments that hold up under concurrent orders.',
    solution:
      'React storefront + admin dashboard, Node.js backend with Drizzle ORM on Neon PostgreSQL, Cloudflare R2 media delivery, RBAC + JWT auth, Zod validation, and race-condition-safe order handling. Stripe + pay-on-delivery, deployed with Docker + Railway behind Cloudflare CDN.',
    result: 'Live at jadeintimo.ro — accurate inventory under load, fast media, real orders every day.',
    stack: ['React', 'Node.js', 'Neon PostgreSQL', 'Stripe', 'Docker', 'Drizzle', 'Cloudflare R2', 'Railway'],
    images: [
      {
        name: 'jade-1',
        alt: 'Jade Intimo storefront homepage with hero banner and shop-by-category grid',
      },
      {
        name: 'jade-2',
        alt: 'Jade Intimo checkout: payment step offering card or pay-on-delivery, beside the order total',
      },
    ],
  },
  {
    id: 'masco-baits',
    name: 'Masco Baits',
    sub: 'SEO-optimized fishing bait e-commerce',
    badge: 'FREELANCE · LIVE IN PRODUCTION',
    link: 'https://www.masco-baits.ro/home',
    problem:
      'A bait manufacturer selling through Facebook needed a proper storefront: deep product hierarchies, reviews, multi-state orders, and admin workflows.',
    solution:
      'Production e-commerce on React, Express and MySQL with a normalized relational schema; server-side RBAC admin with live stock tracking and order fulfillment; transactional email pipelines, GDPR-compliant data handling, COD + IBAN checkout.',
    result: 'Live at masco-baits.ro — the brand’s full catalog online with automated fulfillment.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'SEO', 'RBAC', 'Transactional email'],
    images: [
      {
        name: 'masco-1',
        alt: 'Masco Baits homepage: brand banner, product category buttons and featured products',
      },
      {
        name: 'masco-2',
        alt: 'Masco Baits boilies category page with diameter and quantity filters above product cards',
      },
    ],
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
  { year: '2023', title: 'Bronze — National IT Olympiad, TIC Section', tag: 'ICT' },
]
