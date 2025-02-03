import {
  IonButton,
  IonCheckbox,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { heart } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Task 1: Create a simple Ionic button */}
      <IonButton>Click me</IonButton>
      {/* Task 2: Add an icon to the button */}
      <IonButton>
        <IonIcon icon={heart}></IonIcon>
        Like
      </IonButton>
      {/* Task 3: Create an input field with a label */}
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      {/* Task 4: Add a checkbox */}
      <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
    </IonPage>
  );
};

export default Home;
