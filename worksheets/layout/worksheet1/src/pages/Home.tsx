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
        {/* Task 1: Create a basic Ionic page structure */}
        <div className="ion-padding">
          <h1>Welcome to Ionic Layouts</h1>
          <p>Explore the power of Ionic layouts and CSS!</p>
        </div>

        {/* Task 2: Create a responsive grid */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardContent>
                  <h2>Column 1</h2>
                  <p>This is a responsive column.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardContent>
                  <h2>Column 2</h2>
                  <p>Another responsive column.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Task 3: Apply basic CSS styling */}
        <div className="custom-styling">
          <h2>Styled Section</h2>
          <p>This section has custom styling applied.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
