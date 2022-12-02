import React from "react"

import Layout from "../components/layout/Layout"
import SiteNote from "../components/home/SiteNote"
import SiteIntro from "../components/home/SiteIntro"
import SiteImage from "../components/home/SiteImage"

export default function HomePage() {
  return (
    <Layout title="Home Page | San Francisco Historical Landmarks">
      <article className="my-8">
        <SiteImage />
        <SiteNote />
        <SiteIntro />
      </article>
    </Layout>
  )
}
