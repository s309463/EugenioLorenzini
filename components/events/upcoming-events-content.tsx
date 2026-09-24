'use client'

import { CalendarX } from 'lucide-react'
import type { EventItem } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EventCard } from './event-card'

export function UpcomingEventsContent({ events }: { events: EventItem[] }) {
  const { t } = useLanguage()

  return (
    <section id="events" className="scroll-mt-20 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} description={t.events.description} />
        </Reveal>
        {events.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {events.map((event, i) => <Reveal key={event.id} delay={i * 80}><EventCard event={event} /></Reveal>)}
          </div>
        ) : (
          <Reveal className="mt-14">
            <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-card px-6 py-20 text-center">
              <CalendarX className="size-10 text-muted-foreground" aria-hidden="true" />
              <p className="font-serif text-xl text-foreground">{t.events.emptyTitle}</p>
              <p className="max-w-sm text-sm text-muted-foreground">{t.events.emptyDescription}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
