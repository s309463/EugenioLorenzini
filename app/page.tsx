import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/hero/hero-section'
import { BiographySection } from '@/components/biography/biography-section'
import { ArticlesSection } from '@/components/articles/articles-section'
import { BooksTimeline } from '@/components/books/books-timeline'
import { UpcomingEvents } from '@/components/events/upcoming-events'
import { ContactSection } from '@/components/contact/contact-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BiographySection />
        <BooksTimeline />
        <UpcomingEvents />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
