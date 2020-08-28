import React from 'react';

// Firebase funktioilla saavutettu!
// props = pilvestä saatu tieto. Props ottaa Mainista dataa.
//  eli kaikki uudet postit ja rekisteröinnit.
// Firebase build function index.js antaa enemmän dataa.

const Notifications = (props) =>
    (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        <li>Hello World</li>
                    </ul>
                </div>
            </div>
        </div>
    )


export default Notifications;