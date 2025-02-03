import { IonButton, IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";

const SimpleCounter = () => {
  ////////////////////////////////////////////////////////////////////////////
  // This is a demo of why JS function won't cut it and we need to use React!
  ///////////////////////////////////////////////////////////////////////////
  let jsCounter = 0;

  // Non-React Function (won't really increment anything!)
  function jsHandleIncrement() {
    console.log("button is clicked");
    jsCounter++;
    return jsCounter;
  }

  /////////////////////////////////////////////////////
  // This is the correct way of displaying dynamic data
  /////////////////////////////////////////////////////

  // State variable to store the count
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Javascript Counter</h2>
        {/* This is not a valid counter */}
        {jsCounter}
        <br />

        {/* This is a valid counter with React */}
        {/* <p>Count: {count}</p> */}
        {/* <IonButton onClick={handleIncrement}>Increment</IonButton> */}
        <IonButton onClick={jsHandleIncrement}>JS Increment</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SimpleCounter;
