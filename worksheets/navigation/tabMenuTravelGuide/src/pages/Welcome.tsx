import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Travel Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="danger">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Destination One"
          />
          <IonCardHeader>
            <IonCardTitle>Destination One</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Explore the exotic wonders of Destination One!
          </IonCardContent>
        </IonCard>

        <IonCard color="danger">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Destination Two"
          />
          <IonCardHeader>
            <IonCardTitle>Destination Two</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Explore the wildlife of Destination Two!
          </IonCardContent>
        </IonCard>

        <IonCard color="danger">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Destination Three"
          />
          <IonCardHeader>
            <IonCardTitle>Destination Three</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Explore the historical valleys of Destination Three!
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
