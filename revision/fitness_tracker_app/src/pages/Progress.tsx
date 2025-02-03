// pages/Progress.tsx
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
  IonProgressBar,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const Progress: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Progress</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Workout Streak</IonLabel>
            <IonProgressBar value={0.7}></IonProgressBar>
          </IonItem>
          <IonItem>
            <IonLabel>Weight Loss Goal</IonLabel>
            <IonProgressBar value={0.5}></IonProgressBar>
          </IonItem>
          {/* Add more progress indicators as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Progress;
