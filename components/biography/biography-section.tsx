'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { author } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function BiographySection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="biography" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal className="md:sticky md:top-28">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-lg border border-accent/40 md:block" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={author.portrait || '/placeholder.svg'}
                alt={`Portrait of ${author.name}`}
                className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading eyebrow="SULL'AUTORE" title="Biografia" />

            <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-foreground/90">
              {expanded ? author.bioFull : author.bioIntro}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
              aria-expanded={expanded}
            >
              {expanded ? 'Mostra meno' : 'Leggi tutta la biografia'}
              <ChevronDown
                className={cn('size-4 transition-transform', expanded && 'rotate-180')}
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
