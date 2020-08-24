import postsReducer from './postsReducer';
// firestoreReducer saadaam koodinrakenne async.
// firestore ja state tekee yhteistyötä taustalla
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    posts: postsReducer,
    firestore: firestoreReducer
});

export default rootReducer;