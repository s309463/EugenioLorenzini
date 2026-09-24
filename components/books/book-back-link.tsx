'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function BookBackLink() {
  const { locale } = useLanguage()
  return (
    <Link href="/#books" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
      <ArrowLeft className="size-4" />
      {locale === 'en' ? 'Back to all books' : 'Torna a tutti i libri'}
    </Link>
  )
}