import React from 'react'
import Image from 'next/image'

import { cloudinaryUrl, cloudinaryFolder } from '../../config/config'

const SiteImage = () => {
  return (
    <div className='my-2 px-2'>
      <Image
        className='shadow-md shadow-slate-400 rounded-lg'
        src={`${cloudinaryUrl}/q_80${cloudinaryFolder}/lm841-conservatory/Conservatory-site-2_uykjmg.jpg`}
        alt='The Conservatory of Flowers, San Francisco'
        height={660}
        width={990}
      />
    </div>
  )
}

export default SiteImage
