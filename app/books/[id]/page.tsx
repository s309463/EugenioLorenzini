import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { books, getBook } from '@/lib/data'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PresentationCard } from '@/components/books/presentation-card'
import { AwardItem } from '@/components/books/award-item'

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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-secondary/40 pb-16 pt-28 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/#books"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" />
              Torna a tutti i libri
            </Link>

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
                <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
                  <CalendarDays className="size-4" />
                  {book.year}
                </span>
                <h1 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
                  {book.title}
                </h1>
                {book.subtitle && (
                  <p className="mt-4 text-pretty font-serif text-xl italic text-muted-foreground">
                    {book.subtitle}
                  </p>
                )}
                <p className="mt-6 max-w-xl text-pretty leading-relaxed text-foreground/90">
                  {book.shortDescription}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Plot */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <SectionHeading eyebrow="La storia" title="Riassunto" />
              <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                {book.plot.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Presentations */}
        {book.presentations.length > 0 && (
          <section className="bg-secondary/40 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <SectionHeading
                  title="Presentazioni passate"
                  description="Lorem ipsum dolor sit amet. Public presentations and readings for this title."
                />
              </Reveal>
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {book.presentations.map((presentation, i) => (
                  <Reveal key={presentation.id} delay={i * 80}>
                    <PresentationCard presentation={presentation} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Awards */}
        {book.awards.length > 0 && (
          <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Riconoscimenti"
                  title="Premi"
                  description="Lorem ipsum dolor sit amet. Honours and distinctions received by this work."
                />
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {book.awards.map((award, i) => (
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
