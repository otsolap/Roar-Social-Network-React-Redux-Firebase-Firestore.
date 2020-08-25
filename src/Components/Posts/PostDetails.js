import React from 'react'
import { placeholder } from '../../images/placeholder.jpg'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';



const PostSummary = (props) => {
    const { post } = props;
    if (post) {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card large">
                        <div className="card-image">
                            <img src={placeholder} alt="placeholder" />
                        </div>
                        <span className="card-title">{post.title}</span>
                        <div className="card-content">
                            <p>{post.message}</p>
                        </div>
                        <div className="card-action">
                            This should take the user back.
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