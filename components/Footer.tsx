'use client'

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    const headerOffset = 90
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#145542] px-5 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full bg-white text-xl">🌿</div>
            <strong className="text-lg">BARANGAY<br />BAESA</strong>
          </div>
          <p className="mt-6 text-sm italic text-[#d0e4d9]">&quot;Pagkakaisa at Pag-unlad para sa lahat ng mamamayan&quot;</p>
          <p className="mt-4 text-sm text-[#d0e4d9]">Hon. Eduardo R. Juan<br />Punong Barangay</p>
        </div>
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <div className="space-y-2 text-sm text-[#e0efe7]">
            <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="block cursor-pointer">News &amp; Events</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block cursor-pointer">File a Complaint</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block cursor-pointer">Service Requests</a>
            <a href="#signin" className="block">Login / Sign Up</a>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Services</h3>
          <div className="space-y-2 text-sm text-[#e0efe7]">
            <p>Barangay Clearance</p>
            <p>Business Permit</p>
            <p>Barangay Indigency</p>
            <p>Barangay Residency</p>
            <p>Health Services</p>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Contact &amp; Location</h3>
          <p className="text-sm text-[#e0efe7]">☎ &nbsp;0962–7150979</p>
          <p className="mt-4 text-sm text-[#e0efe7]">⌖ &nbsp;Barangay Baesa<br /><span className="ml-6">Quezon City, Metro Manila</span></p>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-[#d0e4d9]">© 2026 Barangay Baesa E-Services. All Rights Reserved.</div>
    </footer>
  )
}