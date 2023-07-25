import React, { useContext } from 'react'
import { Button } from './button'
import Script from 'next/script'
import { CookieContext } from '@/contexts/CookieContext'

export const Footer = () => {
    const { marketingCookie } = useContext(CookieContext)

    return (
        <>
            <footer>
                <h2>Let's talk!</h2>
                <span>I am available for freelance work.</span>
                <Button
                    style="open"
                    text="Contact me"
                    link="/contact"
                    internal={true}
                    color="#F7F7F7"
                />

                <span className="copy">Copyright &copy; Chris Dekker {new Date().getFullYear().toString()}</span>
            </footer>

            {marketingCookie === true && (
                <>
                    <Script src="https://www.googletagmanager.com/gtag/js?id=G-6KM37DKQBJ" />
                    <Script id="google-analytics">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'G-6KM37DKQBJ');
                        `}
                    </Script>
                    <Script>
                        {`
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:3587330,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                        `}
                    </Script>
                </>
            )}
        </>
    )
}