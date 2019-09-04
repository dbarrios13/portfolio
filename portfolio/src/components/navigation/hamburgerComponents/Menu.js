import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

export default class Menu extends React.Component {
    scroll = e => {
        e.preventDefault()
        smoothscroll.polyfill()
        document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' })
        const menu = document.querySelector('.hamburgerMenu')
        const span = document.querySelector('.hamburgerBtn span')
        span.classList.remove('hamburgerAni')
        menu.classList.remove('hamburgerMenuAni')
    }
    
    render() {
        return (
            <div className='hamburgerMenu'>
                <ul>
                    <li>
                        <a href='#projects' onClick={this.scroll}>Projects</a>
                    </li>
                    <li>
                        <a href='#about' onClick={this.scroll}>About</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={this.scroll}>Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}