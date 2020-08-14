import React from 'react';
import { NavLink } from 'react-router-dom';

const UserLinks = () =>
    (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li> <NavLink to="/logout" ><i className="small material-icons left">arrow_downward</i>Logout</NavLink></li>
        </ul>
    )


export default UserLinks;