import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun3() {
  let fruits: string[] = ["apple", "banana", "orange"];
  let str = "";
  for (let i = 0; i < fruits.length; i++) {
    str += fruits[i] + " ";
  }
  return str;
}

const Exercise3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 3 - Loops</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun3()}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise3;
