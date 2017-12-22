import React, { Component } from 'react';
import Welcome from './Welcome';
import Login from './Login';
import "./LandingPage.css"
import "./icons/nimbus.svg"


class LandingPage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <main>
                <Welcome />
                <Login />
            </main>
        )
    }
}

export default LandingPage;
