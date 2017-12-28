import React from 'react';
import { Field } from './Forms';
import regex from './regex'

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {},
            email: {},
            password: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const {target: {id, value}} = event;
        const valid = this[`${id}Valid`](value);
        this.setState({ [id]: {value, valid} })
    }

    nameValid (name) {
        if (!name) { return { blank: "Name is required" } }
        if (name.match(regex.fullname)) {
            return { good: `Nice to meet you ${name}` }
        } else { return { error: "Come on, give us your full name" } }
        return { error: "I have no idea how we got here" }
    }

    emailValid (name) {
        if (!name) { return { blank: "Email is required" } }
        if (name.match(regex.email)) {
            return { good: 'That looks good' }
        } else { return { error: "That doesn't look like a proper email address" } }
        return { error: "I have no idea how we got here" }
    }

    passwordValid (name) {
        if (!name) { return { blank: "6-40 characters, at least one each of uppercase, lowercase and digits" } }
        if (name.match(regex.password)) {
            return { good: 'That looks good' }
        } else { return { error: "Please make sure that your password is between 6-40 characters, at least one each of uppercase, lowercase and digits" } }
        return { error: "I have no idea how we got here" }
    }

    render() {
        return (
            <div className='signup'>
                <Field id='name' type='text' label='Full name' { ...this.state.name } onChange={this.handleChange} />
                <Field id='email' type='email' label='Email address' { ...this.state.email } onChange={this.handleChange} />
                <Field id='password' type='password' label='Choose a good password' { ...this.state.password } onChange={this.handleChange} />
            </div>
        )
    }
}
