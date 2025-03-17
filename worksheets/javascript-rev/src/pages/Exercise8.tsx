import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun8(arr: number[]) {
  let uniqueArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const Exercise8: React.FC = () => {
  let numbers = [1, 2, 3, 2, 1, 4, 5, 4];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 8 - Duplicates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun8(numbers)}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise8;
