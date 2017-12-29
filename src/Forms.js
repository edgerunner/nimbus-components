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
            <Message forField={forField} type={type} {...rest}>
                {valid[type]}
            </Message>
        );
    });
}

export function Message({children, forField, type, show=(()=>true), ...rest}) {
    if (show()) {
        return <label htmlFor={forField} className={type} {...rest}>{children}</label>
    } else {
        return null;
    }
}

export function Button({id, children, disabled, valid, ...rest}) {
    return (
        <button id={id} disabled={disabled} {...rest}>
            {children}
        </button>
    )
}
