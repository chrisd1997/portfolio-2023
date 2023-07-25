import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStackOverflow,
    faInstagram,
    faLinkedinIn,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GlobalContext } from '@/contexts/GlobalContext'

export const Menu = ({ open, toggleNav }) => {
    const router = useRouter()
    const { globals } = useContext(GlobalContext)

    return (
        <div className={`navigation${open ? ' open' : ''}`}>
            <div className="layers">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
            </div>

            <div className="links">
                <ul>
                    <li>
                        <a href={globals?.socialLinks.stackOverflow} aria-label="StackOverflow" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faStackOverflow} />
                        </a>
                    </li>
                    <li>
                        <a href={globals?.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href={globals?.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href={globals?.socialLinks.github} aria-label="GitHub" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>

            <ul className="nav-items">
                <li>
                    <Link href="/" onClick={() => toggleNav()} data-index="01" className={`${router.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" onClick={() => toggleNav()} data-index="02" className={`${router.pathname === '/about' ? 'active' : ''}`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/projects" onClick={() => toggleNav()} data-index="03" className={`${router.pathname === '/projects' ? 'active' : ''}`}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/contact" onClick={() => toggleNav()} data-index="04" className={`${router.pathname === '/contact' ? 'active' : ''}`}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}