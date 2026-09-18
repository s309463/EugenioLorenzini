import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Book } from '@/lib/data'

export function BookCard({ book }: { book: Book }) {
  const rotateCover =
  book.id === '1808-quasi-una-storia' || book.id === '179-Gradi'
  return (
    <Link
      href={`/books/${book.id}`}
      className="group block focus:outline-none"
      aria-label={`View details for ${book.title} (${book.year})`}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-card shadow-md ring-1 ring-border">
  <img
    src={book.coverImage || '/placeholder.svg'}
    alt={`Copertina di ${book.title}`}
    className={`h-full w-full object-contain p-1 ${
      rotateCover ? 'rotate-[270deg] scale-[1.55]' : ''
    }`}
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-3 right-3 inline-flex size-9 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}
