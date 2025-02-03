import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const NewsFeedPage: React.FC = () => {
  const articles = [
    { id: 1, title: 'Tech Trends 2022', summary: 'Explore the latest trends in technology for 2022.', image: 'path/to/techTrends.jpg' },
    { id: 2, title: 'Healthy Recipes for Summer', summary: 'Discover delicious and nutritious recipes for a healthy summer.', image: 'path/to/recipes.jpg' },
    { id: 3, title: 'Space Exploration Update', summary: 'Updates on recent space exploration missions and discoveries.', image: 'path/to/spaceExploration.jpg' },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of News Article Cards */}
        {articles.map((article) => (
          <IonCard key={article.id}>
            {article.image && <img src={article.image} alt={article.title} />}
            <IonCardHeader>
              <IonCardTitle>{article.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{article.summary}</p>
              <IonButton expand="full">Read More</IonButton>
              <IonButton expand="full">Bookmark</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Responsive Grid for Article Images */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <img src="path/to/relatedImage1.jpg" alt="Related Image" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/relatedImage2.jpg" alt="Related Image" />
            </IonCol>
            <IonCol size="12" size-md="4">
              <img src="path/to/relatedImage3.jpg" alt="Related Image" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewsFeedPage;
