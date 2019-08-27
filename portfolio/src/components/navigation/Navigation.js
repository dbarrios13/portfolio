import React from 'react'
import Hamburger from './Hamburger'

export default function Navigation() {
    return (
        <div className='nav' data-aos='fade' data-aos-delay='1000'>
            <div className='nav-brand'>
                <h1>David Barrios</h1>
            </div>
            <Hamburger />
        </div>
    )
}