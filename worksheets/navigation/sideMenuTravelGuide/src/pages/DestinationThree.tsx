import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

const DestinationThree: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Destination Three</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <h1>Destination Three</h1>
      <IonCard>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Destination Three"
        />
        <IonCardHeader>
          <IonCardTitle>Attractions</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel>Attraction 1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Attraction 2</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Attraction 3</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default DestinationThree;
