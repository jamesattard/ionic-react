import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun5() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

const Exercise5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 5 - Arithmetic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun5()}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise5;
