import React from 'react';
import Link from 'next/link';

import Hyperlink from '../ui/Hyperlink';

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-slate-100 opacity-95 border-t border-b border-b-slate-300 select-none">
      <ul className="w-full my-3 flex flex-row items-center font-light md:text-lg">
        <li className="w-1/3 text-left pl-4 md:pl-8 xl:text-center">
          <Hyperlink
            href="/"
            fontWeight={'font-light'}>
            Home
          </Hyperlink>
        </li>
        <li className="w-1/3 text-center">
          <Hyperlink
            href="/landmarks"
            fontWeight={'font-light'}>
            Landmarks
          </Hyperlink>
        </li>
        <li className="w-1/3 text-right xl:text-center pr-4 md:pr-8">
          <Hyperlink
            href="/guide"
            fontWeight={'font-light'}>
            Guide
          </Hyperlink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
