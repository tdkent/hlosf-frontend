import React from 'react';

import styles from '../../styles/SingleLandmark.module.css';

const SingleLandmarkUpdate = ({ updateText }) => {
  const clean = DOMPurify.sanitize(updateText);
  const createUpdateMarkup = () => {
    return { __html: clean };
  };
  return (
    <>
      <h3 className="mb-2 text-lg font-medium">Update (2020)</h3>
      <div
        className={styles.desc}
        dangerouslySetInnerHTML={createUpdateMarkup()}
      />
    </>
  );
};

export default SingleLandmarkUpdate;
