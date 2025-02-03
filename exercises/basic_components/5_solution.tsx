import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const EventSchedulePage: React.FC = () => {
  const events = [
    { id: 1, title: 'Conference 2022', date: '2022-08-15', time: '10:00 AM', category: 'Conference' },
    { id: 2, title: 'Workshop: React Basics', date: '2022-08-16', time: '02:00 PM', category: 'Workshop' },
    { id: 3, title: 'Networking Mixer', date: '2022-08-17', time: '07:00 PM', category: 'Networking' },
  ];

  const categories = ['Conference', 'Workshop', 'Networking'];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of Event Cards */}
        {events.map((event) => (
          <IonCard key={event.id}>
            <IonCardHeader>
              <IonCardTitle>{event.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <IonButton expand="full">Details</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Responsive Grid for Event Categories */}
        <IonGrid>
          <IonRow>
            {categories.map((category) => (
              <IonCol size="12" size-md="4" key={category}>
                <IonButton expand="full">{category}</IonButton>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Filter Button */}
        <IonButton expand="full">Filter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EventSchedulePage;
