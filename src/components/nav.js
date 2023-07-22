import Link from 'next/link'
import React from 'react'

export const Nav = ({ open, toggleNav }) => {
    return (
        <nav className={`${open ? 'open' : ''}`}>
            <span className="logo">
                <Link href="/">
                    C
                </Link>
            </span>

            <span
                className={`nav-icon hamburger hamburger--emphatic${open ? ' is-active' : ''}`}
                type="button"
                onClick={() => toggleNav()}
                aria-label="Menu"
                aria-controls="navigation"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </span>
        </nav>
    )
}