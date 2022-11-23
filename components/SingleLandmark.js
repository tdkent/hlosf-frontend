import React from 'react'
import Image from 'next/image'

import SingleLandmarkImages from './SingleLandmarkImages'
import SingleLandmarkMap from './SingleLandmarkMap'

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
      {/* <Image src={data.image_urls[0]} alt={data.title} width={600} height={400} /> */}
      <div dangerouslySetInnerHTML={createMarkup()} />
      <div>
        <h5>Marker Inscription</h5>
        <p>{data.marker_inscription}</p>
      </div>
      <div>
        <h5>Location of Historical Marker</h5>
        <p>Address: {data.marker_address}</p>
        <p>
          Coordinates: {data.marker_coordinates_lat}, {data.marker_coordinates_lng}
        </p>
        <h5>Map</h5>
        <div>
          <SingleLandmarkMap coordsLat={data.marker_coordinates_lat} coordsLng={data.marker_coordinates_lng} />
        </div>
      </div>

      {/* <SingleLandmarkImages imageUrls={data.image_urls} title={data.title} /> */}
    </article>
  )
}
export default SingleLandmark
