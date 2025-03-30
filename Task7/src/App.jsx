import React, { useState, useReducer, useMemo } from "react";
import { useCharacterCount } from "./hooks/useCharacterCount";
import "./App.css";

// Reducer for managing the character count state
const countReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { text: action.text, count: action.text.length };
    default:
      return state;
  }
};

const App = () => {
  const limit = 200; // Define the character limit
  const { text, count, handleTextChange } = useCharacterCount(limit);
  
  // Reducer to track the text state
  const [state, dispatch] = useReducer(countReducer, { text: "", count: 0 });

  const handleCopy = () => {
    navigator.clipboard.writeText(state.text);
    alert("Text copied to clipboard!");
  };

  const progress = useMemo(() => (count / limit) * 100, [count, limit]);

  const handleChange = (e) => {
    dispatch({ type: "SET_TEXT", text: e.target.value });
    handleTextChange(e);
  };

  const warningStyle = count >= limit * 0.9 ? { color: "red" } : { color: "black" };

  return (
    <div className="App">
      <h1>Character Counter App</h1>
      <textarea
        value={state.text}
        onChange={handleChange}
        placeholder="Type your text here"
        rows="6"
        cols="40"
      />
      <div style={warningStyle}>
        <p>Character count: {state.count}/{limit}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <button onClick={handleCopy}>Copy to Clipboard</button>
    </div>
  );
};

export default App;
