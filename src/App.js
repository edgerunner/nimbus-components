import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
