import React from 'react'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'

const SiteIntro = () => {
  return (
    <div className='pl-3 pr-5'>
      <h2 className='text-xl font-medium'>Welcome</h2>
      <p className='text-lg font-light mt-2'>For San Francisco 1976 is a twin bicentennial, the anniversary of the founding of both the Nation and the City.</p>
      <p className='font-light mt-2'>
        It seems therefore particularly appropriate for residents and visitors alike to become more aware of the City&apos;s past. One way of reaching this goal
        is by visiting the 38 California State Registered Historical Landmarks to be found within San Francisco.
      </p>
      <p className='font-light mt-2'>
        Anyone who has traveled in California has seen the handsome bronze plaques which designate State Historical Landmarks. These tablets are placed at sites
        of <q>statewide historical significance</q> which have{' '}
        <q>anthropological, cultural, military, political, architectural, economic, scientific or technical, religious, experimental, or other values</q>,
        according to the State Department of Parks and Recreation handbook California Historical Landmarks. A seven member advisory committee appointed by the
        Governor determines whether a given site is worthy of landmark status or not. There are well over 800 such landmarks throughout the state, with new ones
        being added each year.
      </p>
      <p className='font-light mt-2'>
        Not all sites have official state plaques. Some have tablets provided by private organizations, e.g. the Native Sons of Daughters of the Golden West,
        the California Historical Society, the Society of California Pioneers, the Daughters of the American Revolution, etc., while other sites remain
        unmarked.
      </p>
      <div className='flex flex-row items-center mt-4'>
        <FaArrowCircleRight className='mr-1' />
        <Link href='/landmarks' legacyBehavior>
          <a className='font-medium'>Go To Landmarks Page</a>
        </Link>
      </div>
    </div>
  )
}

export default SiteIntro
