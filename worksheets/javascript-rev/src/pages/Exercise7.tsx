import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function myFun7(numbers: number[]) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const Exercise7: React.FC = () => {
  let numbers = [10, 5, 20, 8, 15];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exercise 7 - Max Num</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText className="text-wrap" style={{ whiteSpace: "pre-wrap" }}>
          {myFun7(numbers)}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Exercise7;
