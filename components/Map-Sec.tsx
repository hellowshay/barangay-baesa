import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

export default function MapSection() {
  return (
    <section id="map" className="bg-white px-5 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="section-title">Barangay Map</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#63756d]">Locate the Barangay Hall and other essential community landmarks in Barangay Baesa, Quezon City.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[400px_1fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-[#d8e5dc] p-7">
              <p className="eyebrow">BARANGAY HALL</p>
              <h3 className="mt-4 text-2xl font-bold text-[#132e23]">Barangay Baesa</h3>
              <div className="mt-6 space-y-5 text-sm text-[#52655c]">
                <p className="flex gap-3"><MapPin className="text-[#208c51]" />Barangay Hall, Barangay Baesa<br />Quezon City, Metro Manila</p>
                <p className="flex gap-3"><Clock3 className="text-[#208c51]" />Mon–Fri, 8:00 AM–5:00 PM<br />Lunch break 12:00 PM–1:00 PM</p>
                <p className="flex gap-3"><Phone className="text-[#208c51]" />0962–7150979</p>
                <p className="flex gap-3"><Mail className="text-[#208c51]" />barangaybaesaeservices@gmail.com</p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <a href="https://maps.google.com" className="rounded-xl bg-[#238b51] px-4 py-3 text-center text-sm font-semibold text-white">Get directions</a>
                <a href="tel:09627150979" className="rounded-xl bg-[#e7f5eb] px-4 py-3 text-center text-sm font-semibold text-[#18864c]">Call</a>
              </div>
            </div>
            <div className="rounded-3xl border border-[#d8e5dc] p-7">
              <p className="eyebrow">KEY LOCATIONS</p>
              <ol className="mt-5 space-y-4 text-sm font-medium text-[#17382b]">
                <li><b>1</b> Barangay Hall</li>
                <li><b>2</b> Health Center (3rd Floor)</li>
                <li><b>3</b> Barangay Baesa Plaza</li>
              </ol>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-[#d8e5dc] bg-[#eaf7ed]">
            <iframe title="Actual map of Barangay Baesa, Quezon City" src="https://www.openstreetmap.org/export/embed.html?bbox=121.002%2C14.675%2C121.045%2C14.705&layer=mapnik&marker=14.690%2C121.023" className="absolute inset-0 h-full w-full border-0" loading="lazy" />
            <a href="https://www.openstreetmap.org/?mlat=14.690&mlon=121.023#map=15/14.690/121.023" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#146b42] shadow-md">Open larger map</a>
          </div>
        </div>
      </div>
    </section>
  )
}