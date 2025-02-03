import React, { useState } from "react";
import {
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonContent,
  IonPage,
} from "@ionic/react";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSlideObj = (slideObj: Record<string, number>) => {
    console.log("Sliding Ratio: ", slideObj.ratio);
    if (slideObj.ratio > 0) {
      setMessage("Sliding direction: Left");
    } else {
      setMessage("Sliding direction: Right");
    }
  };

  const handleClick = (direction: string) => {
    console.log("Clicking direction: ", direction);
    setMessage(`Clicking direction: ${direction}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItemSliding onIonDrag={(e) => handleSlideObj(e.detail)}>
            <IonItem>
              <IonLabel>Slide me left or right</IonLabel>
            </IonItem>
            <IonItemOptions side="start">
              <IonItemOption
                color="danger"
                onClick={() => handleClick("start")}
              >
                Delete
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
              <IonItemOption color="success" onClick={() => handleClick("end")}>
                Archive
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
