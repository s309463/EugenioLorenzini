 'use client'

import { Award as AwardIcon } from 'lucide-react'
import type { Award } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function AwardItem({ award }: { award: Award }) {
  const { locale } = useLanguage()
  const name = locale === 'en' ? award.nameEn ?? award.name : award.name
  const organization = locale === 'en' ? award.organizationEn ?? award.organization : award.organization
  const description = locale === 'en' ? award.descriptionEn ?? award.description : award.description

  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
      <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
        <AwardIcon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h4 className="font-serif text-lg font-semibold text-foreground">{name}</h4>
          <span className="text-sm font-medium text-accent">{award.year}</span>
        </div>
        {award.organization && (
          <p className="mt-0.5 text-sm text-muted-foreground">{organization}</p>
        )}
        {award.description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}
