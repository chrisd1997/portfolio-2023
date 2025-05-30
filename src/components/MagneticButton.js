import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

export const MagneticButton = ({ children, className = '', ...props }) => {
  const buttonRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      if (!isHovering) return

      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovering])

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      {...props}
    >
      <span className="magnetic-button-content">
        {children}
      </span>
    </button>
  )
} 