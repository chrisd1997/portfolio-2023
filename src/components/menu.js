import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStackOverflow,
    faInstagram,
    faLinkedinIn,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Menu = ({ open, toggleNav }) => {
    const router = useRouter()

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
                        <a href="https://stackoverflow.com/users/4516934/chris?tab=profile" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faStackOverflow} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/cwdekker/" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dekkerchris/" target="_blank" rel="nofollow noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/chrisd1997" target="_blank" rel="nofollow noopener noreferrer">
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