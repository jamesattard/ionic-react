import { IonLabel, IonPage, IonRange } from "@ionic/react";

const RangeSlider: React.FC = () => {
  return (
    <IonPage>
      <IonRange min={0} max={100} step={1} snaps={true} pin={true}>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">100</IonLabel>
      </IonRange>
    </IonPage>
  );
};

export default RangeSlider;
