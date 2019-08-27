import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

function scroll(e, props) {
    e.preventDefault()
    smoothscroll.polyfill()
    document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' })
    props.close()
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