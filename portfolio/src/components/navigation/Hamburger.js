import React from 'react';
import Button from './hamburgerComponents/Button';
import Menu from './hamburgerComponents/Menu';

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
            <>
                <Button />
                <Menu />
            </>
        )
    }
}