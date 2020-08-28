import React from 'react'
import placeholder from '../../images/placeholder.jpg'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostSummary = ({ post }) => {
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card medium">
                    <div className="card-image">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <div className="card-content black-text">
                        <span className="card-title">{post.title}</span>
                        <p>Posted by {post.authorUserName}</p>
                        <p>{post.message}</p>
                        <span>{moment(post.createdAt.toDate()).calendar()}</span>
                        <div className="card-action">
                            <Link to={'/post/' + post.id} key={post.id}>Read text</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSummary