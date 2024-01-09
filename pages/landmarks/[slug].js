import React from "react"

import Layout from "../../components/layout/Layout"
import SingleLandmark from "../../components/landmarks-single/SingleLandmark"
import { host } from "../../config/config"

const SingleLandmarkPage = ({ data }) => {
  if(data.number.toString().includes('.')) {
    data.number = data.number.toString().replace('.', '-')
  }
  return (
    <Layout
      title={`${data.title} | No. ${data.number} | Historical Landmarks of San Francisco`}
      description={data.description_meta}>
      <SingleLandmark data={data} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const response = await fetch(`${host}/landmarks/${slug}`)
  const data = await response.json()
  return { props: { data } }
}

export default SingleLandmarkPage
