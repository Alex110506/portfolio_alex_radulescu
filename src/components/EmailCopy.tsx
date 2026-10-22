import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/content'

type Status = 'idle' | 'copied' | 'failed'

const TONES = {
  cream: {
    email: 'text-ink hover:text-accent-deep',
    button: 'bg-ink text-white hover:bg-accent-deep',
    note: 'text-ink',
  },
  accent: {
    email: 'text-ink hover:text-white',
    button: 'bg-ink text-white hover:bg-white hover:text-ink',
    note: 'text-ink',
  },
}

// The address is always visible as text: mailto alone fails silently for anyone on webmail.
export default function EmailCopy({ tone = 'cream', size = 'text-[clamp(18px,2.6vw,36px)]' }: { tone?: keyof typeof TONES; size?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const emailRef = useRef<HTMLAnchorElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const styles = TONES[tone]

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setStatus('copied')
    } catch {
      // Clipboard API can be blocked (insecure context, permissions policy). Select the
      // text, try the legacy copy command, and if that fails too ⌘C / Ctrl+C still works.
      if (emailRef.current) window.getSelection()?.selectAllChildren(emailRef.current)
      setStatus(document.execCommand('copy') ? 'copied' : 'failed')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          ref={emailRef}
          href={`mailto:${contact.email}`}
          className={`inline-block break-all py-1.5 font-display leading-[1.1] ${size} ${styles.email}`}
        >
          {contact.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className={`inline-flex min-h-11 items-center px-4 font-mono text-xs font-semibold tracking-[.08em] ${styles.button}`}
        >
          {status === 'copied' ? 'COPIED' : 'COPY EMAIL'}
        </button>
      </div>
      <p aria-live="polite" className={`mt-2 min-h-[1.25em] font-mono text-xs ${styles.note}`}>
        {status === 'copied' && 'Email address copied to your clipboard.'}
        {status === 'failed' && 'Couldn’t copy automatically. The address is selected: press ⌘C or Ctrl+C.'}
      </p>
    </div>
  )
}
