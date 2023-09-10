import React, { useEffect, useRef } from "react"

function ParallexFade({ children }) {
  const animationRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      const el = animationRef.current,
        distanceFromTop = el.getBoundingClientRect().top
      animationRef.current.style.opacity = distanceFromTop / 150
      animationRef.current.style.bottom = distanceFromTop / 6 + "px"
    }
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div ref={animationRef} style={{ position: "relative" }}>
      {children}
    </div>
  )
}

export default ParallexFade
