import React from 'react'
import { placeholder } from '../../images/placeholder.jpg'

const PostSummary = (props) => (
    <div className="row">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src={placeholder} alt="placeholder" />
                    <span className="card-title">{props.post.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.post.message}</p>
                    <span className="orange lighten-4">{props.post.time.toString()}</span>
                </div>
                <div className="card-action">
                    <a href="/post:id">Reply</a>
                </div>
            </div>
        </div>
    </div>

)

export default PostSummary;