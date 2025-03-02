import { Outfit } from 'next/font/google'
import { Suspense } from "react"
import type { Metadata } from "next"

import "./globals.css"

import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ScrollProvider } from "./context/ScrollContext"

// Configuration de la police Outfit
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'], // Inclure différentes graisses
})

export const metadata: Metadata = {
  metadataBase: new URL("https://stereodemo.vercel.app"),
  title: {
    default: "Stéréo Démo - Expérience Audio Ultime",
    template: "%s | Stéréo Démo",
  },
  description: "Découvrez une nouvelle dimension sonore avec Stéréo Démo. Des écouteurs haute fidélité conçus pour les passionnés de musique.",
  keywords: [
    "audio", 
    "casque", 
    "haute fidélité", 
    "musique", 
    "technologie sonore"
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://stereodemo.vercel.app",
    title: "Stéréo Démo - Expérience Audio Révolutionnaire",
    description: "Plongez dans un univers sonore sans précédent.",
    siteName: "Stéréo Démo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stéréo Démo - Audio Haute Fidélité",
    description: "Révolutionnez votre expérience musicale.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="fr" 
      className={outfit.className}
      suppressHydrationWarning
    >
      <body className="relative flex min-h-screen flex-col bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ScrollProvider>
            <Suspense fallback={
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl text-muted-foreground">
                  Chargement en cours...
                </p>
              </div>
            }>
              <main className="flex-1">{children}</main>
            </Suspense>
          </ScrollProvider>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
