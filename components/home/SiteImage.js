import React from 'react';
import Image from 'next/image';

import { cloudinaryUrl, cloudinaryFolder } from '../../config/config';

const SiteImage = () => {
  return (
    <div className="relative my-4 lg:my-10 mx-auto w-full aspect-[3/2]">
      <Image
        className="mx-auto shadow-sm shadow-slate-400 rounded-lg object-cover"
        src={`${cloudinaryUrl}/q_80${cloudinaryFolder}/lm841-conservatory/Conservatory-site-2_uykjmg.jpg`}
        alt="The Conservatory of Flowers, San Francisco"
        fill
        priority
        sizes="(max-width: 900px) 100vw, 900px"
      />
    </div>
  );
};

export default SiteImage;
