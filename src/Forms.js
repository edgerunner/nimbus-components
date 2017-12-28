import React from 'react';
import './Forms.css';

export function Field({id, label, valid, ...rest}) {
    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
            <ValidationMessages forField={id} valid={valid} />
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
