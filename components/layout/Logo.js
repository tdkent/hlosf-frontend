import React from "react"
import Image from "next/image"

import { cloudinaryUrl, cloudinaryFolder } from "../../config/config"

const Logo = () => {
  return (
    // <div className="flex flex-col items-center justify-center h-[100px] bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800">
    <div className="flex flex-col items-center justify-center h-[100px] xl:h-[130px] 2xl:h-[160px] bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <h1 className="header-text z-10 font-serif text-center text-lg min-[375px]:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white select-none">
        Historic Landmarks <span className="italic">of</span>{" "}
        <span className="text-sky-400">San Francisco</span>
      </h1>
      <Image
        className="absolute h-[80px] w-[80px] top-[10px] xl:h-[110px] xl:w-[110px] 2xl:h-[140px] 2xl:w-[140px] rounded-full z-5 shadow shadow-black"
        src={`${cloudinaryUrl}${cloudinaryFolder}/hlsf-logo-mint_j1bivg.jpg`}
        alt={"State Historic Marker"}
        width={330}
        height={220}
      />
    </div>
  )
}

export default Logo
