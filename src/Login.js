import React, { Component } from 'react';
import "./Login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailValid: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleForgot = this.handleForgot.bind(this);
    }

    loginPossible()  { return this.state.emailValid && (this.state.password.length > 5) }
    forgotPossible() { return this.state.emailValid }
    loginButtonText() {
        if (this.loginPossible()) {
            return "Log in"
        } else {
            return "Enter email and password"
        }
    }
    forgotButtonText() {
        if (this.forgotPossible()) {
            return "Forgot password…"
        } else {
            return "Forgot password? Enter your email."
        }
    }

    handleInput(event) {
        let emailValid = this.state.emailValid;
        if (event.target.id === "email") {
            emailValid = event.target.value.match(/^\s*[\w-+.]+?@\w+?(?:\.\w+?)*?\s*$/);
        }
        this.setState({
            [event.target.id]: event.target.value,
            emailValid: emailValid
        });
    }

    handleLogin(event) {
        alert('Login attempt: ' + this.state.email);
        event.preventDefault();
    }

    handleForgot(event) {
        //request new password here
        this.props.history.push('/forgot');
    }

    render() {
        return (
        <div className="login">
            <h5>Already have an account?</h5>
            <form>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    autoFocus
                    required
                />
                <EmailError show={!this.state.emailValid && this.state.email.length > 0}/>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <input
                    id="login"
                    type="submit"
                    value={this.loginButtonText()}
                    disabled={!this.loginPossible()}
                    onClick={this.handleLogin}
                />

            </form>
            <input
                id="forgot"
                type="button"
                value={this.forgotButtonText()}
                disabled={!this.forgotPossible()}
                onClick={this.handleForgot}
            />
        </div>
        )
    }
}

function EmailError (props) {
    if (props.show) {
        return (<label htmlFor="email" data-error="malformed">That's not a proper email address yet</label>)
    } else {
        return null
    }
}
