import React from "react"
import Link from "next/link"

const ImageAttribution = ({ lmNum }) => {
  return (
    <>
      {lmNum === 80 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp27.3780.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp27.3780
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Montgomery Block */}
      {lmNum === 80 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp27.3780.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp27.3780
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Rincon Hill */}
      {lmNum === 84 && (
        <div>
          <p className="text-xs italic">
            Archival images:{" "}
            <Link
              href="https://sfpl.org/locations/main-library/historical-photographs"
              target="_blank"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                San Francisco History Center, San Francisco Public Library
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Telegraph Hill */}
      {lmNum === 91 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp26.099.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp26.099
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Woodwards Gardens, What Cheer House, Mark Hopkins */}
      {(lmNum === 454 || lmNum === 650 || lmNum === 754) && (
        <div>
          <p className="text-xs italic">
            Archival images:{" "}
            <Link
              href="https://commons.wikimedia.org/wiki/Main_Page"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                Wikimedia Commons
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Birthplace of the UN */}
      {lmNum === 964 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp70.0873.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp70.0873
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Golden Gate Bridge */}
      {lmNum === 974 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp14.10316.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp14.10316
              </a>
            </Link>
          </p>
        </div>
      )}
      {/* Treasure Island */}
      {lmNum === 987 && (
        <div>
          <p className="text-xs italic">
            Archival image:{" "}
            <Link
              href="https://opensfhistory.org/Display/wnp14.10113.jpg"
              prefetch={false}
              legacyBehavior>
              <a
                className="hover:underline active:underline active:font-semibold"
                target="_blank">
                OpenSFHistory / wnp14.10113
              </a>
            </Link>
          </p>
        </div>
      )}
    </>
  )
}

export default ImageAttribution
