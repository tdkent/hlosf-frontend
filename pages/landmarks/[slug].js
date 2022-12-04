import React from "react"

import Layout from "../../components/layout/Layout"
import SingleLandmark from "../../components/landmarks-single/SingleLandmark"
import { host } from "../../config/config"

const SingleLandmarkPage = ({ data }) => {
  return (
    <Layout
      title={`${data.title} | No. ${data.number} | Historical Landmarks of San Francisco`}
      description={data.description_meta}>
      <SingleLandmark data={data} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`${host}/api/landmarks`)
  const data = await response.json()
  const paths = data.map((landmark) => ({
    params: { slug: landmark.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(paths) {
  const response = await fetch(`${host}/api/landmarks/${paths.params.slug}`)
  const data = await response.json()
  return { props: { data } }
}

export default SingleLandmarkPage
