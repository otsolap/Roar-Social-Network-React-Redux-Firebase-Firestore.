import React, { Component } from 'react';
import Logo from './Logo';
import NonRegLinks from './NonRegLinks'
import UserLinks from './UserLinks'
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {

    }
}


export default connect()(NavBar);