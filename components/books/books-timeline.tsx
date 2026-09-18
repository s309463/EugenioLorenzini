'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { books } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BookTimelineItem } from './book-timeline-item'

export function BooksTimeline() {
  const ordered = [...books].sort((a, b) => a.year - b.year)

  const booksContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = () => {
    const container = booksContainerRef.current

    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
    )
  }

  const scrollBooks = (direction: 'left' | 'right') => {
    booksContainerRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    updateScrollButtons()

    const container = booksContainerRef.current
    if (!container) return

    container.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      container.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  return (
    <section id="books" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Un viaggio nel tempo"
            title="Libri"
            description="Ho pubblicato quattro libri, tutti con un elemento comune: la Storia, in particolar modo i primi 3 sono romanzi storici, mentre l'ultimo pubblicato la Storia diventa un pretesto per raccontare la vita di persone semplici."
          />
        </Reveal>
      </div>

      <Reveal className="mt-16">
        {/* Horizontally scrollable on desktop, vertical timeline on mobile */}
        <div className="relative mx-auto max-w-6xl px-6">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollBooks('left')}
              aria-label="Scorri verso sinistra"
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground shadow-md transition-transform hover:scale-110"
            >
              <ChevronLeft className="size-5" />
            </button>
          )}

          <div
            ref={booksContainerRef}
            className="overflow-x-auto scroll-smooth pb-5 lg:px-12"
          >
            <div className="flex min-w-max flex-col gap-12 lg:flex-row lg:gap-8 lg:pt-4">
              {ordered.map((book, i) => (
                <Reveal key={book.id} delay={i * 90}>
                  <BookTimelineItem book={book} />
                </Reveal>
              ))}
            </div>
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollBooks('right')}
              aria-label="Scorri verso destra"
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-accent p-3 text-accent-foreground shadow-md transition-transform hover:scale-110"
            >
              <ChevronRight className="size-5" />
            </button>
          )}
        </div>         
      </Reveal>
    </section>
  )
}
