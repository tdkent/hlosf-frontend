import React from 'react'

import styles from '../styles/SingleLandmark.module.css'

const SingleMarkerDesc = ({ descText }) => {
  const createDescMarkup = () => {
    return { __html: descText }
  }
  return <div className={styles.desc} dangerouslySetInnerHTML={createDescMarkup()} />
}

export default SingleMarkerDesc
