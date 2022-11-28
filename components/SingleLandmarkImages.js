import React from 'react'
import Image from 'next/image'

import { cloudinaryUrl, cloudinaryFolder } from '../config/config'

const SingleLandmarkImages = ({ imgUrls, title, handleClick }) => {
  return (
    <div>
      <h3 className='mb-2 text-lg font-medium'>Images</h3>
      {imgUrls.map((url) => {
        return (
          <div key={url.split('hlsf')[1]}>
            <Image
              className='my-4 shadow-md shadow-slate-400 rounded-lg'
              src={`${cloudinaryUrl}/q_50${cloudinaryFolder}/${url.split('hlsf')[1]}`}
              alt={title}
              width={990}
              height={660}
              onClick={handleClick}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SingleLandmarkImages
