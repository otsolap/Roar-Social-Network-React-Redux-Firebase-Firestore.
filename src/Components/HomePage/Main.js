import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const { posts, auth } = this.props;
        if (!auth.uid) return <Redirect to="/Login" />

        return (
            <div>
                <Notifications />
                <AllPosts posts={posts} />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        // se tarvitsee Firestorereducerin joka on Rootreducerissa.
        auth: state.firebase.auth,
    }
}

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['createdAt', 'desc'] }
    ])
)(Main)