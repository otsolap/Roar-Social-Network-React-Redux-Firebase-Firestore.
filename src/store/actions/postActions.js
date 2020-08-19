import Firebase from 'firebase';
// Luodaan konstit siltä varalta, ettei tule kirjoitusvirheitä.
// Actioncreatorit on Reactin yhdistämistä varten.
export const NEW_POST_SUCCESFUL = 'NEW_POST_SUCCESFUL';
export const REMOVE_ALL_POSTS = 'REMOVE_ALL_POSTS';

function createNewPost(post) {
    return {
        type: NEW_POST_SUCCESFUL,
        post
    };
}

function removePosts() {
    return {
        type: REMOVE_ALL_POSTS
    };
}

// action toiminta, joka kertoo reduxille ja firestorelle mitä tehdä.
// Obktilla on tyyppi, jota redux soveltaa.
// ja redux ottaa tyypistä actionin.
export function newPost(post) {
    return (dispatch) => {
        Firebase.firestore().collection('posts').add(post)
            .then(() => {
                // EN MUISTA TULEEKO TOHON POST VAI DATA.
                dispatch(createNewPost(post))
            }).catch(err => {
                dispatch({ type: 'NEW_POST_ERROR' }, err)
            })
    }
}


export const removeAllPosts = (posts) => {
    return (dispatch) => {
        Firebase.firestore().collection('posts').remove(posts)
            .then(() => {
                dispatch({ type: REMOVE_ALL_POSTS })
            }).catch(err => {
                dispatch({ type: 'ERROR_DELETE_ERROR' }, err)
            })
    }
}