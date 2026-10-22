import SectionLabel from './SectionLabel'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="border-b-[3px] border-ink">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        <SectionLabel lines={['Tool', 'Kit']} />
        {/* The last group spans the leftover cell so 5 groups never leave a hole at 2 or 3 columns. */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((group) => (
            <li
              key={group.label}
              data-reveal
              className="border-b-[1.5px] border-r-[1.5px] border-ink px-5 py-[22px] transition-colors duration-200 hover:bg-white max-md:last:col-span-2 md:max-lg:last:col-span-2 lg:border-b-0"
            >
              <h3 className="mb-3 font-mono text-[11px] font-normal opacity-70">{group.label}</h3>
              <ul className="flex flex-col gap-1.5 text-[15px] font-bold leading-[1.3]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
