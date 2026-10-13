import { ArrowRight, FileCheck2 } from 'lucide-react'

const news = [
  { category: 'News', title: 'Sunog sa Purok 2', date: 'May 4, 2026', description: 'Community safety updates and important announcements for every resident.' },
  { category: 'News', title: 'Dental Cleaning', date: 'April 28, 2026', description: 'Free dental health services for residents of Barangay Baesa.' },
  { category: 'Event', title: 'Eye Refraction', date: 'April 20, 2026', description: 'Health program and eye checkup for the community.' },
  { category: 'Event', title: 'Libreng Tuli', date: 'April 12, 2026', description: 'Community health event for children and families.' },
]

export default function News() {
  return (
    <section id="news" className="bg-[#fbfcfb] px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="section-title">Latest News &amp; Events</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#63756d]">Stay updated with the latest announcements, community events and health programs from Barangay Baesa.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {news.map((item, index) => (
            <article key={item.title} className={`overflow-hidden rounded-3xl border border-[#dce7df] bg-white shadow-sm ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}>
              <div className="grid min-h-56 place-items-center bg-[#e6f5eb] text-[#697786]">
                <div className="rounded-lg border-4 border-current p-3"><FileCheck2 size={38} /></div>
              </div>
              <div className="p-8">
                <span className="rounded-full bg-[#dcefe4] px-3 py-1 text-xs font-semibold text-[#125c42]">{index === 0 ? 'Featured · ' : ''}{item.category}</span>
                <h3 className="mt-5 text-2xl font-bold text-[#132e23]">{item.title}</h3>
                <p className="mt-4 text-[#617069]">{item.description}</p>
                <p className="mt-5 text-sm text-[#82918a]">{item.date}</p>
                <button className="mt-5 rounded-xl bg-[#238b51] px-5 py-3 text-sm font-semibold text-white">Read more <ArrowRight className="ml-2 inline" size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}