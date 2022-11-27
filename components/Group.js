import React from 'react'
import Link from 'next/link'

import GroupMap from './GroupMap'

const Group = ({ num, data, mapZoom, mapLat, mapLng }) => {
  return (
    <div>
      <h2>Group {num}</h2>
      <GroupMap num={num} data={data} zoom={mapZoom} lat={mapLat} lng={mapLng} />
      <div>
        <ul>
          {data
            .filter((lm) => lm.group === num)
            .map((lm) => (
              <li key={lm.id}>
                <Link href={`/landmarks/${lm.slug}`}>{lm.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Group
