'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'

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

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', 'home'],
    ['About Us', 'about'],
    ['Government', 'government'],
    ['Services', 'services'],
    ['News & Events', 'news'],
    ['Map', 'map'],
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Top green info bar */}
      <div className="bg-[#21864d] px-5 py-2 text-xs text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <span>The Official Website of Barangay Baesa E-Services</span>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-2"><b className="text-sm">f</b> Facebook</span>
            <span className="flex items-center gap-2"><Phone size={13} /> Hotline: 0962–7150979</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation header */}
      <div className="bg-[#d1f4d9] px-5 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 text-[#075b3c]">
            <div className="grid size-11 place-items-center rounded-full border-2 border-[#075b3c] bg-white text-xl">
              <img src="baesa-logo.png" alt="Barangay Baesa Logo" />
            </div>
            <div>
              <strong className="block text-base leading-tight sm:text-lg">BARANGAY BAESA</strong>
              <span className="text-xs">E-Services Portal</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-2 text-sm text-[#456e60] lg:flex">
            {links.map(([label, id]) => (
              <a 
                key={id} 
                href={`#${id}`} 
                onClick={(e) => scrollToSection(e, id)} 
                className="rounded-lg px-4 py-2 font-medium transition-all duration-200 cursor-pointer hover:bg-[#0e6e3b]/20 hover:text-[#075b3c]"
              >
                {label}
              </a>
            ))}
            {/* Dito natin inayos para dumiretso sa /login page */}
            <Link 
              href="/login" 
              className="ml-4 rounded-xl bg-[#075538] px-6 py-3 font-semibold text-white transition hover:bg-[#043f29]"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button aria-label="Toggle navigation menu" className="rounded-lg p-2 text-[#075b3c] lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <nav className="mt-4 grid gap-2 border-t border-[#b4e9c2] pt-4 lg:hidden">
            {links.map(([label, id]) => (
              <a onClick={(e) => { setOpen(false); scrollToSection(e, id); }} key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-[#075b3c] hover:bg-white/60 cursor-pointer font-medium">
                {label}
              </a>
            ))}
            {/* Mobile Sign In button link papuntang /login */}
            <Link href="/login" className="rounded-lg bg-[#075538] px-3 py-2 text-white font-medium text-center">
              Sign In
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}