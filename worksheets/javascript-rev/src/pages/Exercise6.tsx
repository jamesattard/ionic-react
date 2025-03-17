import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun6(arr: number[]) {
  let reversedArray = [];

  // Traditional n00b method
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i];
  }

  // // Push method
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   reversedArray.push(arr[i]);
  // }
  return reversedArray;
}

const Exercise6: React.FC = () => {
  let originalArray = [1, 2, 3, 4, 5];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 6 - Arrays</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun6(originalArray)}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise6;
