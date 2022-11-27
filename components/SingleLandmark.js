import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SingleLandmarkImages from './SingleLandmarkImages'
import SingleLandmarkMap from './SingleLandmarkMap'

const SingleLandmark = ({ data }) => {
  console.log('data: ', data)
  const createDescMarkup = () => {
    return { __html: data.description_html }
  }
  const createUpdateMarkup = () => {
    if (data.update_html) {
      return { __html: data.update_html }
    }
  }
  const createMarkerMarkup = () => {
    return { __html: data.marker_inscription_html }
  }
  return (
    <article>
      <h2>{data.title}</h2>
      <h3>
        Landmark No. {data.number} {data.dedication_year && `| Marker dedicated ${data.dedication_year}`}
      </h3>
      {/* <Image src={data.image_urls[0]} alt={data.title} width={600} height={400} /> */}
      <div dangerouslySetInnerHTML={createDescMarkup()} />
      {data.update_html && (
        <div>
          <h5>Update (2020)</h5>
          <div dangerouslySetInnerHTML={createUpdateMarkup()} />
        </div>
      )}
      <div>
        <h5>Marker Inscription</h5>
        <div dangerouslySetInnerHTML={createMarkerMarkup()} />
        {data.marker_onsite === 'FALSE' && (
          <p>
            Note: there is currently no state marker on the site. The inscription has been taken from the{' '}
            <Link href='https://ohp.parks.ca.gov/' target='_blank'>
              Office of Historic Preservation, CA State Parks
            </Link>{' '}
            website.
          </p>
        )}
      </div>

      <div>
        <h5>Location of Historical Marker</h5>
        <p>Address: {data.marker_address}</p>
        <p>
          Coordinates: {data.marker_coordinates_lat}, {data.marker_coordinates_lng}
        </p>
        <p>
          Sightseeing Group: {data.group} <Link href='/guide'>View group map</Link>
        </p>
        <h5>Map</h5>
        <div>
          <SingleLandmarkMap coordsLat={data.marker_coordinates_lat} coordsLng={data.marker_coordinates_lng} />
        </div>
      </div>
      <SingleLandmarkImages imgUrls={data.imgUrls} />
    </article>
  )
}
export default SingleLandmark
