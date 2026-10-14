import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  // Base classes para sa pangkalahatang button layout
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer'

  // Styles ayon sa napiling variant (gumagamit ng brand colors ng Barangay Baesa)
  const variants = {
    default: 'bg-[#238b51] text-white hover:bg-[#1b6e40] active:scale-95 shadow-sm',
    outline: 'border border-[#d8e5dc] bg-white text-[#132e23] hover:bg-[#e6f4ec] active:scale-95',
    secondary: 'bg-[#e7f5eb] text-[#18864c] hover:bg-[#d5eedf] active:scale-95',
    ghost: 'hover:bg-[#e6f4ec] text-[#132e23]',
  }

  // Styles ayon sa laki (size)
  const sizes = {
    default: 'h-10 px-4 py-2 text-sm rounded-xl gap-2',
    sm: 'h-8 px-3 text-xs rounded-lg gap-1.5',
    lg: 'h-12 px-6 text-base rounded-2xl gap-2.5',
    icon: 'size-10 rounded-xl grid place-items-center',
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}