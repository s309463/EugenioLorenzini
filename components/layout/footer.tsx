'use client'

import Link from 'next/link'
import { author } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function Footer() {
  const { t } = useLanguage()
  const links = [
    { label: t.nav.biography, href: '/#biography' },
    { label: t.nav.books, href: '/#books' },
    { label: t.nav.events, href: '/#events' },
    { label: t.nav.articles, href: '/#articles' },
    { label: t.nav.contacts, href: '/#contacts' },
  ]
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <p className="font-serif text-2xl font-semibold">Eugenio Lorenzini</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Eugenio Lorenzini.</p>
        </div>
      </div>
    </footer>
  )
}
