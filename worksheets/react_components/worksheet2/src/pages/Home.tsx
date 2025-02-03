import { IonInput } from "@ionic/react";
import React, { useState } from "react";

const UserIncrementalValueCounter = () => {
  // State variable to store the count and increment value
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(count + incrementValue);
  };

  // Event handler to update the increment value state
  const handleIncrementValueChange = (event: any) => {
    setIncrementValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h2>Increment Example</h2>
      <p>Count: {count}</p>

      {/* Input for user to enter increment value */}
      <label>
        Increment Value:
        {/* Using Basic HTML Input */}
        {/* <input
          type="number"
          value={incrementValue}
          onChange={handleIncrementValueChange}
        /> */}
        {/* Using IonInput */}
        <IonInput
          type="number"
          value={incrementValue}
          onIonInput={handleIncrementValueChange}
        />
      </label>

      {/* Button to increment count by the entered value */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UserIncrementalValueCounter;
