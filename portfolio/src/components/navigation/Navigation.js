import React from 'react'
import { NavLink } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'

function scroll (e) {
    e.preventDefault()
    smoothscroll.polyfill()
    document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth'})
}


export default function Navigation() {
    return (
        <div className='nav'>
            <div className='nav-brand'>
                <NavLink to='/'>David Barrios</NavLink>
            </div>
            <div className='navlinks'>
                <a href='#projects' onClick={scroll}>Projects</a>
                <a href='#about' onClick={scroll}>About</a>
                <a href='#contact' onClick={scroll}>Contact</a>
            </div>
        </div>
    )
}

