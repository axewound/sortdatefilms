import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

const Button = ({ type, filled, ...rest }) => {
    const props = {
        ...rest,
        className: classNames('button', {
            'button--filled': filled,
        })
    };
    return <button {...props} type={type} />;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    filled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: undefined,
    type: 'button',
    filled: false,
};

export default Button;
