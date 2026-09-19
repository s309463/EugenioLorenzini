import Link from 'next/link'
import type { Book } from '@/lib/data'
import { BookCard } from './book-card'

export function BookTimelineItem({ book }: { book: Book }) {
  return (
    <div className="min-w-0">
      <div className="relative z-10 mb-3 text-center">
        <span className="inline-block bg-background px-3">
          <span className="font-serif text-xl font-semibold text-accent sm:text-2xl">
            {book.year}
          </span>
        </span>
      </div>

      <div>
        <div className="mx-auto w-full max-w-[200px]">
          <BookCard book={book} />
        </div>
        <div className="mt-4 text-center">
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
