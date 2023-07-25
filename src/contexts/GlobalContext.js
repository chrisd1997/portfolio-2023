import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

const GlobalProvider = ({ children }) => {
    const [globals, setGlobals] = useState(null)

    return (
        <GlobalContext.Provider value={{ globals, setGlobals }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider