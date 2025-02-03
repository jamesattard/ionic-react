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
  IonBadge,
  IonButton,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Chest Day</IonCardSubtitle>
            <IonCardTitle>Bench Press</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonBadge color="primary">Strength</IonBadge>
            <IonBadge color="secondary">Upper Body</IonBadge>
            <IonButton expand="full" fill="clear" color="tertiary">
              Edit
            </IonButton>
          </IonCardContent>
        </IonCard>
        {/* Add more workout cards as needed */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
