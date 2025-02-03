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

import Welcome from "./Welcome";
import DestinationOne from "./DestinationOne";
import DestinationTwo from "./DestinationTwo";

const DestinationThree: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Destination Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Destination Three</h1>
        <IonCard>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Destination Three"
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
              component={() => <DestinationOne />}
            >
              <IonButton fill="outline" color="danger" size="small">
                Go to Destination One
              </IonButton>
            </IonNavLink>
            <IonNavLink
              routerDirection="forward"
              component={() => <DestinationTwo />}
            >
              <IonButton fill="outline" color="danger" size="small">
                Go to Destination Two
              </IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default DestinationThree;
