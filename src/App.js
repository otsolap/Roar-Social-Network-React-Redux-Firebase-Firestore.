// PERUSS REACT-ETTIÄ
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// KOMPONENTIT
import NavBar from './Components/Layout/NavBar';
import Main from './Components/HomePage/Main';
import Login from './Components/Auth/Login'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';
// FIREBASE
import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig, } from './config/FirebaseConfig';

// // Initialize Firebase
Firebase.initializeApp(firebaseConfig)
Firebase.analytics();



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/newpost" component={NewPost}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
