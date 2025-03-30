import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" }}>
      <h2>My App</h2>
      <div>
        <button onClick={toggleAuth} style={{ padding: "8px 16px", cursor: "pointer" }}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
