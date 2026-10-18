'use client'

import { ChevronRight, FileCheck2, HeartHandshake, Send } from 'lucide-react'

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

const quickLinks = [
  {
    title: 'About Us',
    text: 'Learn about Barangay Baesa history and officials.',
    id: 'about',
    Icon: FileCheck2,
  },
  {
    title: 'Services',
    text: 'Request clearances, permits, and other services.',
    id: 'services',
    Icon: Send,
  },
  {
    title: 'News & Events',
    text: 'Stay updated with the latest barangay news.',
    id: 'news',
    Icon: HeartHandshake,
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden bg-[#f8faf8] px-4 pb-12 pt-[110px] sm:px-8 sm:pb-16 sm:pt-[130px] lg:px-16 lg:pt-[170px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,#b9edc5,transparent_35%),linear-gradient(135deg,#f8faf8_42%,#c4efcf_42%,#e8faeb_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Text + Image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side: Text Content */}
          <div className="z-10 min-w-0">
            <p className="mb-6 text-sm font-medium text-[#0E6E3B]">
              ● &nbsp;Quezon City · District VI
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.02] tracking-tight text-[#075538] sm:text-6xl lg:text-7xl">
              Welcome to <span className="text-[#258c52]">Barangay Baesa</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#345853] sm:text-lg">
              Your trusted partner for community services and development — request
              certificates, permits and health services online, anytime.
            </p>
          </div>

          {/* Right Side: Image (hidden sa mobile at tablet) */}
          <div className="relative z-20 hidden w-full lg:block lg:w-[140%]">
            <div className="relative overflow-hidden">
              <img
                src="/baesa 4.png"
                alt="Barangay Baesa"
                className="aspect-[16/10] h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="relative mt-12 grid w-full grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4">
          {quickLinks.map(({ title, text, id, Icon }) => (
            <a
              key={title}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="flex min-w-0 cursor-pointer items-center gap-4 rounded-xl border border-[#dce6df] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-col sm:items-start sm:gap-3 sm:p-5 lg:flex-row lg:items-center lg:gap-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#eaf7ed] text-[#147940]">
                <Icon size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <strong className="block text-base text-[#142d23]">{title}</strong>
                <span className="block text-xs leading-snug text-[#64736b]">{text}</span>
              </span>

              <ChevronRight
                className="shrink-0 text-[#8cab98] sm:hidden lg:block"
                size={18}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}