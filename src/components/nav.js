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

            <button
                className={`nav-icon hamburger hamburger--emphatic${open ? ' is-active' : ''}`}
                type="button"
                onClick={() => toggleNav()}
                aria-label="Menu"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
        </nav>
    )
}