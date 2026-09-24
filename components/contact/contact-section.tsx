'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { author } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/lib/i18n'

export function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contacts" className="scroll-mt-20 bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.title}
            title={t.contact.writeToMe}
            description={localeText(t.contact.title)}
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-background p-8 shadow-sm md:p-10">
            <div className="flex items-center justify-center gap-3 text-accent">
              <Mail className="size-5" />
              <span className="text-sm font-medium uppercase tracking-[0.2em]">{t.contact.email}</span>
            </div>

            <Link
              href={`mailto:${author.contactEmail}`}
              className="mt-6 block text-center font-serif text-2xl font-semibold text-foreground transition-colors hover:text-accent sm:text-3xl"
            >
              {author.contactEmail}
            </Link>

            <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
              Ti risponderà direttamente per informazioni e proposte legate ai suoi libri e alle sue iniziative.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function localeText(title: string) {
  return title === 'Contatti'
    ? "Per richieste editoriali, informazioni sui libri, presentazioni e collaborazioni, puoi contattare direttamente l'autore."
    : 'For editorial requests, book information, presentations and collaborations, you can contact the author directly.'
}
