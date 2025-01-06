import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleLandmark } from '../../data/data';
import Layout from '../../components/layout/Layout';
import SingleLandmark from '../../components/landmarks-single/SingleLandmark';
import Loading from '../../components/ui/Loading';

const SingleLandmarkPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const [data, setData] = useState(null);

  useEffect(() => {
    const landmarkData = getSingleLandmark(slug);
    setData(landmarkData);
  }, [slug]);

  if (!data) {
    return <Loading />;
  }

  if (data.number.toString().includes('.')) {
    data.number = data.number.toString().replace('.', '-');
  }

  return (
    <Layout
      title={`${data.title} | No. ${data.number} | Historical Landmarks of San Francisco`}
      description={data.description_meta}>
      <SingleLandmark data={data} />
    </Layout>
  );
};

export default SingleLandmarkPage;
