import { useState } from 'react'
import { Footer } from './footer'
import { Nav } from './nav'
import { Menu } from './menu'
import GlobalProvider from '@/contexts/GlobalContext'

export const Layout = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen((prev) => !prev)
    }

    return (
        <>
            <GlobalProvider>
                <Nav open={navOpen} toggleNav={toggleNav} />
                <Menu open={navOpen} toggleNav={toggleNav} />

                <div className="content">{children}</div>
                
                <Footer />
            </GlobalProvider>
        </>
    )
}