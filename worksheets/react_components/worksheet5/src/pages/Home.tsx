import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonAlert } from "@ionic/react";

const DisplayAlertBox = () => {
  // Step 1: Initialize state for alert visibility
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Step 2: Create a function to handle button click and show the alert
  const handleButtonClick = () => {
    setShowAlert(true);
  };

  // Step 3: Create a function to handle alert dismissal
  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* Step 4: Create a button to trigger the alert */}
        <IonButton expand="full" onClick={handleButtonClick}>
          Show Alert
        </IonButton>

        {/* Step 5: Use IonAlert component */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={handleAlertDismiss}
          header="Alert Header"
          subHeader="Subtitle"
          message="This is an Ionic alert dialog. Press OK to dismiss."
          buttons={["Cancel", "OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default DisplayAlertBox;
