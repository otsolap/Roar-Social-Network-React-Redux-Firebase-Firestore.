import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const { posts, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to="/Login" />

        return (
            <div>
                <div>
                    <Notifications notifications={notifications} />
                </div >
                <div>
                    <AllPosts posts={posts} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        // HUOMAA MITKÄ ON FIREBASESTA JA MITKÄ FIRESTORESTA. HUOMAA ERO!!!!
        // se tarvitsee Firestorereducerin joka on Rootreducerissa.
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] },
    ])
)(Main)