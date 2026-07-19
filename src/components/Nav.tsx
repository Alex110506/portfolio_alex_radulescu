import { useState } from 'react'
import { contact } from '../data/content'

const links = [
  { href: '#work', label: 'WORK' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#awards', label: 'AWARDS' },
  { href: '#terminal', label: '~/$', mono: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[52px] items-stretch border-b-[3px] border-ink bg-cream">
      <a
        href="#top"
        className="flex flex-none items-center border-r-[3px] border-ink bg-accent px-5 font-display text-[15px] tracking-[.02em] text-white hover:text-white"
      >
        Alex
      </a>
      <nav aria-label="Primary" className="hidden flex-1 items-stretch md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex items-center whitespace-nowrap border-r border-ink px-[18px] ${
              link.mono
                ? 'font-mono text-xs hover:bg-ink hover:text-[#0f0]'
                : 'text-[13px] font-bold tracking-[.12em] hover:bg-ink hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex-1 md:hidden" />
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-[52px] flex-none flex-col items-center justify-center gap-[5px] border-l border-ink md:hidden"
      >
        <span className={`h-[3px] w-5 bg-ink transition-transform ${open ? 'translate-y-[8px] rotate-45' : ''}`} />
        <span className={`h-[3px] w-5 bg-ink ${open ? 'opacity-0' : ''}`} />
        <span className={`h-[3px] w-5 bg-ink transition-transform ${open ? '-translate-y-[8px] -rotate-45' : ''}`} />
      </button>
      <a
        href={`mailto:${contact.email}`}
        className="flex flex-none items-center whitespace-nowrap bg-ink px-[22px] text-[13px] font-extrabold tracking-[.12em] text-white hover:bg-accent hover:text-white"
      >
        HIRE ME ↗
      </a>
      {open && (
        <nav aria-label="Mobile" className="absolute inset-x-0 top-[52px] border-b-[3px] border-ink bg-cream md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-ink px-5 py-3.5 last:border-b-0 hover:bg-ink hover:text-white ${
                link.mono ? 'font-mono text-sm' : 'text-[15px] font-extrabold tracking-[.12em]'
              }`}
            >
              {link.label}
              <span className="text-accent">→</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
