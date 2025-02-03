import React from "react";
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* Task 1: Create a responsive grid with more columns */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <IonCard>
                <IonCardContent className="custom-styling">
                  <h2>Column 1</h2>
                  <p>
                    This is a responsive column for small, medium, and large
                    screens.
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" size-md="6" size-lg="4">
              <IonCard>
                <IonCardContent>
                  <h2>Column 2</h2>
                  <p>Another responsive column with different sizes.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" size-md="6" size-lg="4">
              <IonCard>
                <IonCardContent>
                  <h2>Column 3</h2>
                  <p>This column adjusts based on the screen size.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Task 2: Use color themes */}
        <>
          <IonContent color="primary" className="ion-padding">
            <h1>Primary content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="secondary" className="ion-padding">
            <h1>Secondary content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="tertiary" className="ion-padding">
            <h1>Tertiary content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="success" className="ion-padding">
            <h1>Success content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="warning" className="ion-padding">
            <h1>Warning content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="danger" className="ion-padding">
            <h1>Danger content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="light" className="ion-padding">
            <h1>Light content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="medium" className="ion-padding">
            <h1>Medium content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
          <IonContent color="dark" className="ion-padding">
            <h1>Dark content</h1>
            <p>
              Here's a small text description for the content. Nothing more,
              nothing less.
            </p>
          </IonContent>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Home;
