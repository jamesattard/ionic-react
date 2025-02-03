// pages/Expenses.tsx
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

const Expenses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Expenses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Food</IonCardSubtitle>
            <IonCardTitle>$50</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Lunch with friends.</IonCardContent>
        </IonCard>
        {/* Add more expense cards as needed */}
      </IonContent>
    </IonPage>
  );
};

export default Expenses;
