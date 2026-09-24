'use client'

import { CalendarDays, Clock, MapPin, ArrowUpRight } from 'lucide-react'
import type { Presentation } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function PresentationCard({ presentation }: { presentation: Presentation }) {
  const { locale } = useLanguage()
  const title = locale === 'en' ? presentation.titleEn ?? presentation.title : presentation.title
  const location = locale === 'en' ? presentation.locationEn ?? presentation.location : presentation.location
  const description = locale === 'en' ? presentation.descriptionEn ?? presentation.description : presentation.description
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
      {presentation.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={presentation.image || '/placeholder.svg'}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>

        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-accent" aria-hidden="true" />
            {presentation.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            {presentation.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {location}, {presentation.city}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {presentation.link && (
          <a
            href={presentation.link}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            {locale === 'en' ? 'Details' : 'Dettagli'}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  )
}
