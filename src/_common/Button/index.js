import React from 'react';

import './style.scss';

const Button = ({ text }) => (
  <div className="c-button display-flex _a-center _j-center">
    <span>{text}</span>
  </div>
);

export default Button;
