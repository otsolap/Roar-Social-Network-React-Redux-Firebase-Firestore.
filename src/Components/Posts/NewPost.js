import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Firebase from 'firebase';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        posted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }

    handleChange = event => {
        this.setState({
            // Voit laittaa tyhjät statet, koska nää tekee ne.
           [event.target.id]: event.target.value
        });
    }

handleNewMessage = event => {
    event.preventDefault();

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


    render() {
         return (    
                <div className="row">
                   { this.state.posted ? <Redirect to="/" /> : ''}
                    { 
                    !this.props.uid ?
            <Redirect to="/login" /> :
                <form id="newpost" className="col s12" onSubmit={this.handleNewMessage}>
                    <div className="input field col s6">
                    <label htmlFor="title">Title</label>
                        <input placeholder="title" 
                        id="title" 
                        type="text" 
                        className="validate" 
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                        />
                    </div>
                    <div className="input field col s6">
                        <input placeholder="Roar" 
                        id="message" 
                        type="text" 
                        className="validate" 
                        value={this.state.message}
                        onChange={e => this.setState({message: e.target.value})}
                        />
                        <label htmlFor="newpost">Make yourself Heard</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                       Make a roar!
                        </button>
                </form >
    }
            </div >
        );
    }
};


export default NewPost;