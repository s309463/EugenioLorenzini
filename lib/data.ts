// Strongly typed data models for Eugenio Lorenzini's author portfolio.
// All copy is placeholder Lorem Ipsum and imagery uses random photos so the
// architecture can later be wired to a CMS or database without shape changes.

export type Presentation = {
  id: string
  title: string
  titleEn?: string
  date: string
  dateEn?: string
  time: string
  location: string
  locationEn?: string
  city: string
  description: string
  descriptionEn?: string
  image?: string
  link?: string
}

export type Award = {
  id: string
  name: string
  nameEn?: string
  year: number
  organization?: string
  organizationEn?: string
  description?: string
  descriptionEn?: string
}

export type OfficialReview = {
  id: string
  source: string
  date?: string
  dateEn?: string
  quote: string
  quoteEn?: string
}

export type Book = {
  id: string
  title: string
  titleEn?: string
  subtitle?: string
  subtitleEn?: string
  year: number
  coverImage: string
  shortDescription: string
  shortDescriptionEn?: string
  plot: string
  plotEn?: string
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
  titleEn?: string
  date: string
  time: string
  timeEn?: string
  location: string
  locationEn?: string
  city: string
  description: string
  descriptionEn?: string
  image?: string
  link?: string
}

export type ReaderComment = {
  id: string
  name?: string
  comment: string
  commentEn?: string
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
Il primo libro nasce nel 1991 come regalo di compleanno per una ragazza. Volevo regalarle qualcosa di unico e non acquistabile e così nacque il mio primo romanzo: "Ciao Venere, prima stella della sera".
Lo scritto iniziale fu profondamente modificato e pubblicato con il titolo di “1808 (quasi una storia)” per i tipi di Ibiskos. Il romanzo vinse come primo classificato il premio Metropoli di Torino e questo mi incoraggiò a continuare a scrivere.
I miei scritti hanno sempre cercato di raccontare episodi poco noti della storia ed hanno sempre cercato di usare cifre stilistiche non canoniche.
Maggiori informazioni nei box sottostanti dedicati ai singoli libri.
Vivo a Firenze ed ho avuto modo di viaggiare per lavoro molte volte in oriente.
Sfrutto il tempo in treno per leggere e scrivere e non ho abbandonato la penna, che uso per la prima stesura e per tutte le successive correzioni.
Sono sposato ed ho due figli.`

const BIOGRAPHY_EN =
  `I was born in Livorno in 1965. I graduated from Liceo Scientifico Cecioni and earned a degree in Electronic Engineering from the University of Pisa.
I began writing for JP4, a national aviation magazine, at the age of sixteen and collaborated with it until 1991. One of my articles, Stealth: the final frontier, is cited on Wikipedia in the bibliography of the Stealth entry.
My first book was born in 1991 as a birthday present for a girl. I wanted to give her something unique and impossible to buy, and so my first novel was born: "Ciao Venere, prima stella della sera".
The original manuscript was extensively revised and published as "1808 (quasi una storia)" by Ibiskos. The novel won first prize in the Metropoli di Torino award, encouraging me to continue writing.
My writing has always sought to tell little-known episodes from history through unconventional literary forms.
More information can be found in the sections dedicated to each book below.
I live in Florence and have travelled extensively in the East for work.
I use my time on trains to read and write, and I have never abandoned the pen, which I use for the first draft and every subsequent revision.
I am married and have two children.`

export const author = {
  name: 'Eugenio Lorenzini',
  portrait: '/foto_autore.png',
  heroImage: '/sfondo_autore.png',
  bioIntro: 'Sono nato nel 1965 a Livorno, mi sono diplomato al Liceo Scientifico Cecioni e laureato in Ingegneria Elettronica presso l’Università di Pisa.',
  bioIntroEn: 'I was born in Livorno in 1965. I graduated from Liceo Scientifico Cecioni and earned a degree in Electronic Engineering from the University of Pisa.',
  bioFull: BIOGRAPHY,
  bioFullEn: BIOGRAPHY_EN,
  contactEmail: 'Illustratore12.2012@gmail.com',
}

const makePresentations = (presentations: Presentation[]): Presentation[] =>
  presentations

const presentations: Presentation[] = [
  {
    id: 'presentazione-torino',
    title: 'Presentazione a Torino',
    titleEn: 'Presentation in Turin',
    date: '16 Gennaio 2026',
    dateEn: 'January 16, 2026',
    time: '17:30',
    location: 'Circolo dei Lettori',
    city: 'Torino',
    description: "Prima presentazione del libro con l'autore davanti ad un pubblico attento e partecipe, presentato da Sandro Gros Pietro",
    descriptionEn: "The book's first presentation, with the author speaking to an attentive and engaged audience. Presented by Sandro Gros Pietro.",
    image: "/presentazione_torino.png",
  },
  {
    id: 'presentazione-firenze',
    title: 'Presentazione a Firenze',
    titleEn: 'Presentation in Florence',
    date: '27 Gennaio 2026',
    dateEn: 'January 27, 2026',
    time: '18:00',
    location: 'Lega Navale Italiana',
    city: 'Firenze',
    description: 'Presentazione del libro davanti ad un pubblico folto e competente che ha seguito con attenzione ed ha posto molte domande. Introduzione di Martina Buzio, Presidente della sezione, e presentazione di Vittorio Cocchi.',
    descriptionEn: 'The book was presented to a large and knowledgeable audience that followed attentively and asked many questions. Introduced by Martina Buzio, president of the section, and presented by Vittorio Cocchi.',
    image: "/presentazione_firenze.jpeg",
  },
  {
    id: 'presentazione-livorno',
    title: 'Presentazione a Livorno',
    titleEn: 'Presentation in Livorno',
    date: '30 Gennaio 2026',
    dateEn: 'January 30, 2026',
    time: '18:30',
    location: 'Libreria Feltrinelli',
    city: 'Livorno',
    description: 'Presentazione davanti ad un pubblico numeroso ed attento che ha riempito il primo piano della libreria. Presentazione di Cristina Grieco.',
    descriptionEn: 'A presentation for a large and attentive audience that filled the first floor of the bookshop. Presented by Cristina Grieco.',
    image: "/presentazione_livorno.jpeg",
  },
  {
    id: 'presentazione-settignano',
    title: 'Presentazione a Settignano',
    titleEn: 'Presentation in Settignano',
    date: '21 Febbraio 2026',
    dateEn: 'February 21, 2026',
    time: '18:00',
    location: 'Casa del Popolo',
    city: 'Settignano (FI)',
    description: 'L’autore presenta davanti ad un pubblico folto ed interessato. Presentazione di Chiara Liberati.',
    descriptionEn: 'The author spoke to a large and interested audience. Presented by Chiara Liberati.',
    image: "/presentazione_settignano.jpeg",
  },
  {
    id: 'presentazione-milano',
    title: 'Presentazione a Milano',
    titleEn: 'Presentation in Milan',
    date: '7 Marzo 2026',
    dateEn: 'March 7, 2026',
    time: '15:00',
    location: "Associazione Nazionale Marinai d'Italia",
    city: 'Milano',
    description: 'Introduzione di Vito Berardi, segretario della sezione, e presentazione di Evelyn Galgano.',
    descriptionEn: 'Introduced by Vito Berardi, secretary of the section, and presented by Evelyn Galgano.',
    image: "/presentazione_milano.jpeg",
  },
  {
    id: 'presentazione-livorno2',
    title: 'Presentazione a Livorno',
    titleEn: 'Presentation in Livorno',
    date: '3 Aprile 2026',
    dateEn: 'April 3, 2026',
    time: '17:30',
    location: 'Lega Navale Italiana',
    city: 'Livorno',
    description: 'Presentazione davanti ad un pubblico partecipe e numeroso nonostante il Venerdì Santo. Introduzione dell’assessore Alfredo Fontana, Presidente della Sezione, e presentazione di Fabrizio Maestrini.',
    descriptionEn: 'A well-attended presentation despite falling on Good Friday. Introduced by councillor Alfredo Fontana, president of the section, and presented by Fabrizio Maestrini.',
    image: "/presentazione_livorno2.png",
  },
  {
    id: 'presentazione-salone-libro-torino',
    title: 'Presentazione al Salone del Libro',
    titleEn: 'Presentation at the Turin Book Fair',
    date: '15 Maggio 2026',
    dateEn: 'May 15, 2026',
    time: '15:00',
    location: 'Lingotto Fiere',
    city: 'Torino',
    description: 'Presentazione presso lo stend della Casa Editrice Genesi durante il Salone Internazionale del Libro: un momento di scambio culturale in una cornice d’eccezione, presentato da Sandro Gros Pietro.',
    descriptionEn: 'A presentation at the Genesi publishing house stand during the International Book Fair: a moment of cultural exchange in an exceptional setting, presented by Sandro Gros Pietro.',
    image: "/presentazione_salone.jpeg",
  },
]

const makeAward = (bookSeed: string): Award[] => [
  {
    id: `${bookSeed}-award-1`,
    name: 'Premio Metropoli',
    nameEn: 'Metropoli Award',
    year: 2006,
    organization: 'Comune di Torino',
    organizationEn: 'City of Turin',
    description: 'Premio ricevuto per il primo romanzo storico pubblicato.',
    descriptionEn: 'Award received for the first published historical novel.',
  },
]

export const books: Book[] = [
  {
    id: "1808-quasi-una-storia",
    title: "1808",
    titleEn: "1808",
    subtitle: "(quasi una storia)",
    subtitleEn: "(almost a story)",
    year: 2001,
    coverImage: '/cop_1808v2.png',
    shortDescription: "Scritto a metà strada tra sogno e realtà, il romanzo storico segue le vicende di un giovane ufficiale inviato a Parigi nel 1808.",
    shortDescriptionEn: 'Halfway between dream and reality, this historical novel follows a young officer sent to Paris in 1808.',
    plot: `Scritto a metà strada tra sogno e realtà, il romanzo segue le vicende di un giovane ufficiale napoletano che, inviato a Parigi nel 1808, incontra una fanciulla con la quale potrebbe emergere una storia. Il libro è scritto con brevi capitoli a cui si alternano alcune poesie.`,
    plotEn: `Halfway between dream and reality, the novel follows a young Neapolitan officer who is sent to Paris in 1808 and meets a young woman with whom a story might unfold. The book is written in short chapters interspersed with poems.`,
    presentations: [],
    awards: makeAward('1808'),
  },
  {
    id: 'L-illustratore',
    title: "L'illustratore",
    titleEn: 'The Illustrator',
    year: 2012,
    coverImage: '/cop_illustratore.jpg',
    shortDescription: "Il romanzo segue vicissitudini di un giovane aggregato alla spedizione napoleonica in Egitto. Il romanzo si svolge tra Parigi, l’Egitto e Livorno.",
    shortDescriptionEn: 'The novel follows the adventures of a young man attached to Napoleon\'s expedition to Egypt. The story unfolds between Paris, Egypt and Livorno.',
    plot: `${"'L’illustratore' è un autentico romanzo storico che si snoda sul finire del XVIII secolo. Tre fratelli di una famiglia ebraica di Tunisi partono sul finire del 1700 per tre diverse destinazioni: Marsiglia, Livorno ed Alessandria D’Egitto. Nel libro trovano spazio fatti d’arme come le campagne napoleoniche in Italia ed Egitto, rapporti familiari, vicende personali e sentimentali. Fanno da sfondo alle vicende dei protagonisti da una parte il duro confronto tra le culture ebraica, araba e cristiana e dall’altra ripetuti episodi di oppressione. Il tutto ricostruito e narrato con maestria e assoluta attendibilità storica"}`,
    plotEn: `The Illustrator is a genuine historical novel set at the end of the eighteenth century. Three brothers from a Jewish family in Tunis leave their home at the end of the 1700s for three different destinations: Marseille, Livorno and Alexandria. The book brings together battles such as Napoleon's campaigns in Italy and Egypt, family relationships, and personal and romantic stories. The protagonists' lives unfold against the difficult encounter between Jewish, Arab and Christian cultures, as well as repeated episodes of oppression, all reconstructed and narrated with skill and historical accuracy.`,
    presentations: [],
    awards: [],
  },
  {
    id: 'ACW',
    title: "ACW",
    titleEn: 'ACW',
    year: 2013,
    coverImage: '/cop_antologia.jpg',
    shortDescription: "Un racconto all'interno del libro 'il gioco di vivere'",
    shortDescriptionEn: "A short story included in the book 'The Game of Living'.",
    plot: `Un racconto sul gioco e sui rapporti interpersonali che si vengono a creare durante le partite di wargaming.`,
    plotEn: `A story about gaming and the relationships that develop during wargaming matches.`,
    presentations: [],
    awards: [],
  },
  {
    id: '179-Gradi',
    title: '179 Gradi',
    titleEn: '179 Degrees',
    subtitle: '(triangolo imperfetto)',
    subtitleEn: '(imperfect triangle)',
    year: 2019,
    coverImage: '/cop_179.png',
    shortDescription: "Tre storie che si intrecciano; tre punti di vista che si sovrappongono, ma non coincidono",
    shortDescriptionEn: 'Three intertwined stories; three points of view that overlap, but never coincide.',
    plot: `Tre storie che si intrecciano; tre cifre narrative completamente diverse: una nonna che si racconta ai ripoti, la cartella clinica di un ospedale psichiatrico, una tesi di laurea, collocati nel tempo su un arco di mezzo secolo. Una sfida stilistica ben riuscita. `,
    plotEn: `Three intertwined stories and three completely different narrative forms: a grandmother telling her story to her grandchildren, the medical file of a psychiatric hospital, and a university thesis, set across half a century. A successful stylistic challenge.`,
    presentations: [],
    awards: [],
  },
  {
    id: 'Progetto-Liberty',
    title: 'Progetto Liberty',
    titleEn: 'Liberty Project',
    subtitle: 'Ballata per eroi misconosciuti',
    subtitleEn: 'A ballad for unsung heroes',
    year: 2025,
    coverImage: '/cop_Liberty.png',
    shortDescription: "Un esperimento, una ballata, per provare a ricordare tutte quelle figure che nell'ombra hanno permesso la vittoria degli Alleati alla fine della 2° Guerra Mondiale",
    shortDescriptionEn: 'An experiment in the form of a ballad, remembering the people who worked in the shadows to make the Allied victory at the end of the Second World War possible.',
    plot: `La storia del più grande progetto navale mai realizzato vista dalla parte dei protagonisti. Nella Seconda Guerra Mondiale gli USA costruirono 2710 navi classe Liberty in meno di quattro anni partendo da un progetto inglese. Scritta in forma di ballata - romanzo, la storia abbraccia l’intero progetto, dalla progettazione nel nord dell’Inghilterra alla realizzazione in decine di cantieri negli USA all’impiego delle navi su molte rotte. Personaggi storicamente esistiti ed altri di fantasia animano le pagine in una cavalcata dal ritmo travolgente.`,
    plotEn: `This is the story of the largest naval project ever undertaken, told from the protagonists' point of view. During the Second World War, the United States built 2,710 Liberty-class ships in less than four years, starting from a British design. Written as a ballad-novel, the story follows the entire project: from its design in northern England to construction in dozens of American shipyards and the ships' service on many routes. Historical figures and fictional characters bring its pages to life in a thrilling ride.`,
    presentations: makePresentations(presentations),
    awards: [],
    officialReviews: [
      {
        id: 'review-panorama-difesa',
        source: 'Panorma difesa',
        date: 'Aprile 2026',
        dateEn: 'April 2026',
        quote: ' Recensione di Angelo Pinti per la rivista Panorama Difesa ',
        quoteEn: 'Review by Angelo Pinti for Panorama Difesa magazine.'
      },
      {
        id: 'review-leggere-tutti',
        source: 'Leggere tutti',
        date: 'Maggio 2026',
        dateEn: 'May 2026',
        quote: ' Recensione di Loredana Simonetti per la rivista Leggere tutti ',
        quoteEn: 'Review by Loredana Simonetti for Leggere tutti magazine.'
      },
      {
        id: 'review-lega-navale',
        source: 'Lega Navale',
        date: 'Luglio 2026',
        dateEn: 'July 2026',
        quote: ' Recensione di Luciano Magnanelli, vicepresidente della Lega Navale Italiana, per la serie letture in pozzetto ',
        quoteEn: 'Review by Luciano Magnanelli, vice president of the Italian Naval League, for the Reading in the Cockpit series.'
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
  titleEn: [
    'Presentation at the Pino Torinese library',
    'Presentation at the Pisa Naval League',
    'Presentation at the La Spezia Naval Museum'
  ][i],
  date: ['2026-11-07', 'coming soon', 'coming soon'][i],
  time: ['17:00', 'da definirsi', 'da definirsi'][i],
  timeEn: ['17:00', 'to be confirmed', 'to be confirmed'][i],
  location: ['Biblioteca A. Caselle', 'Lega Navale', 'Museo Navale'][i],
  locationEn: ['A. Caselle Library', 'Naval League', 'Naval Museum'][i],
  city: ['Pino Torinese', 'Pisa', 'Spezia'][i],
  description: 'Presentazione del libro con l’autore.',
  descriptionEn: 'Presentation of the book with the author.',
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
  { id: 'c9', name: 'E.B.', comment: 'Emozionante! E mi ha fatto conoscere una parte di storia che non conoscevo assolutamente. La seconda parte è bellissima; si arriva alla fine e dispiace che il libro sia già finito. Lo stile che hai usato permette di creare delle immagini, come delle fotografie, che restano impresse nella mente. Una pecca: avrei aggiunto due cartine, una degli Usa, una del Mediterraneo, per mostrare i tanti luoghi che vengono citati e che mi hanno spinto a cercarli sulle mappe.'},
  { id: 'c10', name: 'C.G.', comment: 'Veramente bello, ben scritto e originale'},
  { id: 'c11', name: 'Il Migliore', comment: 'Molto bella la prima parte, con tanti espedienti poetici; molto bella l’introduzione alterna dei personaggi ed il seguirli in parallelo fino a vedere quando poi le loro vite si incrociano. Il linguaggio permette di mantenere ritmo serrato ed attenzione anche se l’argomento è di nicchia: ci si appassiona, si scoprono fatti, si è partecipi'},
  { id: 'c12', name: 'V.C.', comment: 'Ho appena terminato la lettura. Il contenuto e il ritmo narrativo fanno del libro una lettura veramente avvincente. Ti auguro di cuore un buon riscontro di mercato: te lo meriti!'},
  { id: 'c13', name: 'Massimo G.', comment: 'Appassionante ed unico; questo modo di scrivere è veramente fantastico!'},
  { id: 'c14', name: 'Grazia B.', comment: 'Piaciuto molto; colpita dallo stile: non è un romanzo, non è una poesia, ma ti prende'},
]

export const commentTranslations: Record<string, string> = {
  c1: "At first I was simply curious about the word 'ballad' associated with a book by Lorenzini. From the first page I understood that his usual refined narrative style had been enriched by linguistic creativity and a rhythm that carries you to the next page. The historical precision of the first part and the vivid characterization of the second did not surprise me: Lorenzini has taught his readers to appreciate the connection between his passion for history and the successful inclusion of fictional figures in a real setting. This is a book that should be read at least twice: first to grasp its historical and social message, and then to appreciate the author's exceptionally refined narrative language.",
  c2: 'I was thrilled by it! I liked the second part even more than the first. I knew nothing about these pages of our history, yet they were told so well that I felt like looking them up for myself.',
  c3: 'I greatly enjoyed it, both for the rigor of its reconstruction and for its original form. I read it with pleasure in one sitting.',
  c4: 'Truly beautiful and moving. I had to stop at one point because I am sensitive to certain subjects, but even the delicate themes were handled with great skill. A book that stays with you.',
  c5: 'Congratulations. I have just finished the book, and I was captivated by its style and its relevance, despite the unfamiliar subjects, which I was happy to explore.',
  c6: 'Wonderful! How did he think of writing it as a ballad? He gives it such a strong rhythm that you feel the urgency of finishing the ships in time. A beautifully written and engaging book, with vivid and unexpected female characters.',
  c7: 'I was moved. Unexpected and disarming.',
  c8: "I found it extraordinarily epic and poetic. It unlocked memories from the first time I visited my father's shipyard. The text flows, fascinates and carries you into the spirit of that time and undertaking. It may seem like a niche subject, but the events speak to everyone through a story of ingenuity, sacrifice, hardship and perseverance.",
  c9: 'Moving! It introduced me to a part of history I knew absolutely nothing about. The second part is beautiful; you reach the end and regret that the book is already over. Your style creates images, almost like photographs, that remain in the mind. I would have added two maps, one of the United States and one of the Mediterranean, to show the many places mentioned.',
  c10: 'Truly beautiful, well written and original.',
  c11: 'The first part is excellent, with many poetic devices. I loved the alternating introduction of the characters and following them in parallel until their lives cross. The language keeps a fast pace and attention even when the subject is niche: you become involved, discover new facts and feel part of it.',
  c12: 'I have just finished reading it. The content and narrative rhythm make it truly compelling. I sincerely wish you great success: you deserve it!',
  c13: 'Passionate and unique; this way of writing is truly fantastic!',
  c14: 'I liked it very much. I was struck by the style: it is neither a novel nor a poem, yet it completely draws you in.',
}
