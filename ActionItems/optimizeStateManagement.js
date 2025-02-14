// optimizeStateManagement.js
import React, { useState, useCallback, useMemo, memo } from "react";

// Memoized child component to prevent unnecessary re-renders
const ChildComponent = memo(({ onClick }) => {
    console.log("ChildComponent rendered");
    return <button onClick={onClick}>Click Me</button>;
});

export default function ParentComponent() {
    const [count, setCount] = useState(0);

    // useCallback memoizes the function to prevent recreation on each render
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    // useMemo caches expensive calculations
    const squaredCount = useMemo(() => count * count, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <h3>Squared Count: {squaredCount}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent onClick={handleClick} />
        </div>
    );
}
