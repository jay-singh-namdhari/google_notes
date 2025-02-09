import React, { useState } from "react";
export default function DarkModeToggle({  }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
   
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Toggle Dark Mode</h2>
      </div>
    
  );
}
