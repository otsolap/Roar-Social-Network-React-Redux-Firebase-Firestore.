import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state ={
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
                [event.target.name]:event.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

        render() {
            return (
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
            );
        }
};

export default Register;