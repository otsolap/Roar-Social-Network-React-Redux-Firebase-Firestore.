import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications';
class Main extends Component {
    render() {
        const { posts } = this.props;

        return (
            <div>
                <Notifications />
                <AllPosts posts={posts} />
            </div >
        )
    }
}



export default (Main)