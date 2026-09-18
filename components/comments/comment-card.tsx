import { Quote } from 'lucide-react'
import type { ReaderComment } from '@/lib/data'

export function CommentCard({ comment }: { comment: ReaderComment }) {
  const name = comment.name?.trim() || 'Anonymous Reader'

  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-sm md:p-10">
      <Quote className="size-8 text-accent/70" aria-hidden="true" />
      <blockquote className="mt-6 flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground md:text-xl">
        {comment.comment}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span
          className="flex size-10 items-center justify-center rounded-full bg-accent/15 font-serif text-sm font-semibold text-accent"
          aria-hidden="true"
        >
          {name.charAt(0)}
        </span>
        <span className="text-sm font-medium tracking-wide text-foreground">{name}</span>
      </figcaption>
    </figure>
  )
}
