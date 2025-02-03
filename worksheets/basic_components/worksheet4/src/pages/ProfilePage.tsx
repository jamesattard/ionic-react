import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* User's Profile Picture (Ionic Card) */}
        <IonCard>
          <img src="https://placehold.co/600x400" alt="Profile" />
          <IonCardHeader>
            <IonCardTitle>User's Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Brief Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </IonCardContent>
        </IonCard>

        {/* List of Favorite Hobbies (Ionic Buttons) */}
        <IonButton expand="full">Reading</IonButton>
        <IonButton expand="full">Hiking</IonButton>
        <IonButton expand="full">Photography</IonButton>
        {/* Responsive Grid for Photo Gallery */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <img src="https://placehold.co/200x50" alt="Gallery" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="https://placehold.co/200x50" alt="Gallery" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="https://placehold.co/200x50" alt="Gallery" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
