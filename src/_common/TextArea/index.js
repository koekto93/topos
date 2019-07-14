import React from 'react';

import './style.scss';

const TextArea = ({ label, placeholder, value, onChange, name }) => {
  const handleChange = event => {
    event.stopPropagation();
    onChange({ name: event.target.name, value: event.target.value });
  };

  return (
    <div className="c-custom-textarea">
      <div className="c-custom-textarea__label">
        <span>{label}</span>
      </div>
      <textarea
        className="c-custom-textarea__textarea"
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

TextArea.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  name: '',
  onChange: () => {},
};

export default TextArea;
