import React, { createContext, useState } from "react";

//context creation

export const toggleButton = createContext();
const ButtonToggleContext = ({ children }) => {
  // create a state for toggle
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <toggleButton.Provider value={{ isLoggedIn, setLoggedIn }}>
        {children}
      </toggleButton.Provider>
    </div>
  );
};

export default ButtonToggleContext;
