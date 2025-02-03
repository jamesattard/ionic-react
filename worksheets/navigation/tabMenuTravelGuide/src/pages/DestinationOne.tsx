import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";

const DestinationOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Destination One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Destination One</h1>
        <IonCard>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Destination One"
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
};

export default DestinationOne;
