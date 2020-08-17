import React, { Component } from 'react';
import Firebase from 'firebase';


class Register extends Component {
    firestore = Firebase.firestore(); // Firestore!

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(resp => {
            Firebase.firestore().collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                email: this.state.email,
            }).then(() => {
                console.log('User acccount created');
                console.log(resp.user.uid)
                this.props.history.push('/');
            })
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } if (errorCode === 'auth/email-already-in-use') {
                alert('The email has already been taken');
            }
            if (errorCode === 'invalid-email') {
                alert('Not a valid email');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }

    render() {
        return (
            <div className="herobanner">
                <h1>MAKE SOCIAL MEDIA GREAT AGAIN</h1>
                <h4>Social Media is a disease. Meet the cure.</h4>
                <div className="row">
                    <form id="register" className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input field col s6">
                                <input
                                    placeholder="First name"
                                    name='firstname'
                                    id="firstname"
                                    type="text"
                                    className="validate"
                                    value={this.state.firstname}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="input field col s6">
                                <input
                                    placeholder="Last name"
                                    name='lastname'
                                    id="lastname"
                                    type="text"
                                    className="validate"
                                    value={this.state.lastname}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="lastname">Last name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input field col s6">
                                <input
                                    placeholder="Username"
                                    id="username"
                                    name='username'
                                    type="text"
                                    className="validate"
                                    value={this.state.username}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    type="password"
                                    name='password'
                                    className="validate"
                                    value={this.state.password}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div >
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="email"
                                    type="email"
                                    name='email'
                                    className="validate"
                                    value={this.state.email}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Register
                                </button>
                    </form >
                </div >
            </div >
        );
    }
};

export default Register;