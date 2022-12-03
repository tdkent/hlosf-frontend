import React from "react"
import { FaWindowClose } from "react-icons/fa"

const CloseButton = ({ closeClickHandler }) => {
  return (
    <div className="py-4" onClick={closeClickHandler}>
      <button className="flex items-center mx-auto text-red-700">
        <FaWindowClose className="mr-1 fill-red-700" />
        Close
      </button>
    </div>
  )
}

export default CloseButton
