// pages/WorkoutTracking.tsx
import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonRouterLink, IonTabs, IonTab, IonTabButton } from '@ionic/react';

const WorkoutTracking: React.FC = () => (
  <IonPage>
    <IonTabs>
      <IonTabBar slot="top">
        {/* Exercise Log Tab */}
        <IonTabButton tab="log" href="/workout/log">
          Exercise Log
        </IonTabButton>

        {/* Progress Tab */}
        <IonTabButton tab="progress" href="/workout/progress">
          Progress
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    <IonContent>
      <IonCard>
        <img src="https://via.placeholder.com/400x200" alt="Exercise Image" />
        <IonCardHeader>
          <IonCardSubtitle>Category</IonCardSubtitle>
          <IonCardTitle>Exercise Title</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Description of the exercise. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </IonCardContent>
        <IonRouterLink href="/welcome">
          <IonButton expand="full">Back to Welcome</IonButton>
        </IonRouterLink>
      </IonCard>
      {/* Additional exercise cards go here */}
    </IonContent>
  </IonPage>
);

export default WorkoutTracking;
