import React from "react";

class ErrorBoundary extends React.Component{
    constructor(Props){
        super(Props);
        this.state = {hasError:false}
    }
    static getDerivedStateFromError(error){
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo){
        console.error("Error caught:", error, errorInfo);
    }
    render(){
        if (this.state.hasError) {
            return <h2 style={{ color: "red" }}>⚠️ Oops! Something went wrong.</h2>;
          }
          return this.props.children;
    }
}

export default ErrorBoundary;