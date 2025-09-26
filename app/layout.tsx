import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ca Đoàn Augustinô - Giáo Xứ Đức Mẹ Hằng Cứu Giúp",
  description: "Website chính thức của Ca Đoàn Augustinô, Giáo Xứ Đức Mẹ Hằng Cứu Giúp, Garland, Texas",
  keywords: "ca đoàn, augustino, giáo xứ, garland, texas, công giáo, vietnamese catholic",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${poppins.variable} antialiased`}>
      <body className="font-sans vietnamese-text bg-background text-foreground">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
