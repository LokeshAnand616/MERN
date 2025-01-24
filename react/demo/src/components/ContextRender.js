import React from 'react';
import Page from './Page';
import { AuthContext, ThemeContext } from './ContextPage';


function ContextRender() {
  // Theme value
  const theme = 'dark'// Example: dark or light

  // Current user (for authentication)
  const currentUser = 'Lokesh Iyyappan';
  

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ContextRender;
