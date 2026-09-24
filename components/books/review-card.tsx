'use client'

import type { OfficialReview } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function ReviewCard({ review }: { review: OfficialReview }) {
  const { locale } = useLanguage()
  const quote = locale === 'en' ? review.quoteEn ?? review.quote : review.quote
  const date = locale === 'en' ? review.dateEn ?? review.date : review.date

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-[0.25em] text-accent">{review.source}</span>
        {date && <span className="text-sm text-muted-foreground">{date}</span>}
      </div>
      <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">“{quote}”</p>
    </article>
  )
}