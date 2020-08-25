export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'


export const signIn = (auth) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            auth.email,
            auth.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS })
        }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGNOUT_SUCCESS })
        });
    }
}