import React, { forwardRef } from "react";

// Forwarding ref to the input element
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={inputStyle} />;
});

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "2px solid #3498db",
  borderRadius: "5px",
};

export default CustomInput;
