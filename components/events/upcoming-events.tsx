import { events } from '@/lib/data'
import { getUpcomingEvents } from '@/lib/presentations'
import { UpcomingEventsContent } from './upcoming-events-content'

export async function UpcomingEvents() {
  const storedEvents = await getUpcomingEvents()
  const visibleEvents = storedEvents.length > 0 ? storedEvents : events

  return <UpcomingEventsContent events={visibleEvents} />
}
