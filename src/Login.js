import React from 'react';
import "./Forms.css"
import regex from './regex'
import {Field, Button} from './Forms'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: { valid: { blank: "Required" } },
            password: { valid: { blank: "Required" } }
        };
        this.handleChange   = this.handleChange.bind(this)
        this.loginPossible  = this.loginPossible.bind(this)
        this.forgotPossible = this.forgotPossible.bind(this)
        this.loginButtonText = this.loginButtonText.bind(this)
        this.forgotButtonText = this.forgotButtonText.bind(this)
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

    handleChange (event) {
        const {target: {id, value}} = event;
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
        return <LoginForm
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            handleForgot={this.handleForgot}
            loginButtonText={this.loginButtonText}
            forgotButtonText={this.forgotButtonText}
            loginPossible={this.loginPossible}
            forgotPossible={this.forgotPossible}
               />
    }
}

function LoginForm({email, password, handleChange, handleLogin, handleForgot, loginButtonText, forgotButtonText, loginPossible, forgotPossible}) {
    return (
    <div className="login">
        <h5>Already have an account?</h5>
        <form>
            <Field id='email' type='email' label='Email address' { ...email } onChange={handleChange} />
            <Field id='password' type='password' label='Password' { ...password } onChange={handleChange} />
            <Button id="login" className="submit" disabled={!loginPossible()} onClick={handleLogin}>{loginButtonText()}</Button>
            <Button id="forgot" disabled={!forgotPossible()} onClick={handleForgot}>{forgotButtonText()}</Button>
        </form>
    </div>
    )
}

function InvalidLoginError(props) {
    if (props.show) {
        return (<label htmlFor="password" data-error="invalid">Invalid email or password</label>)
    } else {
        return null
    }
}
