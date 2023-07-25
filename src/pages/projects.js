import React, { useContext, useEffect } from 'react'
import { Lines } from '@/components/lines'
import Link from 'next/link'
import Head from 'next/head'
import { GlobalContext } from '@/contexts/GlobalContext'

const Projects = ({ content, projects, globals }) => {
    const { setGlobals } = useContext(GlobalContext)

    useEffect(() => {
        setGlobals(globals)
    }, [])

    return (
        <>
            <Head>
                <title>Projects | Chris Dekker</title>
                <meta name="description" content="Here you'll find some of my most recent projects." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="projects-page">
                <Lines />

                <div className="header">
                    <h1 className="load-text">{content.header.title}</h1>
                    <span className="load-text">{content.header.subtitle}</span>
                </div>

                <div className="projects-wrapper">
                    {projects.map((project, index) => (
                        <div className="project" key={index}>
                            <div className="background" style={{backgroundColor: project.color}} />
                            
                            <Link href={`/project/${project.slug}`}>
                                <div className="index">
                                    <span>{(project.id) < 10 ? '0' + (project.id) : (project.id)}</span>
                                </div>
                                
                                <div className="content">
                                    <h2>{project.title}</h2>

                                    <span>
                                        {project.tags.map(
                                            (value, index) => value + ((index + 1) < project.tags.length ? ' / ' : '')
                                        )}
                                    </span>
                                </div>
                                
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/page/projects.json`)
    const content = await res.json()

    const globals = await fetch(`${process.env.API_URL}/api/globals.json`)
    const globalsContent = await globals.json()

    const projects = await fetch(`${process.env.API_URL}/api/projects.json`)
    const projectsContent = await projects.json()

    return {
        props: {
            content,
            projects: projectsContent.data,
            globals: globalsContent
        }
    }
}