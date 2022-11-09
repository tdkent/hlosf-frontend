import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/landmarks'>Landmarks</Link>
        </li>
        <li>
          <Link href='/guide'>Sightseeing</Link>
        </li>
        <li>
          <Link href='/maps'>Maps</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
