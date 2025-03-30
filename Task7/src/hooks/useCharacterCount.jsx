import { useState, useCallback, useEffect } from "react";

// Custom hook to manage character count
export const useCharacterCount = (limit) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleTextChange = useCallback((e) => {
    const value = e.target.value;
    if (value.length <= limit) {
      setText(value);
      setCount(value.length);
    }
  }, [limit]);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  return { text, count, handleTextChange };
};
