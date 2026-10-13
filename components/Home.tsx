'use client'

import { ChevronRight, FileCheck2, HeartHandshake, Send } from 'lucide-react'

const heroImage = '/baesa 3.png'

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

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f8faf8] px-5 pb-16 pt-[140px] sm:px-10 lg:px-16 lg:pt-[170px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,#b9edc5,transparent_35%),linear-gradient(135deg,#f8faf8_42%,#c4efcf_42%,#e8faeb_70%)]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Grid layout para magkatabi ang text at ang malinis na image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Side: Text Content */}
          <div className="z-10">
            <p className="mb-6 text-sm font-medium text-[#08753d]">● &nbsp;Quezon City · District VI</p>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-tight text-[#075538] sm:text-7xl">
              Welcome to <span className="text-[#258c52]">Barangay Baesa</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#46645d]">
              Your trusted partner for community services and development — request certificates, permits and health services online, anytime.
            </p>
          </div>

     
{/* Right Side: Larger Image Container */}
<div className="relative w-full z-20 lg:-mr-32 lg:w-[160%]">
  <div className="relative overflow-hidden right-58 ">
    <img 
      src="/baesa 4.png" 
      alt="Barangay Baesa" 
      className="h-full w-full object-cover object-center aspect-[16/10]" 
    />
  </div>
</div>
        </div>

        {/* Quick Action Links Cards */}
        <div className="relative mt-16 grid gap-4 md:grid-cols-3">
          {[
            ['About Us', 'Learn about Barangay Baesa history and officials.', 'about', FileCheck2],
            ['Services', 'Request clearances, permits, and other services.', 'services', Send],
            ['News & Events', 'Stay updated with the latest barangay news.', 'news', HeartHandshake],
          ].map(([title, text, id, Icon]) => (
            <a key={title as string} href={`#${id}`} onClick={(e) => scrollToSection(e, id as string)} className="flex items-center gap-4 rounded-xl border border-[#dce6df] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eaf7ed] text-[#147940]">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <strong className="block text-base text-[#142d23]">{title as string}</strong>
                <span className="block truncate text-xs text-[#64736b]">{text as string}</span>
              </span>
              <ChevronRight className="ml-auto shrink-0 text-[#8cab98]" size={18} />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}