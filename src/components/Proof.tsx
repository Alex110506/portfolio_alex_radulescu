import { stats } from '../data/content'

// The four numbers that back up the hero, set where a visitor's first scroll lands.
export default function Proof() {
  return (
    <section aria-label="Highlights" className="border-b-[3px] border-ink bg-ink text-white">
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="border-white/25 px-5 py-5 max-md:odd:border-r-[1.5px] max-md:[&:nth-child(-n+2)]:border-b-[1.5px] md:border-r-[1.5px] md:px-8 md:py-6 md:last:border-r-0"
          >
            <div className={`font-display text-[clamp(34px,4.2vw,56px)] leading-none ${stat.accent ? 'text-accent' : ''}`}>
              {stat.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[.04em] text-[#d4d4d4] md:text-xs">{stat.label}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
