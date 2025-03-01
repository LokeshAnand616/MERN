import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const ForwardComp = () => {
  const inputRef = useRef(null); // Create a ref

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  };

  return (
    <div>
      <h1>Forwarding Refs Example</h1>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput} style={buttonStyle}>Focus Input</button>
    </div>
  );
};

const buttonStyle = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

export default ForwardComp;
