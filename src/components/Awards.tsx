import SectionLabel from './SectionLabel'
import { awards } from '../data/content'

export default function Awards() {
  return (
    <section id="awards" className="grid scroll-mt-[52px] grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[280px_1fr]">
      <SectionLabel sticky lines={['Honours', '& Study']} />
      <div>
        {awards.map((award) => (
          <div
            key={award.title}
            data-reveal
            className="grid grid-cols-1 gap-2 border-b-[1.5px] border-ink px-7 py-[18px] transition-colors duration-200 hover:bg-white sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-5"
          >
            <span className="font-display text-[26px] text-accent">{award.year}</span>
            <span className="text-[17px] font-bold">{award.title}</span>
            <span className="w-fit border-[1.5px] border-ink px-2.5 py-1 font-mono text-[11px]">{award.tag}</span>
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-b-[1.5px] border-ink px-7 py-[22px] md:border-b-0 md:border-r-[1.5px]">
            <div className="mb-2 font-mono text-[11px] text-accent">B.SC. COMPUTER ENGINEERING · 2025—</div>
            <div className="text-[17px] font-extrabold">Politehnica University Timișoara</div>
          </div>
          <div className="px-7 py-[22px]">
            <div className="mb-2 font-mono text-[11px] text-accent">HIGH SCHOOL DIPLOMA · 2021—2025</div>
            <div className="text-[17px] font-extrabold">C.N. "Preparandia – D. Țichindeal", Arad</div>
          </div>
        </div>
      </div>
    </section>
  )
}
