//Button.js

import React from 'react';
import './Button.css';

const Button = ({ children, type = 'button', ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;