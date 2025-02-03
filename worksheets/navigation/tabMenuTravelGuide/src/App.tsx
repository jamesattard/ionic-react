import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { home, boat, airplane, beer } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Pages */
import Welcome from "./pages/Welcome";
import DestinationOne from "./pages/DestinationOne";
import DestinationTwo from "./pages/DestinationTwo";
import DestinationThree from "./pages/DestinationThree";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/destination-one">
            <DestinationOne />
          </Route>
          <Route exact path="/destination-two">
            <DestinationTwo />
          </Route>
          <Route exact path="/destination-three">
            <DestinationThree />
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/welcome">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="boat" href="/destination-one">
            <IonIcon icon={boat} />
            <IonLabel>Dest One</IonLabel>
          </IonTabButton>

          <IonTabButton tab="airplane" href="/destination-two">
            <IonIcon icon={airplane} />
            <IonLabel>Dest Two</IonLabel>
          </IonTabButton>

          <IonTabButton tab="beer" href="/destination-three">
            <IonIcon icon={beer} />
            <IonLabel>Dest Three</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
