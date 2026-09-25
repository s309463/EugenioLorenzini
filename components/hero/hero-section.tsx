'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { author } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function HeroSection() {
  const { locale, t } = useLanguage()
  const bioIntro = locale === 'en' ? author.bioIntroEn : author.bioIntro
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with blur + dark overlay for readability */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={author.heroImage || '/placeholder.svg'}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="text-balance font-serif text-5xl font-semibold leading-[1.05] drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl">
          {author.name}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/70">
          {bioIntro}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#books"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:scale-105"
          >
            {t.hero.exploreBooks}
          </Link>
          <Link
            href="/#biography"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
          >
            {t.hero.biography}
          </Link>
        </div>
      </div>

      <Link
        href="/#biography"
        aria-label={t.hero.scroll}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-accent"
      >
        <ChevronDown className="size-8 animate-bounce-slow" />
      </Link>
    </section>
  )
}
