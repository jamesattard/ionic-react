import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

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

/* User Pages */
import SegmentedButton from "./pages/SegmentedButton";
import RangeSlider from "./pages/RangeSlider";
import SlidingItem from "./pages/SlidingItem";
import SlidingAdvanced from "./pages/SlidingAdvanced";
import ProfilePage from "./pages/ProfilePage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/segmented-button">
          <SegmentedButton />
        </Route>
        <Route exact path="/sliding-item">
          <SlidingItem />
        </Route>
        <Route exact path="/range-slider">
          <RangeSlider />
        </Route>
        <Route exact path="/sliding-advanced">
          <SlidingAdvanced />
        </Route>
        <Route exact path="/profile-page">
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
