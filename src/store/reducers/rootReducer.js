import { NEW_POST_SUCCESFUL, REMOVE_ALL_POSTS } from '../actions/actionTypes';


// tää on vaan muuntuja, johon objekteja tallenetaan.
const initialState = {
    posts: [ 
        {
        title: '',
        message: '' 
    }
]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST_SUCCESFUL:
            // state.posts, koska haluamme vain vaikuttaa siihen.
         return {...state, posts:[...state.posts, action.post]}  
        
        case REMOVE_ALL_POSTS:
        return {...state, posts: []}

        default:
            return state;
    }
}

export default rootReducer;