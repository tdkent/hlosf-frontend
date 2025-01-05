import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import SingleLandmark from "../../components/landmarks-single/SingleLandmark";
import { getSingleLandmark } from "../../data/data";

const SingleLandmarkPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const [data, setData] = useState(null);

  useEffect(() => {
    const landmarkData = getSingleLandmark(slug);
    setData(landmarkData);
  }, [slug]);

  if (!data) {
    return <p>Loading...</p>;
  }

  if (data.number.toString().includes(".")) {
    data.number = data.number.toString().replace(".", "-");
  }

  return (
    <Layout
      title={`${data.title} | No. ${data.number} | Historical Landmarks of San Francisco`}
      description={data.description_meta}
    >
      <SingleLandmark data={data} />
    </Layout>
  );
};

export default SingleLandmarkPage;
