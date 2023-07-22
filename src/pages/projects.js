import React from 'react'
import { Lines } from '@/components/lines'
import Link from 'next/link'
import Head from 'next/head'

const Projects = ({ content, projects }) => {
    return (
        <>
            <Head>
                <title>Projects | Chris Dekker</title>
                <meta name="description" content="Here you'll find some of my most recent projects." />
            </Head>

            <div className="projects-page">
                <Lines />

                <div className="header">
                    <h2 className="load-text">{content.header.title}</h2>
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
                                    <h4>{project.title}</h4>

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

    const projects = await fetch(`${process.env.API_URL}/api/projects.json`)
    const projectsContent = await projects.json()

    return {
        props: {
            content,
            projects: projectsContent.data,
        }
    }
}