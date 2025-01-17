import React, { useState, useEffect } from 'react';

function Lifecycle() { // Name should start with uppercase letter
  // State for Message
  const [message, setMessage] = useState('Hello, welcome to the React useEffect demo!');
  
  // State for Counter
  const [count, setCount] = useState(0);
  
  // State for Time (for clock functionality)
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  // State for API-like data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // ** Example 1: useEffect with componentDidMount (run once) **
  useEffect(() => {
    console.log('componentDidMount: Component is mounted');
    setMessage('Component mounted! Use the button to interact.');
  }, []); // Empty dependency array means it runs only once
  
  // ** Example 2: useEffect with componentDidUpdate (dependent on count) **
  useEffect(() => {
    console.log(`componentDidUpdate: Count is now ${count}`);
  }, [count]); // This runs every time `count` changes
  
  // ** Example 3: useEffect with cleanup (componentWillUnmount) - timer setup **
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval when component unmounts
    return () => {
      clearInterval(timer);
      console.log('Cleanup: Timer cleared');
    };
  }, []); // Runs once on mount, cleanup on unmount

  // ** Example 4: Simulate fetching data from API (Simulating componentDidMount) **
  useEffect(() => {
    setTimeout(() => {
      setData({ id: 1, name: 'John Doe', age: 30 });
      setLoading(false);
    }, 2000); // Simulate an API request after 2 seconds
  }, []); // Empty dependency array, runs only once

  // ** Example 5: Simulate fetching data on count change (example of dynamic updates) **
  useEffect(() => {
    if (count >= 5) {
      setMessage('You clicked the button 5 times!');
    }
  }, [count]); // Runs whenever count changes

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{message}</h1>
      <p>Current count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Current Time: {time}</h2>
      
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h3>Data from "API":</h3>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      )}

      <div>
        <p>Check the console for lifecycle logs and updates!</p>
      </div>
    </div>
  );
}

export default Lifecycle; // Export the component
