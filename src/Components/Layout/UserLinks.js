import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
const UserLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink
                onClick={props.signOut}
                to="/logout" >
                <i className="small material-icons left">arrow_downward</i>Logout</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(UserLinks);