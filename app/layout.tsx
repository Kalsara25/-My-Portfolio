import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kalsara Maleesha",
  description:
    "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark text-foreground`}>
      
      <body className="font-sans antialiased bg-[#1a1a1a] h-full overflow-x-hidden">
        
        
        <main className="relative min-h-screen flex flex-col">
          {children}
          <Analytics />
        </main>

      </body>
    </html>
  )
}