import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const NotificationFeedPage: React.FC = () => {
  const notifications = [
    { id: 1, title: 'New Message', description: 'You have a new message from a friend.', timestamp: '2 hours ago' },
    { id: 2, title: 'Event Reminder', description: 'Reminder: Event starts in 1 hour.', timestamp: '1 day ago' },
    { id: 3, title: 'Photo Tag', description: 'You were tagged in a photo.', timestamp: '3 days ago' },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of Notifications (Ionic Cards) */}
        {notifications.map((notification) => (
          <IonCard key={notification.id}>
            <IonCardHeader>
              <IonCardTitle>{notification.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{notification.description}</p>
              <p>{notification.timestamp}</p>
            </IonCardContent>
            <IonButton expand="full">Mark as Read</IonButton>
          </IonCard>
        ))}

        {/* Responsive Grid for Images */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <img src="path/to/image1.jpg" alt="Notification" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/image2.jpg" alt="Notification" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/image3.jpg" alt="Notification" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NotificationFeedPage;
