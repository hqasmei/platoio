import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="items-center justify-center">
      <div className="my-48 text-center">
        <h1 className="text-xl font-bold">PlatoIO</h1>
        <p className="">Coming Soon...</p>
      </div>
    </main>
  )
}
