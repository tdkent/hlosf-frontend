import React from 'react'
import Link from 'next/link'
import { FaLandmark } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

import SingleMarkerDesc from './SingleMarkerDesc'
import SingleLandmarkUpdate from './SingleLandmarkUpdate'
import SingleLandmarkImages from './SingleLandmarkImages'
import SingleLandmarkMarker from './SingleLandmarkMarker'
import SingleLandmarkMap from './SingleLandmarkMap'
import styles from '../styles/SingleLandmark.module.css'

const SingleLandmark = ({ data }) => {
  const handleClick = (e) => {}

  return (
    <article className='my-8 mx-2'>
      <div className='flex items-center justify-center'>
        <FaLandmark className='mr-2 fill-sky-500' />
        <h4 className='text-sky-500'>{data.number}</h4>
      </div>
      <h2 className='mt-1 mb-4 px-2 text-2xl text-center'>{data.title}</h2>
      <div className='my-2 mx-auto py-2 border-y text-center'>
        <ul className='font-light text-sm'>
          <li className='my-1 italic'>Group {data.group}</li>
          <li className='my-1'>{data.marker_address}</li>
          <li className='flex items-center justify-center my-1 text-base'>
            <GrMapLocation className='mr-1' />
            View on map
          </li>
        </ul>
      </div>
      <div className='pl-3 pr-5 font-light'>
        <SingleMarkerDesc descText={data.description_html} />
        {data.update_html && <SingleLandmarkUpdate updateText={data.update_html} />}
        <SingleLandmarkMarker markerText={data.marker_inscription_html} markerOnSite={data.marker_onsite} markerYear={data.dedication_year} />
        <SingleLandmarkImages imgUrls={data.imgUrls} title={data.title} handleClick={handleClick} />
      </div>
    </article>
  )
}
export default SingleLandmark
