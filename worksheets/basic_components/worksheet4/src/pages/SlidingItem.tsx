import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList,
  IonPage,
} from "@ionic/react";

const SlidingItem: React.FC = () => {
  return (
    <IonPage>
      <IonList>
        <IonItemSliding>
          <IonItem>Slide me left or right</IonItem>
          <IonItemOptions side="start">
            <IonItemOption color="danger">Delete</IonItemOption>
          </IonItemOptions>
          <IonItemOptions side="end">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </IonPage>
  );
};

export default SlidingItem;
