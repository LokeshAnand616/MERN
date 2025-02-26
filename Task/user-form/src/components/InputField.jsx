import React from "react";

const InputField = ({ label, type, value, onChange, name, error,ref }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
