import React from 'react'
import Image from 'next/image'

import Layout from '../components/Layout'
import SiteNote from '../components/content/SiteNote'
import SiteIntro from '../components/content/SiteIntro'
import { cloudinaryUrl, cloudinaryFolder } from '../config/config'

export default function HomePage() {
  return (
    <Layout title='Home Page | San Francisco Historical Landmarks'>
      <article className='my-8'>
        <div className='my-2 px-2'>
          <Image
            className='shadow-md shadow-slate-400 rounded-lg'
            src={`${cloudinaryUrl}${cloudinaryFolder}/lm841-conservatory/Conservatory-site-2_uykjmg.jpg`}
            alt='The Conservatory of Flowers, San Francisco'
            height={660}
            width={990}
          />
        </div>
        <SiteNote />
        <SiteIntro />
      </article>
    </Layout>
  )
}
