import SectionLabel from './SectionLabel'
import { jobs } from '../data/content'

export default function Experience() {
  return (
    <section id="work" className="border-b-[3px] border-ink">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        <SectionLabel sticky lines={['Work', 'Experience']} />
        <ol>
          {jobs.map((job) => (
            <li
              key={job.num}
              data-reveal
              className="grid grid-cols-1 border-b-[1.5px] border-ink bg-cream transition-colors duration-200 last:border-b-0 hover:bg-white md:grid-cols-[80px_1.1fr_1.6fr]"
            >
              <div aria-hidden="true" className="pl-5 pt-6 font-display text-[24px] leading-none text-accent md:pb-6 md:pl-6">
                {job.num}
              </div>
              <div className="px-5 pb-6 pt-3 md:p-6 md:pl-0">
                <h3 className="font-display text-[21px] uppercase leading-[1.15]">{job.role}</h3>
                <div className="mt-1.5 text-[15px] font-bold">{job.company}</div>
                <div className="mt-2 inline-block bg-ink px-2 py-[3px] font-mono text-xs text-white">{job.dates}</div>
              </div>
              <div className="flex flex-col gap-2.5 border-t-[1.5px] border-ink px-5 py-6 md:border-l-[1.5px] md:border-t-0 md:px-6">
                <ul className="flex flex-col gap-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[14.5px] leading-[1.45]">
                      <span aria-hidden="true" className="flex-none font-extrabold text-accent-deep">
                        →
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {job.caseStudy && (
                  <a
                    href={`#${job.caseStudy}`}
                    className="inline-flex min-h-11 w-fit items-center gap-1.5 font-mono text-xs font-semibold underline decoration-[1.5px] underline-offset-4 md:min-h-0 md:pt-1"
                  >
                    READ THE CASE STUDY <span aria-hidden="true">↑</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
