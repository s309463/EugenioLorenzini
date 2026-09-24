'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { author } from '@/lib/data'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/lib/i18n'

export function Navbar() {
  const { t } = useLanguage()
  const links = [
    { label: t.nav.home, href: '/#home' },
    { label: t.nav.biography, href: '/#biography' },
    { label: t.nav.books, href: '/#books' },
    { label: t.nav.events, href: '/#events' },
    { label: t.nav.comments, href: '/#comments' },
    { label: t.nav.articles, href: '/#articles' },
    { label: t.nav.contacts, href: '/#contacts' },
  ]
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/70 bg-background/85 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/#home"
          className={cn(
            'font-serif text-lg font-semibold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-background drop-shadow-sm',
          )}
        >
          Eugenio Lorenzini
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors hover:text-accent',
                    scrolled ? 'text-muted-foreground' : 'text-background/90 drop-shadow-sm',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={cn(
            'md:hidden transition-colors',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl px-6 md:hidden">
          <ul className="flex flex-col gap-1 rounded-lg border border-border bg-card p-3 shadow-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-end text-foreground">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
