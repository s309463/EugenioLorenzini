import { books, type EventItem, type Presentation } from '@/lib/data'
import { createClient } from '@/lib/supabase/server'

const isConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)

export function latestBookId() {
  return [...books].sort((a, b) => b.year - a.year)[0]?.id
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  if (!isConfigured) return []

  const supabase = await createClient()
  const { data } = await supabase
    .from('presentations')
    .select('id, title_it, title_en, event_date, time, location_it, location_en, city, description_it, description_en, link, image_url')
    .gte('event_date', new Date().toISOString().slice(0, 10))
    .order('event_date', { ascending: true })

  return (data ?? []).map((event) => ({
    id: event.id,
    title: event.title_it,
    titleEn: event.title_en,
    date: event.event_date,
    time: event.time,
    location: event.location_it,
    locationEn: event.location_en,
    city: event.city,
    description: event.description_it,
    descriptionEn: event.description_en,
    link: event.link ?? undefined,
    image: event.image_url ?? undefined,
  }))
}

export async function getPastPresentations(bookId: string): Promise<Presentation[]> {
  if (!isConfigured) return []

  const supabase = await createClient()
  const { data } = await supabase
    .from('presentations')
    .select('id, title_it, title_en, event_date, time, location_it, location_en, city, description_it, description_en, link, image_url')
    .eq('book_id', bookId)
    .lt('event_date', new Date().toISOString().slice(0, 10))
    .order('event_date', { ascending: false })

  return (data ?? []).map((event) => ({
    id: event.id,
    title: event.title_it,
    titleEn: event.title_en,
    date: event.event_date,
    time: event.time,
    location: event.location_it,
    locationEn: event.location_en,
    city: event.city,
    description: event.description_it,
    descriptionEn: event.description_en,
    link: event.link ?? undefined,
    image: event.image_url ?? undefined,
  }))
}
