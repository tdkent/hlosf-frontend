import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const SingleLandmarkMap = ({ coordsLat, coordsLng }) => {
  const googlemap = useRef()
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
      version: 'weekly',
    })
    const center = { lat: coordsLat, lng: coordsLng }
    let map
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center,
        zoom: 16,
      })
      new window.google.maps.Marker({ position: center, map: map })
    })
  })
  return <div id='map' ref={googlemap} />
}

export default SingleLandmarkMap
