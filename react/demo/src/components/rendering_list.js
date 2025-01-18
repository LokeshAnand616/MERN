import React, { useState, useEffect } from 'react';

function exampleRender() {
  // 1. State Management
  const [count, setCount] = useState(0); // Count for counter functionality
  const [name, setName] = useState('');  // State for the name input
  const [showMessage, setShowMessage] = useState(false); // Message toggle
  const [users, setUsers] = useState([]); // List of users fetched from an API

  // 2. Fetching Data using useEffect
  useEffect(() => {
    // Simulating an API fetch to get users
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data); // Set fetched users to the state
    };
    fetchUsers();
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  // 3. Event Handling for button click to increment counter
  const increment = () => {
    setCount(count + 1);
  };

  // 4. Handling input field change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // 5. Toggling Message Visibility
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  // 6. Handling form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Functionality Demonstration</h1>
      </header>

      {/* 7. State Management */}
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment Counter</button>
      </div>

      {/* 8. Conditional Rendering */}
      <div>
        <button onClick={toggleMessage}>Toggle Message</button>
        {showMessage && <p>This is a conditionally rendered message!</p>}
      </div>

      {/* 9. Forms */}
      <div>
        <h2>Enter Your Name</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* 10. Lists and Keys */}
      <div>
        <h2>User List (Fetched from API)</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default exampleRender;
