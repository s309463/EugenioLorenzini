import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CalendarDays } from 'lucide-react'
import { books, getBook } from '@/lib/data'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Reveal } from '@/components/reveal'
import { PresentationCard } from '@/components/books/presentation-card'
import { AwardItem } from '@/components/books/award-item'
import { getPastPresentations } from '@/lib/presentations'
import { BookLocalizedCopy, BookLocalizedHeading } from '@/components/books/book-localized-copy'
import { BookSectionHeading } from '@/components/books/book-section-heading'
import { ReviewCard } from '@/components/books/review-card'
import { BookBackLink } from '@/components/books/book-back-link'
import { ReaderCommentsCarousel } from '@/components/comments/reader-comments-carousel'

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const book = getBook(id)
  if (!book) return { title: 'Libro non trovato' }
  return {
    title: `${book.title} — Eugenio Lorenzini`,
    description: book.shortDescription,
  }
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const book = getBook(id)
  if (!book) notFound()
  const storedPresentations = await getPastPresentations(book.id)
  const presentations = storedPresentations.length > 0 ? storedPresentations : book.presentations

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-secondary/40 pb-16 pt-28 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-6xl px-6">
            <BookBackLink />

            <div className="mt-10 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={book.coverImage || '/placeholder.svg'}
                  alt={`Cover of ${book.title}`}
                  className="w-full max-w-[280px] rounded-lg object-contain shadow-2xl ring-1 ring-border"
                />
              </Reveal>

              <Reveal delay={120} className="flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium normal-case tracking-[0.25em] text-accent">
                  <CalendarDays className="size-4" />
                  {book.year}
                </span>
                <BookLocalizedHeading book={book} />
                <p className="mt-6 max-w-xl text-pretty leading-relaxed text-foreground/90">
                  <BookLocalizedCopy book={book} part="short" />
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Plot */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <BookLocalizedCopy book={book} part="plot" />
            </Reveal>
          </div>
        </section>

        {/* Official reviews */}
        {book.officialReviews && book.officialReviews.length > 0 && (
          <section className="bg-secondary/40 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <BookSectionHeading section="reviews" />
              </Reveal>

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {book.officialReviews.map((review, i) => (
                  <Reveal key={review.id} delay={i * 80}>
                    <ReviewCard review={review} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Presentations */}
        {presentations.length > 0 && (
          <section className="bg-secondary/40 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <BookSectionHeading section="presentations" />
              </Reveal>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {presentations.map((presentation, i) => (
                  <Reveal key={presentation.id} delay={i * 80}>
                    <PresentationCard presentation={presentation} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {book.id === 'Progetto-Liberty' && <ReaderCommentsCarousel />}

        {/* Awards */}
        {(book.awards ?? []).length > 0 && (
          <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <BookSectionHeading section="awards" />
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {(book.awards ?? []).map((award, i) => (
                  <Reveal key={award.id} delay={i * 80}>
                    <AwardItem award={award} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
