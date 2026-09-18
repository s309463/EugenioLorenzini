import { Award as AwardIcon } from 'lucide-react'
import type { Award } from '@/lib/data'

export function AwardItem({ award }: { award: Award }) {
  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
      <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
        <AwardIcon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h4 className="font-serif text-lg font-semibold text-foreground">{award.name}</h4>
          <span className="text-sm font-medium text-accent">{award.year}</span>
        </div>
        {award.organization && (
          <p className="mt-0.5 text-sm text-muted-foreground">{award.organization}</p>
        )}
        {award.description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{award.description}</p>
        )}
      </div>
    </div>
  )
}
