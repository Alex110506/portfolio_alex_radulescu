import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[280px_1fr]">
      <SectionLabel lines={['About']} />
      <div className="px-5 py-8 lg:px-8 lg:py-10">
        <p data-reveal className="max-w-[44rem] text-pretty text-[clamp(19px,1.7vw,22px)] font-medium leading-[1.5]">
          I'm 20, studying Computer Engineering at Politehnica Timișoara, and I've spent the last two years doing
          the thing instead of talking about it: shipping production e-commerce for real clients, building
          multi-agent AI platforms, and winning hackathons. I like hard backend problems, clean data, and
          interfaces that don't waste people's time.
        </p>
      </div>
    </section>
  )
}
