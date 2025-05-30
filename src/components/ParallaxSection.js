import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.to(section, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`}>
      {children}
    </div>
  )
}

export const RevealOnScroll = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const getInitialTransform = () => {
      switch (direction) {
        case 'up':
          return { y: 100, opacity: 0 }
        case 'down':
          return { y: -100, opacity: 0 }
        case 'left':
          return { x: -100, opacity: 0 }
        case 'right':
          return { x: 100, opacity: 0 }
        default:
          return { y: 100, opacity: 0 }
      }
    }

    gsap.set(element, getInitialTransform())

    gsap.to(element, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [direction, delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
} 