// pages/WelcomeScreen.tsx
import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const WelcomeScreen: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <h1>Welcome to Travel Explorer</h1>
      <IonCard>
        <img src="https://via.placeholder.com/400x200" alt="Travel Card" />
        <IonCardHeader>
          <IonCardSubtitle>Adventure Awaits</IonCardSubtitle>
          <IonCardTitle>Explore New Destinations</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Add your favorite travel destination card here. Click the button below to get started!
        </IonCardContent>
      </IonCard>
      <IonButton expand="full" routerLink="/destinations">
        <IonIcon icon={add} />
        Add a Travel Card
      </IonButton>
    </IonContent>
  </IonPage>
);

export default WelcomeScreen;

