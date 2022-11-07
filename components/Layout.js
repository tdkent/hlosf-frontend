import Head from 'next/head'
import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'San Francisco Historical Landmarks',
  description: 'Historical guide to the official historical landmarks of San Francisco city and county.',
}

export default Layout
