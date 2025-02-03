import React, { useState } from "react";

const CounterWithLocalStorage = () => {
  // State variable to store the count
  const [count, setCount] = useState(() => {
    // Initialize count from local storage, or default to 0
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  // Event handler to increment the count
  const handleIncrement = () => {
    const newCount = count + 1;
    // Save the updated count to local storage
    localStorage.setItem("count", newCount.toString());
    setCount(newCount);
  };

  // Event handler to reset the count
  const handleReset = () => {
    // Reset count to 0 and update local storage
    localStorage.setItem("count", "0");
    setCount(0);
  };

  return (
    <div>
      <h2>Counter with Local Storage</h2>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={handleIncrement}>Increment</button>
      <br />
      {/* Button to reset count */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterWithLocalStorage;
