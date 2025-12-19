'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            defaultTheme='light'>
            {/* ---------------------Header Starts-----------------  */}
            <Header />
            {/* ---------------------Header Ends-------------------  */}
            {children}
            {/* ---------------------Footer Starts-----------------  */}
            <Footer />
            {/* ---------------------Footer Ends-----------------  */}
          </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-BB0H8H4NN0" />
    </html>
  )
}
