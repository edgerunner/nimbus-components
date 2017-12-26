import React from 'react';
import './Forms.css';

export function Field(props) {
    const onChange = (event) => {
        props.onChange({
            id: event.target.id,
            value: event.target.value
        });
    }

    const valid = props.valid || {};
    const messages = Object.keys(valid).map((type)=>{
        return (
            <label htmlFor={props.id} className={type} key={type}>
                {props.valid[type]}
            </label>
        );
    });

    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props } onChange={onChange} />
            {messages}
        </React.Fragment>
    );
}
