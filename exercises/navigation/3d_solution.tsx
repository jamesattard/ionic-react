// pages/TravelTips.tsx
import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { bulb } from 'ionicons/icons';

const TravelTips: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      <h2>Travel Tips for an Amazing Journey</h2>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Tip #1</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Pack versatile clothing items to be ready for various weather conditions.
        </IonCardContent>
        <IonIcon icon={bulb} slot="start" />
      </IonCard>

      {/* Additional travel tips cards go here */}
    </IonContent>
  </IonPage>
);

export default TravelTips;
