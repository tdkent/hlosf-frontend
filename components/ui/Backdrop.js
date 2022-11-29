import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = ({ setMap }) => {
  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-full min-h-full bg-black z-20 opacity-80' onClick={() => setMap(false)}></div>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop
