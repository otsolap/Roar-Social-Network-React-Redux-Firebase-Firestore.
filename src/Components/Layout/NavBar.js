import React from 'react';
import Logo from './Logo';
import NonRegLinks from './NonRegLinks'
import UserLinks from './UserLinks'
import { connect } from 'react-redux';
// koska Firebasen pitää hankkia dataa backendistä.
// sen sijaan että käytämme jtn animaatiota loadaamiseen.
// firebase tarjoaa meille is Loaded vaihtoehdon.
// ilman tätä --> applikaatopmme AINA näyttää nonRegLinks ekana
// koska auth.UID ei ehdi lataantua.
import { isLoaded } from 'react-redux-firebase';

const NavBar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <UserLinks /> : <NonRegLinks />
    return (
        <nav>
            <div className="nav-wrapper deep-orange accent-4">
                <Logo />
                <ul className="right hide-on-med-and-down">
                    {isLoaded(auth) && links}
                </ul >
            </div >
        </nav >
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(NavBar);