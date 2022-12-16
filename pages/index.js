import React, { useEffect } from "react"

import Layout from "../components/layout/Layout"
import SiteNote from "../components/home/SiteNote"
import SiteIntro from "../components/home/SiteIntro"
import SiteImage from "../components/home/SiteImage"

export default function HomePage() {
  useEffect(() => {
    // clear sessionStorage logic goes here
  })
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
