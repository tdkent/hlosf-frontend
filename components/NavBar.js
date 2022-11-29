import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='sticky top-0 bg-slate-100 opacity-95 border-t border-b border-b-slate-300 select-none'>
      <ul className='w-full my-3 flex flex-row items-center font-light'>
        <li className='w-1/3 text-left pl-4 hover:underline decoration-4 hover:decoration-blue-600 hover:text-blue-600 active:decoration-blue-900 active:text-blue-900 active:font-medium'>
          <Link href='/'>Home</Link>
        </li>
        <li className='w-1/3 text-center hover:underline decoration-4 hover:decoration-blue-600 hover:text-blue-600 active:decoration-blue-900 active:text-blue-900 active:font-medium'>
          <Link href='/landmarks'>Landmarks</Link>
        </li>
        <li className='w-1/3 text-right pr-4 hover:underline decoration-4 hover:decoration-blue-600 hover:text-blue-600 active:decoration-blue-900 active:text-blue-900 active:font-medium'>
          <Link href='/guide'>Guide</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
