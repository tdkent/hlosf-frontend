import React from "react"
import ReactDOM from "react-dom"
import { FaWindowClose } from "react-icons/fa"

import Backdrop from "./Backdrop"
import SingleLandmarkMap from "../landmarks-single/SingleLandmarkMap"
import GroupMap from "../guide/GroupMap"
import CloseButton from "./CloseButton"

const MapModalContent = (props) => {
  const content = (
    <div className="fixed top-16 md:top-20 w-full xl:w-4/5 xl:left-[10%] 2xl:w-1/2 2xl:left-[25%] 2xl:top-32 bg-white z-50 rounded-lg">
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
      <CloseButton closeClickHandler={() => props.setMap(false)} />
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
