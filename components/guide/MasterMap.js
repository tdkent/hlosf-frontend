import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import styles from '../../styles/MasterMap.module.css';

const MasterMap = ({ data }) => {
  const googlemap = useRef();
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current);
      let markersArr = [];
      data.forEach((lm) => {
        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="padding:0 3px 6px 3px"><p>${lm.title}</p><p style="padding: 4px 0">Number: ${lm.number}, Group: ${lm.group}</p><p>Address: ${lm.marker_address}</div>`,
          ariaLabel: lm.title,
        });
        const position = {
          lat: lm.marker_coordinates_lat,
          lng: lm.marker_coordinates_lng,
        };
        const marker = new google.maps.Marker({
          position,
          map,
          title: lm.title,
          label: lm.group.toString(),
        });
        markersArr.push(marker);
        marker.addListener('click', () => {
          infoWindow.open({
            anchor: marker,
            map,
          });
        });
      });
      const bounds = new google.maps.LatLngBounds();
      markersArr.forEach((marker) => {
        bounds.extend(marker.position);
        map.fitBounds(bounds);
      });
    });
  });
  return (
    <div
      className={styles.map}
      ref={googlemap}
    />
  );
};

export default MasterMap;
