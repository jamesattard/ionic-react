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
  IonCardSubtitle,
} from "@ionic/react";

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard color="danger">
        <img src="https://via.placeholder.com/400x200" alt="Destination One" />
        <img src="https://via.placeholder.com/400x200" alt="Destination One" />
        <img src="https://via.placeholder.com/400x200" alt="Destination One" />
        <IonCardHeader>
          <IonCardTitle>Explore all Destinations</IonCardTitle>
          <IonCardSubtitle>
            Three destinations to choose from...
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          From exotic wonders, to historical places and modern cities! Explore
          these destinations from the side menu...
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Home;
