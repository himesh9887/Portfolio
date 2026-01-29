import React, { useEffect, useRef } from 'react'

function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}

export default CursorGlow