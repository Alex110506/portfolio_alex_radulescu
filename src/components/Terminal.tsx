import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/content'

interface TermLine {
  text: string
  color: string
}

const line = (text: string, color = '#ccc'): TermLine => ({ text, color })

const WELCOME = line('Welcome to alexOS v1.0 — type `help` to see commands.', '#888')

const RESPONSES: Record<string, TermLine[]> = {
  help: [
    line('Available commands:', '#888'),
    line('  whoami     — who is this guy'),
    line('  stack      — tech I use daily'),
    line('  awards     — trophy shelf'),
    line('  contact    — reach me'),
    line('  cv         — grab the PDF'),
    line('  clear      — wipe the screen'),
    line('  sudo hire-me — do it'),
  ],
  whoami: [
    line('Alexandru-Marius Rădulescu. 20. Software engineer, Timișoara.'),
    line('Full-stack + AI tooling. Currently: SWE intern @ Nokia.'),
  ],
  stack: [
    line('TS/JS · Python · Java · C · SQL'),
    line('React · Node · Hono · FastAPI · Spring'),
    line('PostgreSQL · MySQL · MongoDB · ChromaDB'),
    line('Docker · Jenkins · Railway · Cloudflare'),
  ],
  awards: [
    line('2026  1st place — iTEC Hackathon (Web)'),
    line('2025  Bronze — National Olympiad, Digital Innovation'),
    line('2025  First Prize — County Informatics Olympiad'),
    line('2023  Bronze — National IT Olympiad (TIC)'),
  ],
  contact: [
    line('email:    alex11amr110506@gmail.com'),
    line('phone:    +40 742 273 700'),
    line('github:   github.com/Alex110506'),
    line('linkedin: /in/alexandru-rădulescu-12b115264'),
  ],
  cv: [line('Opening cv-alex-radulescu.pdf ...', '#FFBD2E')],
  'sudo hire-me': [
    line('[sudo] password for you: ********', '#888'),
    line('Access granted. Drafting email...', '#27C93F'),
  ],
}

export default function Terminal() {
  const [lines, setLines] = useState<TermLine[]>([WELCOME])
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  const runCommand = (cmd: string) => {
    const c = cmd.trim().toLowerCase()
    if (c === 'clear') {
      setLines([])
      setValue('')
      return
    }
    if (c === 'cv') window.open(contact.cv, '_blank')
    if (c === 'sudo hire-me') {
      setTimeout(() => {
        window.location.href = `mailto:${contact.email}?subject=You%27re%20hired`
      }, 900)
    }
    const echo = line('alex@portfolio:~$ ' + cmd, '#27C93F')
    const response = RESPONSES[c] ?? (c ? [line(`command not found: ${c} — try \`help\``, '#FF5F56')] : [])
    setLines((prev) => [...prev, echo, ...response])
    setValue('')
  }

  return (
    <section id="terminal" className="scroll-mt-[52px] border-b-[3px] border-ink bg-[#0A0A0A] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-[860px] border-[1.5px] border-[#333] bg-[#050505] shadow-[0_0_0_6px_rgba(255,255,255,.03)]">
        <div className="flex items-center gap-2 border-b-[1.5px] border-[#333] bg-ink px-3.5 py-2.5">
          <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F56]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#FFBD2E]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#27C93F]" />
          <span className="ml-2 font-mono text-xs text-[#888]">alex@portfolio — try `help`</span>
        </div>
        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="max-h-[320px] min-h-[220px] cursor-text overflow-y-auto p-[18px] font-mono text-[13.5px] leading-[1.65]"
        >
          {lines.map((termLine, i) => (
            <div key={i} className="whitespace-pre-wrap" style={{ color: termLine.color }}>
              {termLine.text}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-[#27C93F]">alex@portfolio:~$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') runCommand(value)
              }}
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
              className="flex-1 border-none bg-transparent font-mono text-[13.5px] text-white outline-none"
            />
            <span className="animate-blink h-4 w-2 flex-none bg-[#27C93F]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
