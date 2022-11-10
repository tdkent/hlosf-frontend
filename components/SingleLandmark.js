import React from 'react'
import Image from 'next/image'

import SingleLandmarkImages from './SingleLandmarkImages'

const SingleLandmark = ({ data }) => {
  const createMarkup = () => {
    return { __html: data.description_html }
  }
  return (
    <article>
      <h2>{data.title}</h2>
      <h3>
        Landmark No. {data.number} {data.dedication_year && `| Dedicated ${data.dedication_year}`}
      </h3>
      <Image src={data.image_urls[0]} alt={data.title} width={600} height={400} />
      <div dangerouslySetInnerHTML={createMarkup()} />
      <div>
        <h5>Marker Inscription</h5>
        <p>{data.inscription}</p>
      </div>
      <div>
        <h5>Location</h5>
        <p>Add address, coords and map here</p>
      </div>
      <SingleLandmarkImages imageUrls={data.image_urls} title={data.title} />
    </article>
  )
}
export default SingleLandmark
