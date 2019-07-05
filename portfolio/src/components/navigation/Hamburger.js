import React from 'react';

export default class Hamburger extends React.Component {
    state = {
        menuOpen: false
    }

    hamburgerToggle = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    linkClick = () => {
        this.setState({
            menuOpen: false
        })
    }

    render () {
        return(
            <div className=''>

            </div>
        )
    }
}