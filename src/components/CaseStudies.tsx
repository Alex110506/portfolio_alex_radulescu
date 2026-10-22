import { useRef, useState } from 'react'
import { projects } from '../data/content'
import type { Project } from '../data/content'

const VISIBLE_STACK = 5

const labelClass = 'mb-2.5 font-mono text-[11px] font-semibold text-accent'

// Mobile: one image at a time with swipe (scroll-snap) + arrows + counter.
// From md up it reverts to the design's side-by-side grid.
function ImageStrip({ project }: { project: Project }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const count = project.images.length
  const height = project.featured ? 'h-[300px] md:h-[420px]' : 'h-[300px]'
  // From md up, multiple shots sit side by side at roughly half the viewport each.
  const sizes = count > 1 ? '(min-width: 768px) 50vw, 100vw' : '100vw'

  const slideBy = (dir: number) => {
    const track = trackRef.current
    if (track) track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative border-b-2 border-white">
      <div
        ref={trackRef}
        onScroll={(e) => {
          const track = e.currentTarget
          setIndex(Math.round(track.scrollLeft / track.clientWidth))
        }}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto md:grid md:overflow-visible md:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        {project.images.map((shot) => (
          <img
            key={shot.name}
            src={`/assets/shots/${shot.name}-960.jpg`}
            srcSet={`/assets/shots/${shot.name}-960.jpg 960w, /assets/shots/${shot.name}-1920.jpg 1920w`}
            sizes={sizes}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            className={`block ${height} w-full flex-none snap-start border-r border-[#444] object-cover object-top grayscale-[.15] hover:grayscale-0`}
          />
        ))}
      </div>
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={`Previous ${project.name} screenshot`}
            onClick={() => slideBy(-1)}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white bg-ink/80 font-mono text-white active:bg-accent-deep md:hidden"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label={`Next ${project.name} screenshot`}
            onClick={() => slideBy(1)}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white bg-ink/80 font-mono text-white active:bg-accent-deep md:hidden"
          >
            <span aria-hidden="true">→</span>
          </button>
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 bg-ink/85 px-2 py-1 font-mono text-[11px] text-white md:hidden"
          >
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  )
}

function StackChips({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li key={tech} className="border border-[#555] bg-[#222] px-[9px] py-[3px] font-mono text-[11px] text-[#eee]">
          {tech}
        </li>
      ))}
    </ul>
  )
}

// Result leads: it is the line a skimming reader needs. The build detail is one tap away.
function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured
  const visibleStack = project.stack.slice(0, VISIBLE_STACK)
  const moreStack = project.stack.slice(VISIBLE_STACK)

  return (
    <article
      id={project.id}
      data-reveal
      className="m-4 scroll-mt-12 border-2 border-white md:m-8 lg:scroll-mt-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b-2 border-white px-5 py-[18px] md:px-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3
            className={`font-display uppercase leading-none text-accent ${
              featured ? 'text-[clamp(32px,4.8vw,68px)]' : 'text-[clamp(26px,3.4vw,44px)]'
            }`}
          >
            {project.name}
          </h3>
          <p className="text-sm font-semibold text-[#ccc]">{project.sub}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="border border-[#666] px-2.5 py-1 font-mono text-[11px] text-[#ddd]">{project.badge}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap bg-accent-deep px-3.5 font-mono text-xs font-semibold text-white hover:bg-white hover:text-ink md:min-h-0 md:py-[6px]"
            >
              VISIT SITE <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
      {project.images.length > 0 && <ImageStrip project={project} />}
      <div className={`grid grid-cols-1 ${featured ? 'md:grid-cols-[1.3fr_1fr]' : 'md:grid-cols-[1.1fr_1fr]'}`}>
        <div className="border-b border-[#444] px-5 py-6 md:border-b-0 md:border-r md:px-6">
          <p className={labelClass}>RESULT</p>
          <p
            className={`text-pretty font-semibold leading-[1.35] text-white ${
              featured ? 'text-[clamp(20px,2.1vw,28px)]' : 'text-[clamp(18px,1.6vw,21px)]'
            }`}
          >
            {project.result}
          </p>
          <div className="mt-5">
            <StackChips items={visibleStack} label="Main stack" />
          </div>
        </div>
        <div className="px-5 py-6 md:px-6">
          <p className={labelClass}>THE PROBLEM</p>
          <p className="text-pretty text-[15px] leading-[1.55] text-[#ddd]">{project.problem}</p>
          <details className="group mt-5 border-t border-[#444]">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 pt-1 font-mono text-xs font-semibold text-accent hover:text-white [&::-webkit-details-marker]:hidden">
              HOW IT'S BUILT
              <span aria-hidden="true" className="text-lg leading-none transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-pretty text-[14.5px] leading-[1.6] text-[#ddd]">{project.solution}</p>
            {moreStack.length > 0 && (
              <div className="mt-4">
                <StackChips items={moreStack} label="Also used" />
              </div>
            )}
          </details>
        </div>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  const liveCount = projects.filter((project) => project.link).length

  return (
    <section id="projects" className="border-b-[3px] border-ink bg-ink text-white">
      <div className="sticky top-[56px] z-40 flex flex-wrap items-baseline justify-between gap-x-4 border-b-2 border-white bg-ink px-5 py-2 lg:static lg:border-b-0 lg:px-8 lg:pb-2 lg:pt-10">
        <h2 className="font-display text-[16px] uppercase lg:text-[clamp(40px,6vw,84px)] lg:leading-[.95]">
          Case
          <br className="max-lg:hidden" />{' '}
          <span className="text-accent">Studies</span>
        </h2>
        <p className="font-mono text-[11px] text-[#bbb] max-sm:hidden lg:text-xs">
          {projects.length} PROJECTS · {liveCount} LIVE IN PRODUCTION
        </p>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}
