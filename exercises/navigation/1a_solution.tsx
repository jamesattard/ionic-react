// App.tsx
import React from 'react';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonRouterLink } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import RecipeCatalog from './pages/RecipeCatalog';
import SettingsScreen from './pages/SettingsScreen';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Welcome Screen */}
        <Route path="/welcome" component={WelcomeScreen} exact />

        {/* Recipe Catalog */}
        <Route path="/recipes" component={RecipeCatalog} exact />

        {/* Settings Screen */}
        <Route path="/settings" component={SettingsScreen} exact />

        {/* Redirect to Welcome Screen by default */}
        <Redirect exact from="/" to="/welcome" />
      </IonRouterOutlet>

      {/* Side Menu */}
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/welcome">
              <IonRouterLink>Home</IonRouterLink>
            </IonItem>
            <IonItem routerLink="/settings">
              <IonRouterLink>Settings</IonRouterLink>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

