import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const AnimatedText = ({ children, delay = 0, className = '' }) => {
  const textRef = useRef(null)

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    // Split text into individual characters
    const text = element.textContent
    element.innerHTML = ''
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(100px)'
      element.appendChild(span)
    })

    // Animate characters
    const chars = element.querySelectorAll('span')
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.03,
      delay: delay
    })

    return () => {
      gsap.killTweensOf(chars)
    }
  }, [children, delay])

  return (
    <div ref={textRef} className={`animated-text ${className}`}>
      {children}
    </div>
  )
}

export const FadeInUp = ({ children, delay = 0, className = '' }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.set(element, {
      opacity: 0,
      y: 50
    })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: delay
    })

    return () => {
      gsap.killTweensOf(element)
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
} 