import React from "react";
import { useParams } from "next/navigation";
import Layout from "../../components/layout/Layout";
import SingleLandmark from "../../components/landmarks-single/SingleLandmark";
import { host } from "../../config/config";
import { getSingleLandmark } from "../../data/data";

const SingleLandmarkPage = () => {
  const { slug } = useParams();
  const data = getSingleLandmark(slug);
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

export async function getServerSideProps({ query: { slug } }) {
  return { props: { slug } };
}

export default SingleLandmarkPage;
