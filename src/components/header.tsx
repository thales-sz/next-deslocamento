import React, { FC } from 'react'

interface headerProps {}

const Header: FC<headerProps> = () => {
  return (
    <header className='w-full bg-slate-100 text-black'>
      Header
    </header>
  )
}

export default Header