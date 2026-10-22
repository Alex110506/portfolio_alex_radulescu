import { contact } from '../data/content'
import EmailCopy from './EmailCopy'

const linkClass = 'inline-flex min-h-11 items-center font-semibold text-ink hover:underline hover:text-ink sm:min-h-0 sm:py-1'

// Only the display headline is white: everything smaller on the accent slab is ink,
// because white on #ff2e00 is 3.7:1 and fails below 24px.
export default function Footer() {
  return (
    <footer className="bg-accent text-ink [&_:focus-visible]:outline-ink">
      <div className="px-5 pb-8 pt-14 lg:px-8">
        <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[.92] tracking-[-.01em] text-white">
          Got a hard
          <br />
          problem?
        </h2>
        <div className="mt-8">
          <EmailCopy tone="accent" size="text-[clamp(20px,3.2vw,44px)]" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t-2 border-ink/25 px-5 py-3 font-mono text-xs lg:px-8">
        <span className="py-2">ALEXANDRU-MARIUS RĂDULESCU © 2026</span>
        <ul className="flex flex-wrap gap-x-[22px]">
          <li>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GITHUB<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LINKEDIN<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`tel:${contact.phone}`} className={linkClass}>
              {contact.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
