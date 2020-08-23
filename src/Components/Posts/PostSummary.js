import React, { Component } from 'react'
import { placeholder } from '../../images/placeholder.jpg'

class PostSummary extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={placeholder} alt="placeholder" />
                            <span className="card-title">{this.props.posts.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.props.posts.message}</p>
                        </div>
                        <div className="card-action">
                            <a href="/post:id">Reply</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PostSummary;