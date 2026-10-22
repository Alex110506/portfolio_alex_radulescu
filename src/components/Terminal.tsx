import { useEffect, useRef, useState } from 'react'
import { awards, contact, projects, skills } from '../data/content'

interface TermLine {
  text: string
  color: string
}

const line = (text: string, color = '#ccc'): TermLine => ({ text, color })

const WELCOME = line('Welcome to alexOS v1.0 — type `help` to see commands.', '#888')

// Everything factual comes from content.ts so the terminal can't drift from the page.
const RESPONSES: Record<string, TermLine[]> = {
  help: [
    line('Available commands:', '#888'),
    line('  whoami       — who is this guy'),
    line('  projects     — things I shipped'),
    line('  stack        — tech I use daily'),
    line('  awards       — trophy shelf'),
    line('  contact      — reach me'),
    line('  cv           — grab the PDF'),
    line('  clear        — wipe the screen'),
    line('  sudo hire-me — do it'),
  ],
  whoami: [
    line('Alexandru-Marius Rădulescu. 20. Software engineer, Timișoara.'),
    line('Full-stack + AI tooling. Currently: SWE intern @ Nokia.'),
    line(contact.availability + '.'),
  ],
  projects: projects.map((p) => line(`${p.name.padEnd(18)} ${p.sub}${p.link ? `  ${p.link}` : ''}`)),
  stack: skills.map((group) => line(`${group.label.padEnd(10)} ${group.items.join(' · ')}`)),
  awards: awards.map((award) => line(`${award.year}  ${award.title}`)),
  contact: [
    line(`email:    ${contact.email}`),
    line(`phone:    ${contact.phoneDisplay}`),
    line(`github:   ${contact.github.replace('https://', '')}`),
    line(`linkedin: ${decodeURI(contact.linkedin).replace('https://www.linkedin.com', '')}`),
  ],
  cv: [line(`Opening ${contact.cv.split('/').pop()} ...`, '#FFBD2E')],
  'sudo hire-me': [
    line('[sudo] password for you: ********', '#888'),
    line('Access granted.', '#27C93F'),
    line(`Write to ${contact.email}`),
    line('Open your mail app now? [y/N]', '#FFBD2E'),
  ],
}
RESPONSES.ls = RESPONSES.help

export default function Terminal() {
  const [lines, setLines] = useState<TermLine[]>([WELCOME])
  const [value, setValue] = useState('')
  // Set after `sudo hire-me`: the next input answers the y/N prompt instead of running a command.
  const [confirmingMail, setConfirmingMail] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  const runCommand = (cmd: string) => {
    const c = cmd.trim().toLowerCase()
    const echo = line('alex@portfolio:~$ ' + cmd, '#27C93F')
    setValue('')

    if (confirmingMail) {
      setConfirmingMail(false)
      const yes = c === 'y' || c === 'yes'
      if (yes) window.location.href = `mailto:${contact.email}?subject=You%27re%20hired`
      setLines((prev) => [
        ...prev,
        echo,
        yes ? line('Opening your mail app ...', '#27C93F') : line('No problem. The address above is all yours.', '#888'),
      ])
      return
    }
    if (c === 'clear') {
      setLines([])
      return
    }
    if (c === 'cv') window.open(contact.cv, '_blank', 'noopener')
    if (c === 'sudo hire-me') setConfirmingMail(true)
    const response = RESPONSES[c] ?? (c ? [line(`command not found: ${c} — try \`help\``, '#FF5F56')] : [])
    setLines((prev) => [...prev, echo, ...response])
  }

  return (
    <section id="terminal" aria-label="Terminal" className="border-b-[3px] border-ink bg-[#0A0A0A] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-[860px] border-[1.5px] border-[#333] bg-[#050505] shadow-[0_0_0_6px_rgba(255,255,255,.03)] focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-accent">
        <div className="flex items-center gap-2 border-b-[1.5px] border-[#333] bg-ink px-3.5 py-2.5">
          <span aria-hidden="true" className="h-[11px] w-[11px] rounded-full bg-[#FF5F56]" />
          <span aria-hidden="true" className="h-[11px] w-[11px] rounded-full bg-[#FFBD2E]" />
          <span aria-hidden="true" className="h-[11px] w-[11px] rounded-full bg-[#27C93F]" />
          <span className="ml-2 font-mono text-xs text-[#999]">alex@portfolio — try `help`</span>
        </div>
        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="max-h-[320px] min-h-[220px] cursor-text overflow-y-auto p-[18px] font-mono text-[13.5px] leading-[1.65]"
        >
          <div role="log" aria-live="polite" aria-label="Terminal output">
            {lines.map((termLine, i) => (
              <div key={i} className="whitespace-pre-wrap break-words" style={{ color: termLine.color }}>
                {termLine.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex-none text-[#27C93F]">
              alex@portfolio:~$
            </span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') runCommand(value)
              }}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="none"
              enterKeyHint="send"
              aria-label={confirmingMail ? 'Open your mail app? Type y or n' : 'Terminal command, type help for a list'}
              className="min-w-0 flex-1 border-none bg-transparent font-mono text-[13.5px] text-white outline-none"
            />
            <span className="animate-blink h-4 w-2 flex-none bg-[#27C93F]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
