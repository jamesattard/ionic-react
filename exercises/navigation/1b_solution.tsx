// pages/RecipeCatalog.tsx
import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonMenuButton, IonToolbar, IonTitle } from '@ionic/react';
import { IonRouterLink } from '@ionic/react-router';

const RecipeCatalog: React.FC = () => (
  <IonPage>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Recipes</IonTitle>
    </IonToolbar>
    <IonContent>
      <IonCard>
        <img src="https://via.placeholder.com/400x200" alt="Recipe Image" />
        <IonCardHeader>
          <IonCardSubtitle>Category</IonCardSubtitle>
          <IonCardTitle>Recipe Title</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Description of the recipe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </IonCardContent>
        <IonRouterLink href="/welcome">
          <IonButton expand="full">Back to Welcome</IonButton>
        </IonRouterLink>
        <IonRouterLink href="/settings">
          <IonButton expand="full">Go to Settings</IonButton>
        </IonRouterLink>
      </IonCard>
      {/* Additional recipe cards go here */}
    </IonContent>
  </IonPage>
);

export default RecipeCatalog;

