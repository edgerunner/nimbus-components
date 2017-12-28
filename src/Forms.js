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
            <ErrorMessage forField={props.id} type={type}>
                {valid[type]}
            </ErrorMessage>
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

export function ErrorMessage(props) {
    const {forField, children, type, ...rest} = props
    return (
        <label htmlFor={forField} className={type} key={type} {...rest}>
            {children}
        </label>
    );
}
