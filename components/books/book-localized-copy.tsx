'use client'

import type { Book } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'
import { SectionHeading } from '@/components/section-heading'

type Props = {
  book: Book
  part: 'short' | 'plot'
}

export function BookLocalizedCopy({ book, part }: Props) {
  const { locale, t } = useLanguage()
  const shortDescription = locale === 'en' ? book.shortDescriptionEn ?? book.shortDescription : book.shortDescription
  const plot = locale === 'en' ? book.plotEn ?? book.plot : book.plot

  if (part === 'short') return <>{shortDescription}</>

  return (
    <>
      <SectionHeading eyebrow={t.book.story} title={t.book.summary} />
      <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
        {plot.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </>
  )
}

export function BookLocalizedHeading({ book }: { book: Book }) {
  const { locale } = useLanguage()
  const title = locale === 'en' ? book.titleEn ?? book.title : book.title
  const subtitle = locale === 'en' ? book.subtitleEn ?? book.subtitle : book.subtitle

  return (
    <>
      <h1 className="mt-4 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">{title}</h1>
      {subtitle && <p className="mt-4 text-pretty font-serif text-xl italic text-muted-foreground">{subtitle}</p>}
    </>
  )
}
