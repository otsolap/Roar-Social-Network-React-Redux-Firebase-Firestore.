import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX BABY.
import { Provider, useSelector } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import { createStore } from 'redux'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
<App />
    </Provider >,
 document.getElementById('root'));
