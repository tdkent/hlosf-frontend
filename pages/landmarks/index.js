import React from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'
const LandmarksPage = ({ data }) => {
  return (
    <Layout title='All Landmarks'>
      {data.map((landmark) => {
        return (
          <div key={landmark.id}>
            <h3>
              {landmark.number}: {landmark.title}
            </h3>
            <Link href={`/landmarks/${landmark.slug}`}>Learn more</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/landmarks')
  const data = await response.json()
  return { props: { data } }
}

export default LandmarksPage
