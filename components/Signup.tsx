'use client'

import { useState } from 'react'
import { Upload, Eye, EyeOff } from 'lucide-react'

export default function Signup({ onLogin }: { onLogin: () => void })  {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [fileName, setFileName] = useState('Choose file to upload (Valid ID)')

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
      
      <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Create account</h2>
      <p className="mt-1 text-sm text-gray-500 mb-6">Fill in your details to register as a resident</p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">First name</label>
            <input 
              type="text" 
              placeholder="Juan" 
              required 
              className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Last name</label>
            <input 
              type="text" 
              placeholder="Dela Cruz" 
              required 
              className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile number</label>
          <input 
            type="tel" 
            placeholder="+63 9XX XXX XXXX" 
            required 
            className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Address</label>
          <input 
            type="text" 
            placeholder="Enter your complete address" 
            required 
            className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition"
          />
        </div>

        {/* Upload Valid ID */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Upload Valid ID <span className="text-red-500">*</span>
          </label>
          <div className="relative flex items-center justify-between rounded-xl border border-gray-200 px-3.5 py-2.5 bg-white shadow-sm hover:border-[#075538] transition cursor-pointer">
            <span className="text-xs text-gray-400 truncate">{fileName}</span>
            <input 
              type="file" 
              required 
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFileName(e.target.files[0].name)
                }
              }}
            />
            <Upload size={16} className="text-gray-400 shrink-0" />
          </div>
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Create password" 
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

          <div className="relative">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm password</label>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Re-enter password" 
              required 
              className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition pr-10"
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full mt-4 rounded-xl bg-[#0b482b] py-3.5 text-white font-bold transition hover:bg-[#07361f] shadow-md text-sm"
        >
          Create account
        </button>

        {/* Switch Link */}
        <p className="mt-4 text-center text-xs text-gray-600">
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={onLogin} 
            className="text-[#0b482b] font-bold underline hover:text-[#07361f]"
          >
            Login
          </button>
        </p>

      </form>
    </div>
  )
}