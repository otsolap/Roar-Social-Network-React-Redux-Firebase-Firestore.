// PERUSS REACT-ETTIÄ
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// KOMPONENTIT
import NavBar from './Components/Layout/NavBar';
import Login from './Components/Auth/Login'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Main from './Components/HomePage/Main';
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';
// FIREBASE
import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig, reduxFirebase_config as reduxFirebase } from './config/FirebaseConfig';

// // Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();

class App extends Component {
  constructor(props) {
    super(props);
    // tää on defaulttina null, koska sitten kun kävijä kirjautuu/rekisteröityy
    // tai usertoken nähdään.... tää sää inputtia.
    this.state = {
      uid: Firebase.auth().currentUser
    }
  }

  render() {
    // Firebase auth jos kävijöitä on kirjautunut
    Firebase.auth().onAuthStateChanged(user => {
      // varmistetaan että user on signed in.
      if (user && this.state.uid === null) {
        this.setState({
          uid: user.uid
        })
        // kävijä kirjautuu ulos ja componenttit pitää palauttaa "non-reg user" tyyliin
        // eli katsotaan onko KUKAAN kirjautunut sisään.
      } else if (!user && this.state.uid !== null) {
        this.setState({
          uid: null
        })
      }
    })


    return (
          <Router>
            <div className="App">
              <NavBar uid={this.state.uid}></NavBar>
              <main>
                <Switch>
                  <Route exact path="/" render={() => {
                    return <Main uid={this.state.uid} />
                  }} />
                  <Route path="/newpost" render={() => {
                    return <NewPost uid={this.state.uid} />
                  }} />
                  <Route path="/post:id" component={PostDetails} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" render={() => {
                    return <Logout uid={this.state.uid} />
                  }} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </main>
            </div>
          </Router>
    );
  }

}

export default App;
