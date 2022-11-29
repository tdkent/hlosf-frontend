import React from 'react'

import Layout from '../components/Layout'
import SiteNote from '../components/content/SiteNote'
import SiteIntro from '../components/content/SiteIntro'
import SiteImage from '../components/SiteImage'

export default function HomePage() {
  return (
    <Layout title='Home Page | San Francisco Historical Landmarks'>
      <article className='my-8'>
        <SiteImage />
        <SiteNote />
        <SiteIntro />
      </article>
    </Layout>
  )
}
