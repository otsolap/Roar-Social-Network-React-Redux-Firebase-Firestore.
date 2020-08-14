import React, { Component } from 'react';
import Firebase from 'firebase';


class Login extends Component {
    // constructor luo uusia INSTANSSEJA loginnista, siksi käytämme thissiä.
    // THIS viittaa INSTANSSIIN, ei ITSE loginniin.
    // eli this muokkaa this.statea.... siksi siinä on se this.
    // constructor-method on varmaan siis välimies? joo constructor tekee lOGIN-INSTANSSIN. Näin Loginnia ei mutaatioiteta.
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        //  binding method => this. this on instance objektissa, joka luotiin.
        //  eli this varmistaa, että Login ei ole se muokattu, vaan se on handleinput tai submit.
        // this varmistaa, että muokkaus siis keskittyy tiettyyn osaan eikä parenttiin.
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleInput = (event) => {
            this.setState({
                // event target value on web-domainista revitti.
                // debugger ftw.
                [event.target.id]:event.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();
            Firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.password
            ).then(() => {
                console.log('login success');
            }).catch(err => {
            console.log('loigin fail:' + err);
        });
    }

        render() {
            return (
                <div className="row">
                      <div className="row">
                            <div className="input-field col s12">
                                <input 
                                id="email" 
                                name="email"
                                type="email"
                                className="validate" 
                                value={this.state.email}
                                onChange={this.handleInput}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    <form id="login" className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                id="password" 
                                name="password"
                                type="password" 
                                className="validate" 
                                value={this.state.password}
                                onChange={this.handleInput}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div >
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                                Login
                                </button>
                    </form >
                </div >
            );
        }
};

export default Login;