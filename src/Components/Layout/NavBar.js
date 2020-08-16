import React from 'react';
import Logo from './Logo';
import NonRegLinks from './NonRegLinks'
import UserLinks from './UserLinks'

// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper orange accent-4">
                <Logo />
                <ul className="right hide-on-med-and-down">
                    <NonRegLinks />
                    <UserLinks />
                </ul >
            </div >
        </nav >
    )
}

export default NavBar;