import React from "react"

import styles from "../../styles/SingleLandmark.module.css"

const SingleLandmarkMarker = ({ markerText, markerOnSite, markerYear }) => {
  const createMarkerMarkup = () => {
    return { __html: markerText }
  }
  return (
    <>
      <h3 className="mb-2 text-lg font-medium">Plaque</h3>
      <h5 className="text-sm font-normal">Inscription</h5>
      <div
        className="mb-4 italic"
        dangerouslySetInnerHTML={createMarkerMarkup()}
      />
      {markerOnSite === "FALSE" && (
        <div className="mb-4 py-1 px-2 border rounded-lg bg-slate-100">
          <p className="my-2 font-normal text-sm">
            Note: there is presently no state marker on site. Inscription
            provided by the Office of Historic Preservation, CA State Parks.
          </p>
        </div>
      )}
      {markerYear && (
        <>
          <h5 className="text-sm font-normal">Year Dedicated</h5>
          <p className="mb-4 italic">{markerYear}</p>
        </>
      )}
    </>
  )
}

export default SingleLandmarkMarker
