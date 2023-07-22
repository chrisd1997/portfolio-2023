import Link from 'next/link'
import React from 'react'

export const Button = ({ style, text, link, internal, color }) => {
    const className = style === 'default' ? 'button' : 'button-open'

    return (
        internal ? (
            <Link
                href={link}
                className={className}
                style={style === 'open' ? {border: '2px solid ' + color, color} : {backgroundColor: color, color}}
            >
                {text}
            </Link>
        ) : (
            <a
                href={link}
                className={className}
                target="_blank"
                rel="nofollow noreferrer noopener"
                style={style === 'open' ? {border: '2px solid ' + color, color} : {backgroundColor: color, color}}
            >
                {text}
            </a>
        )
    )
}