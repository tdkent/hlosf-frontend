import React, { useState } from "react"
import Link from "next/link"
import { GrMapLocation } from "react-icons/gr"

import MapModal from "./ui/MapModal"
import Hyperlink from "./Hyperlink"

const Group = (props) => {
  const [map, setMap] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setMap(true)
  }
  return (
    <>
      {map && <MapModal {...props} setMap={setMap} />}
      <div className="mt-4 pb-4 pl-3 pr-5 border-b last:border-none">
        <h2 className="text-lg font-medium">Group {props.num}</h2>
        <div>
          <ol>
            {props.data
              .filter((lm) => lm.group === props.num)
              .sort((a, b) => a.group_order - b.group_order)
              .map((lm) => (
                <li key={lm.id} className="my-2 text-sm">
                  <Hyperlink href={`/landmarks/${lm.slug}`} fontWeight="light">
                    {lm.number}: {lm.title_short}
                  </Hyperlink>
                </li>
              ))}
          </ol>
          <p className="pt-1 flex items-center">
            <Hyperlink href="#" fontWeight="medium" handleClick={handleClick}>
              View Group {props.num} Map
            </Hyperlink>
          </p>
        </div>
      </div>
    </>
  )
}

export default Group
