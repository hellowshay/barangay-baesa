import { ArrowRight, FileCheck2, HeartHandshake, Send, ShieldCheck, Store, MapPinHouse } from 'lucide-react'

const services = [
  { title: 'Barangay Clearance', description: 'Official proof of residency and good standing', icon: FileCheck2 },
  { title: 'Special Permits', description: 'Various permits for community projects and events.', icon: ShieldCheck },
  { title: 'Complaints', description: 'File community concerns and feedback', icon: HeartHandshake },
  { title: 'Barangay Business Permit', description: 'License for business operations in the barangay', icon: Store },
  { title: 'Barangay Indigency', description: 'Certifications for indigent residents', icon: HeartHandshake },
  { title: 'First-Time Job Seeker', description: 'Certificates for first-time job seekers', icon: Send },
   { title: 'Barangay Residency', description: 'Proof of residency certificate  ', icon: MapPinHouse },
]

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="section-title text-[#0F5235]  text-5xl font-bold" >Barangay Services</h2>
          <p className="mx-auto mt-5 max-w-2xl text-1xl text-[#4B5F56]">Request certificates and submit requirements at the Barangay Hall. Sign in to get started.</p>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-[#e4e8e5] bg-white p-7 shadow-[0_10px_25px_rgba(23,55,39,0.14)] transition hover:-translate-y-1">
              <div className="mb-8 grid size-28 place-items-center rounded-full bg-[#edf8f0] text-[#218c51]">
                <Icon size={58} strokeWidth={1.6} />
              </div>
              <h3 className="text-xl font-bold text-[#132e23]">{title}</h3>
              <p className="mt-2 text-sm text-[#5d6d65]">{description}</p>
              <a href="#signin" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#18864c]">Request <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}