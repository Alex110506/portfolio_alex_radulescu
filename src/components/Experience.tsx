import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// Updated with detailed bullet points from your CV
const experiences = [
  {
    role: "Web Software Engineer Intern",
    company: "Nokia Networks SRL",
    period: "Mar 2026 - Present",
    description: [
      "Developed and maintained robust backend services using Python, ensuring high-performance data processing.",
      "Architected interactive data visualization suites in Power BI for actionable business intelligence.",
      "Optimized relational database performance across MySQL and MariaDB environments.",
      "Streamlined the software delivery lifecycle by configuring Jenkins automation pipelines.",
    ],
    tech: ["Python", "Power BI", "MySQL", "Jenkins"],
  },
  {
    role: "AI & Machine Learning Trainee",
    company: "Bitdefender",
    period: "Apr 2026 - Jun 2026",
    description: [
      "Completed an intensive AI/ML program covering Data Science fundamentals, Classical ML, and Deep Learning.",
      "Built InterroAI: a local desktop multi-agent orchestration platform using React, Electron, FastAPI, and ChromaDB.",
      "Implemented semantic RAG-based indexing with offline intent classification (TF-IDF + Logistic Regression).",
      "Engineered an autonomous 'Plan → Code → Verify' development loop with self-correction.",
    ],
    tech: ["React", "Electron", "FastAPI", "ChromaDB", "TensorFlow"],
  },
  {
    role: "Full-Stack Developer + DevOps",
    company: "Rus S Anca PFA",
    period: "Dec 2025 - Present",
    description: [
      "Architected a full-stack e-commerce platform with a responsive React storefront and secure admin dashboard.",
      "Built a scalable Node.js/TypeScript backend with Drizzle ORM, Neon PostgreSQL, and Cloudflare R2.",
      "Implemented race-condition protections in the order service to ensure 100% inventory accuracy.",
      "Engineered a robust security layer featuring RBAC, JWT-based authentication, and Zod validation.",
      "Automated deployment via Docker and Railway, integrating Stripe and custom pay-on-delivery workflows.",
    ],
    tech: ["React", "Node.js", "Docker", "PostgreSQL", "Railway"],
  },
  {
    role: "Full-Stack Developer",
    company: "Masco-Baits S.R.L.",
    period: "May 2025 - Aug 2025",
    description: [
      "Developed a high-performance, SEO-optimized e-commerce platform for competitive fishing equipment.",
      "Engineered a secure MySQL-backed authentication system and optimized Core Web Vitals for speed.",
      "Integrated diverse payment solutions, including automated Stripe/bank transfer workflows.",
      "Automated deployment and hosting via Railway to ensure high availability and streamlined CI/CD.",
    ],
    tech: ["React", "Node.js", "MySQL", "Stripe"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Experience
          </h2>
        </motion.div>

        {/* Left-Aligned Timeline */}
        <div className="relative max-w-4xl mx-auto md:mx-0">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/50 via-zinc-800 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-20 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[12px] top-6 z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500 shadow-lg shadow-black">
                  <span className="text-[10px] font-bold text-zinc-500 group-hover:text-blue-400 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-6 hover:translate-x-1 transition-all duration-500 shadow-lg shadow-black/20 overflow-hidden">
                  {/* Glowing left border indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header Area */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 leading-tight">
                          {exp.role}
                        </h3>
                        <span className="text-blue-400 font-medium text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    {/* Date Badge */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-950/50 px-3 py-1.5 rounded-full border border-zinc-800/50 w-fit shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Detailed Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-blue-500/50 mt-1 text-[10px]">
                          ▹
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-medium text-zinc-400 bg-zinc-950 px-2.5 py-1.5 rounded border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;