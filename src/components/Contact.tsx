import SectionLabel from './SectionLabel'
import EmailCopy from './EmailCopy'
import { contact } from '../data/content'

// Sits right after the case studies so the ask follows the proof.
export default function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 border-b-[3px] border-ink lg:grid-cols-[280px_1fr]">
      <SectionLabel lines={['Get in', 'touch']} />
      <div className="px-5 py-8 lg:px-8 lg:py-10">
        <p className="mb-6 max-w-[40rem] text-pretty text-[clamp(19px,1.7vw,22px)] font-medium leading-[1.45]">
          Hiring an intern or need something built? I'm open to internships and freelance work, in Timișoara or
          remote.
        </p>
        <EmailCopy />
        <a
          href={contact.cv}
          download="CV-Alex-Radulescu.pdf"
          className="mt-2 inline-flex min-h-11 items-center gap-2 border-2 border-ink px-4 font-mono text-xs font-semibold tracking-[.08em] hover:bg-ink hover:text-white"
        >
          DOWNLOAD CV <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
