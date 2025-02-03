import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router";

import { playCircle, radio, library, search } from "ionicons/icons";

import Home from "./Home";
import Radio from "./Radio";
import Library from "./Library";
import Search from "./Search";

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/radio">
          <Radio />
        </Route>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={playCircle} />
          <IonLabel>Listen now</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/radio">
          <IonIcon icon={radio} />
          <IonLabel>Radio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/library">
          <IonIcon icon={library} />
          <IonLabel>Library</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
