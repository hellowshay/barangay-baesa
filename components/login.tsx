'use client'

export default function Login({ onSignup }: { onSignup: () => void }) {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">Sign In</h2>
      <p className="mt-1 text-sm text-gray-500 mb-6">Access your Barangay Baesa resident portal</p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
          <input type="email" placeholder="Enter your email" required className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="Enter your password" required className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#075538] focus:ring-1 focus:ring-[#075538] transition" />
        </div>

        <button type="submit" className="w-full mt-4 rounded-xl bg-[#0b482b] py-3.5 text-white font-bold transition hover:bg-[#07361f] shadow-md text-sm">
          Sign In
        </button>

        <p className="mt-4 text-center text-xs text-gray-600">
          Don't have an account?{' '}
          <button type="button" onClick={onSignup} className="text-[#0b482b] font-bold underline hover:text-[#07361f]">
            Create account
          </button>
        </p>
      </form>
    </div>
  )
}