import React, { useContext, useEffect } from 'react'
import NotFound from '@/pages/404'
import { Lines } from '@/components/lines'
import { Button } from '@/components/button'
import { Tag } from '@/components/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCode,
    faPaintBrush
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Head from 'next/head'
import { GlobalContext } from '@/contexts/GlobalContext'
import { DefaultHead } from '@/components/head'
import globalsData from '@/data/globals.json'
import projectsData from '@/data/projects.json'

const Project = ({ content, globals, nextProject }) => {
    if (content?.error || !content) {
        return <NotFound />
    }

    const { setGlobals } = useContext(GlobalContext)

    useEffect(() => {
        setGlobals(globals)
    }, [])

    return (
        <>
            <Head>
                <title>{content.title} | Chris Dekker</title>
                <meta name="description" content={content.content.replace(/(<([^>]+)>)/gi, "")} />
                <DefaultHead />
            </Head>

            <div className="project-page">
                <Lines />

                <Tag text="Project" />

                <header>
                    <h1 className="load-text">{content.title}</h1>

                    <span className="tags">
                        {content.tags.map((value, index) => value + ((index + 1) < content.tags.length ? ' / ' : ''))}
                    </span>
                    
                    <div dangerouslySetInnerHTML={{__html: content.content}} />

                    <ul>
                        <li>
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>

                                <span>Source Code:</span>
                            </div>

                            {content.sourceCode ? (
                                <span>
                                    <a href={content.sourceCode} target="_blank" rel="noopener noreferrer">
                                        Click here
                                    </a>
                                </span>
                            ) : (
                                <span>
                                    <Link href="/contact">By Request</Link>
                                </span>
                            )}
                        </li>

                        <li>
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPaintBrush} />
                                </div>

                                <span>Design by:</span>
                            </div>

                            <span>
                                <a href={content.design.url} target="_blank" rel="noopener noreferrer">
                                    {content.design.title}
                                </a>
                            </span>
                        </li>
                    </ul>
                </header>

                <section className="preview">
                    {content.images.map((value, index) => (
                        <img key={index} src={value} alt={content.title} />
                    ))}
                </section>

                {nextProject && (
                    <div className="next">
                        <h2>Next: {nextProject.title}</h2>

                        <Button
                            style="default"
                            text="Continue Reading"
                            link={`/project/${nextProject.slug}`}
                            internal={true}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default Project

export async function getStaticPaths() {
    return {
        paths: projectsData.map(project => ({ params: { slug: project.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const index = projectsData.findIndex(project => project.slug === params.slug)

    return {
        props: {
            content: projectsData[index],
            // The next project in the list, wrapping around to the first
            nextProject: projectsData[(index + 1) % projectsData.length],
            globals: globalsData,
        }
    }
}
