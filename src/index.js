import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX BABY
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore  } from 'redux-firestore' // new
import { ReactReduxFirebaseProvider, getFirebase  } from 'react-redux-firebase' // new
import firebase from 'firebase/app' // new
import { FIREBASE_CONFIG as firebaseConfig } from './config/FirebaseConfig' // new

const store = createStore(
        rootReducer,
        compose(
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
         <React.StrictMode>
              <App />
            </React.StrictMode>
        </ReactReduxFirebaseProvider>
    </Provider >,
    document.getElementById('root')
    );