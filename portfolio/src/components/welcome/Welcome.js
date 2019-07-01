import React from 'react';
import { Link } from 'react-router-dom'
import Dpath from './Dpath'

// function circle (props) {
//     const button = document.getElementsByClassName('welcomeLink')
//     console.log(button)
// }

export default function Welcome() {
    return (
        <div className='welcome'>
            {/* <h1>DAVID BARRIOS</h1>
            <h3>Software Engineer</h3>
            <Link to='/projects'>Projects</Link> */}
            <svg className='logo' height='448' width='100%' viewBox='0 0 1024 448'>
                <g stroke='#fff' strokeWidth='2' fill='none' fillRule='evenodd'>
                    <Dpath x={138} y={100}/>
                </g>
            </svg>
        </div>
    )
}