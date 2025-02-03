import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";

const ToggleItemExample: React.FC = () => {
  const [showItem, setShowItem] = useState(false);

  const toggleItem = () => {
    setShowItem(!showItem);
  };

  return (
    <IonPage>
      <IonContent>
        {showItem && (
          <IonItem>
            <IonLabel>This is a hidden item.</IonLabel>
          </IonItem>
        )}
        <IonButton onClick={toggleItem}>
          {showItem ? "Hide Item" : "Show Item"}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ToggleItemExample;
