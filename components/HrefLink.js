import React from 'react'
import Link from 'next/link'

const HrefLink = ({ href, text }) => {
  return (
    <Link href={href} legacyBehavior>
      {text}
    </Link>
  )
}

export default HrefLink
