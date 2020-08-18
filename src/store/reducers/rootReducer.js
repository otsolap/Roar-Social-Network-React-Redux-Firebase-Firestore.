const currentTime = new Date();

// tää on vaan muuntuja, johon objekteja tallenetaan.
const initialState = {
    posts: [
        {id: 'first', title: 'test uno', message: 'test message', time: currentTime},
        {id: 'second', title: 'test second', message: 'test message', time: currentTime},
        {id: 'third', title: 'test third', message: 'test message', time: currentTime},
        {id: 'fourth', title: 'test 4th world', message: 'test message', time: currentTime},
        {id: 'fith', title: 'test 5', message: 'test message', time: currentTime},
    ]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_POST_SUCCESFUL':
                return state;
        case 'NEW_POST_ERROR':
            return state;
        default:
                return state;
    }
}

export default rootReducer;