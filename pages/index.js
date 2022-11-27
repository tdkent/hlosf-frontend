import Layout from '../components/Layout'
import SiteNote from '../components/content/SiteNote'
import SiteIntro from '../components/content/SiteIntro'

export default function HomePage() {
  return (
    <Layout title='Home Page | San Francisco Historical Landmarks'>
      <article className='my-8'>
        <SiteNote />
        <SiteIntro />
      </article>
    </Layout>
  )
}
