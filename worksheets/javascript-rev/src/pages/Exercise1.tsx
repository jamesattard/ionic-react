import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun1() {
  let str = "Hello World!" + "\n" + "This is my string";
  return str;
}

const Exercise1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 1 - Strings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun1()}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise1;
