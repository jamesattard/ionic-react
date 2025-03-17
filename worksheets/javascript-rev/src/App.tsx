import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import Exercise7 from "./pages/Exercise7";
import Exercise8 from "./pages/Exercise8";
import Exercise9 from "./pages/Exercise9";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={Exercise1} path="/exercise1" exact />
        <Route component={Exercise2} path="/exercise2" exact />
        <Route component={Exercise3} path="/exercise3" exact />
        <Route component={Exercise4} path="/exercise4" exact />
        <Route component={Exercise5} path="/exercise5" exact />
        <Route component={Exercise6} path="/exercise6" exact />
        <Route component={Exercise7} path="/exercise7" exact />
        <Route component={Exercise8} path="/exercise8" exact />
        <Route component={Exercise9} path="/exercise9" exact />
        <Route exact path="/">
          <Redirect to="/exercise1" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
