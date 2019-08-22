import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

function scroll(e) {
    e.preventDefault()
    smoothscroll.polyfill()
    document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' })
}

export default function Menu() {
    return (
        <div className='hamburgerMenu'>
            <ul>
                <li>
                    <a href='#projects' onClick={scroll}>Projects</a>
                </li>
                <li>
                    <a href='#about' onClick={scroll}>About</a>
                </li>
                <li>
                    <a href='#contact' onClick={scroll}>Contact</a>
                </li>
            </ul>
        </div>
    )
}