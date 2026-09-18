import Link from 'next/link'
import type { Book } from '@/lib/data'
import { BookCard } from './book-card'

export function BookTimelineItem({ book }: { book: Book }) {
  return (
    <div className="relative flex gap-6 pl-12 lg:w-72 lg:shrink-0 lg:flex-col lg:gap-0 lg:pl-0 lg:pt-16">
      {/* Node on the timeline */}
      <span
        aria-hidden="true"
        className="absolute left-[10px] top-1.5 z-10 size-4 rounded-full border-2 border-accent bg-background lg:left-1/2 lg:top-[54px] lg:-translate-x-1/2"
      />
      {/* Year marker */}
      <div className="lg:absolute lg:left-0 lg:top-0 lg:w-full lg:text-center">
        <span className="font-serif text-2xl font-semibold text-accent lg:text-xl">
          {book.year}
        </span>
      </div>

      <div className="flex-1 lg:mt-4">
        <div className="mx-auto max-w-[200px]">
          <BookCard book={book} />
        </div>
        <div className="mt-4 lg:text-center">
          <Link href={`/books/${book.id}`}>
            <h3 className="text-balance font-serif text-lg font-semibold leading-snug text-foreground transition-colors hover:text-accent">
              {book.title}
            </h3>
          </Link>
          {book.subtitle && (
            <p className="mt-1 text-sm italic text-muted-foreground">{book.subtitle}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {book.shortDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
