"use client"

import { queryClient } from "@/services/queryClient"
import { QueryClientProvider } from "react-query"

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      That&apos;s it
      </main>
    </QueryClientProvider>
  )
}
