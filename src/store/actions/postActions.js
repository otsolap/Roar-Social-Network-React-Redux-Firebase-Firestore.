import Firebase from 'firebase';
// Luodaan konstit siltä varalta, ettei tule kirjoitusvirheitä.
// Actioncreatorit on Reactin yhdistämistä varten.
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const NEW_POST_SUCCESFUL = 'NEW_POST_SUCCESFUL';
export const REMOVE_ALL_POSTS = 'REMOVE_ALL_POSTS';

export const removeAllPosts = () => ({ type: REMOVE_ALL_POSTS })

export const newPost = function(post){
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').add(post)
        .then(() => {
            dispatch({ type: NEW_POST_SUCCESFUL })
        })
        .catch(err => {
            dispatch({  type:'NEW_POST_ERROR', err: err })
        })
    }
}
