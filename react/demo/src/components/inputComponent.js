import React, { useState } from 'react';

const InputComponent = ({ onTextChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Pass the updated value to the parent
    onTextChange(value);
  };

  return (
    <div>
      <label>
        Enter text:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
};

export default InputComponent;
