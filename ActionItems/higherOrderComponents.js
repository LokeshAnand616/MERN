// higherOrderComponents.js
import React from "react";

// Higher-Order Component
function withLogger(WrappedComponent) {
    return function LoggerComponent(props) {
        console.log(`Rendering ${WrappedComponent.name}`);
        return <WrappedComponent {...props} />;
    };
}

// Example Component
function SimpleComponent({ message }) {
    return <h2>{message}</h2>;
}

// Enhanced Component
const EnhancedComponent = withLogger(SimpleComponent);

export default function App() {
    return <EnhancedComponent message="Hello from HOC!" />;
}
