// pages/TravelDestinations.tsx
import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon } from '@ionic/react';
import { compass, airplane } from 'ionicons/icons';

const TravelDestinations: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <h2>Explore Exciting Destinations</h2>
      <IonList>
        <IonItem>
          <IonCard>
            <img src="https://via.placeholder.com/400x200" alt="Destination Image" />
            <IonCardHeader>
              <IonCardSubtitle>City</IonCardSubtitle>
              <IonCardTitle>Cityscape Adventure</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Discover the vibrant energy of urban life in this bustling city.
            </IonCardContent>
          </IonCard>
          <IonIcon icon={compass} slot="start" />
        </IonItem>

        {/* Additional destination cards go here */}
      </IonList>
    </IonContent>
  </IonPage>
);

export default TravelDestinations;
