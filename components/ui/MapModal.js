import React from "react"
import ReactDOM from "react-dom"
import { FaWindowClose } from "react-icons/fa"

import Backdrop from "./Backdrop"
import SingleLandmarkMap from "../landmarks-single/SingleLandmarkMap"
import GroupMap from "../guide/GroupMap"

const MapModalContent = (props) => {
  const content = (
    <div className="fixed top-16 md:top-20 w-full xl:w-4/5 xl:left-[10%] bg-white z-50 rounded-lg">
      <div className="py-1">
        <h4 className="flex items-center justify-center">
          Map:{" "}
          {!props.data.length
            ? `${props.data.title_short} (${props.data.number})`
            : `Group ${props.num}`}
        </h4>
      </div>
      {!props.data.length ? (
        <SingleLandmarkMap {...props} />
      ) : (
        <GroupMap {...props} />
      )}
      <div className="py-4" onClick={() => props.setMap(false)}>
        <button className="flex items-center mx-auto text-red-700">
          <FaWindowClose className="mr-1 fill-red-700" />
          Close
        </button>
      </div>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"))
}

const MapModal = (props) => {
  return (
    <>
      <Backdrop setMap={props.setMap} />
      <MapModalContent {...props} />
    </>
  )
}

export default MapModal
