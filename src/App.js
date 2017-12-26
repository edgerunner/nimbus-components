import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/(forgot|signup)?" component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
