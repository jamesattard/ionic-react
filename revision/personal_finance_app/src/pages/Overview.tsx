// pages/Overview.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const Overview: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Total Income</IonLabel>
            <IonBadge color="success">$2000</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Total Expenses</IonLabel>
            <IonBadge color="danger">$50</IonBadge>
          </IonItem>
          {/* Add more overview metrics as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Overview;
