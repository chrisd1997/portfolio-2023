import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 | Chris Dekker</title>
                <meta name="description" content="It seems that the page your are looking for doesn't exist." />
            </Head>
        
            <div className="not-found">
                <div className="line-wrapper">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>

                <div className="content">
                    <h1>404</h1>
                    <h4>Page not Found</h4>
                    <span>It seems that the page your are looking for doesn't exist.</span>
                    <Link href="/" className="button">
                        Back to home
                    </Link>
                </div>
                <div className="image" />
            </div>
        </>
    )
}

export default NotFound