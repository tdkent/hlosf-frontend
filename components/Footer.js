import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-6 pb-6 border-t border-slate-300 bg-slate-50 font-light text-center'>
      <p className='text-sm'>
        Text and images
        <br /> &copy; Historical Landmarks of San Francisco, 2019-22
      </p>
      <p className='mt-4 mb-2 text-sm'>Archival images:</p>
      <ul className='text-xs font-medium'>
        <li>
          <Link href='https://opensfhistory.org/' target='_blank' legacyBehavior>
            <a>OpenSFHistory</a>
          </Link>
        </li>
        <li className='mt-1'>
          <Link href='https://sfpl.org/locations/main-library/historical-photographs' target='_blank' legacyBehavior>
            <a>
              San Francisco History Center,
              <br /> San Francisco Public Library
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
