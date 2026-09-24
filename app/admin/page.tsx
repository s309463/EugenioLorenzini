'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/lib/i18n'
import { books } from '@/lib/data'
import { createClient } from '@/lib/supabase/client'

const initialForm = {
  titleIt: '', titleEn: '', date: '', time: '', locationIt: '', locationEn: '', city: '',
  descriptionIt: '', descriptionEn: '', link: '', image: null as File | null,
}

export default function AdminPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => {
      if (!data.user) router.replace('/admin/login')
    })
  }, [router])

  function update(field: keyof typeof initialForm, value: string | File | null) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')
    const supabase = createClient()
    let imageUrl: string | null = null

    if (form.image) {
      const path = `${crypto.randomUUID()}-${form.image.name}`
      const upload = await supabase.storage.from('presentation-images').upload(path, form.image)
      if (upload.error) {
        setError(upload.error.message)
        setLoading(false)
        return
      }
      imageUrl = supabase.storage.from('presentation-images').getPublicUrl(path).data.publicUrl
    }

    const { error: insertError } = await supabase.from('presentations').insert({
      book_id: [...books].sort((a, b) => b.year - a.year)[0]?.id,
      title_it: form.titleIt,
      title_en: form.titleEn,
      event_date: form.date,
      time: form.time,
      location_it: form.locationIt,
      location_en: form.locationEn,
      city: form.city,
      description_it: form.descriptionIt,
      description_en: form.descriptionEn,
      link: form.link || null,
      image_url: imageUrl,
    })

    if (insertError) setError(insertError.message)
    else {
      setMessage(t.admin.saved)
      setForm(initialForm)
    }
    setLoading(false)
  }

  async function signOut() {
    await createClient().auth.signOut()
    router.replace('/admin/login')
  }

  return (
    <main className="min-h-screen bg-secondary/40 px-6 py-10 md:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">Eugenio Lorenzini</p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground">{t.admin.dashboard}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Le date passate verranno collegate automaticamente a Progetto Liberty.</p>
          </div>
          <div className="flex items-center gap-3"><LanguageSwitcher /><button onClick={signOut} className="rounded-md border border-border px-3 py-2 text-sm hover:border-accent">{t.admin.signOut}</button></div>
        </header>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="font-serif text-2xl font-semibold text-foreground">{t.admin.addPresentation}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label={`${t.admin.title} (IT)`} value={form.titleIt} onChange={(value) => update('titleIt', value)} required />
            <Field label={`${t.admin.title} (EN)`} value={form.titleEn} onChange={(value) => update('titleEn', value)} required />
            <Field label={t.admin.date} type="date" value={form.date} onChange={(value) => update('date', value)} required />
            <Field label={t.admin.time} value={form.time} onChange={(value) => update('time', value)} required />
            <Field label={`${t.admin.location} (IT)`} value={form.locationIt} onChange={(value) => update('locationIt', value)} required />
            <Field label={`${t.admin.location} (EN)`} value={form.locationEn} onChange={(value) => update('locationEn', value)} required />
            <Field label={t.admin.city} value={form.city} onChange={(value) => update('city', value)} required />
            <Field label={t.admin.link} value={form.link} onChange={(value) => update('link', value)} type="url" />
            <TextArea label={`${t.admin.description} (IT)`} value={form.descriptionIt} onChange={(value) => update('descriptionIt', value)} required />
            <TextArea label={`${t.admin.description} (EN)`} value={form.descriptionEn} onChange={(value) => update('descriptionEn', value)} required />
            <label className="block text-sm font-medium text-foreground md:col-span-2">{t.admin.photo}<input type="file" accept="image/*" onChange={(event) => update('image', event.target.files?.[0] ?? null)} className="mt-2 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm" /></label>
          </div>
          {message && <p className="mt-5 text-sm text-green-700">{message}</p>}
          {error && <p className="mt-5 text-sm text-destructive">{error || t.admin.error}</p>}
          <button disabled={loading} className="mt-7 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60">{loading ? t.admin.saving : t.admin.save}</button>
        </form>
      </div>
    </main>
  )
}

function Field({ label, value, onChange, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label className="block text-sm font-medium text-foreground">{label}<input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-accent" /></label>
}

function TextArea({ label, value, onChange, required = false }: { label: string; value: string; onChange: (value: string) => void; required?: boolean }) {
  return <label className="block text-sm font-medium text-foreground">{label}<textarea required={required} value={value} onChange={(event) => onChange(event.target.value)} rows={5} className="mt-2 w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-accent" /></label>
}
