import React from 'react';

import './style.scss';

const Input = ({ label, placeholder, value, onChange, type, name }) => {
  const handleChange = event => {
    event.stopPropagation();
    onChange({ name: event.target.name, value: event.target.value });
  };

  return (
    <div className="c-custom-input">
      <div className="c-custom-input__label">
        <span>{label}</span>
      </div>
      <input
        className="c-custom-input__input"
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  label: '',
  onChange: () => {},
};

export default Input;
