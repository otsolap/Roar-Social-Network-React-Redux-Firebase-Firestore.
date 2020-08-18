import React, { Component } from 'react';
import PostSummary from './PostSummary'
import { connect } from 'react-redux';
import Firebase from 'firebase';

class AllPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
    }

    componentDidMount = () => {
        Firebase.firestore().collection('posts').get()
        .then(resp => {
            this.setState({
                posts: resp.docs
            })
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    render() {
        var x = 0;

        return (
    <div>
        {
            // nää oli ekana state, mutta nyt reduxin myötä props.
            this.props.posts ?
            this.props.posts.map(post =>
                 <PostSummary post={post.data()} key={x++}></PostSummary>
                 )   :
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
    
    // connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
    // connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default connect(mapStateToProps)(AllPosts);