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

export type OfficialReview = {
  id: string
  source: string
  date?: string
  quote: string
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
  awards?: Award[]
  officialReviews?: OfficialReview[]
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

const makePresentations = (presentations: Presentation[]): Presentation[] =>
  presentations

const presentations: Presentation[] = [
  {
    id: 'presentazione-torino',
    title: 'Presentazione a Torino',
    date: '16 Gennaio 2026',
    time: '17:30',
    location: 'Circolo dei Lettori',
    city: 'Torino',
    description: "Prima presentazione del libro con l'autore davanti ad un pubblico attento e partecipe, presentato da Sandro Gros Pietro",
    image: "/presentazione_torino.png",
  },
  {
    id: 'presentazione-firenze',
    title: 'Presentazione a Firenze',
    date: '27 Gennaio 2026',
    time: '18:00',
    location: 'Lega Navale Italiana',
    city: 'Firenze',
    description: 'Presentazione del libro davanti ad un pubblico folto e competente che ha seguito con attenzione ed ha posto molte domande. Introduzione di Martina Buzio, Presidente della sezione, e presentazione di Vittorio Cocchi.',
    image: "/presentazione_firenze.jpeg",
  },
  {
    id: 'presentazione-livorno',
    title: 'Presentazione a Livorno',
    date: '30 Gennaio 2026',
    time: '18:30',
    location: 'Libreria Feltrinelli',
    city: 'Livorno',
    description: 'Presentazione davanti ad un pubblico numeroso ed attento che ha riempito il primo piano della libreria. Presentazione di Cristina Grieco.',
    image: "/presentazione_livorno.jpeg",
  },
  {
    id: 'presentazione-settignano',
    title: 'Presentazione a Settignano',
    date: '21 Febbraio 2026',
    time: '18:00',
    location: 'Casa del Popolo',
    city: 'Settignano (FI)',
    description: 'L’autore presenta davanti ad un pubblico folto ed interessato. Presentazione di Chiara Liberati.',
    image: "/presentazione_settignano.jpeg",
  },
  {
    id: 'presentazione-milano',
    title: 'Presentazione a Milano',
    date: '7 Marzo 2026',
    time: '15:00',
    location: "Associazione Nazionale Marinai d'Italia",
    city: 'Milano',
    description: 'Introduzione di Vito Berardi, segretario della sezione, e presentazione di Evelyn Galgano.',
    image: "/presentazione_milano.jpeg",
  },
  {
    id: 'presentazione-livorno2',
    title: 'Presentazione a Livorno',
    date: '3 Aprile 2026',
    time: '17:30',
    location: 'Lega Navale Italiana',
    city: 'Livorno',
    description: 'Presentazione davanti ad un pubblico partecipe e numeroso nonostante il Venerdì Santo. Introduzione dell’assessore Alfredo Fontana, Presidente della Sezione, e presentazione di Fabrizio Maestrini.',
    image: "/presentazione_livorno2.png",
  },
  {
    id: 'presentazione-salone-libro-torino',
    title: 'Presentazione al Salone del Libro',
    date: '15 Maggio 2026',
    time: '15:00',
    location: 'Lingotto Fiere',
    city: 'Torino',
    description: 'Presentazione presso lo stend della Casa Editrice Genesi durante il Salone Internazionale del Libro: un momento di scambio culturale in una cornice d’eccezione, presentato da Sandro Gros Pietro.',
    image: "/presentazione_salone.jpeg",
  },
]

const makeAward = (bookSeed: string): Award[] => [
  {
    id: `${bookSeed}-award-1`,
    name: 'Premio Metropoli',
    year: 2006,
    organization: 'Comune di Torino',
    description: 'Premio ricevuto per il primo romanzo storico pubblicato.',
  },
]

export const books: Book[] = [
  {
    id: "1808-quasi-una-storia",
    title: "1808",
    subtitle: "(quasi una storia)",
    year: 2001,
    coverImage: '/cop_1808v2.png',
    shortDescription: "Scritto a metà strada tra sogno e realtà, il romanzo storico segue le vicende di un giovane ufficiale inviato a Parigi nel 1808.",
    plot: `Scritto a metà strada tra sogno e realtà, il romanzo segue le vicende di un giovane ufficiale napoletano che, inviato a Parigi nel 1808, incontra una fanciulla con la quale potrebbe emergere una storia. Il libro è scritto con brevi capitoli a cui si alternano alcune poesie.`,
    presentations: [],
    awards: makeAward('1808'),
  },
  {
    id: 'L-illustratore',
    title: "L'illustratore",
    year: 2012,
    coverImage: '/cop_illustratore.jpg',
    shortDescription: "Il romanzo segue vicissitudini di un giovane aggregato alla spedizione napoleonica in Egitto. Il romanzo si svolge tra Parigi, l’Egitto e Livorno.",
    plot: `${"'L’illustratore' è un autentico romanzo storico che si snoda sul finire del XVIII secolo. Tre fratelli di una famiglia ebraica di Tunisi partono sul finire del 1700 per tre diverse destinazioni: Marsiglia, Livorno ed Alessandria D’Egitto. Nel libro trovano spazio fatti d’arme come le campagne napoleoniche in Italia ed Egitto, rapporti familiari, vicende personali e sentimentali. Fanno da sfondo alle vicende dei protagonisti da una parte il duro confronto tra le culture ebraica, araba e cristiana e dall’altra ripetuti episodi di oppressione. Il tutto ricostruito e narrato con maestria e assoluta attendibilità storica"}`,
    presentations: [],
    awards: [],
  },
  {
    id: 'ACW',
    title: "ACW",
    year: 2013,
    coverImage: '/cop_antologia.jpg',
    shortDescription: "Un racconto contenuto all'interno del libro 'il gioco di vivere'",
    plot: `Un racconto sul gioco e sui rapporti interpersonali che si vengono a creare durante le partite di wargaming.`,
    presentations: [],
    awards: [],
  },
  {
    id: '179-Gradi',
    title: '179 Gradi',
    subtitle: '(triangolo imperfetto)',
    year: 2019,
    coverImage: '/cop_179.png',
    shortDescription: "Tre storie che si intrecciano; tre punti di vista che si sovrappongono, ma non coincidono",
    plot: `Tre storie che si intrecciano; tre cifre narrative completamente diverse: una nonna che si racconta ai ripoti, la cartella clinica di un ospedale psichiatrico, una tesi di laurea, collocati nel tempo su un arco di mezzo secolo. Una sfida stilistica ben riuscita. `,
    presentations: [],
    awards: [],
  },
  {
    id: 'Progetto-Liberty',
    title: 'Progetto Liberty',
    subtitle: 'Ballata per eroi misconosciuti',
    year: 2025,
    coverImage: '/cop_Liberty.png',
    shortDescription: "Un esperimento, una ballata, per provare a ricordare tutte quelle figure che nell'ombra hanno permesso la vittoria degli Alleati alla fine della 2° Guerra Mondiale",
    plot: `La storia del più grande progetto navale mai realizzato vista dalla parte dei protagonisti. Nella Seconda Guerra Mondiale gli USA costruirono 2710 navi classe Liberty in meno di quattro anni partendo da un progetto inglese. Scritta in forma di ballata - romanzo, la storia abbraccia l’intero progetto, dalla progettazione nel nord dell’Inghilterra alla realizzazione in decine di cantieri negli USA all’impiego delle navi su molte rotte. Personaggi storicamente esistiti ed altri di fantasia animano le pagine in una cavalcata dal ritmo travolgente.`,
    presentations: makePresentations(presentations),
    awards: [],
    officialReviews: [
      {
        id: 'review-panorama-difesa',
        source: 'Panorma difesa',
        date: 'Aprile 2026',
        quote: 'Recensione di Angelo Pinti per la rivista "Panorama Difesa"'
      },
      {
        id: 'review-leggere-tutti',
        source: 'Leggere tutti',
        date: 'Maggio 2026',
        quote: 'Recensione di Loredana Simonetti per la rivista "Leggere tutti"'
      },
      {
        id: 'review-lega-navale',
        source: 'Lega Navale',
        date: 'Luglio 2026',
        quote: 'Recensione di Luciano Magnanelli, vicepresidente della Lega Navale Italiana, per la serie "letture in pozzetto"'
      },
      
    ]
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

export const events: EventItem[] = Array.from({ length: 3 }, (_, i) => ({
  id: `event-${i + 1}`,
  title: [
    'Presentazione alla biblioteca di Pino Torinese',
    'Presentazione alla Lega Navale di Pisa',
    'Presentazione al Museo Navale di Spezia'
  ][i],
  date: `${['7 Novembre', 'coming soon', 'coming soon'][i]}`,
  time: ['17:00', 'da definirsi', 'da definirsi'][i],
  location: ['Biblioteca A. Caselle', 'Lega Navale', 'Museo Navale'][i],
  city: ['Pino Torinese', 'Pisa', 'Spezia'][i],
}))

export const comments: ReaderComment[] = [
  { id: 'c1', name: 'Francesca Guerra', comment: `Inizialmente era curiosità per quel termine 'ballata' associato ad un libro di Lorenzini. Già dalla prima pagina ho capito:  il suo consueto, raffinato, stile narrativo si arricchiva di creatività linguistica con un ritmo incalzante che porta alla pagina successiva. Non mi ha stupito invece l’assoluta precisione storica della prima parte e l’efficace caratterizzazione dei personaggi della seconda. Lorenzini infatti ha abituato i suoi lettori ad apprezzare la connessione tra sua passione per la storia e inserimento felice di figure di fantasia nel contesto reale. E’ un libro che andrebbe letto almeno due volte: la prima per cogliere il messaggio storico – sociale di un periodo fondamentale del secolo scorso; la seconda per apprezzare il linguaggio narrativo ricercatissimo dell’Autore.` },
  { id: 'c2', name: 'Alessandra', comment: 'Ne sono rimasta entusiasta! La seconda parte mi è piaciuta ancora di più della prima. Non conoscevo niente di queste pagine della nostra storia, sono state raccontate benissimo e leggendo mi è venuta la voglia di andarle a cercare!!' },
  { id: 'c3', name: 'Paolo Casini', comment: 'Mi è piaciuto molto sia per il rigore della ricostruzione storica che per la forma inedita. L’ho letto con piacere in un batter d’occhio.' },
  { id: 'c4', name: 'N.M.', comment: 'Bello davvero! Emozionante; mi ero fermata ad un certo punto, perché ho una sensibilità su certi argomenti, ma anche temi delicati sono stati affrontati con maestria. Un libro che trasmette emozioni e che non si dimentica.' },
  { id: 'c5', name: 'Edda', comment: 'Complimenti, ho appena finito di leggere il libro, che mi ha coinvolta per lo stile di scrittura e l’attualità nonostante argomenti per me ignoti che ho comunque letto volentieri.' },
  { id: 'c6', name: 'M.D.', comment: 'Bellissimo! Come gli sarà venuto in mente di scriverlo come ballata? Ha saputo dare un ritmo tale che sembra di avvertire l’urgenza di terminare le navi in fretta. Una storia scritta benissimo, coinvolgente, con delle figure femminili vive e non scontate. Poteva essere retorico o scontato ed invece ha saputo parlare della guerra e dello sforzo bellico in modo unico e avvincente!' },
  { id: 'c7', name: 'Fabrizio Maestrini', comment: 'Mi sono commosso. Inaspettato, spiazzante.'},
  { id: 'c8', name: 'Dario Lupi', comment: 'Lo ho trovato estremamente epico e poetico e ha sbloccato in me alcuni ricordi che ho provato la prima volta che ho visitato il cantiere di mio padre. Il testo scorre, appassiona e riesce a trascinarti nello spirito di quel tempo e di quell’impresa. La tematica può sembrare di nicchia, ma di fatto gli avvenimenti parlano all’animo, narrando una storia che è di ingegno, sacrificio, sofferenza e pertinacia.'},
  { id: 'c9', name: '', comment: ''},
  { id: 'c10', name: '', comment: ''}
]
