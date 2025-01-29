import React, { useState, useMemo } from "react";

function MemoDemo() {
  const [count, setCount] = useState(0);

  // Expensive computation
  const factorial = useMemo(() => {
    console.log("Computing factorial...");
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h3>Factorial of {count}: {factorial}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
}

export default MemoDemo;
