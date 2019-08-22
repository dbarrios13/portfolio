import React from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'

export default function Navigation() {
    return (
        <div className='nav'>
            <div className='nav-brand'>
                <NavLink to='/'>David Barrios</NavLink>
            </div>
            <Hamburger />
        </div>
    )
}