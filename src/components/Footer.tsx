import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="px-8 pb-10 pt-14">
        <div className="mb-3.5 font-mono text-xs">GOT A HARD PROBLEM? →</div>
        <a
          href={`mailto:${contact.email}`}
          className="block break-words font-display text-[clamp(34px,6.4vw,88px)] uppercase leading-[.95] tracking-[-.01em] text-white hover:text-ink"
        >
          Let's build
          <br />
          something.
        </a>
      </div>
      <div className="flex flex-wrap justify-between gap-3 border-t-2 border-white/40 px-8 py-4 font-mono text-xs">
        <span>ALEXANDRU-MARIUS RĂDULESCU © 2026</span>
        <div className="flex flex-wrap gap-[22px]">
          <a href={`mailto:${contact.email}`} className="font-semibold text-white hover:text-ink">
            EMAIL
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-ink">
            GITHUB
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-ink">
            LINKEDIN
          </a>
          <a href={`tel:${contact.phone}`} className="font-semibold text-white hover:text-ink">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  )
}
