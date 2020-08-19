import React, { Component } from 'react';
import Logo from './Logo';
import NonRegLinks from './NonRegLinks'
import UserLinks from './UserLinks'

class NavBar extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper deep-orange accent-4">
                    <Logo />
                    <ul className="right hide-on-med-and-down">
                        <UserLinks />
                        <NonRegLinks />
                    </ul >
                </div >
            </nav >
        )
    }
}


export default NavBar;