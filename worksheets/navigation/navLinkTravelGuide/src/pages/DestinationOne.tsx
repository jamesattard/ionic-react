import {
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import DestinationTwo from "./DestinationTwo";
import DestinationThree from "./DestinationThree";
import Welcome from "./Welcome";

const DestinationOne: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
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
            <IonNavLink routerDirection="forward" component={() => <Welcome />}>
              <IonButton size="small" fill="outline" className="ion-padding">
                Book Destination
              </IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Explore Other Attractions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonNavLink
              routerDirection="forward"
              component={() => <DestinationTwo />}
            >
              <IonButton fill="outline" color="danger" size="small">
                Go to Destination Two
              </IonButton>
            </IonNavLink>
            <IonNavLink
              routerDirection="forward"
              component={() => <DestinationThree />}
            >
              <IonButton fill="outline" color="danger" size="small">
                Go to Destination Three
              </IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default DestinationOne;
