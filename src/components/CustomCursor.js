import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: "power3.out"
      })

      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power3.out"
      })
    }

    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, .project-card, .nav-links a, .contact-email')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.matches('button, a, .project-card, .nav-links a, .contact-email')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    if (isHovering) {
      gsap.to(cursor, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out"
      })
    } else {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [isHovering])

  return (
    <>
      <div 
        ref={cursorRef} 
        className="modern-cursor"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(99, 102, 241, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        ref={cursorDotRef} 
        className="modern-cursor-dot"
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: '#6366f1',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
} 