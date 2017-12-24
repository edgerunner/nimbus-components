import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Forgot extends Component {
    render() {
        return(
            <div className='forgot'>
                <p>
                    We just sent you an email from reset@nimbus.lc to reset your
                    password. You should receive it in a couple of minutes.
                    Please follow the link on that email, which will take you to
                    a special page to reset your password.
                </p>
                <p>
                    If you suddenly remember your password now (it happens!),
                    you can <Link to="/">go back and try again</Link>
                </p>
                <p>
                    If you somehow can't receive your reset email, contact us through
                    the chat widget or email us at <a href='mailto:support@nimbus.lc'>support@nimbus.lc</a>,
                    and we will do our best to help you.
                </p>
            </div>
        )
    }
}
