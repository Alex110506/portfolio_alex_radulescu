import SectionLabel from './SectionLabel'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-[52px] border-b-[3px] border-ink">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        <SectionLabel lines={['Tool', 'Kit']} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((group) => (
            <div
              key={group.label}
              data-reveal
              className="border-b-[1.5px] border-r-[1.5px] border-ink px-5 py-[22px] transition-colors duration-200 hover:bg-accent hover:text-white lg:border-b-0"
            >
              <div className="mb-3 font-mono text-[11px] opacity-70">{group.label}</div>
              <div className="flex flex-col gap-1.5 text-[15px] font-bold leading-[1.3]">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
