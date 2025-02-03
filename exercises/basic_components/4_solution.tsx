import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const SocialMediaFeed: React.FC = () => {
  const posts = [
    { id: 1, username: 'user1', content: 'Amazing day at the beach!', media: 'path/to/beach.jpg' },
    { id: 2, username: 'user2', content: 'Exploring the city streets.', media: 'path/to/city.jpg' },
    { id: 3, username: 'user3', content: 'Delicious homemade dinner tonight.', media: 'path/to/dinner.jpg' },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of Post Cards */}
        {posts.map((post) => (
          <IonCard key={post.id}>
            <img src={post.media} alt="Post" />
            <IonCardHeader>
              <IonCardTitle>{post.username}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{post.content}</p>
              <IonButton expand="full">Like</IonButton>
              <IonButton expand="full">Comment</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Responsive Grid for Additional Media Content */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <img src="path/to/additionalMedia1.jpg" alt="Additional Media" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/additionalMedia2.jpg" alt="Additional Media" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/additionalMedia3.jpg" alt="Additional Media" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SocialMediaFeed;
