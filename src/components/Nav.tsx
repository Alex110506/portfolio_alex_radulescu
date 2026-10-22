import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#projects', label: 'PROJECTS' },
  { href: '#work', label: 'WORK' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#awards', label: 'AWARDS' },
  { href: '#terminal', label: '~/$', mono: true },
]

// Tracks the last section whose top has passed just under the header, so short
// sections (Skills) still win over the next one peeking into view.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    let frame = 0
    const update = () => {
      frame = 0
      let current: string | null = null
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) current = `#${section.id}`
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return active
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector('a')?.focus()

    const close = (returnFocus: boolean) => {
      setOpen(false)
      if (returnFocus) toggleRef.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true)
    }
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex h-[56px] items-stretch border-b-[3px] border-ink bg-cream"
    >
      <a
        href="#top"
        className="flex flex-none items-center border-r-[3px] border-ink bg-accent px-5 font-display text-[24px] tracking-[.01em] text-white hover:text-white focus-visible:-outline-offset-[7px] focus-visible:outline-ink"
      >
        Alex
      </a>
      <nav aria-label="Primary" className="hidden flex-1 items-stretch md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={active === link.href ? 'location' : undefined}
            className={`flex items-center whitespace-nowrap border-r border-ink px-[18px] focus-visible:-outline-offset-[6px] aria-[current=location]:bg-ink aria-[current=location]:text-white ${
              link.mono
                ? 'font-mono text-xs hover:bg-ink hover:text-[#0f0] aria-[current=location]:text-[#0f0]'
                : 'text-[13px] font-bold tracking-[.12em] hover:bg-ink hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex-1 md:hidden" />
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex w-[52px] flex-none flex-col items-center justify-center gap-[5px] border-l border-ink focus-visible:-outline-offset-[6px] md:hidden"
      >
        <span className={`h-[3px] w-5 bg-ink transition-transform ${open ? 'translate-y-[8px] rotate-45' : ''}`} />
        <span className={`h-[3px] w-5 bg-ink ${open ? 'opacity-0' : ''}`} />
        <span className={`h-[3px] w-5 bg-ink transition-transform ${open ? '-translate-y-[8px] -rotate-45' : ''}`} />
      </button>
      <a
        href="#contact"
        className="flex flex-none items-center whitespace-nowrap bg-ink px-[22px] text-[13px] font-extrabold tracking-[.12em] text-white hover:bg-accent-deep hover:text-white focus-visible:-outline-offset-[6px]"
      >
        HIRE ME
      </a>
      {open && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-[56px] border-b-[3px] border-ink bg-cream md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active === link.href ? 'location' : undefined}
              className={`flex min-h-[52px] items-center justify-between border-b border-ink px-5 last:border-b-0 hover:bg-ink hover:text-white focus-visible:-outline-offset-[6px] ${
                link.mono ? 'font-mono text-sm' : 'text-[15px] font-extrabold tracking-[.12em]'
              }`}
            >
              {link.label}
              <span aria-hidden="true" className="text-accent-deep">
                →
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
