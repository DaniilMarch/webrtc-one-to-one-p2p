import React from 'react';
import {PuffLoader} from 'react-spinners';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './LoadingSpinner.module.scss';

const LoadingSpinner = ({wrapperClassName, size}) => {
    return (
        <div className={cn(style.wrapper, wrapperClassName)}>
            <PuffLoader size={size} />
        </div>
    )
}

LoadingSpinner.propTypes = {
    wrapperClassName: PropTypes.string,
    size: PropTypes.string,
}

LoadingSpinner.defaultProps = {
    size: '16',
}

export default LoadingSpinner;
