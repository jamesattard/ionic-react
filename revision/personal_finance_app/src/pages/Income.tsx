// pages/Income.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const Income: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Income</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Salary</IonCardTitle>
            <IonCardSubtitle>$2000</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Monthly salary deposit.</IonCardContent>
        </IonCard>
        {/* Add more income cards as needed */}
      </IonContent>
    </IonPage>
  );
};

export default Income;
