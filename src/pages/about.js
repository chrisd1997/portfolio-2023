import React from 'react'
import { Lines } from '@/components/lines'
import { Button } from '@/components/button'
import { Tag } from '@/components/tag'
import Head from 'next/head'

const About = ({ content }) => {
    return (
        <>
            <Head>
                <title>About | Chris Dekker</title>
                <meta name="description" content={`My name is Chris Dekker. I'm a ${Math.floor((new Date() - new Date('1997-05-01').getTime()) / 3.15576e+10)} year old software engineer & mobile app developer from The Netherlands.`} />
            </Head>

            <div className="about">
                <Tag text="About" />

                <Lines />

                <header>
                    <div className="content">
                        <h1 className="load-text">{content.header.title}</h1>
                        <h2 className="load-text">{content.header.subtitle}</h2>
                    </div>
                    
                    <img src={content.aboutImage} alt="Chris Dekker" />
                </header>

                <section className="text">
                    <div dangerouslySetInnerHTML={{ __html: content.aboutContent.replace('%age%', Math.floor((new Date() - new Date('1997-05-01').getTime()) / 3.15576e+10))}} />

                    <div className="actions">
                        <Button 
                            style="default"
                            text="Download my resume"
                            link={content.resumeFile}
                            internal={false}
                        />
                        <Button
                            style="open"
                            text="View my projects"
                            link="/projects"
                            internal={true}
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default About

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/page/about.json`)
    const content = await res.json()

    return {
        props: {
            content,
        }
    }
}