import React from "react"

import styles from "../styles/SingleLandmark.module.css"

const SingleLandmarkUpdate = ({ updateText }) => {
  const createUpdateMarkup = () => {
    if (updateText) {
      return { __html: updateText }
    }
  }
  return (
    <>
      <h3 className="mb-2 text-lg font-medium">Update (2020)</h3>
      <div
        className={styles.desc}
        dangerouslySetInnerHTML={createUpdateMarkup()}
      />
    </>
  )
}

export default SingleLandmarkUpdate
