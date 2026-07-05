import { motion } from "framer-motion";
import profilePic from "../assets/IMG_3547.jpg";

// ── Import all background ribbon images ──
import chessPic from "../assets/chess.jpeg";
import gymPic from "../assets/gym.jpeg";
import vibePic from "../assets/vibe.jpeg";
import mascoPic from "../assets/masco.png";
import interroPic from "../assets/interro.png";
import jadePic from "../assets/jade.jpeg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const } },
};

// ── Left Background Ribbon Images ──
const rightBgCol1 = [
  jadePic,
  gymPic, 
  vibePic, 
];

const rightBgCol2 = [
  vibePic, 
  mascoPic, 
  interroPic, 
  chessPic 
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0f1c] to-[#09090B]">

      {/* ── Diagonal Image Strips (Right Background) ── */}
      <div className="absolute top-[-17%] right-[-50%] md:right-[4%] w-[300px] md:w-[400px] h-[150%] transform -rotate-[20deg] flex gap-4 opacity-40 md:opacity-60 z-0 pointer-events-none">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-1/2 pt-12 animate-marquee-slow">
          {rightBgCol1.map((src, idx) => (
            <div key={`right1-${idx}`} className="w-full h-48 md:h-64 bg-slate-800/80 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-700/50">
              {src ? (
                <img src={src} alt={`Project right col 1 ${idx}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">Image {idx + 1}</div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-1/2 -mt-16 animate-marquee-slow-reverse">
          {rightBgCol2.map((src, idx) => (
            <div key={`right2-${idx}`} className="w-full h-48 md:h-64 bg-slate-800/80 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-700/50">
              {src ? (
                <img src={src} alt={`Project right col 2 ${idx}`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">Image {idx + 1}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      {/* Changed pt-32 to pt-24 md:pt-32 to push text higher on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 md:pt-32 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* ── Left Side: Text Content ── */}
          {/* Tightened gap from gap-5 to gap-4 to condense vertical space slightly */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left gap-4 w-full lg:w-[55%] z-20 md:pl-12 lg:pl-20"
          >
            {/* Intro */}
            <motion.div variants={item}>
              <p className="text-zinc-300 font-bold tracking-widest uppercase text-sm md:text-base mb-1 md:mb-2">
                Hi, My Name Is
              </p>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={item} className="flex flex-col items-start gap-1 md:gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                [Alex&nbsp;Rădulescu]
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#409cff]">
                I am a Software<br />Engineer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={item} className="mt-2 md:mt-4 max-w-xl mx-auto md:mx-0">
              <p className="text-zinc-100 font-semibold text-lg lg:text-xl mb-1 md:mb-2">
                Building scalable systems and autonomous AI in the <span className="text-[#409cff]">Tech industry</span>!
              </p>
              <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
                I am a product-oriented Software Engineer with a focus on high-level system architecture, from designing robust backends to bringing production-ready solutions to life!
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={item} className="mt-4 md:mt-6">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-[#409cff] hover:bg-[#5aa7fa] text-white px-8 py-3.5 rounded-md font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] hover:-translate-y-1 mx-auto md:mx-0"
              >
                Lets Get Started!
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Side: Floating Layout ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end relative h-[400px] sm:h-[450px] lg:h-[600px] perspective-[1200px]"
          >
            {/* Background floating card (decorative) */}
            <div className="absolute top-[5%] md:top-[10%] left-1/2 md:left-auto md:right-[20%] ml-[-140px] sm:ml-[-160px] md:ml-0 z-0">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-72 sm:w-64 sm:h-80 md:w-64 md:h-80 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl transform rotate-y-[-20deg] rotate-x-[10deg] rotate-z-[5deg]"
              >
                <div className="p-4 flex flex-col gap-3">
                  <div className="w-1/2 h-3 sm:h-4 bg-slate-700/50 rounded"></div>
                  <div className="w-full h-16 sm:h-24 bg-slate-700/30 rounded"></div>
                  <div className="w-3/4 h-3 sm:h-4 bg-slate-700/50 rounded"></div>
                </div>
              </motion.div>
            </div>

            {/* Foreground floating card (Profile Picture) */}
            <div className="absolute top-[15%] md:top-[25%] left-1/2 md:left-auto md:right-[-5%] ml-[-90px] md:ml-0 z-10">
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-[22rem] bg-[#0A0A0B] border-2 border-slate-700/60 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-y-[-15deg] rotate-x-[5deg] -rotate-z-[2deg] overflow-hidden group"
              >
                {/* Image Frame Wrapper */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10 opacity-80" />
                  <img
                    src={profilePic}
                    alt="Alexandru-Marius Rădulescu"
                    className="relative w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;