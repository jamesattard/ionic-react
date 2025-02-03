import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonNav,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DestinationOne from "./DestinationOne";
import DestinationTwo from "./DestinationTwo";
import DestinationThree from "./DestinationThree";

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
          <IonNavLink
            routerDirection="forward"
            component={() => <DestinationOne />}
          >
            <IonButton color="warning">Go to Destination One</IonButton>
          </IonNavLink>
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
          <IonNavLink
            routerDirection="forward"
            component={() => <DestinationTwo />}
          >
            <IonButton color="warning">Go to Destination Two</IonButton>
          </IonNavLink>
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
          <IonNavLink
            routerDirection="forward"
            component={() => <DestinationThree />}
          >
            <IonButton color="warning">Go to Destination Three</IonButton>
          </IonNavLink>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
