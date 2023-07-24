import React from 'react'
import { Lines } from '@/components/lines'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faStackOverflow,
    faInstagram,
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
import Link from 'next/link'

const Home = ({ content, globals, projects }) => {
    return (
        <>
            <Head>
                <title>Chris Dekker - Software Engineer</title>
                <meta name="description" content="Chris Dekker is a freelance software engineer and mobile app developer from the Netherlands." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="home">
                <Lines />

                <header>
                    <div className="links">
                        <ul>
                            <li>
                                <a href={globals.socialLinks.stackOverflow} target="_blank" rel="nofollow noopener noreferrer">
                                    <FontAwesomeIcon icon={faStackOverflow} />
                                </a>
                            </li>
                            <li>
                                <a href={globals.socialLinks.instagram} target="_blank" rel="nofollow noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href={globals.socialLinks.linkedin} target="_blank" rel="nofollow noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href={globals.socialLinks.github} target="_blank" rel="nofollow noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="header-content">
                        <h1 className="load-text">{content.header.title}</h1>
                        <span className="load-text">{content.header.subtitle}</span>
                    </div>

                    <div className="image" style={{ backgroundImage: `url('${content.homepageImage}')` }} />

                    <div className="scroll">
                        <span>Scroll Down</span>

                        <div className="line" />
                    </div>
                </header>

                <section className="projects">
                    <div className="header">
                        <h2>{content.projectsTitle}</h2>
                        <span>{content.projectsSubtitle}</span>
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
                </section>
            </div>
        </>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/page/homepage.json`)
    const content = await res.json()

    const globals = await fetch(`${process.env.API_URL}/api/globals.json`)
    const globalsContent = await globals.json()

    const projects = await fetch(`${process.env.API_URL}/api/projects.json`)
    const projectsContent = await projects.json()

    return {
        props: {
            content,
            globals: globalsContent,
            projects: projectsContent.data,
        }
    }
}