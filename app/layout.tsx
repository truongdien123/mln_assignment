import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"



const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Giáo trình học tập – Mác Lênin",
  description: "Educational platform for Marxist-Leninist philosophy studies",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${geistSans.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
