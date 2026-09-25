import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eugeniolorenzini.com'),
  title: 'Eugenio Lorenzini',
  description:
    'The official literary portfolio of Eugenio Lorenzini: biography, articles, published books, upcoming events, and reader reflections.',
  openGraph: {
    type: 'website',
    url: 'https://eugeniolorenzini.com',
    title: 'Eugenio Lorenzini',
    description: 'Il portfolio letterario ufficiale di Eugenio Lorenzini.',
    siteName: 'Eugenio Lorenzini',
    images: [
      {
        url: '/sfondo_autore.png',
        width: 1200,
        height: 630,
        alt: 'Eugenio Lorenzini',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eugenio Lorenzini',
    description: 'Il portfolio letterario ufficiale di Eugenio Lorenzini.',
    images: ['/sfondo_autore.png'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3ede1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
