import React from 'react'
import Image from 'next/image'

import { cloudinaryUrl, cloudinaryFolder } from '../config/config'

const Logo = () => {
  return (
    <div className='flex flex-col items-center py-8 bg-gradient-to-r from-blue-600 via-gray-800 to-blue-900'>
      <h1 className='header-text z-10 font-serif text-center text-2xl text-white'>
        Historic Landmarks <span className='italic'>of</span> <span className='text-sky-300'>San Francisco</span>
      </h1>
      <Image
        className='h-20 w-20 absolute top-2 rounded-full z-5 shadow shadow-black'
        src={`${cloudinaryUrl}${cloudinaryFolder}/hlsf-logo-mint_j1bivg.jpg`}
        alt={'State Historic Marker'}
        width={330}
        height={220}
      />
    </div>
  )
}

export default Logo
