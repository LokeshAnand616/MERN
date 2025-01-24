import React, { useContext } from 'react';
import { ThemeContext, AuthContext } from './ContextPage.js';

function Page() {
  // Consume the ThemeContext
  const theme = useContext(ThemeContext);
  console.log(theme);

  // Consume the AuthContext
  const currentUser = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '20px' }}>
      <h1>Welcome to the {theme === 'dark' ? 'Dark' : 'Light'} Theme</h1>
      <p>
        Logged in as: <strong>{currentUser}</strong> 
      </p>
    </div>
  );
}

export default Page;
