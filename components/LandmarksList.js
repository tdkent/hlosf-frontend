import React from "react"
import Link from "next/link"
import { FaLandmark } from "react-icons/fa"

const LandmarksList = ({ sortedData }) => {
  return (
    <div className="grid grid-cols-1 mt-1 divide-y mx-2">
      {sortedData.map((lm) => {
        return (
          <div
            key={lm.id}
            className="flex flex-row items-center justify-between py-2">
            <div>
              <h4 className="text-sm mb-1">{lm.title_short}</h4>
              <div className="font-light text-sm my-1">
                <ul className="flex flex-row items-center">
                  <li className="px-1 py-0.5 flex flex-row items-center">
                    <FaLandmark className="mr-1.5 fill-slate-500 " />
                    {lm.number}
                  </li>
                  <li className="py-0.5 px-1 mx-4 italic">Group {lm.group}</li>
                </ul>
              </div>
            </div>
            <div className="ml-3 mr-1">
              <Link href={`/landmarks/${lm.slug}`} legacyBehavior>
                <a className="border rounded-xl py-1 px-2 font-light hover:bg-slate-200 active:text-white active:bg-slate-400 active:border-slate-400 select-none">
                  View
                </a>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LandmarksList
