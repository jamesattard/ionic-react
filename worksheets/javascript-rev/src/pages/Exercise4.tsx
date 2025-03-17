import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun4(n: number) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  return str;
}

const Exercise4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 4 - Loops</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun4(5)}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise4;
