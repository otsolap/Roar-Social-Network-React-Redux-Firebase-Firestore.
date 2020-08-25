import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
class Main extends Component {
    render() {
        const { posts } = this.props;

        return (
            <div>
                <AllPosts posts={posts} />
            </div >
        )
    }
}



export default (Main)