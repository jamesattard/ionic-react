import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun2(string1: string, string2: string) {
  let str = string1 + " and " + string2;
  return str;
}

const Exercise2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 2 - Fun Params</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun2("first string", "second string")}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise2;
