import React, { useState } from 'react';
import InputComponent from './inputComponent';
import DisplayComponent from './displayComponent';

const ParentComponent = () => {
  // Declare the shared state in the parent
  const [text, setText] = useState('');

  // Function to handle changes from the InputComponent
  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <InputComponent onTextChange={handleTextChange} />
      <DisplayComponent text={text} />
    </div>
  );
};

export default ParentComponent;
