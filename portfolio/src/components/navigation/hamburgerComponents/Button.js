import React, { Component } from 'react'

export default class Button extends Component {
    state = {
        open: false
    }

    handleClick = e => {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
        const menu = document.querySelector('.hamburgerMenu')
        const span = document.querySelector('.hamburgerBtn span')
        if(this.state.open) {
            span.classList.add('hamburgerAni')
            menu.classList.add('hamburgerMenuAni')
        } else {
            span.classList.remove('hamburgerAni')
            menu.classList.remove('hamburgerMenuAni')
        }
    }

    render () {
        return (
            <div className='hamburgerBtn' onClick={this.handleClick}>
                <span></span>
            </div>
        )
    }
}