// Import ng mga TypeScript types mula sa Next.js para sa metadata at viewport configurations
import type { Metadata, Viewport } from 'next'

// Import ng Plus Jakarta Sans mula sa Google fonts
import { Plus_Jakarta_Sans } from 'next/font/google'

// Import ng global CSS styles ng iyong proyekto
import './globals.css'

// I-configure ang Plus Jakarta Sans font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

// Pagtatakda ng metadata ng website (SEO, title, description, at mga favicon/app icons)
export const metadata: Metadata = {
  title: 'Barangay Baesa E-Services',
  description: 'The official online services portal of Barangay Baesa, Quezon City.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/baesa-logo.png',
        media: '(prefers-color-scheme: light)', // Favicon kapag naka-light mode ang user
      },
      {
        url: '/baesa-logo.png',
        media: '(prefers-color-scheme: dark)', // Favicon kapag naka-dark mode ang user
      },
      {
        url: '/baesa-logo.png',
        type: 'image/svg+xml', // Scalable vector icon
      },
    ],
    apple: '/apple-icon.png', // Icon para sa mga Apple devices kapag in-add sa home screen
  },
}

// Pagtatakda ng viewport settings (color scheme at browser theme colors)
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' }, // Kulay ng browser header sa light mode
    { media: '(prefers-color-scheme: dark)', color: 'black' },   // Kulay ng browser header sa dark mode
  ],
}

// Pangunahing Root Layout component na binabalot ang buong web application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode // Mga susunod na pahina o components sa loob ng app
}>) {
  return (
    <html lang="en">
      {/* Idinagdag ang jakarta.className sa body para magamit sa buong website */}
      <body className={`${jakarta.className} antialiased`}>
        {/* Ang mga pahina o sub-components ng website */}
        {children}
      </body>
    </html>
  )
}