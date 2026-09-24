'use client'

import { Clock, MapPin, ArrowUpRight } from 'lucide-react'
import type { EventItem } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

function splitDate(date: string, locale: 'it' | 'en') {
  if (date === 'coming soon') {
    return locale === 'en'
      ? { day: 'coming', month: 'soon' }
      : { day: 'in', month: 'arrivo' }
  }

  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  if (!isoMatch) {
    const [day, ...monthParts] = date.split(' ')
    return { day, month: monthParts.join(' ') }
  }

  const [, , monthNumber, dayNumber] = isoMatch
  const italianMonths = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
  const englishMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  return {
    day: dayNumber,
    month: (locale === 'en' ? englishMonths : italianMonths)[Number(monthNumber) - 1],
  }
}

export function EventCard({ event }: { event: EventItem }) {
  const { locale, t } = useLanguage()
  const { day, month } = splitDate(event.date, locale)
  const title = locale === 'en' ? event.titleEn ?? event.title : event.title
  const location = locale === 'en' ? event.locationEn ?? event.location : event.location
  const description = locale === 'en' ? event.descriptionEn ?? event.description : event.description
  const time = locale === 'en' ? event.timeEn ?? event.time : event.time

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg sm:flex-row">
      {/* Prominent date block */}
      <div className="flex shrink-0 flex-row items-center justify-center gap-2 bg-primary px-6 py-4 text-primary-foreground sm:w-32 sm:flex-col sm:gap-0 sm:py-8">
        <span className="font-serif text-4xl font-semibold leading-none">{day}</span>
        <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
          {month}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            {time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {location}, {event.city}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {event.link && (
          <a
            href={event.link}
            className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            {t.events.moreInformation}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  )
}
