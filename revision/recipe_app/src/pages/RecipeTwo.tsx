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

const RecipeTwo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tacos el Pastor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>Recipe Name:</IonLabel>
            Tacos al Pastor
          </IonItem>
          <IonItem>
            <IonLabel>Ingredients:</IonLabel>
            Boneless pork shoulder, chili, garlic, vinegar, salt, pepper
          </IonItem>
          <IonItem>
            <IonLabel>Instructions:</IonLabel>
            <ol>
              <li>Slice pork shoulder in 1cm slices.</li>
              <li>Add chili, garlic, vinegar, salt and pepper.</li>
              <li>Preheat oven to 180C.</li>
              <li>Bake for about 1.5h.</li>
            </ol>
          </IonItem>
          {/* Add more details as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RecipeTwo;
