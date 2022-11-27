import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul className='flex flex-row'>
        <li className='px-4'>
          <Link href='/'>Home</Link>
        </li>
        <li className='px-4'>
          <Link href='/landmarks'>Landmarks</Link>
        </li>
        <li className='px-4'>
          <Link href='/guide'>Guide</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
