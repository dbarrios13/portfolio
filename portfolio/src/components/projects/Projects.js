import React from 'react';
import Navigation from '../navigation/Navigation'
import ProjectContent from './ProjectContent'
import ProjectDisplay from './ProjectDisplay'
import data from '../../data/dataProjects'

export default class Projects extends React.Component {

    render() {
        return (
            <>
                <Navigation />
                <div className='projects'>
                    {data.map(p => {
                        return (
                            <>
                                <ProjectContent key={p.name} data={p} />
                                <ProjectDisplay key={p.id} data={p} />
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}