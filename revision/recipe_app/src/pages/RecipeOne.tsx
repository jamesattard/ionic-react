// pages/RecipeDetail.tsx
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
  IonMenuButton,
  IonButtons,
} from "@ionic/react";

const RecipeOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pasta Carbonara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>Recipe Name:</IonLabel>
            Pasta Carbonara
          </IonItem>
          <IonItem>
            <IonLabel>Ingredients:</IonLabel>
            Spaghetti, bacon, eggs, Parmesan cheese, black pepper
          </IonItem>
          <IonItem>
            <IonLabel>Instructions:</IonLabel>
            <ol>
              <li>Cook pasta according to package instructions.</li>
              <li>Fry bacon until crispy.</li>
              <li>Mix eggs and cheese, then toss with hot pasta.</li>
              <li>Add bacon and pepper, serve immediately.</li>
            </ol>
          </IonItem>
          {/* Add more details as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RecipeOne;
