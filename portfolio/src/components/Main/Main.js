import React from 'react';
import Navigation from '../navigation/Navigation'
import ProjectContent from '../projects/ProjectContent'
import ProjectDisplay from '../projects/ProjectDisplay'
import About from '../about/About'
import Contact from '../contact/Contact'
import data from '../../data/dataProjects'

export default function Main(props) {
    return (
        <>
            <Navigation scroll={props.scroll} />
            <div id='projects' className='projects'>
                {data.map((p, index) => {
                    return (
                        <>
                            <ProjectContent key={index} data={p} />
                            <ProjectDisplay key={p.id} data={p} />
                        </>
                    )
                })}
            </div>
            <About />
            <Contact />
        </>
    )
}