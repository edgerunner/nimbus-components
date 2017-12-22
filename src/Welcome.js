import React, { Component } from 'react';
import "./Welcome.css";
import logo from './icons/nimbus.svg';
import {Link} from 'react-router-dom';

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <h1>
                    <img src={logo}/>
                    Nimbus is awesome
                </h1>
                <p>You will do wonderful things with it</p>
                <Link to="/signup">Sign up now!</Link>
            </div>
        )
    }
}
export default Welcome;
