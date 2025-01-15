import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100px] lg:h-[130px] 2xl:h-[160px] bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <h1 className="header-text z-10 font-serif text-center text-[6vw] sm:text-4xl 2xl:text-5xl text-white select-none">
        Historic Landmarks <span className="italic">of</span>{' '}
        <span className="text-sky-400">San Francisco</span>
      </h1>
      <Image
        className="absolute w-[80px] aspect-square top-[10px] lg:w-[110px] 2xl:w-[140px] rounded-full z-5 shadow shadow-black"
        src={'/us-mint-fg.webp'}
        alt={'Exterior of the US Mint building'}
        width={330}
        height={220}
        sizes="(max-width: 1024px) 80px, (max-width: 1536px) 110px, 140px"
      />
    </div>
  );
};

export default Logo;
