import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Set up smooth scrolling with CSS
        document.documentElement.style.scrollBehavior = 'smooth'
        
        // Enhanced scroll animations
        gsap.registerPlugin(ScrollTrigger)
        
        // Smooth scroll to sections
        const scrollLinks = document.querySelectorAll('a[href^="#"]')
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const target = document.querySelector(link.getAttribute('href'))
                if (target) {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: target,
                        ease: "power3.out"
                    })
                }
            })
        })

        return () => {
            document.documentElement.style.scrollBehavior = 'auto'
        }
    }, [])

    return children
} 