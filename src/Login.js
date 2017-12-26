import React from 'react';
import "./Forms.css"
import regex from './regex'
import {Field} from './Forms'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: { valid: { blank: "Required" } },
            password: { valid: { blank: "Required" } }
        };
        this.handleChange = this.handleChange.bind(this)
    }

    loginPossible()  { return this.state.email.valid.good && this.state.password.valid.good }
    forgotPossible() { return this.state.email.valid.good }
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

    handleChange ({id, value}) {
        const valid = this[`${id}Valid`](value);
        this.setState({ [id]: {value, valid} })
    }

    emailValid (email) {
        if (!email) { return { blank: "Email is required" } }
        if (email.match(regex.email)) {
            return { good: 'That looks good' }
        } else { return { error: "That doesn't look like a proper email address" } }
        return { error: "I have no idea how we got here" }
    }

    passwordValid (password) {
        if (!password) { return { blank: "Enter your password to login" } }
        if (password.match(regex.password)) {
            return { good: '✓' }
        } else { return { error: "A password is at least 6 characters long with uppercase and lowercase letters, and numbers in it" } }
        return { error: "I have no idea how we got here" }
    }

    handleLogin = (event) => {
        event.preventDefault();
        // handle login here
        this.dummyLogin();
    }

    dummyLogin = () => {
        if (
            this.state.email === 'dummy@dummy.dum' &&
            this.state.password === 'dummydum'
        ) {
            this.props.history.push('/dashboard');
        } else {
            this.setState( { password: { valid: { error: "Wrong email or password" } } } );
        }
    }

    handleForgot = (event) => {
        //request new password here
        this.props.history.push('/forgot');
    }

    render() {
        return (
        <div className="login">
            <h5>Already have an account?</h5>
            <form>
                <Field id='email' type='email' label='Email address' { ...this.state.email } onChange={this.handleChange} />
                <Field id='password' type='password' label='Password' { ...this.state.password } onChange={this.handleChange} />

                <input
                    id="login"
                    type="submit"
                    value={this.loginButtonText()}
                    disabled={!this.loginPossible()}
                    onClick={this.handleLogin}
                />
                <input
                    id="forgot"
                    type="button"
                    value={this.forgotButtonText()}
                    disabled={!this.forgotPossible()}
                    onClick={this.handleForgot}
                />
            </form>
        </div>
        )
    }
}

function InvalidLoginError(props) {
    if (props.show) {
        return (<label htmlFor="password" data-error="invalid">Invalid email or password</label>)
    } else {
        return null
    }
}
