import React from 'react';
import './styles.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps} id="addTag">
      {children}
    </button>
  );
}

export default Button