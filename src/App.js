import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <BrowserRouter history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/(forgot)?" component={LandingPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
