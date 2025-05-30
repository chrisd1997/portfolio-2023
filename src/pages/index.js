import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithub,
    faLinkedin,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPlay, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomCursor } from '../components/CustomCursor'
import { Background3D } from '../components/Background3D'
import { SmoothScroll } from '../components/SmoothScroll'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const canvasRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Loading animation
        const loadingTl = gsap.timeline({
            onComplete: () => setIsLoaded(true)
        })

        loadingTl
            .to('.loading-bar', {
                width: '100%',
                duration: 2,
                ease: 'power2.out'
            })
            .to('.loading-screen', {
                yPercent: -100,
                duration: 1,
                ease: 'power3.inOut'
            })

        return () => loadingTl.kill()
    }, [])

    useEffect(() => {
        if (!isLoaded) return

        // Hero animations
        const tl = gsap.timeline()
        
        tl.from('.hero-line', {
            scaleX: 0,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.1
        })
        .from('.hero-char', {
            yPercent: 100,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.02
        }, '-=1')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-cta', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.3')

        // Scroll animations
        gsap.set('.project-card', { y: 100, opacity: 0 })
        
        ScrollTrigger.create({
            trigger: '.projects-section',
            start: 'top 80%',
            onEnter: () => {
                gsap.to('.project-card', {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power3.out'
                })
            }
        })

        // Mouse parallax
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = (e.clientY / window.innerHeight) * 2 - 1
            setMousePosition({ x, y })

            gsap.to('.parallax-element', {
                x: x * 50,
                y: y * 30,
                duration: 1,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [isLoaded])

    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="hero-char" style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))
    }

    const projects = [
        {
            id: 1,
            title: "Neural Interface",
            category: "AI / UX",
            year: "2024",
            color: "#6366f1"
        },
        {
            id: 2,
            title: "Crypto Exchange",
            category: "Fintech",
            year: "2024",
            color: "#f59e0b"
        },
        {
            id: 3,
            title: "Fashion Marketplace",
            category: "E-commerce",
            year: "2023",
            color: "#ef4444"
        },
        {
            id: 4,
            title: "Health Platform",
            category: "Healthcare",
            year: "2023",
            color: "#10b981"
        }
    ]

    if (!isLoaded) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-text">
                        <span>Chris Dekker</span>
                        <div className="loading-bar-container">
                            <div className="loading-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Chris Dekker — Creative Developer</title>
                <meta name="description" content="Award-winning creative developer crafting digital experiences that push boundaries." />
            </Head>

            <div className="app" ref={containerRef}>
                {/* Navigation */}
                <nav className="nav">
                    <div className="nav-logo">
                        <span>CD</span>
                    </div>
                    <div className="nav-links">
                        <a href="#work">Work</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="nav-social">
                        <a href="#" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="hero" ref={heroRef}>
                    <div className="hero-bg">
                        <div className="hero-line"></div>
                        <div className="hero-line"></div>
                        <div className="hero-line"></div>
                    </div>
                    
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span>Available for freelance</span>
                        </div>
                        
                        <h1 className="hero-title" ref={textRef}>
                            <div className="hero-title-line">
                                {splitText("Creative")}
                            </div>
                            <div className="hero-title-line">
                                {splitText("Developer")}
                            </div>
                        </h1>
                        
                        <p className="hero-subtitle">
                            Crafting digital experiences that push the boundaries of what's possible. 
                            From concept to code, I bring ideas to life.
                        </p>
                        
                        <div className="hero-cta">
                            <button className="btn-primary">
                                <span>View My Work</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            <button className="btn-play">
                                <FontAwesomeIcon icon={faPlay} />
                                <span>Watch Reel</span>
                            </button>
                        </div>
                    </div>

                    <div className="hero-scroll">
                        <span>Scroll</span>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>

                    {/* Floating Elements */}
                    <div className="floating-elements">
                        <div className="parallax-element floating-1">01</div>
                        <div className="parallax-element floating-2">◯</div>
                        <div className="parallax-element floating-3">⬢</div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects-section" id="work">
                    <div className="section-header">
                        <h2>Selected Work</h2>
                        <span>2023 — 2024</span>
                    </div>
                    
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={project.id} className="project-card" data-color={project.color}>
                                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                                <div className="project-image" style={{ backgroundColor: project.color }}>
                                    <div className="project-overlay">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <div className="project-meta">
                                        <span>{project.category}</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section className="about-section" id="about">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>
                                I'm a creative developer with over 5 years of experience building 
                                award-winning digital experiences. I specialize in React, Three.js, 
                                and GSAP animations.
                            </p>
                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Awards</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder"></div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section" id="contact">
                    <div className="contact-content">
                        <h2>Let's Create Something Amazing</h2>
                        <p>Ready to bring your ideas to life? Let's talk.</p>
                        <a href="mailto:hello@chrisdekker.dev" className="contact-email">
                            hello@chrisdekker.dev
                        </a>
                        <div className="contact-social">
                            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </section>
            </div>
            <CustomCursor />
            <Background3D />
            <SmoothScroll />
        </>
    )
}

export default HomePage