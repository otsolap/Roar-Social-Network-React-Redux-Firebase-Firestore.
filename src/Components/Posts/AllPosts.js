import React, { Component } from 'react';
import PostSummary from './PostSummary'
import { removeAllPosts } from '../../store/actions/postActions'
import { connect } from 'react-redux';
// import Firebase from 'firebase';

class AllPosts extends Component {
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.removeAllPosts}>Remove all posts.</button>
                {
                    // nää oli ekana state, mutta nyt reduxin myötä props.
                    this.props.posts.length > 0 ?
                        this.props.posts.map(post =>
                            <PostSummary post={post} key={Math.random() * 99} />
                        ) :
                        'Loading.....'
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllPosts: () => {
            dispatch(removeAllPosts())
        }
    }
}

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);