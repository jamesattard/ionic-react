// pages/Home.tsx
import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { restaurant } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Recipe App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonCard button routerLink="/recipe1">
            <img src="https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=1024x1024&w=is&k=20&c=zYqC1qqE1U_kxMzu8PW_07zYP4dUcQeuivkSHX4pnH4=" />
            <IonCardHeader>
              <IonCardTitle>Pasta Carbonara</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Creamy Italian pasta dish with bacon and eggs.
              <IonIcon icon={restaurant} slot="end" />
            </IonCardContent>
          </IonCard>
          <IonCard button routerLink="/recipe2">
            <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3494.jpg" />
            <IonCardHeader>
              <IonCardTitle>Tacos al Pastor</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Authentic Mexican tacos with marinated pork.
              <IonIcon icon={restaurant} slot="end" />
            </IonCardContent>
          </IonCard>
          {/* Add more recipe cards as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
