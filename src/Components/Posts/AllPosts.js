import React, { Component } from 'react';
import PostSummary from './PostSummary'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// import Firebase from 'firebase';

class AllPosts extends Component {
    render() {
        const { posts } = this.props;

        return (
            <div>
<<<<<<< HEAD
                <button className="btn" onClick={this.props.removeAllPosts}>Remove all posts.</button>
                {
                    // nää oli ekana state, mutta nyt reduxin myötä props.
                    this.props.posts.length > 0 ?
                        this.props.posts.map(post =>
                            <PostSummary post={post} key={Math.random()*99} />
                        ) :
                        'Loading.....'
                }
=======
                {posts && posts.map(post => {
                    return (
                        <PostSummary post={post} key={post.id} />
                    )
                })}
>>>>>>> ee1f78b53ba87a9bc81196c8cc602512b977a43c
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        posts: state.firestore.ordered.posts
    }
}



// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(AllPosts)