import { CookieContext } from '@/contexts/CookieContext'
import { useContext, useEffect, useState } from 'react'

export const CookieBanner = () => {
    const [showOptions, setShowOptions] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [hasCookies, setHasCookies] = useState(false)
    const { setMarketingCookie } = useContext(CookieContext)

    const storeCookies = () => {
        const cookies = {
            'strictly-necessary': true,
            'marketing': marketing
        }

        document.cookie = `cookies=${JSON.stringify(cookies)}; path=/; expires=${new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000))};`
    
        setMarketingCookie(marketing)
        setHasCookies(true)
    }

    const getCookies = () => {
        const match = document.cookie.match(new RegExp('(^| )cookies=([^;]+)'))
        if (match) return match[2]
    }

    useEffect(() => {
        const cookies = getCookies()

        if (cookies) {
            const parsedCookies = JSON.parse(cookies)

            if (parsedCookies['marketing']) {
                setMarketingCookie(true)
            } else {
                setMarketingCookie(false)
            }

            setHasCookies(true)
        }
    }, [])

    return !hasCookies && (
        <div className="cookie-banner">
            <div className={`cookie-banner__options__wrapper ${showOptions ? 'show' : ''}`}>
                <div className="cookie-banner__options__inner">
                    <ul>
                        <li>
                            <input type="checkbox" id="strictly-necessary" name="strictly-necessary" checked disabled />
                            <label htmlFor="strictly-necessary">Strictly Necessary</label>
                        </li>
                        <li>
                            <input type="checkbox" id="marketing" name="marketing" onChange={() => setMarketing((prev) => !prev)} />
                            <label htmlFor="marketing">Marketing</label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="cookie-banner__inner">
                <p>
                    This website uses cookies to enhance the user experience.
                </p>
                
                <div className="cookie-banner__inner__buttons">
                    <button
                        className="cookie-banner__inner__buttons__text__button"
                        onClick={() => setShowOptions((prev) => !prev)}
                    >
                        Settings
                    </button>
                    <button
                        className="cookie-banner__inner__buttons__button"
                        onClick={() => storeCookies()}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}