import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Forgot from './Forgot';
import Signup from './Signup';
import "./LandingPage.css"
import "./icons/nimbus.svg"


class LandingPage extends React.Component {
    render() {
        return (
            <main>
                <Welcome />
                <Route exact path='/' component={Login} />
                <Route path='/forgot' component={Forgot} />
                <Route path='/signup' component={Signup} />
            </main>
        )
    }
}

export default LandingPage;
