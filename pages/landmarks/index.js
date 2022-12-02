import React, { useState, useEffect } from "react"

import Layout from "../../components/layout/Layout"
import LandmarksList from "../../components/landmarks-list/LandmarksList"
import LandmarksSort from "../../components/landmarks-list/LandmarksSort"

const LandmarksPage = ({ data }) => {
  const [sortMethod, setSortMethod] = useState("number")
  const [sortedData, setSortedData] = useState([])
  useEffect(() => {
    const sortArray = (method) => {
      let sorted = []
      if (method === "number" || method === "group") {
        sorted = [...data].sort((a, b) => a[method] - b[method])
      } else {
        sorted = [...data].sort((a, b) =>
          a.title_short.localeCompare(b.title_short)
        )
      }
      setSortedData(sorted)
    }
    sortArray(sortMethod)
  }, [sortMethod])
  return (
    <Layout title="All Landmarks">
      <LandmarksSort setSortMethod={setSortMethod} />
      <LandmarksList sortedData={sortedData} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/landmarks")
  const data = await response.json()
  return { props: { data } }
}

export default LandmarksPage
