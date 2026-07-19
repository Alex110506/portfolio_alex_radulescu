import { contact } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-ink">
      <div className="grid min-h-[78vh] grid-cols-2 lg:grid-cols-[1fr_480px]">
        <div className="flex flex-col justify-between border-ink pb-8 pl-8 pr-5 pt-12 lg:border-r-[3px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="bg-ink px-2.5 py-1 font-mono text-xs text-white">TIMIȘOARA / ARAD, RO</span>
              <span className="border-[1.5px] border-ink px-2.5 py-1 font-mono text-xs">SOFTWARE ENGINEER</span>
              <span className="font-mono text-xs font-semibold text-accent">● OPEN TO WORK</span>
            </div>
            <h1 className="font-display text-[clamp(40px,11.5vw,170px)] uppercase leading-[.88] tracking-[-.02em] sm:text-[clamp(56px,10.5vw,170px)]">
              <span data-reveal className="block text-[clamp(80px,14.5vw,210px)] sm:text-[clamp(90px,15.5vw,230px)]">
                Alex
              </span>
              <span data-reveal className="block text-accent">
                Rădulescu
              </span>
            </h1>
          </div>
          <div className="mt-9 flex flex-wrap items-end justify-between gap-6">
            <p data-reveal className="max-w-[520px] text-pretty text-[19px] font-medium leading-[1.45]">
              I build full-stack web apps and AI tooling that ship. SWE intern at <strong>Nokia</strong>, AI/ML
              trainee at <strong>Bitdefender</strong>, and <strong>1st place</strong> at iTEC 2026 — with a shelf
              of olympiad medals behind it.
            </p>
            <div className="flex flex-none flex-col items-end gap-2.5">
              <a
                href={contact.cv}
                download="CV-Alex-Radulescu.pdf"
                className="inline-flex items-center gap-2.5 border-2 border-ink bg-ink px-[22px] py-3.5 text-sm font-extrabold tracking-[.1em] text-white hover:border-accent hover:bg-accent hover:text-white"
              >
                DOWNLOAD CV ↓
              </a>
              <div className="flex gap-4 font-mono text-[13px]">
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-semibold">
                  GITHUB ↗
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold">
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] bg-accent">
          <img
            src="/assets/alex.jpg"
            alt="Alexandru Rădulescu"
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%] [filter:var(--pf)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-accent opacity-[var(--po)] mix-blend-multiply"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between bg-ink/85 px-3.5 py-2.5 font-mono text-[11px] text-white">
            <span>A PHOTO OF ME:)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
