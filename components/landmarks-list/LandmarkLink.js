import React from "react"
import Link from "next/link"

const LandmarkLink = ({ id, slug }) => {
  const selectHandler = () => {
    const prevId = Number(id) - 1
    sessionStorage.setItem("scroll-position-id", prevId)
  }
  return (
    <div className="ml-3 mr-1 md:mr-4 xl:mr-0">
      <Link href={`/landmarks/${slug}`} legacyBehavior>
        <a
          className="
      border 
      rounded-xl
      py-1
      px-2
      font-light
      select-none
      motion-safe:transition-all
      motion-safe:duration-300
      hover:bg-slate-300
      hover:border-slate-300
      hover:text-white
      active:transition-none
      active:bg-slate-400 
      active:border-slate-400
      md:text-lg 
      "
          onClick={selectHandler}>
          View
        </a>
      </Link>
    </div>
  )
}

export default LandmarkLink
