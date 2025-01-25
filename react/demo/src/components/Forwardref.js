// ForwardRefExample.js
import React, { forwardRef, useRef } from 'react';

const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Enter something..." />;
});

function ForwardRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>ForwardRef Example</h1>
      <InputComponent ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ForwardRefExample;