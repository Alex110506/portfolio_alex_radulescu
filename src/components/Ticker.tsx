const ITEMS =
  'TYPESCRIPT ✦ PYTHON ✦ REACT ✦ NODE.JS ✦ FASTAPI ✦ POSTGRESQL ✦ DOCKER ✦ AI AGENTS ✦ RAG ✦ CI/CD ✦ '

export default function Ticker() {
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-ink py-3 text-white">
      <div className="animate-marquee flex w-max whitespace-nowrap font-display text-xl tracking-[.04em]">
        <span className="pr-6">{ITEMS}</span>
        <span className="pr-6" aria-hidden="true">
          {ITEMS}
        </span>
      </div>
    </div>
  )
}
