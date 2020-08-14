import React, { Component } from 'react';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }

    handleChange = event => {
        this.setState({
            message: event.target.value
        });
    }

handleNewMessage = event => {
    const { message } = this.state;
    this.setState({message: ''});
    event.preventDefault();
    console.log(message);
    // this.props.history.push(/)
}


    render() {
        return (
            <div className="row">
                <form id="newpost" className="col s12" onSubmit={this.handleNewMessage}>
                    <div className="input field col s6">
                        <input placeholder="Roar" 
                        id="newpost" 
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
            </div >
        );
    }

};

export default NewPost;