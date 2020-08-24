
// Luodaan konstit siltä varalta, ettei tule kirjoitusvirheitä.
// Actioncreatorit on Reactin yhdistämistä varten.
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const NEW_POST_SUCCESFUL = 'NEW_POST_SUCCESFUL';


// tämä on async koodi.
export const newPost = (post) => {
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').add(post)
            .then(() => {
                dispatch({ type: NEW_POST_SUCCESFUL, post })
            })
            .catch(err => {
                dispatch({ type: 'NEW_POST_ERROR', err: err })
            })
    }
}
