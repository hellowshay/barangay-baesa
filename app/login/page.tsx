'use client'

import { useState } from 'react'
import Login from '@/components/login'
import { Signup } from '@/components/Sign-in'
import Image from 'next/image'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('signup')

  return (
    <main className="min-h-screen bg-[#eaf7f0] lg:bg-[#f7fdfa] flex flex-col justify-between p-4 sm:p-6 lg:p-0 lg:grid lg:grid-cols-[1.1fr_1fr]">
      
      {/* Left Column Image (Desktop Only) */}
      <div className="relative hidden lg:flex flex-col justify-end p-12 text-white overflow-hidden">
        <Image 
          src="/baesa-hall.png" 
          alt="Barangay Baesa Hall"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022114]/90 via-[#022114]/40 to-transparent z-10" />
        
        <div className="relative z-20">
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Maging bahagi ng mas konektadong komunidad.
          </h1>
          <p className="mt-4 text-base xl:text-lg opacity-90 max-w-xl">
            Create an account to request clearances, permits, and records online.
          </p>
        </div>
      </div>

      {/* Right Column / Mobile Container */}
      <div className="flex-1 flex flex-col justify-between max-w-xl mx-auto w-full lg:max-w-none lg:p-12 xl:p-16">
        
        {/* Header Logo - Ginamitan ng standard img para iwas hydration error */}
        <header className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="size-11 rounded-full border border-gray-200 bg-white overflow-hidden flex items-center justify-center shadow-sm">
            <img 
              src="/baesa-logo.png" 
              alt="Barangay Baesa Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <strong className="block text-lg sm:text-xl font-bold text-[#0F5235]">Barangay Baesa</strong>
            <span className="text-xs text-[#0F5235]/80">Online Services Portal</span>
          </div>
        </header>

        {/* Dynamic Form Component */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            {mode === 'login' ? (
              <Login onSignup={() => setMode('signup')} />
            ) : (
              <Signup onLogin={() => setMode('login')} />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 sm:mt-8 text-center text-xs text-gray-500">
          By signing in, you agree to our{' '}
          <a href="#" className="font-semibold text-[#075538] hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="font-semibold text-[#075538] hover:underline">Privacy Policy</a>
        </footer>

      </div>
    </main>
  )
}