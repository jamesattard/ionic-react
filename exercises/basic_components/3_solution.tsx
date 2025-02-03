import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

const ProductCatalogPage: React.FC = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$19.99', category: 'Electronics', image: 'path/to/productA.jpg' },
    { id: 2, name: 'Product B', price: '$29.99', category: 'Clothing', image: 'path/to/productB.jpg' },
    { id: 3, name: 'Product C', price: '$39.99', category: 'Home & Garden', image: 'path/to/productC.jpg' },
  ];

  const categories = ['Electronics', 'Clothing', 'Home & Garden'];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* List of Product Cards */}
        {products.map((product) => (
          <IonCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <IonCardHeader>
              <IonCardTitle>{product.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Price: {product.price}</p>
              <IonButton expand="full">View Details</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Responsive Grid for Categories */}
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

export default ProductCatalogPage;
