import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink} from "lucide-react";
import msaco from "../assets/masco2.png"
import jade from "../assets/jade2.png"
import interro from "../assets/interro.png"
import vibe from "../assets/vibe2.png"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8 5.36 5.36 0 0 0-.15-3.7s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.88 5 1.88a5.36 5.36 0 0 0-.15 3.7 5.8 5.8 0 0 0-1.5 3.8c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const projects = [
  {
    title: "iTECify",
    award: "1st Place - iTEC 2026 Web Track",
    description: "High-concurrency monorepo with Bun Workspaces and Turborepo. Real-time collaboration via Y-Monaco and xterm.js over WebSockets, AI tool-calling architecture, and multi-stage containerized security pipelines.",
    tech: ["React 19", "Hono", "Drizzle", "Docker", "WebSockets"],
    github: "https://github.com/Alex110506/vibecodium",
    live:"",
    image: vibe, // Paste your 16:9 image URL here
  },
  {
    title: "Jade Intimo",
    award: "Full-Stack Development",
    description: "Scalable full-stack e-commerce architecture featuring a responsive React storefront and secure admin dashboard. Powered by a Node.js/TypeScript backend with Drizzle ORM, featuring strict race-condition inventory protections, robust RBAC security, and automated Docker deployments.",
    tech: ["React", "Node.js", "Neon DB", "Docker", "Stripe"],
    github: "https://github.com/Alex110506/jade-intimo-all",
    live: "https://jadeintimo.ro/",
    image: jade, 
  },
  {
    title: "Masco Baits E-Commerce",
    award: "Full-Stack Development",
    description: "High-performance, SEO-optimized e-commerce platform managing the end-to-end product lifecycle. Secure RBAC system, optimized database schemas, and transactional email workflows.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/Alex110506/Masco-Baits",
    live: "https://www.masco-baits.ro/home",
    image: msaco, // Paste your 16:9 image URL here
  },
  {
    title: "InterroAI",
    award: "Capstone Project",
    description: "AI-assisted desktop development environment with an asynchronous FastAPI backend and Electron for native window management. Autonomous Plan → Code → Verify agent engine with semantic RAG and OpenAI embeddings.",
    tech: ["React 18", "Electron", "Python", "FastAPI", "ChromaDB"],
    github: "https://github.com/Alex110506/InterroAI",
    live:"",
    image: interro, // Paste your 16:9 image URL here
  }
];

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight gradient */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold section-heading">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex"
            >
              {/* Removed inner padding (p-6) from the SpotlightCard itself */}
              <SpotlightCard className="glass-panel rounded-2xl w-full flex flex-col group hover:border-blue-500/30 transition-colors duration-500">
                
                {/* 16:9 Image Container - Now Flush */}
                <div className="w-full aspect-video overflow-hidden bg-zinc-900 border-b border-zinc-800/50 relative shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700 text-sm font-mono">
                      [16:9 Image Placeholder]
                    </div>
                  )}
                </div>

                {/* Content Container - Padding applied here instead */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-zinc-600 tracking-wider">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className="inline-block text-xs font-medium px-2.5 py-1 bg-blue-500/8 text-blue-400 rounded-md border border-blue-500/15">
                        {project.award}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-300 transition-colors duration-300 p-1.5 rounded-lg hover:bg-zinc-800/50">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.live !== "" && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-300 transition-colors duration-300 p-1.5 rounded-lg hover:bg-zinc-800/50">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-zinc-800/40">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-zinc-500 bg-zinc-950/50 px-2.5 py-1 rounded-md border border-zinc-800/40 hover:text-zinc-300 hover:border-zinc-700 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;