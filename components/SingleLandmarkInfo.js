import React, { useState } from 'react'
import Link from 'next/link'
import { FaLandmark } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

import MapModal from './ui/MapModal'

const SingleLandmarkInfo = ({ data }) => {
  const [map, setMap] = useState(false)
  const handleClick = () => setMap(true)

  return (
    <>
      {map && <MapModal data={data} setMap={setMap} />}
      <div className='flex items-center justify-center'>
        <FaLandmark className='mr-2 fill-blue-500' />
        <h4 className='text-blue-500'>{data.number}</h4>
      </div>
      <h2 className='mt-1 mb-4 px-2 text-2xl text-center'>{data.title}</h2>
      <div className='my-2 mx-auto py-2 border-y text-center'>
        <ul className='font-light text-sm'>
          <li className='my-1 italic'>Group {data.group}</li>
          <li className='my-1'>{data.marker_address}</li>
          <li className='flex items-center justify-center my-1 text-base'>
            <GrMapLocation className='mr-1' />
            <Link href='#' legacyBehavior>
              <a onClick={handleClick}>View on map</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SingleLandmarkInfo
