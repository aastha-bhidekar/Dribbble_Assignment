//InputField.js

import React from 'react';
import './InputField.css'; 

const InputField = ({ label, name, value, onChange, type = 'text', error, hint }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
};

export default InputField;



