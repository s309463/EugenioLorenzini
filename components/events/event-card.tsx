import { Clock, MapPin, ArrowUpRight } from 'lucide-react'
import type { EventItem } from '@/lib/data'

function splitDate(date: string) {
  const [day, month] = date.split(' ')
  return { day, month }
}

export function EventCard({ event }: { event: EventItem }) {
  const { day, month } = splitDate(event.date)

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
        <h3 className="font-serif text-xl font-semibold text-foreground">{event.title}</h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {event.location}, {event.city}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>

        {event.link && (
          <a
            href={event.link}
            className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            More information
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  )
}
