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
                    Nimbus is here!
                </h1>
                <p>
                    Nimbus is the future of the laundry business. Nimbus allows you
                    to monitor and control your on-premises laundry department, or
                    your self-service laundromat shops from wherever you are at any moment.
                </p>
                <p>
                    Nimbus is in the beta stage now. It is currently available
                    for select self-service laundromats operating
                    <a href='http://tolon.com'>Tolon TWE series washer-extractors</a>
                    only.
                </p>
                <p>
                    We are working round the clock on expanding the coverage
                    and capabilities of Nimbus, so if you are in the laundry business,
                    or any other industry like hospitality or healthcare that has
                    to deal with laundry, we are interested in hearing about you
                    and your ideas. Please say hi through
                    <a href="mailto:hi@nimbus.lc">hi@nimbus.lc</a>
                </p>
                <Link to="/signup" id='signup'>Sign up for Nimbus!</Link>
            </div>
        )
    }
}
export default Welcome;
