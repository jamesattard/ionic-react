import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";

const IncrementDecrementExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Count: {count}</IonLabel>
        </IonItem>
        <IonItem>
          <IonButton onClick={increment}>Increment</IonButton>
          <IonButton onClick={decrement}>Decrement</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default IncrementDecrementExample;
