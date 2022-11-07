import React from 'react'

import Layout from '../../components/Layout'
const SingleLandmarkPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h2>{data.title}</h2>
        <h4>Landmark No. {data.number}</h4>
      </div>
      <div>{data.description_html}</div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/landmarks`)
  const data = await response.json()
  const paths = data.map((landmark) => ({
    params: { slug: landmark.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const response = await fetch(`http://localhost:3000/api/landmarks/${slug}`)
  const data = await response.json()
  return { props: { data } }
}

export default SingleLandmarkPage
