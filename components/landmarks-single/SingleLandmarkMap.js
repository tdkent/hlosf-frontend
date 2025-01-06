import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import styles from '../../styles/SingleLandmarkMap.module.css';

const SingleLandmarkMap = ({ data }) => {
  const {
    marker_coordinates_lat,
    marker_coordinates_lng,
    marker_address,
    title,
    title_short,
    number,
    group,
  } = data;
  const googlemap = useRef();
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
      version: 'weekly',
    });
    const center = {
      lat: marker_coordinates_lat,
      lng: marker_coordinates_lng,
    };
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center,
        zoom: 18,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="padding:0 3px 6px 3px"><p>${title}</p><p style="padding: 4px 0">Number: ${number}, Group: ${group}</p><p>Address: ${marker_address}</div>`,
        ariaLabel: title,
      });
      const marker = new google.maps.Marker({
        position: center,
        map,
        title,
      });
      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });
  }, [
    marker_coordinates_lat,
    marker_coordinates_lng,
    marker_address,
    title,
    title_short,
    number,
    group,
  ]);
  return (
    <div
      className={`${styles.map}`}
      ref={googlemap}
    />
  );
};

export default SingleLandmarkMap;
