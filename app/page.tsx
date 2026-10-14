import Header from '@/components/Header'
import Hero from '@/components/Home'
import About from '@/components/About'

import Services from '@/components/Services'
import News from '@/components/News'
import MapSection from '@/components/Map-Sec'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
    
      <Services />
      <News />
      <MapSection />
      <Footer />
    </main>
  )
}