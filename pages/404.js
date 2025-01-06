import React, { useEffect, useContext } from 'react';

import ScrollContext from '../context/ScrollContext';
import Layout from '../components/layout/Layout';

const Custom404 = () => {
  const { removeScrollMarker } = useContext(ScrollContext);
  useEffect(() => {
    removeScrollMarker();
  }, []);
  return (
    <Layout title="404 Page Not Found | Historical Landmarks of San Francisco">
      <div className="text-center mt-6">
        <p className="text-4xl">404</p>
        <p>This page doesn&#39;t exist.</p>
      </div>
    </Layout>
  );
};

export default Custom404;
