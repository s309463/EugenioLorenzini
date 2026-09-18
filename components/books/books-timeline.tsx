import { books } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BookTimelineItem } from './book-timeline-item'

export function BooksTimeline() {
  const ordered = [...books].sort((a, b) => a.year - b.year)

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
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[calc(1.5rem+12px)] top-0 w-px bg-border lg:hidden"
            />

            <div className="overflow-x-auto pb-5">
              <div className="flex min-w-max flex-col gap-12 lg:flex-row lg:gap-8 lg:pt-4">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-6 right-6 top-[62px] hidden h-px bg-border lg:block"
                />

                {ordered.map((book, i) => (
                  <Reveal key={book.id} delay={i * 90}>
                    <BookTimelineItem book={book} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
      </Reveal>
    </section>
  )
}
