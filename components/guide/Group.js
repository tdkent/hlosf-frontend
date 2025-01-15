import React, { useState } from 'react';

import MapModal from '../ui/MapModal';
import Hyperlink from '../ui/Hyperlink';

const Group = (props) => {
  const [map, setMap] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setMap(true);
  };
  return (
    <>
      {map && (
        <MapModal
          {...props}
          setMap={setMap}
        />
      )}
      <div className="mt-4 pb-4 pl-3 pr-5 border-t">
        <h3 className="text-lg font-medium mt-6">Group {props.num}</h3>
        <div>
          <ol className="my-8 flex flex-col gap-6">
            {props.data
              .filter((lm) => lm.group === props.num)
              .sort((a, b) => a.group_order - b.group_order)
              .map((lm) => (
                <li
                  key={lm.id}
                  className="text-sm md:text-base">
                  <Hyperlink
                    href={`/landmarks/${lm.slug}`}
                    fontWeight="light">
                    {lm.number.toString().includes('.')
                      ? lm.number.toString().replace('.', '-')
                      : lm.number}
                    :{' '}
                    {props.windowWidth <= 320
                      ? lm.title_stub
                      : props.windowWidth >= 1280
                        ? lm.title
                        : lm.title_short}
                  </Hyperlink>
                </li>
              ))}
          </ol>
          <p className="pt-1 flex items-center md:text-lg">
            <Hyperlink
              href="#"
              fontWeight="medium"
              handleClick={handleClick}>
              View Group {props.num} Map
            </Hyperlink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Group;
