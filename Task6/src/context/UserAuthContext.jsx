import React, { createContext, useState, useContext } from "react";

// Create the context
const UserAuthContext = createContext();

// Create the provider component
export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom hook for easy access
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
