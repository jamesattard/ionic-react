import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const RecipeAppHomepage: React.FC = () => {
  const featuredRecipes = [
    { id: 1, title: 'Spaghetti Carbonara', image: 'path/to/spaghettiCarbonara.jpg' },
    { id: 2, title: 'Avocado Toast', image: 'path/to/avocadoToast.jpg' },
    { id: 3, title: 'Chocolate Chip Cookies', image: 'path/to/chocolateChipCookies.jpg' },
  ];

  const recipeCategories = ['Italian', 'Breakfast', 'Desserts'];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of Featured Recipe Cards */}
        {featuredRecipes.map((recipe) => (
          <IonCard key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <IonCardHeader>
              <IonCardTitle>{recipe.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton expand="full">View Recipe</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Responsive Grid for Recipe Categories */}
        <IonGrid>
          <IonRow>
            {recipeCategories.map((category) => (
              <IonCol size="12" size-md="4" key={category}>
                <IonButton expand="full">{category}</IonButton>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Search Button */}
        <IonButton expand="full">Search</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RecipeAppHomepage;
