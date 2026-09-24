'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'it' | 'en'

type Dictionary = {
  nav: {
    home: string
    biography: string
    books: string
    events: string
    comments: string
    articles: string
    contacts: string
  }
  hero: { exploreBooks: string; biography: string; scroll: string }
  biography: { eyebrow: string; title: string; readMore: string; showLess: string }
  books: { eyebrow: string; title: string; description: string }
  events: {
    eyebrow: string
    title: string
    description: string
    emptyTitle: string
    emptyDescription: string
    moreInformation: string
  }
  comments: { title: string; description: string; previous: string; next: string; choose: string }
  articles: { eyebrow: string; title: string; description: string; publishedOn: string }
  contact: { title: string; writeToMe: string; email: string; description: string }
  footer: { tagline: string }
  book: {
    back: string
    story: string
    summary: string
    reviews: string
    reviewsDescription: string
    pastPresentations: string
    awardsEyebrow: string
    awards: string
    awardsDescription: string
    notFound: string
  }
  admin: {
    login: string
    email: string
    password: string
    signIn: string
    signOut: string
    dashboard: string
    addPresentation: string
    title: string
    date: string
    time: string
    location: string
    city: string
    description: string
    link: string
    photo: string
    save: string
    saving: string
    saved: string
    error: string
    configuration: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  it: {
    nav: { home: 'Home', biography: 'Biografia', books: 'Libri', events: 'Eventi futuri', comments: 'Commenti', articles: 'Articoli', contacts: 'Contatti' },
    hero: { exploreBooks: 'Esplora i libri', biography: 'Leggi la biografia', scroll: 'Scorri alla biografia' },
    biography: { eyebrow: "SULL'AUTORE", title: 'Biografia', readMore: 'Leggi tutta la biografia', showLess: 'Mostra meno' },
    books: { eyebrow: 'Un viaggio nel tempo', title: 'Libri', description: 'Ho pubblicato quattro libri e un racconto, tutti con un elemento comune: la Storia.' },
    events: { eyebrow: "Dove troverete l'autore", title: 'Eventi futuri', description: 'Venite se avete voglia di fare due chiacchiere o farvi firmare il libro', emptyTitle: 'Non ci sono eventi programmati.', emptyDescription: 'Controlla tra qualche giorno se ci sono nuove date', moreInformation: 'Maggiori informazioni' },
    comments: { title: 'Cosa dicono i lettori', description: 'Qualche lettore ha deciso di commentare il libro dopo averlo letto', previous: 'Commento precedente', next: 'Commento successivo', choose: 'Scegli commento' },
    articles: { eyebrow: 'Prime pubblicazioni', title: 'Articoli', description: 'Iniziai a scrivere a 16 anni per JP4, rivista nazionale di aeronautica, con la quale ho collaborato fino al 1991. Un mio articolo (Stealth ultima frontiera) è citato su Wikipedia, nella bibliografia della voce Stealth.', publishedOn: 'Pubblicato su:' },
    contact: { title: 'Contatti', writeToMe: 'Scrivimi', email: 'Email', description: "Ti risponderà direttamente per informazioni e proposte legate ai suoi libri e alle sue iniziative." },
    footer: { tagline: 'La scrittura come passione, il raccontare storie come ossessione' },
    book: { back: 'Torna a tutti i libri', story: 'La storia', summary: 'Riassunto', reviews: 'Recensioni', reviewsDescription: 'Frammenti di critica e attenzione mediatica dedicati al volume.', pastPresentations: 'Presentazioni passate', awardsEyebrow: 'Riconoscimenti', awards: 'Premi', awardsDescription: 'Premi e riconoscimenti ricevuti da questo lavoro.', notFound: 'Libro non trovato' },
    admin: { login: 'Accesso admin', email: 'Email', password: 'Password', signIn: 'Accedi', signOut: 'Esci', dashboard: 'Gestione presentazioni', addPresentation: 'Aggiungi presentazione', title: 'Titolo', date: 'Data', time: 'Orario', location: 'Luogo', city: 'Città', description: 'Descrizione', link: 'Link', photo: 'Foto della presentazione', save: 'Salva presentazione', saving: 'Salvataggio...', saved: 'Presentazione salvata', error: 'Si è verificato un errore.', configuration: 'Supabase non è configurato. Inserisci URL e anon key in .env.local e riavvia il server.' },
  },
  en: {
    nav: { home: 'Home', biography: 'Biography', books: 'Books', events: 'Upcoming events', comments: 'Comments', articles: 'Articles', contacts: 'Contact' },
    hero: { exploreBooks: 'Explore the books', biography: 'Read the biography', scroll: 'Scroll to biography' },
    biography: { eyebrow: 'ABOUT THE AUTHOR', title: 'Biography', readMore: 'Read the full biography', showLess: 'Show less' },
    books: { eyebrow: 'A journey through time', title: 'Books', description: 'I have published four books and a short story, all connected by one element: History.' },
    events: { eyebrow: 'Where to meet the author', title: 'Upcoming events', description: 'Come by for a chat or to have your book signed', emptyTitle: 'There are no scheduled events.', emptyDescription: 'Check back in a few days for new dates', moreInformation: 'More information' },
    comments: { title: 'What readers say', description: 'Some readers decided to share their thoughts after reading the book', previous: 'Previous comment', next: 'Next comment', choose: 'Choose comment' },
    articles: { eyebrow: 'First publications', title: 'Articles', description: 'I began writing for JP4, a national aviation magazine, at the age of sixteen and collaborated with it until 1991. One of my articles, Stealth: the final frontier, is cited on Wikipedia in the bibliography of the Stealth entry.', publishedOn: 'Published in:' },
    contact: { title: 'Contact', writeToMe: 'Write to me', email: 'Email', description: 'The author will reply directly to requests for information and proposals related to his books and initiatives.' },
    footer: { tagline: 'Writing as a passion, storytelling as an obsession' },
    book: { back: 'Back to all books', story: 'The story', summary: 'Summary', reviews: 'Reviews', reviewsDescription: 'Reviews and media attention dedicated to this volume.', pastPresentations: 'Past presentations', awardsEyebrow: 'Recognition', awards: 'Awards', awardsDescription: 'Awards and recognition received by this work.', notFound: 'Book not found' },
    admin: { login: 'Admin access', email: 'Email', password: 'Password', signIn: 'Sign in', signOut: 'Sign out', dashboard: 'Presentation management', addPresentation: 'Add presentation', title: 'Title', date: 'Date', time: 'Time', location: 'Venue', city: 'City', description: 'Description', link: 'Link', photo: 'Presentation photo', save: 'Save presentation', saving: 'Saving...', saved: 'Presentation saved', error: 'Something went wrong.', configuration: 'Supabase is not configured. Add the URL and anon key to .env.local and restart the server.' },
  },
}

const LanguageContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: Dictionary }>({
  locale: 'it',
  setLocale: () => undefined,
  t: dictionaries.it,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('it')

  useEffect(() => {
    const stored = window.localStorage.getItem('locale')
    if (stored === 'it' || stored === 'en') setLocale(stored)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  return <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
