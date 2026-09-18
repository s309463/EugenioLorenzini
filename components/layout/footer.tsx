import Link from 'next/link'

const links = [
  { label: 'Biography', href: '/#biography' },
  { label: 'Articles', href: '/#articles' },
  { label: 'Books', href: '/#books' },
  { label: 'Events', href: '/#events' },
  { label: 'Comments', href: '/#comments' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <p className="font-serif text-2xl font-semibold">Eugenio Lorenzini</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore.
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
          <p>© {new Date().getFullYear()} Eugenio Lorenzini. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  )
}
