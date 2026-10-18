'use client'

import { useState } from 'react'
import Login from '@/components/login'
import Signup from '@/components/Signup'
import Image from 'next/image'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  return (
    <main className="min-h-screen bg-[#eaf7f0] flex flex-col justify-between overflow-x-hidden p-3 sm:p-4 lg:p-6">
      
      {/* 50/50 Dynamic Container */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        
        {/* --- FORM SECTION --- */}
        <div className={`flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8 ${mode === 'signup' ? 'lg:order-2' : 'lg:order-1'}`}>
          
          {/* Header Bar */}
          <div className="flex items-center justify-between w-full mb-4">
            <a 
              href="/" 
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#075538] transition"
            >
              <span>&lt;</span> Back to Home Page
            </a>
            
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-white border border-gray-200 overflow-hidden relative flex items-center justify-center shadow-sm">
                <img src="/baesa-logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-left hidden sm:block">
                <strong className="block text-xs font-bold text-[#0F5235] leading-tight">Barangay Baesa</strong>
                <span className="text-[10px] text-gray-500">Online Services Portal</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="flex-1 flex items-center justify-center my-auto py-6">
            <div className={`w-full ${mode === 'signup' ? 'max-w-xl' : 'max-w-md'}`}>
              {mode === 'login' ? (
                <Login onSignup={() => setMode('signup')} />
              ) : (
                <Signup onLogin={() => setMode('login')} />
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-500 mt-2">
            By signing in, you agree to our{' '}
            <a href="#" className="font-semibold text-[#075538] hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="font-semibold text-[#075538] hover:underline">Privacy Policy</a>
          </footer>
        </div>

        {/* --- HERO IMAGE SECTION --- */}
        <div className={`relative hidden lg:flex flex-col justify-end p-10 xl:p-12 text-white overflow-hidden rounded-3xl min-h-[85vh] ${mode === 'signup' ? 'lg:order-1' : 'lg:order-2'}`}>
          <Image 
            src="/baesa 4.png"
            alt="Barangay Baesa Hall"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center z-0 rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#022114]/90 via-[#022114]/30 to-transparent z-10 rounded-3xl" />
          
          <div className="relative z-20 mb-4">
            <h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-snug">
              Maging bahagi ng mas konektadong komunidad.
            </h1>
            <p className="mt-3 text-xs xl:text-sm opacity-90 max-w-lg leading-relaxed">
              Create an account to request clearances, permits, and records online.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}