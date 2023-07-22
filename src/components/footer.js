import React from 'react'
import { Button } from './button'

export const Footer = () => {
    return (
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
    )
}