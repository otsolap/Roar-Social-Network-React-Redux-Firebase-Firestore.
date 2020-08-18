import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newPost} from '../../store/actions/postActions';
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
            // mutta muistutuksena se on title ja message.
           [event.target.id]: event.target.value
        });
    }

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

// 

const mapStateToProps = (state) => {
    return {

    }
}

// emme ole vielä tehneet actionTypessiin mitään toimintoja.
// niin teemme tähän Dispatch funktion, joka siis kertoo Propsille
// mitä sen kuuuisi tehdä.
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: post => dispatch(newPost(post))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);