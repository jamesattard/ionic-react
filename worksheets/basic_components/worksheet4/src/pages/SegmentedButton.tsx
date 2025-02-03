import { IonPage, IonSegment, IonSegmentButton } from "@ionic/react";

const SegmentedButton: React.FC = () => {
  return (
    <IonPage>
      <IonSegment>
        <IonSegmentButton value="segment1">Segment 1</IonSegmentButton>
        <IonSegmentButton value="segment2">Segment 2</IonSegmentButton>
      </IonSegment>
    </IonPage>
  );
};

export default SegmentedButton;
