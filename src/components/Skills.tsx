import { motion } from "framer-motion";
import { Code2, Globe, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-blue-400",
    borderColor: "group-hover:border-blue-500/30",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "text-indigo-400",
    borderColor: "group-hover:border-indigo-500/30",
    skills: ["React", "TailwindCSS", "Framer Motion", "HTML5", "CSS3", "Zustand", "Angular", "Tan Stack Query"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    color: "text-violet-400",
    borderColor: "group-hover:border-violet-500/30",
    skills: ["Node.js", "Express", "FastAPI", "Spring", "Hono", "PostgreSQL", "MySQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/30",
    skills: ["Docker", "Kubernetes", "Linux", "Git", "Jenkins", "Railway", "Cloudflare", "Neon", "Vercel", "Azure"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold section-heading">Technical Arsenal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`glass-panel rounded-2xl p-6 group hover-lift ${category.borderColor} transition-colors duration-500`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-xl bg-zinc-950/50 border border-zinc-800/50 ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 text-sm">{category.title}</h3>
                    <span className="text-xs text-zinc-600">{category.skills.length} skills</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium text-zinc-500 bg-zinc-950/60 px-2.5 py-1.5 rounded-lg border border-zinc-800/40 hover:text-zinc-200 hover:border-zinc-700/60 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
