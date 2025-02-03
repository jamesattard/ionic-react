// App.tsx
import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { home, barChart } from 'ionicons/icons';
import WelcomeScreen from './pages/WelcomeScreen';
import WorkoutTracking from './pages/WorkoutTracking';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Welcome Screen */}
        <Route path="/welcome" component={WelcomeScreen} exact />

        {/* Workout Tracking */}
        <Route path="/workout" component={WorkoutTracking} exact />

        {/* Redirect to Welcome Screen by default */}
        <Redirect exact from="/" to="/welcome" />
      </IonRouterOutlet>

      {/* Tabs */}
      <IonTabs>
        <IonTabBar slot="bottom">
          {/* Welcome Tab */}
          <IonTabButton tab="welcome" href="/welcome">
            <IonIcon icon={home} />
          </IonTabButton>

          {/* Workout Tab */}
          <IonTabButton tab="workout" href="/workout">
            <IonIcon icon={barChart} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

