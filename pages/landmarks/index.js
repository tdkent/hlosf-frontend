import React, { useState, useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import LandmarksList from '../../components/landmarks-list/LandmarksList';
import LandmarksSort from '../../components/landmarks-list/LandmarksSort';
import { allLandmarksReducedData } from '../../data/data';

const LandmarksPage = () => {
  const data = allLandmarksReducedData;
  const [sortMethod, setSortMethod] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(null);
  const [scrollId, setScrollId] = useState(null);
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth } = window;
      setWindowWidth(innerWidth);
    };
    getWindowSize();
  }, []);
  useEffect(() => {
    const sort = sessionStorage.getItem('lmSortMethod');
    if (!sort) setSortMethod('number');
    else setSortMethod(sort);
  }, []);
  useEffect(() => {
    const sortArray = (method) => {
      let sorted = [];
      if (method === 'number' || method === 'group') {
        sorted = [...data].sort((a, b) => a[method] - b[method]);
      } else {
        if (windowWidth <= 320) {
          sorted = [...data].sort((a, b) =>
            a.title_stub.localeCompare(b.title_stub),
          );
        } else if (windowWidth >= 1280) {
          sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        } else {
          sorted = [...data].sort((a, b) =>
            a.title_short.localeCompare(b.title_short),
          );
        }
      }
      setSortedData(sorted);
    };
    sortArray(sortMethod);
  }, [sortMethod]);
  useEffect(() => {
    const scrollPositionId = sessionStorage.getItem('scroll-position-id');
    setScrollId(scrollPositionId);
  }, []);
  return (
    <Layout title="Landmarks Index | Historical Landmarks of San Francisco">
      <h1 className="pl-3 pr-5 text-2xl font-medium">Index of Landmarks</h1>
      <LandmarksSort
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        setScrollId={setScrollId}
      />
      <LandmarksList
        sortedData={sortedData}
        windowWidth={windowWidth}
        scrollId={scrollId}
        setScrollId={setScrollId}
      />
    </Layout>
  );
};

export default LandmarksPage;
