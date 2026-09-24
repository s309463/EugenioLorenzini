'use client'

import { articles } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArticleCard } from './article-card'
import { useLanguage } from '@/lib/i18n'

export function ArticlesSection() {
  const { t } = useLanguage()
  return (
    <section id="articles" className="scroll-mt-20 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.articles.eyebrow}
            title={t.articles.title}
            description={t.articles.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.id} delay={i * 80}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
