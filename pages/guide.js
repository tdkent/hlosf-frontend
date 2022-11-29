import React from "react"

import Layout from "../components/Layout"
import Group from "../components/Group"
import MasterMap from "../components/MasterMap"

const Guide = (props) => {
  return (
    <Layout title="Landmarks Sightseeing Guide">
      <div>
        <p>
          By consulting the text and accompanying maps, you should have no
          trouble locating and visiting all of the City&#39;s 48 State
          Registered Historical Landmarks. Enjoy yourself!
        </p>
      </div>
      <div>
        <h3>Map: All Landmarks, with Group numbers</h3>
        <MasterMap {...props} />
      </div>
      <div>
        <p>
          For your convenience, the landmarks have been placed in five
          geographical groups with a suggested sequence for seeing the sites.
        </p>
      </div>
      <div>
        <Group num={1} {...props} />
        <Group num={2} {...props} />
        <Group num={3} {...props} />
        <Group num={4} {...props} />
        <Group num={5} {...props} />
      </div>
    </Layout>
  )
}

export default Guide

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/landmarks")
  const data = await response.json()
  return { props: { data } }
}
