import Link from 'next/link'
import type { Book } from '@/lib/data'
import { BookCard } from './book-card'
import { useLanguage } from '@/lib/i18n'

export function BookTimelineItem({ book }: { book: Book }) {
  const { locale } = useLanguage()
  const title = locale === 'en' ? book.titleEn ?? book.title : book.title
  const subtitle = locale === 'en' ? book.subtitleEn ?? book.subtitle : book.subtitle
  const description = locale === 'en' ? book.shortDescriptionEn ?? book.shortDescription : book.shortDescription

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
        <div className="mx-auto w-full max-w-full">
          <BookCard book={book} />
        </div>
        <div className="mt-4 text-center">
          <Link href={`/books/${book.id}`}>
            <h3 className="text-balance font-serif text-lg font-semibold leading-snug text-foreground transition-colors hover:text-accent">
              {title}
            </h3>
          </Link>
          {subtitle && (
            <p className="mt-1 text-sm italic text-muted-foreground">{subtitle}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
