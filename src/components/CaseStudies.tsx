import { useRef, useState } from 'react'
import { projects } from '../data/content'
import type { Project } from '../data/content'

// Mobile: one image at a time with swipe (scroll-snap) + arrows + counter.
// From md up it reverts to the design's side-by-side grid.
function ImageStrip({ project }: { project: Project }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const count = project.images.length

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
            key={shot}
            src={shot}
            alt={`${project.name} screenshot`}
            className="block h-[300px] w-full flex-none snap-start border-r border-[#444] object-cover object-top grayscale-[.15] hover:grayscale-0"
          />
        ))}
      </div>
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => slideBy(-1)}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white bg-ink/80 font-mono text-white active:bg-accent md:hidden"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => slideBy(1)}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white bg-ink/80 font-mono text-white active:bg-accent md:hidden"
          >
            →
          </button>
          <span
            data-slide-counter
            className="absolute bottom-3 right-3 bg-ink/85 px-2 py-1 font-mono text-[11px] text-white md:hidden"
          >
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-reveal className="m-4 border-2 border-white md:m-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white px-6 py-[18px]">
        <div className="flex flex-wrap items-baseline gap-4">
          <span className="font-display text-[clamp(26px,3.4vw,44px)] uppercase text-accent">{project.name}</span>
          <span className="text-sm font-semibold text-[#ccc]">{project.sub}</span>
        </div>
        <div className="flex flex-none items-center gap-2.5">
          <span className="whitespace-nowrap border border-[#666] px-2.5 py-1 font-mono text-[11px] text-[#ddd]">
            {project.badge}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-accent px-[11px] py-[5px] font-mono text-[11px] font-semibold text-white hover:bg-white hover:text-ink"
            >
              VISIT SITE ↗
            </a>
          )}
        </div>
      </div>
      {project.images.length > 0 && <ImageStrip project={project} />}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border-b border-[#444] px-6 py-[22px] md:border-b-0 md:border-r">
          <div className="mb-2.5 font-mono text-[11px] text-accent">01 / PROBLEM</div>
          <p className="text-[14.5px] leading-[1.55] text-[#ddd]">{project.problem}</p>
        </div>
        <div className="border-b border-[#444] px-6 py-[22px] md:border-b-0 md:border-r">
          <div className="mb-2.5 font-mono text-[11px] text-accent">02 / SOLUTION</div>
          <p className="text-[14.5px] leading-[1.55] text-[#ddd]">{project.solution}</p>
        </div>
        <div className="px-6 py-[22px]">
          <div className="mb-2.5 font-mono text-[11px] text-accent">03 / RESULT</div>
          <p className="text-[14.5px] font-semibold leading-[1.55] text-white">{project.result}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-[#444] px-6 py-3">
        {project.stack.map((tech) => (
          <span key={tech} className="border border-[#555] bg-[#222] px-[9px] py-[3px] font-mono text-[11px] text-[#eee]">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section id="projects" className="scroll-mt-[52px] border-b-[3px] border-ink bg-ink text-white">
      <div className="sticky top-[49px] z-40 border-b-2 border-white bg-ink px-5 py-2.5 font-display text-[16px] uppercase lg:hidden">
        Case <span className="text-accent">Studies</span>
      </div>
      <div className="hidden flex-wrap items-baseline justify-between gap-4 px-8 pb-2 pt-10 lg:flex">
        <h2 className="font-display text-[clamp(40px,6vw,84px)] uppercase leading-[.95]">
          Case
          <br />
          <span className="text-accent">Studies</span>
        </h2>
        <span className="font-mono text-xs text-[#999]">PROBLEM → SOLUTION → RESULT</span>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </section>
  )
}
