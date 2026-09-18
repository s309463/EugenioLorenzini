// Strongly typed data models for Eugenio Lorenzini's author portfolio.
// All copy is placeholder Lorem Ipsum and imagery uses random photos so the
// architecture can later be wired to a CMS or database without shape changes.

export type Presentation = {
  id: string
  title: string
  date: string
  time: string
  location: string
  city: string
  description: string
  image?: string
  link?: string
}

export type Award = {
  id: string
  name: string
  year: number
  organization?: string
  description?: string
}

export type Book = {
  id: string
  title: string
  subtitle?: string
  year: number
  coverImage: string
  shortDescription: string
  plot: string
  presentations: Presentation[]
  awards: Award[]
}

export type Article = {
  id: string
  title: string
  source?: string
}

export type EventItem = {
  id: string
  title: string
  date: string
  time: string
  location: string
  city: string
  description: string
  image?: string
  link?: string
}

export type ReaderComment = {
  id: string
  name?: string
  comment: string
}

// Random photo helper — deterministic per seed so layouts stay stable.
export const photo = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

const LOREM_SHORT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const LOREM_LONG =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio nullam varius turpis et commodo pharetra est eros bibendum elit.'

const BIOGRAPHY = 
  `Sono nato nel 1965 a Livorno, mi sono diplomato al Liceo Scientifico Cecioni e laureato in Ingegneria Elettronica presso l’Università di Pisa.
Iniziai a scrivere a 16 anni per JP4, rivista nazionale di aeronautica, con la quale ho collaborato fino al 1991. Un mio articolo (Stealth ultima frontiera) è citato su Wikipedia, nella bibliografia della voce Stealth.
Il primo libro nasce nel 1991 come regalo di compleanno per una ragazza. Volevo regalarle qualcosa di unico e non acquistabile e così nacque il mio primo romanzo”
Lo scritto iniziale fu profondamente modificato e pubblicato con il titolo di “1808 (quasi una storia)” per i tipi di Ibiskos. Il romanzo vinse come primo classificato il premio Metropoli di Torino e questo mi incoraggiò a continuare a scrivere.
I miei scritti hanno sempre cercato di raccontare episodi poco noti della storia ed hanno sempre cercato di usare cifre stilistiche non canoniche.
Maggiori informazioni nei box sottostanti dedicati ai singoli libri.
Vivo a Firenze ed ho avuto modo di viaggiare per lavoro molte volte in oriente.
Sfrutto il tempo in treno per leggere e scrivere e non ho abbandonato la penna, che uso per la prima stesura e per tutte le successive correzioni.
Sono sposato ed ho due figli.`

export const author = {
  name: 'Eugenio Lorenzini',
  portrait: '/foto_autore.png',
  heroImage: '/sfondo_autore.png',
  bioIntro: 'Sono nato nel 1965 a Livorno, mi sono diplomato al Liceo Scientifico Cecioni e laureato in Ingegneria Elettronica presso l’Università di Pisa.',
  bioFull: BIOGRAPHY,
}

const makePresentations = (bookSeed: string): Presentation[] =>
  Array.from({ length: 4 }, (_, i) => ({
    id: `${bookSeed}-pres-${i + 1}`,
    title: `Lorem Ipsum Literary Evening ${i + 1}`,
    date: `${12 + i} November 2025`,
    time: `${18 + (i % 3)}:30`,
    location: `Sala Consectetur ${i + 1}`,
    city: ['Firenze', 'Bologna', 'Milano', 'Roma'][i % 4],
    description: LOREM_SHORT,
    image: photo(`${bookSeed}-pres-${i}`, 800, 500),
    link: '#',
  }))

const makeAwards = (bookSeed: string): Award[] =>
  Array.from({ length: 2 }, (_, i) => ({
    id: `${bookSeed}-award-${i + 1}`,
    name: `Premio Lorem ${i === 0 ? 'd’Oro' : 'della Critica'}`,
    year: 2016 + i,
    organization: 'Accademia Ipsum delle Lettere',
    description: LOREM_SHORT,
  }))

export const books: Book[] = [
  {
    id: "1808-quasi-una-storia",
    title: "1808",
    subtitle: "(quasi una storia)",
    year: 2001,
    coverImage: '/cop_1808.png',
    shortDescription: "",
    plot: `${LOREM_LONG} ${LOREM_LONG}`,
    presentations: makePresentations('silenzio'),
    awards: makeAwards('silenzio'),
  },
  {
    id: 'L-illustratore',
    title: "L'illustratore",
    year: 2012,
    coverImage: '/cop_illustratore.jpg',
    shortDescription: "'L’illustratore' è un autentico romanzo storico che si snoda sul finire del XVIII secolo.",
    plot: `${"L’illustratore” è un autentico romanzo storico che si snoda sul finire del XVIII secolo. Tre fratelli di una famiglia ebraica di Tunisi partono sul finire del 1700 per tre diverse destinazioni: Marsiglia, Livorno ed Alessandria D’Egitto. Nel libro trovano spazio fatti d’arme come le campagne napoleoniche in Italia ed Egitto, rapporti familiari, vicende personali e sentimentali. Fanno da sfondo alle vicende dei protagonisti da una parte il duro confronto tra le culture ebraica, araba e cristiana e dall’altra ripetuti episodi di oppressione. Il tutto ricostruito e narrato con maestria e assoluta attendibilità storica"}`,
    presentations: makePresentations('ombre'),
    awards: makeAwards('ombre'),
  },
  {
    id: '179-Gradi',
    title: '179 Gradi',
    subtitle: '(triangolo imperfetto)',
    year: 2019,
    coverImage: '/cop_179.png',
    shortDescription: LOREM_SHORT,
    plot: `${LOREM_LONG}`,
    presentations: makePresentations('fiume'),
    awards: makeAwards('fiume'),
  },
  {
    id: 'Progetto-Liberty',
    title: 'Progetto Liberty',
    subtitle: 'Ballata per eroi misconosciuti',
    year: 2025,
    coverImage: '/cop_Liberty.png',
    shortDescription: LOREM_SHORT,
    plot: `${LOREM_LONG}`,
    presentations: [
      {
        id: 'stanza-pres-1',
        title: 'Lorem Ipsum Book Launch',
        date: '3 December 2025',
        time: '19:00',
        location: 'Palazzo Adipiscing',
        city: 'Venezia',
        description: LOREM_SHORT,
        image: '/cop_Liberty.png',
        link: '#',
      },
    ],
    awards: makeAwards('stanza'),
  },
]

export const getBook = (id: string) => books.find((b) => b.id === id)

export const articles: Article[] = Array.from({ length: 9 }, (_, i) => ({
  id: `article-${i + 1}`,
  title: [
    'AH-1W Super Cobra',
    'I Cobra dei Marines',
    "T38-Talon L'artiglio dell' U.S.A.F.",
    'G.91T',
    'OV-10 Bronco',
    'Stealth ultima frontiera',
    'Forrestal, di nuovo in linea dopo lo SLEP',
    'Guerra Elettronica',
    'Radar meteo'
  ][i],
  source: ['jp4', 'jp4', 'jp4', 'jp4', 'jp4', 'jp4', 'jp4', 'jp4', 'jp4'][i],

}))

export const events: EventItem[] = Array.from({ length: 4 }, (_, i) => ({
  id: `event-${i + 1}`,
  title: [
    'Lorem Ipsum Book Festival',
    'Reading & Conversation',
    'An Evening of Prose',
    'Meet the Author',
  ][i],
  date: `${['15 October', '29 October', '11 November', '6 December'][i]} 2025`,
  time: `${18 + i}:00`,
  location: ['Teatro Ipsum', 'Libreria Dolor', 'Auditorium Amet', 'Sala Consectetur'][i],
  city: ['Torino', 'Napoli', 'Genova', 'Palermo'][i],
  description: LOREM_SHORT,
  image: photo(`event-${i}`, 800, 500),
  link: '#',
}))

export const comments: ReaderComment[] = [
  { id: 'c1', name: 'Giulia Rossi', comment: LOREM_SHORT },
  { id: 'c2', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
  { id: 'c3', name: 'Marco Bianchi', comment: LOREM_SHORT },
  { id: 'c4', name: 'Elena Conti', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 'c5', comment: LOREM_SHORT },
  { id: 'c6', name: 'Alessandro Greco', comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
]
