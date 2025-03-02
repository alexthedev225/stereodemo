import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const calSans = localFont({
  src: '../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
  display: 'swap',
})
