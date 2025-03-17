import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun9(numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const Exercise9: React.FC = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 8 - Sum Even</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun9(numbers)}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise9;
