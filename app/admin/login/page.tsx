'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/lib/i18n'
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')

    if (!isSupabaseConfigured()) {
      setError(t.admin.configuration)
      setLoading(false)
      return
    }

    try {
      const signInRequest = createClient().auth.signInWithPassword({ email, password })
      const result = await Promise.race([
        signInRequest,
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Login timeout')), 10000)),
      ])
      if (result.error) {
        setError(result.error.message)
        setLoading(false)
        return
      }
    } catch {
      setError(t.admin.error)
      setLoading(false)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/40 px-6 py-16">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-xl">
        <div className="mb-8 flex justify-end"><LanguageSwitcher /></div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">Eugenio Lorenzini</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground">{t.admin.login}</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-foreground">
            {t.admin.email}
            <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-accent" />
          </label>
          <label className="block text-sm font-medium text-foreground">
            {t.admin.password}
            <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-accent" />
          </label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button disabled={loading} className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">
            {loading ? t.admin.saving : t.admin.signIn}
          </button>
        </form>
      </div>
    </main>
  )
}
