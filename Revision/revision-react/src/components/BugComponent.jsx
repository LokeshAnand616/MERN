import React, { useState } from "react";

const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Crashed at count 3!"); 
  }

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me: {count}
    </button>
  );
};

export default BuggyComponent;
