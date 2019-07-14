import React from 'react';

import './style.scss';

const Button = ({ text, handleClick, fileName }) => (
  <div
    className="c-button display-flex _a-center _j-center"
    onClick={handleClick}
  >
    {fileName ? (
      <a href={require(`../../docs/${fileName}.pdf`)} download>
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default Button;
