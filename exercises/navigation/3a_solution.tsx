// App.tsx
import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { planet, globe, informationCircle } from 'ionicons/icons';
import WelcomeScreen from './pages/WelcomeScreen';
import TravelDestinations from './pages/TravelDestinations';
import TravelTips from './pages/TravelTips';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Welcome Screen */}
        <Route path="/welcome" component={WelcomeScreen} exact />

        {/* Travel Destinations */}
        <Route path="/destinations" component={TravelDestinations} exact />

        {/* Travel Tips */}
        <Route path="/tips" component={TravelTips} exact />

        {/* Redirect to Welcome Screen by default */}
        <Redirect exact from="/" to="/welcome" />
      </IonRouterOutlet>

      {/* Tabs */}
      <IonTabs>
        <IonTabBar slot="bottom">
          {/* Welcome Tab */}
          <IonTabButton tab="welcome" href="/welcome">
            <IonIcon icon={planet} />
          </IonTabButton>

          {/* Destinations Tab */}
          <IonTabButton tab="destinations" href="/destinations">
            <IonIcon icon={globe} />
          </IonTabButton>

          {/* Tips Tab */}
          <IonTabButton tab="tips" href="/tips">
            <IonIcon icon={informationCircle} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

