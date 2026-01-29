import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Add safety check and delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default useScrollToTop