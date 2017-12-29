import React from 'react';
import './Forms.css';

export function Field({id, label, ...rest}) {
    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </React.Fragment>
    );
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
