"use client"

import React, { useEffect, useState } from "react"

const ScrollerAnimation = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const newScrollPercentage = scrollTop / docHeight
      setScrollPercentage(newScrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2 h-64 bg-gray-200 rounded-full overflow-hidden z-50">
      <div
        className="w-full bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"
        style={{
          height: `${scrollPercentage * 100}%`,
          transition: "height 0.1s ease-out",
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L0 0H20L10 12Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ScrollerAnimation

