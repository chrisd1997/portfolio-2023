import { useState } from 'react'
import { Footer } from './footer'
import { Nav } from './nav'
import { Menu } from './menu'

export const Layout = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen((prev) => !prev)
    }

    return (
        <>
            <Nav open={navOpen} toggleNav={toggleNav} />
            <Menu open={navOpen} toggleNav={toggleNav} />

            <div className="content">{children}</div>
            
            <Footer />
        </>
    )
}