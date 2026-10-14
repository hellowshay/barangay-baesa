'use client'

import { Phone, MapPin } from 'lucide-react'

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
    <footer className="bg-[#124233] text-white">
      {/* Upper Main Footer Content */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Barangay Logo & Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-full bg-white p-1">
                <img src="/baesa-logo.png" alt="Barangay Baesa Logo" className="h-full w-full object-contain" />
              </div>
              <strong className="text-base leading-tight font-bold text-[#23A461]">
                BARANGAY<br />BAESA
              </strong>
            </div>
            <p className="mt-6 text-sm italic text-[#c8ded3]">
              &quot;Pagkakaisa at Pag-unlad para sa lahat ng mamamayan&quot;
            </p>
            <p className="mt-5 text-sm text-[#c8ded3]">
              <span className="font-semibold text-white">Hon. Eduardo R. Juan</span><br />
              Punong Barangay
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#23A461]">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm text-[#d1e5db]">
              <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="block hover:underline">
                News &amp; Events
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block hover:underline">
                File a Complaint
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block hover:underline">
                Service Requests
              </a>
              <a href="#support" className="block hover:underline">
                Help &amp; Support
              </a>
              <a href="#signin" className="block hover:underline">
                Login / Sign Up
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-[#23A461]">Services</h3>
            <div className="mt-5 space-y-3 text-sm text-[#d1e5db]">
              <p>Barangay Clearance</p>
              <p>Business Permit</p>
              <p>Barangay Indigency</p>
              <p>Barangay Residency</p>
              <p>Health Services</p>
            </div>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-base font-bold text-[#23A461]">Contact &amp; Location</h3>
            <div className="mt-5 space-y-4 text-sm text-[#d1e5db]">
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#23A461]" />
                <span>0962–7150979</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-[#23A461]" />
                <span>
                  Barangay Baesa<br />
                  Quezon City, Metro Manila
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-12 border-t border-white/10" />

        {/* GOVPH & Government Links Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[300px_1fr_1fr]">
          {/* Republic of the Philippines Logo & Title */}
          <div>
            <div className="size-20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_the_Philippines.svg/500px-Coat_of_arms_of_the_Philippines.svg.png" 
                alt="Republic of the Philippines Coat of Arms" 
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white">
              Republic of the Philippines
            </p>
            <p className="mt-1 text-xs text-[#a3c4b4]">
              All content is in the public domain unless otherwise stated.
            </p>
          </div>

          {/* About GOVPH */}
          <div>
            <h4 className="text-sm font-bold text-[#23A461]">ABOUT GOVPH</h4>
            <p className="mt-4 text-sm leading-relaxed text-[#c8ded3]">
              Learn more about GOVPH, its structure, how local government works, and the people behind it.
            </p>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-sm font-bold text-[#23A461]">GOVERNMENT LINKS</h4>
            <div className="mt-4 space-y-2 text-sm text-[#d1e5db]">
              <a href="https://president.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                Office of the President
              </a>
              <a href="https://sc.judiciary.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                Supreme Court
              </a>
              <a href="https://senate.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                Senate
              </a>
              <a href="https://ca.judiciary.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                Court of Appeals
              </a>
              <a href="https://www.congress.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                House of Representatives
              </a>
              <a href="https://quezoncity.gov.ph" target="_blank" rel="noreferrer" className="block hover:underline">
                Quezon City
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#1f8750] px-5 py-4 text-xs font-medium text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>© 2026 Barangay Baesa E-Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#terms" className="hover:underline">Terms and Conditions</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}