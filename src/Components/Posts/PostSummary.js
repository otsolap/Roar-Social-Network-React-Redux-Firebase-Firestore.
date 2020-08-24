import React from 'react'
import { placeholder } from '../../images/placeholder.jpg'

const PostSummary = ({ post }) => {
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
                        <a href="/post:id">Reply</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSummary