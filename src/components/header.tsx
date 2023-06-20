"use client"

import { Button } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'

interface headerProps {}



const Header: FC<headerProps> = () => {
  return (
    <header className='flex justify-around w-full bg-secondary text-quaternary p-10'>
      <h1>FrontEnd Challenge</h1>
      <nav className='flex gap-8'>
        <Button variant='contained'>
          <Link href={'/clients'}>Cliente</Link>
        </Button>
        <Button variant='contained'>
          <Link href={'/veiculo'}>Cliente</Link>
        </Button>
        <Button variant='contained'>
          <Link href={'/run'}>Cliente</Link>
        </Button>
      </nav>
      <span>
        Desenvolvidor por
        <a
          href="https://www.linkedin.com/in/thales-sz/"
          rel="noreferrer"
          target='_blank'
          className='hover:underline hover:text-blue-500 ml-1'
          >
            Thales Chagas
        </a>
      </span>
    </header>
  )
}

export default Header