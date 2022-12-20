import React, { createContext, useState } from "react"

const ScrollContext = createContext("test")

export const ScrollProvider = ({ children }) => {
  const [scrollId, setScrollId] = useState(null)
  const removeScrollMarker = () => {
    sessionStorage.removeItem("scroll-position-id")
    setScrollId(null)
  }
  return (
    <ScrollContext.Provider value={{ removeScrollMarker }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext
