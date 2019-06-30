import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../../styles/index.sass'

export default function Navigation () {
    return (
        <div className='nav'>
            <div className='nav-brand'>
                <NavLink to='/'>David Barrios</NavLink>
            </div>
            <div className='navlinks'>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    )
}

