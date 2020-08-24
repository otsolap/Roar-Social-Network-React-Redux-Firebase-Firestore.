import React from 'react'
import { placeholder } from '../../images/placeholder.jpg'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Link } from 'react-router-dom'


const PostSummary = (props) => {
    const { post } = props;
    if (post) {
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={placeholder} alt="placeholder" />
                            <span className="card-title">{post.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{post.message}</p>
                        </div>
                        <div className="card-action">
                            <Link to={'/post' + post.id}>Read text</Link>
                        </div>
                    </div>
                </div >
            </div >
        )
    } else {
        return (
            <div>
                <p>
                    Loading posts...
            </p>
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null
    return {
        post: post
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostSummary);