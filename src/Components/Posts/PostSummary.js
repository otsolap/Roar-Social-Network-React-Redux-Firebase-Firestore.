import React from 'react'
import { placeholder } from '../../images/placeholder.jpg'
import { Link } from 'react-router-dom'

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
                        <Link to={'/post/' + post.id} key={post.id}>Read text</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSummary