import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Code by Kalsara — Portfolio",
  description:
    "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-[#1a1a1a] text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}