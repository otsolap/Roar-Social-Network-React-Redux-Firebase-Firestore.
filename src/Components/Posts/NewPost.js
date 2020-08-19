import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newPost } from '../../store/actions/postActions';
// import Firebase from 'firebase';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
    }

    createNewPost(post) {
        this.props.newPost(post);
    }

    handleChange = event => {
        this.setState({
            // Voit laittaa tyhjät statet, koska nää tekee ne.
            // mutta muistutuksena se on title ja message.
            [event.target.id]: event.target.value
        });
    }
    /*
        handleNewMessage = event => {
            event.preventDefault();
            this.props.NewPost({
                title: this.state.title,
                message: this.state.message
            })
            
                Firebase.firestore().collection('posts').add({
                    title: this.state.title,
                    message: this.state.message,
                    time: new Date(),
                    user: Firebase.auth().currentUser.uid
                }).then(() => {
                    this.setState({
                        posted: true
                    });
                })
           
        
        
        }
    */
    render() {
        return (
            <div className="row">
                <form id="newpost" className="col s12" onSubmit={this.createNewPost}>
                    <div className="input field col s6">
                        <label htmlFor="title">Title</label>
                        <input placeholder="title"
                            id="title"
                            type="text"
                            className="validate"
                            value={this.state.title}
                            onChange={e => this.setState({ title: e.target.value })}
                        />
                    </div>
                    <div className="input field col s6">
                        <input placeholder="Roar"
                            id="message"
                            type="text"
                            className="validate"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                        />
                        <label htmlFor="newpost">Make yourself Heard</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Make a roar!
                        </button>
                </form >
            </div >
        );
    }
};

// pitää AINA palauttaa objekti.
// reduxStatessa on meidän todos.
// reduxState muutetaan propsiksi Reactissa.
function mapStatetoProps(reduxState) {
    return {
        posts: reduxState.posts
    };
}

// 1 miten actionit dispatchataan.
// 2 payload on post: post - sitä käytetään luomaan uusi state.
// 3 dispatch funktiot menevät komponentteihin propseina, tässä mallina ne menevät post propsilla.


// jos MapStatetoPropsia ei ole, pitää laittaa null.
// mapDispatchtoprops pitää aina olla tokana, koska state tulee aina ennen propsia.
// connect, state, props. Tässä järjestyksessä.
export default connect(mapStatetoProps, { newPost })(
    NewPost
);