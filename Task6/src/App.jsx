import React from "react";
import { useUserAuth } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { isLoggedIn } = useUserAuth();

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        {isLoggedIn ? "Welcome, User!" : "Please log in"}
      </h1>
    </div>
  );
};

export default App;
