import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "Salem's Legacy - Master Witchcraft",
  description: "A collection of spells and magical items to master the art of witchcraft",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cinzel.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="page-background"></div>
          <div className="page-content">
            <CartProvider>{children}</CartProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'