import { useState } from 'react'
import { Footer } from './footer'
import { Nav } from './nav'
import { Menu } from './menu'
import GlobalProvider from '@/contexts/GlobalContext'
import { CookieBanner } from './cookies'
import CookieProvider from '@/contexts/CookieContext'

export const Layout = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen((prev) => !prev)
    }

    return (
        <>
            <CookieProvider>
                <GlobalProvider>
                    <Nav open={navOpen} toggleNav={toggleNav} />
                    <Menu open={navOpen} toggleNav={toggleNav} />

                    <div className="content">{children}</div>
                    
                    <Footer />

                    <CookieBanner />
                </GlobalProvider>
            </CookieProvider>
        </>
    )
}