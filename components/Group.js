import React, { useState } from "react"
import Link from "next/link"

import MapModal from "./ui/MapModal"

const Group = (props) => {
  const [map, setMap] = useState(false)
  const handleClick = () => setMap(true)
  return (
    <>
      {map && <MapModal {...props} setMap={setMap} />}
      <div>
        <h2>Group {props.num}</h2>
        <div>
          <ul>
            {props.data
              .filter((lm) => lm.group === props.num)
              .map((lm) => (
                <li key={lm.id}>
                  <Link href={`/landmarks/${lm.slug}`}>
                    {lm.number}: {lm.title_short}
                  </Link>
                </li>
              ))}
          </ul>
          <Link href="#" legacyBehavior>
            <a onClick={handleClick}>View group {props.num} map</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Group
