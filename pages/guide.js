import React from 'react'

import Layout from '../components/Layout'
import Group from '../components/Group'

const Guide = ({ data }) => {
  return (
    <Layout title='Landmarks Sightseeing Guide'>
      <h2>Sightseeing Guide</h2>
      <div>
        {/* <Group num={1} data={data} mapZoom={15} mapLat={37.791363} mapLng={-122.399585} />
        <Group num={2} data={data} mapZoom={16} mapLat={37.792865} mapLng={-122.402791} /> */}
        {/* <Group num={3} data={data} mapZoom={13} mapLat={37.798263} mapLng={-122.407232} /> */}
        {/* <Group num={4} data={data} mapZoom={9} mapLat={37.791363} mapLng={-122.399585} /> */}
        {/* <Group num={5} data={data} mapZoom={9} mapLat={37.791363} mapLng={-122.399585} /> */}
      </div>
    </Layout>
  )
}

export default Guide

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/landmarks')
  const data = await response.json()
  return { props: { data } }
}
