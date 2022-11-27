import React from 'react'

import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='flex flex-row items-center'>
      <h1 className='text-3xl'>HLSF</h1>
      <NavBar />
    </header>
  )
}

export default Header
