import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.8 5.8 0 0 0-1.5-3.8 5.36 5.36 0 0 0-.15-3.7s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.88 5 1.88a5.36 5.36 0 0 0-.15 3.7 5.8 5.8 0 0 0-1.5 3.8c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 3.02V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/Alex110506", label: "GitHub", hoverColor: "hover:text-zinc-100 hover:border-zinc-600" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alexandru-r%C4%83dulescu-12b115264/", label: "LinkedIn", hoverColor: "hover:text-blue-400 hover:border-blue-500/40" },
  { icon: InstagramIcon, href: "https://www.instagram.com/alex.r_11_/", label: "Instagram", hoverColor: "hover:text-pink-500 hover:border-pink-500/40" },
  { icon: Mail, href: "mailto:alex11amr110506@gmail.com", label: "Email", hoverColor: "hover:text-rose-400 hover:border-rose-500/40" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="gradient-orb w-[500px] h-[500px] bg-blue-600 bottom-[-20%] left-[10%]" style={{ animationDelay: '3s' }} />
      <div className="gradient-orb w-[400px] h-[400px] bg-indigo-600 bottom-[-10%] right-[5%]" style={{ animationDelay: '10s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight section-heading">
            Let's build something<br />
            <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl leading-relaxed">
            I'm always open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
          </p>

          <a
            href="mailto:alex11amr110506@gmail.com"
            className="group inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:shadow-xl mb-10"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <div className="flex justify-start gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50 text-zinc-500 transition-all duration-300 hover:bg-zinc-800/60 ${social.hoverColor}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-28 pt-8 border-t border-zinc-800/40 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Alexandru-Marius Rădulescu</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;