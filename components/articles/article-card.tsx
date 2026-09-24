'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export function ArticleCard({ article }: { article: Article }) {
  const { t } = useLanguage()
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
      <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
        {article.source && (
          <>
            <span>
              {t.articles.publishedOn} {article.source}
            </span>
          </>
        )}
      </div>

      <h3 className="mt-4 text-balance font-serif text-xl font-semibold leading-snug text-foreground">
        {article.title}
      </h3>
    </article>
  )
}
