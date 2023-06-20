"use client"

import Display from "@/components/data"
import Header from "@/components/header"

export default function Home() {
  return (
      <main className="min-h-screen bg-primary">
          <Header />
          <Display />
      </main>
  )
}