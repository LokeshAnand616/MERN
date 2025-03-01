import React, { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Profiler Callback Function
const onRenderCallback = (
  id, // Component's "id"
  phase, // "mount" or "update"
  actualDuration, // Time taken for the update
  baseDuration, // Estimated time to render the component
  startTime, // When React started rendering
  commitTime, // When React committed the changes
  interactions // Set of interactions
) => {
  console.log(`Profiler ID: ${id}`);
  console.log(`Phase: ${phase}`);
  console.log(`Render Time: ${actualDuration}ms`);
  console.log(`Base Render Time: ${baseDuration}ms`);
  console.log(`Start Time: ${startTime}`);
  console.log(`Commit Time: ${commitTime}`);
};

const Profiler = () => {
  return (
    <div>
      <h1>React Profiler Example</h1>
      <React.Profiler id="MyComponent" onRender={onRenderCallback}>
        <MyComponent />
      </React.Profiler>
    </div>
  );
};

export default Profiler;
