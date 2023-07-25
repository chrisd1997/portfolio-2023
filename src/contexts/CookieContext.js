import { createContext, useEffect, useState } from 'react'

export const CookieContext = createContext({
    marketingCookie: null,
})

const CookieProvider = ({ children }) => {
    const [marketingCookie, setMarketingCookie] = useState(null)

    return (
        <CookieContext.Provider value={{ marketingCookie, setMarketingCookie }}>
            {children}
        </CookieContext.Provider>
    )
}

export default CookieProvider