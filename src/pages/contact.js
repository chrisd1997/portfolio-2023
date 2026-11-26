import React, { useContext, useEffect } from 'react'
import { Lines } from '@/components/lines'
import { Tag } from '@/components/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import {
    faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
import { GlobalContext } from '@/contexts/GlobalContext'
import { DefaultHead } from '@/components/head'
import homepageData from '@/data/pages/homepage.json'
import globalsData from '@/data/globals.json'

const Contact = ({ content, globals }) => {
    const { setGlobals } = useContext(GlobalContext)

    useEffect(() => {
        setGlobals(globals)
    }, [])

    return (
        <>
            <Head>
                <title>Contact | Chris Dekker</title>
                <meta name="description" content="Do you fancy saying hi or would you like to ask me a question? Feel free to contact me." />
                <DefaultHead />
            </Head>

            <div className="contact">
                <Lines />

                <Tag text="Contact" />

                <div className="contact-inner">
                    <h1 className="load-text">{content.header.title}</h1>
                    <p className="load-text" dangerouslySetInnerHTML={{ __html: content.header.subtitle }} />

                    <div className="form-wrapper">
                        <div className="channels">
                            <ul>
                                <li>
                                    <a href={globals.socialLinks.email}>
                                        <div className="icon-wrapper">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>

                                        <span>{globals.socialLinks.email.replace('mailto:', '')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={globals.socialLinks.phone}>
                                        <div className="icon-wrapper">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </div>

                                        <span>{globals.socialLinks.phone.replace('tel:', '')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={globals.socialLinks.instagram} target="_blank" rel="nofollow noopener noreferrer">
                                        <div className="icon-wrapper">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </div>

                                        <span>@{globals.socialLinks.instagram.replace('https://', '').replace('www.', '').replace('instagram.com/', '').replace('/', '')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={globals.socialLinks.linkedin} target="_blank" rel="nofollow noopener noreferrer">
                                        <div className="icon-wrapper">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </div>

                                        <span>{globals.socialLinks.linkedin.replace('https://', '').replace('www.', '')}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

export async function getStaticProps() {
    return {
        props: {
            content: homepageData,
            globals: globalsData,
        }
    }
}
