
import Firebase from 'firebase';
import { NEW_POST_SUCCESFUL, NEW_POST_ERROR } from './actionTypes'

const db = Firebase.firestore();

// action toiminta, joka kertoo reduxille ja firestorelle mitä tehdä.
// Obktilla on tyyppi, jota redux soveltaa.
// ja redux ottaa tyypistä actionin.
export const newPost = (post) => {
    return (dispatch) => {
        db.collection('posts').add(post)
            .then(() => {
                dispatch({ type: NEW_POST_SUCCESFUL })
            }).catch(err => {
                dispatch({ type: NEW_POST_ERROR }, err)
            })
    }
}