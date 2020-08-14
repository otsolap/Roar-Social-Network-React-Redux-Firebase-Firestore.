import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Layout/NavBar';
import Login from './Components/Auth/Login'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import Main from './Components/HomePage/Main';
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';
import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig} from './config/FirebaseConfig';
 
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);
  Firebase.analytics();

 const db = Firebase.firestore();
 db.collection('posts').get()
 // resp = response, doh.
   .then(resp => {
     console.log('resp is: ');
     console.log(resp);
     // response docs => documentit, eli meidän datat.
     console.log('resp.docs is: ' + resp.docs);
     // eli meidän kaikki data.
     console.log(resp.docs);
     // documentti numero 1 data.
     console.log('resp.docs[0].data()');
     console.log(resp.docs[0].data());
   })
   .catch(err => {
     console.log(err);
   });

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/post:id" component={PostDetails} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
