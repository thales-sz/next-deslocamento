"use client"

import Header from "@/components/header"
import { Button } from "@mui/material"
import Link from "next/link"

export default function Home() {
  return (
      <main>
        <Header />
        <Button variant="contained">
          <Link href={'/home'}>Hello World</Link>
        </Button>
        Esta é a página inicial!
      </main>
  )
}