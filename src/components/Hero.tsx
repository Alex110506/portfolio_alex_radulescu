import { contact } from '../data/content'

const newTab = <span className="sr-only"> (opens in a new tab)</span>

// Above the fold, so nothing here waits on the scroll-reveal.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-ink">
      <div className="grid grid-cols-1 lg:min-h-[78vh] lg:grid-cols-[1fr_480px]">
        <div className="flex flex-col justify-between border-ink px-5 pb-8 pt-8 sm:pl-8 sm:pt-12 lg:border-r-[3px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="bg-ink px-2.5 py-1 font-mono text-xs text-white">TIMIȘOARA / ARAD, RO</span>
              <span className="border-[1.5px] border-ink px-2.5 py-1 font-mono text-xs">SOFTWARE ENGINEER</span>
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-accent-deep">
                <span aria-hidden="true" className="h-2 w-2 flex-none bg-accent-deep" />
                {contact.availability}
              </span>
            </div>
            <h1 className="font-display text-[clamp(40px,11.5vw,170px)] uppercase leading-[.88] tracking-[-.02em] sm:text-[clamp(56px,10.5vw,170px)]">
              <span className="block text-[clamp(100px,16.5vw,230px)] sm:text-[clamp(110px,16.5vw,250px)]">Alex</span>
              <span className="block text-accent">Rădulescu</span>
            </h1>
          </div>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6 sm:mt-9">
            <p className="max-w-[520px] text-pretty text-[clamp(18px,1.6vw,20px)] font-medium leading-[1.45]">
              I build full-stack web apps and AI tooling that ship. Software Engineer intern at <strong>Nokia</strong>, AI/ML
              trainee at <strong>Bitdefender</strong>, 1st place at iTEC 2026 and a two-time national olympiad bronze
              medalist.
            </p>
            <div className="flex flex-none flex-col items-end gap-1">
              <a
                href={contact.cv}
                download="CV-Alex-Radulescu.pdf"
                className="inline-flex items-center gap-2.5 border-2 border-ink bg-ink px-[22px] py-3.5 text-sm font-extrabold tracking-[.1em] text-white hover:border-accent-deep hover:bg-accent-deep hover:text-white"
              >
                DOWNLOAD CV <span aria-hidden="true">↓</span>
              </a>
              <div className="flex gap-5 font-mono text-[13px]">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 font-semibold"
                >
                  GITHUB <span aria-hidden="true">↗</span>
                  {newTab}
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 font-semibold"
                >
                  LINKEDIN <span aria-hidden="true">↗</span>
                  {newTab}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          {/* Below lg the photo is a full-width 420px band; these crops keep the face near its top at every width. */}
          <img
            src="/assets/alex.jpg"
            alt="Alexandru Rădulescu"
            width={998}
            height={1534}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[20%_60%] min-[440px]:object-[20%_45%] sm:object-[20%_42%] lg:object-[20%_30%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-accent opacity-20 mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  )
}
