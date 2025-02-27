import React from "react";

const InputField = ({ label, type, value, onChange, onBlur, error }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        className={error ? "input-error" : ""}
        autoComplete="Email"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
