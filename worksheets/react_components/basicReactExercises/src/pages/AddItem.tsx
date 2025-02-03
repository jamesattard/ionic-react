import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";

const AddItemExample: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const updatedItems = [...items];
    updatedItems.push(inputValue);
    console.log("updatedItems: ", updatedItems);
    setItems(updatedItems);
    setInputValue("");
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            value={inputValue}
            placeholder="Enter Item"
            onIonInput={(e) => setInputValue(e.detail.value!)}
          />
          <IonButton onClick={addItem}>Add Item</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default AddItemExample;
