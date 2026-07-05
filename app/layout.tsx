import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://kalsara.vercel.app'),
  title: {
    default: "Kalsara Maleesha | AI Engineer & Creative Developer",
    template: "%s | Kalsara Maleesha",
  },
  description:
    "Passionate Creative Designer, AI Engineer, and Developer from Sri Lanka, dedicated to crafting innovative solutions and exceptional digital experiences.",
  openGraph: {
    title: "Kalsara Maleesha | Portfolio",
    description: "AI Engineer, UX/UI Designer, and Full-Stack Developer creating digital experiences.",
    url: "https://kalsara.vercel.app",
    siteName: "Kalsara Maleesha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalsara Maleesha | Creative Developer",
    creator: "@kalsara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "data:image/x-icon;base64,",
  },
  verification: {
    google: "u-7isywnc9r1DatyOHfnd7VLHY0DEeMtCBaIW972Cj8",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kalsara.vercel.app/#person",
        "name": "Kalsara Maleesha",
        "url": "https://kalsara.vercel.app",
        "jobTitle": ["AI Engineer", "Creative Developer", "UX Designer"],
        "sameAs": [
          "https://linkedin.com/in/kalsaramaleesha",
          "https://github.com/kalsaramaleesha"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kalsara.vercel.app/#website",
        "url": "https://kalsara.vercel.app",
        "name": "Kalsara Maleesha - Portfolio",
        "publisher": { "@id": "https://kalsara.vercel.app/#person" }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} dark text-foreground`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEJEQ4VZ9L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MEJEQ4VZ9L');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#1a1a1a] h-full overflow-x-hidden">
        
        
        <main className="relative min-h-screen flex flex-col">
          {children}
          <Analytics />
        </main>

      </body>
    </html>
  )
}