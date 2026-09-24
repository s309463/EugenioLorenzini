# Configurazione Supabase

1. Crea un progetto su Supabase.
2. In `Project Settings > API`, copia URL e anon key in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_EMAIL=vittolore03@gmail.com
```

3. In `SQL Editor`, esegui tutto il contenuto di `supabase/schema.sql`.
4. In `Authentication > Users`, crea l’unico account admin con email `vittolore03@gmail.com` e la password scelta. Non inserire la password nei file del progetto.
5. Riavvia il server con `pnpm dev`.
6. Apri `/admin/login` per inserire le presentazioni.

Il pannello assegna automaticamente ogni nuova presentazione al libro con l’anno più recente. Le date future compaiono nella sezione Eventi; dopo la data, la presentazione viene mostrata nella scheda del libro più recente, insieme alla foto caricata nello storage `presentation-images`.

Le traduzioni dei contenuti inseriti dal pannello sono richieste in entrambe le lingue. La scelta della lingua del sito viene salvata nel browser e parte dall’italiano.
