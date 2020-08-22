import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import LoadingSpinner from 'components/common/LoadingSpinner/LoadingSpinner';

import style from './Button.module.scss';

const Button = ({text, onClick, disabled, danger, primary, success, className, processing}) => {
    const buttonClassName = cn(style.button, className, {
        [style.primary]: primary,
        [style.success]: success,
        [style.danger]: danger,
    });

    const handleClick = () => {
        if (disabled) return;
        onClick();
    }

    return (
        <button onClick={handleClick} className={buttonClassName}>
            {text}
            {processing && <LoadingSpinner wrapperClassName={style.spinner}/>}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    onClick: PropTypes.func.isRequired,

    className: PropTypes.string,
    disabled: PropTypes.bool,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    primary: PropTypes.bool,
    processing: PropTypes.bool,
}

export default Button;
