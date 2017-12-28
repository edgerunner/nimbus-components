import React from 'react';
import './Forms.css';

export function Field(props) {
    const onChange = (event) => {
        props.onChange({
            id: event.target.id,
            value: event.target.value
        });
    }

    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props } onChange={onChange} />
            <ValidationMessages forField={props.id} valid={props.valid} />
        </React.Fragment>
    );
}

export function ValidationMessages({forField, valid = {}, ...rest}) {
    return Object.keys(valid).map((type)=>{
        return (
            <ValidationMessage forField={forField} type={type} {...rest}>
                {valid[type]}
            </ValidationMessage>
        );
    });
}

export function ValidationMessage({forField, children, type, ...rest}) {
    return (
        <label htmlFor={forField} className={type} key={type} {...rest}>
            {children}
        </label>
    );
}
