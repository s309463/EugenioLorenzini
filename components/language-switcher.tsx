'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-current/20 p-1" aria-label="Language selector">
      <Languages className="ml-1 size-4" aria-hidden="true" />
      {(['it', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`rounded-full px-2 py-1 text-xs font-semibold uppercase transition-colors ${locale === option ? 'bg-accent text-accent-foreground' : 'opacity-70 hover:opacity-100'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
