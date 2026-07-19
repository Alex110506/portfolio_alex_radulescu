import SectionLabel from './SectionLabel'
import { jobs } from '../data/content'

export default function Experience() {
  return (
    <section id="work" className="scroll-mt-[52px] border-b-[3px] border-ink">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        <SectionLabel sticky lines={['Work', 'Experience']} />
        <div>
          {jobs.map((job) => (
            <div
              key={job.num}
              data-reveal
              className="grid grid-cols-1 border-b-[1.5px] border-ink bg-cream transition-colors duration-200 hover:bg-white md:grid-cols-[80px_1.1fr_1.6fr]"
            >
              <div className="pl-6 pt-6 font-display text-[22px] text-accent md:pb-6">{job.num}</div>
              <div className="p-6 md:pl-0">
                <div className="font-display text-[21px] uppercase leading-[1.15]">{job.role}</div>
                <div className="mt-1.5 text-[15px] font-bold">{job.company}</div>
                <div className="mt-2 inline-block bg-ink px-2 py-[3px] font-mono text-xs text-white">
                  {job.dates}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 border-t-[1.5px] border-ink p-6 md:border-l-[1.5px] md:border-t-0">
                {job.points.map((point) => (
                  <div key={point} className="flex gap-2.5 text-[14.5px] leading-[1.45]">
                    <span className="flex-none font-extrabold text-accent">→</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
