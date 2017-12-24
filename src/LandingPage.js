import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Forgot from './Forgot';
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
                <Route exact path='/' component={Login} />
                <Route path='/forgot' component={Forgot} />
            </main>
        )
    }
}

export default LandingPage;
