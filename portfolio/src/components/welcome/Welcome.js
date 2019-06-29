import React from 'react';
import { Link } from 'react-router-dom'

export default class Welcome extends React.Component {
    
    render() {
        return (
            <div className='welcome'>
                <h1>David Barrios</h1>
                <h3>Software Engineer</h3>
                <Link to='/projects'>Projects</Link>
            </div>
        )
    }
}