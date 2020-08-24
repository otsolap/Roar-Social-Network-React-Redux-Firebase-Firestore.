import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX BABY
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
// ReactReduxFireBaseProvider varmistaa että Firebasen datasta saadaan propseja.
// Ja myös tekee siitä yhteentekevän Reduxin kanssa tietenkin.
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { FIREBASE_CONFIG as firebaseConfig } from './config/FirebaseConfig'

const store = createStore(
    rootReducer,
    compose(
        // withextraargument tallentaa objekteja, joita getfirestore ja getfirebase on
        // eli nyt thunkkeihin voi littää firebasen ja firestoren.
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebase, firebaseConfig),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={firebaseConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
        >
            <App />
        </ReactReduxFirebaseProvider>
    </Provider >,
    document.getElementById('root')
);