 'use client'

import { books } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BookTimelineItem } from './book-timeline-item'
import { useLanguage } from '@/lib/i18n'

export function BooksTimeline() {
  const { t } = useLanguage()
  const ordered = [...books].sort((a, b) => a.year - b.year)

  return (
    <section id="books" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.books.eyebrow}
            title={t.books.title}
            description={t.books.description}
          />
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <div className="relative mx-auto max-w-6xl px-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border lg:block"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {ordered.map((book, i) => (
            <Reveal key={book.id} delay={i * 90}>
              <BookTimelineItem book={book} />
            </Reveal>
          ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
