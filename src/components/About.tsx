import SectionLabel from './SectionLabel'

const stats = [
  { value: '4+', label: 'PROD SYSTEMS SHIPPED', accent: false, border: 'border-b-[1.5px] border-r-[1.5px]' },
  { value: '1st', label: 'iTEC 2026, WEB TRACK', accent: true, border: 'border-b-[1.5px]' },
  { value: '5', label: 'OLYMPIAD AWARDS', accent: false, border: 'border-r-[1.5px]' },
  { value: '2', label: 'LANGUAGES: RO / EN', accent: false, border: '' },
]

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[280px_1fr]">
      <SectionLabel lines={['About']} />
      <div className="grid grid-cols-1 gap-10 px-8 py-7 xl:grid-cols-[1.5fr_1fr]">
        <p data-reveal className="text-pretty text-[22px] font-medium leading-[1.5]">
          I'm 20, studying Computer Engineering at Politehnica Timișoara, and I've spent the last two years doing
          the thing instead of talking about it: shipping production e-commerce for real clients, building
          multi-agent AI platforms, and winning hackathons. I like hard backend problems, clean data, and
          interfaces that don't waste people's time.
        </p>
        <div data-reveal className="grid grid-cols-2 border-[1.5px] border-ink">
          {stats.map((stat) => (
            <div key={stat.label} className={`border-ink p-4 ${stat.border}`}>
              <div className={`font-display text-[34px] ${stat.accent ? 'text-accent' : ''}`}>{stat.value}</div>
              <div className="font-mono text-[11px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
