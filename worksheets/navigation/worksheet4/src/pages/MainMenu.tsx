import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const MainMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonRouterLink routerLink="/home">
            <IonItem>
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink routerLink="/radio">
            <IonItem>
              <IonLabel>Radio</IonLabel>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink routerLink="/library">
            <IonItem>
              <IonLabel>Library</IonLabel>
            </IonItem>
          </IonRouterLink>
          <IonRouterLink routerLink="/search">
            <IonItem>
              <IonLabel>Search</IonLabel>
            </IonItem>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MainMenu;
