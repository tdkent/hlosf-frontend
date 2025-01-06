import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

import styles from '../../styles/SingleLandmark.module.css';

const SingleLandmarkDesc = ({ descText }) => {
  const clean = DOMPurify.sanitize(descText);
  const createDescMarkup = () => {
    return { __html: clean };
  };
  return (
    <div
      className={styles.desc}
      dangerouslySetInnerHTML={createDescMarkup()}
    />
  );
};

export default SingleLandmarkDesc;
