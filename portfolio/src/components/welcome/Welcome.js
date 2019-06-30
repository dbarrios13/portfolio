import React from 'react';
import { Link } from 'react-router-dom'

// function circle (props) {
//     const button = document.getElementsByClassName('welcomeLink')
//     console.log(button)
// }

export default function Welcome() {
    return (
        <div className='welcome'>
            <h1>DAVID BARRIOS</h1>
            <h3>Software Engineer</h3>
            <Link to='/projects'>Projects</Link>
        </div>
    )
}