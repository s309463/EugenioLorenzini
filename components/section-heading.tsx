import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span
        className={cn(
          'mt-5 block h-px w-16 bg-accent/60',
          align === 'center' && 'mx-auto',
        )}
        aria-hidden="true"
      />
      {description && (
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
