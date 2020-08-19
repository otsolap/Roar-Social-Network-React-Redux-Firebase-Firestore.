import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Firebase from 'firebase';

// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
class UserLinks extends Component {
    logOut = () => {
        Firebase.auth().signOut()
            .then(() => {
                console.log(`User has signed out succesfully`)
            }).catch(err => {
                console.log('some error has occured while logging out');
            });
    }


    render() {
        return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink onClick={this.logOut} to="/logout" ><i className="small material-icons left">arrow_downward</i>Logout</NavLink></li>
            </ul>
        )
    }
}


export default UserLinks;