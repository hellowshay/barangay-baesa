'use client'

import { useState } from 'react'

const aboutGallery = [
  '/baesa 2.jpg',
  '/baesa-img.jpg',
  '/baesa.jpg', 
]

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0)
  const changePhoto = (direction: number) => setActivePhoto((current) => (current + direction + aboutGallery.length) % aboutGallery.length)

  return (
    <section id="about" className="bg-[#E6F4EC] px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-[#0F5235] tracking-widest font-semibold text-xs uppercase">
  ABOUT
</p>
        <div className="mt-7 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="section-title text-left text-[#0F5235] font-bold text-6xl" >Barangay Baesa</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#536879]">
              <p>Barangay Baesa is one of Quezon City's largest and most vibrant communities. Founded in 1910 with approximately 150 residents, the barangay has grown exponentially. Its name originates from "BA-ISA," a Tagalog term meaning "a lone woman," derived from historical accounts when Spanish settlers encountered the indigenous community in the area.</p>
              <p>Originally an agricultural and hunting ground, Barangay Baesa transformed into a thriving urban center following its official recognition as a barangay in 1974. Today, with a population of approximately 180,000 residents and a yearly budget of P15 million, the barangay has developed comprehensive infrastructure including schools, healthcare facilities, commercial establishments, and recreational facilities.</p>
              <p>The barangay is home to various community organizations and benefits from strong support by both national and city government, fostering continuous development and improvement for its residents' quality of life.</p>
            </div>
          </div>
          {/* Photo Carousel sa About Section */}
          <div aria-label="Barangay Baesa photo carousel" className="min-w-0">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm">
              <img src={aboutGallery[activePhoto]} alt={`Barangay Baesa community photo ${activePhoto + 1}`} className="aspect-[4/3] w-full object-cover" />
              <button type="button" aria-label="Previous photo" onClick={() => changePhoto(-1)} className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl leading-none text-[#238b51] shadow-md transition hover:scale-105">‹</button>
              <button type="button" aria-label="Next photo" onClick={() => changePhoto(1)} className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl leading-none text-[#238b51] shadow-md transition hover:scale-105">›</button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {aboutGallery.map((image, index) => (
                <button key={index} type="button" aria-label={`Show photo ${index + 1}`} aria-current={activePhoto === index} onClick={() => setActivePhoto(index)} className={`size-2.5 rounded-full transition ${activePhoto === index ? 'bg-[#18743d]' : 'bg-[#bed8c7]'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
