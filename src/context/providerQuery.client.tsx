"use client"

import { queryClient } from '@/services/queryClient'
import React, { FC, ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'

interface providerProps {
  children: ReactNode
}

const Provider: FC<providerProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider