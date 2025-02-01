import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus(); // Custom method to focus input
    },
    clearInput: () => {
      inputRef.current.value = ""; // Custom method to clear input
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
});

// Parent Component
function UseImperativeHandle() {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>useImperativeHandle Example</h2>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  );
}

export default UseImperativeHandle;
