import React from "react"
import Link from "next/link"

const Hyperlink = ({ href, fontWeight, linkTrans, handleClick, children }) => {
  return (
    <Link href={href} legacyBehavior>
      {/* Version with active effect */}
      {/* <a
        className={`
        ${fontWeight || `font-semibold`}
        bg-gradient-to-r 
        from-sky-400
        via-sky-400
        to-sky-500
        bg-no-repeat 
        [background-position:0_92%]
        [background-size:0_.3rem]
        motion-safe:transition-all
        motion-safe:duration-300
        hover:[background-size:100%_.3rem]
        active:transition-none
        active:[background-size:100%_100%]
        active:text-white
        `}>
        {children}
      </a> */}
      {/* No active effect */}
      <a
        className={`
        font-${fontWeight || `semibold`}
        bg-gradient-to-r 
        from-sky-400
        to-sky-400
        bg-no-repeat 
        [background-position:0_92%]
        [background-size:0_.3rem]
        motion-safe:transition-all
        motion-safe:duration-200
        hover:[background-size:100%_.3rem]
        `}
        onClick={handleClick}>
        {children}
      </a>
    </Link>
  )
}

export default Hyperlink
