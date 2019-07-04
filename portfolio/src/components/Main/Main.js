import React from 'react';
import Navigation from '../navigation/Navigation'
import ProjectContent from '../projects/ProjectContent'
import ProjectDisplay from '../projects/ProjectDisplay'
import About from '../about/About'
import Contact from '../contact/Contact'
import data from '../../data/dataProjects'
import smoothscroll from 'smoothscroll-polyfill'

function scrollTop () {
    smoothscroll.polyfill()
    window.scroll({top: 0, left: 0, behavior: 'smooth'})
}

export default function Main() {
    return (
        <>
            <Navigation />
            <div id='projects' className='projects'>
                {data.map(p => {
                    return (
                        <>
                            <ProjectContent key={p.name} data={p} />
                            <ProjectDisplay key={p.id} data={p} />
                        </>
                    )
                })}
            </div>
            <About />
            <Contact />
            <button onClick={scrollTop} className='btn-top'>Back to Top</button>
        </>
    )
}