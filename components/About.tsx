'use client'

import { useState } from 'react'

const aboutGallery = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S5E5wDElBxnbcJ6S5kpCisRkAtj9wY.png',
  '/baesa 3.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o2twlU9ZNN2GMRfF9HBcCKU4ESQfoE.png',
]

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0)
  const changePhoto = (direction: number) => setActivePhoto((current) => (current + direction + aboutGallery.length) % aboutGallery.length)

  return (
    <section id="about" className="bg-[#eaf7ed] px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">ABOUT</p>
        <div className="mt-7 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="section-title text-left">Barangay Baesa</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#536879]">
              <p>Barangay Baesa is one of Quezon City&apos;s largest and most vibrant communities. Founded in 1910 with approximately 150 residents, the barangay has grown exponentially.</p>
              <p>Originally an agricultural and hunting ground, Barangay Baesa transformed into a thriving urban center following its official recognition as a barangay in 1974. Today, the barangay continues to develop comprehensive infrastructure for its residents.</p>
              <p>The barangay is home to various community organizations and benefits from strong support by both national and city government.</p>
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
                <button key={image} type="button" aria-label={`Show photo ${index + 1}`} aria-current={activePhoto === index} onClick={() => setActivePhoto(index)} className={`size-2.5 rounded-full transition ${activePhoto === index ? 'bg-[#18743d]' : 'bg-[#bed8c7]'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="eyebrow">LEADERSHIP</p>
          <h2 className="section-title mt-5">Government Officials</h2>
        </div>
      </div>
    </section>
  )
}
