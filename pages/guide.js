import React, { useState, useEffect } from "react"

import Layout from "../components/layout/Layout"
import Group from "../components/guide/Group"
import MasterMap from "../components/guide/MasterMap"
import { host } from "../config/config"

const Guide = (props) => {
  const [windowWidth = { windowWidth }, setWindowWidth] = useState(null)
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth } = window
      setWindowWidth(innerWidth)
    }
    getWindowSize()
  }, [])
  return (
    <Layout title="Sightseeing Guide | Historical Landmarks of San Francisco">
      <div className="my-4 font-light">
        <div className="pl-3 pr-5">
          <h2 className="text-2xl font-medium">Sightseeing Guide</h2>
          <p className="mt-2">
            By consulting the text and accompanying maps, you should have no
            trouble locating and visiting all of the City&#39;s 48 State
            Registered Historical Landmarks. Enjoy yourself!
          </p>
        </div>
        <div className="my-6">
          <h3 className="mb-2 pl-3 text-xl font-medium">Map: All Landmarks</h3>
          <p className="pl-3 pr-5 mb-2">
            This map shows the locations of all 48 historical landmarks in San
            Francisco county, with group numbers indicated. Click a marker to
            view name, group, and address information.
          </p>
          <div>
            <MasterMap {...props} />
          </div>
        </div>
        <div>
          <h3 className="mb-2 pl-3 text-xl font-medium">Groups</h3>
          <p className="pl-3 pr-5">
            For your convenience, the landmarks have been placed in five
            geographical groups with a suggested sequence for seeing the sites.
          </p>
          <Group num={1} {...props} windowWidth={windowWidth} />
          <Group num={2} {...props} windowWidth={windowWidth} />
          <Group num={3} {...props} windowWidth={windowWidth} />
          <Group num={4} {...props} windowWidth={windowWidth} />
          <Group num={5} {...props} windowWidth={windowWidth} />
        </div>
      </div>
    </Layout>
  )
}

export default Guide

export async function getServerSideProps() {
  const response = await fetch(`${host}/api/guide`)
  const data = await response.json()
  return { props: { data } }
}
