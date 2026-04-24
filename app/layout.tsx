import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const SITE_URL = "https://david-de-vito.vercel.app"
const TITLE = "David De Vito | Back-end Developer & Automatización"
const DESCRIPTION =
  "Portafolio de David De Vito — Desarrollador Back-end especializado en Python, FastAPI, Docker y automatización con Apps Script, Python y n8n. 5★ en Workana."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "David De Vito Portfolio",
  authors: [{ name: "David De Vito", url: SITE_URL }],
  creator: "David De Vito",
  keywords: [
    "David De Vito",
    "Back-end Developer",
    "Python",
    "FastAPI",
    "Automation",
    "Apps Script",
    "n8n",
    "Freelance",
    "Workana",
    "Portfolio",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "David De Vito",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/apple-icon.png",
        width: 512,
        height: 512,
        alt: "David De Vito — Back-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/apple-icon.png"],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
