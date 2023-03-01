import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PlatoIO | Daily Quotes",
  description: "Welcome to PlatoIO",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
 
