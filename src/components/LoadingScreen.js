import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500)
      }
    })

    // Animate progress
    tl.to({ progress: 0 }, {
      progress: 100,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].progress))
      }
    })

    // Animate logo
    tl.from('.loading-logo', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, 0)

    // Animate text
    tl.from('.loading-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, 0.4)

    // Exit animation
    tl.to('.loading-screen', {
      opacity: 0,
      duration: 1,
      ease: "power3.in"
    }, 3)

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span>CD</span>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Chris Dekker</h2>
          <p>Creative Developer</p>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>
    </div>
  )
} 