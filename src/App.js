import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Özgür"
        };
    }
    render() {
        return (
            <LandingPage/>
        );
    }
}

export default App;
