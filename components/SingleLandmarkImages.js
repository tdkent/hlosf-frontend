import React from 'react'
import Image from 'next/image'

const SingleLandmarkImages = ({ imgUrls, title }) => {
  return (
    <div>
      <h4>Image Gallery</h4>
      {imgUrls.map((url) => {
        return (
          <div key={1}>
            <Image src={url} alt={title} width={600} height={400} />
          </div>
        )
      })}
    </div>
  )
}

export default SingleLandmarkImages
