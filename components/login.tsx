'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function Login({ onSignup }: { onSignup: () => void }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-[#0F5235] tracking-tight">Welcome back!</h2>
      <p className="mt-1 text-sm text-gray-500 mb-6">Enter your credentials to access your account</p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#101828] mb-1">Email address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition" 
          />
        </div>

        <div className="relative">
          <label className="block text-xs font-semibold text-[#101828] mb-1">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            required 
            className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition pr-10" 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-xs py-1">
          <label className="flex items-center gap-2 cursor-pointer text-gray-600">
            <input type="checkbox" className="rounded border-gray-300 text-[#075538] focus:ring-[#075538]" />
            Remember me
          </label>
          <a href="#" className="text-[#075538] font-semibold hover:underline">Forgot password?</a>
        </div>

        <button 
          type="submit" 
          className="w-full rounded-xl bg-[#0b482b] py-3.5 text-white font-bold transition hover:bg-[#07361f] shadow-md text-sm mt-2"
        >
          Login
        </button>

        <p className="mt-4 text-center text-xs text-gray-600">
          Don't have an account?{' '}
          <button 
            type="button" 
            onClick={onSignup} 
            className="text-[#0b482b] font-bold hover:underline"
          >
            Sign up
          </button>
        </p>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button 
          type="button" 
          onClick={onSignup}
          className="w-full rounded-xl border-2 border-[#0b482b] py-3 text-[#0b482b] font-bold transition hover:bg-[#0b482b]/5 text-sm"
        >
          Create account
        </button>
      </form>
    </div>
  )
}