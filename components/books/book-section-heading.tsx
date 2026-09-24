'use client'

import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/lib/i18n'

export function BookSectionHeading({ section }: { section: 'reviews' | 'presentations' | 'awards' }) {
  const { t } = useLanguage()
  const content = {
    reviews: { title: t.book.reviews, description: t.book.reviewsDescription },
    presentations: { title: t.book.pastPresentations },
    awards: { eyebrow: t.book.awardsEyebrow, title: t.book.awards, description: t.book.awardsDescription },
  }[section]

  return <SectionHeading {...content} />
}