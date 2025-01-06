import React, { useState, useEffect, useContext } from 'react';

import ScrollContext from '../context/ScrollContext';
import Layout from '../components/layout/Layout';
import Group from '../components/guide/Group';
import MasterMap from '../components/guide/MasterMap';
import { getAllGroups } from '../data/data';

const Guide = () => {
  const groups = getAllGroups();
  const { removeScrollMarker } = useContext(ScrollContext);
  const [windowWidth = { windowWidth }, setWindowWidth] = useState(null);
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth } = window;
      setWindowWidth(innerWidth);
    };
    getWindowSize();
  }, []);
  useEffect(() => {
    removeScrollMarker();
  }, []);
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
            <MasterMap data={groups} />
          </div>
        </div>
        <div>
          <h3 className="mb-2 pl-3 text-xl font-medium">Groups</h3>
          <p className="pl-3 pr-5">
            For your convenience, the landmarks have been placed in five
            geographical groups with a suggested sequence for seeing the sites.
          </p>
          <Group
            num={1}
            data={groups}
            windowWidth={windowWidth}
          />
          <Group
            num={2}
            data={groups}
            windowWidth={windowWidth}
          />
          <Group
            num={3}
            data={groups}
            windowWidth={windowWidth}
          />
          <Group
            num={4}
            data={groups}
            windowWidth={windowWidth}
          />
          <Group
            num={5}
            data={groups}
            windowWidth={windowWidth}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
