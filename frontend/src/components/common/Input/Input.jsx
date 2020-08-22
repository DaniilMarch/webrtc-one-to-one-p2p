import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import style from './Input.module.scss';

const Input = ({label, name, value, placeholder, onChange, classes, error}) => {

    return (
        <div className={cn(style.wrapper, classes.wrapper)}>
            {label && <label htmlFor={name} className={classes.label}>{label}</label>}
            <input
                type="text"
                value={value}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={({target: {value}}) => onChange(value)}
                className={classes.input}
            />
            {error && <div className={cn(style.error, classes.error)}>{error}</div>}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    classes: PropTypes.shape({
        wrapper: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
        error: PropTypes.string,
    }),
    error: PropTypes.string,

    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
    classes: {},
}

export default Input;
