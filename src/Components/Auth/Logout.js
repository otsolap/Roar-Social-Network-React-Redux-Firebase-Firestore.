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
        <div>
            You have been logged out!
        </div>
    )
}

export default Logout;