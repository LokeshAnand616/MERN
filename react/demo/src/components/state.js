import React, { useState } from 'react';

function state() {
  // Step 1: State for the message to be displayed
  const [message, setMessage] = useState('Hello, welcome to React!'); // Initial message
  
  // Step 2: State to track the number of clicks
  const [clickCount, setClickCount] = useState(0); // Counter to track button clicks
  
  // Step 3: State to track whether we are in "toggle" mode or not
  const [isToggled, setIsToggled] = useState(false); // Toggle between two messages

  // Step 4: Function to change the message when the button is clicked
  const changeMessage = () => {
    // Update the click count
    setClickCount(clickCount + 1);

    // Toggle the message text based on the current state of `isToggled`
    if (!isToggled) {
      setMessage('You clicked the button!');
    } else {
      setMessage('Hello, welcome to React!');
    }

    // Toggle the state (switch between two messages)
    setIsToggled(!isToggled);

    // Step 5: If button is clicked 5 times, show a special message
    if (clickCount >= 4) {
      setMessage('You have clicked 5 times!');
    }
  };

  return (
    <div>
      <h1>{message}</h1> {/* Display the current message */}
      
      {/* Display how many times the button has been clicked */}
      <p>Button clicked {clickCount} times</p>
      
      {/* Button to change the message */}
      <button onClick={changeMessage}>Click me to change the message</button>
      
      {/* Step 6: Conditional Rendering based on the click count */}
      {clickCount >= 5 && (
        <p style={{ color: 'red' }}>You have clicked the button 5 times! Time to take a break!</p>
      )}

      {/* Step 7: Extra information based on toggled state */}
      {isToggled ? (
        <p>The message is in "toggled" state!</p>
      ) : (
        <p>The message is in "initial" state!</p>
      )}
    </div>
  );
}

export default state;
