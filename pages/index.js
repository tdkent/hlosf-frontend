import React, { useEffect, useContext } from "react"

import ScrollContext from "../context/ScrollContext"
import Layout from "../components/layout/Layout"
import SiteNote from "../components/home/SiteNote"
import SiteIntro from "../components/home/SiteIntro"
import SiteImage from "../components/home/SiteImage"

export default function HomePage() {
  const { removeScrollMarker } = useContext(ScrollContext)
  useEffect(() => {
    removeScrollMarker()
  }, [])
  return (
    <Layout title="Home Page | Historical Landmarks of San Francisco">
      <article className="my-8">
        <SiteImage />
        <SiteNote />
        <SiteIntro />
      </article>
    </Layout>
  )
}
