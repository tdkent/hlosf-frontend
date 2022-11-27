import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const GroupMap = ({ num, data, zoom, lat, lng }) => {
  console.log('zoom: ', zoom)
  const googlemap = useRef()
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
      version: 'weekly',
    })
    const center = { lat, lng }
    let map
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center,
        zoom,
      })
      for (const lm of data) {
        if (lm.group === num) {
          const markerPos = { lat: lm.marker_coordinates_lat, lng: lm.marker_coordinates_lng }
          new window.google.maps.Marker({ position: markerPos, map: map })
        }
      }
    })
  })
  return <div id='map' ref={googlemap} />
}

export default GroupMap
