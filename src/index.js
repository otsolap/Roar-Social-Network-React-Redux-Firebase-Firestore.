import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX BABY.
import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root'));
