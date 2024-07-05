import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"
import "../styles/globals.scss"


const inter = Inter({ subsets: ["latin"] })

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque"
})

export const metadata: Metadata = {
  title: "E-Therapy",
  description:
    "Live Life You Love, Love Life you Live."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, bricolage.variable)}>
        <main>
              {children}
          
        </main>
      </body>
    </html>
  )
}
