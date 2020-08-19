import React from 'react';
import { NavLink } from 'react-router-dom';

// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
const NonRegLinks = () =>
    (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <NavLink to="/Login"><i className="small material-icons left">arrow_upward</i>Login </NavLink > </li>
            <li> <NavLink to="/newpost"><i className="small material-icons left">arrow_downward</i>New Post </NavLink > </li>
            <li><NavLink to="/Register"><i className="small material-icons left">add_circle</i>Register </NavLink> </li>
        </ul>
    )


export default NonRegLinks