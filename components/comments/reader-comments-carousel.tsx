'use client'

import { useCallback, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { comments } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CommentCard } from './comment-card'
import { cn } from '@/lib/utils'

export function ReaderCommentsCarousel() {
  const [index, setIndex] = useState(0)
  const count = comments.length
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  )
  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <section id="comments" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Voices from the page"
            title="What Readers Say"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reflections shared by readers around the world."
          />
        </Reveal>

        <Reveal
          className="mt-14"
          delay={120}
        >
          <div
            className="relative outline-none"
            role="group"
            aria-roledescription="carousel"
            aria-label="Reader comments"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {comments.map((comment, i) => (
                  <div
                    key={comment.id}
                    className="w-full shrink-0 px-1"
                    aria-hidden={i !== index}
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}`}
                  >
                    <CommentCard comment={comment} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous comment"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose comment">
                {comments.map((comment, i) => (
                  <button
                    key={comment.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to comment ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-accent/50',
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next comment"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
