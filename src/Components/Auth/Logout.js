import React from 'react';
import Firebase from 'firebase';

export const signOut = () => {
    Firebase.auth().signOut()
        .then(() => {
            console.log(`User has signed out succesfully`)
        })
}

const Logout = () => {
    const signOutPage = () => {
        Firebase.auth().signOut()
            .then(() => {
                console.log(`User has signed out succesfully`)
            })
    }

    signOutPage()

    return (
        <div className="herobanner">
            You have left the Lion's den. Hopefully we will see you again soon!
        </div>
    )
}

export default Logout;