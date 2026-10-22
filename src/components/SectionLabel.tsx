import { Fragment } from 'react'

interface SectionLabelProps {
  // Desktop only: keeps the side label pinned while its section scrolls.
  // Below lg the label always renders as a compact sticky bar under the nav.
  sticky?: boolean
  lines: string[]
}

// Rendered as the section's h2 so screen-reader heading navigation sees every section.
export default function SectionLabel({ sticky = false, lines }: SectionLabelProps) {
  return (
    <h2
      className={`sticky top-[56px] z-40 border-b-[1.5px] border-ink bg-cream px-5 py-2 font-display text-[16px] uppercase lg:border-b-0 lg:border-r-[3px] lg:px-8 lg:py-7 lg:text-[28px] ${
        sticky ? 'lg:self-start' : 'lg:static'
      }`}
    >
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && (
            <>
              <br className="max-lg:hidden" />{' '}
            </>
          )}
          {line}
        </Fragment>
      ))}
    </h2>
  )
}
